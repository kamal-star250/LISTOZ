import React, { Component } from 'react';
import { View,Text,Image,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


class HeaderPage extends Component {
    // state = {  }
    render() {
        return (
           
                
                   <View 
                   style={{
                       width:'100%', 
                       height:50,
                       alignItems:'center',
                       flexDirection:'row',
                       justifyContent:'space-between',
                       paddingHorizontal:10,
                       backgroundColor:'pink'
                       }}>
                        <Text></Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignupScreen')}>
                        <Text style={{fontFamily:'OpenSans-BoldItalic'}}>Header Page</Text>
                        </TouchableOpacity>
                        <Text></Text>
                   </View>

                
          
        );
    }
}

export default HeaderPage;