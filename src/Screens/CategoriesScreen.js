import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FooterPage from '../CommanPages/FooterPage';
class CategoriesScreen extends Component {
  state = {
    Categories: [
      {
        id: 0,
        name: 'Multimedia',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 1,
        name: 'Automobiles',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 2,
        name: 'Real Estate',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 3,
        name: 'Jobs Offers',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 4,
        name: 'Fashion, Home & Garden',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 5,
        name: 'Services',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 6,
        name: 'Job Search',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 7,
        name: 'Local Events',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
      {
        id: 8,
        name: 'Real Estate',
        ImageUrl: require('../../assets/Icons/Home.png'),
      },
    ],
  };
  NextPage = (name) => {
    alert(name);
  };
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={{height: '90%'}}>
            <ScrollView>
              <View style={styles.HeaderView}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image
                    source={require('../../assets/Icons/backarrow.png')}
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                {/* <Text
                  style={{
                    fontFamily: 'OpenSans-ExtraBold',
                    color: '#4A4A4A',
                  }}>
                  Post Add
                </Text> */}
                <Text></Text>
              </View>
              {/* Header Area End */}
              <View style={{padding: 10}}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#000000',
                      fontFamily: 'OpenSans-ExtraBold',
                      fontSize: 18,
                    }}>
                    Categories
                  </Text>
                  <Image
                    source={require('../../assets/Icons/UserProfile.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
                {/* Category area start */}
                <FlatList
                  data={this.state.Categories}
                  numColumns={3}
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      onPress={() => this.NextPage(item.name)}
                      style={styles.CategoryCartView}>
                      <View
                        style={{
                          height: '70%',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{width: 50, height: 50}}
                          source={item.ImageUrl}
                        />
                      </View>
                      <View style={{height: '30%', width: '100%'}}>
                        <Text
                          style={{
                            fontFamily: 'OpenSans-Regular',
                            textAlign: 'center',
                          }}>
                          {item.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </ScrollView>
          </View>
          {/* Footer Area Reserved */}
          <View style={{height: '10%'}}>
            <FooterPage />
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
    paddingHorizontal: 15,
  },
  CategoryCartView: {
    width: '31%',
    margin: '1.2%',
    // padding: 10,
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
});
export default CategoriesScreen;
