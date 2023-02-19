import { defineType, defineField } from 'sanity'

export const nationality = defineType({
  title: "Nationality",
  name: "nationality",
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