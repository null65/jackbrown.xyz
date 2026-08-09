import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            description: 'Shown on the site, e.g. johnkinski.com',
          },
        }),
        summary: fields.text({
          label: 'Summary',
          multiline: true,
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        href: fields.url({
          label: 'Link',
          description: 'Optional live URL',
        }),
        logo: fields.text({
          label: 'Logo path',
          description: 'Optional path in public/, e.g. /rockwell-hitec.png',
        }),
        logoAlt: fields.text({
          label: 'Logo alt text',
        }),
        radio: fields.checkbox({
          label: 'Amateur radio project',
          defaultValue: false,
        }),
        featured: fields.checkbox({
          label: 'Show on home page',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Order',
          description: 'Lower numbers appear first',
          defaultValue: 100,
        }),
      },
    }),
  },
});
