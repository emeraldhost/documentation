---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Valheim Server hinzu"
description: "Savegame auf einem Valheim Server hinzufügen"
tags: []
date: "2024-01-12"
visibility: "public"
updated: "2026-04-16"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 7
related: ["gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/change-branch", "gameserver/valheim/change-backup-settings"]
---

Du kannst einen lokalen Spielstand auf Deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. **Welt-Dateien identifizieren**\
   Jede Welt besteht aus zwei Dateien mit demselben Namen: `<WeltName>.fwl` (Welt-Metadaten) und `<WeltName>.db` (Weltdaten). Beide Dateien müssen gemeinsam übertragen werden.

## Savegame hochladen und anwenden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Welt-Dateien hochladen**\
   Lade die beiden Dateien `<WeltName>.fwl` und `<WeltName>.db` in folgendes Verzeichnis hoch:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. **Welt-Namen setzen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Welt Name** den Namen Deiner hochgeladenen Dateien ein – ohne Dateiendung (z.B. `MyWorld` für `MyWorld.fwl` und `MyWorld.db`).

5. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server.

> [!WARNING]
> Falls der Ordner `worlds_local` nicht existiert, starte den Server einmal, damit die Ordnerstruktur automatisch erstellt wird. Stoppe den Server anschließend wieder, bevor Du die Dateien hochlädst.

> [!TIP]
> Erstelle vor dem Hochladen ein Backup Deines bisherigen Server-Savegames, falls Du später zurückwechseln möchtest.
