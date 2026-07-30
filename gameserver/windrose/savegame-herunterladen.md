---
description: Savegame von einem Windrose Server herunterladen
---

# So lädst du das Savegame deines Windrose Servers herunter

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
   /R5/Saved/SaveProfiles/Default/RocksDB/<GameVersion>/Worlds/
   ```

   Der Platzhalter `<GameVersion>` entspricht der Version, mit der die Welt erstellt wurde.

4. <b>Welt-Ordner herunterladen</b><br>
   Lade den kompletten `<WorldID>`-Ordner mit allen enthaltenen Dateien auf deinen PC herunter. Einzelne Dateien reichen nicht aus – die Welt besteht aus dem gesamten Ordner.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Der `<WorldID>`-Ordner trägt eine alphanumerische Zeichenkette als Namen. Welcher Ordner der richtige ist, erkennst du an der [Island ID](island-id-setzen.md) deines Servers – sie entspricht dem Ordnernamen. Notiere dir die `<GameVersion>` und die Island ID gleich mit, damit du den Spielstand später wieder korrekt einspielen kannst.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
