const config = {
  siteName: '<Website Name>',
  heroHeading: '<Hero heading text>',
  heroSubheading: '<Hero subheading text>',
  placeHolderImage: '/images/placeholder.png',
  menuLinks: [
    {
      title: 'Posts',
      href: '/posts',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ],
  // Mondodb configurations
  mongodbUsername: '<Username>',
  mongodbPassword: '<Password>',
  mongodbCluster: '<Cluster>',
  mongodbDatabase: '<Database>',
  mongodbCollection: '<Collection>',
};

export default config;
