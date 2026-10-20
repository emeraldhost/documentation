---
slug: "datenbank-erstellen"
language: "de"
title: "So erstellst Du eine Datenbank und greifst auf phpMyAdmin zu"
description: "MySQL-Datenbank für Deinen Gameserver erstellen und mit phpMyAdmin verwalten"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenbank erstellen"
sort: 2
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/steamid64-find-out"]
---

Du kannst für Deinen Gameserver eigene MySQL-Datenbanken anlegen, zum Beispiel für Plugins, Mods oder Web-Oberflächen. Die Zugangsdaten wie Host, Port und Benutzer kopierst Du direkt aus der Verwaltung, und über phpMyAdmin verwaltest Du Deine Datenbank bequem im Browser.

## Datenbank erstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Datenbanken öffnen**\
   Klicke in der linken Seitenleiste auf **Datenbanken**.

3. **Neue Datenbank anlegen**\
   Klicke auf **Datenbank erstellen**. Es öffnet sich der Dialog **Datenbank erstellen**.

4. **Datenbankname eintragen**\
   Trage im Pflichtfeld **Datenbankname** einen Namen für Deine Datenbank ein, z.B. `plugins`. Der Name darf höchstens 48 Zeichen lang sein.

5. **Fernzugriff festlegen**\
   Im Feld **Fernzugriff** legst Du fest, von welchen IP-Adressen aus Verbindungen zur Datenbank erlaubt sind. Standardmäßig steht hier `%` – damit sind Verbindungen von jeder IP-Adresse erlaubt.

6. **Erstellen**\
   Klicke auf **Datenbank erstellen**. Die neue Datenbank erscheint anschließend in der Tabelle.

> [!NOTE]
> Wie viele Datenbanken Du noch anlegen kannst, zeigt Dir das Badge oben auf der Seite, z.B. „noch 3 von 3 Datenbanken möglich“. Brauchst Du mehr, kannst Du über **Datenbank-Plätze erweitern** weitere Plätze hinzubuchen.

## Zugangsdaten verwenden

In der Tabelle auf der Seite **Datenbanken** siehst Du zu jeder Datenbank diese Spalten:

| Spalte | Bedeutung |
| --- | --- |
| **Datenbankname** | Name der Datenbank |
| **Benutzername** | Benutzer für die Anmeldung an der Datenbank |
| **Passwort** | Passwort des Datenbank-Benutzers |
| **Datenbank-Host** | Adresse des Datenbankservers |
| **Fernzugriff** | Erlaubte IP-Adressen (z.B. `%`) |
| **phpMyAdmin** | Öffnet phpMyAdmin im Browser |

Die Zugangsdaten kannst Du direkt aus der Tabelle kopieren und in die Konfiguration Deines Plugins oder Deiner Mod eintragen. Verwende den Port, den die Verwaltung anzeigt (MySQL-Standard ist `3306`).

Auf der Seite **Datenbanken** kannst Du das Passwort einer Datenbank außerdem jederzeit rotieren, also durch ein neues ersetzen.

> [!WARNING]
> Nachdem Du das Passwort rotiert hast, musst Du es überall aktualisieren, wo die Datenbank verwendet wird. Sonst können sich Deine Plugins oder Mods nicht mehr verbinden.

> [!NOTE]
> Viele Java-basierte Anwendungen, zum Beispiel Minecraft-Plugins, erwarten die Verbindungsdaten als JDBC-URL. Diese setzt sich aus Host, Port und Datenbankname zusammen, z.B. `jdbc:mysql://<Host>:<Port>/<Datenbankname>`. Benutzername und Passwort trägst Du in der Regel in eigene Felder ein.

## phpMyAdmin öffnen

1. **phpMyAdmin aufrufen**\
   Klicke in der Zeile Deiner Datenbank in der Spalte **phpMyAdmin** auf den Eintrag. phpMyAdmin öffnet sich direkt im Browser.

2. **Datenbank verwalten**\
   In phpMyAdmin kannst Du Tabellen ansehen und bearbeiten, SQL-Befehle ausführen sowie Daten importieren und exportieren. Falls phpMyAdmin nach Zugangsdaten fragt, verwende den **Benutzernamen** und das **Passwort** aus der Tabelle.

> [!TIP]
> Möchtest Du den Inhalt Deiner Datenbank separat sichern, exportiere ihn über phpMyAdmin als SQL-Datei.
