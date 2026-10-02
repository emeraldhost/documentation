---
description: "Create custom ranks on a SCP: Secret Laboratory server"
---

# How to Create Custom Ranks on Your SCP: Secret Laboratory Server

Besides the default roles `owner`, `admin` and `moderator`, you can create as many custom roles as you like in the `config_remoteadmin.txt` file, e.g. a `vip` rank that only shows a badge or a `supporter` rank with selected Remote Admin rights. For each role you set the badge, color and kick power, and the permissions decide what its members are allowed to do. In the file, a rank is called a role – both mean the same thing.

The guide [Assign Ranks](assign-ranks.md) shows you how to give players a rank. You can find the basics of editing the configuration files in the guide [Edit Config Files](edit-config-files.md).

:::: warning Warning
The path to the configuration file contains the Game Port of your server: `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt`. Replace `<Port>` with the actual Game Port of your server. You can find the Game Port in the dashboard under **Overview**.
::::

## Create a custom role

1. <b>Find out the Game Port</b><br>
   Open the dashboard of your server and note the Game Port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Open the configuration file</b><br>
   Open the following file – replace `<Port>` with your Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt
   ```

5. <b>Define the role</b><br>
   Find the entries of the default roles (`owner_badge`, `admin_badge`, `moderator_badge` …). Add a block for your own role below them. The role name comes in front of every key, here using `supporter` as an example:

   ```
   supporter_badge: SUPPORTER
   supporter_color: cyan
   supporter_cover: true
   supporter_hidden: false
   supporter_kick_power: 0
   supporter_required_kick_power: 1
   ```

   Use a short role name without spaces, e.g. `supporter` or `vip`. You can find what each key means in the section [The settings of a role](#the-settings-of-a-role).

6. <b>Add the role to the role list</b><br>
   Find the `Roles:` section and add your role using the same notation as the existing entries:

   ```
   Roles:
    - owner
    - admin
    - moderator
    - supporter
   ```

   The server only reads roles that are in this list.

7. <b>Grant permissions</b><br>
   Find the `Permissions:` section and add your role inside the square brackets of every permission it should get. More on this in the section [Assign permissions](#assign-permissions).

8. <b>Assign members</b><br>
   Add the players to the `Members:` section with the name of your new role, e.g.:

   ```
   Members:
    - 76561198000000001@steam: supporter
   ```

   Make sure there is a space before and after the dash. You can find all details in the guide [Assign Ranks](assign-ranks.md).

9. <b>Start the server</b><br>
   Save the file and start your server via the dashboard.

:::: danger Important
The role name must be spelled exactly the same everywhere: in front of every key (`supporter_badge` …), in the `Roles:` list, in the permissions and for the members. Also keep the indentation and dashes the same as in the existing entries and always separate roles inside the square brackets with a comma and a space. Even a single typo means the server will not load the role properly.
::::

## The settings of a role

| Key | Meaning |
|-----|---------|
| `<role>_badge` | Text of the badge shown in-game, e.g. `SUPPORTER` |
| `<role>_color` | Color of the badge from a fixed list (see below); `none` disables the badge |
| `<role>_cover` | `true`: The server badge is more important than a global badge and covers it |
| `<role>_hidden` | `true`: The badge is hidden by default |
| `<role>_kick_power` | Kick power of the role for kicking and banning, from `0` to `255` |
| `<role>_required_kick_power` | Kick power someone needs to kick or ban members of this role, from `0` to `255` |

For comparison, the default values: `owner` has a kick power of `255` and a required kick power of `255`, `admin` has `1` and `2`, `moderator` has `0` and `1`.

### Allowed colors

You can use e.g. the following color names for `<role>_color`:

```
pink, red, default, brown, silver, light_green, crimson, cyan, aqua,
deep_pink, tomato, yellow, magenta, blue_green, orange, lime, green,
emerald, carmine, nickel, mint, army_green, pumpkin
```

Use `none` to hide the badge completely.

:::: info Note
Some colors are reserved for global badges and cannot be used for server roles. It is therefore best to use the color names from the list above.
::::

## Assign permissions

In the `Permissions:` section every permission is on its own line, followed by the roles that have it in square brackets. To give a role a permission, add its name to the matching line:

```
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
```

The game knows these permissions:

```
KickingAndShortTermBanning, BanningUpToDay, LongTermBanning,
ForceclassSelf, ForceclassToSpectator, ForceclassWithoutRestrictions,
GivingItems, WarheadEvents, RespawnEvents, RoundEvents, SetGroup,
GameplayData, Overwatch, FacilityManagement, PlayersManagement,
PermissionsManagement, ServerConsoleCommands, ViewHiddenBadges,
ServerConfigs, Broadcasting, PlayerSensitiveDataAccess, Noclip,
AFKImmunity, AdminChat, ViewHiddenGlobalBadges, Announcer, Effects,
FriendlyFireDetectorImmunity, FriendlyFireDetectorTempDisable,
ServerLogLiveFeed, ExecuteAs, Vanish
```

If one of these lines is missing from your file, add it in the same format, e.g. ` - Vanish: [owner]`.

An overview of some important permissions:

| Permission | Allows |
|------------|--------|
| `KickingAndShortTermBanning` | Kicking and short bans (1 hour) |
| `BanningUpToDay` | Bans of up to one day, muting and intercom restrictions |
| `LongTermBanning` | Bans longer than one day and the `unban` command |
| `ForceclassSelf` | Assigning a class to yourself |
| `ForceclassToSpectator` | Turning other players into spectators only |
| `ForceclassWithoutRestrictions` | Assigning any class to other players |
| `GivingItems` | Giving items to players |
| `Broadcasting` | Sending broadcast messages |
| `SetGroup` | Using the `setgroup` command |
| `AdminChat` | Using the admin chat |
| `ViewHiddenBadges` | Seeing hidden server badges |

:::: warning Warning
Only give permissions such as `SetGroup`, `PermissionsManagement`, `ServerConfigs` or `ServerConsoleCommands` to people you fully trust. In the default configuration only `owner` has these rights, and `ServerConsoleCommands` has no role at all.
::::

## Example: VIP and supporter rank

:::: info Example
A `vip` rank should only show a badge and have no rights. A `supporter` rank should be able to kick players, ban them briefly, assign a class to themselves and use the admin chat.
::::

The role definitions:

```
vip_badge: VIP
vip_color: yellow
vip_cover: false
vip_hidden: false
vip_kick_power: 0
vip_required_kick_power: 0

