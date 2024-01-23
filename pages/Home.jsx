import { View, Text } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { Homestyle } from '../styles/home'

const Home = ({navigation}) => {
  return (
    <View style={Homestyle.home} >
      <Text style={Homestyle.Heading}>
        Welcome to Fruity! 
        <Text>
          what would u like to ordertoday
        </Text>
      </Text>
    <Card/>
    </View>
  )
}

export default Home