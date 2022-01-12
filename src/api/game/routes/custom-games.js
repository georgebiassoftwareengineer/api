{
  module.exports = {
    routes: [
      {
        method: "POST",
        path: "/games/populate",
        handler: "game.populate",
        config: {
          policies: [],
        },
      },
    ],
  };
}
