import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    calibri: require('./assets/fonts/calibri.ttf'),
    calibriBold: require('./assets/fonts/calibri-bold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaProvider>
  );
}