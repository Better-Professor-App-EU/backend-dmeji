const request = require("supertest");
const server = require("../server");


describe("GET /api/messages ENDPOINT", () => {
    it("respond with json containing a list of all messages", () => {
      request(server)
        .get("/api/messages")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });