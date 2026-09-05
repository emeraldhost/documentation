---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Necesse Server bei"
description: "Einem Necesse Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame", "gameserver/necesse/kick-ban-players"]
---

Necesse hat **keinen öffentlichen Serverbrowser**. Du trägst Deinen Server einmalig von Hand im Multiplayer-Menü ein und verbindest Dich anschließend jederzeit per Doppelklick.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den Port Deines Servers findest Du in der **Verwaltung**. Verwende genau den dort angezeigten **Game Port** – Necesse nutzt keinen abweichenden Port für den Beitritt.

## Server hinzufügen und beitreten

1. **Necesse starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

3. **Server hinzufügen**\
   Klicke auf **Add Server**.

4. **Verbindungsdaten eintragen**\
   Trage die Daten Deines Servers ein:

   - **Name** – ein frei wählbarer Anzeigename für Deine Serverliste
   - **IP** – die IPv4-Adresse aus Deiner Verwaltung
   - **Port** – der **Game Port** aus Deiner Verwaltung

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > Name:  Mein Necesse Server
   > IP:    123.45.67.89
   > Port:  Game Port aus der Verwaltung
   > ```

5. **Eintrag speichern**\
   Bestätige mit **Add**. Dein Server erscheint jetzt dauerhaft in Deiner Serverliste.

6. **Beitreten**\
   Klicke doppelt auf den Eintrag, um Dich zu verbinden.

> [!TIP]
> Möchtest Du Dich nur einmalig verbinden, ohne den Server dauerhaft zu speichern, kannst Du stattdessen die Direktverbindung nutzen. Sie fragt dieselben Daten ab, legt aber keinen Listeneintrag an.

## Passwortgeschützter Server

Ist für Deinen Server ein Passwort gesetzt, fragt Necesse es beim Verbinden ab. Gib das Passwort genau so ein, wie es in Deiner Verwaltung hinterlegt ist – Groß- und Kleinschreibung müssen übereinstimmen.

## Welchen Port nutzt Necesse?

> [!NOTE]
> Ein Necesse Server belegt nur einen einzigen Port, den **Game Port** (UDP). Einen separaten **Query Port** gibt es nicht – im Spiel trägst Du deshalb exakt den Game Port ein, der in Deiner Verwaltung steht.

> [!WARNING]
> **Server nicht erreichbar**
>
> Prüfe zuerst in der Verwaltung, ob Dein Server tatsächlich läuft. Achte anschließend darauf, dass IP-Adresse und Game Port exakt übernommen wurden – ein Zahlendreher im Port ist die häufigste Ursache für eine fehlgeschlagene Verbindung.

> [!WARNING]
> **Version prüfen**
>
> Client und Server müssen dieselbe Spielversion nutzen. Nach einem Update Deines Spiels kann eine Verbindung fehlschlagen, bis auch Dein Server auf demselben Stand ist.
