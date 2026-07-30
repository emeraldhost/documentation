---
description: Savegame von einem Minecraft Endstone Edition Server herunterladen
---

# So lädst du das Savegame deines Minecraft Endstone Edition Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Im laufenden Betrieb schreibt der Server ständig in die Welt-Datenbank – du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Aktive Welt herausfinden</b><br>
   Öffne im Hauptordner deines Servers die Datei `server.properties`. Der Eintrag `level-name` nennt den Ordnernamen der aktuell geladenen Welt:

   ```
   level-name=meine_welt
   ```

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle im Hauptordner deines Servers in folgenden Ordner:

   ```
   worlds
   ```

5. <b>Welt-Ordner herunterladen</b><br>
   Jede Welt liegt hier als eigener Ordner. Lade den Ordner deiner Welt **vollständig** herunter – inklusive des Unterordners `db` sowie der Dateien `level.dat` und `levelname.txt`.

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: danger Wichtig
Der Unterordner `db` enthält die eigentliche Datenbank mit allen Chunks. Ohne ihn ist der heruntergeladene Spielstand wertlos.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen und Spielerlisten sichern, lade zusätzlich folgende Dateien und Ordner aus dem Hauptordner deines Servers herunter:

```
server.properties
endstone.toml
permissions.json
allowlist.json
banned-players.json
banned-ips.json
plugins
```
::::

:::: warning Achtung
Im Ordner `plugins` liegt der Unterordner `.local`, den Endstone selbst verwaltet. Du kannst ihn beim Sichern weglassen – Endstone legt ihn beim nächsten Start neu an.
::::

:::: tip Spielstand wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
