---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Abiotic Factor Server bei"
description: "Einem Abiotic Factor Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 5
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/kick-ban-players"]
---

Für Abiotic Factor ist **kein Eingabefeld für eine Direktverbindung über die IP-Adresse im Spiel** dokumentiert. Du findest Deinen Server entweder über den Serverbrowser im Spiel oder trägst ihn in Steam als Favoriten ein.

## Verbindungsdaten finden

> [!IMPORTANT]
> Die IP-Adresse, den **Game Port** und den **Query Port** Deines Servers findest Du in der **Verwaltung**. Beide Ports werden Deinem Server dort zugewiesen – verwende immer die Werte, die in Deiner Verwaltung stehen.

## Über den Serverbrowser im Spiel

1. **Abiotic Factor starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Wähle im Hauptmenü **Join a Server**. Je nach Version erreichst Du den Punkt erst, nachdem Du das Spiel über **Enter the Facility** gestartet hast.

3. **Dedicated Server einblenden**\
   Aktiviere in den Filtern die Option **Show Dedicated**. Ohne diesen Filter werden Dedicated Server nicht in der Liste angezeigt.

4. **Server suchen**\
   Gib in der Suchleiste den Namen Deines Servers ein.

5. **Liste aktualisieren**\
   Aktualisiere die Serverliste, damit der Server neu abgefragt wird.

6. **Beitreten**\
   Wähle Deinen Server aus der Liste und klicke auf **Join**. Ist ein Server-Passwort gesetzt, wirst Du jetzt danach gefragt.

## Über die Steam-Favoriten

> [!NOTE]
> Taucht Dein Dedicated Server nicht im Serverbrowser des Spiels auf, ist der Weg über den Steam-Serverbrowser die zuverlässigste Lösung: Spiel schließen, den Server in Steam eintragen und von dort beitreten.

1. **Steam öffnen**\
   Schließe Abiotic Factor und öffne den Steam-Client.

2. **Server-Browser öffnen**\
   Klicke oben links auf **Anzeige** und wähle **Server** beziehungsweise **Spielserver**.

3. **Server hinzufügen**\
   Wechsle auf den Tab **Favoriten** und klicke auf **Server hinzufügen**.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den **Game Port** Deines Servers ein, getrennt durch einen Doppelpunkt:

   ```text
   <IP-Adresse>:<Game Port>
   ```

   > [!TIP]
   > Findet Steam den Server so nicht, versuche denselben Eintrag mit dem **Query Port**. Welcher der beiden Ports funktioniert, hängt von der Serverkonfiguration ab – beide Varianten sind einen Versuch wert.

5. **Liste aktualisieren**\
   Klicke auf **Aktualisieren**, damit Steam den Server abfragt.

6. **Beitreten**\
   Wähle den Server in der Favoritenliste aus und klicke auf **Verbinden**. Steam startet Abiotic Factor und verbindet Dich mit dem Server.

## Welche Ports nutzt Abiotic Factor?

> [!NOTE]
> Ein Abiotic-Factor-Server belegt zwei Ports:
>
> | Port | Protokoll | Verwendung |
> |------|-----------|------------|
> | **Game Port** | UDP | Hierüber laufen die Spieldaten |
> | **Query Port** | UDP | Hierüber fragen Steam und der Serverbrowser Deinen Server ab |
>
> Welche Werte für Deinen Server gelten, siehst Du in der **Verwaltung**.

> [!WARNING]
> **Server wird nicht gefunden**
>
> Prüfe der Reihe nach:
>
> - Ist der Filter **Show Dedicated** im Serverbrowser aktiviert?
> - Hast Du die Serverliste nach dem Start des Servers aktualisiert? Frisch gestartete Server erscheinen dort mit Verzögerung.
> - Trage den Server ersatzweise über die **Steam-Favoriten** ein. Darüber findest Du ihn unabhängig davon, ob er in der öffentlichen Liste auftaucht.

> [!NOTE]
> **Direktverbindung statt Steam-P2P**
>
> Dedicated Server von Abiotic Factor verwenden keine Steam-P2P-Verbindung, sondern eine direkte Verbindung zur IP-Adresse Deines Servers. Deshalb funktioniert das Beitreten auch dann, wenn Du keine Steam-Freundschaft mit den anderen Spielern hast.

> [!WARNING]
> **Kein Direct Connect im Spiel**
>
> Ein Feld, in das Du im Spielmenü direkt `IP:Port` eintragen kannst, ist für Abiotic Factor nicht dokumentiert. Alle beschriebenen Beitrittswege laufen über den Serverbrowser des Spiels oder über die Steam-Favoriten.
