import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../constants/colors';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProfileSetupPage = ({ navigation }) => {
    // FIXME: IF newUser display Profile Setup Page

    // This will initiate if there is a user logged in
    // useEffect(() => {
    //     const subscriber = auth().onAuthStateChanged((user) => {
    //         console.log(user);
    //     });

    //     return subscriber;
    // }, []);

    // FIXME: COLOR CHOICE Link: https://github.com/colbymillerdev/react-native-progress-steps#readme
    const progressStepsStyle = {
        activeStepIconBorderColor: '#FFF',
        progressBarColor: '#FFF',
        completedProgressBarColor: '#FFF',
        completedStepIconColor: '#f4ca1a',
        disabledStepIconColor: '#c8cbcc',
        labelColor: '#c8cbcc',
        activeLabelColor: '#FFF',
        completedLabelColor: '#fff'
    }

    const buttonTextStyle = {
        color: '#FFF'
    }

    //Date Lib: https://github.com/henninghall/react-native-date-picker
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const dateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    // Dropdown Picker
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View View style={{ flex: 1, backgroundColor: COLORS.bg }}>
            <ProgressSteps {...progressStepsStyle} >
                <ProgressStep label="About yourself" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <Text style={{ fontSize: 45, color: '#FFF', margin: 25 }}>Tell us a little bit about yourself</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Name' />
                        <TouchableOpacity onPress={() => setOpen(true)} style={styles.birthdateButton}>
                            <Text style={{ color: date.getDate() === new Date().getDate() ? '#646565' : 'black' }}>
                                {date.getDate() === new Date().getDate() ? 'Birthdate' : dateFormat}
                            </Text>
                            <FontAwesome5 name='calendar' size={25} />
                        </TouchableOpacity>
                        <DatePicker modal
                            open={open}
                            date={date}
                            mode='date'
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                        {/* TODO: COUNTRY STATE CITY PICKER */}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select country' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select state' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select city' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                    </View>
                </ProgressStep>
                <ProgressStep label="About yourself" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <Text style={{ fontSize: 45, color: '#FFF', margin: 25 }}>Tell us a little bit about yourself</Text>
                    <View style={styles.formContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='State' />
                        <TextInput
                            style={styles.input}
                            keyboardType='numeric'
                            maxLength={11}
                            placeholder='Phone Number' />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select gender' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select status' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                    </View>
                </ProgressStep>
                <ProgressStep label="Quick Survey" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                    <View style={styles.formContainer}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Success" removeBtnRow >
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

export default ProfileSetupPage

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: '#f4ca1a',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '15%',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    formContainer: {
        paddingTop: 30,
        paddingHorizontal: 30,
        gap: 20,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#eff1f3'
    },
    birthdateButton: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        width: '100%',
        borderRadius: 15,
        flexDirection: 'row',
        gap: 15,
        backgroundColor: '#eff1f3',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    dropdown: {
        height: 50,
        width: '100%',
        padding: 30,
        backgroundColor: '#eff1f3',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },

})