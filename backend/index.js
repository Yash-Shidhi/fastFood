import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/getData", (req, res) => {
  const getApi = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      console.log(data);
      res.send(data);
      res.end();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getApi();
});

app.listen(5000, () => console.log("App is running on port 5000"));
