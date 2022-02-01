

exports.handler = async (event) => {
  // TODO implement
    const body = {
        message: event.body,
    };
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

    const msg = {
        to: event.body.email,
        from: "noreply@yoshimura-yui.com",
        subject: "お問合せありがとうございました。",
        text: "お問合せを受け付けました。回答をお待ちください。",
        html: "お問合せを受け付けました。回答をお待ちください。",
    };

    (async () => {
        try {
            await sgMail.send(msg);
            const response = {
                statusCode: 200,
                message: "Email sent"
            };
            return response;
        } catch (error) {
            console.error(error);
            if (error.response) {
                console.error(error.response.body);
            }
            const response = {
                statusCode: 400,
            };
            return response;
        }
    })();

    // sgMail
    //     .send(msg)
    //     .then(() => {
    //         console.log("Email sent");
    //         const response = {
    //             statusCode: 200,
    //         };
    //         return response;
    //     })
    //     .catch((error) => {
    //     console.error(error);
    //     const response = {
    //         statusCode: 400,
    //     };
    //     return response;
    //     });
    // console.error("You shouldn't be here");
    // const response = {
    //     statusCode: 300,
    // };
    // const response = {
    //     statusCode: 200,
    //     //  Uncomment below to enable CORS requests
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "Content-Type",
    //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    //     },
    // }
    // body: JSON.stringify(body),
    return body;
};

