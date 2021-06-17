import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/CustomButton';
import Input from "../../components/common/Input";
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Message from '../common/Message';


const LoginComponent = ({ error, onChange, justSignedUp, onSubmit, loading, form }) => {

    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            {/*Image source={require('')} */}


            <View>
                <Text style={styles.title}>Welcome to eContacts</Text>
                <Text style={styles.subTitle}>Please Login here</Text>


                <View style={styles.form}>

                    {justSignedUp && (<Message success onDismiss={() => { }} message="Account Created Successfully" />)}

                    {error && !error.error &&
                        (<Message danger onDismiss={() => { }} message="invalid credential" />)}


                    {error?.error && <Message onDismiss danger message={error?.error} />}

                    <Input label="Username"

                        placeholder="Enter Username"
                        iconPosition="right"
                        value={form.userName || null}

                        onChangetext={(value) => { onChange({ name: "userName", value }) }}
                    />


                    <Input label="Password"
                        placeholder="Enter Password"
                        icon={<TouchableOpacity onPress={() => {

                            setIsSecureEntry((prev) => !prev);

                        }}>
                            <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>}
                        secureTextEntry={isSecureEntry}
                        iconPosition="right"

                        onChangetext={(value) => { onChange({ name: "password", value }) }}
                    />



                    <CustomButton disabled={loading} onPress={onSubmit} loading={loading}
                        primary title="Submit" />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={() => { navigate(REGISTER); }}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Container>
    );
};
export default LoginComponent;