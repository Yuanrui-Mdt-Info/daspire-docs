# Google Sheets

This page contains the setup guide and reference information for Google Sheets.

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh - Overwrite | Yes |
| Full Refresh - Append | Yes |

## Prerequisites

* Google Sheets Link
* For OAuth authentication:
  > * A Google Workspace account with access to the Google Sheets
* For Service Account Key authentication:
  > * Service Account Key with access to the Google Sheets you want to replicate
  > * Google Cloud Console access
  > * A Google Cloud Platform (GCP) project
  > * Enable the Google Sheets API in your GCP project

## Setup guide

### Step 1: Create a Service Account for authentication (skip this step for OAuth authentication)

1. Go to the [Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts) page in the Google Developers console.
![Google Service Accounts](/assets/images/ga4-service-accounts.jpg "Google Service Accounts")

2. Select the project you want to use (or create a new one).

3. Click **+ Create Service Account** at the top of the page.
![Google Create Service Account](/assets/images/ga4-create-service-account.jpg "Google Create Service Account")

4. Enter a name for the service account, and click **Create and Continue**.
![Google Service Account Details](/assets/images/ga4-service-account-details.jpg "Google Service Account Details")

5. Choose the role for the service account. We recommend the **Viewer role (Read & Analyze permissions)**. Click Continue. And then click Done.
![Google Service Account Role](/assets/images/ga4-service-account-role.jpg "Google Service Account Role")

6. Select your new service account from the list, and open the Keys tab. Click **Keys** > **Add Key**.
![Google Service Account Add Key](/assets/images/ga4-service-account-add-key.jpg "Google Service Account Add Key")

7. Select **JSON** as the Key type. Then click Create. This will generate and download the JSON key file that you'll use for authentication.

### Step 2: Enable the Google Sheets API (skip this step for OAuth authentication)

1. Go to the [API Console/Librar](https://console.cloud.google.com/apis/library) page.

2. Make sure you have selected the correct project from the top.

3. Find and select the Google Sheets API.
![Google Sheets API](/assets/images/gsheets-api.jpg "Google Sheets API")

4. Click ENABLE.
![Enable Google Sheets API](/assets/images/gsheets-api-enable.jpg "Enable Google Sheets API")

NOTE: If your Google Sheets is viewable by anyone with its link, no further action is needed and you can proceed to **Step 4**. If not, give your Service account access to your Google Sheets by following Step 3.

### Step 3: Give your Service account access to your Google Sheets (skip this step for OAuth authentication)

1. Go to [Google Cloud Service accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) and find your **service account email**. Copy it.
![Google Service Account Email](/assets/images/gsheets-email.jpg "Google Service Account Email")

2. Open the Google Sheets you want to sync, and click **Share** in the top right corner.
![Google Sheets Share](/assets/images/gsheets-share.jpg "Google Sheets Share")

3. Enter your Service account email, give it **Viewer** access, and click Share.
![Google Sheets Viewer Access](/assets/images/gsheets-viewer-access.jpg "Google Sheets Viewer Access")

### Step 4: Obtain Google Sheets link

1.  Go to the Google Sheets you want to sync, click **Share** in the top right corner, and click **Copy Link**.
![Google Sheets Link](/assets/images/gsheets-link.jpg "Google Sheets Link")

2. You're ready to set up Google Sheets in Daspire!

### Step 5: Set up Google Sheets in Daspire

1. Select **Google Sheets** from the Source list.

2. Enter a **Source Name**.

3. For **Authentication**, choose one of the following:

  > * For **OAuth** authentication, click **Authenticate via Google (OAuth)** and sign in to your Google account with access to the Google Sheets you want to sync.
  > * For **Service Account Key Authenication**, enter the Service Account JSON Key you obtained from Step 1.

4. For **Google Sheets Link**, enter the link to the Google Sheets you obtained in Step 4.

5. (Optional) For **Row Batch Size**, enter the number of rows fetched when making a Google Sheet API call. Defaults to 200.

6. Click **Save & Test**.

## Output schema

Each sheet in the selected Google Sheets is synced as a separate stream. Each selected column in the sheet is synced as a string field.

## Data type mapping

| Integration Type | Daspire Type |
| --- | --- |
| Any type | `string` |

## Performance consideration & Troubleshooting

1. The Google API rate limits are:

  * 300 read requests per minute per project
  * 60 requests per minute per user per project

  Daspire batches requests to the API in order to efficiently pull data and respect these rate limits. We recommend not using the same user or service account for more than 3 instances of the Google Sheets source integration to ensure high transfer speeds.

2. If your sheet is completely empty (no header rows) or deleted, Daspire will not delete the table in the destination. If this happens, the sync logs will contain a message saying the sheet has been skipped when syncing the full Google Sheets.

3. Source setup will fail if the speadsheet is not a Google Sheets file. If the file was saved or imported as another file type the setup could fail.

4. Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
