---
slug: "change-game-settings"
language: "en"
title: "How to Change the Game Settings of Your No One Survived Server"
description: "Change the game settings of a No One Survived server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Game Settings"
sort: 3
related: ["gameserver/no-one-survived/add-admin", "gameserver/no-one-survived/add-savegame", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

How harsh your server is gets defined in the `Game.ini` file: the number and strength of the zombies, the length of a day and a year, loot amounts, permanent death and PvP.

> [!NOTE]
> **Two sections, two responsibilities**
>
> The `Game.ini` consists of two sections:
>
> - **`[ServerSetting]`** – base data of the server such as name, password and save name. You control these values through the **dashboard**.
> - **`[GameSettings]`** – the actual game rules. These values do not exist in the dashboard, you enter them directly in the file.

> [!CAUTION]
> **Back up first**
>
> Create a [backup](/tutorials/gameserver/no-one-survived/create-backup) before making larger changes.

## Change the settings

1. **Stop the server**\
   Stop your server via the dashboard. The settings are only read on server start.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open Game.ini**\
   Open the following file:

   ```text
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   > [!NOTE]
   > If the file does not exist yet, start the server once so it gets created. Stop it again afterwards.
   >
   > The folder is called `WindowsServer` on your Linux server as well. That is intended – No One Survived only ships a Windows server application, which runs on Linux servers through a compatibility layer.

4. **Adjust the values**\
   Change the desired lines in the `[GameSettings]` section. If a line does not exist, add it.

5. **Start the server**\
   Save the file and start your server.

## Settings in the `[GameSettings]` section

| Setting | Values | Meaning |
|---------|--------|---------|
| `PVP` | `True` / `False` | Allows players to attack each other |
| `ZombieAttack` | `True` / `False` | Enables attack waves against player bases |
| `ZombieAttackDay` | 1–30 | Interval between two attack waves in days |
| `AttackZombieNum` | 1–5 | Strength of the attack wave |
| `ZombieNum` | 1–3 | Amount of zombies in the open world |
| `RunZombiePercent` | 0.0–1.0 | Share of running zombies |
| `ZombieStreng` | 0–3 | Strength of the zombies |
| `YearDay` | Number of days | Length of a year in the game |
| `DayLength` | 45, 90 or 120 | Length of a day in minutes |
| `PermanentDead` | `True` / `False` | Permanent death – the character is lost on death |
| `MaterialNum` | 0–3 | Amount of material to be found in the world |
| `ItemSpawn` | Number of days | Interval in which loot respawns in the world |
| `NPCItemSpawn` | Number of days | Interval in which the NPC stock is refreshed |
| `VirusFatalityRate` | 0.0–1.0 | Lethality of the virus |
| `GiftBagForNovices` | `True` / `False` | Starter package for new players |

An example of a relaxed PvE server:

```ini
[GameSettings]
PVP=False
ZombieAttack=True
ZombieAttackDay=10
AttackZombieNum=1
ZombieNum=1
RunZombiePercent=0.2
ZombieStreng=1
DayLength=90
PermanentDead=False
MaterialNum=3
VirusFatalityRate=0.2
GiftBagForNovices=True
```

> [!WARNING]
> **Copy the spelling exactly**
>
> The names of the settings can change with game updates. That is why you should only change lines that already exist in **your** file and copy their spelling exactly. A misspelled key is silently ignored.

> [!NOTE]
> **Check the allowed values**
>
> The allowed value ranges can change with game updates as well. If you enter a value outside the valid range, the server falls back to the default value – the setting then appears to have no effect.

## Zombie count

The number of zombies per attack wave is not stored in the `[GameSettings]` section but in `[ServerSetting]` – and you change it through the **dashboard**:

| Setting | Values | Meaning |
|---------|--------|---------|
| `NumOfZombieSpawn` | 25–100 | Number of zombies in an attack wave |

> [!WARNING]
> Values from the `[ServerSetting]` section get overwritten from the dashboard fields on server start. If you change them manually in `Game.ini`, they are gone again after the next start. The values in the `[GameSettings]` section are not affected and stay in place.

> [!TIP]
> **Changes take effect on the next start**
>
> All settings are only read on server start. Changes made while the server is running have no effect – restart your server after every adjustment.
