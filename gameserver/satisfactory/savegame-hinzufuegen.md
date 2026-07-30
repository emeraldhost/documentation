---
description: Savegame auf einem Satisfactory Server hinzufügen
---

# So fügst du ein Savegame zu deinem Satisfactory Server hinzu

Ein Spielstand ist in Satisfactory eine einzelne Datei mit der Endung `.sav`. Du musst keinen Weltnamen in einer Konfigurationsdatei eintragen – welcher Spielstand geladen wird, stellst du im Spiel über den **Server Manager** ein.

:::: info Hinweis
Für alle Schritte im Server Manager brauchst du Adminrechte. Wie du dich anmeldest, steht unter [Server beitreten](server-beitreten.md) und [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Spielstands oder lade ihn herunter: [Savegame herunterladen](savegame-herunterladen.md).
::::

## Lokalen Spielstand finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LocalAppData%\FactoryGame\Saved\SaveGames
   ```

2. <b>Spielstand auswählen</b><br>
   Deine Spielstände liegen dort als `.sav`-Dateien – in der Regel in einem Unterordner, der deiner Steam- beziehungsweise Epic-ID entspricht. Der Dateiname entspricht dem Namen der Session im Spiel.

## Spielstand über den Server Manager hochladen

Das ist der empfohlene Weg – du brauchst dafür keine SFTP-Verbindung.

1. <b>Server Manager öffnen</b><br>
   Starte Satisfactory und wähle im Hauptmenü **Server Manager**. Wähle dort deinen Server aus.

2. <b>Als Admin anmelden</b><br>
   Wechsle auf einen beliebigen Reiter außer **Status** und melde dich über **Authenticate** mit deinem Admin Passwort an.

3. <b>Spielstände öffnen</b><br>
   Wechsle zum Reiter **Manage Saves**. Dort siehst du alle Spielstände, die auf dem Server liegen.

4. <b>Spielstand hochladen</b><br>
   Wähle die Funktion zum Hochladen eines Spielstands und anschließend deine `.sav`-Datei auf dem PC. Die Übertragung kann je nach Größe des Spielstands einen Moment dauern.

5. <b>Spielstand laden</b><br>
   Wähle den hochgeladenen Spielstand in der Liste aus und lade ihn. Der Server startet die Welt daraufhin neu.

6. <b>Beitreten</b><br>
   Sobald die Welt geladen ist, kannst du dem Server beitreten – wähle ihn dazu im Server Manager aus und klicke unten rechts auf **Join Game**. Der Punkt **Join Game** im Hauptmenü findet deinen dedizierten Server nicht.

## Spielstand per SFTP hochladen

Alternativ kannst du die Datei direkt in den Spielstandsordner deines Servers legen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   :::: info Hinweis
   Der Ordner `.config` beginnt mit einem Punkt und ist damit ein versteckter Ordner. Aktiviere in deinem SFTP-Programm die Anzeige versteckter Dateien, falls du ihn nicht siehst. Fehlt das Verzeichnis noch, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.
   ::::

4. <b>Spielstand hochladen</b><br>
   Lade deine `.sav`-Datei in dieses Verzeichnis hoch. Vorhandene Spielstände kannst du liegen lassen – der Server verwaltet beliebig viele Dateien nebeneinander.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

6. <b>Spielstand laden</b><br>
   Öffne den Server Manager, melde dich als Admin an und lade den hochgeladenen Spielstand über den Reiter **Manage Saves**.

:::: warning Achtung
Das Hochladen allein reicht nicht. Der Server lädt weiterhin den bisherigen Spielstand, bis du den neuen im Server Manager ausgewählt und geladen hast.
::::

:::: info Einzelspieler-Spielstand übertragen
Du kannst auch einen Spielstand aus deinem Einzelspieler-Spiel hochladen – es ist dasselbe Dateiformat. Arbeite dabei mit einer Kopie, damit deine lokale Welt unangetastet bleibt.
::::

:::: danger Wichtig
Lösche im Ordner `SaveGames` keine Datei, die mit `ServerSettings.` beginnt. Darin stehen Servername sowie Admin- und Server-Passwort deines Servers. Wird sie entfernt, gilt der Server wieder als nicht beansprucht und muss neu eingerichtet werden.
::::
