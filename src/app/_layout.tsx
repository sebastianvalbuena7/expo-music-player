import { useLogTrackPlayerState } from '@/hooks/useLogTrackPlayerState';
import { useSetupTrackPlayer } from '@/hooks/useSetupTrackPlayer';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const App = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });

  useLogTrackPlayerState();
  
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <StatusBar style={'auto'} />
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: '#000000'
        }
      }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default App;