const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   //sendメソッドでブラウザに直接文字列を返却
//   res.send("Hello World!");
//   console.log("/へアクセスがありました");
// });

// //ポートとホストを繋いでHTTPサーバーを起動する
// app.listen(port, () => {
//   console.log(`listening at http://localhost:${port}`);
// });

app.get("/", (req, res) => {
  const data = {
    message: "Hello world",
    data: "2020-06-29",
  };
  res.json(data);
});
// app.get("/image/:file", (req, res) => {
//   const file = req.params.file;

//   res.sendFile(`${__dirname}/public/image/${file}`);
//   console.log(`/image/${file}へアクセスがありました`);
// });
//ポートとホストを繋いでHTTPサーバーを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
