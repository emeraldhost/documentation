---
description: Join an Arma 3 server
---

# How to Join Your Arma 3 Server

Freshly started servers often show up in the public server browser only after a delay. The fastest and most reliable way onto your server is therefore a direct connection using IP address and port – either in the Arma 3 launcher or inside the game.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard** of your server. Enter the **Game Port** – not the Query Port.
::::

If a password is set for your server, you need that password as well.

## Connect via the Arma 3 launcher

1. <b>Start the launcher</b><br>
   Start Arma 3 via Steam. The Arma 3 launcher opens.

2. <b>Open the server list</b><br>
   Click on **Servers** on the left.

3. <b>Open Direct Connect</b><br>
   Click on **Direct Connect** at the bottom.

4. <b>Enter the server address</b><br>
   Enter the IP address of your server and the Game Port from the dashboard:

   ```
   123.45.67.89
   ```

   :::: info Note
   The launcher has separate fields for the IP address and the port. The port field is prefilled – replace the value with the Game Port from your dashboard.
   ::::

5. <b>Enter the password</b><br>
   If your server is password protected, enter the server password in the corresponding field.

6. <b>Connect</b><br>
   Confirm your input. The launcher starts the game and connects you directly to your server.

## Via the server browser in the game

1. <b>Start Arma 3</b><br>
   Start the game and wait until the main menu has loaded.

2. <b>Open Multiplayer</b><br>
   Select **Multiplayer** in the main menu and then **Server Browser**.

3. <b>Choose Direct Connect</b><br>
   Click on **Direct Connect**.

4. <b>Enter the server address</b><br>
   Enter the IP address, the Game Port and – if set – the server password.

5. <b>Join the server</b><br>
   After confirming, your server appears in the **LAN** tab. Select it there and click **Join**.

   :::: info Note
   It is normal for the server to show up in the **LAN** tab. Arma 3 puts manually added servers there, no matter whether they are hosted on the internet.
   ::::

## Mods have to match

:::: warning Caution
If your server runs mods loaded through `-mod=`, you have to enable the very same mods in the launcher before joining. If a mod is missing or a different version is active, you get rejected on connect. See [Add Mods](add-mods.md) for how to set mods up.
::::

Mods your server loads through `-serverMod=` run server-side only. As a player you do **not** need to install those.

## Which ports does Arma 3 use?

:::: info Note
An Arma 3 server occupies several consecutive UDP ports. Starting from the Game Port they are used as follows:

| Port | Purpose |
|------|---------|
| Game Port | Game data and Voice over Net (VON) – players connect through this one |
| Game Port + 1 | Query Port – Steam and the server browser query the server through this one |
| Game Port + 2 | Steam port |
| Game Port + 3 | Reserved VON port – currently not in use |
| Game Port + 4 | BattlEye – RCON runs through this one as well |

The concrete values for your server are shown in the **dashboard**. All of these ports are reserved for your server.
::::

:::: warning Server not found
If your server does not show up in the public server browser, use the direct connection. Through **Direct Connect** you reach it regardless of whether it is listed publicly.
::::
