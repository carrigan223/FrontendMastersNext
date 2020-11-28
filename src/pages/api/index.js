import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.json({ message: "this is working " });
  })
  .post((req, res) => {
    res.json({ message: "posted" });
  });

export default handler;
