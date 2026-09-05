---
slug: "shifting-sands-einrichten"
language: "de"
title: "So richtest Du Shifting Sands auf Deinem Soulmask Server ein"
description: "Shifting Sands DLC auf einem Soulmask Server einrichten"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Shifting Sands einrichten"
sort: 14
related: ["gameserver/soulmask/kick-ban-players", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password", "gameserver/soulmask/change-save-interval"]
---

Mit dem **Shifting Sands** DLC kannst Du einen Server-Cluster einrichten, der es Spielern ermöglicht, zwischen der Basis-Map (Cloud Mist Forest) und der Shifting Sands Map zu reisen.

> [!WARNING]
> Für einen Cluster benötigst Du **zwei Soulmask Server** – einen für jede Map. Alle Spieler müssen das **Shifting Sands DLC** besitzen.

## Voraussetzungen

- Zwei Soulmask Server bei EmeraldHost
- Das Shifting Sands DLC für alle Spieler

## Haupt-Server konfigurieren (Cloud Mist Forest)

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines ersten Servers (Basis-Map).

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Server ID setzen**\
   Trage im Feld **[CROSS-MAP] SERVER ID** ein:

   ```text
   -serverid=1
   ```

4. **Broadcast Address setzen**\
   Trage im Feld **[CROSS-MAP] BROADCAST ADDRESS** ein:

   ```text
   -mainserverport=20000
   ```

5. **Cross-Server aktivieren**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) und bearbeite die Datei:

   ```text
   /WS/Saved/GameplaySettings/GameXishu.json
   ```

   Setze den Wert `KaiQiKuaFu` auf `1`.

6. **Server starten**\
   Speichere die Einstellungen und starte den Haupt-Server.

## Client-Server konfigurieren (Shifting Sands)

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines zweiten Servers (Shifting Sands).

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Server ID setzen**\
   Trage im Feld **[CROSS-MAP] SERVER ID** ein:

   ```text
   -serverid=2
   ```

4. **Broadcast Address setzen**\
   Trage im Feld **[CROSS-MAP] BROADCAST ADDRESS** ein:

   ```text
   -clientserverconnect=IP:Port
   ```

   Ersetze `IP:Port` durch die IP-Adresse des Haupt-Servers und den **Game Port + 4**.

   > [!TIP]
   > **Beispiel**
   >
   > Wenn der Game Port des Haupt-Servers `8778` ist:
   >
   > ```text
   > -clientserverconnect=123.45.67.89:8782
   > ```

5. **Map ändern**\
   Stelle sicher, dass die Map auf **DLC_Level01_Main** (Shifting Sands) gesetzt ist.

6. **Cross-Server aktivieren**\
   Bearbeite auch auf diesem Server die `GameXishu.json` per [SFTP](/tutorials/gameserver/establish-sftp-connection) und setze `KaiQiKuaFu` auf `1`.

7. **Server starten**

   Speichere die Einstellungen und starte den Client-Server.

## Zwischen Maps reisen

Spieler können ingame über die **mysteriöse Insel** ein Portal-Terminal nutzen, um zwischen den Maps zu wechseln.

> [!NOTE]
> Nur Charaktere, die nicht der erste erstellte Charakter sind, können zwischen Servern transferiert werden.

> [!IMPORTANT]
> Der Haupt-Server muss immer **zuerst gestartet** und **zuletzt gestoppt** werden, um Verbindungsfehler zu vermeiden.
