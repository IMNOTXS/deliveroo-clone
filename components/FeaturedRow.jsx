import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { fontScale } from 'nativewind'

const FeaturedRow = ({title, description, id }) => {
  return (
    <View>
      <View>
        <Text style={{fontWeight: 'bold',fontSize: 18}}>{title}</Text>
        <ArrowRightIcon />
      </View>
    </View>
  )
}

export default FeaturedRow