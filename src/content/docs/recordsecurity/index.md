---
title: "Record Level Security"
description: "learn about subscribe intergration for created table"
---

## The concept and principles of Record Level Security

Record Level Security in Undb is a feature that allows users to control access to data records based on their roles or permissions. With record level security, users can define who can view, edit, or delete specific data records, ensuring data security and privacy.

The document will explain the fundamental concept and principles of Record Level Security, including how it helps you control access to data records.

The principle of Record Level Security (RLS) is similar to configuring data filtering conditions. Users need to configure corresponding rules in a pop-up window, and the system will control the display of table data and permissions for operations such as adding, deleting, and modifying records based on these rules. Please refer to the image below for a visual representation.

![RLS](/images/RLS-modal.png)

## Configure roles and permissions

Next, we will guide you on how to create user-based record-level permission management, allowing you to assign specific record editing permissions based on the needs of different users.

1. In the initial setup of each rule, you can choose the category of personnel to which the rule applies, with options of "anyone" and "users". If you choose "users", you can further specify a specific user from the system. Once the rule is created, it will apply to the specified user. Conversely, if "anyone" is selected, the rule will apply to all users. Within a table, you can create multiple rules for different users.

![RLS](/images/rls-role.png)

2. When creating a rule, you can set rule conditions. You can select a field in the table and set conditions for that field, then fill in the condition value. For example, selecting the "Deal" field and setting the condition as data starting with "Deal Name".

**_Select the field_**
![RLS](/images/rls-field.png)

**_Choice of conditions_**
![RLS](/images/rls-rule.png)

**_Input data_**
![RLS](/images/rls-rule-value.png)

3. A rule can have multiple conditions, and the system will calculate the intersection between these conditions. For example, Condition 1: Selecting the "Deal" field and setting the condition as data starting with "Deal Name"; Condition 2: Selecting the "Stage" field and setting the condition as not equal to "Discovery" status. This rule will be the intersection of meeting Condition 1 and Condition 2.

![RLS](/images/rls-rules.png)

> **The conditions in a rule take effect in the order they are listed, with each condition being evaluated based on its position in the rule and the matching criteria.**

4. After filling in the setup information, you must click the "Create New Record-Level Security" button to complete the creation.

![RLS](/images/rls-create.png)

5. When modifying the information of an already created rule, you need to click the adjacent "Update Rule" button for the changes to take effect.

![RLS](/images/rls-update.png)

## Data Display

The following GIF demonstrates how to set the visibility of data so that it is only accessible to everyone when the field "Deal" contains the data "Deal Name 1".

![RLS](/images/data-display-1.gif)

## Record operation authority
