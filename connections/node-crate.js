const crate = require("node-crate");

crate.connect("http://localhost:4200");

crate
  .execute("SELECT 1")
  .then(() => console.log("Successfully connected to CrateDB"))
  .catch((err) => console.error("Error connecting to CrateDB:", err));
