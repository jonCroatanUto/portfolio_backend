const app = require("./server");
const { connect } = require("./db");
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;

connect().then(() => console.log("connection success"));

app.listen(PORT, () => console.log(`server running at port:${PORT}`));
