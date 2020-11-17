const AWS = require('aws-sdk');
//WS.config.update({ region: 'us-east-2' });

const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        // BTW: Bad practice: Using one try/catch for everything 🙈
        // Get the records we are handling from this event
        const output = event.Records.map(record => record.body);

        console.log('Received messages: ', output);
        
        await sns.publish({
            Message: `Hello from the otherside ${JSON.parse(output[0]).name}`,
            TopicArn: 'arn:aws:sns:us-east-2:705525533531:sns-for-lambda-1'
        }).promise();
        
        // Send a notification to SNS for each message
/*
        await Promise.all(
            output.map(
                body => {
                    console.log(body.name)
                    sns.publish({
                    Message: `Hola ${body.name}`,
                    TopicArn: 'arn:aws:sns:us-east-2:705525533531:sns-for-lambda-1'
                }).promise()}
            )
        );*/

        // Status code 200 means we were successful
        // Successful handling removes the message from the queue
        return {
            statusCode: 200,
            body: JSON.stringify(output)
        };
    }
    catch (err) {
        console.log(err);

        // If status code is > 200 we tell SQS the handling was incorrect
        // This way the message goes back to the queue to be processed again
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        };
    }
};