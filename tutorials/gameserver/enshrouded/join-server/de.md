---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Enshrouded Server bei"
description: "Enshrouded Server beitreten und Passwort finden"
tags: []
date: "2025-06-30"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 8
related: ["gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/enable-voice-chat", "gameserver/enshrouded/kick-ban-players", "gameserver/enshrouded/performance-problems-on-enshrouded-servers"]
---

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Query Port** Deines Servers. Den Query Port findest Du in den **Einstellungen** Deines Servers in der Verwaltung. Verwende **nicht** den Game Port, sondern den Query Port!

Die Serveradresse setzt sich zusammen aus: `IP-Adresse:Query-Port` (z.B. `123.45.67.89:15637`)

## Server Passwort finden

Das Server Passwort wird in der Datei `enshrouded_server.json` gespeichert (bei den Usergruppen). Du findest die Datei entweder über den **Datei-Browser** in der Verwaltung oder per [SFTP](/tutorials/gameserver/establish-sftp-connection).

## Über den Servernamen suchen

1. **Enshrouded starten**\
   Starte Enshrouded und wähle im Hauptmenü **Spielen**.

2. **Beitreten klicken**\
   Klicke auf **Beitreten**.

3. **Dedizierter Server Tab auswählen**\
   Wähle den Tab **Dedizierter Server** aus.

4. **Server suchen**\
   Klicke links bei den Filtern auf **Servernamen filtern** und gib den Namen Deines Servers ein.

5. **Server beitreten**\
   Dein Server sollte nun automatisch in der Liste angezeigt werden.

## Über Direct Connect

1. **Enshrouded starten**\
   Starte Enshrouded und wähle im Hauptmenü **Spielen**.

2. **Beitreten klicken**\
   Klicke auf **Beitreten**.

3. **Dedizierter Server Tab auswählen**\
   Wähle den Tab **Dedizierter Server** aus.

4. **Server suchen**\
   Drücke `T` (unten rechts angezeigt), um das Suchfeld zu öffnen. Gib die IP-Adresse und den Query Port im Format `IP-Adresse:Query-Port` ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:15637
   > ```

5. **Server beitreten**\
   Dein Server sollte nun angezeigt werden und Du kannst beitreten.
