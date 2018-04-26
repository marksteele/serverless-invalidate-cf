# Invalidate a CloudFront distribution with API Gateway and Lambda

Edit serverless.yml, and insert your distribution ID.

Install dependancies:
```
npm i
```

Deploy the code with:


```
sls deploy -s prod --aws-profile YOURPROFILE
```

Take note of the URL and API Key. Go forth and invalidate:

```
curl -H 'x-api-key: YOURAPIKEY' -X POST https://YOURURL.execute-api.us-east-1.amazonaws.com/prod/invalidate -v
```

