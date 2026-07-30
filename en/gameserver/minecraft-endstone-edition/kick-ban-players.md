---
description: Kick and ban players on a Minecraft Endstone Edition server
---

# How to Kick and Ban Players on Your Minecraft Endstone Edition Server

You remove players with commands – either in the console of your server or in the in-game chat. Endstone extends the Bedrock Dedicated Server with a full ban system covering both name bans and IP bans.

:::: info Note
In the game you need operator rights to use these commands. See [Add admin](add-admin.md). In the console of your server the commands are always available.
::::

:::: info Note
In the console of your server you enter commands without a leading `/`. In the in-game chat you write them with `/`.
::::

## Kick a player

```
/kick <playername> [reason]
```

The player is disconnected immediately but can rejoin at any time. The optional reason is shown to them.

:::: info Note
`kick` only works for players who are currently online.
::::

## Ban a player

```
/ban <playername> [reason]
```

The player can no longer connect. If they are online at that moment, they are removed from the server right away.

## Ban an IP address

```
/ban-ip <ip address> [reason]
```

Instead of an IP address you can also pass the name of a player – the server then bans their current IP address.

:::: warning Caution
An IP ban affects everyone behind the same connection – for example players in the same household. Many internet connections also get a new IP address regularly, so an IP ban does not last forever.
::::

## Show bans

```
/banlist [players|ips]
```

Without an argument the command shows all bans. With `players` you only see banned players, with `ips` only banned IP addresses.

## Lift a ban

```
/pardon <playername>
```

```
/pardon-ip <ip address>
```

:::: tip Tip
Both commands have short forms: `/unban <playername>` and `/unban-ip <ip address>` do exactly the same.
::::

:::: info Note
A ban can therefore be lifted while the server is running. You neither have to stop your server nor edit a file by hand.
::::

## Commands at a glance

| Command | Description |
|---------|-------------|
| `/kick <playername> [reason]` | Disconnects a player from the server |
| `/ban <playername> [reason]` | Bans a player permanently |
| `/ban-ip <ip or name> [reason]` | Bans an IP address |
| `/banlist [players\|ips]` | Shows all bans of the server |
| `/pardon <playername>` | Lifts the ban of a player (also `/unban`) |
| `/pardon-ip <ip address>` | Lifts the ban of an IP address (also `/unban-ip`) |

## Ban lists as files

All bans are stored in two files in the main folder of your server:

| File | Content |
|------|---------|
| `banned-players.json` | Banned players |
| `banned-ips.json` | Banned IP addresses |

Both files are JSON lists. An entry contains fields such as:

| Field | Meaning |
|-------|---------|
| `name` / `uuid` / `xuid` | The banned player and their identifiers – only in `banned-players.json` |
| `ip` | The banned IP address – only in `banned-ips.json` |
| `created` | The point in time the ban was issued |
| `source` | Who issued the ban |
| `expires` | Expiry time – a permanent ban shows `forever` here |
| `reason` | The reason that was given |

:::: info Note
The server removes expired bans from the list automatically as soon as it checks them. There is nothing to clean up by hand.
::::

:::: warning Caution
If you edit the files by hand, stop your server beforehand and start it again afterwards – otherwise your changes do not apply reliably and may be overwritten. While the server is running it is best to always use the commands.
::::

## Allowlist instead of a ban list

If you want to open your server only to specific players instead of banning individuals, use the allowlist of the Bedrock server. It is stored as the file `allowlist.json` in the main folder of your server.

:::: tip Tip
To learn how to set up the allowlist, see [Enable Allowlist](../minecraft-bedrock-edition/enable-allowlist.md).
::::
