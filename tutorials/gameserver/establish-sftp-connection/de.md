---
slug: "sftp-verbindung-herstellen"
language: "de"
title: "SFTP-Verbindung mit Deinem Gameserver herstellen"
description: "Schritt-für-Schritt-Anleitung, wie Du Dich per SFTP mit Deinem Server verbindest, um Dateien zu bearbeiten, hochzuladen oder zu löschen."
tags: []
date: "2025-06-24"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "SFTP-Verbindung Herstellen"
sort: 1
related: ["gameserver/use-file-browser", "gameserver/create-backup", "gameserver/create-database", "gameserver/steamid64-find-out"]
---

1. **Dashboard öffnen**\
   Öffne Dein Dashboard und wähle Deinen Server aus.

2. **Datei-Browser öffnen**\
   Gehe in der Verwaltung Deines Servers zum **Datei-Browser** (Seite **Dateimanager**).

3. **Zugangsdaten ablesen**\
   Ganz oben findest Du vier Karten mit Deinen SFTP-Zugangsdaten: **FTP Server**, **FTP Port** (z.B. `2022`), **FTP Benutzername** und **FTP Passwort**.

4. **Passwort anzeigen**\
   Das Passwort ist verdeckt. Klicke auf das Augen-Symbol in der Karte **FTP Passwort**, um es anzuzeigen. Über das grüne Symbol oben rechts in der Karte setzt Du bei Bedarf ein neues Passwort.

5. **SFTP-Programm öffnen**\
   Öffne ein SFTP-Programm Deiner Wahl, zum Beispiel [FileZilla](https://filezilla-project.org/) oder [WinSCP](https://winscp.net/index.php).

6. **Zugangsdaten einfügen**\
   Füge dort die Zugangsdaten ein:

   - **Server:** Die Adresse aus der Karte **FTP Server**.
   - **Benutzername:** Der Wert aus der Karte **FTP Benutzername**.
   - **Passwort:** Der Wert aus der Karte **FTP Passwort**.
   - **Port:** Der Wert aus der Karte **FTP Port**, z.B. `2022`.

   Enthält die Adresse bereits einen Port nach dem `:`, trägst Du nur den Teil davor als Server ein.

7. **Dateien verwalten**\
   Jetzt kannst Du auf alle Dateien Deines Servers zugreifen, bearbeiten, löschen oder neue Dateien hochladen.

> [!TIP]
> Für kleinere Änderungen brauchst Du kein SFTP-Programm: Im [Datei-Browser](/tutorials/gameserver/use-file-browser) kannst Du Dateien auch direkt im Dashboard bearbeiten und hochladen.
