---
slug: "server-konfigurieren"
language: "de"
title: "So konfigurierst Du Deinen Counter-Strike 2 Server"
description: "Counter-Strike 2 Server konfigurieren"
tags: []
date: "2026-04-03"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-2"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server konfigurieren"
sort: 5
related: ["gameserver/counter-strike-2/change-game-mode", "gameserver/counter-strike-2/change-map", "gameserver/counter-strike-2/create-backup", "gameserver/counter-strike-2/join-server"]
---

Du kannst Deinen Server über die Config-Dateien im Verzeichnis `/game/csgo/cfg/` anpassen.

## server.cfg bearbeiten

Die `server.cfg` ist die Haupt-Konfigurationsdatei Deines Servers.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den **Datei-Browser** in der Verwaltung.

3. **server.cfg öffnen**\
   Öffne die Datei `server.cfg` unter:

   ```text
   /game/csgo/cfg/server.cfg
   ```

4. **Einstellungen anpassen**\
   Passe die gewünschten Werte an (siehe Tabelle unten).

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Wichtige Einstellungen

| Einstellung | Beschreibung | Beispiel |
|-------------|-------------|----------|
| `mp_maxrounds` | Maximale Rundenanzahl | `24` |
| `mp_roundtime` | Rundenzeit in Minuten | `1.92` |
| `mp_roundtime_defuse` | Rundenzeit auf Defusal-Maps | `1.92` |
| `mp_freezetime` | Einfrierzeit am Rundenstart (Sekunden) | `15` |
| `mp_buytime` | Kaufzeit in Sekunden | `20` |
| `mp_startmoney` | Startgeld | `800` |
| `mp_maxmoney` | Maximales Geld | `16000` |
| `mp_friendlyfire` | Friendly Fire (0 = aus, 1 = an) | `1` |
| `mp_autoteambalance` | Auto-Team-Balance (0 = aus, 1 = an) | `1` |
| `mp_limitteams` | Max. Spieler-Differenz zwischen Teams | `1` |
| `sv_alltalk` | Alle können sich hören (0 = aus, 1 = an) | `0` |

> [!TIP]
> **Beispiel**
>
> ```text
> mp_maxrounds 24
> mp_roundtime_defuse 1.92
> mp_freezetime 15
> mp_buytime 20
> mp_startmoney 800
> mp_maxmoney 16000
> mp_friendlyfire 1
> ```

## Spielmodus-Configs

Jeder Spielmodus hat eine eigene Config-Datei, die geladen wird, wenn der Modus ausgewählt wird:

| Datei | Spielmodus |
|-------|-----------|
| `gamemode_competitive.cfg` | Competitive |
| `gamemode_competitive2v2.cfg` | Wingman |
| `gamemode_casual.cfg` | Casual |
| `gamemode_deathmatch.cfg` | Deathmatch |
| `gamemode_custom.cfg` | Custom |
| `gamemode_armsrace.cfg` | Arms Race |
| `gamemode_demolition.cfg` | Demolition |

> [!NOTE]
> Die Spielmodus-Configs überschreiben die Werte aus der `server.cfg`. Wenn Du z.B. die Rundenzeit im Competitive-Modus ändern willst, musst Du die `gamemode_competitive.cfg` bearbeiten.

## Nützliche Konsolenbefehle

Du kannst folgende Befehle über die **Server-Konsole** in der Verwaltung ausführen:

| Befehl | Beschreibung |
|--------|-------------|
| `mp_warmup_end` | Aufwärmphase beenden |
| `mp_restartgame 1` | Spiel sofort neu starten |
| `changelevel de_dust2` | Map wechseln |
| `bot_kick` | Alle Bots entfernen |
| `bot_add_t` | Bot zu Terroristen hinzufügen |
| `bot_add_ct` | Bot zu Counter-Terroristen hinzufügen |
