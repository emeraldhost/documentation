---
slug: "schwierigkeit-anpassen"
language: "de"
title: "So passt Du die Schwierigkeit auf Deinem Enshrouded Server an"
description: "Schwierigkeit auf einem Enshrouded Server anpassen"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Schwierigkeit anpassen"
sort: 7
related: ["gameserver/enshrouded/add-admin", "gameserver/enshrouded/add-savegame", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

Enshrouded bietet fünf vordefinierte Schwierigkeitsgrade sowie die Möglichkeit, über den **Custom**-Modus jede einzelne Spieleinstellung individuell zu konfigurieren.

## Voreinstellung wählen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Schwierigkeit auswählen**\
   Trage im Feld **Game Settings Preset** den gewünschten Wert ein:

   | Wert | Beschreibung |
   |------|-------------|
   | `Default` | Ausgewogenes Standard-Erlebnis |
   | `Relaxed` | Weniger Gegner, mehr Ressourcen |
   | `Hard` | Mehr und stärkere Gegner |
   | `Survival` | Zusätzliche Survival-Mechaniken (Hunger, härtere Strafen) |
   | `Custom` | Alle Werte frei konfigurierbar (siehe unten) |

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

## Custom-Modus konfigurieren

Wenn Du `Game Settings Preset` auf `Custom` setzt, kannst Du alle Werte einzeln über die Datei `enshrouded_server.json` anpassen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **enshrouded_server.json öffnen**\
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und passe die Werte im Abschnitt `gameSettings` an.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.

### Spieler-Einstellungen

| Parameter | Bereich | Beschreibung |
|-----------|---------|-------------|
| `playerHealthFactor` | `0.25` – `4.0` | Multiplikator für Spieler-Leben |
| `playerManaFactor` | `0.25` – `4.0` | Multiplikator für Mana |
| `playerStaminaFactor` | `0.25` – `4.0` | Multiplikator für Ausdauer |
| `playerBodyHeatFactor` | `0.5` – `2.0` | Multiplikator für Körperwärme |
| `enableDurability` | `true` / `false` | Ausrüstung kann kaputtgehen |
| `enableStarvingDebuff` | `true` / `false` | Verhungern-Debuff bei Hunger |
| `foodBuffDurationFactor` | Float | Dauer von Essens-Buffs |
| `fromHungerToStarving` | Nanosekunden | Zeit bis Hunger zu Verhungern wird |

### Welt- und Gegner-Einstellungen

| Parameter | Bereich | Beschreibung |
|-----------|---------|-------------|
| `shroudTimeFactor` | Float | Aufenthaltsdauer im Shroud |
| `weatherFrequency` | Float | Häufigkeit von Wetterwechseln |
| `dayTimeDuration` | Nanosekunden | Länge des Tages |
| `nightTimeDuration` | Nanosekunden | Länge der Nacht |
| `enemyHealthFactor` | Float | Leben der Gegner |
| `enemyDamageFactor` | Float | Schaden der Gegner |
| `enemyStaminaFactor` | Float | Ausdauer der Gegner |
| `enemyPerceptionRangeFactor` | Float | Wahrnehmungsreichweite der Gegner |
| `bossHealthFactor` | Float | Leben von Bossen |
| `bossDamageFactor` | Float | Schaden von Bossen |
| `randomSpawnerAmount` | Float | Menge spawnender Gegner |
| `aggroPoolAmount` | Float | Aggro-Pool der Gegner |
| `threatBonus` | Float | Globales Bedrohungslevel |
| `pacifyAllEnemies` | `true` / `false` | Gegner greifen nur bei Angriff an |

### Ressourcen und Fortschritt

| Parameter | Bereich | Beschreibung |
|-----------|---------|-------------|
| `miningDamageFactor` | Float | Abbau-Effektivität |
| `plantGrowthSpeedFactor` | Float | Wachstum von Pflanzen |
| `resourceDropStackAmountFactor` | Float | Menge gesammelter Ressourcen |
| `factoryProductionSpeedFactor` | Float | Produktionsgeschwindigkeit von Fabriken |
| `experienceCombatFactor` | Float | XP-Multiplikator für Kampf |
| `experienceMiningFactor` | Float | XP-Multiplikator für Abbau |
| `experienceExplorationQuestsFactor` | Float | XP-Multiplikator für Quests |
| `perkCostFactor` | Float | Ressourcenkosten für Perks |
| `perkUpgradeRecyclingFactor` | `0.0` – `1.0` | Rückgabe beim Recyceln von Perks |

### Sonstiges

| Parameter | Werte | Beschreibung |
|-----------|-------|-------------|
| `tombstoneMode` | `AddBackpackMaterials` u.a. | Verhalten beim Tod |
| `enableGliderTurbulences` | `true` / `false` | Turbulenzen beim Gleiten |
| `tamingStartleRepercussion` | String | Strafe beim Erschrecken gezähmter Kreaturen |
| `curseModifier` | Float | Intensität von Fluch-Effekten |

> [!TIP]
> Prüfe die JSON-Datei nach dem Bearbeiten auf Syntax-Fehler, bevor Du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server Deine Einstellungen verwirft.
