---
description: Savegame von einem Don’t Starve Together Server herunterladen
---

# So lädst du das Savegame deines Don’t Starve Together Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig — du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Cluster-Ordner öffnen</b><br>
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt. Das ist dein Cluster-Ordner. Darin findest du die Shard-Ordner `Master` (Oberwelt) und, falls die Höhlen aktiv sind, `Caves`.

4. <b>Spielstand herunterladen</b><br>
   Lade den kompletten Ordner `save` herunter:

   ```
   <Cluster-Ordner>/Master/save/
   ```

5. <b>Höhlen herunterladen</b><br>
   Sind die Höhlen auf deinem Server aktiv, lade zusätzlich diesen Ordner herunter:

   ```
   <Cluster-Ordner>/Caves/save/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Der Spielstand ist ein Ordner und keine einzelne Datei. Lade ihn immer vollständig herunter, inklusive der Datei `saveindex` und des Unterordners `session`. Einzelne Dateien daraus sind für sich genommen nicht verwendbar.
::::

:::: warning Oberwelt und Höhlen gehören zusammen
Nutzt dein Server die Höhlen, sichere immer beide `save`-Ordner gemeinsam. Spielst du später nur einen der beiden Stände wieder ein, passen Oberwelt und Höhlen nicht mehr zueinander.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
