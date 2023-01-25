import { Image, Text, TouchableOpacity,} from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity style='relative mr-2'>
        <Image
          source={{uri: imgUrl}}
          style={{height:75, width:75, borderRadius:10 , marginHorizontal:5}}
        />
      <Text style={{position:"absolute", bottom:1, left:1, color: 'white', fontWeight: 'bold', paddingLeft:13 }}>
        {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard