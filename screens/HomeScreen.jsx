import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
  const navigation = useNavigation();
  

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    });
  },[])



 
  return (
    <SafeAreaView className='bg-white pt-5'>
          <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image source={{uri: 'https://links.papareact.com/wru'}} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

            <View className='flex-1'>
              <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
              <Text className="font-bold text-xl">Current location <ChevronDownIcon size={20} color="#00CCBB"/> </Text>
            </View>

            <UserIcon size={35} color="#00CCBB" />
          </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4'> 
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color='gray' size={20} />

            <TextInput placeholder='Resturaunts and Cuisines' keyboardType='default'/>
          </View>

          <AdjustmentsHorizontalIcon color='#00CCBB' />
        </View> 
        <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100,
        }}>

          <Categories />

          <FeaturedRow 
          id="testing 1"
          title="Featured"
          description="paid placements from our partners"
          />
          <FeaturedRow 
          id="testing 2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
           />
          <FeaturedRow 
          id="testing 3"
          title="Offers near you!"
          description="why not support your local resturaunt tonight!" 
          />


        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen