---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Space Engineers Server"
description: "Spieler auf einem Space Engineers Server kicken und bannen"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 13
related: ["gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server", "gameserver/space-engineers/set-server-password", "gameserver/space-engineers/upload-world"]
---

Du kannst Spieler direkt im Spiel kicken und bannen oder sie dauerhaft über die Server-Konfiguration sperren.

> [!NOTE]
> Zum Kicken und Bannen im Spiel benötigst Du Admin-Rechte. Siehe [Admins hinzufügen](/tutorials/gameserver/space-engineers/add-admins).

## Methode 1: Direkt im Spiel

1. **Server beitreten**\
   Tritt als Admin Deinem Server bei.

2. **Admin-Menü öffnen**\
   Öffne die Spielerliste mit `F3` oder das Admin-Menü mit `Alt` + `F10`.

3. **Spieler kicken oder bannen**\
   Wähle den Spieler aus und klicke auf **Kick** (vorübergehend entfernen) oder **Ban** (dauerhaft sperren).

## Methode 2: Über die Server-Konfiguration

Du kannst Spieler auch dauerhaft über die Ban-Liste sperren.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Konfiguration öffnen**\
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. **Spieler bannen**\
   Suche den Abschnitt `<Banned>` und trage pro Spieler die SteamID64 ein:

   ```xml
   <Banned>
     <unsignedLong>76561198000000000</unsignedLong>
   </Banned>
   ```

   Zum Entbannen entferne die entsprechende Zeile wieder.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Space Engineers hat **keine** eingebauten Konsolenbefehle zum Kicken oder Bannen. Befehle wie `/kick` oder `/ban` stammen aus Mods (z.B. Torch) und sind nicht Teil des Standard-Servers.

> [!TIP]
> Die [SteamID64](/tutorials/gameserver/steamid64-find-out) eines Spielers findest Du über die verlinkte Anleitung.
