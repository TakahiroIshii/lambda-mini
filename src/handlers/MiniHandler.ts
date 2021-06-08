import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';
import Aigle from "aigle";

export const handler = async (
    event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
    await Aigle.times(2, () => {
        console.log('hello');
    })
    return {
        statusCode: 201,
        headers: event.headers as any,
        body: JSON.stringify({
            method: event.httpMethod,
            query: event.queryStringParameters,
        })
    }
};
