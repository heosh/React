import React from 'react'
import { Button } from 'react-native'
import Container from '../components/Container'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native'
import Contents from '../components/Contents';

const Text = styled.Text`
    font-size: 20px;
    line-height: 28px;
`;

function Detail( { navigation, route } ) {
    console.log(route.params)
    navigation.setOptions( {title: route.params.date} )
    const [text, setText] = React.useState( '' )

    React.useEffect( ()=>{
        AsyncStorage.getItem('list')
        .then( data => {
            const list = JSON.parse( data )
            const diary = list.find( element => element.date === route.params.date )
            setText(diary.text)
        })
    }, [])

    return (
        <Container>
            <Contents>
                <Text>{ text }</Text>
            </Contents>
            {/*
            <Button title="목록 페이지로"
                onPress={ () => { navigation.goBack() } }>

            </Button>
            */}
        </Container>
    )
}


export default Detail;
