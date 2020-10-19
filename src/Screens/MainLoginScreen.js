import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import FooterPage from '../CommanPages/FooterPage';
// import HeaderPage from '../CommanPages/HeaderPage';

class MainLoginScreen extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{height: '100%', width: '100%'}}>
            <View style={styles.HeaderView}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require('../../assets/Icons/backarrow.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={{fontFamily: 'OpenSans-SemiBold', color: '#4A4A4A'}}>
                Log In
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

              {/* Input Text area start */}
              <TextInput
                style={styles.TextInputStyle}
                placeholder="Name"
                //   placeholderTextColor="#000"
              />
              <TextInput
                style={styles.TextInputStyle}
                placeholder="Email"
                //   placeholderTextColor="#000"
              />

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DashbordScreen')}
                style={styles.CreateAccountBtn}>
                <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                  Log In
                </Text>
              </TouchableOpacity>

              <View style={styles.BottomText}>
                <Text style={{color: '#9B9B9B'}}>
                  — Or use Social Media Account —
                </Text>
              </View>
              {/* Social Login area  */}
              <View style={styles.SocialIconView}>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/google.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/twitter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/indeed.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/apple.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchSocialIcons}>
                  <Image
                    style={styles.SocialIcons}
                    source={require('../../assets/Icons/facelock.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ForgetPasswordScreen')
                }
                style={styles.BottomText}>
                <Text style={{color: '#756FD6'}}>— Forget Password —</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View>
            <FooterPage />
          </View> */}
        </ScrollView>
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
  TouchSocialIcons: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#D4D4D4',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.9,
    shadowRadius: 5.65,
    elevation: 2,
  },
  SocialIcons: {
    width: 40,
    height: 40,
  },
  SocialIconView: {
    top: 10,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BottomText: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default MainLoginScreen;
