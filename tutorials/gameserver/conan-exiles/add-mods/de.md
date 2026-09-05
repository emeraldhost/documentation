---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Conan Exiles Server hinzu"
description: "Schritt-für-Schritt-Anleitung, wie Du Mods auf einem Conan Exiles Server hinzufügst"
tags: []
date: "2025-12-28"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 6
related: ["gameserver/conan-exiles/add-admin", "gameserver/conan-exiles/add-savegame", "gameserver/conan-exiles/change-map", "gameserver/conan-exiles/change-max-players"]
---

> [!TIP]
> Du kannst die Mod-Dateien auch mit einem FTP-Programm hochladen. Hier findest Du eine Anleitung, wie Du eine [SFTP-Verbindung herstellst](/tutorials/gameserver/establish-sftp-connection).

> [!WARNING]
> Stelle sicher, dass die Mods mit Deiner aktuellen Serverversion kompatibel sind. Inkompatible Mods können dazu führen, dass Dein Server nicht mehr startet.

## Schritte

1. **Mods abonnieren**\
   Öffne den [Steam Workshop](https://steamcommunity.com/app/440900/workshop/) für Conan Exiles und abonniere die Mods, die Du auf Deinem Server nutzen möchtest. Steam lädt die Mods automatisch auf Deinen lokalen PC herunter.

2. **Mod-Dateien finden**\
   Die heruntergeladenen Mod-Dateien befinden sich auf Deinem PC im Ordner:

   ```text
   C:\Program Files (x86)\Steam\steamapps\workshop\content\440900
   ```

   In den nummerierten Unterordnern findest Du die `.pak`-Dateien – diese benötigst Du.

3. **Mods-Ordner erstellen**\
   Öffne Deinen Server im Datei-Browser und navigiere zum Ordner `ConanSandbox`. Erstelle dort einen neuen Ordner namens `Mods`.

4. **Mods hochladen**\
   Kopiere alle `.pak`-Dateien der gewünschten Mods in den `ConanSandbox/Mods`-Ordner.

5. **modlist.txt erstellen**\
   Erstelle im `ConanSandbox/Mods`-Ordner eine neue Datei namens `modlist.txt`. Füge jeden Mod mit einem Sternchen (*) am Anfang hinzu – jeder Mod in einer neuen Zeile:

   ```text
   *ModName1.pak
   *ModName2.pak
   *ModName3.pak
   ```

6. **Server neustarten**\
   Speichere die Datei und starte Deinen Server neu. Nach dem Neustart werden die Mods automatisch geladen.

> [!NOTE]
> Alle Spieler, die Deinem Server beitreten möchten, müssen dieselben Mods installiert haben.
