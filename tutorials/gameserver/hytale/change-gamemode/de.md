---
slug: "gamemode-aendern"
language: "de"
title: "So änderst Du den Gamemode auf einem Hytale Server"
description: "Gamemode auf einem Hytale Server ändern"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
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

> [!NOTE]
> Der Spieler muss online auf dem Server sein. Statt `adventure` und `creative` kannst Du auch die Kurzformen `a` und `c` verwenden, statt `gamemode` auch `gm` (z.B. `gm c Spielername`).

4. **Im Spiel**\
   Der Befehl kann auch von Admins direkt im Spiel verwendet werden:

   ```text
   /gamemode <adventure/creative> <Spielername>
   ```

   Lässt Du den Spielernamen weg, änderst Du Deinen eigenen Gamemode (z.B. `/gamemode creative`).

## So änderst Du den Standard-Gamemode

> [!NOTE]
> Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfigurationsdatei öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. **Gamemode ändern**\
   Suche im Abschnitt `Defaults` nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`:

   ```json
   "GameMode": "Creative",
   ```

4. **Server starten**\
   Starte Deinen Server.

## So änderst Du den Standard-Gamemode für hochgeladene Welten

> [!NOTE]
> Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden. Ist in der Welt ein Gamemode eingetragen, hat er Vorrang vor dem Standard-Gamemode aus der `config.json` im Hauptverzeichnis.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Welt-Konfiguration öffnen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und navigiere zu:

   ```text
   /universe/worlds/default/
   ```

   Ersetze `default` durch den Namen Deiner Welt, falls sie anders heißt.

3. **config.json öffnen**\
   Öffne die Datei `config.json` in diesem Ordner.

4. **Gamemode ändern**\
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`. Neue Welten enthalten diesen Eintrag standardmäßig nicht. Füge ihn in diesem Fall in einer neuen Zeile hinzu, z.B. direkt über `"IsSpawningNPC"`:

   ```json
   "GameMode": "Creative",
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Alternativ kannst Du den Gamemode einer Welt bei laufendem Server per Konsole festlegen, z.B. `world settings gamemode set creative --world default`. Mit `world settings gamemode reset --world default` setzt Du ihn wieder zurück.
