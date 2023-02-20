import { defineType, defineField } from 'sanity'

export const category = defineType({
  title: "Category",
  name: "category",
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