---
description: Set up Shifting Sands DLC on a Soulmask server
---

# How to Set Up Shifting Sands on Your Soulmask Server

With the **Shifting Sands** DLC you can set up a server cluster that allows players to travel between the base map (Cloud Mist Forest) and the Shifting Sands map.

:::: warning Warning
For a cluster you need **two Soulmask servers** — one for each map. All players must own the **Shifting Sands DLC**.
::::

## Requirements

- Two Soulmask servers with EmeraldHost
- The Shifting Sands DLC for all players

## Configure main server (Cloud Mist Forest)

1. <b>Open dashboard</b><br>
   Open the dashboard of your first server (base map).

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set Server ID</b><br>
   Enter the following in the **[CROSS-MAP] SERVER ID** field:

   ```
   -serverid=1
   ```

4. <b>Set Broadcast Address</b><br>
   Enter the following in the **[CROSS-MAP] BROADCAST ADDRESS** field:

   ```
   -mainserverport=20000
   ```

5. <b>Enable cross-server</b><br>
   Connect via [SFTP](../establish-sftp-connection.md) and edit the file:

   ```
   /WS/Saved/GameplaySettings/GameXishu.json
   ```

   Set the value `KaiQiKuaFu` to `1`.

6. <b>Start the server</b><br>
   Save the settings and start the main server.

## Configure client server (Shifting Sands)

1. <b>Open dashboard</b><br>
   Open the dashboard of your second server (Shifting Sands).

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set Server ID</b><br>
   Enter the following in the **[CROSS-MAP] SERVER ID** field:

   ```
   -serverid=2
   ```

4. <b>Set Broadcast Address</b><br>
   Enter the following in the **[CROSS-MAP] BROADCAST ADDRESS** field:

   ```
   -clientserverconnect=IP:Port
   ```

   Replace `IP:Port` with the IP address of the main server and the **Game Port + 4**.

   :::: tip Example
   If the main server's game port is `8778`:
   ```
   -clientserverconnect=123.45.67.89:8782
   ```
   ::::

5. <b>Change map</b><br>
   Make sure the map is set to **DLC_Level01_Main** (Shifting Sands).

6. <b>Enable cross-server</b><br>
   Also edit the `GameXishu.json` on this server via [SFTP](../establish-sftp-connection.md) and set `KaiQiKuaFu` to `1`.

7. <b>Start the server</b><br>
   Save the settings and start the client server.

## Travel between maps

Players can use a portal terminal at the **mysterious island** in-game to switch between maps.

:::: info Note
Only characters that are not the first created character can transfer between servers.
::::

:::: danger Important
The main server must always be **started first** and **stopped last** to avoid connection errors.
::::
