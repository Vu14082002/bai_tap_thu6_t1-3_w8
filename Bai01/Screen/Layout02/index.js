import { useNavigation, useRoute } from '@react-navigation/native';
import {
     SafeAreaView,
     TouchableOpacity,
     View,
     Text,
     Image,
} from 'react-native';
import { styles } from './style';

export const Layout02 = function () {
     const navigation = useNavigation();
     const route = useRoute();
     const { key, key2 } = route.params || {};
     return (
          <SafeAreaView style={[styles.container]}>
               <View style={[styles.grTop]}></View>
               <View style={[styles.grBoddy]}>
                    <Text style={[styles.textName]}>Name </Text>
                    <View
                         style={[
                              {
                                   justifyContent: 'space-between',
                                   flexDirection: 'row',
                              },
                         ]}
                    >
                         <Text style={[styles.textSubName]}>Text sub name</Text>
                         <Text style={[styles.textPrice]}> price</Text>
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
                                   <Text style={[styles.delivery]}>
                                        Delivery in
                                   </Text>
                              </View>
                              <Text style={[styles.minute]}> 30 phut </Text>
                         </View>
                    </View>
               </View>
          </SafeAreaView>
     );
};
