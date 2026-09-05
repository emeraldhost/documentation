---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem V Rising Server"
description: "Spieler auf einem V Rising Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 15
related: ["gameserver/v-rising/enable-server-list", "gameserver/v-rising/fix-eos-notready-error", "gameserver/v-rising/join-server", "gameserver/v-rising/set-server-password"]
---

Du kannst Spieler per Ingame-Konsolenbefehl oder über die `banlist.txt` kicken und bannen.

> [!NOTE]
> Du benötigst Admin-Rechte, um Spieler zu kicken und zu bannen. Siehe [Admin hinzufügen](/tutorials/gameserver/v-rising/add-admin).

## Spieler per Konsole kicken und bannen

1. **Konsole öffnen**\
   Drücke die Backtick-Taste (`` ` ``), um die Admin-Konsole zu öffnen.

2. **Befehle verwenden**\
   Verwende einen der folgenden Befehle:

   **Spieler kicken:**

   ```text
   kick <Name>
   ```

   **Spieler bannen (nach Name):**

   ```text
   banuser <Name>
   ```

   **Spieler bannen (nach Charakter):**

   ```text
   bancharacter <Name>
   ```

   **Spieler entbannen:**

   ```text
   unban <Name>
   ```

## Spieler über banlist.txt bannen (Alternative)

Du kannst Spieler auch manuell über die Banliste bannen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **banlist.txt öffnen**\
   Öffne die Datei `banlist.txt` unter:

   ```text
   /save-data/Settings/banlist.txt
   ```

4. **SteamID64 hinzufügen**\
   Füge die SteamID64 des Spielers in eine neue Zeile ein. Jede Zeile enthält eine SteamID64.

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Spieler entbannen

Verwende den Konsolenbefehl `unban <Name>` oder entferne die entsprechende SteamID64 aus der `banlist.txt` und starte den Server neu.
