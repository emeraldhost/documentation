---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Sons Of The Forest Server hinzu"
description: "Admin auf einem Sons Of The Forest Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/download-savegame", "gameserver/sons-of-the-forest/join-server"]
---

Admin-Rechte werden bei Sons Of The Forest über die Datei `ownerswhitelist.txt` vergeben. Jeder Spieler, dessen SteamID64 dort eingetragen ist, gilt als Server-Owner und kann den Server direkt im Spiel verwalten.

> [!NOTE]
> Es gibt keinen Ingame-Befehl, um jemanden zum Admin zu machen. Die Vergabe erfolgt ausschließlich über die Datei auf dem Server.

## SteamID64 herausfinden

Du benötigst die **SteamID64** jedes gewünschten Admins. Das ist eine rein numerische, 17-stellige Zahl (z.B. `76561198000000000`). Wie Du sie findest, erklärt die Anleitung [SteamID64 herausfinden](/tutorials/gameserver/steamid64-find-out).

> [!IMPORTANT]
> Custom-URLs, Steam-Nicknames oder kürzere ID-Formate funktionieren nicht. Ein falsches Format führt zu keiner Fehlermeldung – der Eintrag wird stillschweigend ignoriert und der Spieler bleibt ohne Admin-Rechte.

## Admin eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Datei wird nur beim Start eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne folgende Datei zum Bearbeiten:

   ```text
   /serverconfig/ownerswhitelist.txt
   ```

4. **SteamID64 eintragen**\
   Trage jede SteamID64 in einer eigenen Zeile ein – ohne Kommas, ohne Anführungszeichen und ohne Leerzeichen. Zeilen, die mit `#` beginnen, sind Kommentare und werden ignoriert.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > # Max
   > 76561198000000000
   > # Lisa
   > 76561198111111111
   > ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Admin-Funktionen im Spiel nutzen

1. **Server beitreten**\
   Tritt Deinem Server mit dem Steam-Account bei, dessen SteamID64 Du eingetragen hast.

2. **Admin-Menü öffnen**\
   Drücke `ESC` und wechsle auf den Reiter **Players**. Dort werden Dir alle verbundenen Spieler mit den Verwaltungsfunktionen angezeigt.

3. **Cheat-Panel öffnen (optional)**\
   Öffne mit `Enter` den Chat, tippe `cheatstick` ein und bestätige mit `Enter`. Anschließend öffnest Du das Panel mit `F1`.

   > [!NOTE]
   > Die Eingabe von `cheatstick` wird im Chat nicht angezeigt. Achte auf die korrekte Klein-/Großschreibung und tippe den Befehl blind ein.

> [!WARNING]
> Der Befehl `cheatstick` wird nur mit einem US-Tastaturlayout zuverlässig erkannt. Funktioniert die Eingabe nicht, prüfe die Tastatursprache Deines Systems.
