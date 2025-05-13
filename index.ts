console.log("Hello via Bun!");

console.log("Fetcing");

const loginRes = await fetch("https://aaue.waeup.org/login");

console.log("LOGIN RES: ", loginRes);
console.log("\n\n");
console.log("LOGIN Data", await loginRes.text());

console.log("\n\n\n\n\n\n");
const otherRes = await fetch(
  "https://aaue.waeup.org/students/E1143169/edit_personal"
);

console.log("LOGIN RES: ", otherRes);
console.log("\n\n");
console.log("LOGIN Data", await otherRes.text());
