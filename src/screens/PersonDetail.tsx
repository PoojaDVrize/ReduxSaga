import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchUsersRequest } from '../redux/reducers/userSlice'
import { changeTitle, sendPostsRequest } from '../redux/reducers/postSlice'

const PersonDetail = () => {
    const user = useAppSelector(state => state.user);
    const post = useAppSelector(state => state.post);
    const dispatch = useAppDispatch();

    //const [title, setTitle] = useState<string>('');

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, []);

    function onClickPostRequest() {
        dispatch(sendPostsRequest());
    }

    return (
        <View style={styles.container}>
            {user.loading && <Text style={styles.text} >Loading...</Text>}
            {!user.loading && user.error ? <Text style={styles.text}>Error: {user.error}</Text> : null}
            {!user.loading && user.users.length ? (
                <View>
                    {user.users.map(user => (
                        <Text style={styles.text} key={user.id}>{user.name}</Text>
                    ))}
                </View>
            ) : null}

            <TouchableOpacity style={styles.buttonContainer} onPress={onClickPostRequest}>
                <Text style={styles.text}>Post Request</Text>
            </TouchableOpacity>

            {post.loading && <Text style={styles.text} >Loading...</Text>}
            {!post.loading && post.error ? <Text style={styles.text}>Error: {post.error}</Text> : null}
            {!post.loading && post.post.id ? (
                <View>
                    <Text style={styles.text}>Id: {post.post.id}</Text>
                    <Text style={styles.text}>Body: {post.post.body}</Text>
                    <Text style={styles.text}>User Id: {post.post.userId}</Text>
                    <Text style={styles.text}>Title: {post.post.title}</Text>
                    {/* {title ?
                        <Text style={styles.text}>Title: {title}</Text>
                        : <Text style={styles.text}>Title: {post.post.title}</Text>
                    } */}
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => dispatch(changeTitle("New Title 3"))}>
                        <Text style={styles.text}>Change Title</Text>
                    </TouchableOpacity>
                </View>
            ) : null}

        </View>
    )
}

export default PersonDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
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