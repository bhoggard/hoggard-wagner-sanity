import { defineType, defineField } from 'sanity'
import { SquareIcon } from '@sanity/icons'

export const work = defineType({
  title: "Work",
  name: "work",
  type: "document",
  icon: SquareIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      title: "Artist",
      name: "artist",
      type: "reference",
      to: [{ type: "artist" }]
    }),
    defineField({
      title: 'Public images',
      name: 'publicImages',
      type: 'array',
      of: [{ type: 'image', options: { storeOriginalFilename: false, } }]
    }),
    defineField({
      title: 'Private images',
      name: 'privateImages',
      type: 'array',
      of: [{ type: 'image' }]
    }),
    defineField({
      title: "Year",
      name: "year",
      type: "number",
      validation: (rule) => rule.integer()
    }),
    defineField({
      title: "Display date",
      name: "displayDate",
      type: "string",
    }),
    defineField({
      title: "Dimensions",
      name: "dimensions",
      type: "string",
    }),
    defineField({
      title: "Medium",
      name: "medium",
      type: "string",
    }),
    defineField({
      title: "Edition",
      name: "edition",
      type: "string",
    }),
    defineField({
      title: "Acquisition year",
      name: "acquisitionYear",
      type: "number",
      validation: (rule) => rule.integer()
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
    }),
    defineField({
      title: "Provenance",
      name: "provenance",
      type: "text",
    }),
    defineField({
      title: "Price paid",
      name: "pricePaid",
      type: "number",
      validation: (rule) => rule.integer()
    }),
    defineField({
      title: "Private Notes",
      name: "privateNotes",
      type: "text",
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "reference",
      to: [{ type: "location" }]
    }),
    defineField({
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }]
    }),
    defineField({
      title: "Published",
      name: "published",
      type: "boolean"
    }),
    defineField({
      title: "Featured",
      name: "featured",
      type: "boolean"
    }),
    defineField({
      title: "Image source",
      name: "imageSource",
      type: "string",
    }),
  ]
})