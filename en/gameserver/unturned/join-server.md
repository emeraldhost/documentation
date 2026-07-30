---
description: Join an Unturned server
---

# How to Join Your Unturned Server

Unturned offers two reliable ways onto your server: a **direct connection** using the IP address and port, or the **server code**. Your server only shows up in the public server browser if a Steam Game Server Login Token (GSLT) is configured.

## Find connection details

:::: danger Important
You can find the IP address and the ports of your server in the **dashboard**. In the game you always enter the **Query Port** – not the Game Port. This is the most common reason why joining fails.
::::

## Connect directly via IP

1. <b>Start Unturned</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the connect screen</b><br>
   Select **Play** in the main menu and switch to **Connect**.

3. <b>Enter the server details</b><br>
   Fill in the fields with the values from your dashboard:

   | Field | Value |
   |-------|-------|
   | **Host** | IP address of your server |
   | **Port** | **Query Port** of your server |
   | **Password** | Server password, if one is set |

4. <b>Connect</b><br>
   Click **Connect**. Your character is stored on the server – the next time you join you continue where you left off.

:::: warning Warning
Enter the Query Port in the **Port** field, not the Game Port. In Unturned the Query Port is the port your server is queried on – and therefore the value used for a direct connection.
::::

## Use the server code

Instead of IP and port you can also use the **server code** – a 17-digit number that you simply enter into the **Host** field. No port is required in that case.

1. <b>Read the server code</b><br>
   Start your server and check the **console** in the dashboard. The code is printed there on startup.

2. <b>Enter the code</b><br>
   In the game open **Play → Connect** and enter the code into the **Host** field. Leave the **Port** field empty.

3. <b>Connect</b><br>
   Click **Connect**.

:::: info Note
The server code changes every time your server restarts – unless you have configured a GSLT. You also do not see any server information before joining, because that can only be queried through the IP address. For a permanent link to your server, the direct connection via IP and Query Port is the better choice.
::::

## Appear in the server browser

Servers without a GSLT are considered "anonymous" and are **not** listed in the public internet server list. They remain reachable through a direct connection, but you will not find them by searching in the game.

1. <b>Create a token</b><br>
   Open [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and create a token with **App ID 304930**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Store the token</b><br>
   If there is a field for the login token under **Settings** in the dashboard, enter it there. Otherwise connect via [SFTP](../establish-sftp-connection.md) and add the token as a command in `Commands.dat`:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   ```
   GSLT YOUR_TOKEN
   ```

   :::: info Alternative
   You can also store the token in the file `/Servers/<ServerID>/Config.txt`. Look for the `Login_Token` entry in the `Browser` section and set your token as its value. Keep the notation that the file already uses.
   ::::

4. <b>Start the server</b><br>
   Save the change and start your server. It now appears in the internet server list.

:::: info Where is my server folder?
`<ServerID>` is the name of the folder inside `/Servers/`. It is defined by the startup parameter of your server – connect via SFTP and check which folder is there. Usually there is exactly one.
::::

## Which ports does Unturned use?

:::: info Note
An Unturned server always occupies **two consecutive ports**:

| Port | Purpose |
|------|---------|
| **Query Port** | Server queries and the server list – this is the port you enter in the game |
| **Game Port** | The in-game traffic itself. It is always exactly one port above the Query Port |

Both ports are already open for your server. You can see which values apply to you in the **dashboard**.
::::

:::: warning Server cannot be found
If no connection is established, check the following in order:

- Is your server running? Check the console in the dashboard.
- Did you really enter the **Query Port** and not the Game Port?
- Are you searching the server browser although no GSLT is configured? Then use the direct connection instead.
::::
