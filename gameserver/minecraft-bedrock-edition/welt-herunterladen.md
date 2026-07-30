---
description: Welt von einem Minecraft Bedrock Edition Server herunterladen
---

# So lädst du die Welt deines Minecraft Bedrock Edition Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Minecraft Bedrock Edition Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle im Hauptordner deines Servers in folgenden Ordner:

   ```
   worlds
   ```

4. <b>Welt-Ordner herunterladen</b><br>
   Jede Welt liegt hier als eigener Ordner. Lade den Ordner deiner Welt vollständig auf deinen PC herunter, standardmäßig heißt er `Bedrock level`.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Tipp
Welche Welt aktuell geladen wird, siehst du in der Datei `server.properties` im Hauptordner deines Servers. Der Eintrag `level-name=` gibt den Namen des Welt-Ordners an:

```
level-name=Bedrock level
```
::::

:::: tip Welt wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](welt-hochladen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
