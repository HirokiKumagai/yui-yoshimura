

exports.handler = async (event) => {
    // TODO implement
    const body = {
        message: "Hello from Lambda!",
    };
    const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
        body: JSON.stringify(body),
    };
    return response;
};
