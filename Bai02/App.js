import {
     NavigationContainer,
     useNavigation,
     useRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Layout01 } from './Screen/Layout01';
import { Layout02 } from './Screen/Layout02';
import { Layout03 } from './Screen/Layout03';
import { Ionicons } from '@expo/vector-icons';
import { createContext, useContext, useState } from 'react';
const Stack = createNativeStackNavigator();
export const Context = createContext();
export const Header = function ({}) {
     const navigation = useNavigation();
     const value = useContext(Context);
     return (
          <View style={{ flexDirection: 'row', marginRight: 15 }}>
               <Image
                    source={require('./assets/img/avatar.png')}
                    style={{
                         width: 50,
                         height: 50,
                    }}
                    resizeMode='contain'
               />
               <View>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>
                         {value.name}
                    </Text>
                    <Text
                         style={[
                              {
                                   fontWeight: 700,
                                   fontSize: 14,
                                   color: '#9095A0',
                              },
                         ]}
                    >
                         Have agare good day
                    </Text>
               </View>
          </View>
     );
};
export default function App() {
     const [name, setName] = useState('');
     const value = { name, setName };
     return (
          <Context.Provider value={value}>
               <NavigationContainer>
                    <Stack.Navigator initialRouteName='Layout01'>
                         <Stack.Screen
                              name='Layout01'
                              component={Layout01}
                              options={{ headerShown: false }}
                         />
                         <Stack.Screen
                              name='Layout02'
                              component={Layout02}
                              options={{
                                   headerRight: function () {
                                        return <Header />;
                                   },
                                   headerTitle: '',
                              }}
                         />
                         <Stack.Screen
                              name='Layout03'
                              component={Layout03}
                              options={{
                                   headerLeft: function () {
                                        return <Header />;
                                   },
                                   headerTitle: '',
                                   headerRight: function () {
                                        const navigation = useNavigation();
                                        return (
                                             <TouchableOpacity
                                                  style={{
                                                       marginRight: 20,
                                                  }}
                                                  onPress={() => {
                                                       navigation.goBack();
                                                  }}
                                             >
                                                  <Ionicons
                                                       name='arrow-back'
                                                       color={'#000'}
                                                       size={24}
                                                  />
                                             </TouchableOpacity>
                                        );
                                   },
                              }}
                         />
                    </Stack.Navigator>
               </NavigationContainer>
          </Context.Provider>
     );
}
