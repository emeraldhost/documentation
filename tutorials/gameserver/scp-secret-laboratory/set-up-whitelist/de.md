---
slug: "whitelist-einrichten"
language: "de"
title: "So richtest Du eine Whitelist auf Deinem SCP: Secret Laboratory Server ein"
description: "Whitelist auf einem SCP: Secret Laboratory Server einrichten"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Whitelist einrichten"
sort: 15
related: ["gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/use-remote-admin"]
---

Mit einer Whitelist können nur noch Spieler beitreten, die Du ausdrücklich eingetragen hast – ideal für private Community-Server oder Events. Die Whitelist besteht aus zwei Teilen: der Option `enable_whitelist` in der Datei `config_gameplay.txt` und der Spielerliste in der Datei `UserIDWhitelist.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zu den Konfigurationsdateien enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Whitelist einrichten

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Whitelist aktivieren**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `enable_whitelist` und ändere den Wert von `false` (Standard) auf `true`:

   ```text
   enable_whitelist: true
   ```

5. **Spieler in die Whitelist eintragen**\
   Öffne im selben Port-Ordner die Datei `UserIDWhitelist.txt`:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt
   ```

   Trage jede erlaubte ID in eine eigene Zeile ein. Steam-Spieler trägst Du im Format `SteamID64@steam` ein, Discord-Nutzer im Format `DiscordID@discord`. Zeilen, die mit `#` beginnen, sind Kommentare – praktisch, um Dir die Namen zu den IDs zu notieren:

   ```text
   # Max
   76561198012345678@steam
   # Moritz
   123456789012345678@discord
   ```

   Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) kannst Du über die verlinkte Anleitung herausfinden. Es ist dasselbe ID-Format, das Du auch beim [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks) verwendest.

6. **Server starten**\
   Speichere beide Dateien und starte Deinen Server über die Verwaltung.

> [!NOTE]
> Änderungen an der Whitelist werden erst nach einem Neustart des Servers übernommen – es gibt kein Hot-Reload.

> [!TIP]
> Trage auch Deine eigene ID in die `UserIDWhitelist.txt` ein, bevor Du die Whitelist aktivierst – sonst sperrst Du Dich selbst von Deinem Server aus.
