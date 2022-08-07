const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/API", {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
  app.use(
    proxy("/API/Product", {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
  // app.use(
  //   proxy("/Image", {
  //     target: "http://localhost:4000",
  //     changeOrigin: true,
  //   })
  // );
  app.use(
    proxy("/API/Feedback", {
      target: "http://localhost:4000",

      changeOrigin: true,
      headers: {
        accept: "application/json",
        method: "POST",
      },
    })
  );
};
