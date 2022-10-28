import React from "react";
import { Text } from "react-native"
import { Avatar, ListItem } from "react-native-elements";
import { FlatList, View } from "react-native-web";
import users from "../data/users"

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                Avatar= {{uri: user.avatarUrl} }
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}