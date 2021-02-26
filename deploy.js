const ghpages = require('gh-pages')

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    dotfiles: true,
    message: `🚀 Deploy [ ${new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })} ]`,
  },
  () => {
    console.log('Deploy to https://bloodzmoon.github.io !')
  }
)
