import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const categories = () => {
  return (
  <ScrollView horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{
    paddingHorizontal:15,
    paddingTop: 10,
  }} >
    <CategoryCard 
     imgUrl={'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/450031-The-14-Best-Grocery-Delivery-Services-of-2020_1296x728-header_body.jpg?w=1155&h=1530'}
      title='Groccery' />
    <CategoryCard
     imgUrl={'https://img.freepik.com/free-vector/blue-sales-logo-background_1126-214.jpg?w=2000'}
      title='Offers' />
    <CategoryCard
     imgUrl={'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60'}
      title='Pizza' />
      <CategoryCard
     imgUrl={'https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505'}
      title='Breakfast' />
      <CategoryCard
     imgUrl={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg'}
      title='Burgers' />
      <CategoryCard
     imgUrl={'https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&rect=10%2C0%2C6699%2C4476&q=45&auto=format&w=926&fit=clip'}
      title='Healthy' />
      <CategoryCard
     imgUrl={'https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.jpg'}
      title='sushi' />
    </ScrollView>
  )
}

export default categories