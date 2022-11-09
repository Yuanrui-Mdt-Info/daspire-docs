# Amazon Ads

This page contains the setup guide and reference information for the Amazon Ads.

**Prerequisites**

1. Client ID

1. Client Secret

1. Refresh Token

1. Region

1. Report Wait Timeout

1. Report Generation Maximum Retries

1. Start Date (Optional)

1. Profile IDs (Optional)

**Setup guide**

**Step 1: Set up Amazon Ads**

Create an Amazon user with access to [Amazon Ads account](https://advertising.amazon.com/).

**Step 2: Complete Amazon Ads API onboarding process**

The [onboarding process](https://advertising.amazon.com/API/docs/en-us/setting-up/overview) has several steps and may take several days to complete. After completing all steps you will have to get Amazon client application Client ID, Client Secret and Refresh Token.

**Step 3: Set up the Amazon Ads data source**

1. Select **Amazon Ads** from the Source list.

1. Select **Region** to pull data from **North America (NA)**, **Europe (EU)**, **Far East (FE)** or **Sandbox Environment**. See [Amazon docs](https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints) for more details.

1. Enter your Amazon Ads account **Client ID**.

1. Enter your Amazon Ads account **Client Secret**.

1. Enter your Amazon Ads account **Refresh Token**.

1. **Report Wait Timeout** is the maximum number of minutes the connector waits for the generation of a report for streams Brands Reports, Brand Video Reports, Display Reports, Products Reports.

1. **Report Generation Maximum Retries** is the maximum number of attempts the connector tries to generate a report for streams Brands Reports, Brand Video Reports, Display Reports, Products Reports.

1. **Start Date (Optional)** is used for generating reports starting from the specified start date. Should be in YYYY-MM-DD format and not more than 60 days in the past. If not specified today's date is used. The date for a specific profile is calculated according to its timezone, this parameter should be specified in the UTC timezone. Since it doesn't make sense to generate reports for the current day (metrics could be changed), it generates reports for the day before (e.g. if **Start Date** is 2022-10-11 it would use 20221010 as reportDate parameter for request).

1. **Profile IDs (Optional)** you want to fetch data for. See [Amazon docs](https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints) for more details.

1. Click **Save & Test**.

**Supported sync modes**

The Amazon Ads data source supports the following [sync modes](https://wzg607ht3e.feishu.cn/wiki/wikcnv6CzIObuWshYXntuZWlV4g#GEeudYWKOo00OuxqqAucjA75nXd):

1. Full Refresh

1. Incremental

**Supported streams**

This source is capable of syncing the following streams:

1. [Profiles](https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles)

1. [Sponsored Brands Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Campaigns)

1. [Sponsored Brands Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups)

1. [Sponsored Brands Keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Keywords)

1. [Sponsored Display Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns)

1. [Sponsored Display Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Ad%20groups)

1. [Sponsored Display Product Ads](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Product%20ads)

1. [Sponsored Display Targetings](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Targeting)

1. [Sponsored Products Campaigns](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns)

1. [Sponsored Products Ad groups](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Ad%20groups)

1. [Sponsored Products Keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Keywords)

1. [Sponsored Products Negative keywords](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Negative%20keywords)

1. [Sponsored Products Ads](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20ads)

1. [Sponsored Products Targetings](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20targeting)

1. [Brands Reports](https://advertising.amazon.com/API/docs/en-us/reference/sponsored-brands/2/reports)

1. [Brand Video Reports](https://advertising.amazon.com/API/docs/en-us/reference/sponsored-brands/2/reports)

1. [Display Reports](https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Reports)

1. [Products Reports](https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Reports)

**Specific features and highlights**

All the reports are generated for the day before relatively to the target profile' timezone.

**Performance considerations**

Information about expected report generation waiting time you may find [here](https://advertising.amazon.com/API/docs/en-us/get-started/developer-notes).

**Data type mapping**

| **Integration Type** | **Daspire Type** |
| --- | --- |
| string | string |
| int, float, number | number |
| date | date |
| datetime | datetime |
| array | array |
| object | object |