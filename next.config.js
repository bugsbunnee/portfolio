module.exports = {
    async redirects() {
      return [
        {
          source: 'https://portfolio-ruby-eight-15.vercel.app/',
          destination: '/',
          permanent: true,
        },
      ];
    },
  };