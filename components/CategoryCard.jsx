import { View, Text } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default CategoryCard