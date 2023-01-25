import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short__description',
      title: 'short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'image of restaurant',
      type: 'image',
    }),
    defineField({
      name: 'long',
      title: 'longitude of restaurant',
      type: 'number',
    }),
    defineField({
      name: 'lat',
      title: 'latitude of restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'address of restaurant',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'enter a rating 1-5',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('please enter a number between 1-5'),
    }),
    defineField({
      name: 'type',
      title: 'category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type:'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'dishes',
      type: 'array',
      of:[{type: 'reference', to:[{type: 'dish'}]}],
    }),
  ],
})