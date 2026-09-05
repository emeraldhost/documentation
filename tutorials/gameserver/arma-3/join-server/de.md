---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Arma 3 Server bei"
description: "Einem Arma 3 Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame", "gameserver/arma-3/kick-ban-players"]
---

Frisch gestartete Server tauchen im öffentlichen Serverbrowser häufig erst mit Verzögerung auf. Der schnellste und zuverlässigste Weg auf Deinen Server ist deshalb die Direktverbindung über IP-Adresse und Port – entweder im Arma-3-Launcher oder im Spiel selbst.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Trage den **Game Port** ein – nicht den Query Port.

Ist für Deinen Server ein Passwort gesetzt, brauchst Du dieses zusätzlich.

## Über den Arma-3-Launcher verbinden

1. **Launcher starten**\
   Starte Arma 3 über Steam. Der Arma-3-Launcher öffnet sich.

2. **Serverliste öffnen**\
   Klicke links auf **Servers**.

3. **Direct Connect öffnen**\
   Klicke unten auf **Direct Connect**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse Deines Servers und den Game Port aus der Verwaltung ein:

   ```text
   123.45.67.89
   ```

   > [!NOTE]
   > IP-Adresse und Port haben im Launcher zwei getrennte Felder. Der Port ist dort bereits vorbelegt – ersetze den Wert durch den Game Port aus Deiner Verwaltung.

5. **Passwort eintragen**\
   Ist Dein Server passwortgeschützt, trage das Server-Passwort in das entsprechende Feld ein.

6. **Verbinden**\
   Bestätige die Eingabe. Der Launcher startet das Spiel und verbindet Dich direkt mit Deinem Server.

## Über den Serverbrowser im Spiel

1. **Arma 3 starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer** und anschließend **Server Browser**.

3. **Direct Connect wählen**\
   Klicke auf **Direct Connect**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse, den Game Port und – falls gesetzt – das Server-Passwort ein.

5. **Server beitreten**\
   Nach dem Bestätigen erscheint Dein Server im Tab **LAN**. Wähle ihn dort aus und klicke auf **Join**.

   > [!NOTE]
   > Dass der Server im Tab **LAN** auftaucht, ist normal. Arma 3 legt direkt hinzugefügte Server dort ab, unabhängig davon, ob sie im Internet stehen.

## Mods müssen übereinstimmen

> [!WARNING]
> Läuft Dein Server mit Mods, die über `-mod=` geladen werden, musst Du dieselben Mods vor dem Beitritt im Launcher aktivieren. Fehlt ein Mod oder ist eine andere Version aktiv, wirst Du beim Verbinden abgewiesen. Wie Du Mods einrichtest, erfährst Du unter [Mods hinzufügen](/tutorials/gameserver/arma-3/add-mods).

Mods, die Dein Server über `-serverMod=` lädt, laufen ausschließlich serverseitig. Diese musst Du als Spieler **nicht** installieren.

## Welche Ports nutzt Arma 3?

> [!NOTE]
> Ein Arma-3-Server belegt mehrere aufeinanderfolgende UDP-Ports. Ausgehend vom Game Port sieht die Aufteilung so aus:
>
> | Port | Verwendung |
> |------|------------|
> | Game Port | Spieldaten und Voice over Net (VON) – hierüber verbinden sich Spieler |
> | Game Port + 1 | Query Port – hierüber fragen Steam und der Serverbrowser den Server ab |
> | Game Port + 2 | Steam-Port |
> | Game Port + 3 | Reservierter VON-Port – aktuell nicht genutzt |
> | Game Port + 4 | BattlEye – hierüber läuft auch RCON |
>
> Welche konkreten Werte für Deinen Server gelten, siehst Du in der **Verwaltung**. Alle diese Ports werden für Deinen Server reserviert.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Taucht Dein Server im öffentlichen Serverbrowser nicht auf, nutze die Direktverbindung. Über **Direct Connect** erreichst Du ihn unabhängig davon, ob er in der öffentlichen Liste erscheint.
