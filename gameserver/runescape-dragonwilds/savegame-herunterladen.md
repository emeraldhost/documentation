---
description: Savegame von einem RuneScape Dragonwilds Server herunterladen
---

# So lädst du das Savegame deines RuneScape: Dragonwilds Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen.

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
   /RSDragonwilds/Saved/SaveGames/
   ```

4. <b>Datei herunterladen</b><br>
   Lade die `.sav`-Datei deiner Welt aus diesem Verzeichnis auf deinen PC herunter. Diese eine Datei enthält den kompletten Spielstand.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Die richtige Datei finden
Liegen mehrere `.sav`-Dateien im Verzeichnis, findest du den Namen der aktiven Welt in den **Einstellungen** in der Verwaltung im Feld **SaveGame** — die passende Datei heißt genauso, ergänzt um die Endung `.sav`.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
