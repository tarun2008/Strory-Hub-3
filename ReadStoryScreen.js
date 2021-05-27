import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class ReadStoryscreen extends React.Component { 
 render() {
    return (
      <View>      
          <Text style = {styles.text}>  Read a Story </Text>
      </View>
    );
  }
  }
const styles = StyleSheet.create({
  text : {
    alignSelf : 'center',
    marginTop : 170
  }
});
