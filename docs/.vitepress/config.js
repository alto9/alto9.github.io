export default {
  title: 'Alto9',
  description: 'Open Source DevOps Tools for Kubernetes',
  
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
            { text: 'Overview', link: '/forge/' },
            { text: 'Features', link: '/forge/features' },
            { text: 'Workflow', link: '/forge/workflow' },
            { text: 'Getting Started', link: '/forge/getting-started' },
            { text: 'Architecture', link: '/forge/architecture' }
          ]
        }
      ],
      
      '/kube9/': [
        {
          text: 'Kube9 Ecosystem',
          items: [
            { text: 'Overview', link: '/kube9/' },
            { text: 'Architecture', link: '/kube9/architecture' }
          ]
        },
        {
          text: 'VS Code Extension',
          items: [
            { text: 'Overview', link: '/kube9/vscode' },
            { text: 'Features', link: '/kube9/vscode-features' },
            { text: 'Getting Started', link: '/kube9/vscode-getting-started' },
            { text: 'Roadmap', link: '/kube9/vscode-roadmap' }
          ]
        },
        {
          text: 'Kube9 Operator',
          items: [
            { text: 'Overview', link: '/kube9/operator' },
            { text: 'Features', link: '/kube9/operator-features' },
            { text: 'Getting Started', link: '/kube9/operator-getting-started' },
            { text: 'Data & Privacy', link: '/kube9/operator-privacy' }
          ]
        },
        {
          text: 'Well-Architected Framework',
          items: [
            { text: 'Overview', link: '/kube9/well-architected-framework' },
            { text: 'Security', link: '/kube9/waf-security' },
            { text: 'Reliability', link: '/kube9/waf-reliability' }
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

