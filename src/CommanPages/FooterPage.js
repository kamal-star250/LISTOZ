import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
class FooterPage extends Component {
  // state = {  }
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'white',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 20,
          flexDirection: 'row',
          bottom: 0,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={this.props.homePress}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Icons/Home.png')}
            style={styles.FooterIcons}
          />
          <Text style={styles.BottomText}> HOME </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.addlistpress}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Icons/Add.png')}
            style={styles.FooterIcons}
          />
          <Text style={styles.BottomText}>ADD LISTING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.categoryPress}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Icons/Category.png')}
            style={styles.FooterIcons}
          />
          <Text style={styles.BottomText}>CATEGORIES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.profilePress}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/Icons/profile.png')}
            style={styles.FooterIcons}
          />
          <Text style={styles.BottomText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  FooterIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  BottomText: {
    color: '#999999',
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
});

export default FooterPage;

FooterPage.PropTypes = {
  homePress: PropTypes.func,
  addlistpress: PropTypes.func,
  categoryPress: PropTypes.func,
  profilePress: PropTypes.func,
};
