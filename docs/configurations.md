# Configurations

## Edit data pipeline configuration

1. On the Daspire dashboard, click a **Connection** in the list you want to change.

2. Click **Replication**.

The **Transfer** and **Streams** settings include the following parameters:

| Parameter | Description |
| --- | --- |
| Replication Frequency | How often the data syncs |
| Destination Namespace | Where the replicated data is written |
| Destination Stream Prefix | Helps you identify streams from different connectors |

  > **NOTE:** These parameters apply to all streams in the connection.

3. In the **Activate the streams you want to sync** section, you can make changes to any stream you choose.

## To search for a stream

1. Click the **Search stream name** search box.

2. Type the name of the stream you want to find.

3. Streams matching your search are displayed in the list.

## To change individual stream configuration

1. In the **Sync** column of the stream, toggle the sync on or off.

2. Click the dropdown arrow in the **Sync mode** column and select the sync mode you want to apply.

  > **NOTE:** Depending on the sync mode you select, you may need to choose a cursor or primary key.

3. If there is a dropdown arrow in the **Cursor** or **Primary key** fields, click the dropdown arrow and choose the cursor or primary key.

## To change multiple stream configurations

1. Click the first checkbox in the table header to select all streams in the connection.

2. Deselect the checkboxes of streams you do not want to apply these changes to.

3. In the highlighted header of the table, toggle the sync on or off.

4. Click the dropdown arrow in the **Sync mode** column and select the sync mode you want to apply to these streams.

5. If there is a dropdown arrow in the **Cursor** or **Primary key** fields of the highlighted table header, click the dropdown arrow and choose the cursor or primary key.

6. Click **Apply** to apply these changes to the streams you selected, or click **Cancel** to discard the changes.

## To save the changes

1. Click **Save changes** , or click **Cancel** to discard the changes.

2. The **Stream configuration changed** dialog displays. This gives you the option to reset streams when you save the changes.

  > **CAUTION:** Daspire recommends that you reset the streams. A reset will delete data in the destination of the affected streams and then re-sync that data. Skipping the reset is discouraged and might lead to unexpected behavior.

3. Click **Save connection** , or click **Cancel** to close the dialog.

## To refresh the source schema

1. Click **Refresh source schema** to fetch the schema of your data source.

2. If there are changes to the schema, the **Refreshed source schema** dialog displays them.