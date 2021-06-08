#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const lambda_stack_1 = require("./lambda-stack");
const app = new cdk.App();
new lambda_stack_1.LambdaStack(app, 'lambdaStack', {
    env: {
        region: 'ap-northeast-1',
        account: process.env.CDK_DEFAULT_ACCOUNT,
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLW1pbmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW1iZGEtbWluaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx1Q0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLGlEQUE2QztBQUU3QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLDBCQUFXLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRTtJQUNoQyxHQUFHLEVBQUU7UUFDRCxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQjtLQUMzQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IExhbWJkYVN0YWNrIH0gZnJvbSAnLi9sYW1iZGEtc3RhY2snO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IExhbWJkYVN0YWNrKGFwcCwgJ2xhbWJkYVN0YWNrJywge1xuICAgIGVudjoge1xuICAgICAgICByZWdpb246ICdhcC1ub3J0aGVhc3QtMScsXG4gICAgICAgIGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsXG4gICAgfVxufSk7XG4iXX0=