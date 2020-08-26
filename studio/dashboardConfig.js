export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f46181259f4948acddbe3b5',
                  title: 'Sanity Studio',
                  name: 'gift-beta-studio',
                  apiId: 'b4d85c5a-58c1-498e-8e50-7741b0db880e'
                },
                {
                  buildHookId: '5f46181273360c353ef7f43e',
                  title: 'Blog Website',
                  name: 'gift-beta',
                  apiId: 'd0442e74-ce6d-4514-8bc6-6d8923ae8001'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hongrosebara/gift-beta',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://gift-beta.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
