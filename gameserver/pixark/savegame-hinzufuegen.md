---
description: Savegame auf einem PixARK Server hinzufügen
---

# So fügst du ein Savegame zu deinem PixARK Server hinzu

Der komplette Spielstand eines PixARK Servers steckt im Ordner `Saved`. Um einen Spielstand zu übertragen, lädst du diesen Ordner von einem Server herunter und auf deinen Server wieder hoch.

:::: danger Wichtig
Diese Anleitung überträgt einen Spielstand **von einem Server auf einen anderen Server**. Für PixARK ist kein Weg dokumentiert, einen Einzelspieler-Spielstand vom eigenen PC auf einen Dedicated Server zu übertragen. Versuche das nicht auf gut Glück – arbeite ausschließlich mit Spielständen, die von einem Server stammen.
::::

## Vorher prüfen

Ein fremder Spielstand lädt nur, wenn er zur Konfiguration deines Servers passt:

| Voraussetzung | Erklärung |
|---------------|-----------|
| Gleiche Karte | Der Spielstand muss von derselben Karte stammen, die dein Server startet. Startet dein Server eine andere Karte, wird der Spielstand nicht geladen. |
| Gleicher Weltname | PixARK legt die Welt unter dem Weltnamen ab, der beim Serverstart vorgegeben wird. Stammt der Spielstand von einem Anbieter, der einen anderen Weltnamen verwendet hat, findet dein Server ihn nicht und erzeugt stattdessen eine neue Welt. |

:::: warning Achtung
Startet dein Server nach dem Hochladen mit einer frisch erzeugten Welt statt mit deinem Spielstand, ist eine dieser beiden Voraussetzungen nicht erfüllt. Spiele in diesem Fall nicht weiter, sondern stoppe den Server sofort – sonst überschreibst du den hochgeladenen Stand.
::::

## Savegame hochladen

1. <b>Backup erstellen</b><br>
   Erstelle ein [Backup](backup-erstellen.md) deines Servers oder lade den bisherigen Stand herunter: [Savegame herunterladen](savegame-herunterladen.md). Damit kannst du jederzeit zurück.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand und überschreibt deine Dateien.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /ShooterGame/
   ```

5. <b>Alten Spielstand beiseiteräumen</b><br>
   Benenne den vorhandenen Ordner `Saved` um, zum Beispiel in `Saved_alt`. So bleiben keine Reste des alten Stands liegen, die sich mit dem neuen vermischen könnten – und du kommst notfalls zurück.

6. <b>Spielstand hochladen</b><br>
   Lade den Ordner `Saved` des anderen Servers hoch, sodass er wieder unter folgendem Pfad liegt:

   ```
   /ShooterGame/Saved/
   ```

7. <b>Server starten</b><br>
   Starte deinen Server. Der neue Spielstand wird nun geladen.

:::: tip Eigene Einstellungen behalten
Im Ordner `Saved` steckt auch der Unterordner `Config/WindowsServer/` mit den Konfigurationsdateien. Möchtest du nur Welt und Spieler übernehmen, aber deine eigenen Servereinstellungen behalten, kopiere nach dem Hochladen den Ordner `Config` aus deinem alten `Saved`-Ordner zurück.
::::

:::: info Hinweis
Läuft der Server erst einmal mit dem neuen Spielstand und funktioniert alles, kannst du den umbenannten Ordner `Saved_alt` löschen. Lade ihn vorher auf deinen PC herunter, wenn du ihn behalten möchtest.
::::
