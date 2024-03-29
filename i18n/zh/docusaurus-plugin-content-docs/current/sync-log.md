# 同步日志

## 查看同步日志摘要

同步日志摘要显示同步是成功、失败、取消还是当前正在运行。

查看同步日志摘要：

1. 在Daspire侧边栏导航中，点击**控制面板**。
2. 显示链接页面。
3. 单击列表中的链接以查看其同步历史记录。
4. 在同步历史记录下，显示该链接的同步列表。
5. 显示同步状态（成功、取消、失败或正在运行）以及同步日志的摘要。
6. 有关同步的更多信息，请单击同步日志下拉列表。

## 同步日志摘要

### 成功

成功同步的日志摘要显示以下数据。

| 日志 | 说明 |
| --- | --- |
| x GB（也以 KB、MB为单位）| 同步期间移动的数据量。如果启用基本正常化，则数据量不会更改，因为正常化发生在目的地中。 |
| x条发出的记录 | 同步期间从数据源读取的记录数。 |
| x条提交记录 | 目的地确认收到的记录数。 |
| x小时 x分钟 x秒 | 同步和基本正常化（如果启用）完成的总时间（小时、分钟、秒）。 |
| 同步或重置 | 执行的操作（同步或重置）。 |

**注意：**在成功的同步中，发出的记录数和提交的记录数应该相同。

### 取消

取消同步的日志摘要可能会显示以下数据。

| 日志 | 说明 |
| --- | --- |
| NaN字节 | 由于同步被取消，日志不显示在取消之前移动了多少数据。 |
| 没有记录 | 由于同步被取消，日志不显示发出或提交的记录。 |
| x小时 x分钟 x秒 | 从同步开始到取消同步的总时间（小时、分钟、秒）。 |
| 同步或重置 | 执行的操作（同步或重置）。 |
| 失败原因 | 同步取消的原因。 |

**注意：** Daspire 将尝试同步您的数据三次。 第三次失败后，它将停止尝试同步。

### 失败

失败同步的日志摘要可能会显示以下数据。

| 日志 | 说明 |
| --- | --- |
| NaN字节 | 由于同步失败，数据量为零。 |
| 没有记录 | 由于同步失败，因此没有发出或提交的记录。 |
| x小时 x分钟 x秒 | 从同步开始到同步失败的总时间（小时、分钟、秒）。 |
| 同步或重置 | 执行的操作（同步或重置）。 |
| 失败原因 | 同步失败的原因。 |

### 正在运行

当同步正在运行时，同步日志摘要显示**正在运行**。