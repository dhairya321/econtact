import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/ContactsComponent";
import { GlobalContext } from '../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../../navigations/SideMenu/rootNavigator';
import { CONTACT_DETAILS } from '../../constants/routeNames';

const Contacts = () => {

    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    const [sortBy, setSortBy] = useState(null);

    const contactsRef = useRef([]);


    const {
        contactsDispatch,
        contactsState: {
            getContacts: { data, loading }
        }
    } = useContext(GlobalContext);


    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);


    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem('sortBy');

        if (sortPref) {
            setSortBy(sortPref);
        }
    }

    useFocusEffect(
        useCallback(() => {
            getSettings();

            return () => {

            }
        }, [])
    );

    useEffect(() => {

        const prev = contactsRef.current;

        contactsRef.current = data;

        const newList = contactsRef.current;

        if (newList.length - prev.length === 1) {
            const newContact = newList.find((item) => !prev.map((i) => i.id).includes(item.id),);

            navigate(CONTACT_DETAILS, { item: newContact })
        }

    }, [data.length]);

    // console.log(data);
    // console.log(loading);
    // console.log(contactsState);

    useEffect(() => {

        setOptions({
            headerLeft: () => <TouchableOpacity onPress={() => {
                toggleDrawer();
            }}>
                <Icon type="material" style={{ padding: 10 }} size={25} name="menu" />
            </TouchableOpacity>
        })
    }, []);

    return (
        <ContactsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            loading={loading}
            data={data}
            sortBy={sortBy}
        />
    );
};

export default Contacts;