---
description: Einem Voyagers of Nera Server beitreten
---

# So trittst du deinem Voyagers of Nera Server bei

Es gibt drei Wege auf deinen Voyagers of Nera Server: über den Serverbrowser des Spiels, über eine Direktverbindung mit IP-Adresse und Port oder über den Invite Code deines Servers.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Game Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Voyagers of Nera verbindet sich über den Game Port – rechne nichts hinzu und nichts ab.
::::

## Über den Serverbrowser

1. <b>Voyagers of Nera starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Serverliste öffnen</b><br>
   Öffne im Hauptmenü das Multiplayer-Menü und klicke auf **Browse Dedicated Servers**.

3. <b>Server suchen</b><br>
   Gib im Filter oben den Namen deines Servers ein, damit du ihn nicht in der kompletten Liste suchen musst.

4. <b>Server auswählen</b><br>
   Klicke deinen Server in der Liste an.

5. <b>Passwort eintragen</b><br>
   Ist für deinen Server ein Passwort gesetzt, trage es in das Textfeld **Server Password** ein.

6. <b>Beitreten</b><br>
   Klicke auf **Join Game**, um die Welt zu laden.

:::: warning Achtung
Die öffentliche Serverliste ist im Early Access noch eingeschränkt – es werden nicht zwingend alle laufenden Server angezeigt. Findest du deinen Server dort nicht, nutze die Direktverbindung oder den Invite Code.
::::

## Über die Direktverbindung

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server.

1. <b>Serverliste öffnen</b><br>
   Öffne im Hauptmenü das Multiplayer-Menü und klicke auf **Browse Dedicated Servers**.

2. <b>Direct Connect wählen</b><br>
   Wähle dort die Option **Direct Connect**.

3. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Beispiel
   ```
   123.45.67.89:28115
   ```

   Die Zahlen im Beispiel sind Platzhalter. Deine tatsächliche IP-Adresse und deinen Game Port findest du in der **Verwaltung**.
   ::::

4. <b>Passwort eintragen</b><br>
   Ist für deinen Server ein Passwort gesetzt, trage es zusätzlich in das Feld **Server Password** ein.

5. <b>Verbinden</b><br>
   Bestätige die Eingabe, um dem Server beizutreten.

## Über den Invite Code

Dein Server erzeugt beim ersten Start einen eigenen Invite Code. Damit können Mitspieler beitreten, ohne IP-Adresse und Port zu kennen.

:::: warning Achtung
Der Invite Code funktioniert nicht, wenn für deinen Server ein Passwort gesetzt ist. Das ist ein bekannter Fehler des Spiels. Möchtest du den Invite Code nutzen, lass das Serverpasswort leer und nutze bei gesetztem Passwort stattdessen die Direktverbindung.
::::

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server. Alternativ kannst du den Dateimanager in der Verwaltung nutzen.

2. <b>Code-Datei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /BoatGame/Saved/DedicatedServerMagicJoinCode.txt
   ```

   :::: info Hinweis
   Existiert die Datei noch nicht, starte deinen Server einmal. Sie wird beim Start automatisch angelegt.
   ::::

3. <b>Code kopieren</b><br>
   Kopiere den in der Datei hinterlegten Code.

4. <b>Code im Spiel eintragen</b><br>
   Starte Voyagers of Nera, wähle im Hauptmenü den Punkt **Invite Code**, füge den Code ein und bestätige.

## Welche Ports nutzt Voyagers of Nera?

:::: info Hinweis
Ein Voyagers of Nera Server nutzt den **Game Port** und zusätzlich den direkt darauf folgenden Port (Game Port +1) über **UDP**. Der zweite Port wird nicht im Spiel eingetragen, muss auf dem Server aber ebenfalls verfügbar sein.

Welcher Game Port für deinen Server gilt, siehst du in der **Verwaltung**. Ist der Folgeport dort nicht als Allocation hinterlegt, kannst du ihn über den Support ergänzen lassen.
::::

:::: info Kein separater Query Port
Voyagers of Nera verwendet keinen eigenen Query Port. Die Sitzungen werden über **Epic Online Services (EOS)** veröffentlicht – deshalb taucht dein Server im Serverbrowser auf, ohne dass du dafür einen Query Port eintragen musst.
::::
