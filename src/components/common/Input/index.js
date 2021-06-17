import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';



const Input = ({ onChangetext, style, value, label, icon, iconPosition, error, ...props }) => {

    const [focused, setFocused] = React.useState(false);


    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return "row";
            }
            else if (iconPosition === 'right') {
                return "row-reverse";
            }
        }
    };

    const getBorederColor = () => {
        if (error) {
            return colors.danger;
        }
        if (focused) {
            return colors.primary;
        }
        else {
            return colors.grey;
        }
    };

    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View style={
                [styles.wrapper,
                {
                    alignItems: icon ? 'center' : 'baseline',
                    borderColor: getBorederColor(),
                    flexDirection: getFlexDirection()
                }]}>
                <View>{icon && icon}</View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangetext}
                    value={value}
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                    {...props} />



            </View>
            { error && <Text style={styles.error}>{error}</Text>}
        </View >
    )
}
export default Input;