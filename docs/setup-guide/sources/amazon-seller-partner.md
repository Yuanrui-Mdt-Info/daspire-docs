# Amazon Seller Partner

This page contains the setup guide and reference information for Amazon Seller Partner (SP).

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| Incremental Sync | Yes |

## Prerequisites

* Amazon SP Account
* Amazon Store Name
* Amazon Store Region

## Setup guide

1. Select **Amazon Seller Partner** from the Source list.

2. Enter a **Source Name**.

3. Enter your Amazon **Store Name**.

4. Select your the **Region** of your store.

  Marketplace availability:

  > * North America: United States (US), Canada (CA), Mexico (MX)
  > * Europe: Belgium (BE), Germany (DE), Spain (ES), France (FR), Italy (IT), United Kingdom (UK), Netherlands (NL), Sweden (SE), Poland (PL), Turkey (TR)
  > * Middle East: United Arab Emirates (AE), Saudi Arabia (SA), Egypt (EG)
  > * Asia Pacific: Japan (JP), India (IN), Australia (AU), Singapore (SG)

5. Click **Authenticate your Amazon Seller Partner Account**.

6. **Max wait time for reports (in seconds)** is the maximum number of minutes the connector waits for the generation of a report for streams.

7. **Period In Days** will be used for stream slicing for initial full_refresh sync when no updated state is present for reports that support sliced incremental sync.

8. **Start Date** - Any data before this date will not be replicated.

9. **End Date (optional)** - any data after this date will not be replicated.

10. **Report Options** is additional information passed to reports. Must be a valid json string.

11. Click **Save & Test**.

## Supported streams

This source is capable of syncing the following streams:

* [FBA Inventory Reports](https://sellercentral.amazon.com/gp/help/200740930)
* [FBA Orders Reports](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110)
* [FBA Shipments Reports](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100)
* [FBA Replacements Reports](https://sellercentral.amazon.com/help/hub/reference/200453300)
* [FBA Storage Fees Report](https://sellercentral.amazon.com/help/hub/reference/G202086720)
* [Restock Inventory Reports](https://sellercentral.amazon.com/help/hub/reference/202105670)
* [Flat File Open Listings Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [Flat File Orders Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [Flat File Orders Reports By Last Update](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) (incremental)
* [Amazon-Fulfilled Shipments Report](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [Merchant Listings Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [Vendor Direct Fulfillment Shipping](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference)
* [Vendor Inventory Health Reports](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [Orders](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference) (incremental)
* [Seller Feedback Report](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference) (incremental)
* [Brand Analytics Alternate Purchase Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [Brand Analytics Item Comparison Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [Brand Analytics Market Basket Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [Brand Analytics Repeat Purchase Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [Brand Analytics Search Terms Report](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [Browse tree report](https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report)
* [Financial Event Groups](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups)
* [Financial Events](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents)

## Data type mapping

| Integration Type | Daspire Type |
| --- | --- |
| `string` | `string` |
| `int`, `float`, `number` | `number` |
| `date` | `date` |
| `datetime` | `datetime` |
| `array` | `array` |
| `object` | `object` |

## Performance considerations & Troubleshooting

1. Make sure to configure the [required parameters](https://developer-docs.amazon.com/sp-api/docs/report-type-values) in the report options setting for the reports configured.

2. For `GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL` and `GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE` streams maximum value for `period_in_days` 30 days and 60 days. So, for any value that exceeds the limit, the `period_in_days` will be automatically reduced to the limit for the stream.

3. Information about rate limits you may find [here](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).

4. Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
