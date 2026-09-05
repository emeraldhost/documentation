---
slug: "admin-passwort-setzen"
language: "de"
title: "So setzt Du ein Admin Passwort auf Deinem Satisfactory Server"
description: "Admin Passwort auf einem Satisfactory Server setzen"
tags: []
date: "2026-04-12"
visibility: "public"
updated: "2026-07-31"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin Passwort setzen"
sort: 2
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-server-password"]
---

Das Admin Passwort brauchst Du, um Dich im Spiel als Administrator anzumelden. Du legst es im **Server Manager** fest – es steht in keiner Konfigurationsdatei, die Du per SFTP bearbeiten könntest.

> [!NOTE]
> Satisfactory speichert Servername, Admin Passwort und Server Passwort in einer Datei, die mit `ServerSettings.` beginnt und den Game Port Deines Servers im Namen trägt. Diese Datei ist nicht als Textdatei lesbar – setze das Passwort daher immer über den Server Manager.

## Admin Passwort beim Beanspruchen festlegen

Ist für Deinen Server noch kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. Beim ersten Hinzufügen im Server Manager legst Du das Passwort dann direkt fest.

1. **Server hinzufügen**\
   Trage Deinen Server im Server Manager ein – der Ablauf steht unter [Server beitreten](/tutorials/gameserver/satisfactory/join-server).

2. **Server Namen vergeben**\
   Das Spiel fragt zuerst nach einem Namen für den Server.

3. **Admin Passwort festlegen**\
   Anschließend legst Du das Admin Passwort fest. Danach bist Du Administrator des Servers.

## Admin Passwort ändern

1. **Server Manager öffnen**\
   Starte Satisfactory, wähle im Hauptmenü **Server Manager** und dort Deinen Server aus.

2. **Authentifizieren**\
   Wechsle auf einen beliebigen Reiter außer **Status**, klicke auf **Authenticate** und melde Dich mit dem aktuellen Admin Passwort an.

3. **Servereinstellungen öffnen**\
   Wechsle zum Reiter **Server Settings**.

4. **Passwort ändern**\
   Ändere dort den Eintrag für das Admin Passwort und bestätige die Eingabe.

5. **Neu anmelden**\
   Alle Admins müssen sich danach mit dem neuen Passwort erneut über **Authenticate** anmelden.

> [!TIP]
> Teile das Admin Passwort nur mit vertrauenswürdigen Spielern. Jeder, der es kennt, hat volle Kontrolle über Deinen Server. Mehr dazu unter [Admin hinzufügen](/tutorials/gameserver/satisfactory/add-admin).

> [!CAUTION]
> **Admin Passwort vergessen**
>
> Kennst Du das Admin Passwort nicht mehr, kannst Du den Server zurücksetzen:
>
> 1. Stoppe den Server über die Verwaltung.
> 2. Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) und öffne das Verzeichnis `/.config/Epic/FactoryGame/Saved/SaveGames/`.
> 3. Lösche die Datei, die mit `ServerSettings.` beginnt und den Game Port Deines Servers im Namen trägt.
> 4. Starte den Server. Er gilt jetzt wieder als nicht beansprucht und kann neu beansprucht werden.
>
> Dabei gehen auch Servername, Server Passwort und das Zertifikat des Servers verloren – bestehende Spielstände bleiben erhalten.
