import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class LoginScreen extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
          }}>
          <ImageBackground
            source={require('../../assets/Images/LoginBackimage.png')}
            style={{
              width: '100%',
              height: '100%',
            }}>
            <View
              style={{
                width: '100%',
                height: '60%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <Image
                source={require('../../assets/Icons/Logo1.png')}
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={{padding: 25}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('MainLoginScreen')
                }
                style={styles.CreateAccountBtn}>
                <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                  Email / Mobile
                </Text>
              </TouchableOpacity>
              <View style={styles.BottomText}>
                <Text style={{color: '#fff'}}>— Or use another way —</Text>
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
                onPress={() => this.props.navigation.navigate('SignupScreen')}
                style={styles.BottomText}>
                <Text style={{color: '#fff'}}>— Register Now —</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
    marginTop: 10,
  },
});
export default LoginScreen;
