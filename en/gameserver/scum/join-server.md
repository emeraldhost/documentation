---
description: Join a SCUM server
---

# How to Join Your SCUM Server

To connect, SCUM does **not** use the game port but the query port. That port is always **two ports above** the game port of your server. This is the most common reason why joining fails.

## Find connection details

:::: danger Important
To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Always add **+2** to the port shown there before entering it in the game.
::::

:::: tip Example
| Displayed port (game port) | Port used to connect |
|----------------------------|----------------------|
| `7777` | `7779` |
| `7000` | `7002` |
| `7010` | `7012` |
::::

## Connect directly via IP

A direct connection is the most reliable way onto your server.

1. <b>Start SCUM</b><br>
   Launch SCUM on your PC.

2. <b>Open Multiplay</b><br>
   Select **Multiplay** in the main menu.

3. <b>Enter the server address</b><br>
   In the input field for the direct connection (**Direct Connect**), enter the IP address and the port of your server, separated by a colon:

   ```
   123.45.67.89:7779
   ```

   :::: warning Warning
   Remember to enter the game port **+2** here. The unchanged port from the dashboard will not work.
   ::::

4. <b>Connect</b><br>
   Confirm your input with Enter or via the connect button.

5. <b>Create your character</b><br>
   The first time you join you create your character. Afterwards you land on the island and your progress is stored on the server.

## Via the server browser

Alternatively you can find your server in the game under **Multiplay** by searching for your server name in the search field.

:::: warning Warning
The SCUM server browser is considered unreliable. Newly created servers only show up after several minutes up to a few hours, and even then servers are not always listed. When in doubt, use the direct connection via IP address.
::::

## Via Steam favorites

You can also store your server permanently in Steam:

1. <b>Open the server browser</b><br>
   Open Steam, click on **View** in the top left and select **Game Servers**.

2. <b>Add the server</b><br>
   Click on the **Favorites** tab, then on **+** at the bottom right and enter the IP address together with the query port:

   ```
   123.45.67.89:7779
   ```

3. <b>Join</b><br>
   The server then appears in the favorites section inside the game and you can join from there.

## Which ports does SCUM use?

:::: info Note
A SCUM server occupies several consecutive ports. Starting from the game port (`7777` in this example) they are used as follows:

| Port | Protocol | Purpose |
|------|----------|---------|
| `7777` | UDP | Game port |
| `7778` | UDP | Raw UDP |
| `7779` | UDP | Query port – players and the Steam server browser connect through this one |
| `7777` | TCP | RCON |

That is why you always enter the game port **+2** in the game.
::::
