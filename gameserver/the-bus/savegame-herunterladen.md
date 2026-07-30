---
description: Savegame von einem The Bus Server herunterladen
---

# So lädst du das Savegame deines The Bus Servers herunter

Du kannst das Savegame deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren eines Spielstands oder um ihn auf einen anderen Server zu übertragen.

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
   /TheBus/Saved/SaveGames/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade alle Save-Dateien aus diesem Verzeichnis auf deinen PC herunter. Am einfachsten markierst du den kompletten Inhalt des Ordners `SaveGames` und speicherst ihn gemeinsam in einem Ordner auf deinem PC.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
