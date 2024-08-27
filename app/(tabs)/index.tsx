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

  const [button1Color, setButton1Color] = React.useState('pink');
  const [button2Color, setButton2Color] = React.useState('pink');
  const [button3Color, setButton3Color] = React.useState('pink');
  const [button4Color, setButton4Color] = React.useState('pink');
  const [button5Color, setButton5Color] = React.useState('pink');

  // ------------------------------------------------------

  let correctAnswer = "";
  let correct_index = 0;

  // ------------------------------------------------------

  for (let item in customData) {
    jsonQuestions.push(item);
    jsonAnswers.push(customData[item]);
  }

  // ------------------------------------------------------
  
  for (let i = 0; i < 5; i++) {
    if (jsonAnswers[counter][i][0] === "*") {
      correctAnswer = jsonAnswers[counter][i][0];
      correct_index = i;
      break;
    }
  }

  // ------------------------------------------------------

  function checkAnswer(entered: String, buttonNumber: number): void {
    
    // get the other buttons ready to be greyed out
    setButton1Color('grey');
    setButton2Color('grey');
    setButton3Color('grey');
    setButton4Color('grey');
    setButton5Color('grey');

    // set the selected button to be red, if incorrectly selected
    if (entered !== correctAnswer) {
      switch (buttonNumber) {
        case 1:
          setButton1Color('red');
          break;
        case 2:
          setButton2Color('red');
          break;
        case 3:
          setButton3Color('red');
          break;
        case 4:
          setButton4Color('red');
          break;
        case 5:
          setButton5Color('red');
          break;
      }
    }

    // set the correct button to be green, regardless of whether it was pressed
    switch (correct_index) {
      case 0:
        setButton1Color('green');
        break;
      case 1:
        setButton2Color('green');
        break;
      case 2:
        setButton3Color('green');
        break;
      case 3:
        setButton4Color('green');
        break;
      case 4:
        setButton5Color('green');
        break;
    }
  }

  // ------------------------------------------------------

  function formatSelection(selection: string): String {
    if (selection[0] === "*") {
      correctAnswer = selection;
      return selection.substring(1);
    }
    else {
      return selection;
    }
  }

  // ------------------------------------------------------

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
        ]} onPress={() => Alert.alert('You\'re ass')}>
          <Text>Next Question</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 1 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': button1Color,
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(jsonAnswers[counter][0], 1)}>
          <Text>{formatSelection(jsonAnswers[counter][0])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 2 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': button2Color,
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(jsonAnswers[counter][1], 2)}>
          <Text>{formatSelection(jsonAnswers[counter][1])}</Text>
        </Pressable>
        
        {/* ------------------------------------------------------ */}
        {/* choice 3 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': button3Color,
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(jsonAnswers[counter][2], 3)}>
          <Text>{formatSelection(jsonAnswers[counter][2])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 4 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': button4Color,
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(jsonAnswers[counter][3], 4)}>
          <Text>{formatSelection(jsonAnswers[counter][3])}</Text>
        </Pressable>

        {/* ------------------------------------------------------ */}
        {/* choice 5 */}
        <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ? 'blue': button5Color,
            borderRadius: 8,
            padding: 6,
            marginBottom: 10
          }
        ]} onPress={() => checkAnswer(jsonAnswers[counter][4], 5)}>
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