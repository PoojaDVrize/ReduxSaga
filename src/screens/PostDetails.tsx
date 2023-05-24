import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux-thunk/thunkHooks'
import { changeTitle, createPost } from '../redux-thunk/reducers/thunkPostSlice';

const PostDetails = () => {

    const post = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(createPost());
    }, []);
    return (
        <View style={styles.container}>
            {post.loading && <Text style={styles.text} >Loading...</Text>}
            {!post.loading && post.error ? <Text style={styles.text}>Error: {post.error}</Text> : null}
            {!post.loading && post.post.id ? (
                <View>
                    <Text style={styles.text}>Id: {post.post.id}</Text>
                    <Text style={styles.text}>Body: {post.post.body}</Text>
                    <Text style={styles.text}>User Id: {post.post.userId}</Text>
                    <Text style={styles.text}>Title: {post.post.title}</Text>
            
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => dispatch(changeTitle("New Title"))}>
                        <Text style={styles.text}>Change Title</Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </View>
    )
}

export default PostDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        color: '#000'
    },
    buttonContainer: {
        backgroundColor: 'orange',
        width: 200,
        height: 50,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    },
})