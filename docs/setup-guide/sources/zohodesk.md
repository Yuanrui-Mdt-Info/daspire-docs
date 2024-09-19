# Zoho Desk

## **Overview**

The Zoho Desk Connector allows you to sync data from Zoho Desk from different modules such as Tickets, Contacts, Accounts and so on. Into your preferred destination, allowing you to automate various tasks such as performance scoring for customer service departments. This guide will help you configure and use the connector.

## **Prerequisites**

- [ ] A Zoho Desk account with administrative access

## **Configuration Steps**

### **Authentication**

![Zoho Desk OAuth](/assets/images/zohodesk-oauth.jpeg)

1. Click on the "**Authenticate with Zoho Desk**" button.
2. You'll be redirected to Zoho Desk to authorize the connection.
3. Log in to your Zoho Desk account and grant the necessary permissions.
4. Once authorized, you'll be redirected back to Daspire.

### **Configure Connector Settings**

1. **Organization ID**: The identifier of the organization to access. To find your Organization ID:
   - In Zoho Desk, go to **Setup > Developer Space > API**
   - Copy the **Organization ID (OrgID)** displayed there

![Zoho Desk Organization ID](/assets/images/zohodesk-org-id.png)

2. **Limit**: It determines the number of rows to fetch per request. Adjust this only if you need to control the amount of data fetched per request.

## **Supported Data Streams**

The Zoho Desk connector can sync the following types of data:

- **Agents**: Customer service executives in your organization who interact with contacts and resolve tickets.
- **Tickets**: Organizing units for customer enquiries, requests, complaints, and other interactions.
- **Contacts**: End-customers who raise requests or make enquiries/complaints with your customer service team.
- **Accounts**: Account refers to customer organizations that use your products or services. An account can have multiple contacts.

## **Supported Sync Modes**

Choose the sync mode that best fits your use case:

- **Full Refresh, Overwrite**: Replaces all existing data in the destination.
- **Full Refresh, Append**: Adds all data from the source to the destination without deleting existing data.

## **Troubleshooting**

If you encounter any issues:

1. Ensure your Zoho Desk account has the necessary permissions.
2. Check that your Organization ID is entered correctly.
3. Review Daspire logs for any error messages.
4. For persistent errors, contact Daspire **support**.

## **Additional Resources**

[Zoho Desk API Documentation](https://desk.zoho.com/DeskAPIDocument#Introduction)
