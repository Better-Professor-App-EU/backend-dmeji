const request = require("supertest");
const server = require("../server");

describe("GET /api/projects ENDPOINT", () => {
  it("respond with json containing a list of all projects", () => {
    request(server)
      .get("/api/projects")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
