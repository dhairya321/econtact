import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Alert, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/theme/colors';
import Icon from '../../components/common/Icon';
import ContactDetailsComponent from '../../components/ContactDetailsComponent';
import { GlobalContext } from '../../context/Provider';
import { navigate } from '../../navigations/SideMenu/rootNavigator';
import { CONTACT_LIST } from '../../constants/routeNames';
import deleteContact from '../../context/actions/contacts/deleteContact';

const ContactDetails = () => {

    const { params: { item = {} } = {} } = useRoute();

    const { contactsDispatch, contactsState: { deleteContact: { loading }, } } = useContext(GlobalContext);

    const { setOptions } = useNavigation();

    //putting name of contact on header
    useEffect(() => {
        if (item) {
            setOptions({
                title: item.first_name + " " + item.last_name,
                headerRight: () => {
                    return (
                        <View style={{ flexDirection: 'row', paddingRight: 15 }}>
                            <TouchableOpacity>
                                <Icon color={colors.grey} type="material" name={item.is_favourite ? "star" : "star-border"} size={25} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {

                                Alert.alert("Delete!", "Are you sure you want to remove? " + item.first_name,
                                    [
                                        {
                                            text: 'Cancle',
                                            onPress: () => { },
                                        },
                                        {
                                            text: 'OK',
                                            onPress: () => {
                                                deleteContact(item.id)((contactsDispatch))(() => {
                                                    navigate(CONTACT_LIST)
                                                });
                                            }
                                        }
                                    ]);
                            }}
                                style={{ paddingLeft: 10 }}>

                                {loading ? <ActivityIndicator size="small" color={colors.primary} /> :
                                    (<Icon color={colors.grey} type="material" name="delete" size={25} />)}

                            </TouchableOpacity>
                        </View>
                    )
                }
            });
        }
    }, [item, loading]);

    return (

        <ContactDetailsComponent contact={item} />
    );
};

export default ContactDetails;