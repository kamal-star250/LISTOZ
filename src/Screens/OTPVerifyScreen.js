import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

class OTPVerifyScreen extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={styles.HeaderView}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../assets/Icons/backarrow.png')}
                style={{width: 20, height: 20, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text style={{fontFamily: 'OpenSans-SemiBold', color: '#4A4A4A'}}>
              OTP Verification
            </Text>
            <Text></Text>
          </View>
          <View style={{padding: 20}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 40,
                //   backgroundColor: 'red',
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-ExtraBold',
                  color: '#000000',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                We sent a otp to verify{'\n'} your mobile
              </Text>
              <Text
                style={{
                  color: '#9B9B9B',
                  fontFamily: 'OpenSans-Regular',
                  marginTop: 30,
                }}>
                Sent to XXXXXXXXX
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingVertical: 20,
                marginTop: 20,
              }}>
              <TextInput style={styles.OTPCircle} placeholder="5" />
              <TextInput style={styles.OTPCircle} placeholder="7" />
              <TextInput style={styles.OTPCircle} placeholder="4" />
              <TextInput style={styles.OTPCircle} placeholder="3" />
            </View>
            <View style={{marginTop: 20}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#9B9B9B',
                  fontFamily: 'OpenSans-Bold',
                }}>
                I didn't received a code
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#756FD6',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{paddingHorizontal: 20}}> */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('EmailVerifyScreen')}
            style={styles.CreateAccountBtn}>
            <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
              Continue
            </Text>
          </TouchableOpacity>
          {/* </View> */}
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
  OTPCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
    // borderWidth: 0.3,
    // borderColor: '#756FD6',
  },
  CreateAccountBtn: {
    alignSelf: 'center',
    width: '85%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 20,
    backgroundColor: '#01B7EA',
    // marginTop: 25,
    paddingHorizontal: 20,
    shadowColor: '#01B7EA',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
    position: 'absolute',
    bottom: 40,
  },
});
export default OTPVerifyScreen;
