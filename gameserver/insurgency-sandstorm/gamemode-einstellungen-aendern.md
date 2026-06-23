---
description: "Spielmodus-Einstellungen auf einem Insurgency: Sandstorm Server anpassen"
---

# So passt du die Spielmodus-Einstellungen auf deinem Insurgency: Sandstorm Server an

Jeder Spielmodus in Insurgency: Sandstorm besitzt eigene Einstellungen — z.B. Rundenanzahl, Rundendauer, Wellengröße oder Versorgungspunkte. Diese werden in der `Game.ini` festgelegt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Abschnitt und Einstellungen eintragen</b><br>
   Füge den passenden Abschnitt (Header in eckigen Klammern) hinzu und liste die gewünschten Einstellungen darunter — jede in einer eigenen Zeile.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die `Game.ini` nur bei gestopptem Server. Achte darauf, dass jeder Wert unter dem **richtigen** Abschnitts-Header steht.
::::

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
| `PreRoundTime` | `10` | „Freeze Time" zu Rundenbeginn |
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

:::: info Hinweis
Eine vollständige Übersicht aller modus-spezifischen Einstellungen mit Standardwerten findest du im offiziellen [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide). Für Koop-Server siehe [Co-Op-Server einrichten](coop-server-einrichten.md), für Bot-Einstellungen [Bots hinzufügen](bots-hinzufuegen.md).
::::
