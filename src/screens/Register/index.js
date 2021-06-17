import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import RegisterComponent from '../../components/Register/index';

import axios from '../../helpers/axiosInstance';
import { GlobalContext } from '../../context/Provider'
import register, { clearAuthState } from '../../context/actions/auth/register';
import { LOGIN } from '../../constants/routeNames';

const Register = () => {

    const [form, setForm] = useState({});
    const { navigate } = useNavigation();
    const [errors, setErrors] = useState({});
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);


    useFocusEffect(
        useCallback(() => {
            if (data || error) {
                clearAuthState()(authDispatch);
            }
        }, [data, error]),
    );


    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "This field needs minimum 6 characters" };
                    });
                }
                else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            }
            else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        }
        else {
            setErrors((prev) => {
                return { ...prev, [name]: "This field is required" };
            });
        }


    };

    const onSubmit = () => {
        //validations
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: "please add a username" };
            });
        };

        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: "please add a firstname" };
            });
        };
        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: "please add a lastname" };
            });
        };
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: "please add a email" };
            });
        };
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: "please add a password" };
            });
        }
        if (Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)) {

            register(form)(authDispatch)((response) => {
                navigate(LOGIN, { data: response })
            });
        }
    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading} />

    );
};

export default Register;