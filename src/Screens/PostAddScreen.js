import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

import FooterPage from '../CommanPages/FooterPage';
class PostAddScreen extends Component {
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
                Post Add
              </Text>
              <Text></Text>
            </View>
            {/* Header Area End */}
            <View style={{padding: 15}}>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Title:
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
                  Category:
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
                  Type
                </Text>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    style={styles.TextInputStyle1}
                    placeholder="Private"
                    placeholderTextColor="#AEB6C1"
                  />
                  <TextInput
                    style={styles.TextInputStyle1}
                    placeholder="Professional"
                    placeholderTextColor="#AEB6C1"
                  />
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Description:
                </Text>
                <TextInput
                  // multiline={true}
                  // numberOfLines={3}
                  style={styles.TextInputStyle}
                  placeholder="Loreum epsum"
                  placeholderTextColor="#756FD6"
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Price:
                </Text>
                <TextInput
                  style={styles.TextInputStyle}
                  placeholder="$500"
                  placeholderTextColor="#756FD6"
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text
                  style={{color: '#626262', fontFamily: 'OpenSans-Regular'}}>
                  Tags:
                </Text>
                <TextInput
                  style={styles.TextInputStyle}
                  placeholder="Write here"
                  placeholderTextColor="#AEB6C1"
                />
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PostImage')}
                style={styles.CreateAccountBtn}>
                <Text style={{fontFamily: 'OpenSans-Regular', color: '#fff'}}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text></Text>
              <Text
                style={{
                  color: '#707070',
                  fontSize: 10,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Enter the tags separated by commas
              </Text>
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
    textAlign: 'center',
    backgroundColor: '#fff',
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
export default PostAddScreen;
