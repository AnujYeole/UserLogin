// WelcomePage.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/ssimage.png')} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to our App!</Text>
        <Text style={styles.description}>
          We're here to provide you with exceptional web solutions. Let's get started!
        </Text>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
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

export default WelcomePage;
