module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    schemas: {
      id: {
        type: "string",
        description: "An id of a meetup",
        example: "4bf38761-534e-4a53-8ae1-9d948344bd29",
      },
      token: {
        type: "string",
        description: "token",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxIiwiaWF0IjoxNjYzMTc2Mzg1LCJleHAiOjE2NjMxNzY5ODV9.78SSvhL4Sp3N97D1J_HB5dFy7kPmfHVheKlprEuBysY",
      },
      refreshToken: {
        type: "string",
        description: "refresh token",
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxIiwiaWF0IjoxNjYzMTc2Mzg1fQ.mTzRiw40FtVGcijzO8kFa9ntwKp91QLGQLYhlGrdbvk",
      },
      Meetup: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "An id of a meetup",
            example: "6baea31e-8fcd-46cc-8ba5-ca2319538fa0",
          },
          title: {
            type: "string",
            description: "Meetup`s title",
            example: "Blablablabla",
          },
          description: {
            type: "string",
            description: "Meetup`s description",
            example: "Blablablabla",
          },
          tags: {
            type: "array",
            description: "Set of tags",
            example: "[a, b, c]",
          },
          date: {
            type: "date",
            description: "Date of meetup",
            example: "2019-01-01",
          },
          place: {
            type: "string",
            description: "Place of meetup",
            example: "Blablabla 33/2",
          },
          creator_id: {
            type: "string",
            description: "Meetup`s creator id",
            example: "8b92dcfd-d272-4977-9522-b0adcf76593f",
          },
          members_id: {
            type: "array",
            description: "Set of users id",
            example: "[8b92dcfd-d272-4977-9522-b0, 1092dcfd-d272-4977-9522-23]",
          },
          created_at: {
            type: "date",
            description: "date of creating",
            example: "2022-09-13 17:51:11.333+03",
          },
          updated_at: {
            type: "date",
            description: "date of updating",
            example: "2022-09-13 17:51:11.333+03",
          },
        },
      },
      MeetupInput: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "Meetup`s title",
            example: "Blablablabla",
          },
          description: {
            type: "string",
            description: "Meetup`s description",
            example: "Blablablabla",
          },
          tags: {
            type: "array",
            description: "Set of tags",
            example: ['a', 'b', 'c'],
          },
          date: {
            type: "date",
            description: "Date of meetup",
            example: "2019-01-01",
          },
          place: {
            type: "string",
            description: "Place of meetup",
            example: "Blablabla 33/2",
          },
          userId: {
            type: "string",
            description: "Meetup`s creator id",
            example: "8b92dcfd-d272-4977-9522-b0adcf76593f",
          }
        },
      },
      SignupInput: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "username",
            example: "User10",
          },
          password: {
            type: "string",
            description: "password",
            example: "User10",
          }
        },
      },
      refreshTokInput: {
        type: "object",
        properties: {
          username: {
            type: "string",
            description: "for encode refreshtoken",
            example: "User111",
          },
          refreshToken: {
            type: "string",
            description: "refresh token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxMTEiLCJpYXQiOjE2NjMxNzY4NzN9.qHu7ayXj33lkX-Q84VPwBbxREAN0M0N6DD3JCAmnfdQ",
          },
        }
      },
      tokenInput: {
        type: "object",
        properties: {
          token: {
            type: "string",
            description: "token",
            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlVzZXIxMCIsImlhdCI6MTY2MzE4ODM5OSwiZXhwIjoxNjYzMTg4OTk5fQ.m6T8grQfKgWsaQ7-8m6Sf0yrIuvB0WgsB7q8b5Tos_s",
          },
        }
      },
      userIdInput: {
        type: "object",
        properties: {
          userID: {
            type: "string",
            description: "id",
            example: "5e3933de-a4e5-4535-b75c-51006a1660f4",
          },
        }
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
            example: "Not found",
          },
          internal_code: {
            type: "string",
            description: "Error internal code",
            example: "Invalid parameters",
          },
        },
      },
    },
  },
  security: [{
    bearerAuth: []
  }]
};