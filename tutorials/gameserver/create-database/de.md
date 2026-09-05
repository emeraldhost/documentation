---
slug: "datenbank-erstellen"
language: "de"
title: "So erstellst Du eine Datenbank und greifst auf phpMyAdmin zu"
description: "Datenbank erstellen und auf phpMyAdmin zugreifen"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenbank erstellen"
sort: 2
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

Du kannst für Deinen Gameserver eigene MySQL-Datenbanken anlegen, zum Beispiel für Plugins, Mods oder Web-Oberflächen. Über phpMyAdmin kannst Du Deine Datenbank anschließend komfortabel im Browser verwalten.

## Datenbank erstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Datenbanken öffnen**\
   Klicke in der linken Seitenleiste auf **Datenbanken**.

3. **Neue Datenbank anlegen**\
   Klicke oben rechts auf das **Plus-Symbol**, um eine neue Datenbank zu erstellen.

4. **Name festlegen**\
   Trage einen Namen für Deine Datenbank ein (z.B. `test`) und klicke auf **Datenbank erstellen**.

   > [!NOTE]
   > Im Feld **Verbindungen von** kannst Du optional einschränken, von welchen IPs Verbindungen zur Datenbank zugelassen werden. Lasse das Feld leer oder auf `%`, um Verbindungen von überall zuzulassen.

## Verbindungsdaten anzeigen

Klicke neben Deiner Datenbank auf das **Augen-Symbol**, um alle Verbindungsdaten einzusehen:

- **Datenbank Host** (z.B. `db1.cgn1.emeraldhost.de`)
- **Datenbank Port** (Standard: `3306`)
- **Datenbank Benutzername**
- **Datenbank Passwort**
- **Datenbank Name**
- **JDBC Connection String**

> [!NOTE]
> Der **JDBC Connection String** bündelt alle Verbindungsdaten in einer Zeile und wird von Java-basierten Anwendungen (z.B. vielen Minecraft-Plugins) zur direkten Verbindung genutzt.

Über den Button **Neues Passwort generieren** kannst Du jederzeit ein neues Passwort für die Datenbank erstellen lassen.

## phpMyAdmin öffnen

1. **phpMyAdmin aufrufen**\
   Klicke neben Deiner Datenbank auf das **External-Symbol** (Pfeil nach außen). Du wirst zur phpMyAdmin-Anmeldeseite weitergeleitet.

2. **Zugangsdaten eingeben**\
   Trage den **Datenbank Benutzernamen** und das **Datenbank Passwort** ein und klicke auf **Anmeldung**. Die Zugangsdaten findest Du über das Augen-Symbol neben Deiner Datenbank.

## Datenbank löschen

Klicke neben Deiner Datenbank auf das **Mülleimer-Symbol**, um die Datenbank samt Inhalt zu löschen.

> [!WARNING]
> Das Löschen der Datenbank kann nicht rückgängig gemacht werden. Alle gespeicherten Daten gehen dabei verloren. Erstelle bei Bedarf vorher ein Backup über phpMyAdmin.
