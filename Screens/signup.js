// Screens/Login.js
import React, { useState } from 'react';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  Line,
} from './../Components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View, TouchableOpacity } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboadAvoider from '../Components/keyboadAvoider';
import { Text, StyleSheet } from 'react-native';

const { brand, darkLight, primary } = Colors;

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setData] = useState(new Date(2000, 0, 1));
  const [dob, setDob] = useState();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setData(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  return (
    <KeyboadAvoider>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <SubTitle>Account SignUp</SubTitle>
          {show && (
            <DateTimePicker testID="dateTimePicker" value={date} mode="date" is24Hour={true} onChange={onChange} />
          )}
          <Formik
            initialValues={{ firstName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate('WelcomePage');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInputs
                  label="First Name"
                  icon="person"
                  placeholder="user@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                <MyTextInputs
                  label="Email Address :"
                  icon="mail"
                  placeholder="user@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInputs
                  label="Date of Birth"
                  icon="calendar"
                  placeholder="YYYY/MM/DD"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('DateOfBirth')}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
                />
                <MyTextInputs
                  label="Password :"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  keyboardType="default"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInputs
                  label="Confirm Password :"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  keyboardType="default"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('WelcomePage')}>
                  <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <Line />

                <ExtraView>
                  <ExtraText>Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent>Log In</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
        <StatusBar style="auto" />
      </StyledContainer>
    </KeyboadAvoider>
  );
};

const MyTextInputs = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Purple theme color
    padding: 20,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
  },
  companyName: {
    color: '#6d28d9',
    fontSize: 18,
    marginTop: 10,
  },
  content: {
    alignItems: 'center',
  },
  welcomeText: {
    color: '#6d28d9',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#6d28d9',
    fontSize: 16,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#6d28d9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Signup;
