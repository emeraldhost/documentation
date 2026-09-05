---
slug: "sftp-verbindung-herstellen"
language: "de"
title: "SFTP-Verbindung mit Deinem Gameserver herstellen"
description: "Schritt-für-Schritt-Anleitung, wie Du Dich per SFTP mit Deinem Server verbindest, um Dateien zu bearbeiten, hochzuladen oder zu löschen."
tags: []
date: "2025-06-24"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "SFTP-Verbindung Herstellen"
sort: 1
related: ["gameserver/create-database", "gameserver/create-backup", "gameserver/epicgamesid-find-out", "gameserver/steamid64-find-out"]
---

1. **Dashboard öffnen**\
   Öffne Dein Dashboard und wähle Deinen Server aus.

2. **Übersicht aufrufen**\
   Gehe zum Bereich „Übersicht“.

3. **Zugangsdaten anzeigen**\
   Klicke rechts unter „SFTP“ auf „Zugangsdaten anzeigen“.

4. **Zugangsdaten kopieren**\
   Es erscheint ein Modal mit Deinen SFTP-Zugangsdaten.

5. **SFTP-Programm öffnen**\
   Öffne ein SFTP-Programm Deiner Wahl, zum Beispiel [FileZilla](https://filezilla-project.org/) oder [WinSCP](https://winscp.net/index.php).

6. **Zugangsdaten einfügen**\
   Füge dort die angezeigten Zugangsdaten ein:

   - **Server:** Die angezeigte Server-Adresse.
   - **Benutzername:** Dein Benutzername.
   - **Passwort:** Dein Passwort.
   - **Port:** Der Port wird automatisch gesetzt. Falls nicht, findest Du ihn hinter der Server-Adresse, nach dem `:` (z. B. `sftp://example.emeraldhost.de:2022`).

7. **Dateien verwalten**\
   Jetzt kannst Du auf alle Dateien Deines Servers zugreifen, bearbeiten, löschen oder neue Dateien hochladen.
