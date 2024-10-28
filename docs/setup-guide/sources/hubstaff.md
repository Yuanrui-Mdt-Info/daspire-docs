# Hubstaff - Setup Guide

## Overview

The Hubstaff Connector allows you to sync data from Hubstaff including organizations, members, activities, and time off requests into your preferred destination. This enables automated tracking of team activities, time management, and organizational analytics. This guide will help you configure and use the connector.

## Prerequisites

- [ ] A Hubstaff account with administrative access

## Configuration Steps

### Authenticatio

1. Click on the "**Authenticate with Hubstaff**" button.
2. You'll be redirected to Hubstaff to authorize the connection.
3. Log in to your Hubstaff account and grant the necessary permissions.
4. Once authorized, you'll be redirected back to Daspire.

### Configure Connector Settings

#### 1. Organization ID
To find your Organization ID:

a. While logged into Hubstaff, navigate to your Dashboard page
b. Look at the URL in your browser:
   ```
   https://app.hubstaff.com/dashboard/[your_org_id]/team
   ```
c. Copy the number that appears in place of [your_org_id]
d. Paste this number into the Organisation ID field

### Supported Data Streams

The Hubstaff connector can sync the following types of data:

- **Organization Members**: Details about users within organizations
- **Activities**: Detailed activity records
- **Time Off Requests**: Time-off related information

### Supported Sync Modes

Choose the sync mode that best fits your use case:

- **Full Refresh, Overwrite**: Replaces all existing data in the destination
- **Full Refresh, Append**: Adds all data from the source to the destination without deleting existing data

## Troubleshooting

If you encounter any issues:

1. Ensure your Hubstaff account has the necessary permissions
2. Verify that your Organization ID is entered correctly
3. Check that your OAuth authentication is still valid
4. Review Daspire logs for any error messages

Common Issues and Solutions:

| Issue | Solution |
|-------|----------|
| "Invalid Organization ID" | Double-check the ID from your Hubstaff dashboard URL |
| "Authentication Failed" | Re-authenticate through the OAuth flow |
| "Rate Limit Exceeded" | Wait for the rate limit window to reset |
| "Missing Permissions" | Ensure your account has admin access |

For persistent errors, contact Daspire support.

## Data Limitations
- Daily Activities:
  - Maximum date range: 31 days per request
  - Historical data limit: 3 years
- Activities:
  - Maximum date range: 7 days per request
  - Historical data limit: 6 months
- Data latency: Up to 20 minutes for activity data

## Additional Resources

- [Hubstaff API Documentation](https://developer.hubstaff.com/docs/hubstaff_v2)
- [Hubstaff Authentication Guide](https://developer.hubstaff.com/authentication)
- [Hubstaff Developer Portal](https://developer.hubstaff.com)