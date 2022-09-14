module.exports = {
    put: {
        tags: ["Add members"],
        description: "Adding members to meetup ",
        operationId: "add",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Update members",
            }
        ],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/userIdInput",
                    },
                },
            },
        },
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