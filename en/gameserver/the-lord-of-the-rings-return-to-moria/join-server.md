---
description: Join a The Lord of the Rings Return to Moria server
---

# How to Join Your The Lord of the Rings Return to Moria Server

Return to Moria has **no public server browser**. You can reach your server in two ways: with the **invite code** the server prints on startup, or through a **direct connection** using the IP address and port.

## Find connection details

:::: danger Important
You can find the IP address and the **Game Port** of your server in the **dashboard**. Return to Moria only uses the Game Port for connecting – this game does not have a separate **Query Port**.
::::

## Join with the invite code

The invite code is the easiest way, because your friends need neither the IP address nor the port.

1. <b>Start the server</b><br>
   Start your server via the dashboard and wait until it has fully booted.

2. <b>Read the invite code</b><br>
   Open the **console** in the dashboard. As soon as the server session begins, the server prints the invite code there.

   :::: tip Tip
   The code is also written to your server's log file, which you can download via [SFTP](../establish-sftp-connection.md):

   ```
   /Moria/Saved/Logs/Moria.log
   ```
   ::::

3. <b>Start the game</b><br>
   Launch Return to Moria and wait for the main menu to load.

4. <b>Open the join menu</b><br>
   Select the option for joining a world (**Join World** or **Join Other World**).

5. <b>Enter the code</b><br>
   Type the invite code into the search field and confirm. The server is found and you can join.

## Connect directly via IP

The direct connection works independently of the invite code and is the most reliable way onto your server.

1. <b>Start the game</b><br>
   Launch Return to Moria on your PC or console.

2. <b>Open the join menu</b><br>
   Select **Join Other World** in the main menu.

3. <b>Open the advanced options</b><br>
   Open the **Advanced Join Options** there and switch to the **Direct Join** section.

4. <b>Enter the server address</b><br>
   Enter the IP address (or the domain) of your server and the **Game Port** from the dashboard into the corresponding fields. If a password is set for your server, enter it in the same window.

5. <b>Connect</b><br>
   Confirm your input with **Join Server**.

## Password protected server

If a password is set for your server, your friends need it both when joining with the invite code and when connecting directly.

:::: warning Caution
The password is case-sensitive. Pass it on to your friends exactly as it is stored in your server settings.
::::

:::: info Note
The `OptionalPassword` entry in `MoriaServerConfig.ini` is applied automatically from your server settings on every start. Changing it directly in the file therefore does not persist.
::::

## Crossplay and player count

:::: info Note
Players on **Steam**, the **Epic Games Store**, **PlayStation 5** and **Xbox Series X|S** can all join the same server. No special access is required for consoles. A maximum of **eight players** can play on a server at the same time.
::::

## Reset the invite code

If you want a new invite code – for example because the old one ended up in the wrong hands – delete the file the code is generated from.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Delete the seed file</b><br>
   Delete the following file:

   ```
   /Moria/Saved/Config/InviteSeed.cfg
   ```

4. <b>Start the server</b><br>
   Start your server. On the next session start a new invite code is generated and printed to the console.

:::: warning Caution
The old invite code stops working afterwards. Share the new code with everyone who should still be able to join.
::::

## No server browser

:::: warning Caution
Return to Moria has **no public server list**. Your server never shows up anywhere automatically – without the invite code or a direct connection nobody can join.
::::

:::: info Note
The values `ListenPort`, `AdvertiseAddress` and `AdvertisePort` in `MoriaServerConfig.ini` are set automatically for your server on every start. Do not change them manually – your changes are overwritten and your server may become unreachable.
::::
