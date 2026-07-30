---
description: Savegame auf einem Arma 3 Server hinzufügen
---

# So fügst du ein Savegame zu deinem Arma 3 Server hinzu

Ein Arma-3-Server speichert von sich aus **keinen Weltstand**. Ob es überhaupt einen Spielstand gibt, entscheidet allein die Mission: Persistente Missionen und Kampagnen wie Antistasi, Vindicta, KP Liberation oder Wasteland bringen eine eigene Speicherfunktion mit und legen ihren Fortschritt im **Serverprofil** ab. Vanilla-Missionen speichern gar nichts.

Der Spielstand ist dabei immer eine einzelne Datei mit der Endung `.vars.Arma3Profile`, benannt nach dem Profil des Servers – zum Beispiel `server.vars.Arma3Profile`.

:::: danger persistent ist kein Savegame
Der Wert `persistent` in der `server.cfg` speichert nichts. Er sorgt lediglich dafür, dass die Mission weiterläuft, wenn alle Spieler den Server verlassen. Anleitungen, die `persistent = 1;` als Speicherfunktion beschreiben, sind falsch.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines Servers, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

1. <b>Profilordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\Documents\Arma 3
   ```

2. <b>Datei auswählen</b><br>
   Suche darin die Datei mit der Endung `.vars.Arma3Profile`. Der Teil davor ist dein Profilname, zum Beispiel `Max.vars.Arma3Profile`.

   :::: info Hinweis
   Verwendest du ein zusätzliches Profil, liegt die Datei stattdessen unter `%userprofile%\Documents\Arma 3 - Other Profiles\<Profilname>\`.
   ::::

## Profilnamen deines Servers ermitteln

Dein Server speichert unter dem Profilnamen, den er beim Start verwendet. Diesen Namen brauchst du, damit die hochgeladene Datei auch geladen wird.

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Profilverzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /serverprofile/home/
   ```

3. <b>Profilnamen ablesen</b><br>
   Der Ordner, der hier liegt, trägt den Profilnamen deines Servers. Darin findest du die zugehörige Datei:

   ```
   /serverprofile/home/<Profilname>/<Profilname>.vars.Arma3Profile
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte deinen Server einmal mit der gewünschten Mission und stoppe ihn anschließend wieder – dann wird das Profil angelegt.
   ::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Profildatei.

2. <b>Datei umbenennen</b><br>
   Benenne deine lokale Datei auf den Profilnamen deines Servers um. Heißt der Profilordner `server`, muss die Datei `server.vars.Arma3Profile` heißen.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Datei hochladen</b><br>
   Lade die Datei in den Profilordner hoch und überschreibe die vorhandene Datei:

   ```
   /serverprofile/home/<Profilname>/
   ```

5. <b>Mission bereitstellen</b><br>
   Stelle sicher, dass auf dem Server dieselbe Mission läuft, mit der der Spielstand erstellt wurde. Missionen liegen als `.pbo`-Datei im Ordner `/mpmissions`.

6. <b>Server starten</b><br>
   Starte deinen Server und lade den Spielstand über die Ladefunktion der Mission – bei den meisten persistenten Missionen geschieht das direkt beim Missionsstart über ein Menü.

:::: warning Spielstand aus dem Einzelspieler
Einzelspieler-Spielstände und Dedicated-Server-Spielstände werden innerhalb derselben Datei unter unterschiedlichen Variablennamen abgelegt. Ein Einzelspieler-Spielstand wird deshalb auf dem Server unter Umständen nicht als ladbar erkannt.
::::

:::: warning Achtung
Wie ein Spielstand geladen wird, legt die jeweilige Mission fest. Prüfe im Zweifel die Dokumentation der Mission, die du einsetzt – eine einheitliche Ladefunktion gibt es in Arma 3 nicht.
::::

## Spielstand zurücksetzen

Möchtest du komplett neu anfangen, löschst du die Datei `<Profilname>.vars.Arma3Profile` bei gestopptem Server. Einen anderen Weg, den Fortschritt einer persistenten Mission zurückzusetzen, gibt es nicht.

:::: danger Wichtig
Lade dir die Datei vor dem Löschen herunter – siehe [Savegame herunterladen](savegame-herunterladen.md). Einmal gelöscht, lässt sich der Fortschritt nicht wiederherstellen.
::::
