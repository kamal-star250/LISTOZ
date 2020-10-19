import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

class DrawerPage extends Component {
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View
            style={{
              width: '100%',
              height: '25%',
              //   backgroundColor: 'red',
            }}>
            <ImageBackground
              borderBottomLeftRadius={25}
              borderBottomRightRadius={25}
              style={{
                width: '100%',
                height: '100%',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.15,
                shadowRadius: 4.65,
                elevation: 2,
              }}
              source={require('../../assets/Icons/Rectangle.png')}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //   paddingHorizontal: 20,
                  //   paddingHorizontal: 10,
                  padding: 10,
                }}>
                <Text></Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.closeDrawer()}>
                  <Image
                    style={{width: 15, height: 15, resizeMode: 'contain'}}
                    source={require('../../assets/Icons/CloseIcon.png')}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  padding: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 80, height: 80, resizeMode: 'contain'}}
                  source={require('../../assets/Icons/UserProfile.png')}
                />
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 20,
                    left: 10,
                  }}>
                  Alice
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{padding: 20}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={require('../../assets/Icons/cogs.png')}
              />
              <Text
                style={{
                  color: '#4A4A4A',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 14,
                  left: 20,
                }}>
                Alice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={require('../../assets/Icons/cogs.png')}
              />
              <Text
                style={{
                  color: '#4A4A4A',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 14,
                  left: 20,
                }}>
                Alice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={require('../../assets/Icons/cogs.png')}
              />
              <Text
                style={{
                  color: '#4A4A4A',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 14,
                  left: 20,
                }}>
                Alice
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Image
                style={{width: 20, height: 20, resizeMode: 'contain'}}
                source={require('../../assets/Icons/logout.png')}
              />
              <Text
                style={{
                  color: '#4A4A4A',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 14,
                  left: 20,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
            {/* <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: 'cyan',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 20,
              }}></View> */}
          </View>
          <Image
            style={{
              width: 200,
              height: 90,
              resizeMode: 'contain',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 20,
            }}
            source={require('../../assets/Icons/Logo.png')}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DrawerPage;
