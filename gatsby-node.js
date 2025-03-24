const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allProductsJson {
        nodes {
          handle
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Error loading products!", result.errors);
    return;
  }

  result.data.allProductsJson.nodes.forEach((node) => {
    createPage({
      path: `/product/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        handle: node.handle,
      },
    });
  });
};
