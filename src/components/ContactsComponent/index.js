import React from 'react';
import { Text, View, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import colors from '../../assets/theme/colors';
import { CONTACT_DETAILS, CREATE_CONTACT } from '../../constants/routeNames';
import Icon from '../common/Icon';
import Message from '../common/Message';
import styles from './styles';

const ContactsComponent = ({ sortBy, data, loading }) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (

            <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                <Message info message="No contact to show" />
            </View>
        )
    };


    const renderItem = ({ item }) => {

        const { contact_picture, first_name, last_name, phone_number } = item;

        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                navigate(CONTACT_DETAILS, { item });
            }}>

                <View style={styles.item}>

                    {contact_picture ? <Image
                        style={{ width: 45, height: 45, borderRadius: 100 }}
                        source={{ uri: contact_picture }} /> :
                        <View style={{
                            width: 45,
                            height: 45,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: colors.accent,
                            borderRadius: 100,
                        }}>

                            <Text style={{ color: colors.white, fontSize: 17 }}>{first_name[0]}</Text>
                            <Text style={{ color: colors.white, fontSize: 17 }}>{last_name[0]}</Text>
                        </View>}


                    <View style={{ paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>{first_name}</Text>
                            <Text style={styles.name}>{last_name}</Text>
                        </View>

                        <Text style={styles.phoneNumber}>{phone_number}</Text>

                    </View>
                </View>
                <Icon name="right" type="ant" size={18} color={colors.grey} />

            </TouchableOpacity>)
    };

    return (
        <>
            <View style={{ backgroundColor: colors.white, flex: 1 }}>


                {loading && (
                    <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                        <ActivityIndicator color={colors.accent} size="large" />
                    </View>
                )}

                {!loading && (
                    <View style={[{ paddingVertical: 20 }]}>
                        <FlatList
                            renderItem={renderItem}
                            data={sortBy ? data.sort((a, b) => {

                                if (sortBy === 'First Name') {
                                    if (b.first_name > a.first_name) {
                                        return -1;
                                    }
                                    else {
                                        return 1;
                                    }
                                }

                                if (sortBy === 'Last Name') {
                                    if (b.last_name > a.last_name) {
                                        return -1;
                                    }
                                    else {
                                        return 1;
                                    }
                                }

                            }) : data}
                            ItemSeparatorComponent={() => (
                                <View style={{ height: 0.5, backgroundColor: colors.grey }} />
                            )}
                            keyExtractor={(item) => String(item.id)}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={{ height: 150 }}></View>} />
                    </View>
                )}

            </View>

            <TouchableOpacity style={styles.floatingActionButton} onPress={() => { navigate(CREATE_CONTACT) }}>
                <Icon name="plus" size={21} color={colors.white} />
            </TouchableOpacity>


        </>
    );
};

export default ContactsComponent;