# BigCommerce

此页面包含BigCommerce的设置指南和参考信息。

## 功能概览

| 功能 | 是否支持 |
| --- | --- |
| 完全刷新复制 | 支持 |
| 增量复制 - 附加 | 支持 |
| 命名空间 | 不支持 |

## 前提条件

* BigCommerce[高风险用户权限](https://support.bigcommerce.com/s/article/User-Permissions?language=en_US#highrisk)（high-risk user permission）

## 设置指南

### 第1步：获取BigCommerce访问令牌

1. 导航至您的BigCommerce店铺控制面板。在左侧菜单中，单击**设置（Settings）**。在右侧打开的页面中，向下滚动找到**店铺级API帐户（Store-level API accounts）**。
![BigCommerce API帐户](/assets/images/bigcommerce-settings.jpg "BigCommerce API帐户")

2. 点击**创建API帐户（Create an API account）**。
![BigCommerce创建API帐户](/assets/images/bigcommerce-create-api-account.jpg "BigCommerce创建API帐户")

3. 选择您想要允许访问的资源。Daspire仅需要读取级别的访问权限。
![BigCommerce API范围](/assets/images/bigcommerce-api-scope.jpg "BigCommerce API范围")

4. 完成选择后，点击**保存（Save）**。您将获得**客户端ID（Client ID）**、**客户端密钥（Client secret）**和**访问令牌（Access token）**。复制它们，稍后您将使用它们来设置数据源。
![BigCommerce API凭据](/assets/images/bigcommerce-creds.jpg "BigCommerce API凭据")

5. 您已准备好在Daspire中设置BigCommerce！

### 第2步：在Daspire中设置BigCommerce数据源

1. 从数据源列表中选择**BigCommerce**。

2. **开始日期**用于生成从指定开始日期开始的数据。应采用`年年年年-月月-日日`格式。

3. **店铺Hash（Store Hash）**是店铺的hash。对于https://api.bigcommerce.com/stores/HASH_CODE/v3/ ，店铺的hash是`HASH_CODE`。

4. 输入您在第1步中获得的**访问令牌**。

5. 点击**保存并测试**。

## 支持的数据流

此数据源能够同步以下数据流：

* [顾客（Customers）](https://developer.bigcommerce.com/api-reference/store-management/customers-v3/customers/customersget)
* [订单（Orders）](https://developer.bigcommerce.com/api-reference/store-management/orders/orders/getallorders)
* [交易记录（Transactions）](https://developer.bigcommerce.com/docs/rest-management/transactions#get-transactions)
* [页面（Pages）](https://developer.bigcommerce.com/api-reference/store-management/store-content/pages/getallpages)
* [产品（Products）](https://developer.bigcommerce.com/api-reference/store-management/catalog/products/getproducts)
* [渠道（Channels）](https://developer.bigcommerce.com/api-reference/d2298071793d6-get-all-channels)
* [店铺（Store）](https://developer.bigcommerce.com/docs/rest-management/store-information#get-store-information)
* [订单产品（OrderProducts）](https://developer.bigcommerce.com/api-reference/3b4dfef625708-list-order-products)
* [品牌（Brands）](https://developer.bigcommerce.com/api-reference/c2610608c20c8-get-all-brands)
* [类别（Categories）](https://developer.bigcommerce.com/api-reference/9cc3a53863922-get-all-categories)

## 数据类型映射

| 集成类型 | Daspire类型 |
| --- | --- |
| `string` | `string` |
| `number` | `number` |
| `array` | `array` |
| `object` | `object` |

## 性能考虑及故障排除

1. BigCommerce有一些[速率限制限制](https://developer.bigcommerce.com/api-docs/getting-started/best-practices)。

2. 单次可同步的最大表数为6千张。如果由于达到最大表数而无法获取数据架构，我们建议您调整数据源设置。
