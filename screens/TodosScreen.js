import React from 'react'
import tw from "tailwind-react-native-classnames"
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { complete } from '../slices/todosSlice'
import { Button } from 'react-native-elements'

const TodosScreen = ({navigation}) => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()
    
    return (
        <View>
            <FlatList data={todos} renderItem={({item}) => (
                <View style={tw`flex`}>
                    <CheckBox checked={item.completed} title={item.title} onPress={() => {
                        dispatch(complete(item.id))
                    }}></CheckBox>
                </View>
            )} ></FlatList>
            <View style={tw`rounded mx-auto text-center m-4`}>
            <Button buttonStyle={tw`mx-auto`} onPress={() => navigation.navigate('AddTodo')} title="Add Todo" />
            </View>        
        </View>
    )
}

export default TodosScreen

const styles = StyleSheet.create({})
