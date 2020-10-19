import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
// import {} from 'react-native-paper';
import FooterPage from '../CommanPages/FooterPage';
class AllAddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Adds: [
        {
          id: 0,
          Addname: 'Automobiles',
          Addid: '0000000000000000',
          Rate: '$2,692',
          off: '13% off',
          Postdate: '20 jun 2020',
          Addimage: require('../../assets/Images/Car1.png'),
          Hartimage: require('../../assets/Icons/Hart.png'),
          Pimage: require('../../assets/Icons/Picon.png'),
          Locationicon: require('../../assets/Icons/location.png'),
          ShareIcon: require('../../assets/Icons/Share.png'),
        },
        {
          id: 1,
          Addname: 'Automobiles',
          Addid: '0000000000000000',
          Rate: '$2,692',
          off: '13% off',
          Postdate: '20 jun 2020',
          Addimage: require('../../assets/Images/Car2.png'),
          Hartimage: require('../../assets/Icons/Hart.png'),
          Pimage: require('../../assets/Icons/Picon.png'),
          Locationicon: require('../../assets/Icons/location.png'),
          ShareIcon: require('../../assets/Icons/Share.png'),
        },
        {
          id: 2,
          Addname: 'Automobiles',
          Addid: '0000000000000000',
          Rate: '$2,692',
          off: '13% off',
          Postdate: '20 jun 2020',
          Addimage: require('../../assets/Images/Add.png'),
          Hartimage: require('../../assets/Icons/Hart.png'),
          Pimage: require('../../assets/Icons/Picon.png'),
          Locationicon: require('../../assets/Icons/location.png'),
          ShareIcon: require('../../assets/Icons/Share.png'),
        },
        {
          id: 3,
          Addname: 'Automobiles',
          Addid: '0000000000000000',
          Rate: '$2,692',
          off: '13% off',
          Postdate: '20 jun 2020',
          Addimage: require('../../assets/Images/Add.png'),
          Hartimage: require('../../assets/Icons/Hart.png'),
          Pimage: require('../../assets/Icons/Picon.png'),
          Locationicon: require('../../assets/Icons/location.png'),
          ShareIcon: require('../../assets/Icons/Share.png'),
        },
      ],
    };
  }
  GoList = (valus) => {
    // alert(Addname);
    if (valus == 'Automobiles') {
      this.props.navigation.navigate('AboutAddScreen');
    }
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
                  Explore Car
                </Text> */}
                <Text></Text>
              </View>
              {/* Header Area End */}
              <View style={{padding: 10}}>
                <View>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-ExtraBold',
                      color: '#000',
                      fontSize: 18,
                    }}>
                    Explore Car
                  </Text>
                </View>
                {/* Search area */}
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      borderBottomWidth: 0.5,

                      //   paddingHorizontal: 10,
                    }}>
                    <View
                      style={{
                        width: '16%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        // backgroundColor: 'red',
                      }}>
                      <Image
                        style={{width: 20, height: 20}}
                        source={require('../../assets/Icons/Locate.png')}
                      />
                      <Text style={{left: 10}}>In</Text>
                    </View>
                    <View
                      style={{
                        width: '84%',
                        // backgroundColor: '#ffff',
                        // borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <TextInput
                        style={{width: '80%', alignItems: 'center'}}
                        placeholderTextColor="blue"
                        placeholder="Gwalior"
                      />
                      <Image
                        style={{width: 20, height: 20, right: 15}}
                        source={require('../../assets/Icons/Locate.png')}
                      />
                    </View>
                  </View>
                  <Image
                    style={{width: 20, height: 20}}
                    source={require('../../assets/Icons/Locate.png')}
                  />
                </View>

                {/* All Add list here */}
                <FlatList
                  data={this.state.Adds}
                  //   numColumns={2}
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => (
                    //  <Text>{item.Addname}</Text>
                    <View style={styles.AddMainView}>
                      <TouchableOpacity
                        onPress={() => this.GoList(item.Addname)}
                        style={{width: '100%', height: '70%'}}>
                        <ImageBackground
                          borderRadius={10}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'contain',
                          }}
                          source={item.Addimage}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: 5,
                              //   bottom: 5,
                              width: '100%',
                              //   position: 'absolute',
                            }}>
                            <TouchableOpacity
                              style={{
                                height: 30,
                                width: 70,
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: '#000',
                                opacity: 0.8,
                                borderRadius: 15,
                              }}>
                              <TouchableOpacity>
                                <Image
                                  style={{width: 20, height: 20}}
                                  source={item.Hartimage}
                                />
                              </TouchableOpacity>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 10,
                                  fontFamily: 'OpenSans-Bold',
                                }}>
                                Gwalior
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Image
                                style={styles.HartIcon}
                                source={item.Pimage}
                              />
                            </TouchableOpacity>
                          </View>
                          <View
                            style={{
                              width: '100%',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: 10,
                              bottom: 0,
                              position: 'absolute',
                            }}>
                            <Text></Text>
                            <TouchableOpacity>
                              <Image
                                style={styles.HartIcon}
                                source={item.Hartimage}
                              />
                            </TouchableOpacity>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                      <View style={{padding: 8}}>
                        <Text>
                          <Text style={{color: 'blue', fontSize: 14}}>
                            {item.Addname}
                          </Text>
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text
                            style={{fontSize: 14, fontFamily: 'OpenSans-Bold'}}>
                            Id number: {item.Addid}
                          </Text>
                          <TouchableOpacity>
                            <Image
                              style={{
                                width: 20,
                                height: 20,
                                resizeMode: 'contain',
                                left: 10,
                              }}
                              source={item.ShareIcon}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{flexDirection: 'row'}}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontFamily: 'OpenSans-Bold',
                              }}>
                              $2,692
                            </Text>
                            <TouchableOpacity style={styles.Offbtn}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 10,
                                  fontFamily: 'OpenSans-Regular',
                                }}>
                                {item.off}
                              </Text>
                            </TouchableOpacity>
                          </View>

                          <Text
                            style={{
                              fontSize: 12,
                              color: '#707070',
                              fontFamily: 'OpenSans-Regular',
                            }}>
                            {item.Postdate}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              height: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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
    paddingHorizontal: 15,
  },
  AddMainView: {
    width: '100%',
    height: 250,
    // margin: '2%',
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  HartIcon: {
    width: 40,
    height: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  Offbtn: {
    left: 15,
    width: 50,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AllAddScreen;
