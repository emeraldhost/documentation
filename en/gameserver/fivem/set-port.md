---
description: Set the game server port correctly on a FiveM server
---

# How to Set the Game Server Port Correctly on Your FiveM Server

If you did not use the `server.cfg` from the main directory `/home/container` during the **txAdmin setup**, the default port `30120` will be used. Since your game server uses a different port, the following error occurs:

```
Connection refused - CURL error code 7
```

You need to manually enter the correct port of your game server in the `server.cfg`.

## Where is the server.cfg located?

Depending on how you set up txAdmin, the `server.cfg` can be located in different places:

| Setup | Path |
|-------|------|
| Default (recommended) | `/home/container/server.cfg` |
| txAdmin Recipe / Deployer | `/home/container/txData/<ProfileName>/server.cfg` |
| Manual import | The path you specified during import |

:::: tip Tip
You can also edit the `server.cfg` directly via the **CFG Editor** in the txAdmin web interface.
::::

## Find the correct port

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Note the port</b><br>
   Note the **Default Port** of your game server from the server information.

## Set the port in server.cfg

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open server.cfg</b><br>
   Open the `server.cfg` you used during the txAdmin setup (see table above).

4. <b>Adjust endpoints</b><br>
   Find the following lines and replace `30120` with your actual port:

   ```
   endpoint_add_tcp "0.0.0.0:YOUR_PORT"
   endpoint_add_udp "0.0.0.0:YOUR_PORT"
   ```

   :::: warning Warning
   The `endpoint_add_udp` must be placed **before** the `endpoint_add_tcp`, otherwise the port change will not work correctly.
   ::::

5. <b>Start the server</b><br>
   Save the file and start your server.

:::: tip Tip
We recommend always using the `server.cfg` from the main directory `/home/container` during the txAdmin setup. It is already pre-configured with the correct port of your game server.
::::
