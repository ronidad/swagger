const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const app = express();
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route")

app.use(bodyParser.json());


/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "Roberms API",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get("/", function (req, res){
  res.send("api working. go to /api-docs")
})
/** Swagger Initialization - END */

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(process.env.PORT || 3000 , () => {
  console.log("I am ready to listen you");
});

