---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Don’t Starve Together Server hinzu"
description: "Admin auf einem Don’t Starve Together Server hinzufügen"
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
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/dont-starve-together/add-mods", "gameserver/dont-starve-together/add-savegame", "gameserver/dont-starve-together/create-backup", "gameserver/dont-starve-together/download-savegame"]
---

Admins werden auf Deinem Server über die Datei `adminlist.txt` festgelegt. Dort trägst Du die Klei-User-ID jedes Spielers ein, der Admin-Rechte bekommen soll.

> [!WARNING]
> Don’t Starve Together verwendet **keine** SteamID64 für Admins, sondern die Klei-User-ID. Sie beginnt bei Online-Servern immer mit `KU_`.

## Klei-User-ID herausfinden

Du hast mehrere Möglichkeiten, Deine Klei-User-ID zu finden:

- **Im Spiel:** Klicke im Hauptmenü auf **Account**. Es öffnet sich die Kontoseite in Deinem Browser, auf der die User-ID steht.
- **Im Browser:** Melde Dich unter [accounts.klei.com](https://accounts.klei.com/account/info) mit Deinem Steam-Konto an. Deine User-ID steht in der Kontoübersicht.
- **Über die Konsole:** Drücke im Spiel `~` und gib folgenden Befehl ein:

  ```text
  TheNet:GetUserID()
  ```

- **Für andere Spieler:** Bist Du bereits Admin, listet Dir dieser Konsolenbefehl alle Spieler mit ihrer User-ID auf:

  ```text
  c_listallplayers()
  ```

  Die Ausgabe hat das Format `[1] (KU_xxxxxxxx) SpielerName <charakter>`.

> [!TIP]
> Du findest die User-ID auch serverseitig: In den Shard-Ordnern `Master` und `Caves` liegt die Datei `server_chat_log.txt`. Vor jeder Chat-Nachricht steht die Klei-User-ID des Spielers, der sie geschrieben hat.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Cluster-Ordner öffnen**\
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist Dein Cluster-Ordner.

4. **adminlist.txt öffnen**\
   Öffne dort die Datei `adminlist.txt`. Existiert sie noch nicht, lege sie neu an:

   ```text
   <Cluster-Ordner>/adminlist.txt
   ```

5. **User-IDs eintragen**\
   Trage pro Zeile genau eine Klei-User-ID ein – ohne Kommas und ohne Anführungszeichen:

   ```text
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server. Erst beim Start liest der Server die `adminlist.txt` neu ein.

> [!NOTE]
> Die Datei liegt im Cluster-Ordner, also auf derselben Ebene wie `cluster.ini` – nicht in den Shard-Ordnern `Master` oder `Caves`. Sie gilt automatisch für alle Shards Deines Servers.

> [!TIP]
> Läuft Dein Server im Offline-Modus, beginnen die User-IDs stattdessen mit `OU_` und bestehen nur aus Ziffern. Das Format der Datei bleibt gleich.
