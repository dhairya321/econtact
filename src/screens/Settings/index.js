import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

const Settings = () => {

    const [email, setEmail] = useState(null);

    const [modalVisible, setModalVisible] = useState(false);

    const [sortBy, setSortBy] = useState(null);


    const saveSetting = (key, value) => {

        AsyncStorage.setItem(key, value);
    }

    const settingOptions = [
        { title: 'My info', subTitle: 'Setup your profile', onPress: () => { } },
        { title: 'Accounts', subTitle: null, onPress: () => { } },
        { title: 'Default Account for new contact', subTitle: email, onPress: () => { } },
        { title: 'Sort by', subTitle: sortBy, onPress: () => { setModalVisible(true) } },
        { title: 'Name Format', subTitle: 'First Name first', onPress: () => { } },
        { title: 'Import', subTitle: null, onPress: () => { } },
        { title: 'Export', subTitle: null, onPress: () => { } },
        { title: 'Blocked contact', subTitle: null, onPress: () => { } },
        { title: 'About us', subTitle: null, onPress: () => { } },
    ];


    const prefArr = [
        {
            name: "First Name", selected: sortBy === 'First Name', onPress: () => {
                saveSetting('sortBy', 'First Name');
                setSortBy("First Name");
                setModalVisible(false);
            }
        },
        {
            name: "Last Name", selected: sortBy === 'Last Name', onPress: () => {
                saveSetting('sortBy', 'Last Name');
                setSortBy("Last Name");
                setModalVisible(false);
            }
        },

    ]

    const getSettings = async () => {
        const user = await AsyncStorage.getItem('user');

        setEmail(JSON.parse(user).email)

        const sortPref = await AsyncStorage.getItem('sortBy');

        if (sortPref) {
            setSortBy(sortPref);
        }

    };



    useEffect(() => {
        getSettings();
    }, []);

    return (
        <SettingsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            settingOptions={settingOptions}
            prefArr={prefArr}
        />
    );
};

export default Settings;