---
slug: "give-roles-and-items"
language: "en"
title: "How to Give Roles and Items on Your SCP: Secret Laboratory Server"
description: "Give roles and items on a SCP: Secret Laboratory server"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Give Roles and Items"
sort: 24
related: ["gameserver/scp-secret-laboratory/use-remote-admin", "gameserver/scp-secret-laboratory/use-console-commands", "gameserver/scp-secret-laboratory/create-custom-ranks", "gameserver/scp-secret-laboratory/adjust-round-flow"]
---
With Remote Admin you can assign a specific role to players at any time and put items into their inventory – e.g. for events, to move around the map as an admin in the Tutorial role, or to test weapons and SCPs. You can do this in-game through the Remote Admin panel or without the game through the console of the dashboard. The basics of Remote Admin are covered in the guide [Use Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

## Prerequisite: the right permissions

Which roles and items you may give depends on the permissions of your rank in the `Permissions:` section of the file `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` – replace `<Port>` with the game port of your server from the **Overview** in the dashboard:

| Permission | Allows |
|------------|--------|
| `ForceclassSelf` | Assigning a role to yourself |
| `ForceclassToSpectator` | Turning other players into spectators (`Spectator`) only |
| `ForceclassWithoutRestrictions` | Assigning any role to yourself and other players |
| `GivingItems` | Giving items to players |

The guide [Create Custom Ranks](/tutorials/gameserver/scp-secret-laboratory/create-custom-ranks) shows you how to give a rank permissions.

> [!NOTE]
> The `Overwatch` role can only be assigned with the `Overwatch` permission – for other players you additionally need `ForceclassToSpectator` or `ForceclassWithoutRestrictions`.

> [!TIP]
> The console of the dashboard has full permissions. There you can give roles and items even without an in-game rank.

## Find the player ID

Players are addressed in commands by their player ID. You can see the IDs in the Remote Admin panel in the left column **Players** or in the console of the dashboard with the command `players`. To target multiple players, separate their IDs with periods, e.g. `2.5.7`.

## Give roles via command

1. **Open the console**\
   Open the Remote Admin panel in-game (default key **M**) and the text-based Remote Admin console inside it. Alternatively, open the console in the dashboard of your server.

2. **Enter the command**\
   Enter the `forceclass` command with the player ID and the role:

   ```text
   forceclass <playerID> <role>
   ```

   You can specify the role by name (not case-sensitive) or by number. In the console of the dashboard, add a leading `/`:

   ```text
   /forceclass 2 Tutorial
   /forceclass 2.5.7 ClassD
   /forceclass 3 6
   ```

   The first example turns player 2 into a Tutorial, the second turns players 2, 5 and 7 into Class-D, the third turns player 3 into a scientist.

> [!TIP]
> Instead of `forceclass` you can also use the short forms `fc`, `fr` and `forcerole`. Use `help forceclass` to show the description and usage of the command.

## List of roles

| Name | ID | Role |
|------|----|------|
| `ClassD` | 1 | Class-D personnel |
| `Scientist` | 6 | Scientist |
| `FacilityGuard` | 15 | Facility Guard |
| `NtfPrivate` | 13 | MTF Private |
| `NtfSergeant` | 11 | MTF Sergeant |
| `NtfSpecialist` | 4 | MTF Specialist |
| `NtfCaptain` | 12 | MTF Captain |
| `ChaosConscript` | 8 | Chaos Insurgency Conscript |
| `ChaosRifleman` | 18 | Chaos Insurgency Rifleman |
| `ChaosMarauder` | 19 | Chaos Insurgency Marauder |
| `ChaosRepressor` | 20 | Chaos Insurgency Repressor |
| `Scp173` | 0 | SCP-173 |
| `Scp106` | 3 | SCP-106 |
| `Scp049` | 5 | SCP-049 |
| `Scp0492` | 10 | SCP-049-2 (zombie) |
| `Scp079` | 7 | SCP-079 |
| `Scp096` | 9 | SCP-096 |
| `Scp939` | 16 | SCP-939 |
| `Scp3114` | 23 | SCP-3114 |
| `Tutorial` | 14 | Tutorial |
| `Spectator` | 2 | Spectator |
| `Overwatch` | 21 | Overwatch |
| `Filmmaker` | 22 | Filmmaker |

You can find the complete, current list of all roles in the **Role Management** tab of the Remote Admin panel or in [Northwood's Remote Admin guide](https://techwiki.scpslgame.com/books/server-guides/page/remote-admin-panel).

> [!WARNING]
> The numeric IDs can change with game updates when Northwood adds new roles. It is best to use the names – they stay stable.

## Give items via command

1. **Open the console**\
   As above, open the Remote Admin console in-game or the console in the dashboard.

2. **Enter the command**\
   Enter the `give` command with the player ID and the item ID:

   ```text
   give <playerID> <itemID>
   ```

   The `give` command expects the item ID as a number – item names do not work here – in the Remote Admin panel you can instead pick items by their name in the **Inventory** tab. Separate multiple items with periods, just like multiple players. In the console of the dashboard, add a leading `/` again:

   ```text
   /give 2 14
   /give 2.5.7 11
   /give 3 20.37.14
   ```

   The first example gives player 2 a medkit, the second gives players 2, 5 and 7 a Keycard O5 each, the third gives player 3 an E-11-SR, combat armor and a medkit.

> [!NOTE]
> If a player's inventory is full, they cannot receive another item. The command then reports an error for that player.

## List of common items

| ID | Item |
|----|------|
| 0 | Keycard Janitor |
| 1 | Keycard Scientist |
| 4 | Keycard Guard |
| 8 | Keycard MTF Captain |
| 9 | Keycard Facility Manager |
| 10 | Keycard Chaos Insurgency |
| 11 | Keycard O5 |
| 12 | Radio |
| 13 | COM-15 |
| 14 | Medkit |
| 15 | Flashlight |
| 16 | Micro H.I.D. |
| 17 | SCP-500 |
| 18 | SCP-207 |
| 19 | Ammo 12/70 Buckshot |
| 20 | E-11-SR |
| 21 | Crossvec |
| 22 | Ammo 5.56x45mm |
| 23 | FSP-9 |
| 24 | Logicer |
| 25 | Grenade (HE) |
| 26 | Flashbang |
| 27 | Ammo .44 Mag |
| 28 | Ammo 7.62x39mm |
| 29 | Ammo 9x19mm |
| 30 | COM-18 |
| 31 | SCP-018 |
| 32 | SCP-268 |
| 33 | Adrenaline |
| 34 | Painkillers |
| 35 | Coin |
| 36 | Light armor |
| 37 | Combat armor |
| 38 | Heavy armor |
| 39 | Revolver |
| 40 | AK |
| 41 | Shotgun |
| 47 | Particle Disruptor |
| 50 | Jailbird |

You can find all item IDs in [Northwood's Remote Admin guide](https://techwiki.scpslgame.com/books/server-guides/page/remote-admin-panel).

> [!WARNING]
> Item IDs can also change with game updates. After a major update, it is best to run a quick test to check that you get the right item.

## Give roles and items in the Remote Admin panel

You can also do it without commands through the interface of the Remote Admin panel:

1. **Select players**\
   Open the Remote Admin panel in-game (default key **M**) and select one or more players in the left column **Players**.

2. **Assign a role**\
   Switch to the **Role Management** tab, choose the desired role and confirm with **SET CLASS**.

3. **Give items**\
   Switch to the **Inventory** tab, choose the desired item and confirm with **REQUEST**.

## Typical use cases

> [!NOTE]
> **Example**
>
> - **Moving around as an admin:** With `forceclass <yourID> Tutorial` you move around the map as a Tutorial without belonging to one of the playing teams (Class-D, scientists, MTF, Chaos, SCPs) – handy for observing or helping. The `ForceclassSelf` permission is enough for this.
> - **Events:** Turn all participants into Class-D at once, e.g. `forceclass 2.5.7.9 ClassD`, and then give them equipment, e.g. `give 2.5.7.9 13.14`.
> - **Testing:** Assign yourself an SCP role or give yourself a weapon to try out settings or plugins.

> [!WARNING]
> Role changes and items take effect immediately and can heavily affect a running round. It is best to announce events beforehand with `bc` – see [Use Remote Admin](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).
