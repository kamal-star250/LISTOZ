import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import FooterPage from '../CommanPages/FooterPage';
// import PropsType from 'prop-types'
class DashbordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
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
  NextPage = (name) => {
    alert(name);
  };
  GoList = (Addname) => {
    alert(Addname);
  };
  render() {
    return (
      <SafeAreaView>
        <View style={{height: '100%'}}>
          <View style={{height: '90%'}}>
            <ScrollView>
              <View style={styles.HeaderView}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/Icons/DrawerIcon.png')}
                    style={{width: 20, height: 20, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <Image
                  source={require('../../assets/Icons/Logo.png')}
                  style={{width: 150, height: 50, resizeMode: 'contain'}}
                />
                <Image
                  source={require('../../assets/Icons/Locate.png')}
                  style={{width: 20, height: 20, resizeMode: 'contain'}}
                />
              </View>
              {/* End Header View */}

              <View style={{padding: 10}}>
                {/* SearchBar Start */}
                <View style={styles.SearchbarView}>
                  <TextInput
                    style={{
                      width: '90%',
                      height: '100%',
                      fontFamily: 'OpenSans-Regular',
                      backgroundColor: '#fff',
                    }}
                    //   placeholder="Search"
                  />
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/Icons/Search.png')}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </TouchableOpacity>
                </View>
                {/* End SearchBar */}
                <View style={styles.CategoryView}>
                  <Text style={{fontFamily: 'OpenSans-Bold'}}> COTEGORIES</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('CategoriesScreen')
                    }
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../assets/Icons/Viewall.png')}
                      style={styles.ViewIcon}
                    />
                  </TouchableOpacity>
                </View>
                {/* Categoies List Start */}
                <FlatList
                  // style={{width: '100%'}}
                  data={this.state.Categories}
                  numColumns={3}
                  // horizontal={true}
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
                {/* Leatest Adds area */}
                <View style={styles.CategoryView}>
                  <Text style={{fontFamily: 'OpenSans-Bold'}}> Latest Ads</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('AllAddScreen')
                    }
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={require('../../assets/Icons/Viewall.png')}
                      style={styles.ViewIcon}
                    />
                  </TouchableOpacity>
                </View>

                {/* <FlatList
                  data={this.state.Adds}
                  numColumns={2}
                  renderItem={(item, imdex) => (
                    <Text style={{color: 'blue'}}>{item.Addname}</Text>
                  )}
                /> */}
                <FlatList
                  data={this.state.Adds}
                  numColumns={2}
                  keyExtractor={(item) => item.id}
                  renderItem={({item, index}) => (
                    //  <Text>{item.Addname}</Text>
                    <View style={styles.AddMainView}>
                      <TouchableOpacity
                        onPress={() => this.GoList(item.Addname)}
                        style={{width: '100%', height: '70%'}}>
                        <ImageBackground
                          borderTopLeftRadius={10}
                          borderTopRightRadius={10}
                          resizeMode={'contain'}
                          style={{width: '100%', height: '100%', marginTop: -5}}
                          source={item.Addimage}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: 10,
                            }}>
                            <Text></Text>
                            <TouchableOpacity>
                              <Image
                                style={styles.HartIcon}
                                source={item.Hartimage}
                              />
                            </TouchableOpacity>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              padding: 5,
                              bottom: 5,
                              width: '100%',
                              position: 'absolute',
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <TouchableOpacity>
                                <Image
                                  style={styles.HartIcon}
                                  source={item.Hartimage}
                                />
                              </TouchableOpacity>
                              <Text style={{color: '#fff', fontSize: 10}}>
                                Gwalior
                              </Text>
                            </View>
                            <TouchableOpacity>
                              <Image
                                style={styles.HartIcon}
                                source={item.Pimage}
                              />
                            </TouchableOpacity>
                          </View>
                        </ImageBackground>
                      </TouchableOpacity>
                      <View style={{padding: 8}}>
                        <Text>
                          <Text style={{color: 'blue', fontSize: 10}}>
                            {item.Addname}
                          </Text>
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{fontSize: 10}}>{item.Addid}</Text>
                          <TouchableOpacity>
                            <Image
                              style={{
                                width: 15,
                                height: 15,
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
                          <Text
                            style={{fontSize: 10, fontFamily: 'OpenSans-Bold'}}>
                            $2,692
                          </Text>
                          <TouchableOpacity style={styles.Offbtn}>
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: 6,
                                fontFamily: 'OpenSans-Regular',
                              }}>
                              {item.off}
                            </Text>
                          </TouchableOpacity>

                          <Text
                            style={{
                              fontSize: 7,
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

                {/* Adds Start */}
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
  SearchbarView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  CategoryView: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewIcon: {
    width: 60,
    height: 20,
    resizeMode: 'contain',
  },
  CategoryCartView: {
    width: '31%',
    margin: '1.2%',
    // padding: 10,
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
    // marginTop: ,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  AddMainView: {
    width: '46%',
    height: 200,
    // padding: 10,
    margin: '2%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  HartIcon: {
    width: 30,
    height: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 2,
  },
  Offbtn: {
    width: 30,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default DashbordScreen;
