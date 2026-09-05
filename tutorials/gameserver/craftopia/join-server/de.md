---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Craftopia Server bei"
description: "Einem Craftopia Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/create-backup", "gameserver/craftopia/download-savegame", "gameserver/craftopia/kick-ban-players"]
---

Craftopia hat **keinen Serverbrowser und keine Serverliste**. Du verbindest Dich immer direkt über die IP-Adresse und den Port Deines Servers.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und den **Game Port** Deines Servers findest Du in der **Verwaltung**. Verwende genau die dort angezeigten Werte – Craftopia nutzt zum Beitreten keinen abweichenden Port.

## Über die IP-Adresse beitreten

1. **Craftopia starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

3. **Charakter auswählen**\
   Fragt Craftopia nach einem Charakter, wähle den Charakter aus, mit dem Du dem Server beitreten möchtest, oder lege einen neuen an.

4. **Join via IP wählen**\
   Klicke auf **Join via IP**.

5. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:<Game Port aus der Verwaltung>
   > ```

6. **Verbinden**\
   Bestätige die Eingabe und starte das Spiel. Du landest anschließend direkt in der Welt Deines Servers.

> [!NOTE]
> Statt der IP-Adresse funktioniert auch ein Domainname, der auf Deinen Server zeigt. Der Port muss trotzdem angegeben werden.

## Passwortgeschützter Server

Ist für Deinen Server ein Passwort gesetzt, fragt Craftopia es beim Verbinden ab.

> [!WARNING]
> Das Serverpasswort von Craftopia ist **eine reine Zahl mit maximal acht Stellen**. Buchstaben oder Sonderzeichen sind nicht möglich – ein Passwort wie `12345678` ist gültig, `MeinPasswort` nicht.

## Welchen Port nutzt Craftopia?

> [!NOTE]
> Ein Craftopia Server belegt nur einen einzigen Port, den **Game Port** (UDP). Einen separaten **Query Port** gibt es nicht, ebenso wenig einen TCP-Port. Im Spiel trägst Du deshalb exakt den Game Port ein, der in Deiner Verwaltung steht.

> [!WARNING]
> **Server nicht erreichbar**
>
> Prüfe der Reihe nach:
>
> - Läuft Dein Server laut Verwaltung tatsächlich? Der erste Start dauert etwas länger, weil die Welt erzeugt wird.
> - Sind IP-Adresse und Game Port exakt übernommen? Ein Zahlendreher im Port ist die häufigste Ursache für eine fehlgeschlagene Verbindung.
> - Ist für Deinen Server ein Passwort gesetzt? Dann musst Du es beim Verbinden korrekt eingeben.

> [!WARNING]
> **Version prüfen**
>
> Client und Server müssen dieselbe Spielversion nutzen. Nach einem Update des Spiels kann eine Verbindung fehlschlagen, bis auch Dein Server auf demselben Stand ist.
