# Postgres
This page contains the setup guide and reference information for Postgres.

## Features

| Feature | Supported? |
| --- | --- |
| Full Refresh Sync | Yes |
| Incremental - Append Sync | Yes |
| Incremental - Deduped History | Yes |
| Namespaces | Yes |

## Prerequisites

To use the Postgres destination, you'll need:

* A Postgres server version 9.5 or above

* **Host** - The host name of the server.

* **Port** - The port number the server is listening on. Defaults to the PostgreSQL™ standard port number (5432).

* **Username**

* **Password**

* **Default Schema Name** - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection.

* **Database** - The database name. The default is to connect to a database with the same name as the user name.

* **JDBC URL Params** (optional)

[Refer to this guide for more details](https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database)

**Configure Network Access**

Make sure your Postgres database can be accessed by Daspire. If your database is within a VPC, you may need to allow access from the IP you're using to expose Daspire.

## Setup guide

### Step 1: Set up Postgres

#### Permissions

You need a Postgres user with the following permissions:

* can create tables and write rows.

* can create schemas e.g:

You can create such a user by running:

```
CREATE USER daspire_user WITH PASSWORD '<password>';
GRANT CREATE, TEMPORARY ON DATABASE <database> TO daspire_user; 
```

You can also use a pre-existing user but we highly recommend creating a dedicated user for Daspire.

#### Target Database

You will need to choose an existing database or create a new database that will be used to store synced data from Daspire.

### Step 2: Set up the Postgres destination in Daspire

1. Log into your Daspire account.

2. In the left navigation bar, click **Destinations**. In the top-right corner, click **new destination**.

3. On the Set up the destination page, enter the name for the Postgres connector and select **Postgres** from the Destination type dropdown.

4. Enter a name for your source.

5. For the **Host** , **Port** , and **DB Name** , enter the hostname, port number, and name for your Postgres database.

6. List the **Default Schemas**.

  > **NOTE:** The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be used at one time. No schemas set explicitly - will sync all of existing.

7. For **User** and **Password** , enter the username and password you created in [Step 1](https://docs.airbyte.com/integrations/destinations/postgres#step-1-optional-create-a-dedicated-read-only-user).

8. For connection using SSL, select the following:

  * **disable** to disable encrypted communication between Daspire and the source

  * **allow** to enable encrypted communication only when required by the source

  * **prefer** to allow unencrypted communication only when the source doesn't support encryption

  * **require** to always require encryption. Note: The connection will fail if the source doesn't support encryption.

  * **verify-ca** to always require encryption and verify that the source has a valid SSL certificate

  * **verify-full** to always require encryption and verify the identity of the source

9. For SSH Tunnel Method, select:

  * **No Tunnel** for a direct connection to the database

  * **SSH Key Authentication** to use an RSA Private as your secret for establishing the SSH tunnel

  * **Password Authentication** to use a password as your secret for establishing the SSH tunnel

  > **NOTE:** Since Daspire requires encrypted communication, select **SSH Key Authentication** or **Password Authentication** if you select **disable** , **allow** , or **prefer** as the **SSL Mode** ; otherwise, the connection will fail.

10. Click **Set up destination**.

## Naming Conventions

From [Postgres SQL Identifiers syntax](https://www.postgresql.org/docs/9.0/sql-syntax-lexical.html#SQL-SYNTAX-IDENTIFIERS):

* SQL identifiers and key words must begin with a letter (a-z, but also letters with diacritical marks and non-Latin letters) or an underscore (\_).

* Subsequent characters in an identifier or key word can be letters, underscores, digits (0-9), or dollar signs ($).

* Note that dollar signs are not allowed in identifiers according to the SQL standard, so their use might render applications less portable. The SQL standard will not define a key word that contains digits or starts or ends with an underscore, so identifiers of this form are safe against possible conflict with future extensions of the standard.

* The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be written in commands, but they will be truncated. By default, NAMEDATALEN is 64 so the maximum identifier length is 63 bytes

* Quoted identifiers can contain any character, except the character with code zero. (To include a double quote, write two double quotes.) This allows constructing table or column names that would otherwise not be possible, such as ones containing spaces or ampersands. The length limitation still applies.

* Quoting an identifier also makes it case-sensitive, whereas unquoted names are always folded to lower case.

* In order to make your applications portable and less error-prone, use consistent quoting with each name (either always quote it or never quote it).

Note, that Daspire Postgres destination will create tables and schemes using the Unquoted identifiers when possible or fallback to Quoted Identifiers if the names contain special characters.

## Output Schema

Each stream will be mapped to a separate table in Postgres. Each table will contain 3 columns:

* `_daspire_ab_id`: a uuid assigned by Daspire to each event that is processed. The column type in Postgres is VARCHAR.

* `_daspire_emitted_at`: a timestamp representing when the event was pulled from the data source. The column type in Postgres is TIMESTAMP WITH TIME ZONE.

* `_daspire_data`: a json blob representing with the event data. The column type in Postgres is JSONB.