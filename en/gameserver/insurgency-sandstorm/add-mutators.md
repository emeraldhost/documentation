---
description: "Add mutators to an Insurgency: Sandstorm server"
---

# How to Add Mutators to Your Insurgency: Sandstorm Server

Mutators are special game rules that change how the game works — for example only allowing pistols, adjusting health, changing movement speed or adding special effects like "Vampirism". The game ships with a range of built-in mutators; some mods add their own.

## Enable mutators

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter mutators</b><br>
   Enter the desired mutator in the **Additional Parameters** field:

   ```
   -Mutators=MutatorName
   ```

   Separate multiple mutators with commas:

   ```
   -Mutators=Vampirism,HotPotato,PistolsOnly
   ```

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: warning Warning
Use the exact **file name** from the table below (no spaces) and pay attention to upper and lower case — otherwise the mutator will not load.
::::

:::: tip Tip
Mutators can also be appended to a travel command by adding `?Mutators=FileName` at the end.
::::

## Available mutators

| File name | Mutator | Description |
|-----------|---------|-------------|
| `AllYouCanEat` | All You Can Eat | Start with 100 supply points |
| `AntiMaterielRiflesOnly` | Anti-Materiel Only | Only anti-materiel rifles (plus normal equipment and explosives) |
| `BoltActionsOnly` | Bolt-Actions Only | Only bolt-action rifles (plus normal equipment and explosives) |
| `Broke` | Broke | Start with 0 supply points |
| `BulletSponge` | Bullet Sponge | Increased health |
| `Competitive` | Competitive | Equipment more expensive, shorter rounds, faster objective captures |
| `CompetitiveLoadouts` | Competitive Loadouts | Player classes replaced with the Competitive ones |
| `FastMovement` | Fast Movement | Move faster |
| `Frenzy` | Frenzy | Fight AI enemies that only use melee — watch out for special enemies |
| `Guerrillas` | Guerrillas | Start with 5 supply points |
| `Hardcore` | Hardcore | Slower movement and longer capture times |
| `HeadshotOnly` | Headshots Only | Players only take damage from headshots |
| `HotPotato` | Hot Potato | A live grenade is dropped on death |
| `LockedAim` | Locked Aim | Weapons always point to the center of the screen |
| `NoAim` | No Aim Down Sight | Aiming down sights is disabled |
| `PistolsOnly` | Pistols Only | Only pistols (plus normal equipment and explosives) |
| `ShotgunsOnly` | Shotguns Only | Only shotguns (plus normal equipment and explosives) |
| `SlowCaptureTimes` | Slow Capture Times | Objectives take longer to capture |
| `SlowMovement` | Slow Movement | Move slower |
| `SoldierOfFortune` | Soldier of Fortune | Supply points increase with your score |
| `SpecialOperations` | Special Operations | Start with 30 supply points |
| `Strapped` | Strapped | Start with 1 supply point |
| `Ultralethal` | Ultralethal | Everyone dies in one shot |
| `Vampirism` | Vampirism | Gain health equal to the damage you deal |
| `Warlords` | Warlords | Start with 10 supply points |

## Configuring mutators (advanced)

Some mutators can be customized further via `Engine.ini` (in the folder `Insurgency/Saved/Config/LinuxServer/`). Add the respective header and place the settings below it.

**Headshots Only**

```ini
[/Script/Insurgency.Mutator_HeadshotOnly]
bCheckMeleeDamage=false
```

`bCheckMeleeDamage` (default `false`) — whether melee hits count as headshots.

**Hot Potato**

```ini
[/Script/Insurgency.Mutator_HotPotato]
bIgnoreHeadshots=false
bBotsOnly=false
```

`bIgnoreHeadshots` — don't drop a grenade on a headshot kill. `bBotsOnly` — only trigger for bots.

**Vampirism**

```ini
[/Script/Insurgency.Mutator_Vampirism]
bCountFriendlyFire=false
MaxHealth=1000
```

`bCountFriendlyFire` — count friendly fire towards health gain. `MaxHealth` (default `1000`) — maximum health you can gain from dealing damage.

:::: tip Tip
You can find more launch parameters in the [Additional Parameters](additional-parameters.md) guide.
::::
