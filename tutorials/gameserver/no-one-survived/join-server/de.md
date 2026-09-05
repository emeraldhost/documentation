---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem No One Survived Server bei"
description: "Einem No One Survived Server beitreten"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup", "gameserver/no-one-survived/download-savegame", "gameserver/no-one-survived/kick-ban-players"]
---

No One Survived sieht **keine Direktverbindung über die IP-Adresse** vor. Du findest Deinen Server über die Serverliste im Spiel im Bereich **Private Server** – gesucht wird dort nach **Servername** und **Region**.

> [!IMPORTANT]
> Servername und Region Deines Servers stehen in der **Verwaltung**. Beide Angaben musst Du im Spiel genau so eintragen, wie sie dort hinterlegt sind – sonst bleibt die Trefferliste leer. Das ist der häufigste Grund, warum ein Beitritt scheitert.

> [!TIP]
> Da Du Deinen Server über den Namen suchst, lohnt sich ein eindeutiger Servername. Bei einem sehr allgemeinen Namen wie `Server` findest Du Deinen Server nur schwer zwischen den anderen Einträgen wieder.

## Server beitreten

1. **Verbindungsdaten notieren**\
   Öffne die **Verwaltung** Deines Servers und notiere Dir den **Servernamen** und die eingestellte **Region**.

2. **No One Survived starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

3. **Multiplayer öffnen**\
   Wähle im Hauptmenü **Multiplayer**.

4. **Charakter wählen**\
   Wähle den Charakter aus, mit dem Du spielen möchtest, oder lege einen neuen an, und bestätige die Auswahl. Erst danach gelangst Du zur Serverauswahl.

5. **Private Server öffnen**\
   Wechsle in den Bereich **Private Server**. Dort werden die privaten Server aufgelistet – also auch Dein eigener.

   > [!NOTE]
   > Fragt das Spiel an dieser Stelle, ob der Servermodus gewechselt werden soll, bestätige das. Das Spiel schließt sich danach – starte es erneut und wiederhole die Schritte 2 bis 5.

6. **Server suchen**\
   Trage den **Servernamen** und die **Region** aus Schritt 1 ein und starte die Suche.

7. **Server beitreten**\
   Wähle Deinen Server aus der Trefferliste aus und bestätige den Beitritt über **Join In**.

   > [!NOTE]
   > Ist für Deinen Server ein Passwort gesetzt, wirst Du beim Beitreten danach gefragt. Das ist das Server-Passwort – nicht das Admin-Passwort.

## Die Region ist nur ein Suchfilter

> [!NOTE]
> Die Region Deines Servers ist ausschließlich ein Filter für die Serversuche. Sie verschiebt Deinen Server nicht an einen anderen Standort und ändert nichts an Deinem Ping.
>
> Wichtig ist nur, dass Spieler bei der Suche dieselbe Region auswählen, die in Deiner Verwaltung eingestellt ist. Steht dort `All`, muss auch im Spiel `All` gewählt werden.

## Welche Ports nutzt No One Survived?

> [!NOTE]
> Ein No-One-Survived-Server belegt zwei Ports, die beide über **UDP** angesprochen werden:
>
> | Port | Verwendung |
> |------|------------|
> | Game Port | Überträgt die eigentlichen Spieldaten während des Spielens |
> | Query Port | Hierüber wird Dein Server abgefragt – erst damit taucht er in der Serverliste auf |
>
> Welche Ports Deinem Server zugewiesen sind, siehst Du in der **Verwaltung**. Beide Ports müssen erreichbar sein: Fehlt der Query Port, wird Dein Server nicht gefunden; fehlt der Game Port, bricht die Verbindung beim Laden ab.

> [!WARNING]
> Verlasse Dich nicht auf Portangaben aus anderen Quellen. Die Ports Deines Servers werden Dir beim Erstellen zugewiesen und können von den Werten abweichen, die anderswo als Standard genannt werden. Maßgeblich sind ausschließlich die Werte in Deiner **Verwaltung**.

> [!WARNING]
> **Kein Beitritt über IP-Adresse**
>
> Für No One Survived ist **kein** Beitritt über die IP-Adresse dokumentiert – weder im Spiel noch über den Steam-Serverbrowser. Der einzige dokumentierte Weg ist die Suche nach Servername und Region im Bereich **Private Server**.

## Server wird nicht gefunden

> [!WARNING]
> Taucht Dein Server in der Trefferliste nicht auf, prüfe der Reihe nach:
>
> - Ist der Server in der **Verwaltung** vollständig gestartet? Die Serverliste zeigt ihn erst, wenn er sich angemeldet hat.
> - Stimmt die **Region** im Spiel mit der Region in der Verwaltung überein? Eine abweichende Region ist der häufigste Grund für eine leere Trefferliste.
> - Hast Du den **Servernamen** exakt so eingegeben, wie er in der Verwaltung hinterlegt ist? Achte auch auf Groß- und Kleinschreibung sowie auf Leerzeichen.
> - Starte die Suche erneut. Nach einem Serverneustart dauert es einen Moment, bis der Server wieder erscheint.
> - Starte das Spiel einmal neu. Nach einem Wechsel des Servermodus erscheinen private Server teilweise erst nach einem Neustart des Spiels.
