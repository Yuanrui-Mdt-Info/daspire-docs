# 亚马逊卖家合作伙伴（Amazon Seller Partner）

此页面包含亚马逊卖家合作伙伴 (Amazon Seller Partner / Amazon SP) 的设置指南和参考信息。

## 功能概览

| 功能 | 是否支持 |
| --- | --- |
| 完全刷新复制 | 支持 |
| 增量复制 | 支持 |

## 前提条件

* 亚马逊卖家合作伙伴账号
* 亚马逊店铺名称
* 亚马逊店铺区域

## 设置指南

1. 从数据源列表中选择**亚马逊卖家合作伙伴（Amazon Seller Partner）**。

2. 填写**数据源名称**。

3. 填写亚马逊**店铺名称**。

4. 选择**区域**。

  > 亚马逊店铺支持地区：
  >
  > * 北美：美国（US），加拿大（CA），墨西哥（MX）
  > * 欧洲：比利时（BE），德国（DE），西班牙（ES），法国（FR），意大利（IT），英国（UK），荷兰（NL），瑞典（SE），波兰（PL），土耳其（TR）
  > * 中东：阿联酋（AE），沙特阿拉伯（SA），埃及（EG）
  > * 亚太地区：日本（JP），印度（IN），澳大利亚（AU），新加坡（SG）

5. 点击**验证您的亚马逊广告账户**。

6. **开始日期和时间** - 数据同步将从指定的日期和时间开始，不应超过过去60天，格式为`年年年年-月月-日日T时时:分分:秒秒Z`。此日期之前的任何数据都不会被复制。

7. **结束日期和时间** - 数据同步将在指定的日期和时间结束，格式为`年年年年-月月-日日T时时:分分:秒秒Z`。此日期之后的任何数据都不会被复制。

8. **期间天数** - 当支持分流增量同步的报告没有更新状态时，将用于初始完全刷新同步的数据流分流。

9. **报告等待时限（以秒为单位）** - 有时报告最多可能需要30分钟才能生成。这个设置将限制等待成功报告的时间。

10. **报告选项** - 传递给报告的附加信息。因报告类型而异，必须是有效的JSON字符串。（比如{"GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT": {"reportPeriod": "WEEK"}}, {"GET_SOME_REPORT": {"custom": "true"}}）

11. 点击**保存并测试**。

## 支持的数据流

此数据源能够同步以下数据流：

* [FBA库存报告（FBA Inventory Reports）](https://sellercentral.amazon.com/gp/help/200740930)
* [FBA订单报告（FBA Orders Reports）](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110)
* [FBA发货报告（FBA Shipments Reports）](https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100)
* [FBA换货报告（FBA Replacements Report）](https://sellercentral.amazon.com/help/hub/reference/200453300)
* [FBA仓储费报告（FBA Storage Fees Report）](https://sellercentral.amazon.com/help/hub/reference/G202086720)
* [补充库存报告（Restock Inventory Reports）](https://sellercentral.amazon.com/help/hub/reference/202105670)
* [文件打开列表报告（Flat File Open Listings Reports）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [文件订单报告（Flat File Orders Reports）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [文件订单报告最近更新（Flat File Orders Reports By Last Update）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)（增量）
* [FBA发货报告（Amazon-Fulfilled Shipments Report）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [商家列表报告（Merchant Listings Reports）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [供应商直接履行配送（Vendor Direct Fulfillment Shipping）](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference)
* [供应商库存健康报告（Vendor Inventory Health Reports）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)
* [订单（Orders）](https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference)（增量）
* [卖家反馈报告（Seller Feedback Report）](https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference)（增量）
* [品牌分析替代购买报告（Brand Analytics Alternate Purchase Report）](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [品牌分析项目比较报告（Brand Analytics Item Comparison Report）](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [品牌分析市场购物车报告（Brand Analytics Market Basket Report）](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [品牌分析重复购买报告（Brand Analytics Repeat Purchase Report）](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [品牌分析搜索词报告（Brand Analytics Search Terms Report）](https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports)
* [浏览记录报告（Browse tree report）](https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report)
* [财务事件组（Financial Event Groups）](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups)
* [财务事件（Financial Events）](https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents)

## 数据类型映射

| 集成类型 | Daspire类型 |
| --- | --- |
| `string` | `string` |
| `int`, `float`, `number` | `number` |
| `date` | `date` |
| `datetime` | `datetime` |
| `array` | `array` |
| `object` | `object` |

## 性能考虑及故障排除

1. 请确保在已配置报告的报告选项设置中配置[必需参数](https://developer-docs.amazon.com/sp-api/docs/report-type-values)。

2. 对于`GET_AMAZON_FULFILLED_SHIPMENTS_DATA_GENERAL`和`GET_FLAT_FILE_RETURNS_DATA_BY_RETURN_DATE`数据流，期间天数（`period_in_days`）的最大值为30和60天。因此，对于任何超过限制的值，期间天数将自动减少到数据流的限制。

3. 您可以在[此处](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api)找到有关速率限制的信息。

4. 单次可同步的最大表数为6千张。如果由于达到最大表数而无法获取数据架构，我们建议您调整数据源设置。
