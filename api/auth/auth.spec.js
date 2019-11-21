const request = require("supertest");
const server = require("../server");

const authRouter = require("./auth-router");
const incompleteUser = { username: "fakeUser" };
const user = { username: "test", password: "1234" };

const input = {
  username: "testing",
  password: "testing"
};

describe("authRouter", () => {
  describe("POST / register", () => {
    it("should return 200 OK", () => {
      request(server)
        .post("/api/auth/register")
        .send(input)
        .set("Accept", "application/json")
        .expect(200);
    });

    it('username should match "testing"', () => {
      request(server)
        .post("/api/auth/register")
        .send(input)
        .set("Accept", "application/json")
        .expect(res => {
          res.body.username.toLowerCase();
        })
        .expect(200, {
          username: "testing"
        });
    });
  });
});
describe("POST / login", () => {
  test("result contains json format", () => {
    request(authRouter)
      .post("/api/auth/login")
      .expect("Content-Type", /json/);
  });

  it("token is sent back", () => {
    request(authRouter)
      .post("/api/auth/login")
      .expect(200, /token/);
  });
});

describe("POST /login ENDPOINT", () => {
  it("user cant login without complete credentials", () => {
    return request(server)
      .post("/api/auth/login")
      .send(incompleteUser)
      .expect(401);
  });
  it("should return 200 status on successful login", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .set("Content-Type", "application/json")
      .then(res => {
        expect(200);
      });
  });
});
