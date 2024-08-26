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

// -------------------------------------------------------------------

export default function HomeScreen() {

  let jsonQuestions: string[] = [];
  let jsonAnswers: string[] = [];

  const customData = require('../../multiple-choice.json');

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [counter, updateCounter] = React.useState(0);
  const [questions, fetchQuestions] = React.useState([]);

  let correctAnswer = ""

  for (let item in customData) {
    jsonQuestions.push(item);
    jsonAnswers.push(customData[item]);
  }

  function checkAnswer(entered: number): void {
    Alert.alert(jsonAnswers[0]);
  }

  function formatSelection(selection: string): String {
    if (selection[0] === "*") {
      correctAnswer = selection;
      return selection.substring(1);
    }
    else {
      return selection;
    }
  }

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginTop: 15, marginBottom: 15, color: 'white', fontSize: 25, textAlign: 'center'}}>Question {counter + 1}</Text>
      <Text style={{color: 'white', marginBottom: 15, }}>{jsonQuestions[counter]}</Text>
      
      <View style={{display: 'flex', alignItems: 'center'}}>
      
        {/* ------------------------------------------------------ */}
        {/* next button */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'grey',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => Alert.alert('Not yet bitch')}>
          <Text>Next Question</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 1 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(2)}>
          <Text>{formatSelection(jsonAnswers[counter][0])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 2 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(3)}>
          <Text>{formatSelection(jsonAnswers[counter][1])}</Text>
        </Pressable>
        
        {/* ------------------------------------------------------ */}
        {/* choice 3 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => Alert.alert('people are shit')}>
          <Text>{formatSelection(jsonAnswers[counter][2])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 4 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => Alert.alert('people are shit')}>
          <Text>{formatSelection(jsonAnswers[counter][3])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 5 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': 'pink',
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => Alert.alert('people are shit')}>
          <Text>{formatSelection(jsonAnswers[counter][4])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
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