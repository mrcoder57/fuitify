import { View, Text, Image,SafeAreaView } from 'react-native'
import React from 'react'
import { navbar } from '../styles/Navbar'
import { name } from '../constant'
import avatar from "../assets/avatars.png"
import cart from "../assets/cart.png"


export default function Navbar() {
  return (
    <SafeAreaView style={navbar.container}>
       <View style={{backgroundColor:" #fff5f5"}}>
        <View style={navbar.avatar}>
        <Image
        source={avatar}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      />
        </View>
        <View style={navbar.text}>
        <Text style={navbar.greeting}>hey {name.name}</Text>
      <Text style={navbar.Heading}>Let's get some Items</Text>
      </View>
      </View>
      <View style={navbar.cart}>
        <Image
        source={cart}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      />
        </View>
    </SafeAreaView>
  )
}