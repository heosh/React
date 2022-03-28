import React, { useState, useCallback, useEffect } from 'react'
import { Button, StyleSheet, Text, TextInput } from 'react-native';
import Row from '../components/Row';

function Exchange() {
    const [bat, setBat] = useState('')
    const [krw, setKrw] = useState('')
    const [rate, setRate] = useState('')

    /*
    useEffect( () => {
        //console.log(usd * exchangeRate)
        setKrw(usd * exchangeRate)
    }, [usd] )
    */

    const exchange = () => {
        console.log(bat * rate)
        setKrw(bat * rate)
    }
    

    return (
        <>
            <Row><Text>YJ 허승희</Text></Row>
            <Row>
                <Text style={ styles.text }>오늘의 환율</Text>
                <TextInput
                    style={ [styles.input,{ flex:4 }] }
                    //keyboardType="numeric"
                    value={ rate }
                    onChangeText={ value => setRate(value)}
                >
                </TextInput>   
            </Row>
            <Row>
                <Text style={ styles.text }>BAT</Text>
                <TextInput
                    style={ [styles.input,{ flex:4 }] }
                    //keyboardType="numeric"
                    value={ bat }
                    onChangeText={ value => setBat(value)}
                >
                </TextInput>   
            </Row>
            <Row style={ {padding:10, justifyContent:'center'} }>
                {/* <Text>↑↓</Text> */}
                <Button title='환전' onPress={ exchange } ></Button>
            </Row>
            <Row>
                <Text style={ styles.text }>KRW</Text>
                <TextInput
                    style={ [styles.input,{ flex:4 }] }
                    value={ `${krw}` }
                    //keyboardType="numeric"
                    // onChangeText={ value => setKrw( value )}
                >
                </TextInput>   
            </Row>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#666',
        borderWidth: 1,
        padding: 5,
    },
    text:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        textAlignVertical:'center',
        textAlign:'center'
    }
})

export default Exchange
