

exports.handler = async (event, context, callback) => {
  // TODO implement
  const body = {
    message: event.body,
    event: event,
    context: context,
    callback: callback,
  };
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body:
        JSON.stringify(body),
  };
  return response;
};
