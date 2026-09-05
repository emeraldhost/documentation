---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Factorio Server hinzu"
description: "Savegame auf einem Factorio Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/factorio/add-admin", "gameserver/factorio/add-mods", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

Du kannst einen lokalen Spielstand auf Deinen Server übertragen, um mit einer bestehenden Fabrik weiterzuspielen. Ein Factorio-Spielstand ist immer eine **einzelne .zip-Datei** – kein Ordner.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %appdata%\Factorio\saves
   ```

   > [!NOTE]
   > Unter Linux liegen die Spielstände in `~/.factorio/saves`, unter macOS in `~/Library/Application Support/factorio/saves`.

2. **Spielstand auswählen**\
   Suche die gewünschte `.zip`-Datei heraus, z.B. `MeineFabrik.zip`. Vermeide Leerzeichen im Dateinamen und verwende stattdessen Unterstriche, z.B. `Meine_Fabrik.zip`.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Spielstand hochladen**\
   Lade die `.zip`-Datei in folgendes Verzeichnis hoch:

   ```text
   /saves/
   ```

4. **Spielstandnamen setzen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Save Name** den Dateinamen Deines Spielstands ein – **ohne** die Endung `.zip` (z.B. `Meine_Fabrik` für `Meine_Fabrik.zip`).

5. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server.

> [!WARNING]
> Benenne die hochgeladene Datei nicht um, sondern passe stattdessen den **Save Name** an den vorhandenen Dateinamen an. So vermeidest Du Fehler durch abweichende Bezeichnungen innerhalb der Zip-Datei.

> [!IMPORTANT]
> Findet der Server unter dem eingetragenen **Save Name** keine Datei im Ordner `saves`, erzeugt er beim Start automatisch eine **neue, leere Welt** mit diesem Namen. Prüfe die Schreibweise daher genau – Groß- und Kleinschreibung inklusive.

> [!WARNING]
> **Versionen**
>
> Ein Spielstand aus einer neueren Factorio-Version lässt sich auf einem älteren Server nicht laden. Ältere Spielstände werden beim Laden migriert, allerdings nur über eine begrenzte Versionsspanne hinweg.

> [!TIP]
> **Mods**
>
> Wurde der Spielstand mit Mods gespielt, müssen dieselben Mods auch auf dem Server vorhanden sein. Wie Du sie installierst, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/factorio/add-mods).

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/factorio/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.
