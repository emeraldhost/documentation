---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem StarRupture Server bei"
description: "Einem StarRupture Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["starrupture"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/starrupture/add-savegame", "gameserver/starrupture/create-backup", "gameserver/starrupture/download-savegame"]
---

StarRupture besitzt **keinen Serverbrowser**. Du verbindest Dich ausschließlich über die direkte Eingabe von IP-Adresse und Port. Die Verbindung selbst läuft über die Epic Online Services (EOS) – auch dann, wenn Du das Spiel über Steam gestartet hast.

## Verbindungsdaten finden

> [!NOTE]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung** Deines Servers.

> [!IMPORTANT]
> Verwende immer die öffentliche IP-Adresse aus der Verwaltung. Da die Verbindung über die Epic Online Services aufgebaut wird, funktioniert eine lokale Netzwerkadresse (LAN) nicht.

## Dem Server beitreten

1. **StarRupture starten**\
   Starte StarRupture und warte, bis das Hauptmenü geladen ist.

2. **Join Game öffnen**\
   Wähle im Hauptmenü **Join Game**.

3. **Dedicated Server wählen**\
   Wähle **Dedicated Server**. Nur über diesen Weg kannst Du eine Adresse eintragen.

4. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Schreibweise**
   >
   > ```text
   > <IP-Adresse>:<Game Port>
   > ```
   >
   > Setze für die Platzhalter die Werte ein, die in Deiner Verwaltung stehen.

   > [!WARNING]
   > Der Port muss immer mit angegeben werden. Ohne Port findet das Spiel Deinen Server nicht zuverlässig.

5. **Passwort eintragen**\
   Ist für Deinen Server ein Join-Passwort hinterlegt, trage es in das entsprechende Feld ein. Ohne Passwort bleibt das Feld leer.

6. **Verbinden**\
   Bestätige die Eingabe mit **Confirm**. Du wirst anschließend auf den Server geladen.

## Welche Ports nutzt StarRupture?

> [!NOTE]
> Ein StarRupture-Server benötigt nur einen einzigen Port: den **Game Port**, und zwar ausschließlich über **UDP**. Einen separaten **Query Port** gibt es nicht. Welcher Game Port für Deinen Server gilt, siehst Du in der **Verwaltung**.

> [!CAUTION]
> **Warum kein TCP freigegeben wird**
>
> Der Dedicated Server bringt eine HTTP-Fernsteuerung mit (im Spiel als **Manage Server** sichtbar), die eine bekannte, nicht authentifizierte Sicherheitslücke enthält: Angreifer könnten darüber Passwörter ändern, Spielstände manipulieren oder den Server zum Absturz bringen. Dein Server wird deshalb mit den Startparametern `-RCWebControlDisable` und `-RCWebInterfaceDisable` betrieben und ist ausschließlich über UDP erreichbar. **Manage Server** steht dadurch bewusst nicht zur Verfügung – die Servereinstellungen änderst Du stattdessen über die Verwaltung beziehungsweise über die Datei `DSSettings.txt`.

## Verbindungsprobleme

> [!WARNING]
> **Meldung über mehrere Server an dieser IP**
>
> Erscheint beim Beitreten eine Meldung wie *„More than one server at this IP, please specify port“*, hält Dein Spielclient noch eine veraltete Verbindung zu Deinem Server. Das passiert vor allem dann, wenn der Server neu gestartet wurde, während StarRupture geöffnet blieb. Beende das Spiel **vollständig**, starte es neu und trage IP-Adresse und Game Port erneut ein.

> [!TIP]
> Prüfe bei Verbindungsproblemen zuerst, ob der Server in der Verwaltung tatsächlich läuft und ob Du IP-Adresse und Port exakt so eingetragen hast, wie sie dort angezeigt werden.
