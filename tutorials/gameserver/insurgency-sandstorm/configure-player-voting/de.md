---
slug: "spieler-voting-konfigurieren"
language: "de"
title: "So konfigurierst Du das Spieler-Voting auf Deinem Insurgency: Sandstorm Server"
description: "Spieler-Voting auf einem Insurgency: Sandstorm Server konfigurieren"
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
short_title: "Spieler-Voting konfigurieren"
sort: 20
related: ["gameserver/insurgency-sandstorm/change-server-name", "gameserver/insurgency-sandstorm/configure-kill-feed", "gameserver/insurgency-sandstorm/create-backup", "gameserver/insurgency-sandstorm/enable-cheats"]
---

Mit dem Spieler-Voting kann sich Dein Server selbst moderieren: Spieler können problematische Mitspieler per Abstimmung kicken – ideal, wenn Du keine festen Admins einsetzen möchtest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. **Voting aktivieren**\
   Füge den folgenden Abschnitt hinzu:

   ```ini
   [/Script/Insurgency.TeamInfo]
   bVotingEnabled=True
   TeamVoteIssues=/Script/Insurgency.VoteIssueKick
   ```

5. **Vote-Kick anpassen (optional)**\
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
   | `VotePassRatio` | `0.75` | Anteil an „Ja“-Stimmen, damit die Abstimmung angenommen wird |
   | `MinimumYesNoDifference` | `2` | Vorsprung an „Ja“-Stimmen gegenüber „Nein“, damit sie angenommen wird |
   | `VoteTimeout` | `90` | Zeit in Sekunden, bevor erneut abgestimmt werden kann |
   | `bCanTargetEnemies` | `false` | Ob auch gegnerische Spieler zur Abstimmung gestellt werden dürfen |
   | `IdleVoteBanDuration` | `-1` | Bann-Dauer bei Abstimmung gegen inaktive Spieler. `-1` = nur Kick |
   | `DefaultVoteBanDuration` | `120` | Bann-Dauer in Sekunden |

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
