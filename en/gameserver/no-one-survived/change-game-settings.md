---
description: Change the game settings of a No One Survived server
---

# How to Change the Game Settings of Your No One Survived Server

How harsh your server is gets defined in the `Game.ini` file: the number and strength of the zombies, the length of a day and a year, loot amounts, permanent death and PvP.

:::: info Two sections, two responsibilities
The `Game.ini` consists of two sections:

- **`[ServerSetting]`** – base data of the server such as name, password and save name. You control these values through the **dashboard**.
- **`[GameSettings]`** – the actual game rules. These values do not exist in the dashboard, you enter them directly in the file.
::::

:::: danger Back up first
Create a [backup](create-backup.md) before making larger changes.
::::

## Change the settings

1. <b>Stop the server</b><br>
   Stop your server via the dashboard. The settings are only read on server start.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open Game.ini</b><br>
   Open the following file:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   :::: info Note
   If the file does not exist yet, start the server once so it gets created. Stop it again afterwards.

   The folder is called `WindowsServer` on your Linux server as well. That is intended – No One Survived only ships a Windows server application, which runs on Linux servers through a compatibility layer.
   ::::

4. <b>Adjust the values</b><br>
   Change the desired lines in the `[GameSettings]` section. If a line does not exist, add it.

5. <b>Start the server</b><br>
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

:::: warning Copy the spelling exactly
The names of the settings can change with game updates. That is why you should only change lines that already exist in **your** file and copy their spelling exactly. A misspelled key is silently ignored.
::::

:::: info Check the allowed values
The allowed value ranges can change with game updates as well. If you enter a value outside the valid range, the server falls back to the default value – the setting then appears to have no effect.
::::

## Zombie count

The number of zombies per attack wave is not stored in the `[GameSettings]` section but in `[ServerSetting]` – and you change it through the **dashboard**:

| Setting | Values | Meaning |
|---------|--------|---------|
| `NumOfZombieSpawn` | 25–100 | Number of zombies in an attack wave |

:::: warning Warning
Values from the `[ServerSetting]` section get overwritten from the dashboard fields on server start. If you change them manually in `Game.ini`, they are gone again after the next start. The values in the `[GameSettings]` section are not affected and stay in place.
::::

:::: tip Changes take effect on the next start
All settings are only read on server start. Changes made while the server is running have no effect – restart your server after every adjustment.
::::
