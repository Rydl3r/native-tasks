import React from 'react'
import tw from "tailwind-react-native-classnames"
import { FlatList, StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../slices/todosSlice'
import { Button, Icon } from 'react-native-elements'

const TodosScreen = ({ navigation }) => {
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <View>
            {todos.length === 0
                ? <Text style={tw`text-center p-3 font-bold text-lg`}>"No todos were found. Please try again"</Text>
                : <FlatList style={tw`p-3`} data={todos} renderItem={({ item }) => (
                    <View style={tw`flex flex-row justify-center p-3 rounded-lg bg-white my-2`}>
                        <BouncyCheckbox fillColor="rgb(32, 137, 220)" isChecked={item.completed} onPress={() => {
                            dispatch(completeTodo(item.id))
                        }} />
                        <Text style={item.completed ? tw`mr-auto line-through` : tw`mr-auto`}>{item.title}</Text>
                        <Button buttonStyle={tw`ml-auto p-2 py-0`} title="-" onPress={() => {
                            dispatch(deleteTodo(item.id))
                        }} />
                    </View>
                )} />
            }
            <View style={tw`rounded mx-auto text-center m-4`}>
                <Button buttonStyle={tw`mx-auto`} onPress={() => navigation.navigate('AddTodo')} title="Add Todo" />
            </View>
        </View>
    )
}

export default TodosScreen

const styles = StyleSheet.create({})
