import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContactForm from './src/screens/ContactForm';

export default function App() {
  return (
    <View style={styles.container}>
     <ContactForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   margin:48,
    
  },
});
