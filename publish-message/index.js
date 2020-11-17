const AWS = require('aws-sdk');
//AWS.config.update({ region: 'us-east-2' });

const sqs = new AWS.SQS();

exports.handler = async (event) => {
        var name = JSON.parse(event.body).name;
    try {
        
        // All messages on SQS *MUST* be a String
        if (name && /^[a-zA-Z0-9- ]*$/.test(name)) {
        await sqs.sendMessage({
            MessageBody: JSON.stringify({
                name: name || 'Prueba'
            }),
            QueueUrl: 'https://sqs.us-east-2.amazonaws.com/705525533531/sqs-for-lambda-0'
        }).promise();
            
        }
        else {
            return {statusCode:400, body:{err:"El nombre no fue definido"}}
        }
    }
    catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        };
    }

    return { statusCode: 200, body: name };
};
