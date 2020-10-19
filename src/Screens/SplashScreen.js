import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView} from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SignupScreen');
    }, 3000);
  }
  // state = {  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%', width: '100%'}}>
          <ImageBackground
            source={require('../../assets/Images/splashimage.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
