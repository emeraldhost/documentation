---
description: Savegame von einem No One Survived Server herunterladen
---

# So lädst du das Savegame deines No One Survived Servers herunter

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
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

4. <b>Spielstand herunterladen</b><br>
   Lade alle `.sav`-Dateien herunter, die zu deinem Spielstand gehören. Das sind alle Dateien, die mit deinem Savegame-Namen und einem Unterstrich beginnen – zum Beispiel alle Dateien, die mit `MeineWelt_` anfangen.

   :::: info Welcher Spielstand ist der aktive?
   Welcher Spielstand aktuell geladen wird, siehst du am Savegame-Namen in der **Verwaltung**. Der Server verwendet die Dateien, deren Name vor dem ersten Unterstrich genau diesem Eintrag entspricht.
   ::::

5. <b>Automatische Sicherungen herunterladen (optional)</b><br>
   Möchtest du zusätzlich die Zwischenstände des Servers sichern, wechsle in folgendes Verzeichnis und lade die dortigen Dateien ebenfalls herunter:

   ```
   /WRSH/Saved/SaveGames/AutoSave/
   ```

6. <b>Konfiguration sichern (optional)</b><br>
   Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

7. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
