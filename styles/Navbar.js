import { StyleSheet, Platform, StatusBar } from 'react-native';

export const navbar = StyleSheet.create({
  Heading: {
    color: '#304250',
    fontSize: 18,
    fontWeight: '600',
  },
  greeting: {
    color: '#304250',
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  container: {
    height: 250,
    width: '100%', 
    backgroundColor:"#fff5f5",
    marginTop: Platform.OS === 'ios' ? 12 : StatusBar.currentHeight + 12,
    marginHorizontal: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent:"space-between",
  
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: '#ff6961',
    borderRadius: 7.65489,
    marginTop: 2.5,
    marginRight: 7.5,
    marginRight:15
  },
  cart: {
    height: 40,
    width: 40,
    borderRadius: 7.65489,
    marginRight:35
  },
  text:{
    height: 40,
    width: 180,
    borderRadius: 7.65489,
    marginLeft:1,
    marginLeft:45,
    marginTop:-35,
    backgroundColor:"#fff5f5"
  }
});
