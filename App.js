import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNav from './navScreens/MainNav.js';

export default function App() {
  return (
      <MainNav />
  );
}

//  {/* <StatusBar style="auto" /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
