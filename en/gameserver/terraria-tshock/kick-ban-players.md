---
description: Kick and ban players on a Terraria tShock server
---

# How to Kick and Ban Players on Your Terraria tShock Server

tShock comes with a full-featured ban system: time-limited bans, reasons and ticket numbers for lifting bans selectively. All commands work both in the **in-game chat** and in the **server console** of your dashboard.

:::: info Note
In the server console you enter commands **without** a leading forward slash (`kick PlayerName`), in the in-game chat **with** one (`/kick PlayerName`). For the in-game commands you need an account with the matching permissions: [Add Admin](add-admin.md).
::::

## Show players

```
who
```

This command lists all connected players. With `who -i` you additionally get the index of every player, which lets you address them unambiguously.

## Kick a player

```
kick <player> [reason]
```

The player is removed from the server but can rejoin immediately. If you do not provide a reason, tShock inserts a default text.

:::: tip Example
```
kick PlayerName "Please keep the chat civil"
```
::::

:::: info Note
If the reason consists of several words, put it in quotation marks. Players with admin rights cannot be kicked.
::::

## Ban a player

```
ban add <target> [reason] [duration] [flags]
```

The player is removed from the server immediately and can no longer connect. In response tShock gives you a **ticket number** – you need it later to lift the ban.

:::: tip Example
```
ban add PlayerName "Griefing" 10d0h0m0s
```
::::

### Specifying a duration

The duration uses the format `0d0h0m0s` – days, hours, minutes, seconds. If you leave it out, the ban is **permanent**.

| Value | Meaning |
|-------|---------|
| `1d0h0m0s` | 1 day |
| `0d12h0m0s` | 12 hours |
| `10d30m0s` | 10 days and 30 minutes |
| _(omitted)_ | Permanent |

### Flags

Flags define what the ban is tied to. Without any flag tShock bans the account, the device identifier and the IP address at the same time.

| Flag | Meaning |
|------|---------|
| `-a` | Bans the tShock account |
| `-u` | Bans the device identifier (UUID) of the client |
| `-n` | Bans the character name |
| `-ip` | Bans the IP address |
| `-e` | Treats the value as a direct identifier – required for banning offline players |

:::: warning Caution
Without the `-e` flag the player has to be **online**. If they are not, tShock reports that the target could not be found.
::::

### Ban offline players

If the player is no longer on the server, use the `-e` flag together with a prefix that states what the ban refers to:

| Prefix | Meaning |
|--------|---------|
| `acc:` | tShock account |
| `name:` | Character name |
| `uuid:` | Device identifier of the client |
| `ip:` | IP address |

:::: tip Example
```
ban add "acc:PlayerName" "Griefing" -e
```
::::

## Lift a ban

```
ban del <ticket number>
```

There is no `unban` command – you always lift a ban through its ticket number.

1. <b>Find the ticket number</b><br>
   List the bans:

   ```
   ban list
   ```

   With many entries you can page through them using `ban list 2`, `ban list 3` and so on.

2. <b>Check the entry</b><br>
   Details about an entry are shown by:

   ```
   ban details <ticket number>
   ```

3. <b>Delete the ban</b><br>
   Lift the ban:

   ```
   ban del <ticket number>
   ```

:::: danger Important
A player can have **several ban entries**: if you ban without flags, tShock creates one entry each for the account, the device identifier and the IP address, every one with its own ticket number. If the player still cannot get onto the server after being unbanned, further entries still exist – check the list with `ban list` and delete all related tickets.
::::

:::: info Note
tShock stores bans in the database `/tshock/tshock.sqlite`. There is no `banlist.txt` file like on a regular Terraria server.
::::

## Mute a player

```
mute <player> [reason]
```

```
unmute <player>
```

The player stays on the server but can no longer write in the chat.

## Command overview

| Command | Description |
|---------|-------------|
| `who` | Show connected players (`who -i` including index) |
| `kick <player> [reason]` | Remove a player from the server |
| `ban add <target> [reason] [duration] [flags]` | Ban a player |
| `ban del <ticket number>` | Lift a ban |
| `ban list [page]` | List all bans |
| `ban details <ticket number>` | Show details about a ban |
| `ban help` | Show help for the ban system |
| `mute <player>` | Mute a player |
| `unmute <player>` | Unmute a player |
| `broadcast <message>` | Send a message to all players |
| `save` | Save the world immediately |
| `reload` | Reload the configuration |
| `help` | Show all available commands |

:::: tip Tip
After moderating, run `save` so the current state of the world is stored.
::::

:::: info Whitelist
If you want to open your server to specific players only, you can additionally use the tShock whitelist. It works with IP addresses: the command `whitelist <IP address>` adds an address to the file `/tshock/whitelist.txt`. The list only takes effect once you set the value `EnableWhitelist` to `true` in the file `/tshock/config.json`.
::::
