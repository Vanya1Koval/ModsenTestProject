module.exports = {
  post: {
    tags: ["Auth"],
    description: "Refresh",
    operationId: "refresh",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/refreshTokInput",
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
            }
          },
        },
      },
      404: {
        description: "Wrong username/refreshtoken",
      },
      500: {
        description: "Server error",
      },
    },
  },
};