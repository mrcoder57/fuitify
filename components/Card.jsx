import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { fruits } from '../constant';
import { cards } from '../styles/card';

const CardComp = ({ title, img }) => {
  return (
    <View style={cards.card}>
      <Image source={img} style={cards.image} />
      <Text style={cards.title}>{title}</Text>
      <TouchableOpacity
        style={cards.ButtonCon}
        onPress={() => {
          /* Handle button press */
        }}
      >
        <View style={cards.button}>
          <Text style={cards.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Card = () => {
  return (
    <Carousel
      data={fruits}
      renderItem={({ item }) => <CardComp title={item.name} img={item.image} />}
      sliderWidth={400}
      itemWidth={150}
      containerCustomStyle={cards.cardListContainer}
    />
  );
};

export default Card;
