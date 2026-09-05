---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Don’t Starve Together Server"
description: "Spieler auf einem Don’t Starve Together Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dont-starve-together"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame", "gameserver/dont-starve-together/join-server"]
---

Don’t Starve Together bringt Kick- und Ban-Funktionen direkt mit. Du kannst sie bequem über die Spielerliste im Spiel nutzen, per Konsolenbefehl ausführen oder die Bannliste direkt auf dem Server bearbeiten.

> [!NOTE]
> Du benötigst Admin-Rechte, um Spieler kicken oder bannen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/dont-starve-together/add-admin).

## Über die Spielerliste im Spiel

1. **Server beitreten**\
   Tritt Deinem Server als Admin bei.

2. **Spielerliste öffnen**\
   Halte die Taste `TAB` gedrückt, um die Spielerliste einzublenden.

3. **Spieler kicken**\
   Klicke neben dem Spieler auf das Schuh-Symbol, um ihn vom Server zu werfen.

4. **Spieler bannen**\
   Klicke neben dem Spieler auf das Hammer-Symbol, um ihn dauerhaft auszuschließen.

## Über die Konsole

1. **Konsole öffnen**\
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. **Spieler auflisten**\
   Lasse Dir alle Spieler mit ihrer Klei-User-ID anzeigen:

   ```text
   c_listallplayers()
   ```

3. **Spieler kicken**\
   Der Spieler wird vom Server entfernt, kann aber wieder beitreten:

   ```text
   TheNet:Kick("KU_xxxxxxxx")
   ```

4. **Spieler bannen**\
   Der Spieler wird dauerhaft ausgeschlossen:

   ```text
   TheNet:Ban("KU_xxxxxxxx")
   ```

5. **Zeitlich begrenzt bannen**\
   Der zweite Wert ist die Dauer in Sekunden – `120` entspricht also zwei Minuten:

   ```text
   TheNet:BanForTime("KU_xxxxxxxx", 120)
   ```

## Bannliste bearbeiten

Alle Banns werden in der Datei `blocklist.txt` im Cluster-Ordner gespeichert. Bannst Du einen Spieler im Spiel, wird seine Klei-User-ID automatisch dort ergänzt. Du kannst die Datei aber auch selbst bearbeiten.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **blocklist.txt öffnen**\
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt, und öffne dort die Datei:

   ```text
   <Cluster-Ordner>/blocklist.txt
   ```

4. **Einträge anpassen**\
   Trage pro Zeile genau eine Klei-User-ID ein – ohne Kommas und ohne Anführungszeichen. Zum Entbannen entfernst Du die entsprechende Zeile:

   ```text
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Erst beim Start liest der Server die `blocklist.txt` neu ein.

> [!WARNING]
> Bearbeite die `blocklist.txt` nur bei gestopptem Server. Läuft der Server, kann er die Datei überschreiben und Deine Änderungen gehen verloren.

> [!TIP]
> **Klei-User-ID finden**
>
> Wie Du die `KU_`-ID eines Spielers herausfindest, steht in der Anleitung [Admin hinzufügen](/tutorials/gameserver/dont-starve-together/add-admin).

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `c_listallplayers()` | Alle Spieler mit User-ID auflisten |
| `TheNet:Kick("KU_xxxxxxxx")` | Spieler kicken |
| `TheNet:Ban("KU_xxxxxxxx")` | Spieler dauerhaft bannen |
| `TheNet:BanForTime("KU_xxxxxxxx", 120)` | Spieler für 120 Sekunden bannen |
| `c_announce("Text")` | Nachricht an alle Spieler senden |
| `c_save()` | Welt sofort speichern |
