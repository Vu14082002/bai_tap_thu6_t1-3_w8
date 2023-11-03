import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     TextInput,
     Image,
     FlatList,
} from 'react-native';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
export const Item = function ({ item }) {
     const navigation = useNavigation();
     const route = useRoute();
     return (
          <TouchableOpacity
               onPress={() => {
                    navigation.navigate('Layout02', {
                         item: item,
                    });
               }}
               style={[{ width: '100%' }]}
          >
               <View style={[styles.itemContainer]}>
                    <View style={[styles.itemLeft]}>
                         <Image
                              source={{ uri: item.url }}
                              style={{
                                   width: 100,
                                   height: 100,
                              }}
                         />
                    </View>
                    <View style={[styles.itemRight]}>
                         <Text style={[styles.itemTextHeader]}>{item.name}</Text>
                         <Text style={[styles.itemTextHeaderSub]}>{item.subname}</Text>
                         <View
                              style={[
                                   {
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                   },
                              ]}
                         >
                              <Text style={[styles.itemTexPrice]}>{item.price}</Text>
                              <Image
                                   source={require('../../assets/img/plus_button.png')}
                                   style={{ width: 45, height: 45 }}
                                   resizeMode='contain'
                              />
                         </View>
                    </View>
               </View>
          </TouchableOpacity>
     );
};

export const Layout01 = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const [textInput, setTextInput] = useState();
     const [data, setData] = useState([]);
     const [btnSelect, setBtnSelected] = useState('Donut');
     const { key, key2 } = route.params || {};
     useEffect(function () {
          fetch('https://65443b8b5a0b4b04436c2e7e.mockapi.io/api/v1/tuan08')
               .then((resp) => resp.json())
               .then((data) => setData(data));
     }, data);
     return (
          <SafeAreaView style={[styles.container]}>
               {/* HEADER */}{' '}
               <View style={[styles.grHeader]}>
                    <Text style={[styles.header1]}>Welcome, Jala! </Text>
                    <Text style={[styles.header2]}>Choice you Best food </Text>
                    <View
                         style={[
                              {
                                   flexDirection: 'row',
                                   justifyContent: 'space-between',
                                   alignItems: 'center',
                                   marginRight: 20,
                              },
                         ]}
                    >
                         <View style={[styles.formContainer]}>
                              <View style={[styles.inputContainer]}>
                                   <TextInput
                                        placeholder='Seacrh food'
                                        style={styles.inputText}
                                        value={null}
                                        onChangeText={(inputText) => setText(inputText)}
                                   />
                              </View>
                         </View>
                         <View style={[{ backgroundColor: '#F1B000', padding: 10 }, ,]}>
                              <Ionicons name='search' color={'#fff'} size={30} />
                         </View>
                    </View>
               </View>
               <View style={[styles.grBody]}>
                    <View style={[styles.viewbtn]}>
                         <TouchableOpacity
                              style={[
                                   styles.btn,
                                   {
                                        backgroundColor:
                                             btnSelect === 'Donut' ? '#F1B000' : '#C4C4C42B',
                                   },
                              ]}
                              onPress={() => {
                                   setBtnSelected('Donut');
                              }}
                         >
                              <Text style={[styles.btnText]}>Donut</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={[
                                   styles.btn,
                                   {
                                        backgroundColor:
                                             btnSelect === 'Pink Donut' ? '#F1B000' : '#C4C4C42B',
                                   },
                              ]}
                              onPress={() => {
                                   setBtnSelected('Pink Donut');
                              }}
                         >
                              <Text style={[styles.btnText]}>Pink Donut</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                              style={[
                                   styles.btn,
                                   {
                                        backgroundColor:
                                             btnSelect === 'Floatting' ? '#F1B000' : '#C4C4C42B',
                                   },
                              ]}
                              onPress={() => {
                                   setBtnSelected('Floatting');
                              }}
                         >
                              <Text style={[styles.btnText]}>Floatting</Text>
                         </TouchableOpacity>
                    </View>
                    {/* ITEM */}
                    <View
                         style={{
                              width: '100%',
                              alignItems: 'center',
                              flex: 1,
                         }}
                    >
                         <FlatList
                              data={data}
                              numColumns={1}
                              style={[{ width: '100%' }]}
                              horizontal={false}
                              keyExtractor={(item) => item.key}
                              renderItem={({ item }) => {
                                   return <Item item={item} />;
                              }}
                         />
                    </View>
               </View>
          </SafeAreaView>
     );
};
