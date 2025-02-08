const express  = require("express");
const db = require("./config/db");
const routes = require("./routes/taskRoute");
const app = express();

app.use(express.json());

app.use("/api/task/",routes);

db();
port = 3030;


app.listen(port, "0.0.0.0", () => {
    console.log(`Server is listening on port ${port}`);
});
