import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-docs", async (req, res) => {
  const { code } = req.body;

  // SIMPLE MOCK DOCUMENTATION LOGIC (Hackathon-safe)
  const documentation = `
📘 Generated Documentation

Overview:
This code contains logic written by the developer. Below is a simplified explanation.

Explanation:
- The code defines functions and variables.
- It performs operations based on given inputs.
- The logic is structured to return results efficiently.

Inputs:
- Parameters passed to functions

Outputs:
- Returns computed values based on logic

Example:
Call the function with required arguments to get the expected output.

(Replace this mock logic with AI API later)
`;

  res.json({ documentation });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
