---
description: World-Seed auf einem Minecraft Java Edition Server ändern
---

# So änderst du den World-Seed auf einem Minecraft Java Server

Der World-Seed legt fest, wie die Welt generiert wird. Er wirkt sich **nur auf neu generierte Welten** aus — du musst deine bestehende Welt daher vorher löschen.

:::: danger Achtung
Deine aktuelle Welt geht dabei unwiderruflich verloren. Erstelle vorher ein [Backup](backup-erstellen.md), falls du sie später noch benötigst.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Seed eintragen</b><br>
   Öffne die Datei `server.properties`, suche den Eintrag `level-seed=` und trage den gewünschten Seed ein:

   ```
   level-seed=5101553622029575588
   ```

   Speichere die Datei anschließend.

4. <b>Alte Welt löschen</b><br>
   Lösche im Hauptverzeichnis den Ordner `world`. Ohne diesen Schritt lädt der Server einfach deine alte Welt weiter und der neue Seed bleibt wirkungslos.

   :::: info Paper, Spigot & Purpur
   Auf diesen Servern liegen Nether und End in eigenen Ordnern. Lösche zusätzlich `world_nether` und `world_the_end`, damit auch diese Dimensionen neu generiert werden.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server. Die Welt wird nun mit deinem neuen Seed erzeugt.

:::: tip Tipp
Den Seed einer bestehenden Welt findest du heraus, indem du im Spiel den Befehl `/seed` eingibst. Lässt du `level-seed=` leer, generiert der Server einen zufälligen Seed.
::::
