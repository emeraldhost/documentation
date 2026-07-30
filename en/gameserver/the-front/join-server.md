---
description: Join a The Front server
---

# How to Join Your The Front Server

You join your The Front server through the in-game server browser. There you search for your server by its **name** and connect with a single click.

:::: info Note
The Front does not provide an input field for a direct connection via IP address and port. Give your server a distinctive name so you can find it quickly in the server list.
::::

## Find your server in the game

1. <b>Start The Front</b><br>
   Launch The Front on your PC.

2. <b>Open the server list</b><br>
   Click on **Servers** in the menu.

3. <b>Select Dedicated Server</b><br>
   Switch to the **Dedicated Server** tab. All rented and self-hosted servers are listed here.

4. <b>Search for your server</b><br>
   Type the name of your server into the search field in the top right corner. The list is filtered down to matching results.

   :::: tip Tip
   You can find the name of your server in the **dashboard**. If needed, search for a distinctive part of the name only – the search also matches partial terms.
   ::::

5. <b>Mark the server as a favorite</b><br>
   Click the star icon to the left of your server. Favorite servers appear at the top the next time you refresh the list, so you do not have to search again.

6. <b>Connect</b><br>
   Click your server and confirm with **Connect** in the window that opens.

7. <b>Enter the password</b><br>
   If you set a password for your server, you are prompted for it when joining. Enter it and confirm.

## Server does not appear in the list

1. <b>Check the server</b><br>
   Check in the **dashboard** whether your server is actually running. A freshly started server needs a moment before it shows up in the server list.

2. <b>Refresh the list</b><br>
   Refresh the server list in the game and search again.

3. <b>Check the name</b><br>
   Compare the spelling: if you search for a name with a typo, the list stays empty. When in doubt, search for a short, distinctive part of the name only.

:::: info Which ports does The Front use?
A The Front server occupies four ports that are usually assigned directly one after another. The actual values are assigned to your server in the **dashboard** – always rely on the numbers shown there.

| Port | Purpose |
|------|---------|
| **Game Port** | The actual game traffic – your connection to the server runs through it |
| Beacon port | Game Port + 1, internal queries of the game |
| **Query Port** | Game Port + 2, your server announces itself in the server list through it |
| Shutdown port | Game Port + 3, used to shut the server down cleanly |

For your server to be found, the **Query Port** has to be reachable. You are then connected through the **Game Port**.
::::

:::: tip Tip
If you want to use admin commands on your server, add yourself as an admin first: [Add Admin](add-admin.md).
::::
