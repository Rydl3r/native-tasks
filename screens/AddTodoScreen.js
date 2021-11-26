import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../slices/todosSlice'

const AddTodoScreen = () => {
    const [query, setQuery] = useState("")
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    return (
        <View>
            <Text style={tw`text-xl mx-auto font-bold p-4`}>Add Todo</Text>
            <TextInput
            style={styles.input}
            placeholder="Input your todo"
            onChangeText={setQuery}
            value={query}
            />
            <View style={tw`rounded mx-auto text-center m-4`}>
                <Button buttonStyle={tw`mx-auto`} onPress={() => {
                    let newId = todos[todos.length-1].id + 1
                    let newTodo = {
                        title: query,
                        completed: false,
                        id: newId
                    }
                    dispatch(add(newTodo))
                    setQuery("")
                }} title="Add New Todo" />
            </View>  
        </View>
    )
}

export default AddTodoScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
      }
})
