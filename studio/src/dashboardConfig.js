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
                    "60804ba88f18dd110df86d2b",
                  title: "Sanity Studio",
                  name: "trial-sanity-gatsby-blog-studio",
                  apiId: "395c2c09-99fc-4020-80c9-807ee747a123",
                },
                {
                  buildHookId: "60804ba88104660f77ff415c",
                  title: "Blog Website",
                  name: "trial-sanity-gatsby-blog",
                  apiId: "29b77ac9-5e78-4bed-9749-65f54cd23831",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pc374153/trial-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://trial-sanity-gatsby-blog.netlify.app",
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
