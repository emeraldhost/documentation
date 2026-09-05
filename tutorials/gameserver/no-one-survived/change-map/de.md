---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Karte Deines No One Survived Servers"
description: "Karte eines No One Survived Servers ändern"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 3
related: ["gameserver/no-one-survived/add-savegame", "gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/download-savegame"]
---

No One Survived bringt zwei Karten mit. Welche davon Dein Server lädt, steuerst Du über den Wert `OpenMap` in der Konfigurationsdatei.

| Wert | Karte |
|------|-------|
| `Map01` | Große Karte (Standard), rund 8 x 8 km |
| `Map02` | Kleine Karte, rund 4 x 4 km – die ursprüngliche Karte des Spiels |

> [!NOTE]
> Die Nummerierung ist nicht chronologisch: `Map01` ist die später hinzugekommene **große** Karte, `Map02` die kleinere Ursprungskarte.

> [!CAUTION]
> **Vorher sichern**
>
> Erstelle vor dem Wechsel ein [Backup](/tutorials/gameserver/no-one-survived/create-backup). Ein Kartenwechsel ändert, welche Welt Dein Server lädt – ohne Sicherung kommst Du nicht mehr an Deinen bisherigen Stand.

## Karte umstellen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Einstellung wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   > [!NOTE]
   > Existiert die Datei noch nicht, starte den Server einmal, damit sie angelegt wird. Stoppe ihn anschließend wieder.
   >
   > Der Ordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – No One Survived stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

4. **Karte eintragen**\
   Trage im Abschnitt `[ServerSetting]` den gewünschten Wert ein. Ist die Zeile noch nicht vorhanden, ergänze sie:

   ```ini
   [ServerSetting]
   OpenMap=Map02
   ```

5. **Neuen Savegame-Namen setzen**\
   Trage in der **Verwaltung** einen neuen Savegame-Namen ein, damit für die neue Karte eine eigene Welt erzeugt wird. Dein bisheriger Spielstand bleibt dabei unter seinem alten Namen erhalten.

   > [!NOTE]
   > **Warum ein eigener Name?**
   >
   > Ein vorhandener Spielstand wurde auf der Karte erzeugt, auf der Du ihn gestartet hast. Vergibst Du für die neue Karte einen eigenen Savegame-Namen, kannst Du später jederzeit zurückwechseln, indem Du den alten Namen wieder einträgst.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start wird die gewählte Karte geladen.

> [!TIP]
> **Zurückwechseln**
>
> Um wieder auf die vorherige Karte zu wechseln, setzt Du `OpenMap` zurück und trägst in der Verwaltung wieder den zugehörigen Savegame-Namen ein.

> [!WARNING]
> **Arbeitsspeicher beachten**
>
> Die große Karte `Map01` benötigt deutlich mehr Arbeitsspeicher als die kleine Karte `Map02`. Der Entwickler empfiehlt für die große Karte mindestens 8 GB, für die kleine Karte mindestens 4 GB. Reicht der Arbeitsspeicher nicht aus, startet der Server nicht sauber oder stürzt im Betrieb ab.

> [!NOTE]
> **Kein Feld in der Verwaltung**
>
> Die Kartenauswahl wird nicht über die Verwaltung gesteuert, sondern nur über die `Game.ini`. Dieser Wert wird dadurch beim Serverstart auch nicht überschrieben und bleibt erhalten.
