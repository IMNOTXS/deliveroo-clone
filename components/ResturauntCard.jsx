import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'

const ResturauntCard = ({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,}) => {
  return (
    <TouchableOpacity>
      <Image 
      source={{
        uri: imgUrl,
      }} 
      className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text>{rating} • {genre} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ResturauntCard