const request = require("supertest");
const server = require("../server");
const student = { name: "ola" };

describe("GET /api/students ENDPOINT", () => {
  it("respond with json containing a list of all students", () => {
    request(server)
      .get("/api/students")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
describe("GET /api/students/:id ENDPOINT", () => {
  it("respond with json containing a single user", () => {
    request(server)
      .get("/api/students/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
describe("POST /api/student ENDPOINT", () => {
  it("should return 201 status for a valid student body", () => {
    return request(server)
      .post("/api/students")
      .send(student)
      .set("Content-Type", "application/json")
      .expect(201);
  });
});
