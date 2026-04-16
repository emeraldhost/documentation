---
description: Savegame auf einem Valheim Server hinzufügen
---

# So fügst du ein Savegame zu deinem Valheim Server hinzu

Du kannst einen lokalen Spielstand auf deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. <b>Welt-Dateien identifizieren</b><br>
   Jede Welt besteht aus zwei Dateien mit demselben Namen: `<WeltName>.fwl` (Welt-Metadaten) und `<WeltName>.db` (Weltdaten). Beide Dateien müssen gemeinsam übertragen werden.

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt-Dateien hochladen</b><br>
   Lade die beiden Dateien `<WeltName>.fwl` und `<WeltName>.db` in folgendes Verzeichnis hoch:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. <b>Welt-Namen setzen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Welt Name** den Namen deiner hochgeladenen Dateien ein – ohne Dateiendung (z.B. `MyWorld` für `MyWorld.fwl` und `MyWorld.db`).

5. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server.

:::: warning Achtung
Falls der Ordner `worlds_local` nicht existiert, starte den Server einmal, damit die Ordnerstruktur automatisch erstellt wird. Stoppe den Server anschließend wieder, bevor du die Dateien hochlädst.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein Backup deines bisherigen Server-Savegames, falls du später zurückwechseln möchtest.
::::
