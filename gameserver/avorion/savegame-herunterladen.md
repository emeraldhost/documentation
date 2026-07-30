---
description: Savegame von einem Avorion Server herunterladen
---

# So lädst du das Savegame deines Avorion Servers herunter

Du kannst die Galaxie deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Avorion speichert im laufenden Betrieb automatisch – lädst du währenddessen herunter, kann die Galaxie unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Gib vorher in der Konsole `/save` ein, damit der aktuelle Stand geschrieben wird.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Galaxie-Ordner finden</b><br>
   Wechsle in das Datenverzeichnis `/galaxy/` deines Servers und öffne darin den Ordner mit dem Namen deiner Galaxie. Du erkennst den richtigen Ordner an den Dateien `server.ini`, `admin.xml` und `modconfig.lua`.

   :::: info Welche Galaxie ist die richtige?
   Den Namen deiner aktuellen Galaxie findest du in der **Verwaltung** unter den **Einstellungen** im Feld für den Galaxie-Namen (**Galaxy Name**). Der Ordner heißt exakt so.
   ::::

4. <b>Ordner herunterladen</b><br>
   Lade den **kompletten** Galaxie-Ordner mit allen enthaltenen Dateien und Unterordnern auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Ein Spielstand ist immer der komplette Galaxie-Ordner. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: tip Download verkleinern
Der Unterordner `workshop` innerhalb der Galaxie enthält nur die vom Server automatisch heruntergeladenen Workshop-Mods. Diese lädt dein Server beim nächsten Start selbst wieder herunter – du kannst den Ordner beim Download also weglassen, wenn du Zeit und Speicherplatz sparen möchtest.
::::

:::: tip Spielstand wieder einspielen
Möchtest du die Galaxie später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md). Achte dabei darauf, dass der Ordnername und der eingetragene Galaxie-Name übereinstimmen.
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
