---
slug: "karma-aktivieren"
language: "de"
title: "So aktivierst Du das Karma-System auf Deinem Barotrauma Server"
description: "Karma-System auf einem Barotrauma Server aktivieren"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["barotrauma"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Karma aktivieren"
sort: 5
related: ["gameserver/barotrauma/enable-server-list", "gameserver/barotrauma/join-server", "gameserver/barotrauma/enable-traitors", "gameserver/barotrauma/kick-ban-players"]
---

Das Karma-System bestraft Spieler, die Teammitglieder angreifen oder sabotieren. Spieler mit niedrigem Karma werden automatisch eingeschränkt oder vom Server gekickt.

> [!WARNING]
> Stelle sicher, dass Dein Server gestoppt ist, bevor Du die Konfigurationsdatei bearbeitest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serversettings.xml öffnen**\
   Öffne die Datei `serversettings.xml` unter:

   ```text
   /serversettings.xml
   ```

4. **KarmaEnabled aktivieren**\
   Suche nach dem Eintrag `KarmaEnabled` und setze den Wert auf `true`:

   ```xml
   KarmaEnabled="true"
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Das Karma-System reduziert den Karma-Wert eines Spielers bei schädlichem Verhalten wie Teamkills, Sabotage oder dem Beschädigen von Ausrüstung. Fällt der Wert unter einen bestimmten Schwellenwert, wird der Spieler automatisch gekickt.
