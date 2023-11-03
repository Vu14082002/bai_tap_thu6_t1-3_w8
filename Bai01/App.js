import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Layout01 } from './Screen/Layout01';
import { Layout02 } from './Screen/Layout02';
const Stack = createNativeStackNavigator();
export default function App() {
     return (
          <NavigationContainer>
               <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <Stack.Screen name='Layout02' component={Layout02} /> */}
                    <Stack.Screen name='Layout01' component={Layout01} />
                    <Stack.Screen name='Layout02' component={Layout02} />
               </Stack.Navigator>
          </NavigationContainer>
     );
}
