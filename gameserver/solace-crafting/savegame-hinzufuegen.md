---
description: Savegame auf einem Solace Crafting Server hinzufügen
---

# So fügst du ein Savegame zu deinem Solace Crafting Server hinzu

Eine Welt ist in Solace Crafting immer ein **kompletter Ordner** – der Ordnername ist gleichzeitig der Weltname. Welche Welt dein Server lädt, steht in der Konfigurationsdatei `servercfg.dat` unter `worldSaveToUse`.

:::: info Hinweis
Standardmäßig verwendet der Dedicated Server den Weltordner `MultiplayerWorld`. Existiert keine Welt mit diesem Namen, legt der Server beim Start automatisch eine neue Welt mit den Standardeinstellungen an.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Welt im Client vorbereiten

Die Welteinstellungen – Schwierigkeit, Seed, Biome und die verschiedenen Raten – werden ausschließlich beim **Erstellen einer Welt im Spiel** festgelegt. Auf dem Server lassen sie sich nachträglich nicht mehr ändern. Möchtest du eigene Einstellungen nutzen, gehst du deshalb den Umweg über den Client:

1. <b>Welt erstellen</b><br>
   Starte Solace Crafting auf deinem PC und erstelle eine neue Welt mit den gewünschten Einstellungen.

2. <b>Spiel beenden</b><br>
   Verlasse die Welt und schließe das Spiel, damit alle Dateien vollständig geschrieben sind.

## Lokalen Spielstand finden

Deine Welten liegen auf deinem PC unter:

```
%USERPROFILE%\AppData\LocalLow\Big Kitty Games\Solace Crafting\Worlds
```

:::: tip Tipp
Drücke `Windows-Taste + R`, gib den Pfad ein und bestätige mit Enter. Jeder Unterordner in `Worlds` ist eine Welt – du benötigst den **kompletten Ordner** samt Inhalt.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/Worlds/
   ```

   :::: info Hinweis
   Der Ordner `.config` beginnt mit einem Punkt und ist damit versteckt. Aktiviere in deinem SFTP-Programm die Anzeige versteckter Dateien, falls du ihn nicht siehst. Fehlt das Verzeichnis noch, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.
   ::::

4. <b>Weltordner hochladen</b><br>
   Lade den kompletten Weltordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

5. <b>Welt in der Konfiguration eintragen</b><br>
   Öffne folgende Datei:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   Trage bei `worldSaveToUse` den Namen deines hochgeladenen Weltordners ein:

   ```json
   "worldSaveToUse": "MeineWelt",
   ```

   :::: tip Alternative
   Statt den Wert anzupassen, kannst du deinen hochgeladenen Ordner auch einfach in `MultiplayerWorld` umbenennen. Dann bleibt die Standardkonfiguration unverändert.
   ::::

6. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: danger Wichtig
Ordnername und der Wert bei `worldSaveToUse` müssen exakt übereinstimmen – auch bei Groß- und Kleinschreibung. Passt der Name nicht, erstellt der Server stattdessen eine neue, leere Welt.
::::

:::: warning Achtung
Existiert im Zielverzeichnis bereits ein Ordner mit demselben Namen, wird der bisherige Spielstand überschrieben. Lade ihn vorher herunter, falls du ihn behalten möchtest: [Savegame herunterladen](savegame-herunterladen.md).
::::
