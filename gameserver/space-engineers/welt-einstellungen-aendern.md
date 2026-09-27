---
description: Welt-Einstellungen wie Multiplikatoren, Meteoriten, NPCs und Sync-Distanz auf einem Space Engineers Server ändern
---

# So änderst du die Welt-Einstellungen auf deinem Space Engineers Server

Viele Einstellungen deiner Welt gibt es nicht als Feld in der Verwaltung — zum Beispiel die Inventargröße, die Geschwindigkeit von Assemblern und Raffinerien, Meteoriten, NPC-Schiffe oder die Sync-Distanz. Diese Einstellungen änderst du direkt in der Datei `Sandbox_config.sbc` deiner Welt.

:::: info Hinweis
Für deine Welt gilt nur die Datei `/config/Saves/World/Sandbox_config.sbc`. Beim Laden ersetzt der Server damit die Einstellungen aus `Sandbox.sbc` — diese Datei musst du also nicht mitändern.

Bearbeite **nicht** den Block `<SessionSettings>` in `SpaceEngineers-Dedicated.cfg`. Diesen Block nutzt der Server nur, wenn er eine neue Welt erstellt. Das passiert auf deinem Server nicht, weil er immer die bestehende Welt **World** lädt. Aus demselben Grund musst du auch keine Datei `LastSession.sbl` löschen.
::::

## Diese Werte änderst du in der Verwaltung

:::: warning Achtung
Einige Werte stehen zwar ebenfalls in `Sandbox_config.sbc`, die Verwaltung überschreibt sie aber bei jedem Start mit den Werten aus den **Einstellungen**. Ändere sie deshalb nur dort:

| Schlüssel in der Datei | Feld in der Verwaltung | Anleitung |
| --- | --- | --- |
| `GameMode` | **Game Mode** | [Game Mode ändern](game-mode-aendern.md) |
| `MaxPlayers` | **Maximale Spieler** | [Maximale Spieleranzahl ändern](max-spieler-aendern.md) |
| `EnableSaving`, `AutoSaveInMinutes` | **Automatische Backup**, **Automatischer Backup Interval** | [Automatische Backups einrichten](automatische-backups-aktivieren.md) |
| `ExperimentalMode` | **Experimental Modus** | [Experimental Modus aktivieren](experimental-modus-aktivieren.md) |
| `EnableIngameScripts` | **Ingame Skripte** | [Ingame Skripte erlauben](ingame-skripte-aktivieren.md) |
::::

## Welt-Einstellungen ändern

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei bearbeitest. Der Server schreibt `Sandbox_config.sbc` bei jedem Speichern komplett neu und überschreibt dabei Änderungen, die du während des Betriebs gemacht hast.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Kopie der Datei sichern</b><br>
   Lade dir aus dem Ordner deiner Welt `/config/Saves/World/` eine Kopie der Datei `Sandbox_config.sbc` herunter. Mit dieser Kopie stellst du den alten Stand wieder her, falls beim Bearbeiten etwas schiefgeht. Für die ganze Welt kannst du zusätzlich ein [Backup](../backup-erstellen.md) erstellen.

4. <b>Datei öffnen</b><br>
   Öffne im Ordner deiner Welt `/config/Saves/World/` die Datei `Sandbox_config.sbc`.

5. <b>Wert ändern</b><br>
   Alle Welt-Einstellungen stehen im Block `<Settings xsi:type="MyObjectBuilder_SessionSettings">`. Suche die gewünschte Einstellung aus den Tabellen unten und ändere nur den Wert zwischen den Tags. Um zum Beispiel die Inventargröße der Spieler von `3` auf `10` zu erhöhen, änderst du diese Zeile:

   ```xml
   <InventorySizeMultiplier>10</InventorySizeMultiplier>
   ```

   - Schalter kennen nur `true` (an) und `false` (aus) — immer klein geschrieben.
   - Kommazahlen schreibst du mit Punkt, zum Beispiel `0.5`.
   - Auswahlwerte wie `NORMAL` schreibst du genau so wie in der Tabelle, also in Großbuchstaben.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

