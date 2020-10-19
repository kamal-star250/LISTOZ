import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';

class PostImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Images: [
        {
          id: 0,
          Image: require('../../assets/Images/kk.png'),
        },
        {
          id: 1,
          Image: require('../../assets/Images/kk.png'),
        },
        {
          id: 2,
          Image: require('../../assets/Images/kk.png'),
        },
        {
          id: 3,
          Image: require('../../assets/Images/kk.png'),
        },
      ],
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
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
              <View
                style={{
                  height: 50,
                  // alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                }}>
                <Text
                  style={{
                    color: '#33558B',
                    textAlign: 'center',
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  Add Photo
                </Text>
              </View>
              <View
                style={{
                  padding: 20,
                }}>
                <View style={styles.DottedView}>
                  <TouchableOpacity>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('../../assets/Icons/Locate.png')}
                    />
                  </TouchableOpacity>
                </View>
                {/* Bottom Images */}
                <FlatList
                  data={this.state.Images}
                  numColumns={4}
                  // keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => (
                    <View
                      style={{
                        width: '22%',
                        height: 100,
                        margin: 5,
                        marginTop: 20,
                      }}>
                      <ImageBackground
                        style={{width: '100%', height: '100%'}}
                        source={item.Image}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 5,
                          }}>
                          <Text></Text>

                          <TouchableOpacity style={styles.Closebtn}>
                            <Image
                              style={{
                                width: 10,
                                height: 10,
                                resizeMode: 'contain',
                              }}
                              source={require('../../assets/Icons/CloseIcon.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </ImageBackground>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.BottomView}>
            <TouchableOpacity style={styles.BotomBtns}>
              <Text style={{color: '#fff', fontFamily: 'OpenSans-Bold'}}>
                Skip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BotomBtns1}>
              <Text style={{color: '#fff', fontFamily: 'OpenSans-Bold'}}>
                Post
              </Text>
            </TouchableOpacity>
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
  DottedView: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Closebtn: {
    width: 15,
    height: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  BottomView: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
  },
  BotomBtns: {
    width: '45%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
  },
  BotomBtns1: {
    width: '45%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01B7EA',
  },
});
export default PostImage;
