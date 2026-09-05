---
slug: "mutatoren-hinzufuegen"
language: "de"
title: "So fügst Du Mutatoren auf Deinem Insurgency: Sandstorm Server hinzu"
description: "Mutatoren auf einem Insurgency: Sandstorm Server hinzufügen"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mutatoren hinzufügen"
sort: 14
related: ["gameserver/insurgency-sandstorm/add-bots", "gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/additional-parameters", "gameserver/insurgency-sandstorm/change-gamemode-settings"]
---

Mutatoren sind spezielle Spielregeln, die das Gameplay verändern – zum Beispiel nur Pistolen erlauben, die Lebenspunkte anpassen, das Bewegungstempo ändern oder Spezialeffekte wie „Vampirism“ hinzufügen. Es gibt eine Reihe vom Spiel mitgelieferter Mutatoren; manche Mods bringen zusätzlich eigene mit.

## Mutatoren aktivieren

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Mutatoren eintragen**\
   Trage im Feld **Zusätzliche Parameter** den gewünschten Mutator ein:

   ```text
   -Mutators=MutatorName
   ```

   Mehrere Mutatoren trennst Du mit Komma:

   ```text
   -Mutators=Vampirism,HotPotato,PistolsOnly
   ```

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!WARNING]
> Verwende den exakten **Dateinamen** aus der Tabelle unten (ohne Leerzeichen) und achte auf die Groß- und Kleinschreibung – sonst wird der Mutator nicht geladen.

> [!TIP]
> Mutatoren lassen sich auch an einen Travel-Befehl anhängen, indem Du `?Mutators=Dateiname` am Ende ergänzt.

## Verfügbare Mutatoren

| Dateiname | Mutator | Beschreibung |
|-----------|---------|--------------|
| `AllYouCanEat` | All You Can Eat | Start mit 100 Versorgungspunkten |
| `AntiMaterielRiflesOnly` | Anti-Materiel Only | Nur Anti-Materiel-Gewehre (plus normale Ausrüstung und Sprengstoff) |
| `BoltActionsOnly` | Bolt-Actions Only | Nur Repetiergewehre (plus normale Ausrüstung und Sprengstoff) |
| `Broke` | Broke | Start mit 0 Versorgungspunkten |
| `BulletSponge` | Bullet Sponge | Erhöhte Lebenspunkte |
| `Competitive` | Competitive | Ausrüstung teurer, kürzere Runden, schnelleres Einnehmen von Zielen |
| `CompetitiveLoadouts` | Competitive Loadouts | Spielerklassen werden durch die aus dem Competitive-Modus ersetzt |
| `FastMovement` | Fast Movement | Schnellere Bewegung |
| `Frenzy` | Frenzy | Kampf gegen KI-Gegner, die nur Nahkampf nutzen – Vorsicht vor Spezialgegnern |
| `Guerrillas` | Guerrillas | Start mit 5 Versorgungspunkten |
| `Hardcore` | Hardcore | Langsamere Bewegung und längere Einnahmezeiten |
| `HeadshotOnly` | Headshots Only | Spieler nehmen nur bei Kopftreffern Schaden |
| `HotPotato` | Hot Potato | Beim Tod wird eine scharfe Granate fallen gelassen |
| `LockedAim` | Locked Aim | Waffen zielen immer auf die Bildschirmmitte |
| `NoAim` | No Aim Down Sight | Zielen über Kimme und Korn ist deaktiviert |
| `PistolsOnly` | Pistols Only | Nur Pistolen (plus normale Ausrüstung und Sprengstoff) |
| `ShotgunsOnly` | Shotguns Only | Nur Schrotflinten (plus normale Ausrüstung und Sprengstoff) |
| `SlowCaptureTimes` | Slow Capture Times | Ziele brauchen länger zum Einnehmen |
| `SlowMovement` | Slow Movement | Langsamere Bewegung |
| `SoldierOfFortune` | Soldier of Fortune | Versorgungspunkte steigen mit der Punktzahl |
| `SpecialOperations` | Special Operations | Start mit 30 Versorgungspunkten |
| `Strapped` | Strapped | Start mit 1 Versorgungspunkt |
| `Ultralethal` | Ultralethal | Jeder stirbt durch einen einzigen Schuss |
| `Vampirism` | Vampirism | Du erhältst Leben in Höhe des verursachten Schadens |
| `Warlords` | Warlords | Start mit 10 Versorgungspunkten |

## Mutatoren konfigurieren (für Fortgeschrittene)

Einige Mutatoren lassen sich über die `Engine.ini` (im Ordner `Insurgency/Saved/Config/LinuxServer/`) weiter anpassen. Trage dazu den jeweiligen Header und darunter die gewünschten Einstellungen ein.

**Headshots Only**

```ini
[/Script/Insurgency.Mutator_HeadshotOnly]
bCheckMeleeDamage=false
```

`bCheckMeleeDamage` (Standard `false`) – legt fest, ob Nahkampftreffer als Kopftreffer zählen.

**Hot Potato**

```ini
[/Script/Insurgency.Mutator_HotPotato]
bIgnoreHeadshots=false
bBotsOnly=false
```

`bIgnoreHeadshots` – keine Granate bei Kopftreffer fallen lassen. `bBotsOnly` – nur bei Bots auslösen.

**Vampirism**

```ini
[/Script/Insurgency.Mutator_Vampirism]
bCountFriendlyFire=false
MaxHealth=1000
```

`bCountFriendlyFire` – Eigenbeschuss zählt zur Lebensregeneration. `MaxHealth` (Standard `1000`) – maximales Leben, das Du durch Schaden gewinnen kannst.

> [!TIP]
> Weitere Startparameter findest Du in der Anleitung [Zusätzliche Parameter](/tutorials/gameserver/insurgency-sandstorm/additional-parameters).
