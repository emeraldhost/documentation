---
slug: "invite-code-setzen"
language: "de"
title: "So setzt Du den Invite Code auf Deinem Windrose Server"
description: "Invite Code auf einem Windrose Server setzen"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Invite Code setzen"
sort: 3
related: ["gameserver/windrose/enable-direct-connection", "gameserver/windrose/join-server", "gameserver/windrose/set-island-id", "gameserver/windrose/set-note"]
---

Der Invite Code wird von Spielern benötigt, um Deinen Server im Spiel zu finden. Du kannst ihn entweder über die Verwaltung oder über die Datei `ServerDescription.json` setzen.

> [!NOTE]
> Der Invite Code muss mindestens 6 Zeichen lang sein und darf nur die Zeichen `0-9`, `a-z` und `A-Z` enthalten. Er unterscheidet zwischen Groß- und Kleinschreibung. Wenn Du keinen eigenen Code festlegst, wird beim Serverstart automatisch einer in der Datei `ServerDescription.json` erzeugt.

## Über die Verwaltung

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Invite Code setzen**\
   Trage den gewünschten Code im Feld **Invite Code** ein und speichere die Einstellung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

## Über die Config-Datei

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ServerDescription.json öffnen**\
   Öffne die Datei `ServerDescription.json` unter:

   ```text
   /R5/ServerDescription.json
   ```

4. **Invite Code ändern**\
   Passe den Wert des Invite Codes in der Datei an.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.
