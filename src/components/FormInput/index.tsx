import { NavigationContainer } from '@react-navigation/native';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { KeyboardType, StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';
import { colors } from '../../config/appStyles';

type FormInputProps = {
    icon?: ReactElement<any, any>,
    placeholder?: string,
    title?: string,
    style?: ViewStyle,
    iconStyle?: ViewStyle,
    isPassword?: boolean,
    value: string,
    errorMsg?: string,
    onChangeText?: (text: string) => void,
    changeError?: (text: string) => void,
    keyboardType?: KeyboardType,
    isDate?: boolean
    dateValue?: Date | null,
    onChangeDate?: (date: Date) => void,
    hints?: object,
    inputStyle?: ViewStyle,
    inputContainerStyle?: ViewStyle,
    multiLine?: boolean,
    maxLength?: number,
    showMaxLength?: boolean,
    titleTextStyle?: TextStyle,
    rightButtonText?: string,
    rightButtonIcon?: ReactElement<any, any>,
    onRightButtonPress?: () => void,
    justRightIcon?: ReactElement<any, any>,
    editable?: boolean,
    disableRightButton?: boolean,
    hideEye?: boolean
}


const FormInput: FunctionComponent<FormInputProps> = ({
    icon,
    placeholder,
    title,
    style,
    iconStyle,
    isPassword,
    value,
    errorMsg,
    onChangeText,
    changeError,
    keyboardType,
    isDate,
    dateValue,
    onChangeDate,
    hints,
    inputStyle,
    inputContainerStyle,
    multiLine,
    maxLength,
    showMaxLength,
    titleTextStyle,
    rightButtonText,
    rightButtonIcon,
    justRightIcon,
    editable,
    onRightButtonPress,
    disableRightButton,
    hideEye
}) => {

    const [showText, setShowText] = useState(true)
    const [focused, setFocused] = useState(false)



    useEffect(() => {
        if (isPassword) {
            setShowText(false)
        }

    }, [isPassword])

    return (
        <View style={[styles.container, style]}>
            {/***** Title ******/}
            {title && <Text style={[styles.title, titleTextStyle]}>{title}</Text>}

            <View style={[styles.inputContainer, inputContainerStyle]}>
                {/***** Icon ******/}
                {icon && <View style={[styles.iconContainer, iconStyle]}>
                    {icon}
                </View>}

                {/***** Input ******/}
                <TextInput
                    style={[
                        styles.textInput,
                        !icon && styles.textInputWithoutIcon,
                        ((isPassword && value != "") || justRightIcon) && styles.textInputWithEye,
                        (rightButtonIcon || rightButtonText) ? styles.textInputWithRightButton : {},
                        inputStyle
                    ]}
                    placeholderTextColor={colors.placeHolder}
                    placeholder={placeholder}

                    editable={isDate ? false : editable}
                    secureTextEntry={isPassword && !showText}
                    multiline={multiLine}
                    maxLength={maxLength}
                    onFocus={() => {
                        setFocused(true)
                    }}
                    onBlur={() => {
                        setFocused(false)
                    }}
                    onChangeText={(text) => {
                        if (onChangeText) {
                            onChangeText(text)
                            if (changeError)
                                changeError("")
                        }
                    }}
                    value={value}
                    keyboardType={keyboardType}
                />




                {/***** justRightIcon ******/}
                {justRightIcon &&
                    <View
                        style={[styles.eyeButton, { padding: 0 }]}
                    >
                        {justRightIcon}
                    </View>}



            </View>





        </View>
    );
}

export { FormInput };
