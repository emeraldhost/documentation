---
description: Savegame von einem Soulmask Server herunterladen
---

# So lädst du das Savegame deines Soulmask Servers herunter

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
   /WS/Saved/Worlds/Dedicated/Level01_Main/
   ```

4. <b>Weltdaten herunterladen</b><br>
   Lade die Datei `world.db` aus diesem Verzeichnis auf deinen PC herunter. Sie enthält deine komplette Welt inklusive Bauten, Spieler- und Charakterdaten.

5. <b>Spieleinstellungen herunterladen (optional)</b><br>
   Möchtest du auch deine Spieleinstellungen sichern, wechsle zusätzlich in folgendes Verzeichnis und lade die Datei `GameXishu.json` herunter:

   ```
   /WS/Saved/GameplaySettings/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Den richtigen Ordner finden
Der Ordner `Level01_Main` entspricht der Standard-Map Cloud Mist Forest. Läuft dein Server mit einer anderen Map, liegt die `world.db` in dem Ordner, der dem Wert der Map-Einstellung in der Verwaltung entspricht (z.B. `DLC_Level01_Main` für Shifting Sands).
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
