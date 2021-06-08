#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaStack } from './lambda-stack';

const app = new cdk.App();
new LambdaStack(app, 'lambdaStack', {
    env: {
        region: 'ap-northeast-1',
        account: process.env.CDK_DEFAULT_ACCOUNT,
    }
});
