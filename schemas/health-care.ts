export default {
  name: 'health-care',
  type: 'document',
  title: 'health-care',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
      of: [{type: 'block'}],
    },
  ],
}
