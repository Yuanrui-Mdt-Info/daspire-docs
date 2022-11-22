# PrestaShop

This page contains the setup guide and reference information for PrestaShop.

## Prerequisites

* Access Key
* Shop URL
* Start date

## Setup guide

### Step 1: Set up PrestaShop

1. By default, the webservice feature is disabled on PrestaShop and needs to be [switched on](https://devdocs.prestashop.com/1.7/webservice/tutorials/creating-access/#enable-the-webservice).

2. To get access to the PrestaShop API you need to create an access key, please follow the instructions in this [documentation](https://devdocs.prestashop-project.org/1.7/webservice/tutorials/creating-access/#create-an-access-key).

### Step 2: Set up the PrestaShop data source in Daspire

1. In the left navigation bar, click **Sources**. In the top-right corner, click **+ new source**.

2. On the source setup page, select **PrestaShop** from the Source type dropdown.

3. Enter the **Access Key** that you obtained.

4. Enter the **Shop URL** without trailing slash, for example, [https://my.prestashop.com](https://my.prestashop.com/), only HTTPS urls are supported.

5. Enter **Start date** in YYYY-MM-DD format. The data added on and after this date will be replicated.

## Supported sync modes

The PrestaShop data source supports the following sync modes:

* [Full Refresh - Overwrite](https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync)
* [Full Refresh - Append](https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append)
* [Incremental - Append](https://docs.airbyte.com/understanding-airbyte/connections/incremental-append)
* [Incremental - Deduped History](https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history)

## Supported Streams

This source outputs the following full refresh streams:
* [Carriers](https://devdocs.prestashop.com/1.7/webservice/resources/carriers/)
* [Combinations](https://devdocs.prestashop.com/1.7/webservice/resources/combinations/)
* [Contacts](https://devdocs.prestashop.com/1.7/webservice/resources/contacts/)
* [Content Management System](https://devdocs.prestashop.com/1.7/webservice/resources/content_management_system/)
* [Countries](https://devdocs.prestashop.com/1.7/webservice/resources/countries/)
* [Currencies](https://devdocs.prestashop.com/1.7/webservice/resources/currencies/)
* [Deliveries](https://devdocs.prestashop.com/1.7/webservice/resources/deliveries/)
* [Employees](https://devdocs.prestashop.com/1.7/webservice/resources/employees/)
* [Guests](https://devdocs.prestashop.com/1.7/webservice/resources/guests/)
* [Image Types](https://devdocs.prestashop.com/1.7/webservice/resources/image_types/)
* [Languages](https://devdocs.prestashop.com/1.7/webservice/resources/languages/)
* [Order Details](https://devdocs.prestashop.com/1.7/webservice/resources/order_details/)
* [Order States](https://devdocs.prestashop.com/1.7/webservice/resources/order_states/)
* [Price Ranges](https://devdocs.prestashop.com/1.7/webservice/resources/price_ranges/)
* [Product Customization Fields](https://devdocs.prestashop.com/1.7/webservice/resources/product_customization_fields/)
* [Product Feature Values](https://devdocs.prestashop.com/1.7/webservice/resources/product_feature_values/)
* [Product Features](https://devdocs.prestashop.com/1.7/webservice/resources/product_features/)
* [Product Option Values](https://devdocs.prestashop.com/1.7/webservice/resources/product_option_values/)
* [Product Suppliers](https://devdocs.prestashop.com/1.7/webservice/resources/product_suppliers/)
* [ShopGroups](https://devdocs.prestashop.com/1.7/webservice/resources/shop_groups/)
* [ShopUrls](https://devdocs.prestashop.com/1.7/webservice/resources/shop_urls/)
* [Shops](https://devdocs.prestashop.com/1.7/webservice/resources/shops/)
* [Specific Price Rules](https://devdocs.prestashop.com/1.7/webservice/resources/specific_price_rules/)
* [Specific Prices](https://devdocs.prestashop.com/1.7/webservice/resources/specific_prices/)
* [States](https://devdocs.prestashop.com/1.7/webservice/resources/states/)
* [Stock Availables](https://devdocs.prestashop.com/1.7/webservice/resources/stock_availables/)
* [Tags](https://devdocs.prestashop.com/1.7/webservice/resources/tags/)
* [Tax Rules](https://devdocs.prestashop.com/1.7/webservice/resources/tax_rules/)
* [Taxes](https://devdocs.prestashop.com/1.7/webservice/resources/taxes/)
* [Translated Configurations](https://devdocs.prestashop.com/1.7/webservice/resources/translated_configurations/)
* [Weight Ranges](https://devdocs.prestashop.com/1.7/webservice/resources/weight_ranges/)
* [Zones](https://devdocs.prestashop.com/1.7/webservice/resources/zones/)

This source outputs the following incremental streams:
* [Addresses](https://devdocs.prestashop.com/1.7/webservice/resources/addresses/)
* [Cart Rules](https://devdocs.prestashop.com/1.7/webservice/resources/cart_rules/)
* [Carts](https://devdocs.prestashop.com/1.7/webservice/resources/carts/)
* [Categories](https://devdocs.prestashop.com/1.7/webservice/resources/categories/)
* [Configurations](https://devdocs.prestashop.com/1.7/webservice/resources/configurations/)
* [Customer Messages](https://devdocs.prestashop.com/1.7/webservice/resources/customer_messages/)
* [Customer Threads](https://devdocs.prestashop.com/1.7/webservice/resources/customer_threads/)
* [Customers](https://devdocs.prestashop.com/1.7/webservice/resources/customers/)
* [Groups](https://devdocs.prestashop.com/1.7/webservice/resources/groups/)
* [Manufacturers](https://devdocs.prestashop.com/1.7/webservice/resources/manufacturers/)
* [Messages](https://devdocs.prestashop.com/1.7/webservice/resources/messages/)
* [Order Carriers](https://devdocs.prestashop.com/1.7/webservice/resources/order_carriers/)
* [Order Histories](https://devdocs.prestashop.com/1.7/webservice/resources/order_histories/)
* [Order Invoices](https://devdocs.prestashop.com/1.7/webservice/resources/order_invoices/)
* [Order Payments](https://devdocs.prestashop.com/1.7/webservice/resources/order_payments/)
* [Order Slip](https://devdocs.prestashop.com/1.7/webservice/resources/order_slip/)
* [Orders](https://devdocs.prestashop.com/1.7/webservice/resources/orders/)
* [Products](https://devdocs.prestashop.com/1.7/webservice/resources/products/)
* [Stock Movement Reasons](https://devdocs.prestashop.com/1.7/webservice/resources/stock_movement_reasons/)
* [Stock Movements](https://devdocs.prestashop.com/1.7/webservice/resources/stock_movements/)
* [Stores](https://devdocs.prestashop.com/1.7/webservice/resources/stores/)
* [Suppliers](https://devdocs.prestashop.com/1.7/webservice/resources/suppliers/)
* [Tax Rule Groups](https://devdocs.prestashop.com/1.7/webservice/resources/tax_rule_groups/)