module.exports = {
  post: {
    tags: ["Auth"],
    description: "Create user",
    operationId: "signup",
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
        description: "Signup in Successfully",
      },
      404: {
        description: "User is already exist",
      },
      500: {
        description: "Server error",
      },
    },
  },
};