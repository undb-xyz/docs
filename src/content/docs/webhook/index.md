---
title: "Introduction"
description: "learn about open api intergration for created table"
---

## Webhook Integration

undb provides built in webhook integrationm, you can follow the steps to trigger webhook to your own server.

### Create Webhook

create webhook from view

![create webhook from view](/src/assets/create-webhook-1.png)

create webhook

![create webhook](/src/assets/create-webhook-2.png)

![create webhook form](/src/assets/create-webhook-3.png)

And you will get a new webhook created

![webhook list](/src/assets/webhook-list.png)

### Try it out!

If you create a webhook triggered by record creation, you can create a new record in the table and waiting for the webhook url get callled.

### Events

- record created
- record updated 
- record deleted
- record bulk updated
- record bulk deleted
- record bulk created