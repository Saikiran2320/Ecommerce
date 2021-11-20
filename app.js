const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/img", express.static(__dirname + "public/img"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("", (req, res) => {
  res.render("projectpage1");
});
app.get("/tshirts", (req, res) => {
  res.render("dress");
});
app.get("/description", (req, res) => {
  res.render("productdescriptionpage");
});
app.get("/cart", (req, res) => {
  res.render("cart");
});
app.get("/checkout", (req, res) => {
  res.render("checkoutpage");
});
app.get("/login", (req, res) => {
  res.render("loginfileproject");
});
app.get("/spage", (req, res) => {
  res.render("spage");
});
app.listen(port, () => console.info(`Listening on port ${port}`));
