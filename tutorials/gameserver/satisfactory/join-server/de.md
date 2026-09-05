---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Satisfactory Server bei"
description: "Einem Satisfactory Server beitreten"
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
short_title: "Server beitreten"
sort: 7
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/set-admin-password", "gameserver/satisfactory/set-server-password"]
---

Satisfactory hat keinen öffentlichen Serverbrowser. Deinen dedizierten Server trägst Du im Spiel einmalig über den **Server Manager** ein und verbindest Dich anschließend von dort aus.

## Verbindungsdaten finden

> [!WARNING]
> **Wichtig**
>
> Die **IP-Adresse** und den **Game Port** Deines Servers findest Du in Deiner **Verwaltung**. Verwende immer die Werte, die dort für Deinen Server hinterlegt sind.

Für die Verbindung trägst Du im Spiel **nur einen Port** ein: den **Game Port**. Einen separaten Query Port gibt es bei Satisfactory nicht – die Serverabfrage läuft über denselben Port.

## Server im Server Manager hinzufügen

1. **Satisfactory starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Server Manager öffnen**\
   Wähle im Hauptmenü **Server Manager**. Du siehst nun die Liste Deiner eingetragenen Server – beim ersten Mal ist sie leer.

3. **Server hinzufügen**\
   Klicke unten auf **Add Server**.

4. **Adresse und Port eintragen**\
   Trage die **IP-Adresse** Deines Servers ein und setze den Port auf den **Game Port** aus Deiner Verwaltung.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > Adresse: <IP-Adresse>
   > Port:    <Game Port>
   > ```

5. **Eintrag bestätigen**\
   Bestätige den Dialog mit **Confirm**. Der Server wird jetzt abgefragt und erscheint in Deiner Serverliste.

6. **Beitreten**\
   Wähle Deinen Server in der Liste aus und klicke unten rechts auf **Join Game**.

> [!WARNING]
> **Nicht über das Hauptmenü beitreten**
>
> Der Punkt **Join Game** im Hauptmenü ist für Sitzungen von Freunden gedacht und findet Deinen dedizierten Server nicht. Dedizierte Server erreichst Du ausschließlich über den **Server Manager**.

## Adminrechte auf dem Server erhalten

Damit Du im Server Manager mehr als den Reiter **Status** nutzen kannst – also Einstellungen ändern, Welten anlegen oder Spielstände verwalten –, musst Du Dich als Administrator anmelden.

1. **Reiter wechseln**\
   Wähle im Server Manager einen beliebigen Reiter außer **Status**. Das Spiel meldet, dass Du nicht authentifiziert bist.

2. **Authentifizieren**\
   Klicke auf **Authenticate**.

3. **Admin Passwort eingeben**\
   Trage das Admin Passwort Deines Servers ein und bestätige. Anschließend hast Du Zugriff auf alle Reiter des Server Managers.

> [!NOTE]
> **Admin Passwort setzen**
>
> Wie Du das Admin Passwort Deines Servers festlegst, erfährst Du unter [Admin Passwort setzen](/tutorials/gameserver/satisfactory/set-admin-password).

## Server beanspruchen (Claim)

Ist für Deinen Server noch kein Name und kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. In diesem Fall führt Dich das Spiel nach dem Hinzufügen durch zwei Dialoge:

1. **Server Namen vergeben**\
   Zuerst fragt das Spiel nach einem Namen für den Server. Dieser Name wird Dir später in Deiner Serverliste angezeigt.

2. **Admin Passwort festlegen**\
   Anschließend legst Du das Admin Passwort fest. Wähle ein sicheres Passwort und teile es nur mit Personen, die Adminrechte erhalten sollen.

Danach bist Du Administrator des Servers.

> [!WARNING]
> **Erst eine Welt anlegen**
>
> Direkt nach dem Beanspruchen läuft auf dem Server noch keine Welt. Lege im Server Manager zuerst über den Reiter **Create Game** eine neue Welt an oder lade über den Reiter **Manage Saves** einen vorhandenen Spielstand hoch. Erst danach kannst Du dem Server beitreten.

## Server Passwort

Ist für Deinen Server ein Server Passwort gesetzt, wirst Du beim Verbinden danach gefragt. Das Server Passwort regelt nur, wer überhaupt auf den Server darf – es ist nicht dasselbe wie das Admin Passwort. Als Admin findest Du es im Server Manager im Reiter **Server Settings** unter **Player password protection**.

## Welche Ports nutzt Satisfactory?

> [!NOTE]
> Ein Satisfactory Server belegt zwei Ports:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | **Game Port** | TCP + UDP | Spieldaten und Serverabfrage – **diesen Port trägst Du im Spiel ein** |
> | **Reliable Messaging Port** | TCP | Zusätzliche Spieldaten, seit Patch 1.1 erforderlich – wird vom Server bereitgestellt, Du trägst ihn im Spiel nicht ein |
>
> Welche Werte für Deinen Server gelten, siehst Du in Deiner **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Prüfe der Reihe nach:
>
> - Läuft Dein Server? Warte nach dem Start einen Moment, bis er vollständig hochgefahren ist.
> - Hast Du wirklich den **Game Port** aus Deiner Verwaltung eingetragen und nicht einen anderen Port?
> - Stimmt die IP-Adresse exakt mit der Angabe in Deiner Verwaltung überein?
> - Ist auf dem Server bereits eine Welt geladen? Ohne geladene Welt kannst Du nicht beitreten.
> - Entferne den Eintrag im Server Manager und lege ihn neu an, falls der Server dauerhaft als offline angezeigt wird.
