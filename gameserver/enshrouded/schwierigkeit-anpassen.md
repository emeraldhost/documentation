---
description: Schwierigkeit auf einem Enshrouded Server anpassen
---

# So passt du die Schwierigkeit auf deinem Enshrouded Server an

Enshrouded bietet fünf vordefinierte Schwierigkeitsgrade sowie die Möglichkeit, über den **Custom**-Modus jede einzelne Spieleinstellung individuell zu konfigurieren.

## Voreinstellung wählen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Schwierigkeit auswählen</b><br>
   Trage im Feld **Game Settings Preset** den gewünschten Wert ein:

   | Wert | Beschreibung |
   |------|-------------|
   | `Default` | Ausgewogenes Standard-Erlebnis |
   | `Relaxed` | Weniger Gegner, mehr Ressourcen |
   | `Hard` | Mehr und stärkere Gegner |
   | `Survival` | Zusätzliche Survival-Mechaniken (Hunger, härtere Strafen) |
   | `Custom` | Alle Werte frei konfigurierbar (siehe unten) |

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## Custom-Modus konfigurieren

Wenn du `Game Settings Preset` auf `Custom` setzt, kannst du alle Werte einzeln über die Datei `enshrouded_server.json` anpassen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>enshrouded_server.json öffnen</b><br>
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und passe die Werte im Abschnitt `gameSettings` an.

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.
::::

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

:::: tip Tipp
Prüfe die JSON-Datei nach dem Bearbeiten auf Syntax-Fehler, bevor du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server deine Einstellungen verwirft.
::::
