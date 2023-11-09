import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
     Image,
} from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-web';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Context } from '../../App';

export const Item = function ({ item }) {
     const navigation = useNavigation();
     const route = useRoute();
     const value = useContext(Context);
     return (
          <View>
               {' '}
               <TouchableOpacity style={[{ width: '100%' }]}>
                    <View style={[styles.itemContainer]}>
                         <View style={[styles.itemLeft]}>
                              <Image
                                   source={require('../../assets/img/check.png')}
                                   style={{
                                        width: 24,
                                        height: 24,
                                        marginRight: 10,
                                   }}
                                   resizeMode='contain'
                              />

                              {item}
                         </View>
                         <View style={[styles.itemRight]}>
                              <Image
                                   source={require('../../assets/img/book.png')}
                                   style={{ width: 24, height: 24 }}
                                   resizeMode='contain'
                              />
                         </View>
                    </View>
               </TouchableOpacity>{' '}
          </View>
     );
};

export const Layout02 = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { key, key2 } = route.params || {};
     const [data, setData] = useState([]);
     const [search, setSearch] = useState('');
     const [temp, setTemp] = useState(data);
     useEffect(function () {
          fetch('https://65443b8b5a0b4b04436c2e7e.mockapi.io/api/v1/ToDo')
               .then((resq) => {
                    return resq.json();
               })
               .then((value) => {
                    console.log(value);
                    const newData = value.map((value) => value.todo);
                    console.log('new Data', newData);
                    setData(newData);
                    setTemp(newData);
               });
     }, []);
     const handlerData = function (newData) {
          setData([newData, ...data]);
          setTemp([newData, ...temp]);
     };

     return (
          <SafeAreaView style={[styles.container]}>
               <View
                    style={[
                         {
                              width: '100%',
                              alignItems: 'center',
                              marginVertical: 40,
                         },
                    ]}
               >
                    <View style={[styles.formContainer]}>
                         <View style={[styles.inputContainer]}>
                              <Ionicons
                                   name='search'
                                   color={'#000'}
                                   size={24}
                                   style={{
                                        position: 'absolute',
                                        left: 20,
                                   }}
                              />
                              <TextInput
                                   placeholder='search'
                                   style={styles.inputText}
                                   value={null}
                                   onChangeText={(inputText) => {
                                        console.log(
                                             'Input text -->',
                                             inputText.length
                                        );
                                        console.log('Temp -->', temp);
                                        if (inputText.length > 0) {
                                             setSearch(inputText);
                                             let dataSearch = data.filter(
                                                  (value) =>
                                                       value
                                                            .toLocaleLowerCase()
                                                            .includes(
                                                                 search.toLocaleLowerCase()
                                                            )
                                             );
                                             setData(dataSearch);
                                        } else {
                                             setData(temp);
                                        }
                                   }}
                              />
                         </View>
                    </View>
               </View>

               <View style={{ width: '100%', alignItems: 'center', flex: 5 }}>
                    <FlatList
                         data={data}
                         numColumns={1}
                         style={[{ width: '90%' }]}
                         horizontal={false}
                         renderItem={({ item }) => <Item item={item} />}
                    />
               </View>
               <View
                    style={[
                         {
                              width: '100%',
                              flex: 3,
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: 15,
                         },
                    ]}
               >
                    {/*------------BUTTON STYLE START---------------- */}
                    <TouchableOpacity
                         style={{
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#00BDD6',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '15%',
                              borderRadius: '50%',
                         }}
                         onPress={() => {
                              navigation.navigate('Layout03', {
                                   setData: handlerData,
                              });
                         }}
                    >
                         <Ionicons name='add' color={'#fff'} size={30} />
                    </TouchableOpacity>
                    {/*-------------- BUTTON STYLE END-------------*/}
               </View>
          </SafeAreaView>
     );
};
