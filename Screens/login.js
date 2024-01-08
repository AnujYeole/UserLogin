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
import { Button, Pressable, View } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import KeyboadAvoider from '../Components/keyboadAvoider';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const { brand, darkLight, primary } = Colors;

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboadAvoider>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="contain" source={require('./../assets/gm.png')} />
          <SubTitle style={styles.subtitleText}>Account Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate('WelcomePage');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
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
                <MsgBox>...</MsgBox>
                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('WelcomePage')}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={18} />
                  <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already? </ExtraText>
                  <TextLink
                    onPress={() => {
                      navigation.navigate('Signup');
                    }}
                  >
                    <TextLinkContent>SignUp</TextLinkContent>
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

const MyTextInputs = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
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
  subtitleText: {
    marginTop: 30,
  },
});

export default Login;
