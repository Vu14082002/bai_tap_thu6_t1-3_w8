import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#fff',
     },
     fl3: {
          marginTop: 20,
          flex: 3,
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     fl1: {
          flex: 1,
     },
     header: {
          color: '#171A1F',
          fontSize: 32,
          fontWeight: 700,
     },

     //  form
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
});
