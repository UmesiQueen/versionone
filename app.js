/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("http");
const next = require("next");
const { parse } = require("url");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      Promise.resolve(handle(req, res, parse(req.url, true))).catch((err) => {
        console.error("Request failed:", req.url, err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.end("Internal Server Error");
        }
      });
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${port} (dev=${dev})`);
    });
  })
  .catch((err) => {
    console.error("Next.js failed to start:", err);
    process.exit(1);
  });
