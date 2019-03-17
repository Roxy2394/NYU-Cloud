#LF0

import json
import boto3

def lambda_handler(event, context):
    responderName = event["DestinationBot"]
    userId = event["RecipientID"]
    userInput = event["message"]["text"]

    client = boto3.client('lex-runtime')

    response = client.post_text(
        botName=responderName,
        botAlias='$LATEST',
        userId=userId,
        inputText= userInput
    )
        
