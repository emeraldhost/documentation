---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem SCUM Server bei"
description: "Einem SCUM Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/kick-ban-players"]
---

SCUM verwendet zum Verbinden **nicht den Game Port**, sondern den Query-Port. Dieser liegt immer **zwei Ports über** dem Game Port Deines Servers. Das ist der häufigste Grund, warum ein Beitritt scheitert.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Rechne zum dort angezeigten Port immer **+2**, bevor Du ihn im Spiel einträgst.

> [!TIP]
> **Beispiel**
>
> | Angezeigter Port (Game Port) | Port zum Verbinden |
> |-----------------------------|--------------------|
> | `7777` | `7779` |
> | `7000` | `7002` |
> | `7010` | `7012` |

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server.

1. **SCUM starten**\
   Starte SCUM auf Deinem PC.

2. **Multiplay öffnen**\
   Wähle im Hauptmenü **Multiplay**.

3. **Serveradresse eintragen**\
   Trage im Eingabefeld für die Direktverbindung (**Direct Connect**) die IP-Adresse und den Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   123.45.67.89:7779
   ```

   > [!WARNING]
   > Denk daran, hier den Game Port **+2** einzutragen. Der unveränderte Port aus der Verwaltung funktioniert nicht.

4. **Verbinden**\
   Bestätige die Eingabe mit Enter beziehungsweise über die Verbinden-Schaltfläche.

5. **Charakter erstellen**\
   Beim ersten Beitritt legst Du Deinen Charakter an. Danach landest Du auf der Insel und Dein Fortschritt wird auf dem Server gespeichert.

## Über den Serverbrowser

Alternativ findest Du Deinen Server im Spiel unter **Multiplay**, indem Du im Suchfeld nach dem Namen Deines Servers suchst.

> [!WARNING]
> Der Serverbrowser von SCUM gilt als unzuverlässig. Neu erstellte Server tauchen dort erst nach einigen Minuten bis Stunden auf, und auch danach werden Server nicht immer angezeigt. Nutze im Zweifel die Direktverbindung über die IP-Adresse.

## Über die Steam-Favoriten

Du kannst Deinen Server auch dauerhaft in Steam hinterlegen:

1. **Server-Browser öffnen**\
   Öffne Steam, klicke oben links auf **Anzeige** und wähle **Spielserver**.

2. **Server hinzufügen**\
   Klicke auf den Tab **Favoriten**, dann unten rechts auf **+** und trage die IP-Adresse mit dem Query-Port ein:

   ```text
   123.45.67.89:7779
   ```

3. **Beitreten**\
   Der Server erscheint anschließend im Spiel im Favoriten-Bereich und Du kannst von dort beitreten.

## Welche Ports nutzt SCUM?

> [!NOTE]
> Ein SCUM-Server belegt mehrere aufeinanderfolgende Ports. Ausgehend vom Game Port (im Beispiel `7777`) sieht die Aufteilung so aus:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | `7777` | UDP | Game Port |
> | `7778` | UDP | Raw-UDP |
> | `7779` | UDP | Query-Port – hierüber verbinden sich Spieler und der Steam-Serverbrowser |
> | `7777` | TCP | RCON |
>
> Deshalb trägst Du im Spiel immer den Game Port **+2** ein.
