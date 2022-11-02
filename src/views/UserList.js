import React from "react";
import { Alert, Text } from "react-native"
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { View } from "react-native"
import { FlatList, } from "react-native-web";
import users from "../data/users"

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Tem certeza que deseja excluir este usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.log('delete' + user.name)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name="edit" size={25} color='orange'/>}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name="delete" size={25} color='red'/>}
                />
            </>
        )
    }

    const GetUserItemTry = function getUserItem({ item: user }) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
                
            >
                <Avatar source={ { uri: user.avatarUrl } } />
                <ListItem.Content>
                    <ListItem.Title>{ user.name }</ListItem.Title>
                    <ListItem.Subtitle>{ user.email }</ListItem.Subtitle>
                </ListItem.Content>
                {getActions(user)}
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={GetUserItemTry}
            />
        </View>
    )
}