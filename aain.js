const fs = require("fs");

fs.readFile("data.txt", "utf-8", function (error, data) {
  console.log(error);
  console.log(data);
});

fs,
  fs.writeFile("new.txt", "This is new practice", function () {
    console.log("file is written");
  });
