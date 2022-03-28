import React from 'react'
import { Text } from 'react-native'
import Container from '../components/Container'
import Contents from '../components/Contents'
import Button from '../components/Button'
import styled from 'styled-components/native'
import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px 0;
    border-bottom-color: #aaaaaa;
    border-bottom-width: 1px;
`;
const Label = styled.Text`
    font-size: 20px;
`;

function List( { navigation } ) {
    const [ list, setList ] = React.useState( [] );
    const load = async() => {
        const data = await AsyncStorage.getItem( 'list' )
        if( data !== null )
        {
            setList( JSON.parse(data) )
        }
    }
    React.useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            load();
        })

        load();
        return unsubscribe;
    }, [navigation])
    
    return (
        <Container>
            <Contents>
                {_.sortBy(list, 'date').map( item => {
                    return(
                        <ListItem key={ item.date }
                            onPress={ () => navigation.navigate( 'Detail',  {date:item.date} )}
                        >
                            <Label>{item.date}</Label>
                        </ListItem>
                    )
                })                }
            </Contents>
            <Button onPress={ () => { navigation.navigate( 'Form' ) } }>
                새 일기 작성
            </Button>
            

            { /*
            <Text>List</Text>
            <Button title="상세 페이지로"
                onPress={ () => { navigation.navigate( 'Detail' ) } }>
            </Button>
            <Button title="작성 페이지로"
                onPress={ () => { navigation.navigate( 'Form' ) } }>
            </Button>
            */ }
        </Container>
    )
}


export default List;
