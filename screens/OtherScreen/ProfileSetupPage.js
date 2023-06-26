import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../constants/colors';
import DatePicker from 'react-native-date-picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { BackHandler } from 'react-native';
import SuccessfulPage from './SuccessfulPage';
import { ALERT_TYPE, AlertNotificationRoot, Dialog, Toast } from 'react-native-alert-notification';

const ProfileSetupPage = ({ navigation }) => {

    const [isFocus, setIsFocus] = useState(true);
    const [gender, setGender] = useState(null);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const disableBackButton = () => {
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', disableBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
        };
    }, []);

    // Form Validation
    const [input, setInput] = useState({
        name: '',
        birthdate: '',
        country: '',
        city: '',
        state: '',
        phoneNumber: '',
        gender: '',
        status: '',

    })

    const [isError, setIsError] = useState(false);

    const onChangeValue = (textValue, inputName) => {
        setInput((prevInput) => ({
            ...prevInput,
            [inputName]: textValue,
        }));
    }

    const errorMessage = (message) => {
        setIsError(true);
        Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: message,
            button: 'close',
            autoClose: 2000,
        });
    }

    const handleValidationOne = () => {
        if (!input.name) {
            errorMessage('Please enter your name!');
        } else if (!input.birthdate) {
            errorMessage('Please enter your birth date!')
        } else if (!input.country) {
            errorMessage('Please enter your country!')
        } else if (!input.city) {
            errorMessage('Please enter your city!')
        } else {
            setIsError(false);
        }

    }

    const handleValidationTwo = () => {
        if (!input.state) {
            errorMessage('Please enter your state!')
        } else if (!input.gender) {
            errorMessage('Please enter your gender!')
        } else if (!input.status) {
            errorMessage('Please enter your status!')
        } else {
            // TODO: Update the data to the firebase authentication
            console.log(input.name)
            console.log(input.birthdate)
            console.log(input.country)
            console.log(input.city)
            console.log(input.state)
            console.log(input.gender)
            console.log(input.status)
        }
    }
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
        color: '#000',
    }

    //Date Lib: https://github.com/henninghall/react-native-date-picker
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const dateFormat = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    // Dropdown data
    const genderData = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Others', value: 'Others' },
    ];

    const statusData = [
        { label: 'Single', value: 'Single' },
        { label: 'In a relationship', value: 'In a relationship' },
        { label: 'Others', value: 'Others' },
    ];

    const [answer, setAnswer] = useState('');
    const surveyData = [
        { label: 'Answer 1', value: 'Answer 1' },
        { label: 'Answer 2', value: 'Answer 2' },
        { label: 'Answer 3', value: 'Answer 3' },
        { label: 'Answer 4', value: 'Answer 4' },
    ]

    console.log(input.gender);
    console.log(input.status);
    return (
        <LinearGradient colors={['salmon', 'white']} style={{ flex: 1 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <AlertNotificationRoot>
                <View View style={{ flex: 1 }}>
                    <ProgressSteps {...progressStepsStyle} >
                        <ProgressStep label="About yourself" onNext={() => handleValidationOne()} errors={isError} nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                            <Text style={{ fontSize: 45, color: '#FFF', margin: 25 }}>Tell us a little bit about yourself</Text>
                            <View style={styles.formContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Name'
                                    onChangeText={text => onChangeValue(text, 'name')} />
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
                                        onChangeValue(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`, 'birthdate')
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Country'
                                    onChangeText={text => onChangeValue(text, 'country')} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='City'
                                    onChangeText={text => onChangeValue(text, 'city')} />
                            </View>
                        </ProgressStep>
                        <ProgressStep label="About yourself" onNext={() => handleValidationTwo()} nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                            <Text style={{ fontSize: 45, color: '#FFF', margin: 25 }}>Tell us a little bit about yourself</Text>
                            <View style={styles.formContainer}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='State'
                                    onChangeText={text => onChangeValue(text, 'state')}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={11}
                                    placeholder='Phone Number'
                                    onChangeText={text => onChangeValue(text, 'phoneNumber')}
                                />
                                <Dropdown
                                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={genderData}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select gender' : '...'}
                                    searchPlaceholder="Search..."
                                    value={gender}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setGender(item.value);
                                        onChangeValue(item.value, 'gender')
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
                                    data={statusData}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select status' : '...'}
                                    searchPlaceholder="Search..."
                                    value={status}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    onChange={item => {
                                        setStatus(item.value);
                                        onChangeValue(item.value, 'status')
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
                            <Text style={{ fontSize: 45, color: '#FFF', margin: 25 }}>Tell us a little bit about yourself</Text>
                            <View style={styles.formContainer}>
                                <ScrollView style={{ width: '100%' }}>
                                    <Dropdown
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                        style={[styles.surveyDropdown, isFocus && { borderColor: 'blue' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        data={surveyData}
                                        search
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder={!isFocus ? 'Select gender' : '...'}
                                        searchPlaceholder="Search..."
                                        value={answer}
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
                                </ScrollView>
                            </View>
                        </ProgressStep>
                        <ProgressStep label="Success" removeBtnRow >
                            <SuccessfulPage />
                        </ProgressStep>
                    </ProgressSteps>
                </View>
            </AlertNotificationRoot>
        </LinearGradient>

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
        alignItems: 'center',
        gap: 20
    },
    input: {
        width: '100%',
        padding: 20,
        borderRadius: 15,
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
    surveyDropdown: {
        height: 50,
        width: '100%',
        padding: 30,
        backgroundColor: '#eff1f3',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 15,
        paddingHorizontal: 8,
        marginBottom: 20
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