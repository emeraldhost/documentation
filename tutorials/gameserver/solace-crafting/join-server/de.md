---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Solace Crafting Server bei"
description: "Einem Solace Crafting Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["solace-crafting"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/solace-crafting/add-savegame", "gameserver/solace-crafting/create-backup", "gameserver/solace-crafting/download-savegame"]
---

Solace Crafting bietet im Hauptmenü zwei Wege auf einen Dedicated Server: die **Serverliste** und die **Direktverbindung**. Für die Direktverbindung verwendest Du den **Game Port** Deines Servers, nicht den Query Port.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse sowie den **Game Port** und den **Query Port** Deines Servers findest Du in der **Verwaltung**. Verwende zum Beitreten immer die dort angezeigten Werte – feste Standardwerte gibt es nicht.

## Ports in der Serverkonfiguration eintragen

Solace Crafting liest den Game Port und den Query Port aus seiner Konfigurationsdatei. Stimmen die Werte dort nicht mit den Ports überein, die Deinem Server in der Verwaltung zugewiesen sind, ist Dein Server für niemanden erreichbar. Prüfe die Einträge deshalb, bevor Du Deine Verbindungsdaten weitergibst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei:

   ```text
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   > [!NOTE]
   > Der Ordner `.config` beginnt mit einem Punkt und ist damit ein versteckter Ordner. Aktiviere in Deinem SFTP-Programm die Anzeige versteckter Dateien, falls Du ihn nicht siehst. Existiert die Datei noch nicht, starte Deinen Server einmal – sie wird beim ersten Start angelegt.

4. **Ports eintragen**\
   Trage bei `port` den **Game Port** und bei `steamQueryPort` den **Query Port** aus Deiner Verwaltung ein:

   ```json
   "port": 27015,
   "steamQueryPort": 27016,
   ```

   > [!WARNING]
   > Die hier gezeigten Zahlen sind nur ein Beispiel. Maßgeblich sind ausschließlich die Ports, die Deinem Server in der Verwaltung zugewiesen wurden.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Konfiguration nicht mehr einlesen kann.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Über die Serverliste beitreten

1. **Solace Crafting starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Wähle im Hauptmenü **Multiplayer: Server List**.

3. **Server auswählen**\
   Suche Deinen Server in der Liste und wähle ihn aus.

4. **Passwort eingeben**\
   Ist für Deinen Server ein Passwort gesetzt, wirst Du beim Beitreten danach gefragt.

## Direkt über die IP verbinden

Die Direktverbindung funktioniert unabhängig davon, ob Dein Server in der Serverliste auftaucht.

1. **Direktverbindung öffnen**\
   Wähle im Hauptmenü **Multiplayer: Direct Connect**.

2. **Serveradresse eintragen**\
   Trage die IP-Adresse und den **Game Port** Deines Servers ein, zum Beispiel:

   ```text
   123.45.67.89:27015
   ```

   > [!IMPORTANT]
   > Nutze hier den **Game Port**, nicht den Query Port. IP und Port entnimmst Du Deiner Verwaltung.

3. **Passwort eingeben**\
   Trage bei einem passwortgeschützten Server zusätzlich das Serverpasswort ein.

4. **Verbinden**\
   Bestätige die Eingabe, um dem Server beizutreten.

## Privater Server

In der `servercfg.dat` steuert der Wert `isPrivate`, ob Dein Server öffentlich sichtbar ist:

| Wert | Bedeutung |
|------|-----------|
| `false` | Der Server erscheint in der öffentlichen Serverliste |
| `true` | Der Server erscheint **nicht** in der Liste – Beitritt nur per Direktverbindung |

> [!TIP]
> Ein privater Server ist der einfachste Weg für eine geschlossene Runde: Gib IP-Adresse und Game Port nur an die Spieler weiter, die beitreten sollen.

## Welche Ports nutzt Solace Crafting?

> [!NOTE]
> Ein Solace-Crafting-Server nutzt zwei Ports:
>
> | Konfigurationswert | Protokoll | Verwendung |
> |--------------------|-----------|------------|
> | `port` | TCP | Game Port – hierüber verbinden sich die Spieler |
> | `steamQueryPort` | UDP | Query Port – hierüber fragt Steam den Serverstatus ab |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Erscheint Dein Server nicht in der Serverliste, prüfe zuerst, ob `isPrivate` auf `false` steht und die Ports in der `servercfg.dat` mit denen aus der Verwaltung übereinstimmen. Unabhängig davon erreichst Du Deinen Server jederzeit über die Direktverbindung mit IP-Adresse und Game Port.
