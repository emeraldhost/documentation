---
description: Join a Counter-Strike Global Offensive server
---

# How to Join Your Counter-Strike Global Offensive Server

Counter-Strike Global Offensive was replaced by Counter-Strike 2 in Steam. Before you can join your server you therefore have to switch your client back to the classic CS:GO version. After that you get onto your server through the **Steam favorites** or with a **direct connection** in the game console.

:::: danger Important
A regular Counter-Strike 2 installation **cannot** join a Counter-Strike Global Offensive server. Without switching to the beta branch `csgo_legacy` every connection attempt fails.
::::

## Switch the client to the CS:GO version

1. <b>Open the Steam library</b><br>
   Open the Steam client and switch to your **Library**.

2. <b>Open the properties</b><br>
   Right-click **Counter-Strike 2** and select **Properties**.

3. <b>Select the beta branch</b><br>
   Switch to the **Betas** tab and select the entry `csgo_legacy` from the dropdown menu.

   :::: info Note
   The branch is called "Legacy Version of CS:GO" in Steam and does **not** require an access code. Simply leave the beta access code field empty.
   ::::

4. <b>Wait for the update</b><br>
   Close the window. Steam then downloads the CS:GO files. Wait until the download has finished and start the game from your library as usual afterwards.

:::: tip Tip
If you want to play Counter-Strike 2 again later, simply set the dropdown menu in the **Betas** tab back to **None**.
::::

## Find connection details

:::: info Note
You can find the **IP address** and the **Game Port** of your server in the **dashboard** of your server. Counter-Strike Global Offensive uses the same port for gameplay and for server queries — there is **no separate Query Port**.
::::

:::: warning Warning
Always enter the **Game Port** from the dashboard. Port `27005` is the local client port of your game and must not be used as a server address.
::::

## Via Steam favorites

1. <b>Open Steam</b><br>
   Open the Steam client.

2. <b>Open the server browser</b><br>
   Click on **View** in the top left and select **Game Servers**.

3. <b>Add the server</b><br>
   Click on the **Favorites** tab and then on **+** at the bottom right.

4. <b>Enter the server address</b><br>
   Enter the IP address and the Game Port of your server, separated by a colon:

   :::: tip Example
   ```
   123.45.67.89:27015
   ```

   Use the IP address and the Game Port from your dashboard here.
   ::::

5. <b>Select the server in the game</b><br>
   Start Counter-Strike Global Offensive, select **Play CS:GO** in the main menu and open the **Community Server Browser**. You will find your server on the **Favorites** tab and can join it from there.

## Enable the developer console in the game

The console is disabled by default in Counter-Strike Global Offensive. You need it for the direct connection.

1. <b>Start Counter-Strike Global Offensive</b><br>
   Launch the game and wait for the main menu to load.

2. <b>Open the settings</b><br>
   Open the **Settings** and switch to the **Game** section.

3. <b>Enable the console</b><br>
   Set the option **Enable Developer Console** to **Yes**.

:::: tip Tip
Alternatively you can enable the console permanently with the launch option `-console`. Add it in Steam by right-clicking the game and opening **Properties** → **Launch Options**.
::::

## Connect through the game console

1. <b>Open the console</b><br>
   Press `~` in the game to open the console.

2. <b>Connect</b><br>
   Enter the following command:

   ```
   connect IP:Port
   ```

   :::: tip Example
   ```
   connect 123.45.67.89:27015
   ```

   Use the IP address and the Game Port from your dashboard here.
   ::::

## Steam Account Token (GSLT)

:::: info Note
The **dashboard** of your server contains the mandatory field **Steam Account Token**. Behind it is the Steam Game Server Login Token (GSLT), which the server passes to Steam on startup via `sv_setsteamaccount`. The token is exactly 32 characters long and consists of letters and digits.

You can create a token at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) using the App ID `730`. Afterwards enter it in the dashboard and restart your server.
::::

:::: warning Warning
Every simultaneously running server needs its **own** token. Using the same token on several servers is not permitted.
::::
