const express = require("express");

const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route

app.get("/api", (req, res) => {

  res.json({ message: "Hello from server!" });
 });

 app.post("/post", (req, res) => {

    console.log("Hii Priti");
    res.json({ message: "Welcome to Dashboard" });
    res.redirect("/");
   });

app.listen(PORT, () => {
 console.log(`Server listening on ${PORT}`);

});