supporter_badge: SUPPORTER
supporter_color: cyan
supporter_cover: true
supporter_hidden: false
supporter_kick_power: 0
supporter_required_kick_power: 1
```

The role list:

```
Roles:
 - owner
 - admin
 - moderator
 - supporter
 - vip
```

The changed lines in the `Permissions:` section. The `vip` rank does not appear here, so it has no rights:

```
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
 - ForceclassSelf: [owner, admin, moderator, supporter]
 - AdminChat: [owner, admin, moderator, supporter]
```

Leave all other lines unchanged.

## Hidden badges

If `<role>_hidden` is set to `true`, a player's badge is invisible at first. The player then gets a notice in the game console that their role has been granted but is hidden.

Every player with a rank can show and hide their badge themselves. To do so, they enter one of these commands in the game console or in the text-based Remote Admin console:

| Command | Effect |
|---------|--------|
| `showtag` | Shows your own server badge |
| `hidetag` | Hides your own server badge |

:::: tip Tip
Hidden badges are useful e.g. for staff members who want to play unrecognized. Roles with the `ViewHiddenBadges` permission still see hidden badges.
::::

## Apply changes

The most reliable way to apply changes to `config_remoteadmin.txt` is to restart the server via the dashboard.

Alternatively, you can reload the file without a restart:

1. <b>Reload the permissions file</b><br>
   Enter the following command in the console of the dashboard:

   ```
   /pm reload
   ```

2. <b>Find the player ID</b><br>
   If a player is currently online and should get their new role right away, enter `players` in the console. You get a list of all players in the format `- Name: UserID [PlayerID]`.

3. <b>Set the role for online players</b><br>
   Enter `/setgroup`, the player ID and the name of the role, e.g.:

   ```
   /setgroup 2 supporter
   ```

   Without this command, the player only gets their new role in the next round.

:::: info Note
In the console of the dashboard, put a `/` in front of Remote Admin commands. Leave it out in the text-based Remote Admin console in-game. More on this in the guides [Use Remote Admin](use-remote-admin.md) and [Use Console Commands](use-console-commands.md).
::::
