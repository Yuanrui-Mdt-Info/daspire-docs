# Sync Log

## View the sync log summary

The sync log summary shows if a sync succeeded, failed, cancelled, or is currently running.

To view the sync log summary:

1. On the Daspire sidebar navigation, click **Dashboard**.
2. The Connections page displays.
3. Click a connection in the list to view its sync history.
4. Under Sync History, a list of syncs for that connection is displayed.
5. The sync status is displayed (Succeeded, Cancelled, Failed, or Running) along with the summary of the sync log.
6. For more information about a sync, click the sync log dropdown.

## Sync log summary

### Succeeded

The log summary for a successful sync shows the following data.

| Log | Description |
| --- | --- |
| x GB (also measured in KB, MB) | Amount of data moved during the sync. If basic normalization is on, the amount of data would not change since normalization occurs in the destination. |
| x emitted records | Number of records read from the source during the sync. |
| x committed records | Number of records the destination confirmed it received. |
| xh xm xs | Total time (hours, minutes, seconds) for the sync and basic normalization, if enabled, to complete. |
| Sync or Reset | The action that was performed (either a sync or a reset). |

**NOTE:** In a successful sync, the number of emitted records and committed records should be the same.

### Cancelled

The log summary for a cancelled sync may show the following data.

| Log | Description |
| --- | --- |
| NaN Bytes | Since the sync was cancelled, the log does not show how much data was moved before cancelling. |
| No records | Since the sync was cancelled, the log does not show emitted or committed records. |
| xh xm xs | Total time (hours, minutes, seconds) between the beginning of sync and when it was cancelled. |
| Sync or Reset | The action that was performed (either a sync or a reset). |
| Failure Origin | The cause of the sync cancellation. |

**NOTE:** Daspire will try to sync your data three times. After a third failure, it will stop attempting to sync.

### Failed

The log summary for a failed sync may show the following data.

| Log | Description |
| --- | --- |
| NaN Bytes | Since the sync failed, the amount of data is zero. |
| No records | Since the sync failed, there are no emitted or committed records. |
| xh xm xs | Total time (hours, minutes, seconds) between the beginning of the sync and when it failed. |
| Sync or Reset | The action that was performed (either a sync or a reset). |
| Failure Origin | The cause of the sync failure. |

### Running

The sync log summary displays **Running** when the sync is actively running.