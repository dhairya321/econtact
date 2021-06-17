import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import CreateContactComponent from '../../components/CreateContactComponent';
import { CONTACT_LIST } from '../../constants/routeNames';
import createContacts from '../../context/actions/contacts/createContacts';
import { GlobalContext } from '../../context/Provider';

const CreateContact = () => {
    const [form, setForm] = useState({});
    const { contactsDispatch, contactsState: { createContact: { loading, error }, }, } = useContext(GlobalContext);
    const { navigate } = useNavigation();

    const onChangeText = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    };

    const onSubmit = () => {
        // console.log(form);
        createContacts(form)(contactsDispatch)(() => {
            navigate(CONTACT_LIST);
        });
    };

    const toggleValueChange = () => {
        setForm({ ...form, "is_favourite": !form.is_favourite })
    }

    return (
        <CreateContactComponent
            onSubmit={onSubmit}
            onChangeText={onChangeText}
            form={form}
            loading={loading}
            toggleValueChange={toggleValueChange}
            error={error}
        />
    );
};

export default CreateContact;