7. <b>Änderung prüfen</b><br>
   Beim Laden der Welt muss in der Server-Konsole diese Zeile erscheinen:

   ```
   Sandbox world configuration file found, overriding checkpoint settings.
   ```

   Sie zeigt, dass der Server deine `Sandbox_config.sbc` übernommen hat. Etwas später nennt die Zeile `Experimental mode reason:`, ob eine deiner Einstellungen den Experimental Modus erzwingt — steht dort `0`, ist das nicht der Fall. Mehr dazu unter [Erzwungener Experimental Modus](#erzwungener-experimental-modus).

:::: danger Wichtig
Enthält `Sandbox_config.sbc` einen Fehler — etwa ein fehlendes öffnendes oder schließendes Tag, `True` statt `true`, ein Komma statt eines Punkts oder `Normal` statt `NORMAL` — ignoriert der Server die gesamte Datei. In der Konsole siehst du dazu keine Fehlermeldung, nur die Zeile `Sandbox world configuration file found…` fehlt. Der Server lädt dann die Einstellungen und Mods aus `Sandbox.sbc` und überschreibt `Sandbox_config.sbc` beim nächsten Speichern. Deine Änderungen — auch neu eingetragene Mods — gehen dabei verloren.

Fehlt die Zeile nach dem Start, stoppe den Server, spiele deine Kopie der Datei wieder ein und ändere die Werte erneut.
::::

## Multiplikatoren

Die Spalte **Standard** zeigt den Wert der vorinstallierten Welt, die Spalte **Im Spiel wählbar** die Werte, die das Spiel selbst in seinen Welt-Einstellungen anbietet. Ein Strich bedeutet, dass es die Einstellung dort nicht gibt.

| Schlüssel | Bedeutung | Standard | Im Spiel wählbar |
| --- | --- | --- | --- |
| `InventorySizeMultiplier` | Inventargröße der Spieler | `3` | `1`, `3`, `5`, `10` |
| `BlocksInventorySizeMultiplier` | Inventargröße von Blöcken wie Frachtcontainern | `1` | `1`, `3`, `5`, `10` |
| `AssemblerSpeedMultiplier` | Geschwindigkeit der Assembler | `3` | – |
| `AssemblerEfficiencyMultiplier` | Effizienz der Assembler — je höher, desto weniger Barren braucht ein Bauteil | `3` | `1`, `3`, `10` |
| `RefinerySpeedMultiplier` | Geschwindigkeit der Raffinerien | `3` | `1`, `3`, `10` |
| `WelderSpeedMultiplier` | Schweißgeschwindigkeit | `2` | `0.5`, `1`, `2`, `5` |
| `GrinderSpeedMultiplier` | Schleifgeschwindigkeit | `2` | `0.5`, `1`, `2`, `5` |
| `HackSpeedMultiplier` | Schleifgeschwindigkeit des Handschleifers an Blöcken feindlicher oder neutraler Spieler (Hacken) | `0.33` | – |
| `HarvestRatioMultiplier` | Erzertrag beim Bohren | `1` | – |

Setzt du die Multiplikatoren für Spieler-Inventar, Assembler, Raffinerie, Schweißen, Schleifen oder Hacken auf `0` oder weniger, setzt der Server sie beim Laden auf den Standardwert zurück.

:::: warning Achtung
Laut Keen Software House sind Werte, die über die Auswahl im Spiel hinausgehen, nicht getestet und offiziell nicht unterstützt (*„Values out of the range allowed by the game user interface are not tested and officially unsupported"*, [Quelle](https://www.spaceengineersgame.com/dedicated-servers/)). Sie können das Spielerlebnis und die Leistung deines Servers stark beeinträchtigen.
::::

## Spieler und Gameplay

| Schlüssel | Bedeutung | Standard |
| --- | --- | --- |
| `Enable3rdPersonView` | Third-Person-Ansicht | `true` |
| `EnableJetpack` | Jetpack | `true` |
| `SpawnWithTools` | Spieler starten mit Werkzeugen im Inventar | `true` |
| `AutoHealing` | Automatische Heilung — nur in Umgebungen mit Sauerstoff und solange der Spieler keinen Schaden nimmt | `true` |
| `EnableRespawnShips` | Respawn-Schiffe als Startpunkt | `true` |
| `EnableAutorespawn` | Automatischer Respawn am nächsten verfügbaren Respawn-Punkt | `true` |
| `EnableCopyPaste` | Kopieren und Einfügen von Schiffen und Stationen | `false` |
| `WeaponsEnabled` | Waffen | `true` |
| `ThrusterDamage` | Schaden durch Triebwerke | `true` |
| `EnableOxygen` | Sauerstoff | `true` |
| `EnableOxygenPressurization` | Luftdichtheit von Räumen | `true` |
| `EnableContainerDrops` | Abwurf-Container (unbekannte Signale) | `true` |
| `FamilySharing` | Beitritt mit Konten aus der Steam-Familienbibliothek — bei `false` weist der Server solche Konten ab | `true` |
| `EnableSunRotation` | Sonnenumlauf (Tag und Nacht) | `true` |
| `SunRotationIntervalMinutes` | Dauer eines Sonnenumlaufs in Minuten | ca. `120` (in der Datei `119.999992`) |

## Meteoriten und NPCs

| Schlüssel | Bedeutung | Standard |
| --- | --- | --- |
| `EnvironmentHostility` | Häufigkeit und Stärke von Meteoritenschauern: `SAFE` (keine), `NORMAL`, `CATACLYSM` oder `CATACLYSM_UNREAL` — in dieser Reihenfolge zunehmend | `SAFE` |
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

:::: warning Achtung
Laut Keen kann eine hohe `SyncDistance` den Server drastisch verlangsamen. Werte über `3000` erzwingen außerdem den Experimental Modus.
::::

:::: info Hinweis
Ist auf deinem Server [Crossplay](crossplay-aktivieren.md) aktiv, begrenzt der Server beim Laden unter anderem `SyncDistance` auf höchstens `2000` und `MaxFloatingObjects` auf höchstens `50`. Außerdem schaltet er `EnableContainerDrops` ab.
::::

## Erzwungener Experimental Modus

:::: warning Achtung
Einige Einstellungen schalten den [Experimental Modus](experimental-modus-aktivieren.md) beim Laden ein — auch wenn er in der Verwaltung auf `false` steht. Welche Einstellung dafür verantwortlich ist, zeigt die Server-Konsole, zum Beispiel:

```
Experimental mode reason: ExperimentalMode, SyncDistance
```

`ExperimentalMode` steht dabei mit in der Zeile, weil der Server den Experimental Modus eingeschaltet hat. Entscheidend sind die übrigen Namen, im Beispiel `SyncDistance`. Soll dein Server ohne Experimental Modus laufen, ändere diese Einstellungen so, dass keine Bedingung aus der Tabelle unten mehr zutrifft.
::::

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

In der Konsole erscheinen die Einstellungen unter ihrem Namen aus der Datei. Ausnahmen: `EnableSupergridding` heißt dort `SupergriddingEnabled`, **Maximale Spieler** `MaxPlayers` und **Ingame Skripte** `EnableIngameScripts`. Mehr zu `TotalPCU` und `BlockLimitsEnabled` findest du unter [Block- und PCU-Limits ändern](block-limits-aendern.md).
