import { StyleSheet } from "react-native";
export const cards = StyleSheet.create({
    cardListContainer: {
      paddingHorizontal: 10,
      marginHorizontal:15,
      marginVertical:15
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      marginHorizontal: 5,
      width: 150, // Adjust the width as needed
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 80, // Adjust the height as needed
        borderRadius: 8,
        marginBottom: 5,
      },
      ButtonCon:{
        width:23,
        height:23,
        backgroundColor:"#ff6961",
        marginLeft:105,
        marginTop:-19.5,
        borderTopLeftRadius: 89,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 5,
      },
      button: {
        backgroundColor: '#ff6961', // Set the background color
        padding: 5,
        borderTopLeftRadius: 89,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
  });