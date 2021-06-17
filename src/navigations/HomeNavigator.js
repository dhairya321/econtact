import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, LOGOUT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetail';
import Settings from '../screens/Settings';
import CreateContact from '../screens/CreateContact';
import Logout from '../screens/Logout';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
            <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>

        </HomeStack.Navigator>
    );
};

export default HomeNavigator;