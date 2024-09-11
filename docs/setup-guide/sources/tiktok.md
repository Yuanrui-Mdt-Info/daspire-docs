# TikTok Ads - Setup Guide

## Overview

The TikTok Ads Connector allows you to sync advertising data and statistics from TikTok's Marketing API to your preferred destination. This powerful tool enables marketers to retrieve comprehensive statistics about their ad accounts, ads, adsets, and campaigns running on TikTok.

TikTok Ads operates on a hierarchical structure:

1. Ad Account: The top-level entity that can contain one or more campaigns.
2. Campaigns: Mainly used for setting an objective and configuring a corresponding budget.
3. Ad Groups: Within each campaign, you can create multiple ad groups to configure settings like target audience, placements, budget, and schedule.
4. Ads: Created within each ad group, containing the details needed for displaying an ad, such as the format of the ad or its creative content.

By leveraging this connector, you can extract valuable data from each level of this hierarchy, allowing for in-depth analysis and optimization of your TikTok advertising efforts. Whether you're looking to assess the performance of individual ads, analyze the effectiveness of different ad groups, or get a bird's-eye view of your entire campaign structure, this connector provides the data you need to make informed decisions.

> 💡 If you reside in a country which has blocked TikTok, for example India, you need to use a VPN to connect to your TikTok Ads account and create the Connection.

## Prerequisites

- [ ] An active TikTok Ads Manager account with appropriate permissions
- [ ] A VPN connection, if the country you are in has blocked TikTok.

## Configuration Steps

### Authentication

1. Click on the "Login with TikTok" button.
2. You'll be redirected to TikTok to authorize the connection.
3. Log in to your TikTok Ads account and grant the necessary permissions.
4. Once authorized, you'll be redirected back to the connector setup page.

### Configure Connector Settings

1. **Ad Accounts**: Select the TikTok Ads account(s) from which you want to replicate data. You can choose multiple accounts.
2. **Historical Sync Duration**: Choose the duration for which you want to ingest existing data from the source; 3 months, 6 months, 1 year, 2 years or any custom time period (If selected, you'll need to specify start and end date). The first run of the Pipeline ingests historical data for the selected reports and objects from the specified start date.
3. **Attribution Window (optional)**: The Attribution Window determines how long after viewing or clicking an ad a conversion can be attributed to that ad. For the TikTok Ads Connector, you can set this window to any value between 1 and 28 days. This setting affects how conversions are reported in your data, so choose a window that best reflects your typical customer journey.

## Supported Data Streams

The TikTok Ads connector can sync the following types of data:

- **Advertisers**: Information about the advertising accounts, including account details, status, and associated information.
- **Campaigns**: Data related to your advertising campaigns, including campaign objectives, budgets, start and end dates, and overall performance metrics.
- **Ad Groups**: Information about ad groups within campaigns, including targeting settings, placements, budgets, and schedules.
- **Ads**: Detailed data about individual ads, including creative content, format, status, and performance metrics.
- **Reports**: Various report types providing in-depth performance data:
  - Basic Report: Core performance metrics like impressions, clicks, conversions, and spend.
  - Audience Report: Insights into the demographics and characteristics of users interacting with your ads.
  - Playable Ads Report: Engagement metrics specific to interactive ad formats.
  - Dynamic Showcase Ads (DSA) Report: Performance data for ads that automatically personalize content based on user behavior.
  - Reservation Ads Report: Metrics specific to reservation ads, including delivery and performance data.
  - Business Center Report: Comprehensive report covering multiple aspects of the advertising account's performance.
  - GMV Max Ads Report: Focused on Gross Merchandise Value, particularly relevant for e-commerce advertisers.

## Sync Modes

The connector supports the following sync modes:

- **Full Refresh, Overwrite**: Replaces all existing data in the destination.
- **Full Refresh, Append**: Adds all data from the source to the destination without deleting existing data.

## Limitations

1. **API Rate Limits**: TikTok imposes strict rate limits on API requests (10 queries per second, 600 queries per minute, 864,000 queries per day).
2. **Data Latency**: Different fields in the reports may have varying latencies, affecting real-time reporting capabilities.
3. **Attribution Window**: The maximum attribution window supported is 28 days.
4. **Historical Data**: Access to historical data may be limited based on the advertiser's account history and TikTok's data retention policies.

## Troubleshooting

If you encounter any issues:

1. Ensure your TikTok Ads account has the necessary permissions.
2. Check that your Ad Account selections are correct.
3. Review the connector logs for any error messages. For persistent errors, please contact support.

## Additional Resources

- [TikTok API - Rate Limits](https://ads.tiktok.com/marketing_api/docs?id=1740348932679681)
- [TikTok API - Permission scopes](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162)
- [TikTok API - Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864915188737)