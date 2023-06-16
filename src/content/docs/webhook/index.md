---
title: "Introduction"
description: "learn about open api intergration for created table"
---

## Webhook Integration

Undb provides built in webhook integrationm, whenever certain events occur on Undb, Webhooks provide a way to pass notifications to an external web server. 

You can follow the steps to trigger webhook to your own server.

### Create Webhook

create webhook from view

![create webhook from view](/images/create-webhook-1.png)

The creation of a webhook is a mechanism that corresponds to each form one by one. Currently, it only supports the creation of a corresponding webhook under each form, in order to subscribe to the operational events of that form.

create webhook

The following GIF animation demonstrates the basic steps for creating a Webhook to listen to a table.

![create webhook](/images/create-webhook-2.gif)

#### header

> **_*Please note that the headers filled in during the creation of a webhook are used to provide a unique identifier for interface requests. Users are free to fill in any value according to their specific needs.*_**

![create webhook form](/images/create-webhook-3.png)

Setting a webhook secret allows you to ensure that POST requests sent to the payload URL are from Undb. When you set a secret, you'll receive the X-Undb-Signature and X-Undb-header in the webhook POST request. For more information on how to use a secret with a signature header to secure your webhook payloads, see "Securing your webhooks.

And you will get a new webhook created

![webhook list](/images/webhook-list.png)

### Try it out!

If you create a webhook triggered by record creation, you can create a new record in a table and wait for the webhook URL to be called. For example, in the image below, we can see that a webhook has been created in a table. This webhook is subscribed to the event "record creation". Whenever a new record is created in the table, you can receive a message via the webhook.

![webhook test](/images/webhook-test.png)

```json
// webhook event result
{
  "id": "d3f31178-c5f6-47e9-980b-f84bfc0f232f",
  "operatorId": "usrbuajh55q",
  "name": "record.created",
  "timestamp": "2023-06-16T15:35:20.006Z",
  "event": {
    "tableId": "tbl4undb0lh",
    "tableName": "Deal Tracker",
    "record": {
      "id": "recxi9oke8l",
      "Deal": "webhook test",
      "Stage": { "id": "optapz93", "name": "Discovery" },
      "createdAt": "2023-06-16T15:35:16.000Z",
      "createdBy": {
        "id": "usrbuajh55q",
        "username": "test",
        "avatar": null,
        "color": "rose"
      },
      "updatedAt": "2023-06-16T15:35:16.000Z",
      "updatedBy": {
        "id": "usrbuajh55q",
        "username": "test",
        "avatar": null,
        "color": "rose"
      },
      "Owner": [],
      "Contacts": [],
      "Priority": null,
      "Deal Length": [null, null],
      "Close Date": null,
      "Deal Creation Date": null,
      "Deal Value": 0
    }
  }
}
```

> **_*As you can see, the header of the Webhook interface carries a signature and other headers that the user has added.*_**

![webhook header](/images/header.png)

### Events

- record created
- record updated
- record deleted
- record bulk updated
- record bulk deleted
- record bulk created
