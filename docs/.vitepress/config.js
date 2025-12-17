export default {
  title: 'Alto9',
  description: 'Open Source DevOps Tools for Kubernetes',
  base: '/',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Forge', link: '/forge/' },
      { 
        text: 'Kube9 Ecosystem', 
        items: [
          { text: 'Overview', link: '/kube9/' },
          { text: 'VS Code Extension', link: '/kube9/vscode' },
          { text: 'Operator', link: '/kube9/operator' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/alto9' }
    ],

    sidebar: {
      '/forge/': [
        {
          text: 'Forge',
          items: [
            { text: 'Overview', link: '/forge/' }
          ]
        }
      ],
      
      '/kube9/': [
        {
          text: 'Kube9 Ecosystem',
          items: [
            { text: 'Overview', link: '/kube9/' },
            { text: 'VS Code Extension', link: '/kube9/vscode' },
            { text: 'Operator', link: '/kube9/operator' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alto9' }
    ],

    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2024 Alto9'
    },

    search: {
      provider: 'local'
    }
  }
}

