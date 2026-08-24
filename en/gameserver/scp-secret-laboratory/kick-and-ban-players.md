---
description: "Kick and ban players on a SCP: Secret Laboratory server"
---

# How to Kick and Ban Players on Your SCP: Secret Laboratory Server

You can remove disruptive players either through the in-game Remote Admin panel or with commands — and the commands also work directly in the console of the dashboard when prefixed with `/`.

## Prerequisite: a rank with admin rights

Kicking and banning requires a rank with moderation rights (e.g. `moderator`, `admin` or `owner`). The [assign ranks](assign-ranks.md) guide shows you how to grant a rank to yourself or your team.

## Option 1: The in-game Remote Admin panel

1. <b>Open the Remote Admin panel</b><br>
   Press the **M** key in-game to open the Remote Admin panel.

2. <b>Select a player</b><br>
   In the left column labeled **Players**, select the player you want to kick or ban.

3. <b>Kick or ban the player</b><br>
   Choose the desired action: for a kick you can optionally provide a reason, for a ban you additionally set the duration. Confirm the action afterwards.

## Option 2: Commands

Enter the following commands into the command line of the Remote Admin panel.

:::: info Note
The console in the dashboard is the LocalAdmin console of your server. All commands shown here also work there when you prefix them with `/` (e.g. `/kick Peter insults`) — so you can moderate without being in the game yourself. See [Use Remote Admin](use-remote-admin.md) for details.
::::

| Command | Description |
|---------|-------------|
| `kick <player> <reason>` | Removes a player from the server |
| `ban <player> <duration> <reason>` | Bans a connected player |
| `offlineban <SteamID64> <duration> <reason>` | Bans a player who is not currently connected (short form: `oban`) |
| `unban id <SteamID64>` | Lifts a ban by SteamID64 |
| `unban ip <IP address>` | Lifts an IP ban |
| `banlist` | Shows all active bans |

As `<player>` you can use the player name, the player ID from the player list of the Remote Admin panel, or the SteamID64 prefixed with `@`. You can find a player's [SteamID64](../steamid64-find-out.md) using the linked guide.

### Ban duration

The duration is a number in minutes. You can also set the unit explicitly with the suffixes `m` (minutes), `h` (hours) and `d` (days). A duration of `0` creates a permanent ban.

```
kick Peter Insults in voice chat
ban Peter 1h Insults in voice chat
ban @76561198801452050 30d Cheating
offlineban 76561198801452050 0 Permanent removal
```

:::: tip Tip
The `banlist` command shows the stored ID for every ban. Copy the ID into the `unban` command exactly as it appears in the list.
::::

:::: info Note
Kicks and bans take effect immediately — no server restart is required.
::::
