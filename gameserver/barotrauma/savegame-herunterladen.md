---
description: Savegame von einem Barotrauma Server herunterladen
---

# So lädst du das Savegame deines Barotrauma Servers herunter

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
   /config/Multiplayer/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade die gewünschte `.save`-Datei auf deinen PC herunter. Möchtest du alle Kampagnen sichern, lade den kompletten Inhalt des Ordners herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Der Dateiname der `.save`-Datei entspricht dem Namen der Kampagne, den du beim Auswählen des Savegames im Spiel siehst. Liegen mehrere `.save`-Dateien im Ordner, findest du darüber die richtige.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
