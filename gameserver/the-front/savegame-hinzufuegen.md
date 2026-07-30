---
description: Savegame auf einem The Front Server hinzufügen
---

# So fügst du ein Savegame zu deinem The Front Server hinzu

The Front kennt **keinen Weltnamen** in der Konfiguration. Ein Spielstand ist immer der komplette Ordner `GameStates` – keine einzelne Datei. Du lädst diesen Ordner mit allem Inhalt an die Stelle, an der dein Server seinen Spielstand erwartet.

:::: info Woher kommt der Spielstand?
Diese Anleitung beschreibt die Übertragung von Server zu Server – also einen Spielstand, den du zuvor von einem The Front Server heruntergeladen hast. Für Spielstände aus dem Einzelspieler- oder Koop-Modus gibt es keinen dokumentierten Weg auf einen Dedicated Server.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /TheFrontManager/<Konfigurationsname>/Saved/
   ```

   :::: info Welcher Konfigurationsname?
   Der Ordner trägt den Konfigurationsnamen deines Servers – denselben Namen, der auch in der Konfigurationsdatei `ServerConfig_<Konfigurationsname>.ini` steckt. Öffne den Ordner `/TheFrontManager/` – in der Regel liegt dort genau ein Unterordner, und das ist deiner.

   Existiert der Ordner noch nicht, starte den Server einmal, damit die Struktur angelegt wird, und stoppe ihn anschließend wieder.

   Gibt es kein `TheFrontManager`-Verzeichnis, arbeitet dein Server ohne eigenes Benutzerverzeichnis. Der Spielstand liegt dann unter `/ProjectWar/Saved/`.
   ::::

4. <b>Alten Spielstand entfernen</b><br>
   Benenne den vorhandenen Ordner `GameStates` um (zum Beispiel in `GameStates_alt`) oder lösche ihn.

   :::: warning Achtung
   Damit ist der bisherige Spielstand deines Servers nicht mehr aktiv. Sichere ihn vorher über [Savegame herunterladen](savegame-herunterladen.md) oder ein [Backup](backup-erstellen.md).
   ::::

5. <b>GameStates hochladen</b><br>
   Lade deinen Ordner `GameStates` mit allen Unterordnern und Dateien in dieses Verzeichnis hoch. Der Ordner muss exakt `GameStates` heißen.

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Konfigurationsname nicht ändern
Der Konfigurationsname deines Servers bestimmt sowohl den Ordner, in dem dein Spielstand liegt, als auch den Namen der Konfigurationsdatei. Änderst du diesen Namen, sucht dein Server in einem anderen Ordner – und legt dort eine komplett neue, leere Welt an. Dein alter Spielstand bleibt dabei auf der Festplatte liegen, wird aber nicht mehr geladen.

Der Name darf keine Leerzeichen und keine Sonderzeichen enthalten.
::::

:::: warning Achtung
Lade immer den kompletten Ordner `GameStates` hoch. Er enthält neben der Welt auch die Spieler-, Bau- und Gildendaten (`Worlds/`, `Players/`, `Accounts/`, `ConstructData.sav`, `GuildData.sav`). Mischst du Dateien aus verschiedenen Spielständen, passen Welt und Spielerdaten nicht mehr zusammen.
::::

:::: tip Server zurücksetzen
Möchtest du stattdessen komplett neu anfangen, stoppe den Server, lösche den Ordner `GameStates` und starte den Server erneut. Beim nächsten Start wird eine frische Welt erzeugt.
::::
