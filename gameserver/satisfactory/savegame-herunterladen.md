---
description: Savegame von einem Satisfactory Server herunterladen
---

# So lädst du das Savegame deines Satisfactory Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Satisfactory speichert im laufenden Betrieb automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /.config/Epic/FactoryGame/Saved/SaveGames/server/
   ```

   :::: info Hinweis
   Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in deinem SFTP-Programm die Anzeige versteckter Dateien, falls du ihn nicht siehst.
   ::::

4. <b>Spielstand herunterladen</b><br>
   Lade die gewünschte `.sav`-Datei auf deinen PC herunter. Der Dateiname entspricht dem Namen der Session im Spiel.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Welche Datei ist die richtige?
Liegen mehrere `.sav`-Dateien im Ordner, ist die zuletzt geänderte in der Regel dein aktueller Spielstand. Beim automatischen Speichern legt der Server zusätzlich rotierende Autosave-Dateien an, deren Namen auf `_autosave_0`, `_autosave_1` und so weiter enden. Welche Session geladen ist, siehst du außerdem im **Server Manager** im Reiter **Manage Saves**.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:

```
/FactoryGame/Saved/Config/LinuxServer/
```

Servername sowie Admin- und Server-Passwort liegen dagegen im übergeordneten Ordner in einer Datei, die mit `ServerSettings.` beginnt und den Game Port deines Servers im Namen trägt:

```
/.config/Epic/FactoryGame/Saved/SaveGames/
```
::::

:::: danger Wichtig
Lösche die `ServerSettings.`-Datei nicht auf dem Server. Ohne sie verliert der Server seinen Namen, sein Admin Passwort, sein Server Passwort und sein Zertifikat und gilt wieder als nicht beansprucht.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
