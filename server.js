const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./portfolio/public/index.html"));
})
app.listen(PORT, function() {
  console.log(`🌎  ==> Now listening on PORT ${PORT}!`);
});
