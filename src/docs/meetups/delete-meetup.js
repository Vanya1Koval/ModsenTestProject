module.exports = {
  delete: {
    tags: ["Meetup CRUD operations"],
    description: "Deleting a Meetup",
    operationId: "deleteMeetup",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "Deleting a done meetup",
      },
    ],
    responses: {
      200: {
        description: "Meetup deleted successfully",
      },
      404: {
        description: "Meetup not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};