module.exports = {
  post: {
    tags: ["Meetup CRUD operations"],
    description: "Create meetup",
    operationId: "createMeetup",
    parameters: [],
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
      201: {
        description: "Meetup created successfully",
      },
      500: {
        description: "Server error",
      },
    },
  },
};