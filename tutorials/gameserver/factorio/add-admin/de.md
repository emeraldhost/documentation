---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Factorio Server hinzu"
description: "Admin auf einem Factorio Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/factorio/add-mods", "gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

Admins dürfen auf Deinem Server Befehle wie `/kick`, `/ban` oder `/config` ausführen. Ein Factorio-Server startet zunächst **ganz ohne Admins** – Du legst sie über die Serverkonsole oder über die Datei `server-adminlist.json` fest.

> [!NOTE]
> Als Admin wird der **factorio.com-Benutzername** eingetragen, mit dem der Spieler dem Server beitritt – **keine** SteamID64. Auch Spieler, die Factorio über Steam gekauft haben, besitzen einen verknüpften Factorio-Account.

## Admin über die Serverkonsole hinzufügen

1. **Serverkonsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

2. **Spieler befördern**\
   Gib folgenden Befehl ein – der Spieler sollte dazu auf dem Server sein:

   ```text
   /promote Benutzername
   ```

3. **Ergebnis prüfen**\
   Mit `/admins` lässt Du Dir alle eingetragenen Admins anzeigen.

> [!TIP]
> Der Befehl legt die Datei `server-adminlist.json` automatisch an und speichert die Änderung dauerhaft. Der Admin-Status bleibt also auch nach einem Neustart erhalten.

## Admin über die Datei server-adminlist.json hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen oder anlegen**\
   Öffne im Hauptverzeichnis Deines Servers – dort, wo auch die Datei `factorio-current.log` liegt – die Datei `server-adminlist.json`. Existiert sie noch nicht, lege sie an.

4. **Benutzernamen eintragen**\
   Trage die Benutzernamen als einfache Liste ein:

   ```json
   [
     "Spieler1",
     "Spieler2"
   ]
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Admin-Liste nicht lädt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Trage die Admins **nicht** in der Datei `data/server-settings.json` ein. Das dortige Feld `admins` wird von einem Headless-Server ignoriert – es funktioniert nur die Serverkonsole bzw. die Datei `server-adminlist.json`.

## Admin-Rechte entziehen

Öffne die Serverkonsole und gib folgenden Befehl ein:

```text
/demote Benutzername
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/promote <Benutzername>` | Spieler zum Admin machen |
| `/demote <Benutzername>` | Admin-Rechte entziehen |
| `/admins` | Alle Admins anzeigen |

> [!NOTE]
> Standardmäßig ist auf einem Factorio-Server `allow_commands` auf `admins-only` gesetzt. Befehle können also nur Admins ausführen.
