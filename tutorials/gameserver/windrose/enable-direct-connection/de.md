---
slug: "direktverbindung-aktivieren"
language: "de"
title: "So aktivierst Du die Direktverbindung auf Deinem Windrose Server"
description: "Direktverbindung (UseDirectConnection) auf einem Windrose Server aktivieren"
tags: []
date: "2026-05-01"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Direktverbindung aktivieren"
sort: 2
related: ["gameserver/windrose/create-backup", "gameserver/windrose/download-savegame", "gameserver/windrose/join-server", "gameserver/windrose/set-invite-code"]
---

Mit der Option `UseDirectConnection` können sich Spieler direkt über die IP-Adresse und den Port mit Deinem Server verbinden, ohne den Invite Code zu verwenden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ServerDescription.json öffnen**\
   Öffne die Datei `ServerDescription.json` unter:

   ```text
   /R5/ServerDescription.json
   ```

4. **UseDirectConnection anpassen**\
   Setze `UseDirectConnection` auf `true` und passe die folgenden Felder an:
   - `DirectConnectionServerAddress` – die Host-IP Deines Servers
   - `DirectConnectionServerPort` – der Standard Game Port Deines Servers (wird von uns bereits standardmäßig gesetzt)
   - `DirectConnectionProxyAddress` – bleibt auf `0.0.0.0`

   ```text
   "UseDirectConnection": true,
   "DirectConnectionServerAddress": "DEINE_HOST_IP",
   "DirectConnectionServerPort": DEIN_GAME_PORT,
   "DirectConnectionProxyAddress": "0.0.0.0"
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Per Direktverbindung beitreten

Sobald `UseDirectConnection` aktiviert ist, können Spieler Deinen Server direkt über die IP-Adresse erreichen.

1. **Windrose starten**\
   Starte Windrose.

2. **Spielen auswählen**\
   Klicke im Hauptmenü auf **Spielen**.

3. **Mit Server verbinden**\
   Wähle die Option **Mit Server verbinden** aus.

4. **IP-Adresse eingeben**\
   Trage die IP-Adresse und den Port Deines Servers im Format `IP:Port` ein und bestätige.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:7777
   > ```

> [!NOTE]
> Wenn `UseDirectConnection` aktiviert ist, können sich Spieler weiterhin über den Invite Code verbinden. Zusätzlich steht die Direktverbindung über IP-Adresse und Port zur Verfügung.
