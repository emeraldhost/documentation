---
description: Savegame von einem Solace Crafting Server herunterladen
---

# So lädst du das Savegame deines Solace Crafting Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   :::: info Hinweis
   Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in deinem SFTP-Programm die Anzeige versteckter Dateien, falls du ihn nicht siehst.
   ::::

4. <b>Weltordner herunterladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien auf deinen PC herunter. Liegen mehrere Welten im Verzeichnis, lade im Zweifel alle Ordner herunter.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: tip Die richtige Welt finden
Welche Welt dein Server aktuell lädt, steht in der Datei `servercfg.dat` beim Wert `worldSaveToUse`. Der dort eingetragene Name entspricht dem Ordnernamen im Verzeichnis `Worlds`. Ohne Änderung ist das der Ordner `MultiplayerWorld`.
::::

:::: tip Konfiguration mitsichern
Möchtest du auch deine Servereinstellungen sichern, lade zusätzlich folgende Datei herunter:

```
/.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
```
::::

:::: tip Welt lokal weiterspielen
Möchtest du die heruntergeladene Welt auf deinem PC im Einzelspieler weiterspielen, legst du den Weltordner in folgendem Verzeichnis ab:

```
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
