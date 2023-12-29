import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { fruits } from '../constant';
import { cards } from '../styles/card';

const CardComp = ({ title, img }) => {
  return (
    <View style={cards.card}>
        <Image source={img} style={cards.image}/>
      <Text style={cards.title}>{title}</Text>
      <TouchableOpacity style={cards.ButtonCon} onPress={() => { /* Handle button press */ }}>
      <View style={cards.button}>
        <Text style={cards.buttonText}>+</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const Card = () => {
  return (
    <FlatList
      data={fruits}
      horizontal={true}
      renderItem={({ item }) => <CardComp title={item.name} img={item.image} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={cards.cardListContainer}
    />
  );
};

export default Card;
