---
description: Schritt-für-Schritt-Anleitung, wie du den World-Seed auf deinem Minecraft Bedrock Edition Server änderst.
---

# So änderst du den World-Seed auf deinem Minecraft Bedrock Server

Der World-Seed legt fest, wie die Welt generiert wird. Er wirkt sich **nur auf neu generierte Welten** aus — du musst deine bestehende Welt daher vorher löschen.

:::: danger Achtung
Deine aktuelle Welt geht dabei unwiderruflich verloren. Erstelle vorher ein [Backup](backup-erstellen.md), falls du sie später noch benötigst.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei-Browser öffnen</b><br>
   Öffne den Datei-Browser oder verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Seed eintragen</b><br>
   Öffne die Datei `server.properties`, suche den Eintrag `level-seed=` und trage den gewünschten Seed ein:

   ```
   level-seed=1111132940
   ```

   Speichere die Datei anschließend.

4. <b>Alte Welt löschen</b><br>
   Wechsle in den Ordner `worlds` und lösche dort den Ordner `Bedrock level`. Ohne diesen Schritt lädt der Server einfach deine alte Welt weiter und der neue Seed bleibt wirkungslos.

   :::: info Hinweis
   Hast du in der `server.properties` unter `level-name` einen eigenen Weltnamen eingetragen, heißt der Ordner entsprechend anders.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server. Die Welt wird nun mit deinem neuen Seed erzeugt.

:::: tip Tipp
Den Seed einer bestehenden Welt findest du heraus, indem du im Spiel den Befehl `/seed` eingibst. Lässt du `level-seed=` leer, generiert der Server einen zufälligen Seed.
::::
