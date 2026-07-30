---
description: Savegame auf einem Longvinter Server hinzufügen
---

# So fügst du ein Savegame zu deinem Longvinter Server hinzu

Der Spielstand eines Longvinter Servers ist keine einzelne Datei, sondern der komplette Ordner `SaveGames`. Darin liegen viele `.sav`-Dateien, die zusammen die Welt, alle Zelte, Kisten und den Fortschritt der Spieler enthalten.

:::: info Hinweis
Longvinter kennt **keinen Weltnamen**. Es gibt keinen Konfigurationsschlüssel für einen Welt- oder Spielstandnamen – der Server lädt beim Start immer das, was im Ordner `SaveGames` liegt.
::::

:::: danger Wichtig
Diese Anleitung ist für Spielstände gedacht, die von einem **Dedicated Server** stammen – etwa beim Umzug von einem anderen Server oder beim Wiedereinspielen eines Downloads. Für Welten aus einer lokal gehosteten Runde auf deinem PC gibt es **kein dokumentiertes Verfahren** und keinen offiziell belegten Speicherort, deshalb beschreiben wir diesen Weg hier bewusst nicht.
::::

## Aufbau des Spielstands

Longvinter legt im Ordner `SaveGames` mehrere `.sav`-Dateien ab, die zusammengehören: Der Server speichert die Welt in Abschnitten und schreibt daneben unter anderem die platzierten Objekte, die Kisten und die Spielerdaten weg. Wie viele Dateien es sind und wie sie im Einzelnen heißen, hängt vom Stand deines Servers ab und ändert sich mit Updates.

:::: warning Achtung
Übertrage deshalb immer den **kompletten Inhalt** des Ordners und niemals einzelne Dateien – sonst passen die Daten nicht mehr zueinander.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien und überschreibt deinen Upload.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Longvinter/Saved/SaveGames/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder.
   ::::

4. <b>Alten Spielstand entfernen</b><br>
   Lösche alle vorhandenen `.sav`-Dateien in diesem Ordner. Bleiben Dateien des alten Spielstands liegen, vermischen sie sich mit deinem neuen Stand.

   :::: warning Achtung
   Damit ist der bisherige Spielstand deines Servers weg. Erstelle vorher ein [Backup](backup-erstellen.md) oder lade den bisherigen Stand herunter, falls du zurückwechseln möchtest: [Savegame herunterladen](savegame-herunterladen.md).
   ::::

5. <b>Neuen Spielstand hochladen</b><br>
   Lade alle `.sav`-Dateien deines Spielstands in dieses Verzeichnis hoch. Die Dateinamen müssen unverändert bleiben.

6. <b>Server starten</b><br>
   Starte deinen Server. Der neue Spielstand wird nun geladen.

:::: tip Tipp
Spielstände von Longvinter können mit der Zeit mehrere Gigabyte groß werden. Nutze für die Übertragung einen SFTP-Client wie FileZilla oder WinSCP – über den Dateimanager im Browser brechen große Übertragungen leichter ab.
::::

:::: info Hinweis
Deine Servereinstellungen liegen nicht im Spielstand, sondern in einer eigenen Datei:

```
/Longvinter/Saved/Config/LinuxServer/Game.ini
```

Wenn du auch deine Einstellungen und Admins mitnehmen möchtest, übertrage diese Datei zusätzlich – siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::
