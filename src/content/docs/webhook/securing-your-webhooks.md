---
title: 'Securing your webhooks'
description: 'learn how to secure you webhooks'
---

Make sure that your webhook endpoint receive request from undb.

### Set webhook secret envrionment

Set `UNDB_WEBHOOK_SECRET` environment varilable to your own secret when deploy undb

### Validate Payloads from undb

When your secret token is set, undb uses it to create a hash signature with each payload. This hash signature is included with the headers of each request as `x-undb-signature`

#### Typescript example

```ts
const secret = process.env.UNDB_WEBHOOK_SECRET

const signature = "undb_" + crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(body.timestamp + '.' + JSON.stringify(body)))
      .digest('hex')
```


