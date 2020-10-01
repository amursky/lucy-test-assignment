module.exports = {
  async redirects() {
    return [{ source: "/", destination: "/products?page=1", permanent: true }];
  },
};
