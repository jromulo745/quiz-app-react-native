import { 
  Image, 
  StyleSheet, 
  Platform, 
  Text, 
  View,
  SafeAreaView,
  StatusBar,
  SectionList
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Text style={{color: 'white', fontSize: 30}}>How are you</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  }
});
