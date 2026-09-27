---
slug: "welt-einstellungen-aendern"
language: "de"
title: "So änderst Du die Welt-Einstellungen auf Deinem Space Engineers Server"
description: "Welt-Einstellungen wie Multiplikatoren, Meteoriten, NPCs und Sync-Distanz auf einem Space Engineers Server ändern"
tags: []
date: "2026-09-27"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt-Einstellungen ändern"
sort: 17
related: ["gameserver/space-engineers/change-block-limits", "gameserver/space-engineers/configure-trash-removal", "gameserver/space-engineers/enable-experimental-mode", "gameserver/space-engineers/restore-automatic-backup"]
---
Viele Einstellungen Deiner Welt gibt es nicht als Feld in der Verwaltung – zum Beispiel die Inventargröße, die Geschwindigkeit von Assemblern und Raffinerien, Meteoriten, NPC-Schiffe oder die Sync-Distanz. Diese Einstellungen änderst Du direkt in der Datei `Sandbox_config.sbc` Deiner Welt.

> [!NOTE]
> Für Deine Welt gilt nur die Datei `/config/Saves/World/Sandbox_config.sbc`. Beim Laden ersetzt der Server damit die Einstellungen aus `Sandbox.sbc` – diese Datei musst Du also nicht mitändern.
>
> Bearbeite **nicht** den Block `<SessionSettings>` in `SpaceEngineers-Dedicated.cfg`. Diesen Block nutzt der Server nur, wenn er eine neue Welt erstellt. Das passiert auf Deinem Server nicht, weil er immer die bestehende Welt **World** lädt. Aus demselben Grund musst Du auch keine Datei `LastSession.sbl` löschen.

## Diese Werte änderst Du in der Verwaltung

> [!WARNING]
> Einige Werte stehen zwar ebenfalls in `Sandbox_config.sbc`, die Verwaltung überschreibt sie aber bei jedem Start mit den Werten aus den **Einstellungen**. Ändere sie deshalb nur dort:
>
> | Schlüssel in der Datei | Feld in der Verwaltung | Anleitung |
> | --- | --- | --- |
> | `GameMode` | **Game Mode** | [Game Mode ändern](/tutorials/gameserver/space-engineers/change-game-mode) |
> | `MaxPlayers` | **Maximale Spieler** | [Maximale Spieleranzahl ändern](/tutorials/gameserver/space-engineers/change-max-players) |
> | `EnableSaving`, `AutoSaveInMinutes` | **Automatische Backup**, **Automatischer Backup Interval** | [Automatische Backups einrichten](/tutorials/gameserver/space-engineers/configure-automatic-backups) |
> | `ExperimentalMode` | **Experimental Modus** | [Experimental Modus aktivieren](/tutorials/gameserver/space-engineers/enable-experimental-mode) |
> | `EnableIngameScripts` | **Ingame Skripte** | [Ingame Skripte erlauben](/tutorials/gameserver/space-engineers/enable-ingame-scripts) |

## Welt-Einstellungen ändern

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Datei bearbeitest. Der Server schreibt `Sandbox_config.sbc` bei jedem Speichern komplett neu und überschreibt dabei Änderungen, die Du während des Betriebs gemacht hast.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Kopie der Datei sichern**\
   Lade Dir aus dem Ordner Deiner Welt `/config/Saves/World/` eine Kopie der Datei `Sandbox_config.sbc` herunter. Mit dieser Kopie stellst Du den alten Stand wieder her, falls beim Bearbeiten etwas schiefgeht. Für die ganze Welt kannst Du zusätzlich ein [Backup](/tutorials/gameserver/create-backup) erstellen.

4. **Datei öffnen**\
   Öffne im Ordner Deiner Welt `/config/Saves/World/` die Datei `Sandbox_config.sbc`.

5. **Wert ändern**\
   Alle Welt-Einstellungen stehen im Block `<Settings xsi:type="MyObjectBuilder_SessionSettings">`. Suche die gewünschte Einstellung aus den Tabellen unten und ändere nur den Wert zwischen den Tags. Um zum Beispiel die Inventargröße der Spieler von `3` auf `10` zu erhöhen, änderst Du diese Zeile:

   ```xml
   <InventorySizeMultiplier>10</InventorySizeMultiplier>
   ```

   - Schalter kennen nur `true` (an) und `false` (aus) – immer klein geschrieben.
   - Kommazahlen schreibst Du mit Punkt, zum Beispiel `0.5`.
   - Auswahlwerte wie `NORMAL` schreibst Du genau so wie in der Tabelle, also in Großbuchstaben.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

