---
description: Savegame von einem Terraria tModLoader Server herunterladen
---

# So lädst du das Savegame deines Terraria tModLoader Servers herunter

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
   /.local/share/Terraria/tModLoader/Worlds/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade die `.wld` und die dazugehörige `.twld` Datei auf deinen PC herunter. Beide Dateien gehören zusammen und bilden gemeinsam das Savegame — lade daher immer beide herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Die richtigen Dateien finden
Liegen mehrere Welten im Verzeichnis, erkennst du die aktive Welt an dem Namen, der in den **Einstellungen** in der Verwaltung ausgewählt ist. Die `.wld` und die `.twld` Datei einer Welt tragen immer denselben Dateinamen.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
