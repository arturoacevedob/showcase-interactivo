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
                    "6088b312577a512a0e7ae1ec",
                  title: "Sanity Studio",
                  name: "showcase-interactivo-studio",
                  apiId: "280ea465-bcca-45bc-b1ac-ad9b82efdf67",
                },
                {
                  buildHookId: "6088b3129f56332991c1a412",
                  title: "Blog Website",
                  name: "showcase-interactivo",
                  apiId: "ccb4a021-9a7c-49b9-b53e-c1042d522ca0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/arturoacevedob/showcase-interactivo",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://showcase-interactivo.netlify.app",
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
