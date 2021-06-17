import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import Icon from '../common/Icon';
import CustomButton from '../common/CustomButton';
import colors from '../../assets/theme/colors';
import { navigate } from '../../navigations/SideMenu/rootNavigator';
import { CREATE_CONTACT } from '../../constants/routeNames';


const ContactDetailsComponent = ({ contact }) => {

    const { contact_picture, first_name, last_name, phone_number } = contact;

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.container}>
                {/* {contact_picture && <ImageComponent src={contact_picture} />} */}

                <View style={styles.contact}>
                    <Text style={styles.names}>{first_name + " " + last_name}</Text>
                </View>

                <View style={styles.seperator} />

                <View style={styles.middleCallOptions}>
                    <Icon
                        type="ionicon"
                        name="call-outline"
                        color={colors.grey}
                        size={27}
                    />
                    <View style={styles.phoneMobile}>
                        <Text style={{ fontSize: 20 }}>{phone_number}</Text>
                        <Text>Mobile</Text>
                    </View>
                </View>


                <View style={styles.seperator} />

                <View style={styles.callicon}>
                    <View>
                        <Text style={{ paddingBottom: 5, fontSize: 14, color: colors.primary }}>Call</Text>
                        <Icon size={40} type='ionicon' name='call-outline' />
                    </View>
                    <View>
                        <Text style={{ paddingBottom: 5, fontSize: 14, color: colors.primary }}>Message</Text>
                        <Icon size={40} type='ant' name='message1' />

                    </View>


                    <CustomButton
                        primary
                        title="Edit Contact"
                        onPress={() => {
                            navigate(CREATE_CONTACT, { contact, editing: true });
                        }}
                    />

                </View>
            </View>

        </ScrollView >


    )



}

export default ContactDetailsComponent;