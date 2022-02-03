export type AmplifyDependentResourcesAttributes = {
    "function": {
        "sendgrid": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "yuiyoshimuracommon": {
            "Arn": "string"
        },
        "sampleFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "sendgrid": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "sampleApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "auth": {
        "yuiyoshimura": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    }
}