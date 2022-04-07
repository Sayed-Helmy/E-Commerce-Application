import avj from "./validator-instance";

const schema = {
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", format: "password" },
  },
  //   required: ["email", "password"],
  additionalProperties: true,

  errorMessage: {
    type: "should be an object", // will not replace internal "type" error for the property "foo"
    required: {
      email: 'should have an string property "email"',
      password: 'should have a string property "password"',
    },
  },
};

export const signinValidator = avj.compile(schema);
