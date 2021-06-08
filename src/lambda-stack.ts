import * as cdk from '@aws-cdk/core';
import {NodejsFunction} from "aws-lambda-nodejs-esbuild";

export class LambdaStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new NodejsFunction(this, 'miniFunction', { handler: 'src/handlers/MiniHandler.handler'});
    }
}
