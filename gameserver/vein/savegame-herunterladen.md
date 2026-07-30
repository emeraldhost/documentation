---
description: Savegame von einem VEIN Server herunterladen
---

# So lädst du das Savegame deines VEIN Servers herunter

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
   /Vein/Saved/SaveGames/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade alle `.vns` Dateien (z.B. `Server.vns`) aus diesem Verzeichnis auf deinen PC herunter. Der Spielstand besteht ausschließlich aus diesen Dateien.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Der Spielstand deines Servers heißt in der Regel `Server.vns`. Liegen mehrere `.vns` Dateien im Ordner, lade sie am besten alle herunter – so hast du auch ältere Spielstände gesichert.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
