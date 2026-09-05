---
slug: "gamemode-einstellungen-aendern"
language: "de"
title: "So passt Du die Spielmodus-Einstellungen auf Deinem Insurgency: Sandstorm Server an"
description: "Spielmodus-Einstellungen auf einem Insurgency: Sandstorm Server anpassen"
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
short_title: "Gamemode-Einstellungen ändern"
sort: 7
related: ["gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters", "gameserver/insurgency-sandstorm/change-map", "gameserver/insurgency-sandstorm/change-max-players"]
---

Jeder Spielmodus in Insurgency: Sandstorm besitzt eigene Einstellungen – z.B. Rundenanzahl, Rundendauer, Wellengröße oder Versorgungspunkte. Diese werden in der `Game.ini` festgelegt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. **Abschnitt und Einstellungen eintragen**\
   Füge den passenden Abschnitt (Header in eckigen Klammern) hinzu und liste die gewünschten Einstellungen darunter – jede in einer eigenen Zeile.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die `Game.ini` nur bei gestopptem Server. Achte darauf, dass jeder Wert unter dem **richtigen** Abschnitts-Header steht.

## Allgemeine Einstellungen

Diese Werte gelten modusübergreifend.

### `[/Script/Insurgency.INSGameMode]`

| Einstellung | Standard | Beschreibung |
|-------------|----------|--------------|
| `ObjectiveCaptureTime` | variiert | Dauer, um ein territoriales Ziel einzunehmen |
| `ObjectiveResetTime` | `-1` | Zeit, in der der Fortschritt verfällt, wenn niemand am Punkt ist (`-1` deaktiviert) |
| `ObjectiveSpeedup` | `0.25` | Zusätzliche Einnahme-Beschleunigung pro Spieler am Punkt |
| `ObjectiveMaxSpeedupPlayers` | `4` | Maximale Spieleranzahl, die für die Beschleunigung zählt |

### `[/Script/Insurgency.INSMultiplayerMode]`

| Einstellung | Standard | Beschreibung |
|-------------|----------|--------------|
| `MinimumPlayers` | `1` | Mindestanzahl Spieler pro Team für den Spielstart |
| `RoundLimit` | variiert | Maximale Anzahl Runden |
| `WinLimit` | variiert | Für den Sieg benötigte Runden |
| `GameTimeLimit` | `-1` | Maximale Spieldauer (`-1` deaktiviert) |
| `PreRoundTime` | `10` | „Freeze Time“ zu Rundenbeginn |
| `RoundTime` | variiert | Rundendauer |
| `OverTime` | `60` | Verlängerung, wenn bei Rundenende ein Ziel umkämpft ist |
| `bAllowPlayerTeamSelect` | `True` | Erlaubt Spielern den Teamwechsel |
| `bBots` | `False` | Aktiviert Bots in Versus-Modi |
| `BotQuota` | variiert | Anzahl Bots pro Team |
| `InitialSupply` | `15` | Start-Versorgungspunkte |
| `MaximumSupply` | `15` | Maximal erreichbare Versorgungspunkte |

## Modus-spezifische Abschnitte

Jeder Spielmodus hat einen eigenen Abschnitt mit weiteren Einstellungen:

| Spielmodus | Abschnitts-Header |
|------------|-------------------|
| Push | `[/Script/Insurgency.INSPushGameMode]` |
| Frontline | `[/Script/Insurgency.INSFrontlineGameMode]` |
| Skirmish | `[/Script/Insurgency.INSSkirmishGameMode]` |
| Survival | `[/Script/Insurgency.INSSurvivalGameMode]` |
| Outpost | `[/Script/Insurgency.INSOutpostGameMode]` |
| Checkpoint (Koop) | `[/Script/Insurgency.INSCheckpointGameMode]` |
| Koop allgemein | `[/Script/Insurgency.INSCoopMode]` |
| Defusal | `[/Script/Insurgency.INSDefuseGameMode]` |

> [!NOTE]
> Eine vollständige Übersicht aller modus-spezifischen Einstellungen mit Standardwerten findest Du im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide). Für Koop-Server siehe [Co-Op-Server einrichten](/tutorials/gameserver/insurgency-sandstorm/setup-coop-server), für Bot-Einstellungen [Bots hinzufügen](/tutorials/gameserver/insurgency-sandstorm/add-bots).
