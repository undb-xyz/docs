---
title: 'Config litestream backup'
description: 'learn how to backup sqlite database to litestream'
---

## Set Environment

when you run `undb`, you can set environment variable `UNDB_LITESTREAM_REPLICA_URL` to a valid s3 url

```
UNDB_LITESTREAM_REPLICA_URL=s3://<YOUR_BUCKET_NAME>/undb.db
```

## Learn more about s3 and litestream

[litestream](https://litestream.io/)

You can use any s3 compatible object storage like [minio](https://min.io/)
