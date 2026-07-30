---
description: Join a HumanitZ server
---

# How to Join Your HumanitZ Server

In HumanitZ you always connect through the **Game Port** of your server. You can either search for your server in the in-game server browser or connect directly via the IP address.

## Find connection details

:::: danger Important
You can find the IP address and the ports of your server in the **dashboard**. To connect you use the **Game Port** – not the Query Port. The Query Port is only used to query the server and does not work in the game.
::::

## Connect directly via IP

The direct connection is the most reliable way onto your server.

1. <b>Start HumanitZ</b><br>
   Launch HumanitZ and wait for the main menu to load.

2. <b>Open Multiplayer</b><br>
   Select **Play** in the main menu and then **Multiplayer**.

3. <b>Choose a character</b><br>
   Select an existing character or create a new one. When creating one you choose a **profession** and an **affliction**.

4. <b>Open the server search</b><br>
   Confirm your selection with **Find Server**. You end up in the server overview.

5. <b>Enter IP address and port</b><br>
   In the bottom right, enter the IP address and the Game Port of your server into the direct connection fields.

   :::: tip Example
   ```
   IP:   123.45.67.89
   Port: <Game Port from the dashboard>
   ```
   ::::

6. <b>Enter the password</b><br>
   If a password is set for your server, enter it in the field provided. Otherwise leave the field empty.

7. <b>Connect</b><br>
   Click on **IP Connect**. The server loads and you spawn into the world.

## Via the server browser

Alternatively you can look for your server in the list:

1. <b>Open the server list</b><br>
   Open **Play → Multiplayer → Find Server** as described above.

2. <b>Search for your server</b><br>
   Search the list for the name of your server.

3. <b>Join</b><br>
   Select your server and confirm. On a password protected server you are asked for the password.

## Server is not listed

If your server does not show up in the list, the direct connection via **IP Connect** helps in most cases. In addition there is a setting in the configuration file `GameServerSettings.ini` that decides whether your server is found publicly:

:::: warning Do not change the SearchID
The following value is located in the `[Host Settings]` section:

```ini
SearchID="HumanitZ_Dedicated"
```

This value has to stay unchanged. If you enter anything else here, your server does **not** appear in the default server list – it can then only be found if players search for exactly that SearchID.
::::

:::: tip No ping in the server browser
The ping of your server is only shown in the server list when RCON is enabled. To do that, set the following in the `[Host Settings]` section:

```ini
RCONEnabled=true
```

How to set up RCON completely is described in [Kick & Ban Players](kick-ban-players.md).
::::

## Which ports does HumanitZ use?

:::: info Note
A HumanitZ server uses three ports. You can see the values that apply to your server in the **dashboard**:

| Port | Protocol | Purpose |
|------|----------|---------|
| Game Port | UDP | Game traffic – players connect through it |
| Query Port | UDP | Server query for the server list |
| RCON port | TCP | Remote control of the server, e.g. for kicking and banning |
::::

:::: tip Tip
To get admin rights on your server, follow the guide [Add Admin](add-admin.md).
::::
