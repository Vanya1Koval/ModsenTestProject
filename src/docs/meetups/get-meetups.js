module.exports = {
  get: {
    tags: ["Meetup CRUD operations"],
    description: "Get meetups",
    operationId: "getMeetups",

    parameters: [
      {
        in: "query",
        name: "page",
        type: "integer",
        description: "Number of page",
        required: true
      },
      {
        in: "query",
        name: "limit",
        type: "integer",
        description: "The number of items to show in page",
        required: true
      },
      {
        in: "query",
        name: "search",
        type: "string",
        description: "search meetups by title"
      },
      {
        in: "query",
        name: "from",
        type: "date",
        description: "filtering meetups from date"
      },
      {
        in: "query",
        name: "to",
        type: "date",
        description: "filtering meetups before date"
      },
      {
        in: "query",
        name: "sort",
        type: "date",
        description: "sort meetups, takes values asc or desc"
      },
    ],
    responses: {
      200: {
        description: "Meetups were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Meetup",
            },
          },
        },
      },
    },
  },
};