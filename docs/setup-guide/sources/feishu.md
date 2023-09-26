# Feishu/Lark

This page contains the setup guide and reference information for Feishu/Lark.

## Prerequisites

*
*

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| SSL connection | Yes |
| Namespaces | No |

## Setup guide

### Step 1: Add the Daspire application in Feishu/Lark

1. In the Feishu/Lark Document you want to sync data from, click the 3 dots (**...**) on the top right, click **More**, and then click **Add Applications**.
![Feishu add application](/assets/images/feishu-add-application.jpg "Feishu add application")

2. In the **Add Applications** pop up, search for **Daspire**.

3. Add the Daspire application. Daspire only needs the **Can view** access.
![Feishu access](/assets/images/feishu-view-access.jpg "Feishu access")

### Step 2: Obtain Feishu Approval Code
### Step 3: Obtain Feishu bittable link


4. You're ready to set up Feishu/Lark in Daspire!

### Step 4: Set up Feishu/Lark in Daspire

1. Select **Feishu/Lark** from the Source list.

2. Enter a **Source Name**.

3. Enter your Feishu/Lark document **Approval Code**.

4. Enter your Feishu/Lark document **bittable link**.

5. In **Data Replication Schedule**, choose an option between **Based on Start Date** or **Periodic Replication**.

6. Click **Save & Test**.

## Supported streams

This source is capable of syncing the following streams:

* [XXX](???)

## Troubleshooting

Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
