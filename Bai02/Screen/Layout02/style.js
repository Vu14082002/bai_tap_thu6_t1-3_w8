import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#fff',
     },
     formContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
     },
     inputContainer: {
          borderColor: 'gray',
          width: '100%',
          justifyContent: 'center',
     },
     inputText: {
          height: 44,
          width: '100%',
          placeholderTextColor: 'gray',
          fontSize: 20,
          fontWeight: '500',
          borderRadius: 4,
          paddingLeft: 50,
          paddingRight: 20,
          borderWidth: 1,
          borderColor: 'gray',
     },
     itemContainer: {
          backgroundColor: '#dadce0',
          height: 48,
          borderRadius: 24,
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
     },
     itemLeft: {
          flex: 8,
          flexDirection: 'row',
          marginLeft: 20,
     },
     itemRight: {
          flex: 4,
          alignItems: 'flex-end',
          marginRight: 20,
     },
});
