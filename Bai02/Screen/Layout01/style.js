import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          paddingHorizontal: 15,
          backgroundColor: '#ffff',
     },
     gr1: {
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
     },
     gr2: {
          flex: 3,
          justifyContent: 'space-around',
          alignItems: 'center',
     },
     gr3: {
          flex: 1,
     },
     text: {
          width: '60%',
          color: '#8353E2',
          fontSize: 24,
          fontWeight: 700,
          lineHeight: 36,
          textAlign: 'center',
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
          height: 43,
          width: '100%',
          placeholderTextColor: 'gray',
          fontSize: 20,
          fontWeight: '500',
          borderRadius: 12,
          paddingLeft: 50,
          paddingRight: 20,
          borderWidth: 1,
          borderColor: 'gray',
     },
});
