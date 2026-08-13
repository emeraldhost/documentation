---
description: Kick and ban players on an Enshrouded server
---

# How to Kick and Ban Players on Your Enshrouded Server

Enshrouded gives you two ways to remove a misbehaving player from your server: the **kick** and the **ban**. You do both in game, not in the dashboard. Since Update 7, a banned player is added to a persistent ban list and is automatically rejected on every further join attempt.

:::: info Note
Only players in a group with the `canKickBan` permission may kick and ban. To learn how to set up such a group and get assigned to it when joining, see [Add Admin](add-admin.md).
::::

## Kick or ban?

| Action | Effect |
|--------|--------|
| Kick | Removes the player from the server right away. They can rejoin once the host has opened a new session. |
| Ban | Removes the player from the server and adds them to a persistent ban list. If they try to rejoin later, the server automatically rejects them — until you remove their name from the list. |

Banning works both in peer-to-peer sessions and on dedicated servers like yours.

## Kick or ban a player

1. <b>Join the server</b><br>
   Connect to your server as described under [Join Server](join-server.md). Enter the password of a group that has the `canKickBan` permission.

2. <b>Open the player list</b><br>
   Open the **Social** tab in the in-game menu. It shows every player currently in your world along with their permissions on the server.

3. <b>Select the player</b><br>
   Select the player you want to remove.

4. <b>Kick or ban</b><br>
   Choose the kick or the ban. The kick only removes the player from the running session, the ban additionally adds them to the ban list.

:::: warning Warning
A kick is not a permanent block. If a player should not be able to return at all, ban them instead of kicking them.
::::

## Lift a ban

The same window you use to add a player to the ban list also shows the full list and lets you unban players again.

1. <b>Open the ban list</b><br>
   Open the **Social** tab in the in-game menu again and bring up the ban list. It shows every name currently banned from your server.

2. <b>Unban the player</b><br>
   Select the name and lift the ban. The player can then join your server again.

:::: info Note
The ban list is persistent. Once a player is banned, they stay banned until you remove their name yourself.
::::

## Control access with passwords

A ban targets individual players. Who can get onto your server at all, and with which permissions, is controlled by the group passwords in the `userGroups` section of the `enshrouded_server.json` file. Set a new password there and only players who know it can still get in. To learn how to change the passwords, see [Change Server Password](change-server-password.md).

:::: danger Important
You cannot set a server password in the dashboard. In Enshrouded, passwords are assigned exclusively through the `userGroups` section of the `enshrouded_server.json`. Stop your server before editing the file — otherwise your change will be overwritten.
::::

:::: tip Tip
Changing a password locks out everyone who knew the old one. If you only want to get rid of a single player, the ban is the faster way.
::::
