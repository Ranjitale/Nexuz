const mongoose = require("mongoose");
// Connection URI
const uri =
  "mongodb+srv://ranjit:ranjit@cluster0.ushh6fw.mongodb.net/MERN?retryWrites=true&w=majority";
// Create a new MongoClient
function run() {
  mongoose
    .connect(uri)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
run();
module.exports = run;
