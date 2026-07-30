---
description: Savegame von einem Core Keeper Server herunterladen
---

# So lädst du das Savegame deines Core Keeper Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

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
   /.config/unity3d/Pugstorm/CoreKeeper/DedicatedServer/worlds/
   ```

4. <b>Welt-Datei herunterladen</b><br>
   Lade die `.world.gzip`-Datei deiner Welt auf deinen PC herunter, zum Beispiel `0.world.gzip`. Liegen mehrere Welten im Verzeichnis, lade einfach alle Dateien herunter, wenn du auf Nummer sicher gehen willst.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Die richtige Welt-Datei finden
Die Zahl vor `.world.gzip` ist der **World Index**. Welche Welt dein Server aktuell lädt, erkennst du am World Index in den Server-Einstellungen: Steht dieser auf `0`, ist `0.world.gzip` die aktive Welt, bei `3` entsprechend `3.world.gzip`.
::::

:::: tip Tipp
Möchtest du die heruntergeladene Welt lokal im Einzelspieler weiterspielen, legst du die `.world.gzip`-Datei auf deinem PC in folgendem Ordner ab:

```
%USERPROFILE%\AppData\LocalLow\Pugstorm\Core Keeper\Steam\<SteamID>\worlds
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
