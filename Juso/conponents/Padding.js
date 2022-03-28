import React from 'react'
import { View } from 'react-native'

export default function Padding( { children, padding, style } ) {       // style: 외부에서 props로 가져온 것
    return (
        <View style={ [ { padding: padding ?? 20 }, style ] }>     
            { children }
        </View>
    )
}
/*
padding: padding ?? 20
    padding이 null이나 undefined 일때 20으로 지정 아니면 padding 값 지정
*/
