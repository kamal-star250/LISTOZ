import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import FooterPage from '../CommanPages/FooterPage';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class AboutAddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        'https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1593460354583-4224ab273cfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
      ],
    };
  }
  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 300,
          backgroundColor: '#ffffff',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <Image
          source={{uri: item}}
          style={{
            width: '100%',
            height: '100%',
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 20,
            // resizeMode: 'contain',
          }}
        />
      </View>
    );
  };
  get pagination() {
    const {entries, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeIndex}
        containerStyle={{marginTop: -60}}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 10,
          marginHorizontal: 8,
          borderWidth: 1,
          borderColor: '#fff',
          // backgroundColor:""
          backgroundColor: 'rgba(0,0,0,0)',
        }}
        inactiveDotStyle={{
          // backgroundColor:'red'
          backgroundColor: '#f2f2f2',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <ScrollView>
            <View style={{height: '90%'}}>
              {/* Header Start */}
              <View style={styles.HeaderView}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
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
                  Automobile
                </Text>
                <Text></Text>
              </View>
              {/* Header Area End */}
              <View>
                <Carousel
                  loop
                  autoplay
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  data={this.state.entries}
                  renderItem={this._renderItem}
                  sliderWidth={windowWidth}
                  itemWidth={windowWidth}
                  renderItem={this._renderItem}
                  onSnapToItem={(index) => this.setState({activeIndex: index})}
                />
                {this.pagination}
              </View>
            </View>
          </ScrollView>
          <View style={{height: '10%'}}>
            <FooterPage
              homePress={() => this.props.navigation.navigate('DashbordScreen')}
              addlistpress={() =>
                this.props.navigation.navigate('AddListingScreen')
              }
              categoryPress={() =>
                this.props.navigation.navigate('CategoriesScreen')
              }
              profilePress={() =>
                this.props.navigation.navigate('ProfileScreen')
              }
            />
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
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    // paddingHorizontal: 15,
  },
});
export default AboutAddScreen;
