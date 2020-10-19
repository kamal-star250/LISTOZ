import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';

class ForgetPasswordScreen extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        {/* <ScrollView style={{height:'100%'}}> */}
        <View style={{height: '100%', width: '100%'}}>
          <View style={styles.HeaderView}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../assets/Icons/backarrow.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text style={{fontFamily: 'OpenSans-SemiBold', color: '#4A4A4A'}}>
              Forget Password
            </Text>
            <Text></Text>
          </View>

          <View style={{padding: 20}}>
            <View style={{width: '100%', height: 100, alignItems: 'center'}}>
              <Image
                source={require('../../assets/Icons/Logo.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                height: 60,
                alignItems: 'center',
                width: '100%',
                top: 20,
              }}>
              <Text style={{fontFamily: 'OpenSans-ExtraBold', fontSize: 18}}>
                Give your Email/phone
              </Text>
            </View>

            {/* Input Text area start */}
            <TextInput
              style={styles.TextInputStyle}
              placeholder="John@gmail.com"
              //   placeholderTextColor="#000"
            />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OTPVerifyScreen')}
              style={styles.CreateAccountBtn}>
              <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                Send
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  HeaderView: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  TextInputStyle: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    borderColor: '#756FD6',
    borderWidth: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7',
    marginTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  CreateAccountBtn: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
    backgroundColor: '#01B7EA',
    marginTop: 25,
    shadowColor: '#01B7EA',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
});
export default ForgetPasswordScreen;
