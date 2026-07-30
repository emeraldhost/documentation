---
description: Savegame von einem Sons Of The Forest Server herunterladen
---

# So lädst du das Savegame deines Sons Of The Forest Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

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
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

4. <b>Richtigen Ordner wählen</b><br>
   Jeder Spielstand liegt in einem eigenen Ordner, dessen Name der zehnstelligen Slot-Nummer entspricht (z.B. `0000000001` für Save-Slot `1`).

5. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner mit allen enthaltenen Dateien auf deinen PC herunter – dazu gehören mehrere `.json`-Dateien und eine `SaveData.zip`. Die Dateien gehören zusammen und müssen immer gemeinsam gesichert werden.

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Welcher Ordner ist der richtige?
Welchen Spielstand dein Server aktuell verwendet, erkennst du am Wert `SaveSlot` in der Datei `/serverconfig/dedicatedserver.cfg`. Steht dort z.B. `"SaveSlot": 1`, benötigst du den Ordner `0000000001`.
::::

:::: info Hinweis
Spielerdaten wie Inventar, Position und Kleidung sind nicht Teil des Welt-Savegames. Gesichert werden ausschließlich der Weltzustand und deine Bauwerke.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
