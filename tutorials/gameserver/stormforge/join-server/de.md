---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Stormforge Server bei"
description: "Tritt Deinem Stormforge Server per Direct IP mit IP-Adresse, Game Port und Passwort bei."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/stormforge/set-server-password", "gameserver/stormforge/change-server-name", "gameserver/stormforge/change-max-players", "gameserver/stormforge/control-automatic-updates"]
---

Deinem Stormforge Server trittst Du im Spiel über **Join a Game** bei, indem Du die Adresse Deines Servers direkt einträgst. Die Adresse besteht aus der IP-Adresse und dem Game Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers.

Ist für Deinen Server ein Passwort gesetzt, brauchen Deine Mitspieler zusätzlich das Passwort. Wie Du es festlegst, liest Du in [Server Passwort setzen](/tutorials/gameserver/stormforge/set-server-password).

## Dem Server beitreten

1. **Stormforge starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Charakter wählen**\
   Klicke auf **Play**, erstelle einen Charakter oder wähle einen vorhandenen aus und klicke auf **Start**.

3. **Direct IP öffnen**\
   Wähle **Join a Game** und anschließend **Direct IP**.

4. **Serveradresse eintragen**\
   Trage im Feld **IP Address** die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   Setze für die Platzhalter die Werte ein, die in Deiner **Verwaltung** stehen.

5. **Passwort eintragen**\
   Ist für Deinen Server ein Passwort gesetzt, trage es im Feld **Server Password** ein. Ohne Passwort bleibt das Feld leer.

6. **Verbinden**\
   Klicke auf **Join**.

> [!NOTE]
> Die Bezeichnungen im Spiel sind hier auf Englisch angegeben. Ist Dein Spiel auf eine andere Sprache eingestellt, können sie leicht abweichen.

## Verbindungsprobleme

Klappt der Beitritt nicht, prüfe diese Punkte:

- **Server gestartet**: Sieh in der **Verwaltung** nach, ob Dein Server läuft und vollständig gestartet ist.
- **Adresse**: Trage IP-Adresse und Game Port exakt so ein, wie sie in der **Verwaltung** angezeigt werden, und gib den Port immer mit an.
- **Passwort**: Das Passwort muss exakt dem Wert im Feld **Server Passwort** im **Config-Editor** entsprechen.
- **Spielversion**: Spiel und Server müssen dieselbe Version haben. Die Version Deines Spiels steht im Hauptmenü.

> [!TIP]
> **Unterschiedliche Versionen**\
> Starte Deinen Server neu, damit er die aktuelle Version installiert, und lass Steam Dein Spiel aktualisieren. Voraussetzung ist, dass im **Config-Editor** das Feld **Auto Update** auf `1` steht. Mehr dazu liest Du in [Automatische Updates steuern](/tutorials/gameserver/stormforge/control-automatic-updates).
