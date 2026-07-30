---
description: Savegame von einem Valheim Server herunterladen
---

# So lädst du das Savegame deines Valheim Servers herunter

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
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. <b>Dateien herunterladen</b><br>
   Lade die beiden Dateien `<WeltName>.fwl` (Welt-Metadaten) und `<WeltName>.db` (Weltdaten) auf deinen PC herunter. Beide Dateien gehören zusammen und müssen immer gemeinsam gesichert werden.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Welche Dateien zu deiner Welt gehören, erkennst du am Feld **Welt Name** in den **Einstellungen** der Verwaltung. Trägt es z.B. `MyWorld` ein, benötigst du die Dateien `MyWorld.fwl` und `MyWorld.db`.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
