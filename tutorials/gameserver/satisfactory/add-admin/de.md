---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Satisfactory Server hinzu"
description: "Admin auf einem Satisfactory Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/satisfactory/add-savegame", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup"]
---

Satisfactory kennt **keine Adminliste**. Es gibt keine Admin-Datei und keine Spieler-ID, die Du irgendwo eintragen musst. Adminrechte hat jeder, der das **Admin Passwort** Deines Servers kennt und sich damit im **Server Manager** anmeldet.

> [!NOTE]
> Adminrechte gelten für die Verwaltung des Servers im Server Manager – also Einstellungen, Welten und Spielstände. Im Spiel selbst gibt es weder eine Adminrolle noch gesonderte Adminbefehle im Chat.

## Server beanspruchen

Ist für Deinen Server noch kein Name und kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. Beim ersten Verbinden führt Dich das Spiel dann durch zwei Dialoge.

1. **Server hinzufügen**\
   Trage Deinen Server im Server Manager ein – der Ablauf steht unter [Server beitreten](/tutorials/gameserver/satisfactory/join-server).

2. **Server Namen vergeben**\
   Das Spiel fragt zuerst nach einem Namen für den Server. Dieser Name wird Dir später in Deiner Serverliste angezeigt.

3. **Admin Passwort festlegen**\
   Anschließend legst Du das Admin Passwort fest. Danach bist Du Administrator des Servers.

## Als Admin anmelden

Auf einem bereits beanspruchten Server meldest Du Dich so an:

1. **Server Manager öffnen**\
   Starte Satisfactory, wähle im Hauptmenü **Server Manager** und dort Deinen Server aus.

2. **Reiter wechseln**\
   Wähle einen beliebigen Reiter außer **Status**. Das Spiel meldet, dass Du nicht authentifiziert bist.

3. **Authentifizieren**\
   Klicke auf **Authenticate**.

4. **Admin Passwort eingeben**\
   Trage das Admin Passwort ein und bestätige. Anschließend hast Du Zugriff auf alle Reiter des Server Managers.

## Weiteren Admin hinzufügen

Da es keine Adminliste gibt, machst Du einen Mitspieler zum Admin, indem Du ihm das Admin Passwort gibst.

1. **Admin Passwort weitergeben**\
   Teile das Admin Passwort Deines Servers mit der Person, die Adminrechte erhalten soll.

2. **Server eintragen lassen**\
   Die Person trägt Deinen Server im eigenen Server Manager ein – IP-Adresse und **Game Port** findest Du in Deiner **Verwaltung**.

3. **Anmelden lassen**\
   Über **Authenticate** meldet sie sich mit dem Admin Passwort an und hat damit dieselben Rechte wie Du.

> [!WARNING]
> Jeder mit dem Admin Passwort hat volle Kontrolle über den Server – einschließlich Einstellungen, Spielständen und Passwörtern. Gib es nur an Personen weiter, denen Du vertraust.

## Adminrechte entziehen

Einzelne Admins lassen sich nicht entfernen, weil es keine Liste gibt. Du entziehst die Rechte, indem Du das Admin Passwort änderst – danach müssen sich alle Admins mit dem neuen Passwort erneut anmelden.

Servername sowie Admin- und Server-Passwort änderst Du im Server Manager im Reiter **Server Settings**. Den ausführlichen Ablauf findest Du unter [Admin Passwort setzen](/tutorials/gameserver/satisfactory/set-admin-password).

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
> Dabei gehen auch Servername, Server Passwort und das Zertifikat des Servers verloren – bestehende Spielstände bleiben aber erhalten. Ist der Server danach in der Serverliste als offline markiert, entferne den Eintrag im Server Manager und lege ihn neu an.

> [!WARNING]
> **Kein Kicken und kein Bannen**
>
> Satisfactory bietet keine Funktion, um Spieler zu kicken oder zu bannen – weder im Spiel noch im Server Manager. Auch die Konsole im Server Manager kennt keine Befehle zur Spielerverwaltung. Wer auf Deinen Server darf, steuerst Du ausschließlich über das Server Passwort im Reiter **Server Settings** unter **Player password protection**.
