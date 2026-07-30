---
description: Savegame von einem Echoes of Elysium Server herunterladen
---

# So lädst du das Savegame deines Echoes of Elysium Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig — du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /world/
   ```

   :::: info Hinweis
   Das Verzeichnis `world` liegt im Hauptverzeichnis deines Servers, der vollständige Pfad lautet also `/home/container/world/`.
   ::::

4. <b>Dateien herunterladen</b><br>
   Lade den kompletten Inhalt dieses Verzeichnisses auf deinen PC herunter. Übertrage immer alle Dateien und Unterordner, damit dir kein Teil des Spielstands fehlt.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
In `world` steckt der gesamte Spielstand deiner Welt. Einen zusätzlichen Weltnamen oder eine separate Spielstandsdatei gibt es nicht — dieses Verzeichnis ist dein Savegame.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
