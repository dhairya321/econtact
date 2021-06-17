import React from 'react';
import { Alert, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import Container from '../../components/common/container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
import Icon from '../../components/common/Icon';


const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        navigation.toggleDrawer();
        Alert.alert("Logout!", "Are you sure you want to logout?",
            [{
                text: "Cancle",
                onPress: () => { },
            },
            {
                text: "OK",
                onPress: () => {
                    logoutUser()(authDispatch);
                }
            }
            ])
    }

    const menuItems = [
        {
            icon: <Icon type="ionicon" size={18} name="settings" />, name: "Settings", onPress: () => {
                navigation.navigate(SETTINGS);
            }
        },
        {
            icon: <Icon type="material" size={19} name="logout" />, name: "Logout", onPress: handleLogout
        }

    ];

    return (
        <SafeAreaView>
            <Container>
                <View style={{ paddingHorizontal: 70 }}>
                    {menuItems.map(({ name, icon, onPress }) => (
                        <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                            {icon}
                            <Text style={styles.itemText}>
                                {name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default SideMenu;