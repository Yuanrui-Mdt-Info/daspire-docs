# eBay

This page contains the setup guide and reference information for eBay.

## Prerequisites

* eBay Store Name
* eBay Account Login (username and password)

## Setup guide

1. Select **eBay** from the Source list.

2. Enter a **Source Name**.

3. Select **eBay Marketplace ID**. It is the region of your eBay store.

4. Enter your eBay **Store Name**.

5. Click **Authenticate your eBay account**.

6. In **Data Replication Schedule**, choose an option between **Based on Start Date** or **Periodic Replication**.

    * If you choose **Based on Start Date**, enter a **Start date**, it is used for replicate data starting from the specified start date and an optional **End date**, any data after this date will not be replicated.
    * If you choose **Periodic Replication**, enter a number between 1-90. It is the duration in which your data will be extracted.

7. Click **Save & Test**.

## Supported streams

This source is capable of syncing the following streams:

* [Analytics](https://developer.ebay.com/api-docs/sell/analytics/resources/methods)
* [Payouts](https://developer.ebay.com/api-docs/sell/finances/resources/payout/methods/getPayouts)
* [Transactions](https://developer.ebay.com/api-docs/sell/finances/resources/transaction/methods/getTransactions)
* [Orders](https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrders)
* [Inventory Items](https://developer.ebay.com/api-docs/sell/inventory/resources/inventory_item/methods/getInventoryItems)
* [Inventory Locations](https://developer.ebay.com/api-docs/sell/inventory/resources/location/methods/getInventoryLocations)
* [Campaigns](https://developer.ebay.com/api-docs/sell/marketing/resources/campaign/methods/getCampaigns)
* [Promotions](https://developer.ebay.com/api-docs/sell/marketing/resources/promotion/methods/getPromotions)
* [Promotion Reports](https://developer.ebay.com/api-docs/sell/marketing/resources/promotion_report/methods/getPromotionReports)

## Performance consideration & Troubleshooting

Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
