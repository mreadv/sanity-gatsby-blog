export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609d5d955a2fb730a876ed8e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vfa34tvo",
                  apiId: "5342bdf7-2875-4a43-890c-be17d4030a25",
                },
                {
                  buildHookId: "609d5d96180edc12363408dc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oy1fb7j3",
                  apiId: "9b9e3615-ba56-4033-b72d-ffb397f571ab",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mreadv/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oy1fb7j3.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
