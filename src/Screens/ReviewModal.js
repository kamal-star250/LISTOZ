import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
class ReviewModal extends Component {
  state = {
    isModalVisible: false,
    Reviews: [
      {
        id: 0,
        UserName: 'Rita Leite',
        Review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,',
        ReviewTime: '2 Hour',
        RettingImage: require('../../assets/Icons/Home.png'),
      },
      {
        id: 1,
        UserName: 'Emelda Scandroot',
        Review: 'Great',
        ReviewTime: '2 Hour',
        RettingImage: require('../../assets/Icons/Home.png'),
      },
    ],
  };
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={this.toggleModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
          <Modal style={{margin: 0}} isVisible={this.state.isModalVisible}>
            <SafeAreaView>
              <View style={{height: '100%'}}>
                <View style={styles.ModalView}>
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderColor: '#999999',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: 10,
                      //   backgroundColor: 'red',
                      height: 25,
                    }}>
                    <Text
                      style={{color: '#756FD6', fontFamily: 'OpenSans-Bold'}}>
                      Reviews
                    </Text>
                    <TouchableOpacity onPress={() => this.toggleModal()}>
                      <Image
                        source={require('../../assets/Icons/Home.png')}
                        style={{width: 15, height: 15}}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* Reviews Area  */}
                  {/* <FlatList
                    date={this.state.Reviews}
                    numColumns={1}
                    // keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                      <Text style={{color: '#000'}}>{item.UserName}</Text>
                    )}
                  /> */}

                  {this.state.Reviews.map((item) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderColor: '#999999',
                        }}>
                        <View style={{width: '90%'}}>
                          <Text
                            style={{
                              color: '#314065',
                              fontFamily: 'OpenSans-Bold',
                              fontSize: 18,
                            }}>
                            {item.UserName}
                          </Text>
                          <Text>{item.Review}</Text>
                          <Text style={{marginTop: 10}}>{item.ReviewTime}</Text>
                        </View>
                        <View style={{width: '10%'}}>
                          <Image
                            source={item.RettingImage}
                            style={{width: 50, height: 50}}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ModalView: {
    backgroundColor: '#fff',
    height: '90%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
});
export default ReviewModal;
