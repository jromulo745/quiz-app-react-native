/*
to-do:
  - timed quiz
  - quiz game modes: solo/another [anonymous player]/timed solo
*/

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

// import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

// -------------------------------------------------------------------

export default function Index() {

  const deviceWidth = Dimensions.get('window').width;
  const deviceheight = Dimensions.get('window').height;

  let jsonQuestions: string[] = [];
  let jsonAnswers: string[] = [];

  const customData = require('../multiple-choice.json');

  const unpressedButtonColor = 'pink';
  const pressedButtonColor = 'white';
  const disabledButtonColor = 'grey';
  const incorrectChoiceColor = 'red';
  const correctChoiceColor = 'green';

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [counter, updateCounter] = React.useState(0);
  const [questions, fetchQuestions] = React.useState([]);

  const [button1Color, setButton1Color] = React.useState(unpressedButtonColor);
  const [button2Color, setButton2Color] = React.useState(unpressedButtonColor);
  const [button3Color, setButton3Color] = React.useState(unpressedButtonColor);
  const [button4Color, setButton4Color] = React.useState(unpressedButtonColor);
  const [button5Color, setButton5Color] = React.useState(unpressedButtonColor);

  const [choiceButtonDisabled, setChoiceButtonDisabled] = React.useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);

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
    setButton1Color(disabledButtonColor);
    setButton2Color(disabledButtonColor);
    setButton3Color(disabledButtonColor);
    setButton4Color(disabledButtonColor);
    setButton5Color(disabledButtonColor);

    // set the selected button to be red, if incorrectly selected
    if (entered !== correctAnswer) {
      switch (buttonNumber) {
        case 1:
          setButton1Color(incorrectChoiceColor);
          break;
        case 2:
          setButton2Color(incorrectChoiceColor);
          break;
        case 3:
          setButton3Color(incorrectChoiceColor);
          break;
        case 4:
          setButton4Color(incorrectChoiceColor);
          break;
        case 5:
          setButton5Color(incorrectChoiceColor);
          break;
      }
    }

    // set the correct button to be green, regardless of whether it was pressed
    switch (correct_index) {
      case 0:
        setButton1Color(correctChoiceColor);
        break;
      case 1:
        setButton2Color(correctChoiceColor);
        break;
      case 2:
        setButton3Color(correctChoiceColor);
        break;
      case 3:
        setButton4Color(correctChoiceColor);
        break;
      case 4:
        setButton5Color(correctChoiceColor);
        break;
    }

    setChoiceButtonDisabled(true);
    setNextButtonDisabled(false);
  }

  // ------------------------------------------------------

  function nextQuestion() {
    updateCounter(counter + 1);
    setChoiceButtonDisabled(false);
    setNextButtonDisabled(true);

    // reset button colors
    setButton1Color(unpressedButtonColor);
    setButton2Color(unpressedButtonColor);
    setButton3Color(unpressedButtonColor);
    setButton4Color(unpressedButtonColor);
    setButton5Color(unpressedButtonColor);
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
      {/* <LinearGradient colors={['rgb(58,174,216)', 'transparent']} start={{x: 0.0, y: 0.0}} end={{x: 1, y: 1}}> */}
        <Text style={{color: 'grey', marginTop: (deviceheight * 0.05), marginBottom: (deviceWidth * 0.05), fontSize: 25, textAlign: 'center'}}>Question {counter + 1}<Text style={{fontSize: 15}}> / {jsonQuestions.length}</Text> </Text>
        
        {/* white background */}
        <View style={{alignItems: 'center', backgroundColor: 'white', paddingTop: (deviceheight * 0.01), borderRadius: 20, marginHorizontal: 16}}>
          {/* <LinearGradient style={{borderRadius: 20, marginTop:  0, marginBottom: 15, marginLeft: (deviceWidth * 0.01), marginRight: (deviceWidth * 0.01)}} colors={['rgba(61, 171, 201, 1)', 'transparent']} end={{x: 0.0, y: 0.0}}> */}
            <Text style={{overflow: 'hidden', borderRadius: 20, marginBottom: 15, marginLeft: (deviceWidth * 0.01), marginRight: (deviceWidth * 0.01), color: 'grey', fontSize: 19, alignSelf: 'center', padding: 20}}>{jsonQuestions[counter]}</Text>
          {/* </LinearGradient> */}

          {/* ------------------------------------------------------ */}
          {/* next button */}
          <Pressable disabled={nextButtonDisabled} style={({pressed}) => [
            {
              backgroundColor: pressed ? pressedButtonColor: 'grey',
              borderRadius: 13,
              padding: 12,
              marginBottom: 10
            }
          ]} onPress={() => nextQuestion()}>
            <Text>Next Question</Text>
          </Pressable>

          {/* ------------------------------------------------------ */}
          {/* choice 1 */}
          <Pressable disabled={choiceButtonDisabled} style={({pressed}) => [
            {
              alignItems: 'center',
              width: 300,
              backgroundColor: pressed ? pressedButtonColor: button1Color,
              borderRadius: 13,
              padding: 12,
              marginBottom: 10,
            }
          ]} onPress={() => checkAnswer(jsonAnswers[counter][0], 1) }>
            <Text>{formatSelection(jsonAnswers[counter][0])}</Text>
          </Pressable>

          {/* ------------------------------------------------------ */}
          {/* choice 2 */}
          <Pressable disabled={choiceButtonDisabled} style={({pressed}) => [
            {
              alignItems: 'center',
              width: 300,
              backgroundColor: pressed ? pressedButtonColor: button2Color,
              borderRadius: 13,
              padding: 12,
              marginBottom: 10
            }
          ]} onPress={() => checkAnswer(jsonAnswers[counter][1], 2)}>
            <Text>{formatSelection(jsonAnswers[counter][1])}</Text>
          </Pressable>
          
          {/* ------------------------------------------------------ */}
          {/* choice 3 */}
          <Pressable disabled={choiceButtonDisabled} style={({pressed}) => [
            {
              alignItems: 'center',
              width: 300,
              backgroundColor: pressed ? pressedButtonColor: button3Color,
              borderRadius: 13,
              padding: 12,
              marginBottom: 10
            }
          ]} onPress={() => checkAnswer(jsonAnswers[counter][2], 3)}>
            <Text>{formatSelection(jsonAnswers[counter][2])}</Text>
          </Pressable>

          {/* ------------------------------------------------------ */}
          {/* choice 4 */}
          <Pressable disabled={choiceButtonDisabled} style={({pressed}) => [
            {
              alignItems: 'center',
              width: 300,
              backgroundColor: pressed ? pressedButtonColor: button4Color,
              borderRadius: 13,
              padding: 12,
              marginBottom: 10
            }
          ]} onPress={() => checkAnswer(jsonAnswers[counter][3], 4)}>
            <Text>{formatSelection(jsonAnswers[counter][3])}</Text>
          </Pressable>

          {/* ------------------------------------------------------ */}
          {/* choice 5 */}
          <Pressable disabled={choiceButtonDisabled} style={({pressed}) => [
            {
              alignItems: 'center',
              width: 300,
              backgroundColor: pressed ? pressedButtonColor: button5Color,
              borderRadius: 13,
              padding: 12,
              marginBottom: 10
            }
          ]} onPress={() => checkAnswer(jsonAnswers[counter][4], 5)}>
            <Text>{formatSelection(jsonAnswers[counter][4])}</Text>
          </Pressable>

          {/* ------------------------------------------------------ */}
        </View>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
});