import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './style';

export const Layout02 = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { item } = route.params || {};
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.grTop]}>
                    <Image
                         source={{ uri: item.url }}
                         style={{ width: 278, height: 278 }}
                         resizeMode='contain'
                    />
               </View>
               <View style={[styles.grBoddy]}>
                    <Text style={[styles.textName]}>{item.name} </Text>
                    <View
                         style={[
                              {
                                   justifyContent: 'space-between',
                                   flexDirection: 'row',
                              },
                         ]}
                    >
                         <Text style={[styles.textSubName]}>{item.subname}</Text>
                         <Text style={[styles.textPrice]}> {item.price}</Text>
                    </View>
                    <View style={[styles.body2]}>
                         <View style={[styles.left]}>
                              <View style={[{ flexDirection: 'row' }]}>
                                   <Image
                                        source={require('../../assets/img/lock.png')}
                                        style={{
                                             width: 20,
                                             height: 20,
                                             marginRight: 20,
                                        }}
                                        resizeMode='contain'
                                   />
                                   <Text style={[styles.delivery]}>Delivery in</Text>
                              </View>
                              <Text style={[styles.minute]}> ${item.minute}</Text>
                         </View>
                         <View style={[styles.right]}>
                              <View style={[styles.btnGr]}>
                                   <TouchableOpacity onPress={() => {}}>
                                        <Image
                                             source={require('../../assets/img/tru.png')}
                                             style={{ width: 24, height: 24 }}
                                             resizeMode='contain'
                                        />
                                   </TouchableOpacity>
                                   <Text style={[styles.textAmount]}> 1 </Text>
                                   <TouchableOpacity onPress={() => {}}>
                                        <Image
                                             source={require('../../assets/img/add.png')}
                                             style={{ width: 24, height: 24 }}
                                             resizeMode='contain'
                                        />
                                   </TouchableOpacity>
                              </View>
                         </View>
                    </View>
                    <Text style={[styles.res]}> Restaurants info</Text>
                    <Text style={[styles.textDesc]}>{item.Restaurants_info}</Text>
                    {/*------------BUTTON STYLE START---------------- */}
                    <TouchableOpacity
                         style={{
                              width: '100%',
                              height: 60,
                              borderRadius: 5,
                              backgroundColor: '#F1B000',
                              justifyContent: 'center',
                              alignItems: 'center',
                         }}
                         onPress={() => {
                              navigation.navigate('Layout01');
                         }}
                    >
                         <Text
                              style={{
                                   color: '#FFFDFD',
                                   fontSize: 25,
                                   fontWeight: 'bold',
                              }}
                         >
                              ADD TO CART
                         </Text>
                    </TouchableOpacity>
                    {/*-------------- BUTTON STYLE END-------------*/}
               </View>
          </SafeAreaView>
     );
};
