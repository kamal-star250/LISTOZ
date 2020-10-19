import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import FooterPage from '../CommanPages/FooterPage';
class PersonalHomeScreen extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '90%'}}>
          <ScrollView>
            <View style={styles.HeaderView}>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}>
                <Image
                  source={require('../../assets/Icons/backarrow.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'OpenSans-ExtraBold',
                  color: '#4A4A4A',
                }}>
                Personal Home
              </Text>
              <Text></Text>
            </View>
            {/* Header Area End */}
            <View style={{padding: 15}}>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Your Name:
                </Text>
                <TextInput
                  style={styles.TextInputStyle}
                  placeholder="John"
                  placeholderTextColor="#756FD6"
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Your Email Address:
                </Text>
                <TextInput
                  style={styles.TextInputStyle}
                  placeholder="John@email.com"
                  placeholderTextColor="#756FD6"
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Your phone number:
                </Text>
                <View
                  style={{flexDirection: 'row', width: '100%', marginTop: 15}}>
                  <TextInput
                    style={{
                      height: 40,
                      backgroundColor: '#fff',
                      width: '22%',
                      paddingHorizontal: 20,
                      alignItems: 'center',
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      borderRightWidth: 1,
                      borderColor: '#00000017',
                    }}
                    placeholder="+XX"
                    placeholderTextColor="#756FD6"
                  />
                  <TextInput
                    style={{
                      height: 40,
                      backgroundColor: '#fff',
                      width: '78%',
                      paddingHorizontal: 20,
                      alignItems: 'center',
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                    placeholder="XXXXXXXXXX"
                    placeholderTextColor="#756FD6"
                  />
                </View>
              </View>
              <View style={{marginTop: 15}}>
                {/* <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Category:
                </Text> */}
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity style={styles.TextInputStyle1}>
                    <Image
                      source={require('../../assets/Icons/MaleIcon.png')}
                      style={{width: 25, height: 25, resizeMode: 'contain'}}
                    />
                    <Text style={{left: 5, color: '#AEB6C1'}}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.TextInputStyle1}>
                    <Image
                      source={require('../../assets/Icons/Female.png')}
                      style={{width: 25, height: 25, resizeMode: 'contain'}}
                    />
                    <Text style={{left: 5, color: '#AEB6C1'}}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  New Password
                </Text>
                <TextInput
                  // multiline={true}
                  // numberOfLines={3}
                  style={styles.TextInputStyle}
                  secureTextEntry={true}
                  placeholder="************"
                  placeholderTextColor="#756FD6"
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Confirm Password:
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.TextInputStyle}
                  placeholder="************"
                  placeholderTextColor="#756FD6"
                />
              </View>

              <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('LoginScreen')}
                style={styles.CreateAccountBtn}>
                <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* Footer Area Reserved */}
        <View
          style={{
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FooterPage />
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
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  TextInputStyle: {
    width: '100%',
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  TextInputStyle1: {
    width: '48%',
    height: 40,
    borderRadius: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
export default PersonalHomeScreen;
