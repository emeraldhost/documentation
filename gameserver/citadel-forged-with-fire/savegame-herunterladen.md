---
description: Savegame von einem Citadel Forged with Fire Server herunterladen
---

# So lädst du das Savegame deines Citadel Forged with Fire Servers herunter

Du kannst den Spielstand deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Dein Server speichert im laufenden Betrieb automatisch – lädst du währenddessen herunter, kann der Spielstand unvollständig sein.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Citadel/Saved/SaveGames/
   ```

4. <b>Kompletten Ordner herunterladen</b><br>
   Lade den gesamten Inhalt dieses Verzeichnisses mit allen Unterordnern und Dateien auf deinen PC herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Was steckt im Savegame?
Der Ordner enthält die Weltdaten sowie die Daten aller Spieler. Die Charakterdaten sind nach der **SteamID64** des jeweiligen Spielers benannt. Wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest, erfährst du hier.
::::

:::: warning Achtung
Ein Spielstand ist immer der **komplette Ordnerinhalt**. Lade ihn stets vollständig herunter – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgenden Ordner herunter:

```
/Config/
```

Dort liegt unter anderem die `Game.ini` mit deinen Servereinstellungen.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
