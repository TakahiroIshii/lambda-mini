import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import Aigle from "aigle";

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    await Aigle.times(2, () => {
        console.log('hello');
    })
    return {
        statusCode: 200,
        body: JSON.stringify({
            method: event.httpMethod,
            query: event.queryStringParameters,
        })
    }
};
