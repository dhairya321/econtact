import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';



const CustomButton = ({ title, secandary, primary, danger, disabled, loading, onPress }) => {


    const getBgColor = () => {
        if (disabled) {
            return colors.grey;
        }
        if (primary) {
            return colors.primary;
        }
        if (danger) {
            return colors.danger;
        }
        if (secandary) {
            return colors.secandory;
        }
    };

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, { backgroundColor: getBgColor() }]}>

            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary ? colors.secandory : colors.primary} />}
                {title &&
                    <Text style={{ color: disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0 }}>
                        {loading ? "Please wait..." : title}</Text>}
            </View>


        </TouchableOpacity >
    )
}
export default CustomButton;