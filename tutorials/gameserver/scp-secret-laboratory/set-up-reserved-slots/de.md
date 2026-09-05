---
slug: "reservierte-slots-einrichten"
language: "de"
title: "So richtest Du reservierte Slots auf Deinem SCP: Secret Laboratory Server ein"
description: "Reservierte Slots auf einem SCP: Secret Laboratory Server einrichten"
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
short_title: "Reservierte Slots einrichten"
sort: 10
related: ["gameserver/scp-secret-laboratory/kick-and-ban-players", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/set-up-server-info", "gameserver/scp-secret-laboratory/set-up-whitelist"]
---

Mit reservierten Slots kommen Spieler, die Du in eine Liste eingetragen hast – zum Beispiel Dein Team oder Deine Stammspieler – auch dann noch auf den Server, wenn er voll ist. Die Funktion besteht aus zwei Teilen: der Option `use_reserved_slots` in der Datei `config_gameplay.txt` und der Spielerliste in der Datei `UserIDReservedSlots.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zu den Konfigurationsdateien enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Reservierte Slots einrichten

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Reservierte Slots aktivieren**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `use_reserved_slots` und stelle sicher, dass er auf `true` steht – das ist bereits der Standardwert:

   ```text
   use_reserved_slots: true
   ```

5. **Spieler in die Liste eintragen**\
   Öffne im selben Port-Ordner die Datei `UserIDReservedSlots.txt`:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/UserIDReservedSlots.txt
   ```

   Trage jede ID in eine eigene Zeile ein. Steam-Spieler trägst Du im Format `SteamID64@steam` ein, Discord-Nutzer im Format `DiscordID@discord` – dasselbe Format wie beim [Whitelist einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist):

   ```text
   76561198012345678@steam
   123456789012345678@discord
   ```

   Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) kannst Du über die verlinkte Anleitung herausfinden.

6. **Server starten**\
   Speichere beide Dateien und starte Deinen Server über die Verwaltung, damit die Änderungen übernommen werden.

> [!NOTE]
> Reservierte Slots sind keine Whitelist: Eine [Whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist) sperrt den Server für alle, die nicht eingetragen sind. Reservierte Slots lassen dagegen weiterhin jeden beitreten – eingetragene Spieler bekommen lediglich einen Platz freigehalten.

> [!TIP]
> Trage Dich selbst und Dein Team in die `UserIDReservedSlots.txt` ein – so kommt ihr auch zu Stoßzeiten auf den Server, etwa um zu moderieren.
