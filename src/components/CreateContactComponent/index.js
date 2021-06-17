import React from 'react';
import { Image, Text, View, Switch } from 'react-native';
import styles from './styles';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import colors from '../../assets/theme/colors';


const CreateContactComponent = ({ error, loading, onChangeText, toggleValueChange, onSubmit, form }) => {

    return (
        <View style={styles.container}>
            <Container>

                <Image width={150} height={150} source={require('../../assets/images/images.png')} style={styles.imageView} />

                <Text style={styles.chooseText}>Choose image</Text>

                <Input
                    onChangetext={(value) => {
                        onChangeText({ name: 'firstName', value: value })
                    }}
                    label="First Name"
                    value={form.firstName || ''}
                    placeholder="Enter First name"
                    error={error?.first_name?.[0]}
                />
                <Input
                    onChangetext={(value) => {
                        onChangeText({ name: 'lastName', value: value })
                    }}
                    label="Last Name"
                    value={form.lastName || ''}
                    placeholder="Enter Last name"
                    error={error?.last_name?.[0]}
                />
                <Input
                    onChangetext={(value) => {
                        onChangeText({ name: 'phoneNumber', value: value })
                    }}
                    label="Phone Number"
                    value={form.phoneNumber || ''}
                    placeholder="Enter Phone number"
                    error={error?.phone_number?.[0]}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 15 }}>Add on favorite</Text>
                    <Switch
                        trackColor={{ false: 'blue', true: colors.primary }}
                        thumbColor="#FFFFF"
                        ios_backgroundColor='#3e3e3e'
                        onValueChange={toggleValueChange}
                        value={form.is_favourite}
                    />
                </View>

                <CustomButton loading={loading} disabled={loading} onPress={onSubmit} primary title="Submit" />
            </Container>
        </View>
    );
};

export default CreateContactComponent;