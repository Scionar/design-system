module.exports = {
  title: 'Design system',
  components: 'src/components/**/*/index.js',
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/index.md'
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: ['src/components/Button/index.js'],
      sectionDepth: 1
    },
    {
      name: 'Assets',
      content: 'docs/assets.md',
      components: ['src/components/Color/index.js'],
      sectionDepth: 1
    },
    {
      name: 'Manual',
      content: 'docs/manual.md'
    }
  ]
};
