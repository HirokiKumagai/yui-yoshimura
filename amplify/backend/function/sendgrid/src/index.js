

exports.handler = async (event, context, callback) => {
  // TODO implement
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
                body: JSON.stringify({
                    content: event.body,
                    msg: msg,
                    message: "Email sent.",
                }),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                },
            };
            return response;
        } catch (error) {
        if (error.response) {
            console.error(error.response.body);
        }
        const response = {
            statusCode: 400,
            body: JSON.stringify(
                {
                    error: error,
                    message: "fail!!"
                }),
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
        };
        return response;
        }
    })();
};

