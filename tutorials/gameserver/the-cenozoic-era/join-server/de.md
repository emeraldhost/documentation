---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem The Cenozoic Era Server bei"
description: "Einem The Cenozoic Era Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 3
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/kick-ban-players"]
---

The Cenozoic Era besitzt einen **Serverbrowser im Spiel**. Dort erscheint Dein Server mit dem Namen, der für ihn eingetragen ist – über diesen Namen findest Du ihn und trittst ihm bei.

## Verbindungsdaten finden

> [!NOTE]
> Die IP-Adresse, den **Game Port** und den **Query Port** Deines Servers findest Du in der **Verwaltung**. Beide Ports werden Deinem Server dort zugewiesen – verwende immer die Werte, die in Deiner Verwaltung stehen.
>
> Als Spieler brauchst Du diese Werte im Normalfall nicht: Dein Server meldet sich über den Query Port bei Steam an und taucht dadurch im Serverbrowser des Spiels auf.

## Über den Serverbrowser im Spiel

1. **The Cenozoic Era starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Öffne im Hauptmenü den Serverbrowser (**Servers** beziehungsweise **Server Browser**).

3. **Nach Deinem Server suchen**\
   Gib in der Suche den Namen Deines Servers ein. Es ist der Name, der in der Konfiguration Deines Servers hinterlegt ist.

4. **Liste aktualisieren**\
   Aktualisiere die Serverliste, damit die Server neu abgefragt werden.

5. **Beitreten**\
   Wähle Deinen Server aus der Liste aus und tritt ihm bei.

> [!TIP]
> Gib Deinem Server einen eindeutigen Namen. Kurze oder allgemeine Namen tauchen in der Suche zwischen vielen fremden Servern auf und sind schwer wiederzufinden.

## Welche Ports nutzt The Cenozoic Era?

> [!NOTE]
> Ein Server von The Cenozoic Era belegt zwei Ports:
>
> | Port | Verwendung |
> |------|------------|
> | **Game Port** | Hierüber laufen die Spieldaten zwischen Spieler und Server |
> | **Query Port** | Hierüber fragen Steam und der Serverbrowser Deinen Server ab |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**. Feste Standardwerte gibt es nicht – die Ports werden Deinem Server bei der Erstellung zugewiesen.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Prüfe der Reihe nach:
>
> - Läuft Dein Server? Den Status siehst Du in der **Verwaltung**.
> - Hast Du die Serverliste aktualisiert? Frisch gestartete Server erscheinen dort erst mit Verzögerung.
> - Suchst Du nach dem exakten Servernamen? Schon ein abweichendes Zeichen kann dazu führen, dass der Server nicht in der gefilterten Liste auftaucht.
> - Wurde der Server nach einer Änderung an der Konfiguration neu gestartet? Ein geänderter Servername wird erst nach einem Neustart übernommen.

> [!NOTE]
> **Query Port bei einer Direktverbindung**
>
> Gibst Du die Verbindungsdaten Deines Servers irgendwo direkt an, ist dafür der **Query Port** der richtige Wert – nicht der Game Port. Ein eigenes Eingabefeld für eine Direktverbindung über `IP:Port` ist im Spiel allerdings nicht dokumentiert, ebenso wenig der Beitritt über die Steam-Favoriten. Der Serverbrowser im Spiel ist der dokumentierte Weg auf Deinen Server.
