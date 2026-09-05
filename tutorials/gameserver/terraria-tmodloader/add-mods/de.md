---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Terraria tModLoader Server hinzu"
description: "Installation von Mods auf einem Terraria: tModloader Server"
tags: []
date: "2023-10-15"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["terraria-tmodloader"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/terraria-tmodloader/add-admin", "gameserver/terraria-tmodloader/add-savegame", "gameserver/terraria-tmodloader/add-world", "gameserver/terraria-tmodloader/create-backup"]
---

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. **Mods herunterladen**\
   Suche und lade die gewünschten Mods (`.tmod-Dateien`) von der offiziellen tModloader-Webseite oder einer anderen vertrauenswürdigen Quelle herunter.

    > [!WARNING]
    > Bitte achte darauf, dass die Mods für Deine aktuelle Serverversion kompatible sind. Es kann passieren, dass ansonsten Dein Gameserver nicht mehr startet.

2. **Mods hochladen**\
   Stelle eine Verbindung über SFTP (bspw. über FileZilla oder WinSCP) zum Server her.
    - Erstelle einen Ordner namens „**mods**“ im Terraria-Serververzeichnis (normalerweise `/home/mods`).
    - Lade die heruntergeladenen Mods (`.tmod-Dateien`) per SFTP in den „**mods**“ Ordner auf Deinem Server.
    - Erstelle eine neue Datei namens „**enabled.json**“ in dem „**mods**“ Ordner auf Deinem Server.
    - Kopiere den folgenden Text und füge diesen in die Datei „**enabled.json**“ ein:

      enabled.json Beispiel:

      ```text
      [
      "ModName",
      "ModName"
      ]
      ```

      Ersetze alle Einträge mit „**ModName**“ mit Deinen Mod Dateinamen (Beispiel: Heißt die Mod-Datei **Calamity** dann trage unter **ModName** diesen Namen ein.)

      > [!WARNING]
      > Stelle sicher, dass Du ein Komma an allen Punkten bis auf den letzten Punkt anhängst, wenn Du eine weitere Mod hinzufügen willst, um ihn einzubeziehen.

3. **Server starten**\
   Gehe zurück zur Verwaltung und starte Deinen Terraria-Server.
   - Verbinde Dich über das Terraria-Spiel mit Deinem Server und überprüfe, ob die Mods korrekt geladen wurden.

4. **Mods aktivieren**\
   Stelle sicher, dass alle Spieler, die Deinem Server beitreten möchten, dieselben Mods installiert und aktiviert haben, damit sie problemlos auf dem Server spielen können.

Das war's! Mit diesen Schritten solltest Du in der Lage sein, Mods auf Deinem Terraria: tModloader Server zu installieren und zu verwenden.
