# Cart.com

This page contains the setup guide and reference information for Cart.com.

This source can sync data for the [Cart.com API](https://developers.cart.com/docs/rest-api/docs/README.md).

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| Incremental Sync | Yes |
| Namespaces | No |

## Requirements

* AmeriCommerce account
* Admin access
* Access Token: please follow [these steps](https://developers.cart.com/docs/rest-api/ZG9jOjU4NjM4-cart-com-online-store-api-authentication) to obtain Access Token for your account.

## Output schema

This Source is capable of syncing the following core streams:

* [CustomersCart](https://developers.cart.com/docs/rest-api/restapi.json/paths/~1customers/get)
* [Orders](https://developers.cart.com/docs/rest-api/restapi.json/paths/~1orders/get)
* [OrderPayments](https://developers.cart.com/docs/rest-api/restapi.json/paths/~1order_payments/get)
* [Products](https://developers.cart.com/docs/rest-api/restapi.json/paths/~1products/get)

## Data type mapping

| Integration Type | Daspire Type |
| --- | --- |
| string | string |
| number | number |
| array | array |
| object | object |

## Performance considerations

The Cart.com API has some request limitations. See [here](https://developers.cart.com/docs/rest-api/docs/README.md#rate-limiting).