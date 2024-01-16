import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const AppointmentBooking = ({ route }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        // Check if route and params are defined
        if (route && route.params) {
          const doctorId = route.params.doctorId;
          if (doctorId) {
            const response = await axios.get(`http://192.168.57.10:3000/doctors/${doctorId}`);
            setSelectedDoctor(response.data);
            setLoading(false); // Set loading to false once data is fetched
          }
        }
      } catch (error) {
        console.error('Error fetching doctor details:', error.message);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchDoctorDetails();
  }, [route?.params?.doctorId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!selectedDoctor) {
    return (
      <View>
        <Text>Error loading data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedDoctor.profilePicture }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{selectedDoctor.name}</Text>
        <Text style={styles.occupation}>{selectedDoctor.occupation}</Text>
        {/* Add more details as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  occupation: {
    fontSize: 16,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppointmentBooking;
