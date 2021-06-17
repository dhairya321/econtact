import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/CustomButton';
import Input from "../common/Input";
import { LOGIN } from '../../constants/routeNames';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import Message from '../common/Message';

const RegisterComponent = ({ onSubmit, onChange, form, loading, error, errors }) => {

    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            {/*Image source={require('')} */}


            <View>
                <Text style={styles.title}>Welcome to eContacts</Text>
                <Text style={styles.subTitle}>Create a free account</Text>

                <View style={styles.form}>

                    {error?.error && <Message retry retryFn={() => { onSubmit }}

                        danger
                        message={error.error} />}

                    <Input label="Username"
                        //onChange={(text) => onChangeText(text)}
                        //value={value}
                        placeholder="Enter Username"
                        iconPosition="right"
                        error={errors.userName || error?.username?.[0]}
                        onChangetext={(value) => { onChange({ name: "userName", value }) }}
                    />


                    <Input label="First name"
                        //onChange={(text) => onChangeText(text)}
                        //value={value}
                        placeholder="Enter First name"
                        iconPosition="right"
                        error={errors.firstName || error?.first_name?.[0]}
                        onChangetext={(value) => { onChange({ name: "firstName", value }) }}
                    />


                    <Input label="Last name"
                        //onChange={(text) => onChangeText(text)}
                        //value={value}
                        placeholder="Enter Last name"
                        iconPosition="right"
                        error={errors.lastName || error?.last_name?.[0]}
                        onChangetext={(value) => { onChange({ name: "lastName", value }) }}
                    />


                    <Input label="Email"
                        //onChange={(text) => onChangeText(text)}
                        //value={value}
                        placeholder="Enter Email"
                        iconPosition="right"
                        error={errors.email || error?.email?.[0]}
                        onChangetext={(value) => { onChange({ name: "email", value }) }}
                    />




                    <Input label="Password"
                        //onChange={(text) => onChangeText(text)}
                        //value={value}
                        placeholder="Enter Password"
                        icon={<TouchableOpacity onPress={() => {

                            setIsSecureEntry((prev) => !prev);

                        }}>
                            <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>}
                        secureTextEntry={isSecureEntry}
                        iconPosition="right"
                        error={errors.password || error?.password?.[0]}
                        onChangetext={(value) => { onChange({ name: "password", value }) }}
                    />


                    <CustomButton onPress={onSubmit}
                        loading={loading}
                        disabled={loading}
                        primary title="Submit" />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { navigate(LOGIN); }}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    );
};
export default RegisterComponent;