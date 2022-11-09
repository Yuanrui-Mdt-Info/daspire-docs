# Amazon Selling Partner

This page contains the setup guide and reference information for the Amazon Selling Partner (SP).

**Prerequisites**

1. app\_id

1. lwa\_app\_id

1. lwa\_client\_secret

1. refresh\_token

1. aws\_access\_key

1. aws\_secret\_key

1. role\_arn

1. aws\_environment

1. region

1. replication\_start\_date

**Setup guide**

**Step 1: Set up Amazon Selling Partner**

[Register](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) Amazon Seller Partner application. [Create](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) IAM user.

**Step 2: Set up the Amazon Selling Partner data source**

1. Select **Amazon Selling Partner** from the Source list.

1. Using developer application from Step 1, [generate refresh token](https://developer-docs.amazon.com/sp-api/docs/self-authorizationhttps://developer-docs.amazon.com/sp-api/docs/self-authorization).

1. Paste all data to required fields using your IAM user and developer account.

1. Click **Save & Test**.

**Supported sync modes**

The Amazon SP data source supports the following [sync modes](https://wzg607ht3e.feishu.cn/wiki/wikcnv6CzIObuWshYXntuZWlV4g#GEeudYWKOo00OuxqqAucjA75nXd):

1. Full Refresh

1. Incremental

**Supported streams**

This source is capable of syncing the following streams:

1. [FBA Inventory Reports](https://sellercentral.amazon.com/gp/help/200740930)

1. [FBA Orders Reports](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110)

1. [FBA Shipments Reports](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100)

1. [FBA Replacements Reports](https://sellercentral.amazon.com/help/hub/reference/200453300)

1. [FBA Storage Fees Report](https://sellercentral.amazon.com/help/hub/reference/G202086720)

1. [Restock Inventory Reports](https://sellercentral.amazon.com/help/hub/reference/202105670)

1. [Flat File Open Listings Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)

1. [Flat File Orders Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)

1. [Flat File Orders Reports By Last Update](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) (incremental)

1. [Amazon-Fulfilled Shipments Report](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)

1. [Merchant Listings Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)

1. [Vendor Direct Fulfillment Shipping](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference)

1. [Vendor Inventory Health Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)

1. [Orders](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference) (incremental)

1. [Seller Feedback Report](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) (incremental)

1. [Brand Analytics Alternate Purchase Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)

1. [Brand Analytics Item Comparison Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)

1. [Brand Analytics Market Basket Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)

1. [Brand Analytics Repeat Purchase Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)

1. [Brand Analytics Search Terms Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)

1. [Browse tree report](https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report)

1. [Financial Event Groups](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups)

1. [Financial Events](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents)

**Report options**

Make sure to configure the [required parameters](https://developer-docs.amazon.com/sp-api/docs/report-type-values) in the report options setting for the reports configured.

**Data type mapping**

| **Integration Type** | **Daspire Type** |
| --- | --- |
| string | string |
| int, float, number | number |
| date | date |
| datetime | datetime |
| array | array |
| object | object |