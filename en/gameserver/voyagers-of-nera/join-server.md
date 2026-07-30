---
description: Join a Voyagers of Nera server
---

# How to Join Your Voyagers of Nera Server

There are three ways to reach your Voyagers of Nera server: through the in-game server browser, through a direct connection using IP address and port, or through your server's invite code.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **Game Port** of your server. You can find both in the **dashboard**. Voyagers of Nera connects through the Game Port – do not add or subtract anything.
::::

## Via the server browser

1. <b>Start Voyagers of Nera</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the server list</b><br>
   Open the multiplayer menu in the main menu and click on **Browse Dedicated Servers**.

3. <b>Search for your server</b><br>
   Enter the name of your server in the filter at the top so you do not have to search the entire list.

4. <b>Select the server</b><br>
   Click your server in the list.

5. <b>Enter the password</b><br>
   If a password is set for your server, enter it in the **Server Password** text field.

6. <b>Join</b><br>
   Click on **Join Game** to load the world.

:::: warning Caution
The public server list is still limited during Early Access – not every running server is necessarily shown. If you cannot find your server there, use the direct connection or the invite code.
::::

## Via direct connection

The direct connection is the most reliable way to reach your server.

1. <b>Open the server list</b><br>
   Open the multiplayer menu in the main menu and click on **Browse Dedicated Servers**.

2. <b>Choose Direct Connect</b><br>
   Select the **Direct Connect** option there.

3. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   :::: tip Example
   ```
   123.45.67.89:28115
   ```

   The numbers in this example are placeholders. You can find your actual IP address and Game Port in the **dashboard**.
   ::::

4. <b>Enter the password</b><br>
   If a password is set for your server, also enter it in the **Server Password** field.

5. <b>Connect</b><br>
   Confirm your input to join the server.

## Via the invite code

Your server generates its own invite code on the first start. It lets other players join without knowing the IP address and port.

:::: warning Caution
The invite code does not work if a password is set for your server. This is a known issue of the game. If you want to use the invite code, leave the server password empty – with a password set, use the direct connection instead.
::::

1. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md). Alternatively you can use the file manager in the dashboard.

2. <b>Open the code file</b><br>
   Open the following file:

   ```
   /BoatGame/Saved/DedicatedServerMagicJoinCode.txt
   ```

   :::: info Note
   If the file does not exist yet, start your server once. It is created automatically on startup.
   ::::

3. <b>Copy the code</b><br>
   Copy the code stored in the file.

4. <b>Enter the code in the game</b><br>
   Start Voyagers of Nera, select the **Invite Code** entry in the main menu, paste the code and confirm.

## Which ports does Voyagers of Nera use?

:::: info Note
A Voyagers of Nera server uses the **Game Port** and additionally the port directly following it (Game Port +1) over **UDP**. The second port is not entered in the game, but it has to be available on the server as well.

You can see which Game Port applies to your server in the **dashboard**. If the following port is not listed there as an allocation, our support can add it for you.
::::

:::: info No separate Query Port
Voyagers of Nera does not use a dedicated Query Port. Sessions are advertised through **Epic Online Services (EOS)** – that is why your server appears in the server browser without you having to configure a Query Port.
::::
