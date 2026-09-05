---
slug: "gamemode-aendern"
language: "de"
title: "So änderst Du den Gamemode auf einem Hytale Server"
description: "Gamemode auf einem Hytale Server ändern"
tags: []
date: "2026-01-15"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Gamemode ändern"
sort: 4
related: ["gameserver/hytale/add-admin", "gameserver/hytale/change-max-players", "gameserver/hytale/change-max-view-radius", "gameserver/hytale/change-motd"]
---

## Verfügbare Gamemodes

| Gamemode | Beschreibung |
| -------- | ------------ |
| Adventure | Überlebe in der Wildnis, sammle Ressourcen und stelle Dich Gegnern |
| Creative | Baue ohne Grenzen mit unbegrenzten Ressourcen und ohne Schaden |

## So änderst Du den Gamemode eines Spielers

1. **Server starten**\
   Stelle sicher, dass Dein Server läuft.

2. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Hytale-Servers.

3. **Befehl eingeben**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   gamemode <adventure/creative> <Spielername>
   ```

> [!TIP]
> **Hinweis**
>
> Der Spieler muss online auf dem Server sein.

4. **Im Spiel**\
   Der Befehl kann auch von Admins direkt im Spiel verwendet werden:

   ```text
   /gamemode <adventure/creative> <Spielername>
   ```

## So änderst Du den Standard-Gamemode

> [!TIP]
> **Hinweis**
>
> Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Gamemode ändern**\
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`.

4. **Server starten**\
   Starte Deinen Server.

## So änderst Du den Standard-Gamemode für hochgeladene Welten

> [!TIP]
> **Hinweis**
>
> Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/default/
   ```

3. **config.json öffnen**\
   Öffne die Datei `config.json` in diesem Ordner.

4. **Gamemode ändern**\
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`.

5. **Server starten**\
   Starte Deinen Server.
