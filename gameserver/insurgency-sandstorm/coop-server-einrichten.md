---
description: "Co-Op-Server auf einem Insurgency: Sandstorm Server einrichten"
---

# So richtest du einen Co-Op-Server auf deinem Insurgency: Sandstorm Server ein

Im Co-Op-Modus (z.B. **Checkpoint**) spielst du gemeinsam mit anderen Spielern gegen KI-Gegner. Dazu legst du ein Koop-Szenario fest und passt die Bot- und Modus-Einstellungen in der `Game.ini` an.

## Schritt 1: Koop-Szenario festlegen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers und navigiere zu den **Einstellungen**.

2. <b>Szenario und Map setzen</b><br>
   Trage im Feld **Szenario Name** ein Checkpoint-Szenario ein, z.B.:

   ```
   Scenario_Refinery_Checkpoint_Security
   ```

   Setze im Feld **Map** die passende Karte (hier `Refinery`). Eine vollständige Liste findest du unter [Szenario ändern](szenario-aendern.md).

## Schritt 2: Koop-Einstellungen anpassen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Koop-Einstellungen eintragen</b><br>
   Füge den folgenden Abschnitt hinzu und passe die Werte an:

   ```ini
   [/Script/Insurgency.INSCoopMode]
   AIDifficulty=1
   bUseVehicleInsertion=True
   MinimumEnemies=5
   MaximumEnemies=40
   bBots=True
   FriendlyBotQuota=8
   MaxPlayersToScaleEnemyCount=8
   ```

   | Einstellung | Beschreibung |
   |-------------|--------------|
   | `AIDifficulty` | Schwierigkeit der KI von einfach (`0`) bis schwer (`1`) |
   | `bUseVehicleInsertion` | Gegner rücken per Fahrzeug ein |
   | `MinimumEnemies` / `MaximumEnemies` | Minimale/maximale Anzahl gegnerischer Bots |
   | `FriendlyBotQuota` | Füllt das Spieler-Team mit Bots auf |
   | `MaxPlayersToScaleEnemyCount` | Passt die Gegnerzahl an die Spieler-/Bot-Anzahl an |

5. <b>Checkpoint-Einstellungen anpassen (optional)</b><br>
   Für den Checkpoint-Modus kannst du zusätzlich folgenden Abschnitt verwenden:

   ```ini
   [/Script/Insurgency.INSCheckpointGameMode]
   DefendTimer=90
   DefendTimerFinal=180
   RetreatTimer=10
   RespawnDPR=0.1
   RespawnDelay=20
   PostCaptureRushTimer=30
   bForceSoloWaves=True
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `DefendTimer` | `90` | Zeit zur Verteidigung gegen den Gegenangriff |
   | `DefendTimerFinal` | `180` | Verlängerung des Gegenangriffs am finalen Punkt |
   | `RetreatTimer` | `10` | Zeit, bis sich Bots nach einem Gegenangriff zurückziehen |
   | `RespawnDPR` | `0.1` | „Dead Player Ratio", ab der das Bot-Team respawnt |
   | `RespawnDelay` | `20` | Respawn-Verzögerung der Bots |
   | `PostCaptureRushTimer` | `30` | Zeit, in der Bots nach der Zerstörung den Cache stürmen |
   | `bForceSoloWaves` | `True` | Aktiviert das Wellen-System aus dem lokalen Spiel |

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Weitere Bot-Einstellungen findest du unter [Bots hinzufügen](bots-hinzufuegen.md).
::::
