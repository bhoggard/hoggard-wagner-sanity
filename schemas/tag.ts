import { defineType, defineField } from 'sanity'

export const tag = defineType({
  title: "Tag",
  name: "tag",
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