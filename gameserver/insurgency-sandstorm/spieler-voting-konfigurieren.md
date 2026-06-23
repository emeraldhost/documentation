---
description: "Spieler-Voting auf einem Insurgency: Sandstorm Server konfigurieren"
---

# So konfigurierst du das Spieler-Voting auf deinem Insurgency: Sandstorm Server

Mit dem Spieler-Voting kann sich dein Server selbst moderieren: Spieler können problematische Mitspieler per Abstimmung kicken — ideal, wenn du keine festen Admins einsetzen möchtest.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Voting aktivieren</b><br>
   Füge den folgenden Abschnitt hinzu:

   ```ini
   [/Script/Insurgency.TeamInfo]
   bVotingEnabled=True
   TeamVoteIssues=/Script/Insurgency.VoteIssueKick
   ```

5. <b>Vote-Kick anpassen (optional)</b><br>
   Für detaillierte Einstellungen ergänze den folgenden Abschnitt:

   ```ini
   [/Script/Insurgency.VoteIssueKick]
   MinimumPlayersRequired=3
   bRequiresMinimumToStart=True
   MinimumPlayerRatio=0.25
   VotePassRatio=0.75
   MinimumYesNoDifference=2
   VoteTimeout=90
   bCanTargetEnemies=false
   IdleVoteBanDuration=-1
   DefaultVoteBanDuration=120
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `MinimumPlayersRequired` | `3` | Anzahl Spieler, die für den Start einer Abstimmung nötig sind |
   | `bRequiresMinimumToStart` | `True` | Ob die Mindestanzahl vor Beginn einer Abstimmung erforderlich ist |
   | `MinimumPlayerRatio` | `0.25` | Mindest-Team-Anteil, der für eine Abstimmung nötig ist |
   | `VotePassRatio` | `0.75` | Anteil an „Ja"-Stimmen, damit die Abstimmung angenommen wird |
   | `MinimumYesNoDifference` | `2` | Vorsprung an „Ja"-Stimmen gegenüber „Nein", damit sie angenommen wird |
   | `VoteTimeout` | `90` | Zeit in Sekunden, bevor erneut abgestimmt werden kann |
   | `bCanTargetEnemies` | `false` | Ob auch gegnerische Spieler zur Abstimmung gestellt werden dürfen |
   | `IdleVoteBanDuration` | `-1` | Bann-Dauer bei Abstimmung gegen inaktive Spieler. `-1` = nur Kick |
   | `DefaultVoteBanDuration` | `120` | Bann-Dauer in Sekunden |

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
::::
