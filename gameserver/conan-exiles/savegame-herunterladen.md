---
description: Savegame von einem Conan Exiles Server herunterladen
---

# So lädst du das Savegame deines Conan Exiles Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen. Das Savegame besteht aus der Datei `game.db`.

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
   /ConanSandbox/Saved/
   ```

4. <b>Datei herunterladen</b><br>
   Lade die Datei `game.db` auf deinen PC herunter. Sie enthält deine komplette Welt inklusive aller Gebäude, Charaktere und Fortschritte.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Die vollständige Pfadangabe zur Savegame-Datei auf dem Server lautet `/ConanSandbox/Saved/game.db`. Möchtest du das heruntergeladene Savegame lokal weiterspielen, legst du die `game.db` auf deinem PC im Conan Exiles Installationsverzeichnis unter `ConanSandbox/Saved/` ab.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
