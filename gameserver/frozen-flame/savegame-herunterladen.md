---
description: Savegame von einem Frozen Flame Server herunterladen
---

# So lädst du das Savegame deines Frozen Flame Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Solange der Server läuft, schreibt er weiter in den Spielstand – du würdest sonst einen unvollständigen Stand herunterladen.
::::

1. <b>Spielstand speichern</b><br>
   Setze über RCON den folgenden Befehl ab, damit der aktuelle Stand auf die Festplatte geschrieben wird – siehe [Adminrechte nutzen](admin-hinzufuegen.md):

   ```
   Admin_SaveAll
   ```

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /FrozenFlame/Saved/
   ```

5. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner `SaveGames` auf deinen PC herunter:

   ```
   /FrozenFlame/Saved/SaveGames/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Sichere immer den **kompletten Ordner** `SaveGames`. Welche Dateien darin zu welchem Teil des Spielstands gehören, ist nicht dokumentiert – einzelne Dateien herauszupicken ist deshalb keine verlässliche Sicherung.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:

```
/FrozenFlame/Saved/Config/LinuxServer/
```

Dort liegen unter anderem die `Game.ini` und die `Engine.ini` deines Servers.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