7. **Änderung prüfen**\
   Beim Laden der Welt muss in der Server-Konsole diese Zeile erscheinen:

   ```text
   Sandbox world configuration file found, overriding checkpoint settings.
   ```

   Sie zeigt, dass der Server Deine `Sandbox_config.sbc` übernommen hat. Etwas später nennt die Zeile `Experimental mode reason:`, ob eine Deiner Einstellungen den Experimental Modus erzwingt – steht dort `0`, ist das nicht der Fall. Mehr dazu unter [Erzwungener Experimental Modus](#erzwungener-experimental-modus).

> [!IMPORTANT]
> Enthält `Sandbox_config.sbc` einen Fehler – etwa ein fehlendes öffnendes oder schließendes Tag, `True` statt `true`, ein Komma statt eines Punkts oder `Normal` statt `NORMAL` – ignoriert der Server die gesamte Datei. In der Konsole siehst Du dazu keine Fehlermeldung, nur die Zeile `Sandbox world configuration file found…` fehlt. Der Server lädt dann die Einstellungen und Mods aus `Sandbox.sbc` und überschreibt `Sandbox_config.sbc` beim nächsten Speichern. Deine Änderungen – auch neu eingetragene Mods – gehen dabei verloren.
>
> Fehlt die Zeile nach dem Start, stoppe den Server, spiele Deine Kopie der Datei wieder ein und ändere die Werte erneut.

## Multiplikatoren

Die Spalte **Standard** zeigt den Wert der vorinstallierten Welt, die Spalte **Im Spiel wählbar** die Werte, die das Spiel selbst in seinen Welt-Einstellungen anbietet. Ein Strich bedeutet, dass es die Einstellung dort nicht gibt.

| Schlüssel | Bedeutung | Standard | Im Spiel wählbar |
| --- | --- | --- | --- |
| `InventorySizeMultiplier` | Inventargröße der Spieler | `3` | `1`, `3`, `5`, `10` |
| `BlocksInventorySizeMultiplier` | Inventargröße von Blöcken wie Frachtcontainern | `1` | `1`, `3`, `5`, `10` |
| `AssemblerSpeedMultiplier` | Geschwindigkeit der Assembler | `3` | – |
| `AssemblerEfficiencyMultiplier` | Effizienz der Assembler – je höher, desto weniger Barren braucht ein Bauteil | `3` | `1`, `3`, `10` |
| `RefinerySpeedMultiplier` | Geschwindigkeit der Raffinerien | `3` | `1`, `3`, `10` |
| `WelderSpeedMultiplier` | Schweißgeschwindigkeit | `2` | `0.5`, `1`, `2`, `5` |
| `GrinderSpeedMultiplier` | Schleifgeschwindigkeit | `2` | `0.5`, `1`, `2`, `5` |
| `HackSpeedMultiplier` | Schleifgeschwindigkeit des Handschleifers an Blöcken feindlicher oder neutraler Spieler (Hacken) | `0.33` | – |
| `HarvestRatioMultiplier` | Erzertrag beim Bohren | `1` | – |

Setzt Du die Multiplikatoren für Spieler-Inventar, Assembler, Raffinerie, Schweißen, Schleifen oder Hacken auf `0` oder weniger, setzt der Server sie beim Laden auf den Standardwert zurück.

> [!WARNING]
> Laut Keen Software House sind Werte, die über die Auswahl im Spiel hinausgehen, nicht getestet und offiziell nicht unterstützt (*„Values out of the range allowed by the game user interface are not tested and officially unsupported“*, [Quelle](https://www.spaceengineersgame.com/dedicated-servers/)). Sie können das Spielerlebnis und die Leistung Deines Servers stark beeinträchtigen.

## Spieler und Gameplay

| Schlüssel | Bedeutung | Standard |
| --- | --- | --- |
| `Enable3rdPersonView` | Third-Person-Ansicht | `true` |
| `EnableJetpack` | Jetpack | `true` |
| `SpawnWithTools` | Spieler starten mit Werkzeugen im Inventar | `true` |
| `AutoHealing` | Automatische Heilung – nur in Umgebungen mit Sauerstoff und solange der Spieler keinen Schaden nimmt | `true` |
| `EnableRespawnShips` | Respawn-Schiffe als Startpunkt | `true` |
| `EnableAutorespawn` | Automatischer Respawn am nächsten verfügbaren Respawn-Punkt | `true` |
| `EnableCopyPaste` | Kopieren und Einfügen von Schiffen und Stationen | `false` |
| `WeaponsEnabled` | Waffen | `true` |
| `ThrusterDamage` | Schaden durch Triebwerke | `true` |
| `EnableOxygen` | Sauerstoff | `true` |
| `EnableOxygenPressurization` | Luftdichtheit von Räumen | `true` |
| `EnableContainerDrops` | Abwurf-Container (unbekannte Signale) | `true` |
| `FamilySharing` | Beitritt mit Konten aus der Steam-Familienbibliothek – bei `false` weist der Server solche Konten ab | `true` |
| `EnableSunRotation` | Sonnenumlauf (Tag und Nacht) | `true` |
| `SunRotationIntervalMinutes` | Dauer eines Sonnenumlaufs in Minuten | ca. `120` (in der Datei `119.999992`) |

## Meteoriten und NPCs

| Schlüssel | Bedeutung | Standard |
| --- | --- | --- |
| `EnvironmentHostility` | Häufigkeit und Stärke von Meteoritenschauern: `SAFE` (keine), `NORMAL`, `CATACLYSM` oder `CATACLYSM_UNREAL` – in dieser Reihenfolge zunehmend | `SAFE` |
| `CargoShipsEnabled` | NPC-Frachtschiffe | `true` |
| `EnableEncounters` | Zufällige Begegnungen im All | `true` |
| `EnableDrones` | NPC-Drohnen | `true` |
| `MaxDrones` | Maximale Anzahl an Drohnen gleichzeitig | `5` |
| `EnableWolfs` | Wölfe | `false` |
| `EnableSpiders` | Spinnen | `false` |

Wölfe und Spinnen erzwingen keinen Experimental Modus.

## Sicht- und Sync-Distanz

| Schlüssel | Bedeutung | Standard | Bereich |
| --- | --- | --- | --- |
| `ViewDistance` | Sichtweite in Metern | `15000` | 1000–50000 |
| `SyncDistance` | Entfernung in Metern, bis zu der der Server Schiffe, Stationen und Objekte rund um einen Spieler synchronisiert | `3000` | 1000–20000 |

Werte außerhalb dieser Bereiche setzt der Server beim Laden auf die nächste Grenze.

> [!WARNING]
> Laut Keen kann eine hohe `SyncDistance` den Server drastisch verlangsamen. Werte über `3000` erzwingen außerdem den Experimental Modus.

> [!NOTE]
> Ist auf Deinem Server [Crossplay](/tutorials/gameserver/space-engineers/enable-crossplay) aktiv, begrenzt der Server beim Laden unter anderem `SyncDistance` auf höchstens `2000` und `MaxFloatingObjects` auf höchstens `50`. Außerdem schaltet er `EnableContainerDrops` ab.

## Erzwungener Experimental Modus

> [!WARNING]
> Einige Einstellungen schalten den [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) beim Laden ein – auch wenn er in der Verwaltung auf `false` steht. Welche Einstellung dafür verantwortlich ist, zeigt die Server-Konsole, zum Beispiel:
>
> ```text
> Experimental mode reason: ExperimentalMode, SyncDistance
> ```
>
> `ExperimentalMode` steht dabei mit in der Zeile, weil der Server den Experimental Modus eingeschaltet hat. Entscheidend sind die übrigen Namen, im Beispiel `SyncDistance`. Soll Dein Server ohne Experimental Modus laufen, ändere diese Einstellungen so, dass keine Bedingung aus der Tabelle unten mehr zutrifft.

| Einstellung | Erzwingt den Experimental Modus bei |
| --- | --- |
| `SyncDistance` | mehr als `3000` |
| `SunRotationIntervalMinutes` | `29` oder weniger |
| `MaxFloatingObjects` | mehr als `100` |
| `TotalBotLimit` | mehr als `32` |
| `ProceduralDensity` | mehr als `0.35` |
| `PhysicsIterations` | einem anderen Wert als `8` |
| `TotalPCU` | mehr als `600000` |
| `BlockLimitsEnabled` | `NONE` |
| `AdaptiveSimulationQuality` | `false` |
| `EnableSpectator`, `PermanentDeath`, `ResetOwnership`, `EnableSubgridDamage`, `StationVoxelSupport`, `EnableSupergridding` | `true` |
| **Maximale Spieler** (Verwaltung) | mehr als `16` |
| **Ingame Skripte** (Verwaltung) | `true` |

In der Konsole erscheinen die Einstellungen unter ihrem Namen aus der Datei. Ausnahmen: `EnableSupergridding` heißt dort `SupergriddingEnabled`, **Maximale Spieler** `MaxPlayers` und **Ingame Skripte** `EnableIngameScripts`. Mehr zu `TotalPCU` und `BlockLimitsEnabled` findest Du unter [Block- und PCU-Limits ändern](/tutorials/gameserver/space-engineers/change-block-limits).
