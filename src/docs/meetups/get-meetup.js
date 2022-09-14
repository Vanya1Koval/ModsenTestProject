module.exports = {
  get: {
    tags: ["Meetup CRUD operations"],
    description: "Get a meetup",
    operationId: "getMeetup",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "A single meetup id",
      },
    ],
    responses: {
      200: {
        description: "Meetup is obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Meetup",
            },
          },
        },
      },
      404: {
        description: "Meetup is not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
            },
          },
        },
      },
    },
  },
};