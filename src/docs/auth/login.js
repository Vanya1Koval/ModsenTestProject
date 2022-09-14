module.exports = {
  post: {
    tags: ["Auth"],
    description: "Log in",
    operationId: "login",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SignupInput",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Login in Successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/token",
            },
            schema: {
              $ref: "#/components/schemas/refreshToken",
            },
          },
        },
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