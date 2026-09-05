---
slug: "scripts-hinzufuegen"
language: "de"
title: "So fügst Du Scripts zu Deinem RAGE:MP Server hinzu"
description: "Scripts auf einem RAGE:MP Server hinzufügen"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "gameserver"
product_keys: ["ragemp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Scripts hinzufügen"
sort: 1
related: ["gameserver/ragemp/create-backup", "gameserver/ragemp/join-server"]
---

Du kannst serverseitige und clientseitige Scripts auf Deinem RAGE:MP Server installieren.

## Ordnerstruktur

RAGE:MP verwendet zwei Ordner für Scripts:

| Ordner | Beschreibung |
|--------|-------------|
| `packages/` | Serverseitige Scripts (Logik, Datenbank, Authentifizierung) |
| `client_packages/` | Clientseitige Scripts (UI, Rendering, Eingaben) |

## Scripts hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Scripts hochladen**\
   Lade die Scripts in den passenden Ordner hoch:

   - **Serverseitige Scripts** in den Ordner `packages/`
   - **Clientseitige Scripts** in den Ordner `client_packages/`

   > [!NOTE]
   > **Beispiel**
   >
   > ```text
   > /
   > ├── packages/
   > │   └── mein-gamemode/
   > │       └── index.js
   > └── client_packages/
   >     └── index.js
   > ```

4. **Server starten**\
   Starte Deinen Server.

> [!NOTE]
> Serverseitige Scripts werden in einem eigenen Unterordner innerhalb von `packages/` abgelegt. Jeder Unterordner benötigt eine `index.js`-Datei als Einstiegspunkt.

> [!WARNING]
> Clientseitige Scripts werden automatisch an alle Spieler heruntergeladen, die dem Server beitreten. Achte darauf, keine sensiblen Daten in `client_packages/` abzulegen.
