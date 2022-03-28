import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Platform, Button } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import _ from 'lodash'
import AsyncStorage  from '@react-native-async-storage/async-storage';  //앱의 저장소를 사용해서 내용이 안날라가도록함
import produce from 'immer';



const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex:1;
`;
const Contents = styled.ScrollView`
  flex:1;
  padding: 8px 24px;
`;
const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TodoItemText = styled.Text`
  font-size: 20px;
  flex:1;
`;
const TodoItemButton = styled.Button``;
const InputContainer = styled.View`
  flex-direction: row;
  padding: 8px 24px;
`;
const Input = styled.TextInput`
  border: 1px solid #e5e5e5;
  flex: 1;
`;
const Check = styled.TouchableOpacity`
  margin-right: 4px;
`;
const CheckIcon = styled.Text`
  font-size: 20px;
`;


export default function App() {
  const [list, setList] = React.useState( [] );
  const [inputTodo, setInputTodo] = React.useState( '' );

  React.useEffect( () => {
    AsyncStorage.getItem( 'list' )
    .then( data => {
      if( data !== null ){
        setList( JSON.parse( data ) )
      }
    })
    .catch( error => {
      alert( error.message )
    })
  }, []);

  const store = ( newList ) => {
    setList( newList );
    AsyncStorage.setItem( 'list', JSON.stringify( newList ));
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding':'height' }
      >
        <Contents>
          {list.map( item => {
            return (
              <TodoItem key={ item.id }>
                <Check onPress={ () => {
                  store( produce( list, draft => {
                    const index = list.indexOf( item );
                    draft[ index ].done = !list[ index ].done;
                  }))
                }}>
                <CheckIcon>
                  { item.done ? '💚' : '💙'}
                </CheckIcon>
                </Check>
                <TodoItemText>
                  { item.todo }
                </TodoItemText>
                <TodoItemButton
                  title="삭제"
                  onPress={ () => {
                    store( _.reject( list, element => element.id === item.id) )
                  }}
                >
                </TodoItemButton>
              </TodoItem>
            )
          })}
        </Contents>
        <InputContainer>
          <Input
            value={ inputTodo }
            onChangeText={ value => setInputTodo( value ) }
          />
          <Button
            title="전송"
            onPress={ () => {
              if( inputTodo === '' ) {
                return;
              }
              const newItem = {
                id: new Date().getTime().toString(),
                todo: inputTodo,
                done: false,
              }
              store( [
                ...list,
                newItem,
              ])
              setInputTodo( '' )
            }}
          />
        </InputContainer>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
