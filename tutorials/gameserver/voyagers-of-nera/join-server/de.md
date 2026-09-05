---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Voyagers of Nera Server bei"
description: "Einem Voyagers of Nera Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["voyagers-of-nera"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 4
related: ["gameserver/voyagers-of-nera/add-savegame", "gameserver/voyagers-of-nera/create-backup", "gameserver/voyagers-of-nera/download-savegame"]
---

Es gibt drei Wege auf Deinen Voyagers of Nera Server: über den Serverbrowser des Spiels, über eine Direktverbindung mit IP-Adresse und Port oder über den Invite Code Deines Servers.

## Verbindungsdaten finden

> [!IMPORTANT]
> Für die Verbindung benötigst Du die **IP-Adresse** und den **Game Port** Deines Servers. Beides findest Du in der **Verwaltung** Deines Servers. Voyagers of Nera verbindet sich über den Game Port – rechne nichts hinzu und nichts ab.

## Über den Serverbrowser

1. **Voyagers of Nera starten**\
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. **Serverliste öffnen**\
   Öffne im Hauptmenü das Multiplayer-Menü und klicke auf **Browse Dedicated Servers**.

3. **Server suchen**\
   Gib im Filter oben den Namen Deines Servers ein, damit Du ihn nicht in der kompletten Liste suchen musst.

4. **Server auswählen**\
   Klicke Deinen Server in der Liste an.

5. **Passwort eintragen**\
   Ist für Deinen Server ein Passwort gesetzt, trage es in das Textfeld **Server Password** ein.

6. **Beitreten**\
   Klicke auf **Join Game**, um die Welt zu laden.

> [!WARNING]
> Die öffentliche Serverliste ist im Early Access noch eingeschränkt – es werden nicht zwingend alle laufenden Server angezeigt. Findest Du Deinen Server dort nicht, nutze die Direktverbindung oder den Invite Code.

## Über die Direktverbindung

Die Direktverbindung ist der zuverlässigste Weg auf Deinen Server.

1. **Serverliste öffnen**\
   Öffne im Hauptmenü das Multiplayer-Menü und klicke auf **Browse Dedicated Servers**.

2. **Direct Connect wählen**\
   Wähle dort die Option **Direct Connect**.

3. **Serveradresse eintragen**\
   Trage die IP-Adresse und den Game Port Deines Servers ein, getrennt durch einen Doppelpunkt:

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > 123.45.67.89:28115
   > ```
   >
   > Die Zahlen im Beispiel sind Platzhalter. Deine tatsächliche IP-Adresse und Deinen Game Port findest Du in der **Verwaltung**.

4. **Passwort eintragen**\
   Ist für Deinen Server ein Passwort gesetzt, trage es zusätzlich in das Feld **Server Password** ein.

5. **Verbinden**\
   Bestätige die Eingabe, um dem Server beizutreten.

## Über den Invite Code

Dein Server erzeugt beim ersten Start einen eigenen Invite Code. Damit können Mitspieler beitreten, ohne IP-Adresse und Port zu kennen.

> [!WARNING]
> Der Invite Code funktioniert nicht, wenn für Deinen Server ein Passwort gesetzt ist. Das ist ein bekannter Fehler des Spiels. Möchtest Du den Invite Code nutzen, lass das Serverpasswort leer und nutze bei gesetztem Passwort stattdessen die Direktverbindung.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server. Alternativ kannst Du den Dateimanager in der Verwaltung nutzen.

2. **Code-Datei öffnen**\
   Öffne folgende Datei:

   ```text
   /BoatGame/Saved/DedicatedServerMagicJoinCode.txt
   ```

   > [!NOTE]
   > Existiert die Datei noch nicht, starte Deinen Server einmal. Sie wird beim Start automatisch angelegt.

3. **Code kopieren**\
   Kopiere den in der Datei hinterlegten Code.

4. **Code im Spiel eintragen**\
   Starte Voyagers of Nera, wähle im Hauptmenü den Punkt **Invite Code**, füge den Code ein und bestätige.

## Welche Ports nutzt Voyagers of Nera?

> [!NOTE]
> Ein Voyagers of Nera Server nutzt den **Game Port** und zusätzlich den direkt darauf folgenden Port (Game Port +1) über **UDP**. Der zweite Port wird nicht im Spiel eingetragen, muss auf dem Server aber ebenfalls verfügbar sein.
>
> Welcher Game Port für Deinen Server gilt, siehst Du in der **Verwaltung**. Ist der Folgeport dort nicht als Allocation hinterlegt, kannst Du ihn über den Support ergänzen lassen.

> [!NOTE]
> **Kein separater Query Port**
>
> Voyagers of Nera verwendet keinen eigenen Query Port. Die Sitzungen werden über **Epic Online Services (EOS)** veröffentlicht – deshalb taucht Dein Server im Serverbrowser auf, ohne dass Du dafür einen Query Port eintragen musst.
