const ajvInstance = require("./ajv-instance");

const schema = {
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string", format: "email" },
    password: { type: "string" },
  },
  required: ["name", "email", "password"],
  additionalProperties: false,
};

module.exports = ajvInstance.compile(schema);
