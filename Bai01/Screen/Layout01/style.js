import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          marginHorizontal: 15,
          marginTop: 10,
     },
     grHeader: {
          flex: 1,
          gap: 10,
     },
     grBody: {
          marginTop: 20,
          flex: 5,
     },
     //   HEADER
     header1: {
          color: '#000000A6',
          fontSize: 16,
          fontWeight: 700,
     },
     header2: {
          color: '#000000',
          fontSize: 20,
          fontWeight: 700,
     },
     formContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
     },

     inputContainer: {
          borderColor: 'gray',
          width: '90%',
          justifyContent: 'center',
     },
     inputText: {
          height: 46,
          width: '100%',
          placeholderTextColor: '#C4C4C4',
          fontSize: 16,
          fontWeight: '500',
          borderRadius: 3,
          paddingLeft: 10,
          paddingRight: 20,
          borderWidth: 1,
          borderColor: 'gray',
     },
     // bpdy
     viewbtn: {
          marginTop: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
     },
     btn: {
          // backgroundColor: '#F1B000',
          backgroundColor: '#C4C4C42B',
          borderWidth: 1,
          borderColor: 'black',
          width: 100,
          height: 35,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
     },
     btnText: {
          color: '#0C0606',
          fontSize: 14,
          fontWeight: 700,
     },
     //  ITEM
     itemContainer: {
          backgroundColor: '#F4DDDD',
          height: 115,
          borderRadius: 10,
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 10,
          paddingVertical: 10,
     },
     itemLeft: {
          flex: 2,
     },
     itemRight: {
          flex: 4,
     },
     itemTextHeader: {
          color: '#000000',
          fontSize: 20,
          fontWeight: 700,
     },
     itemTextHeaderSub: {
          color: '#0000008A',
          fontSize: 15,
          fontWeight: 700,
          lineHeight: 18,
     },
     itemTexPrice: {
          color: '#000000',
          fontSize: 20,
          fontWeight: 700,
     },
});
