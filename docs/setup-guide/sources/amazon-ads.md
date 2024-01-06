# Amazon Ads

This page contains the setup guide and reference information for Amazon Ads.

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| Incremental Sync | Yes |

## Prerequisites

* Amazon Ads account login (email and password)

## Setup guide

### Step 1: Set up Amazon Ads

Create an Amazon user with access to [Amazon Ads account](https://advertising.amazon.com/) or use an existing account for authentication.

### Step 2: Set up the Amazon Ads data source in Daspire

1. Select **Amazon Ads** from the Source list.

2. Enter a **Source Name**.

3. Select **Region** to pull data from **North America (NA)**, **Europe (EU)** or **Far East (FE)**. See [Amazon docs](https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints) for more details.

4. Click **Authenticate your Amazon Ads account** and login to your Amazon Ads account.

5. **Report Wait Timeout** is the maximum number of minutes the connector waits for the generation of a report for streams. Default is 60 minutes.

6. **Report Generation Maximum Retries** is the maximum number of attempts the connector tries to generate a report for streams. Default is 5.

7. **Start Date** (Optional) is used for generating reports starting from the specified start date. Should be in `YYYY-MM-DD` format and not more than `60 days` in the past. If not specified, today's date is used. The date is treated in the timezone of the processed profile.

8. **Source Identifier** (Optional) is the identification to help you identify your Amazon Ads source in Daspire.

9. **Profile IDs** (Optional) you want to fetch data for. See [Amazon docs](https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles) for more details.

10. Click **Save & Test**.

## Supported streams

This source is capable of syncing the following streams:

* [Profiles](https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles)
* [Sponsored Brands Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Campaigns)
* [Sponsored Brands Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups)
* [Sponsored Brands Keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Keywords)
* [Sponsored Brands Reports](https://advertising.amazon.com/API/docs/en-us/reference/sponsored-brands/2/reports)
* [Sponsored Display Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns)
* [Sponsored Display Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Ad%20groups)
* [Sponsored Display Product Ads](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Product%20ads)
* [Sponsored Display Targetings](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Targeting)
* [Sponsored Display Reports](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Reports)
* [Sponsored Products Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/Campaigns)
* [Sponsored Products Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/AdGroups)
* [Sponsored Products Keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/Keywords)
* [Sponsored Products Negative keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/NegativeKeywords)
* [Sponsored Products Ads](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/ProductAds)
* [Sponsored Products Targetings](https://advertising.amazon.com/API/docs/en-us/sponsored-products/3-0/openapi/prod#/Product%20Targeting)
* [Sponsored Products Reports](https://advertising.amazon.com/API/docs/en-us/reporting/v3/overview)

## Specific features and highlights

1. All the reports are generated relative to the target profile' timezone.

2. Campaign reports may sometimes have no data or not presenting in records. This can occur when there are no clicks or views associated with the campaigns on the requested day. See [details](https://advertising.amazon.com/API/docs/en-us/guides/reporting/v2/faq#why-is-my-report-empty).

3. Report data synchronization only cover the last 60 days. See [details](https://advertising.amazon.com/API/docs/en-us/reference/1/reports#parameters).

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

1. Information about expected report generation waiting time you may find [here](https://advertising.amazon.com/API/docs/en-us/get-started/developer-notes).

2. Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
