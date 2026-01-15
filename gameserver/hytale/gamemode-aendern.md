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

:::: tip Hinweis
Der Spieler muss online auf dem Server sein.
::::

4. <b>Im Spiel</b><br>
   Der Befehl kann auch von Admins direkt im Spiel verwendet werden:
   ```
   /gamemode <adventure/creative> <Spielername>
   ```

## So änderst du den Standard-Gamemode

:::: tip Hinweis
Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Gamemode ändern</b><br>
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`.

4. <b>Server starten</b><br>
   Starte deinen Server.

## So änderst du den Standard-Gamemode für hochgeladene Welten

:::: tip Hinweis
Diese Methode ändert den Gamemode nur für neue Spieler. Bestehende Spieler müssen per Befehl geändert werden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Welt-Konfiguration öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zu:
   ```
   /universe/worlds/default/
   ```

3. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` in diesem Ordner.

4. <b>Gamemode ändern</b><br>
   Suche nach `GameMode` und ändere den Wert auf `Creative` oder `Adventure`.

5. <b>Server starten</b><br>
   Starte deinen Server.
