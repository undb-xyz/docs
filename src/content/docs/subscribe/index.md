---
title: "Introduction"
description: "learn about subscribe intergration for created table"
---

## What is Subscribe intergration

"Subscribe interface" usually refers to a subscription interface, which is a common type of API interface. Through this interface, users can make subscription requests for specific events or data and receive corresponding callback information. The subscription interface is often used to implement real-time data push, message push and other functions. The subscribed data source can be a server, database, or other platforms or devices.

Undb's subscription interface is automatically generated based on each form. With this interface, you can listen to operations within the form and trigger corresponding events.

## Subscribe interface display

You can view the detailed display of subscription interface in the API preview interface.

![subscribe](/images/subscribe.png)

If you perform any actions on the table, the subscription interface will receive detailed information about the time of the triggered event.

![subscribe](/images/subscribe-1.png)

```json
{
  "id": "987ba58f-d329-4eae-b387-3a49505be5a6",
  "data": {
    "event": {
      "eventId": "987ba58f-d329-4eae-b387-3a49505be5a6",
      "operatorId": "usrbuajh55q",
      "timestamp": "2023-06-18T13:29:50.003Z",
      "payload": {
        "tableId": "tbl4undb0lh",
        "tableName": "Deal Tracker",
        "record": {
          "id": "recx2piwp4h",
          "Deal": "Deal Name 3",
          "Stage": { "id": "optdczmv", "name": "Won" },
          "createdAt": "2023-06-18T13:29:43.000Z",
          "createdBy": {
            "id": "usrbuajh55q",
            "username": "test",
            "avatar": null,
            "color": "rose"
          },
          "updatedAt": "2023-06-18T13:29:43.000Z",
          "updatedBy": {
            "id": "usrbuajh55q",
            "username": "test",
            "avatar": null,
            "color": "rose"
          },
          "Owner": [
            {
              "id": "usrbuajh55q",
              "username": "test",
              "avatar": null,
              "color": "rose"
            }
          ],
          "Contacts": [{ "id": "rechywfw24h", "value": ["James"] }],
          "Priority": { "id": "opt68d8z", "name": "Low" },
          "Deal Length": [
            "2023-01-05T16:00:00.000Z",
            "2023-05-11T16:00:00.000Z"
          ],
          "Close Date": "2023-05-11T16:00:00.000Z",
          "Deal Creation Date": "2023-01-05T16:00:00.000Z",
          "Deal Value": 37000
        }
      }
    }
  }
}
```
