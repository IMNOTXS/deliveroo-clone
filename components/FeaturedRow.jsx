import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturauntCard from './ResturauntCard'


const FeaturedRow = ({title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4" >
        <Text className="font-bold text-lg" >{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false} 
      className='pt-4'>

        <ResturauntCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="YO! sushi"
        rating={4.5}
        genre="japanese"
        address="123 Main st"
        short_description="this is a test description"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="YO! sushi"
        rating={4.5}
        genre="japanese"
        address="123 Main st"
        short_description="this is a test description"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="YO! sushi"
        rating={4.5}
        genre="japanese"
        address="123 Main st"
        short_description="this is a test description"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="YO! sushi"
        rating={4.5}
        genre="japanese"
        address="123 Main st"
        short_description="this is a test description"
        dishes={{}}
        long={20}
        lat={0}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow