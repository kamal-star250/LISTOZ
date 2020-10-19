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

class EmailVerifyScreen extends Component {
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
              Email Verification
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
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',

                // backgroundColor: 'red',
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-ExtraBold',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                We sent a link to verify{'\n'} your email
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: 'pink',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-SemiBold',
                  fontSize: 12,
                  textAlign: 'center',
                  color: '#9B9B9B',
                }}>
                Sent to john@gmail.com
              </Text>
            </View>
            <View
              style={{
                // backgroundColor: 'pink',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 16,
                    textAlign: 'center',
                    color: '#756FD6',
                  }}>
                  Click on the link to verify
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('PostAddScreen')}
              style={styles.CreateAccountBtn}>
              <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                Send
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 12,
                    textAlign: 'center',
                    color: '#9B9B9B',
                  }}>
                  I didn't received a link
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: 'pink',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: 12,
                    textAlign: 'center',
                    color: '#756FD6',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
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
export default EmailVerifyScreen;
