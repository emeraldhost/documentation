---
description: Join a Minecraft Endstone Edition server
---

# How to Join Your Minecraft Endstone Edition Server

Endstone runs the official Bedrock Dedicated Server in the background. You therefore connect with a regular Minecraft Bedrock client – for example on Windows, Android or iOS. The server is added there manually once, using its IP address and port.

## Find connection details

:::: info Note
You can find the IP address and the Game Port of your server in the **dashboard** of your server. Always enter exactly that Game Port in the game.
::::

:::: danger Important
The server answers server queries on the same UDP port the game itself runs on. There is no separate Query Port to connect to – if you enter a different port, you will not reach your server.
::::

## Add the server in the game

1. <b>Start Minecraft</b><br>
   Launch Minecraft Bedrock Edition on your device.

2. <b>Open Play</b><br>
   Select **Play** in the main menu.

3. <b>Open the Servers tab</b><br>
   Switch to the **Servers** tab.

4. <b>Add the server</b><br>
   Scroll down and select **Add Server**.

5. <b>Enter the connection details</b><br>
   Enter a server name of your choice as well as the IP address and the Game Port from the dashboard:

   ```
   Server Name:    My Endstone Server
   Server Address: 123.45.67.89
   Port:           Game Port from the dashboard
   ```

6. <b>Save</b><br>
   Save the entry. Your server then appears in the list under **Additional Servers**.

7. <b>Join</b><br>
   Select your server and click **Join Server**.

## Why your server does not show up in the server list

:::: info Note
In the **Servers** tab, Minecraft only lists Mojang's large partner servers under "Featured Servers". Your own servers – rented or self-hosted – never appear there. You can only reach your server through the manual entry with IP address and Game Port.
::::

## The first start takes longer

:::: warning Caution
On the very first start, Endstone downloads and sets up the official Bedrock Dedicated Server first. This takes a moment – wait until the console shows that the server has finished starting before you connect.
::::

## Joining from consoles

Consoles do not allow you to enter custom server addresses directly. Using a DNS workaround (BedrockConnect) you can redirect the "Featured Servers" list so you can enter your own IP.

:::: warning Caution
This changes the DNS settings of your console. Write down the current values beforehand in case you want to restore them later.
::::

### DNS addresses

| Console | Primary | Secondary |
|---------|---------|-----------|
| Xbox One / Series X\|S | `104.238.130.180` | `8.8.8.8` |
| PlayStation 4 / 5 | `45.55.68.52` | `8.8.8.8` |
| Nintendo Switch | `104.238.130.180` | `8.8.8.8` |

### Xbox

1. <b>Open the network settings</b><br>
   Go to **Settings → General → Network settings → Advanced settings → DNS settings**.

2. <b>Select Manual</b><br>
   Choose **Manual** and enter the DNS addresses from the table.

3. <b>Save and restart</b><br>
   Save the setting and restart the Xbox.

### PlayStation

1. <b>Open the network settings</b><br>
   Go to **Settings → Network → Settings → Set Up Internet Connection**.

2. <b>Adjust the connection</b><br>
   Select your network, open the **Advanced Settings** and set the **DNS Settings** to **Manual**.

3. <b>Enter the DNS addresses</b><br>
   Enter the DNS addresses from the table and confirm.

4. <b>Restart the console</b><br>
   Restart your console.

### Connect to the server

1. <b>Start Minecraft</b><br>
   Open Minecraft Bedrock Edition and switch to the **Servers** tab.

2. <b>Join a featured server</b><br>
   Click one of the listed featured servers. You will be redirected to BedrockConnect instead.

3. <b>Enter your own IP</b><br>
   Select **Connect to a Server** and enter the IP address and the Game Port of your server.

## Minecraft Java Edition

:::: danger Important
**Java Edition** clients cannot join your server. Endstone launches the Bedrock Dedicated Server, and both editions use different network protocols – Bedrock communicates over UDP, Java over TCP.
::::
