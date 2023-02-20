import { defineType, defineField } from 'sanity'

export const location = defineType({
  title: "Location",
  name: "location",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (rule) => rule.required()
    })
  ]
})