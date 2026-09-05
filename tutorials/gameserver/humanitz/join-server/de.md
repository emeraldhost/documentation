---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem HumanitZ Server bei"
description: "Einem HumanitZ Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/kick-ban-players"]
---

In HumanitZ verbindest Du Dich immer über den **Game Port** Deines Servers. Du kannst Deinen Server entweder im Serverbrowser des Spiels suchen oder Dich direkt über die IP-Adresse verbinden.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse und die Ports Deines Servers findest Du in der **Verwaltung**. Zum Verbinden verwendest Du den **Game Port** – nicht den Query Port. Der Query Port dient ausschließlich der Serverabfrage und funktioniert im Spiel nicht.

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server.

1. **HumanitZ starten**\
   Starte HumanitZ und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Play** und anschließend **Multiplayer**.

3. **Charakter wählen**\
   Wähle einen vorhandenen Charakter aus oder lege einen neuen an. Beim Anlegen entscheidest Du Dich für eine **Profession** und eine **Affliction**.

4. **Serversuche öffnen**\
   Bestätige Deine Auswahl mit **Find Server**. Du landest in der Serverübersicht.

5. **IP-Adresse und Port eintragen**\
   Trage unten rechts in die Felder für die Direktverbindung die IP-Adresse und den Game Port Deines Servers ein.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > IP:   123.45.67.89
   > Port: <Game Port aus der Verwaltung>
   > ```

6. **Passwort eintragen**\
   Ist für Deinen Server ein Passwort gesetzt, trägst Du es in das dafür vorgesehene Feld ein. Andernfalls lässt Du das Feld leer.

7. **Verbinden**\
   Klicke auf **IP Connect**. Der Server wird geladen und Du startest in der Welt.

## Über den Serverbrowser

Alternativ suchst Du Deinen Server in der Liste:

1. **Serverliste öffnen**\
   Öffne wie oben beschrieben **Play → Multiplayer → Find Server**.

2. **Server suchen**\
   Suche in der Liste nach dem Namen Deines Servers.

3. **Beitreten**\
   Wähle Deinen Server aus und bestätige. Bei einem passwortgeschützten Server wirst Du nach dem Passwort gefragt.

## Server wird nicht angezeigt

Taucht Dein Server nicht in der Liste auf, hilft in den meisten Fällen die Direktverbindung über **IP Connect**. Zusätzlich entscheidet eine Einstellung in der Konfigurationsdatei `GameServerSettings.ini` darüber, ob Dein Server öffentlich gefunden wird:

> [!WARNING]
> **SearchID nicht verändern**
>
> Im Abschnitt `[Host Settings]` steht der Wert:
>
> ```ini
> SearchID="HumanitZ_Dedicated"
> ```
>
> Dieser Wert muss unverändert bleiben. Trägst Du hier etwas anderes ein, erscheint Dein Server **nicht** in der Standard-Serverliste – er ist dann nur noch findbar, wenn Spieler gezielt nach genau dieser SearchID suchen.

> [!TIP]
> **Kein Ping im Serverbrowser**
>
> Der Ping Deines Servers wird in der Serverliste nur angezeigt, wenn RCON aktiviert ist. Setze dafür im Abschnitt `[Host Settings]`:
>
> ```ini
> RCONEnabled=true
> ```
>
> Wie Du RCON vollständig einrichtest, steht unter [Spieler kicken & bannen](/tutorials/gameserver/humanitz/kick-ban-players).

## Welche Ports nutzt HumanitZ?

> [!NOTE]
> Ein HumanitZ Server belegt drei Ports. Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | Game Port | UDP | Spieldaten – hierüber verbinden sich Spieler |
> | Query Port | UDP | Serverabfrage für die Serverliste |
> | RCON-Port | TCP | Fernsteuerung des Servers, z.B. zum Kicken und Bannen |

> [!TIP]
> Damit Du auf Deinem Server Adminrechte erhältst, folge der Anleitung [Admin hinzufügen](/tutorials/gameserver/humanitz/add-admin).
