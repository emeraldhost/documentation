---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem BATTALION Legacy Server bei"
description: "Einem BATTALION Legacy Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["battalion-legacy"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 3
related: ["gameserver/battalion-legacy/add-admin", "gameserver/battalion-legacy/create-backup"]
---

BATTALION Legacy bringt einen funktionierenden **Serverbrowser** im Spiel mit. Darüber findest Du Deinen Server anhand seines **Servernamens**. Eine Direktverbindung über die IP-Adresse ist im Spielmenü nicht vorgesehen.

## Verbindungsdaten finden

> [!IMPORTANT]
> Den **Servernamen** sowie die **IP-Adresse** und die Ports Deines Servers findest Du in der **Verwaltung**. Der Servername ist dabei der wichtigste Wert – über ihn suchst Du Deinen Server im Serverbrowser.

> [!NOTE]
> **Welche Ports nutzt BATTALION Legacy?**
>
> Dein Server belegt zwei Ports:
>
> | Port | Verwendung |
> |------|------------|
> | **Game Port** | Hierüber laufen die Spieldaten zwischen Server und Spielern |
> | **Query Port** | Hierüber meldet sich Dein Server bei Steam an und erscheint im Serverbrowser |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**. Beide Ports werden Deinem Server beim Anlegen automatisch zugewiesen – Du musst sie weder ändern noch von Hand freigeben.

## Server beitreten

1. **Server starten**\
   Starte Deinen Server in der **Verwaltung** und warte, bis er vollständig hochgefahren ist.

   > [!TIP]
   > In der Konsole Deines Servers erkennst Du am Eintrag `OnCreateSessionComplete`, dass die Sitzung angelegt wurde und der Server bereit ist.

2. **Servernamen prüfen**\
   Sieh in der Verwaltung nach, welcher **Servername** für Deinen Server hinterlegt ist. Genau unter diesem Namen erscheint er im Serverbrowser.

3. **BATTALION Legacy starten**\
   Starte das Spiel über Steam auf Deinem PC und warte, bis das Hauptmenü geladen ist.

4. **Serverbrowser öffnen**\
   Öffne im Hauptmenü die Serverliste. Dort werden alle erreichbaren Server aufgeführt.

5. **Nach Deinem Server suchen**\
   Gib den Namen Deines Servers in die Suche ein, um die Liste einzugrenzen.

6. **Beitreten**\
   Wähle Deinen Server aus der Liste aus und tritt ihm bei.

> [!TIP]
> Wähle einen möglichst eindeutigen Servernamen. Ein sehr allgemeiner Name macht es unnötig schwer, Deinen Server in der Liste von den übrigen zu unterscheiden.

> [!NOTE]
> **Direkt über die IP verbinden**
>
> Im Menü des Spiels gibt es kein Feld für eine IP-Adresse. Die offizielle Serverdokumentation von BATTALION 1944, dem Vorgänger von BATTALION Legacy, nennt für die Konsole den Befehl `connect <IP>:<Game Port>`. Ob er in der aktuellen Fassung noch funktioniert, ist nicht belegt – wie Du die Konsole freischaltest, steht unter [Admin hinzufügen](/tutorials/gameserver/battalion-legacy/add-admin).

## Eckige Klammer hinter dem Servernamen

> [!WARNING]
> Erscheint Dein Server mit einer eckigen Klammer am Ende des Namens in der Liste – aus `Mein Server` wird `Mein Server]` –, ist das ein bekannter Fehler beim Übergeben des Namens und kein Tippfehler in Deinen Einstellungen. Auf den Betrieb Deines Servers hat er keine Auswirkung.
>
> Suche im Serverbrowser deshalb am besten nach einem eindeutigen Teil des Namens **ohne** das angehängte Zeichen.

## Dein Server erscheint nicht in der Liste

> [!WARNING]
> Taucht Dein Server nicht im Serverbrowser auf, arbeite diese Punkte der Reihe nach ab:
>
> - **Server wirklich online?** Prüfe in der Verwaltung, ob der Server läuft und nicht gerade neu startet oder Dateien installiert.
> - **Nach dem Start etwas Zeit geben.** Nach dem Start dauert es einen Moment, bis Dein Server in der Liste erscheint. Warte ab und aktualisiere die Liste danach erneut.
> - **Schreibweise des Namens prüfen.** Suche exakt nach dem Namen aus der Verwaltung, am besten nur nach einem eindeutigen Teil davon.
> - **Liste aktualisieren.** Verlasse den Serverbrowser im Spiel und öffne ihn erneut, damit die Liste neu abgefragt wird.
> - **Servername geändert?** Nach einer Änderung des Servernamens musst Du den Server neu starten, damit der neue Name übernommen wird.

## Fortschritt und Speicherstand

> [!NOTE]
> BATTALION Legacy ist ein reiner PvP-Shooter. Auf dem Server wird kein Weltspeicherstand und kein Spielerfortschritt abgelegt – gespeichert wird nur die laufende Runde. Es gibt daher keinen Spielstand, den Du übertragen oder herunterladen müsstest.

> [!TIP]
> Wie Du Dir auf Deinem Server Adminrechte gibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/battalion-legacy/add-admin).
