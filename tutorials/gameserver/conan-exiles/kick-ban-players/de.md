---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Conan Exiles Server"
description: "Spieler auf einem Conan Exiles Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 14
related: ["gameserver/conan-exiles/enable-battleye", "gameserver/conan-exiles/enable-pvp", "gameserver/conan-exiles/enable-vac", "gameserver/conan-exiles/join-server"]
---

Du kannst Spieler über das Ingame-Admin-Panel kicken und bannen.

> [!WARNING]
> **Voraussetzung**
>
> Du musst Admin auf Deinem Server sein. Hier findest Du eine Anleitung, wie Du einen [Admin hinzufügst](/tutorials/gameserver/conan-exiles/add-admin).

## Spieler über das Admin-Panel kicken oder bannen

1. **Server beitreten**\
   Tritt Deinem Conan Exiles Server bei und melde Dich als Admin an.

2. **Admin-Panel öffnen**\
   Öffne das Admin-Panel im Spiel.

3. **Spielerliste öffnen**\
   Navigiere zum Tab **Players**, um die Liste aller verbundenen Spieler zu sehen.

4. **Spieler auswählen**\
   Wähle den Spieler aus, den Du kicken oder bannen möchtest.

5. **Spieler kicken oder bannen**\
   Klicke auf **Kick** oder **Ban**, um den Spieler zu entfernen.

> [!NOTE]
> Ein gekickter Spieler kann dem Server sofort wieder beitreten. Ein gebannter Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

Um einen Spieler zu entbannen, musst Du die Blacklist-Datei manuell bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **blacklist.txt bearbeiten**\
   Öffne die Datei `blacklist.txt` unter:

   ```text
   /ConanSandbox/Saved/blacklist.txt
   ```

4. **Spieler entfernen**\
   Entferne die Zeile mit der ID des Spielers, den Du entbannen möchtest.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.
