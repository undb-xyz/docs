---
title: 'Installation with docker'
description: 'learn how to deploy / install undb with simple docker run command'
---

Learn how to deploy `undb` with a simple docker run command

## Run undb

```bash
docker run -d --name undb -p 4000:4000 --platform linux/x86_64 -v ~/.undb/:/var/opts/.undb ghcr.io/undb-xyz/undb:latest
```

The command above will run undb in the background and expose port `4000`, and you can visit `http://localhost:4000` and get started

## Volumes

Note that `undb` data will be saved in `~/.undb/` on your local machine
