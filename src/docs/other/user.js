module.exports = {
  get: {
    tags: ["User"],
    description: "Getting user by token ",
    operationId: "user",
    parameters: [
      {
        in: "header",
        name: "username",
        type: "string",
        description: "username",
        required: true
      },

    ],
    responses: {
      201: {
        description: "Login in Successfully",
      },
      404: {
        description: "Wrong user/password",
      },
      500: {
        description: "Server error",
      },
    },
  },
};