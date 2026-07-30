---
description: Savegame auf einem Unturned Server hinzufügen
---

# So fügst du ein Savegame zu deinem Unturned Server hinzu

Ein Unturned-Spielstand ist kein einzelnes File, sondern besteht aus den Ordnern `Level/` (die Welt) und `Players/` (die Charaktere) innerhalb deines Server-Ordners unter `/Servers/`. Einen Weltnamen musst du dabei nirgends eintragen – der Ordner unter `Level/` heißt immer wie die Karte, auf der der Spielstand entstanden ist.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Spielstands, falls du später zurückwechseln möchtest.
::::

## Aufbau eines Spielstands

```
/Servers/<ServerID>/
        ├── Level/<Kartenname>/   ← Bauten, Fahrzeuge, Objekte
        └── Players/              ← Charaktere, je Spieler ein Unterordner
```

:::: info Welcher Ordner ist meiner?
`<ServerID>` ist der Ordnername unter `/Servers/`. Er stammt aus dem Startparameter deines Servers – in der Regel liegt dort genau ein Ordner.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien und würde deine Dateien beim Beenden überschreiben.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in den Ordner deines Servers:

   ```
   /Servers/<ServerID>/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Alten Spielstand entfernen</b><br>
   Lösche die vorhandenen Ordner `Level/` und `Players/`, falls du den bisherigen Spielstand vollständig ersetzen möchtest. Bleiben Reste der alten Welt liegen, kann es zu Mischständen kommen.

5. <b>Ordner hochladen</b><br>
   Lade die Ordner `Level/` und `Players/` deines Spielstands vollständig in dieses Verzeichnis hoch.

6. <b>Karte eintragen</b><br>
   Öffne die Datei

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   und trage dort die Karte ein, die zum Ordnernamen unter `Level/` passt – eine Anweisung pro Zeile:

   ```
   Map Washington
   ```

7. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Karte und Ordnername müssen zusammenpassen
Heißt der Ordner unter `Level/` zum Beispiel `Elver`, muss in der `Commands.dat` auch `Map Elver` stehen. Stimmt der Name nicht überein, erzeugt der Server eine neue, leere Welt – dein hochgeladener Spielstand wird dann ignoriert.
::::

:::: warning Workshop-Karten zusätzlich eintragen
Stammt dein Spielstand von einer Workshop-Karte (z.B. Elver, Carpat oder Hawaii), reicht der `Map`-Eintrag nicht aus. Die Karte muss zusätzlich in der Datei `WorkshopDownloadConfig.json` hinterlegt sein, damit dein Server sie herunterlädt. Wie das geht, steht unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

## Charaktere übernehmen

Im Ordner `Players/` liegen die Spielerstände. Möchtest du nur die Welt übernehmen und alle Spieler frisch starten lassen, lädst du ausschließlich `Level/` hoch und lässt `Players/` weg. Umgekehrt bleiben die Charaktere erhalten, wenn du `Players/` unangetastet lässt und nur `Level/` austauschst.

:::: danger Einzelspieler-Welten
Ob sich eine Einzelspieler-Welt aus dem `Worlds`-Ordner deiner lokalen Unturned-Installation auf einem Dedicated Server verwenden lässt, ist **nicht dokumentiert**. Es gibt dafür kein offizielles Verfahren. Arbeite in jedem Fall nur mit Kopien und erstelle vorher ein Backup – ein Versuch kann fehlschlagen oder zu unerwartetem Verhalten führen. Zuverlässig funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen.
::::

:::: info Hinweis
Unturned speichert nicht automatisch. Damit dein Fortschritt erhalten bleibt, gib vor jedem Stoppen `save` in der Konsole ein oder fahre den Server mit `shutdown` herunter.
::::
