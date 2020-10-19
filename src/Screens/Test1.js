// import React, {Component} from 'react';
// import {View, Text, Image} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
// class Test1 extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = {  };
//   }
//   render() {
//     return (
//       <View style={{alignItems: 'center', justifyContent: 'center'}}>
//         <ScrollView
//         showsVerticalScrollIndicator
//          pagingEnabled
//          maximumZoomScale
//          >
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//           <Text style={{fontSize: 90}}>Hello ok</Text>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export default Test1;

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Image,
//   Dimensions,
// } from 'react-native';
// import {color} from 'react-native-reanimated';

// export default class Test1 extends Component {
//   render() {
//     let screenWidth = Dimensions.get('window').width;
//     return (
//       <View>
//         <ScrollView indicatorStyl="black">
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//           <Text style={styles.welcome}>
//             Welcome to React NativeWelcome to React Native
//           </Text>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   contentContainer: {
//     marginTop: 50,
//     paddingVertical: 20,
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 60,
//   },
// });

import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
class CustomScrollview extends Component {
  state = {
    indicator: new Animated.Value(0),
    wholeHeight: 1,
    visibleHeight: 0,
  };
  render() {
    const indicatorSize =
      this.state.wholeHeight > this.state.visibleHeight
        ? (this.state.visibleHeight * this.state.visibleHeight) /
          this.state.wholeHeight
        : this.state.visibleHeight;

    const difference =
      this.state.visibleHeight > indicatorSize
        ? this.state.visibleHeight - indicatorSize
        : 1;
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(width, height) => {
            this.setState({wholeHeight: height});
          }}
          onLayout={({
            nativeEvent: {
              layout: {x, y, width, height},
            },
          }) => this.setState({visibleHeight: height})}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: this.state.indicator}}},
          ])}></ScrollView>
        <View style={styles.indicatorWrapper} />
        <Animated.View
          style={[
            styles.indicator,
            {
              height: indicatorSize,
              transform: [
                {
                  translateY: Animated.multiply(
                    this.state.indicator,
                    this.state.visibleHeight / this.state.wholeHeight,
                  ).interpolate({
                    inputRange: [0, difference],
                    outputRange: [0, difference],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );
  }
}

export default CustomScrollview;
