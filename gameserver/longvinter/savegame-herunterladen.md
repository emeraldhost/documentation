---
description: Savegame von einem Longvinter Server herunterladen
---

# So lädst du das Savegame deines Longvinter Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Longvinter speichert im laufenden Betrieb etwa alle zehn Minuten – du würdest sonst einen unvollständigen Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Longvinter/Saved/
   ```

4. <b>Spielstand herunterladen</b><br>
   Lade den kompletten Ordner `SaveGames` mit allen enthaltenen `.sav`-Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Der Ordner `SaveGames` enthält den gesamten Spielstand – unter anderem Zelte, Kisten samt Inhalt und den Fortschritt der Spieler. Die einzelnen `.sav`-Dateien gehören zusammen, sichere sie deshalb immer gemeinsam.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen und Admins sichern, lade zusätzlich folgende Datei herunter:

```
/Longvinter/Saved/Config/LinuxServer/Game.ini
```
::::

:::: warning Achtung
Spielstände von Longvinter können mehrere Gigabyte groß werden. Nutze für den Download einen SFTP-Client wie FileZilla oder WinSCP – über den Dateimanager im Browser brechen große Übertragungen leichter ab.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
