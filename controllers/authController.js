import { getDb } from "../utils/db.js";

export const register = async (req, res) => {
  const db = await getDb();
  const user = await db.collection("users").findOne({ email: req.body.email });
  if (user) {
    res.status(500).end("User is ready");
  } else {
    await db.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  }
};
