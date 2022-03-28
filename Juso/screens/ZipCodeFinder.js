import React, { useCallback, useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import axios from 'axios'
import Padding from '../conponents/Padding';
import Row from '../conponents/Row';
import AddressItem from '../conponents/AddressItem';

function ZipCodeFinder() {
    const [ keyword, setKeyword] = useState('');
    const [ list, setList ] = useState([]);
    const search = useCallback( () => {     //결과가 반환될 때 마다
        axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
            params: {
                confmKey:'devU01TX0FVVEgyMDIxMTIwMjIyMjk0NzExMTk4NjQ=',
                currentPage: 1,
                countPerPage: 100,
                keyword,
                resultType: 'json',
            }
        })
        .then( response => {
            console.log(response)
            setList( response.data.results.juso )
        })
        .catch ( console.warn )
    }, [keyword, list])

    return (
        <Padding style={ {flex:1} }>
            <Row>
                <TextInput 
                    style={ [styles.input,{ flex:1 }] }
                    value={ keyword }
                    onChangeText={ text => setKeyword( text )}
                />
                <Button title="검색" onPress={search} />
            </Row>

            <FlatList 
                data={ list }
                renderItem={ item => <AddressItem item={ item.item } />}
                /* <><Text>{`[${item.item.zipNo}] ${item.item.roadAddr}`}</Text></> */
                keyExtractor={ item => item.rnMgt + item.roadAddr }
                style={ {flex:1} }
            />
        </Padding>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#666',
        borderWidth: 1,
        padding: 5,
    }
})

export default ZipCodeFinder
