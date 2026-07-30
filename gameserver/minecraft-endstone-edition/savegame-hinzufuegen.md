---
description: Savegame auf einem Minecraft Endstone Edition Server hinzufügen
---

# So fügst du ein Savegame zu deinem Minecraft Endstone Edition Server hinzu

Ein Spielstand ist bei Endstone immer ein **kompletter Ordner** und keine einzelne Datei. Alle Welten liegen im Ordner `worlds` im Hauptordner deines Servers. Welche Welt geladen wird, entscheidet der Eintrag `level-name` in der Datei `server.properties`.

:::: danger Wichtig
Die Welt in den Ordner zu legen reicht **nicht** aus. Geladen wird ausschließlich die Welt, die unter `level-name` eingetragen ist. Passt der Name nicht exakt zum Ordnernamen, erzeugt der Server stattdessen eine komplett neue Welt.
::::

:::: info Hinweis
Endstone startet im Hintergrund den offiziellen Bedrock Dedicated Server. Bestehende Bedrock-Welten funktionieren deshalb unverändert weiter – du musst nichts konvertieren.
::::

## Aufbau eines Welt-Ordners

```
worlds
|___ meine_welt
     |___ db
     |___ level.dat
     |___ levelname.txt
```

| Datei / Ordner | Inhalt |
|----------------|--------|
| `db` | Die eigentliche Datenbank mit allen Chunks der Welt |
| `level.dat` | Weltdaten wie Seed, Spielregeln, Spawnpunkt und Zeit |
| `levelname.txt` | Der im Spiel lesbare Name der Welt |

:::: warning Achtung
Lade immer den kompletten Ordner samt `db`-Unterordner hoch. Fehlt der Ordner `db`, ist die Welt leer beziehungsweise unbrauchbar.
::::

## Lokale Welt finden

Möchtest du eine Welt aus deinem Minecraft Bedrock Client auf den Server übertragen, findest du sie auf deinem PC unter:

```
C:\Users\<Benutzername>\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\
```

:::: info Hinweis
Die Unterordner tragen eine interne Welt-ID und nicht den Namen, den du im Spiel siehst. Den lesbaren Namen findest du in der Datei `levelname.txt` im jeweiligen Ordner.
::::

:::: warning Achtung
Lade die Welt immer **entpackt** als Ordner hoch. Eine `.zip`- oder `.mcworld`-Datei kann der Server nicht laden. Benenne eine `.mcworld`-Datei dafür in `.zip` um, entpacke sie auf deinem PC und lade den entpackten Ordner hoch.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die geladene Welt.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle im Hauptordner deines Servers in folgenden Ordner:

   ```
   worlds
   ```

4. <b>Welt-Ordner hochladen</b><br>
   Lade den kompletten Ordner deiner Welt mit allen enthaltenen Dateien hoch. Vergib einen Ordnernamen ohne Leer- und Sonderzeichen, zum Beispiel `meine_welt`.

5. <b>server.properties öffnen</b><br>
   Öffne im Hauptordner deines Servers die Datei:

   ```
   server.properties
   ```

6. <b>Weltnamen eintragen</b><br>
   Suche den folgenden Eintrag und trage dort den Ordnernamen deiner hochgeladenen Welt ein:

   ```
   level-name=meine_welt
   ```

   :::: danger Wichtig
   Der Eintrag muss **exakt** dem Ordnernamen entsprechen – Groß- und Kleinschreibung inklusive. `Meine_Welt` und `meine_welt` sind zwei verschiedene Welten.
   ::::

7. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: tip Tipp
Erstelle vor dem Wechsel ein [Backup](backup-erstellen.md) deiner bisherigen Welt oder lade sie herunter: [Savegame herunterladen](savegame-herunterladen.md).
::::

## Neue Welt erzeugen lassen

Existiert der unter `level-name` eingetragene Ordner nicht, legt der Server die Welt beim Start neu an. Das ist gleichzeitig der häufigste Grund dafür, dass nach dem Hochladen plötzlich eine leere Welt erscheint: Dann stimmt der Eintrag `level-name` nicht mit dem Ordnernamen überein.
