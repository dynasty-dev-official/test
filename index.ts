console.log("Hello via Bun!");

console.log("Fetcing");

// const loginRes = await fetch("https://aaue.waeup.org/login");

// console.log("LOGIN RES: ", loginRes);
// console.log("\n\n");
// console.log("LOGIN Data", await loginRes.text());

// console.log("\n\n\n\n\n\n");
// const otherRes = await fetch(
//   "https://aaue.waeup.org/students/E1143169/edit_personal"
// );

// console.log("LOGIN RES: ", otherRes);
// console.log("\n\n");
// console.log("LOGIN Data", await otherRes.text());

// import puppeteer from "puppeteer";
// // Or import puppeteer from 'puppeteer-core';

// // Launch the browser and open a new blank page
// const browser = await puppeteer.launch();
// const page = await browser.newPage();

// // Navigate the page to a URL.
// await page.goto("https://aaue.waeup.org/login");

// console.log(await page.content());

// await page.close();
// await browser.close();

Bun.serve({
  routes: {
    "/": (req) => {
      console.log(req.headers);

      return new Response(JSON.stringify({ headers: req.headers }));
    },

    fetch: () => {
      return new Response("NOT FOUND", { status: 404 });
    },
  },
  port: 6000,
});
