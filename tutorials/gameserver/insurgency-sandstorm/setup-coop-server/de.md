---
slug: "coop-server-einrichten"
language: "de"
title: "So richtest Du einen Co-Op-Server auf Deinem Insurgency: Sandstorm Server ein"
description: "Co-Op-Server auf einem Insurgency: Sandstorm Server einrichten"
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
short_title: "Co-Op-Server einrichten"
sort: 5
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/team-kill-settings", "gameserver/insurgency-sandstorm/use-rcon"]
---

Im Co-Op-Modus (z.B. **Checkpoint**) spielst Du gemeinsam mit anderen Spielern gegen KI-Gegner. Dazu legst Du ein Koop-Szenario fest und passt die Bot- und Modus-Einstellungen in der `Game.ini` an.

## Schritt 1: Koop-Szenario festlegen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers und navigiere zu den **Einstellungen**.

2. **Szenario und Map setzen**\
   Trage im Feld **Szenario Name** ein Checkpoint-Szenario ein, z.B.:

   ```text
   Scenario_Refinery_Checkpoint_Security
   ```

   Setze im Feld **Map** die passende Karte (hier `Refinery`). Eine vollständige Liste findest Du unter [Szenario ändern](/tutorials/gameserver/insurgency-sandstorm/change-scenario).

## Schritt 2: Koop-Einstellungen anpassen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. **Koop-Einstellungen eintragen**\
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

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `AIDifficulty` | `1` | Schwierigkeit der KI von einfach (`0`) bis schwer (`1`) |
   | `bUseVehicleInsertion` | `True` | Gegner rücken per Fahrzeug ein |
   | `MinimumEnemies` | `5` | Minimale Anzahl gegnerischer Bots |
   | `MaximumEnemies` | `40` | Maximale Anzahl gegnerischer Bots |
   | `bBots` | `True` | Aktiviert KI-Bots im Koop-Modus |
   | `FriendlyBotQuota` | `8` | Füllt das Spieler-Team mit Bots auf |
   | `MaxPlayersToScaleEnemyCount` | `8` | Passt die Gegnerzahl an die Spieler-/Bot-Anzahl an |

5. **Checkpoint-Einstellungen anpassen (optional)**\
   Für den Checkpoint-Modus kannst Du zusätzlich folgenden Abschnitt verwenden:

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
   | `RespawnDPR` | `0.1` | „Dead Player Ratio“, ab der das Bot-Team respawnt |
   | `RespawnDelay` | `20` | Respawn-Verzögerung der Bots |
   | `PostCaptureRushTimer` | `30` | Zeit, in der Bots nach der Zerstörung den Cache stürmen |
   | `bForceSoloWaves` | `True` | Aktiviert das Wellen-System aus dem lokalen Spiel |

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> Weitere Bot-Einstellungen findest Du unter [Bots hinzufügen](/tutorials/gameserver/insurgency-sandstorm/add-bots).
