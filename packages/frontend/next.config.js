module.exports = {
  async redirects() {
    return [
      // Redirect from the home page to products page
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },

      // Redirect from "/products" to the first page of products
      {
        source: "/products/",
        destination: "/products?page=1",
        permanent: true,
      },
    ];
  },
};
