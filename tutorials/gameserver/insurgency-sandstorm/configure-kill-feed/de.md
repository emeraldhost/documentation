---
slug: "kill-feed-konfigurieren"
language: "de"
title: "So konfigurierst Du den Kill-Feed auf Deinem Insurgency: Sandstorm Server"
description: "Kill-Feed auf einem Insurgency: Sandstorm Server konfigurieren"
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
short_title: "Kill-Feed konfigurieren"
sort: 9
related: ["gameserver/insurgency-sandstorm/change-scenario", "gameserver/insurgency-sandstorm/change-server-name", "gameserver/insurgency-sandstorm/configure-player-voting", "gameserver/insurgency-sandstorm/create-backup"]
---

Der Kill-Feed zeigt an, wer wen ausgeschaltet hat. Du kannst ihn aktivieren, deaktivieren oder anpassen – z.B. für ein kompetitiveres Spielgefühl, indem weniger Informationen angezeigt werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. **Einstellungen eintragen**\
   Füge den folgenden Abschnitt hinzu und passe die gewünschten Werte an:

   ```ini
   [/Script/Insurgency.INSGameMode]
   bKillFeed=False
   bKillFeedSpectator=True
   bKillerInfo=True
   bKillerInfoRevealDistance=False
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `bKillFeed` | `False` | Aktiviert den Kill-Feed, wenn auf `True` gesetzt |
   | `bKillFeedSpectator` | `True` | Kill-Feed nur für Zuschauer und Replays |
   | `bKillerInfo` | `True` | Zeigt dem Opfer Informationen wie Schütze und Waffe |
   | `bKillerInfoRevealDistance` | `False` | Zeigt dem Opfer zusätzlich die Entfernung des Kills |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
