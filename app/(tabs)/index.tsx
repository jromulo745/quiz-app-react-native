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

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'white', fontSize: 30, textAlign: 'center'}}>How are you</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        >
      </TextInput>

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
