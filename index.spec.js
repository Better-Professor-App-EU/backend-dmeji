
describe("CHECK DB ENVIRONMENT", () => {
  it("the db env is testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});