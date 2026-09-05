---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Factorio Server bei"
description: "Einem Factorio Server beitreten"
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
short_title: "Server beitreten"
sort: 6
related: ["gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame", "gameserver/factorio/kick-ban-players"]
---

Factorio hat keinen Steam-Server-Browser für Mietserver. Du verbindest Dich stattdessen direkt über die IP-Adresse und den Port Deines Servers.

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Factorio nutzt nur einen einzigen Port über **UDP** (Standard: `34197`) – einen separaten Query Port gibt es nicht.

## Über Connect to address

1. **Factorio starten**\
   Starte Factorio auf Deinem PC.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

3. **Connect to address wählen**\
   Klicke auf **Connect to address**.

4. **Serveradresse eintragen**\
   Gib die IP-Adresse und den Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:34197
   > ```

5. **Verbinden**\
   Bestätige die Eingabe. Ist auf dem Server ein Passwort gesetzt, wirst Du danach zur Eingabe aufgefordert.

## Über die öffentliche Serverliste

Ist Dein Server öffentlich gelistet, kannst Du ihn auch über **Multiplayer** → **Browse public games** suchen und beitreten.

> [!NOTE]
> Damit Dein Server dort erscheint, benötigst Du gültige factorio.com-Zugangsdaten. Trage sie in der Verwaltung unter **Einstellungen** in den Feldern **Server Benutzername** und **Server Token** ein. Der Token ist sicherer als das Passwort und lässt sich auf factorio.com in Deinem Profil abrufen.
>
> Zusätzlich muss in der Datei `data/server-settings.json` die Sichtbarkeit auf öffentlich stehen. Die Datei bearbeitest Du per [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> ```json
> "visibility":
> {
>   "public": true
> }
> ```
>
> Starte Deinen Server anschließend neu.

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht mehr startet.

> [!WARNING]
> Trage `username` und `token` nicht direkt in der Datei `data/server-settings.json` ein. Beide Werte werden bei jedem Serverstart aus den Feldern **Server Benutzername** und **Server Token** der Verwaltung überschrieben.

> [!IMPORTANT]
> Client und Server müssen **exakt dieselbe Spielversion** und **dieselben Mods** verwenden. Factorio prüft dies per Prüfsumme und verweigert die Verbindung, wenn etwas abweicht.

> [!NOTE]
> Standardmäßig ist auf einem Factorio-Server die Option `require_user_verification` aktiv. Spieler benötigen dadurch einen gültigen factorio.com-Account, um beitreten zu können.
