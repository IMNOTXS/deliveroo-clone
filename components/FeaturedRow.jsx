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
        id={1}
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Johnny_Rockets_logo.svg/1200px-Johnny_Rockets_logo.svg.png"
        title="Johny Rockets"
        rating={4.5}
        genre="American"
        address="hiteen block 4"
        short_description="Enjoy Burgers and Sides"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={2}
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/PizzaExpressBlack.svg/1200px-PizzaExpressBlack.svg.png"
        title="Pizza Express"
        rating={4}
        genre="Italian"
        address="Qadsyia street 40"
        short_description="Try our Italian Pizza's!"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={3}
        imgUrl="http://cdn.shopify.com/s/files/1/0271/9347/5207/files/sm_sharing_logo_1200x1200.png?v=1613697297"
        title="Arabica"
        rating={4}
        genre="Cafe"
        address="Murooj mubarak al kabeer"
        short_description="Want some coffee? Come and visit Us!!"
        dishes={{}}
        long={20}
        lat={0}
        />
        <ResturauntCard 
        id={4}
        imgUrl="https://images.deliveryhero.io/image/talabat/restaurants/WhatsApp_Image_2021-_637731824828084101.jpeg?width=300"
        title="Like Burger"
        rating={3.5}
        genre="American"
        address="hawalli 4th street"
        short_description="Burgers and More!"
        dishes={{}}
        long={20}
        lat={0}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow