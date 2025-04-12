const express = require("express");
const https = require("https");

const app = express();
const port = 64551;

app.use(express.static("views"));

app.get("/obtainData/:element", (req, res) => {
  const element = req.params.element;
  const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&page=${element}`;

  const data = request(url)
    .then((result) => {
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});

function request(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        resolve(data);
      });
    });
  });
}