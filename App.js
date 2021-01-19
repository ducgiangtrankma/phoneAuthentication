import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('+84339488855');
  const [otp, setOTP] = useState('');
  const siginPhone = () => {
    alert('check');
  };
  const submmit = () => {
    alert('submit');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TextInput style={styles.txtInput} placeholder="Phonenumber" />
      <TextInput style={styles.txtInput} placeholder="OTP Code" />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btn} onPress={siginPhone}>
          <Text>Sigin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={submmit}>
          <Text>Submit OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingLeft: 10,
  },
  btn: {
    height: 50,
    width: 100,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
