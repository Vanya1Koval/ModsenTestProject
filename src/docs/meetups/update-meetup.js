module.exports = {
  put: {
    tags: ["Meetup CRUD operations"],
    description: "Update Meetup",
    operationId: "updateMeetup",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "Id of meetup to be updated",
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/MeetupInput",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Meetup updated successfully",
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