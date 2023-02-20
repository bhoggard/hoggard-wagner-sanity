import { defineType, defineField } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const artist = defineType({
  title: "Artist",
  name: "artist",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'sortName',
      type: 'string',
      title: 'Sort name'
    }),
    defineField({
      type: 'string',
      name: 'gender',
      title: 'Gender',
      options: {
        list: ['female', 'male', 'trans ftm', 'non-binary']
      }
    }),
    defineField({
      name: 'birthYear',
      type: 'number',
      title: 'Birth year',
      validation: (rule) => rule.integer()
    }),
    defineField({
      name: 'deathYear',
      type: 'number',
      title: 'Death year',
      validation: (rule) => rule.integer()
    }),
    defineField({
      title: "Nationality",
      name: "nationality",
      type: "reference",
      to: [{ type: "nationality" }]
    }),
    defineField({
      name: 'homePage',
      type: 'url',
      title: 'Home page'
    }),
    defineField({
      name: 'notes',
      type: 'string',
      title: 'Public notes'
    }),
    defineField({
      name: 'privateNotes',
      type: 'string',
      title: 'Private notes'
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email'
    }),
    defineField({
      name: 'telephone',
      type: 'string',
      title: 'Telephone'
    }),
  ],
  orderings: [
    {
      title: 'Sort name',
      name: 'sortNameAsc',
      by: [
        { field: 'sortName', direction: 'asc' }
      ]
    }
  ]
})