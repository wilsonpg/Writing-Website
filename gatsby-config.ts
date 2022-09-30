import path from "path";
import { GatsbyConfig } from "gatsby";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  `node_modules`,
  `gatsby`,
  `dist`,
  `utils`,
  `eslint-rules`,
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Writing Website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better
  // GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        rulePaths: [ gatsbyRequiredRules ],
        extensions: [ `js`, `jsx`, `ts`, `tsx` ],
        exclude: [ `node_modules`, `bower_components`, `.cache`, `public` ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
};

export default config;
