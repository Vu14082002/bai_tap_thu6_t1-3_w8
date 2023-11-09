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
import { useState } from 'react';

export const Layout03 = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const [dataInput, setDataInput] = useState('');
     const { setData } = route.params;
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.fl3]}>
                    <Text style={[styles.header]}> AD YOUR JOB </Text>
                    <View style={[styles.formContainer]}>
                         <View style={[styles.inputContainer]}>
                              <Image
                                   source={require('../../assets/img/aaa.png')}
                                   resizeMode='contain'
                                   style={{
                                        width: 24,
                                        height: 20,
                                        position: 'absolute',
                                        left: 20,
                                   }}
                              />

                              <TextInput
                                   placeholder='input your job'
                                   style={styles.inputText}
                                   onChangeText={(inputText) =>
                                        setDataInput(inputText)
                                   }
                              />
                         </View>
                    </View>

                    {/*------------BUTTON STYLE START---------------- */}
                    <TouchableOpacity
                         style={{
                              width: '50%',
                              height: 50,
                              borderRadius: 12,
                              backgroundColor: '#00BDD6',
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}
                         onPress={() => {
                              setData(dataInput);
                              navigation.goBack();
                         }}
                    >
                         <View
                              style={[
                                   {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                   },
                              ]}
                         >
                              <Text
                                   style={{
                                        color: '#FFFDFD',
                                        fontSize: 14,
                                        fontWeight: 400,
                                   }}
                              >
                                   FINISH
                              </Text>
                              <Ionicons
                                   name='arrow-forward'
                                   color={'#FFF'}
                                   size={24}
                                   style={[{ marginLeft: 15 }]}
                              />
                         </View>
                    </TouchableOpacity>
                    {/*-------------- BUTTON STYLE END-------------*/}
               </View>
               <View style={[styles.fl3, { justifyContent: 'center' }]}>
                    <Image
                         source={require('../../assets/img/logo.png')}
                         style={{ width: 190, height: 190 }}
                         resizeMode='contain'
                    />
               </View>
          </SafeAreaView>
     );
};
