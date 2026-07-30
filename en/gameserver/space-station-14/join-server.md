---
description: Join a Space Station 14 server
---

# How to Join Your Space Station 14 Server

Space Station 14 is played exclusively through the official **SS14 launcher**. There is no way to join via Steam or an in-game connection window. The launcher offers two options: the server list or a direct connection via **Direct Connect To Server**.

## Find connection details

:::: danger Important
You can find the IP address as well as the **Game Port** and the **Query Port** of your server in the **dashboard** of your server. Always enter the values shown there in the launcher and do not rely on fixed default values.
::::

## Connect directly

A direct connection is the most reliable way onto your server, because it does not depend on whether your server shows up in the public server list.

1. <b>Start the launcher</b><br>
   Start the SS14 launcher and sign in with your SS14 account.

2. <b>Open the direct connection</b><br>
   Click on **Direct Connect To Server**.

3. <b>Enter the server address</b><br>
   Enter the IP address and the Query Port of your server, separated by a colon:

   ```
   <IP address>:<Query Port>
   ```

   :::: info Note
   You do not have to specify a scheme – the launcher automatically adds `ss14://`. If your server runs behind HTTPS, you can prefix `ss14s://` instead. An IPv6 address has to be written in square brackets, for example `[fd11:5ee:beef::1]`.
   ::::

4. <b>Connect</b><br>
   Confirm your input. The launcher automatically downloads the matching client content of your server and starts the game.

5. <b>Save the server</b><br>
   With **Add Favorite** you store the server permanently in the launcher and do not have to type the address again.

## Via the server list

For your server to show up in the public server list (hub), you have to enable that explicitly – by default the listing is **disabled**.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open server_config.toml</b><br>
   Open the file `server_config.toml`. It is located in the main directory of your server, next to the server application `Robust.Server`.

4. <b>Enable the listing</b><br>
   Add the following section:

   ```toml
   [hub]
   advertise = true
   ```

   Optionally you can also set `server_url` (a link to your community, e.g. Discord) and `tags`.

5. <b>Start the server</b><br>
   Save the file and start your server.

6. <b>Search for the server</b><br>
   Search for the name of your server in the server list of the launcher.

:::: warning Server does not appear in the list
If the server console shows a message such as `[ERRO] hub: Error status while advertising server: [UnprocessableEntity] "Unable to contact status address"`, the hub could not reach your server. In that case check whether you are using the correct ports from the dashboard and whether your server is running. Until that is sorted out you can always reach your server through the direct connection.
::::

## Which ports does Space Station 14 use?

:::: info Note
A Space Station 14 server uses two ports, which usually share the same number:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | UDP | Transfer of the game data (configuration value `port` in the `[net]` section) |
| Query Port | TCP | Status interface that the launcher and the server list query (configuration value `bind` in the `[status]` section) |

The address you enter in the launcher first contacts the **Query Port**. The launcher derives the UDP game connection from it. You can see which values apply to your server in the **dashboard**.
::::

:::: warning Warning
If the Game Port and the Query Port of your server differ, the launcher cannot determine the game connection on its own. In that case set the game address explicitly in the `server_config.toml`:

```toml
[status]
connectaddress = "udp://<IP address>:<Game Port>"
```
::::
