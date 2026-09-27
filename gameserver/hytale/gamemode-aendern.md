---
description: Gamemode auf einem Hytale Server ändern
---

# So änderst du den Gamemode auf einem Hytale Server

## Verfügbare Gamemodes

| Gamemode | Beschreibung |
| -------- | ------------ |
| Adventure | Überlebe in der Wildnis, sammle Ressourcen und stelle dich Gegnern |
| Creative | Baue ohne Grenzen mit unbegrenzten Ressourcen und ohne Schaden |

## So änderst du den Gamemode eines Spielers

1. <b>Server starten</b><br>
   Stelle sicher, dass dein Server läuft.

2. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

3. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   gamemode <adventure/creative> <Spielername>
   ```

:::: info Hinweis
Der Spieler muss online auf dem Server sein. Statt `adventure` und `creative` kannst du auch die Kurzformen `a` und `c` verwenden, statt `gamemode` auch `gm` (z.B. `gm c Spielername`).
::::

4. <b>Im Spiel</b><br>
   Der Befehl kann auch von Admins direkt im Spiel verwendet werden:
   ```
   /gamemode <adventure/creative> <Spielername>
   ```
   Lässt du den Spielernamen weg, änderst du deinen eigenen Gamemode (z.B. `/gamemode creative`).

## So änderst du den Standard-Gamemode

:::: info Hinweis
Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Gamemode ändern</b><br>
   Suche im Abschnitt `Defaults` nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`:
   ```json
   "GameMode": "Creative",
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

## So änderst du den Standard-Gamemode für hochgeladene Welten

:::: info Hinweis
Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden. Ist in der Welt ein Gamemode eingetragen, hat er Vorrang vor dem Standard-Gamemode aus der `config.json` im Hauptverzeichnis.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/default/
   ```
   Ersetze `default` durch den Namen deiner Welt, falls sie anders heißt.

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` in diesem Ordner.

4. <b>Gamemode ändern</b><br>
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`. Neue Welten enthalten diesen Eintrag standardmäßig nicht. Füge ihn in diesem Fall in einer neuen Zeile hinzu, z.B. direkt über `"IsSpawningNPC"`:
   ```json
   "GameMode": "Creative",
   ```

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) — ein fehlendes oder überzähliges Komma reicht, damit der Server die Welt-Konfiguration nicht mehr laden kann.
   ::::

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: tip Tipp
Alternativ kannst du den Gamemode einer Welt bei laufendem Server per Konsole festlegen, z.B. `world settings gamemode set creative --world default`. Mit `world settings gamemode reset --world default` setzt du ihn wieder zurück.
::::
