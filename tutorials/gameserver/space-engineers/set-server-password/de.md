---
slug: "server-passwort-setzen"
language: "de"
title: "So setzt Du ein Passwort auf Deinem Space Engineers Server"
description: "Ein Passwort auf einem Space Engineers Server setzen"
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
short_title: "Server Passwort setzen"
sort: 12
related: ["gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server", "gameserver/space-engineers/kick-ban-players", "gameserver/space-engineers/upload-world"]
---

Du kannst Deinen Server mit einem Passwort schützen, sodass nur Spieler mit dem Passwort beitreten können. Space Engineers speichert das Passwort **nicht im Klartext**, sondern als Hash- und Salt-Wert in der Server-Konfiguration. Du erzeugst diese beiden Werte einmal und trägst sie in die Konfiguration ein.

## Hash und Salt erzeugen

Nutze dafür das offizielle Tool **Space Engineers Dedicated Server** (kostenlos in Deiner Steam-Bibliothek unter **Tools**):

1. **Tool installieren**\
   Installiere und starte das Tool „Space Engineers Dedicated Server“ über Steam.

2. **Passwort eintragen**\
   Trage im Feld **Password** Dein gewünschtes Passwort ein. Das Tool erzeugt daraus automatisch die Werte `ServerPasswordHash` und `ServerPasswordSalt` in seiner eigenen `SpaceEngineers-Dedicated.cfg`.

3. **Werte kopieren**\
   Öffne die vom Tool erzeugte `SpaceEngineers-Dedicated.cfg` und kopiere die Inhalte von `<ServerPasswordHash>` und `<ServerPasswordSalt>`.

## Werte auf den Server übertragen

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Konfiguration öffnen**\
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. **Werte eintragen**\
   Trage die kopierten Werte ein:

   ```xml
   <ServerPasswordHash>DeinHashWert</ServerPasswordHash>
   <ServerPasswordSalt>DeinSaltWert</ServerPasswordSalt>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Spieler werden beim Verbinden nach dem Passwort gefragt.

> [!NOTE]
> Hash und Salt müssen ein zusammengehöriges Paar sein – erzeuge sie immer mit demselben Tool. Ein einzelnes Klartext-Feld `<ServerPassword>` gibt es in aktuellen Versionen nicht mehr.

> [!TIP]
> **Passwort entfernen**
>
> Um den Passwortschutz zu entfernen, leere beide Felder wieder (`<ServerPasswordHash />` und `<ServerPasswordSalt />`) und starte den Server neu.
