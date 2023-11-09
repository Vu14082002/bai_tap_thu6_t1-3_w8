import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     Image,
     TextInput,
} from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { Context } from '../../App';

export const Layout01 = function () {
     const navigation = useNavigation();
     const value = useContext(Context);
     console.log(value);
     const route = useRoute();
     const { key, key2 } = route.params || {};
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.gr1]}>
                    <Image
                         source={require('../../assets/img/logo.png')}
                         style={{ width: 271, height: 271 }}
                         resizeMode='contain'
                    />
               </View>
               <View style={[styles.gr2]}>
                    <View
                         style={[
                              {
                                   width: '100%',
                                   alignItems: 'center',
                              },
                         ]}
                    >
                         <Text style={[styles.text]}>MANAGE YOUR TASK </Text>
                    </View>
                    <View style={[styles.formContainer]}>
                         <View style={[styles.inputContainer]}>
                              <Ionicons
                                   name='mail-outline'
                                   color={'lightgray'}
                                   size={24}
                                   style={{
                                        position: 'absolute',
                                        left: 20,
                                   }}
                                   resizeMode='contain'
                              />
                              <TextInput
                                   placeholder='Enter your Email'
                                   style={styles.inputText}
                                   value={null}
                                   onChangeText={(inputText) => {
                                        value.setName(inputText);
                                   }}
                              />
                         </View>
                    </View>
                    <View style={[{ width: '100%', alignItems: 'center' }]}>
                         {/*------------BUTTON STYLE START---------------- */}
                         <TouchableOpacity
                              style={{
                                   width: '50%',
                                   height: 44,
                                   borderRadius: 12,
                                   backgroundColor: '#00BDD6',
                                   justifyContent: 'center',
                                   alignItems: 'center',
                              }}
                              onPress={() => {
                                   navigation.navigate('Layout02');
                              }}
                         >
                              <View
                                   style={[
                                        {
                                             justifyContent: 'space-between',
                                             flexDirection: 'row',
                                             alignItems: 'center',
                                        },
                                   ]}
                              >
                                   <Text
                                        style={{
                                             color: '#FFFDFD',
                                             fontSize: 16,
                                             fontWeight: 400,
                                        }}
                                   >
                                        ADD TO CART
                                   </Text>
                                   <Ionicons
                                        name='arrow-forward'
                                        color={'#fff'}
                                        size={24}
                                   />
                              </View>
                         </TouchableOpacity>
                         {/*-------------- BUTTON STYLE END-------------*/}
                    </View>
               </View>
               <View style={[styles.gr3]}>
                    <Text></Text>
               </View>
          </SafeAreaView>
     );
};
