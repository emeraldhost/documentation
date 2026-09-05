---
slug: "team-kill-einstellungen"
language: "de"
title: "So passt Du die Team-Kill-Einstellungen auf Deinem Insurgency: Sandstorm Server an"
description: "Team-Kill-Einstellungen auf einem Insurgency: Sandstorm Server anpassen"
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
short_title: "Team-Kill-Einstellungen"
sort: 22
related: ["gameserver/insurgency-sandstorm/set-map-cycle", "gameserver/insurgency-sandstorm/set-server-password", "gameserver/insurgency-sandstorm/setup-coop-server", "gameserver/insurgency-sandstorm/use-rcon"]
---

Mit den Team-Kill-Einstellungen legst Du fest, wie streng das Töten von Mitspielern bestraft wird. Niedrige Strafen erlauben riskantere Spielweisen, strengere Regeln schrecken absichtliches Team-Killing ab.

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
   TeamKillLimit=3
   TeamKillGrace=0.2
   TeamKillReduceTime=90
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `TeamKillLimit` | `3` | Anzahl an Team-Kills, bevor ein Spieler gekickt wird |
   | `TeamKillGrace` | `0.2` | „Gnadenzeit“ in Sekunden zwischen Team-Kills – weitere Kills zählen in dieser Zeit nicht |
   | `TeamKillReduceTime` | `90` | Zeit in Sekunden, nach der der Team-Kill-Zähler eines Spielers um 1 sinkt |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
