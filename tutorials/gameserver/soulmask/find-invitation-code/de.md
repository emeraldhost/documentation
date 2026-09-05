---
slug: "invitation-code-finden"
language: "de"
title: "So findest Du den Invitation Code Deines Soulmask Servers"
description: "Invitation Code auf einem Soulmask Server finden"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Invitation Code finden"
sort: 4
related: ["gameserver/soulmask/create-backup", "gameserver/soulmask/download-savegame", "gameserver/soulmask/join-server", "gameserver/soulmask/kick-ban-players"]
---

Der **Invitation Code** ist ein einzigartiger 25-stelliger Code, der beim ersten Serverstart automatisch generiert wird. Spieler benötigen diesen Code, um Deinen Server in der Serverliste zu finden.

## Über die Server-Konsole

1. **Server starten**\
   Starte Deinen Server über die Verwaltung.

2. **Konsole öffnen**\
   Öffne die **Server-Konsole** in der Verwaltung.

3. **Code ablesen**\
   Der Invitation Code wird beim Serverstart in der Konsole angezeigt. Suche nach der Zeile:

   ```text
   [SERVER UNIQUE ID:] XXXXXXXXXXXXXXXXXXXXX
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > [SERVER UNIQUE ID:] 6U1WE0O933CC7H4RFBSQ8ND47
   > ```

## Über die Log-Datei

Falls Du den Code in der Konsole verpasst hast, findest Du ihn auch in der Log-Datei:

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Log-Datei öffnen**\
   Öffne die Datei:

   ```text
   /WS/Saved/Logs/WS.log
   ```

3. **Code suchen**\
   Suche nach `SERVER UNIQUE ID` in der Datei. Der Code steht direkt dahinter.

## Spieler mit Invitation Code einladen

Teile den Invitation Code mit Deinen Spielern. So können sie beitreten:

1. **Soulmask starten**\
   Starte Soulmask und wähle im Hauptmenü **Online-Spiel**.

2. **Private Server wählen**\
   Wähle den Tab **Private Server**.

3. **Code eingeben**\
   Füge den Invitation Code oben rechts im Suchfeld ein und drücke `Enter`.

4. **Server beitreten**\
   Dein Server wird in der Liste angezeigt und kann ausgewählt werden.

> [!NOTE]
> Der Invitation Code bleibt gleich, solange die Serverdaten nicht zurückgesetzt werden.
