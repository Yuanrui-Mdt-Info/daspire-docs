# Twilio

This page contains the setup guide and reference information for Twilio.

## Prerequisites

* Twilio Account SID
* Auth Token

## Setup guide

### Step 1: Obtain Twilio credentails

1. Sign in to your Twilio account.

2. You will find your **Account SID** and **Auth Token** on your [Twilio dashboard](https://www.twilio.com/user/account). Copy them.

### Step 2: Set up Twilio in Daspire

1. Select **Twilio** from the Source list.

2. Enter a **Source Name**.

3. Enter the **Account SID** you obtained in Step 1.

4. Enter the **Auth Token** you obtained in Step 1.

5. For **Start Date**, enter a UTC date and time in the format `YYYY-MM-DDTHH:mm:ssZ`. The data added on and after this date will be replicated.

6. For **Lookback Window**, enter the number of days you want data to be replicated.

7. Click **Save & Test**.

## Supported sync modes

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| Incremental Sync | Yes |
| Replicate Incremental Deletes | No |
| SSL connection | Yes |
| Namespaces | No |

## Output schema

This Source is capable of syncing the following core Streams:

* [Accounts](https://www.twilio.com/docs/usage/api/account#read-multiple-account-resources)
* [Addresses](https://www.twilio.com/docs/usage/api/address#read-multiple-address-resources)
* [Alerts](https://www.twilio.com/docs/usage/monitor-alert#read-multiple-alert-resources) (Incremental)
* [Applications](https://www.twilio.com/docs/usage/api/applications#read-multiple-application-resources)
* [Available Phone Number Countries](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-resource#read-a-list-of-countries) (Incremental)
* [Available Phone Numbers Local](https://www.twilio.com/docs/phone-numbers/api/availablephonenumberlocal-resource#read-multiple-availablephonenumberlocal-resources) (Incremental)
* [Available Phone Numbers Mobile](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-mobile-resource#read-multiple-availablephonenumbermobile-resources) (Incremental)
* [Available Phone Numbers Toll Free](https://www.twilio.com/docs/phone-numbers/api/availablephonenumber-tollfree-resource#read-multiple-availablephonenumbertollfree-resources) (Incremental)
* [Calls](https://www.twilio.com/docs/voice/api/call-resource#create-a-call-resource) (Incremental)
* [Conference Participants](https://www.twilio.com/docs/voice/api/conference-participant-resource#read-multiple-participant-resources) (Incremental)
* [Conferences](https://www.twilio.com/docs/voice/api/conference-resource#read-multiple-conference-resources) (Incremental)
* [Conversations](https://www.twilio.com/docs/conversations/api/conversation-resource#read-multiple-conversation-resources)
* [Conversation Messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource#list-all-conversation-messages)
* [Conversation Participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)
* [Dependent Phone Numbers](https://www.twilio.com/docs/usage/api/address?code-sample=code-list-dependent-pns-subresources&code-language=curl&code-sdk-version=json#instance-subresources) (Incremental)
* [Executions](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources) (Incremental)
* [Incoming Phone Numbers](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource#read-multiple-incomingphonenumber-resources) (Incremental)
* [Flows](https://www.twilio.com/docs/studio/rest-api/flow#read-a-list-of-flows)
* [Keys](https://www.twilio.com/docs/usage/api/keys#read-a-key-resource)
* [Message Media](https://www.twilio.com/docs/sms/api/media-resource#read-multiple-media-resources) (Incremental)
* [Messages](https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources) (Incremental)
* [Outgoing Caller Ids](https://www.twilio.com/docs/voice/api/outgoing-caller-ids#outgoingcallerids-list-resource)
* [Queues](https://www.twilio.com/docs/voice/api/queue-resource#read-multiple-queue-resources)
* [Recordings](https://www.twilio.com/docs/voice/api/recording#read-multiple-recording-resources) (Incremental)
* [Services](https://www.twilio.com/docs/chat/rest/service-resource#read-multiple-service-resources)
* [Step](https://www.twilio.com/docs/studio/rest-api/v2/step#read-a-list-of-step-resources)
* [Roles](https://www.twilio.com/docs/chat/rest/role-resource#read-multiple-role-resources)
* [Transcriptions](https://www.twilio.com/docs/voice/api/recording-transcription?code-sample=code-read-list-all-transcriptions&code-language=curl&code-sdk-version=json#read-multiple-transcription-resources)
* [Trunks](https://www.twilio.com/docs/sip-trunking/api/trunk-resource#trunk-properties)
* [Usage Records](https://www.twilio.com/docs/usage/api/usage-record#read-multiple-usagerecord-resources) (Incremental)
* [Usage Triggers](https://www.twilio.com/docs/usage/api/usage-trigger#read-multiple-usagetrigger-resources)
* [Users](https://www.twilio.com/docs/conversations/api/user-resource)
* [UserConversations](https://www.twilio.com/docs/conversations/api/user-conversation-resource#list-all-of-a-users-conversations)
* [VerifyServices](https://www.twilio.com/docs/verify/api/service#maincontent)

## Performance considerations & troubleshooting

1. The Twilio integration will gracefully handle rate limits. For more information, see the [Twilio docs](https://support.twilio.com/hc/en-us/articles/360044308153-Twilio-API-response-Error-429-Too-Many-Requests-) for rate limitations.

2. Max number of tables that can be synced at a time is 6,000. We advise you to adjust your settings if it fails to fetch schema due to max number of tables reached.
