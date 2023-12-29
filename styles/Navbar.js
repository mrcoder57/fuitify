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
    height: 100,
    width: '100%', // Adjusted from 'full'
    marginTop: Platform.OS === 'ios' ? 12 : StatusBar.currentHeight + 12,
    marginHorizontal: 15,
    flex: 1,
    flexDirection: 'row',
  },
  avatar: {
    height: 40,
    width: 40,
    backgroundColor: '#ff6961',
    borderRadius: 7.65489,
    marginTop: 2.5,
    marginRight: 7.5,
  },
  cart: {
    height: 40,
    width: 40,
    borderRadius: 7.65489,
    alignItems: 'center', // Added to center content vertically
    marginLeft:59,
  },
  text:{
    height: 40,
    width: 169,
    borderRadius: 7.65489,
    marginLeft:1,
  }
});
