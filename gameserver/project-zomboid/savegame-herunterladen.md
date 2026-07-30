---
description: Savegame von einem Project Zomboid Server herunterladen
---

# So lädst du das Savegame deines Project Zomboid Servers herunter

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
   /Zomboid/Saves/Multiplayer/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade den kompletten Savegame-Ordner aus diesem Verzeichnis auf deinen PC herunter. Der Ordner enthält den gesamten Spielstand deines Servers — lade ihn immer vollständig herunter, nicht nur einzelne Dateien daraus.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Den richtigen Ordner finden
Im Verzeichnis `Multiplayer/` liegt für jeden Spielstand ein eigener Ordner. Liegen dort mehrere Ordner, erkennst du den aktuell genutzten Spielstand am neuesten Änderungsdatum.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
