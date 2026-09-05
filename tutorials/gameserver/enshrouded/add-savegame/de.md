---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Enshrouded Server hinzu"
description: "Anleitung zum Hochladen Deiner Eigenen Welt auf einen Enshrouded-Server"
tags: []
date: "2024-03-05"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 6
related: ["gameserver/enshrouded/add-admin", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

## Voraussetzungen

- Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  - Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Schritte

1. **Dateien erkennen**\
   Links siehst Du Deine lokalen Dateien, rechts die Dateien Deines Servers.

2. **Dateien vorbereiten**\
   Lokalisiere Deine Enshrouded-Spielspeicherdateien auf Deinem Computer. Diese befinden sich typischerweise im Steam `userdata` Ordner unter: `C:\Program Files (x86)\Steam\userdata\[DeineSteamID]\1203620\remote`.
   - Ersetze `[DeineSteamID]` mit Deiner SteamID64.
   - Identifiziere die für Deine Welt repräsentativen Dateien, üblicherweise benannt wie `3bd85c7d` und `3bd85c7d_info`.

3. **Dateien umbenennen**\
   Benenne die Dateien für die Kompatibilität mit Deinem Server um. `3bd85c7d` sollte in `3ad85aea` umbenannt werden und `3bd85c7d_info` in `3ad85aea_info`.

4. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung, um zu verhindern, dass der Server Deinen Upload automatisch überschreibt.

5. **Speicherordner navigieren**\
   Navigiere zu Speicherordner `savegame`.
   - Falls Du den Standardordner geändert hast, navigiere zum von Dir gewählten Ordner für die Speicherungen.

6. **Dateien hochladen**\
   Übertrage die umbenannten Dateien (`3ad85aea` und `3ad85aea_info`) von Deinem Computer in das Speicherverzeichnis des Servers, wobei bei Bedarf vorhandene Dateien ersetzt werden.

7. **Server neu starten**\
   Starte Deinen Enshrouded Server neu. Dein Server sollte nun Deine Welt laden, sodass Du Dein Abenteuer dort fortsetzen kannst, wo Du aufgehört hast. Alle Fortschritte bleiben erhalten und sind nun mit Freunden oder der Gemeinschaft teilbar.

Jetzt kannst Du Dein Enshrouded-Abenteuer auf dem Server fortsetzen! Mit diesen Schritten solltest Du Deinen Enshrouded-Spielstand erfolgreich auf den Server übertragen können.
