import { 
  Image, 
  StyleSheet, 
  Platform, 
  Text, 
  View,
  SafeAreaView,
  StatusBar,
  SectionList,
  TextInput,
  Button,
  Alert,
  Pressable
} from 'react-native';

import React from 'react';

export default function HomeScreen() {

  let jsonQuestions = [];
  let jsonAnswers = [];

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [counter, updateCounter] = React.useState(0);
  const [questions, fetchQuestions] = React.useState([]);

  const customData = require('../../multiple-choice.json');

  for (let item in customData) {
    jsonQuestions.push(item);
    jsonAnswers.push(customData[item]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginTop: 15, color: 'black', fontSize: 30, textAlign: 'center'}}>Question {counter + 1}</Text>
      
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        >
      </TextInput> */}
      

      <View style={{display: 'flex', alignItems: 'center'}}>
        
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => Alert.alert('people are shit')}>
          <Text>Answer you fucker</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => Alert.alert('bitch')}>
          <Text>Answer 2</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={() => Alert.alert('bitch')}>
          <Text>Answer 3</Text>
        </Pressable>
        
        <Pressable style={styles.button} onPress={() => Alert.alert('bitch')}>
          <Text>Answer 4</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    borderColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 0.1,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'pink',
    width: 100
  }
});
