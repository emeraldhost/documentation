---
description: Passwort auf einem Hytale Server setzen
---

# So setzt du ein Passwort auf einem Hytale Server

:::: tip Hinweis
Stoppe deinen Server bevor du Änderungen an Konfigurationsdateien vornimmst, da diese sonst vom Server überschrieben werden.
::::

## So setzt du ein Passwort

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfigurationsdatei öffnen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `config.json` im Hauptverzeichnis.

3. <b>Passwort festlegen</b><br>
   Suche nach der Einstellung `Password` und setze dein gewünschtes Passwort:
   ```json
   "Password": "DeinPasswort123"
   ```

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderungen übernommen werden.

Spieler müssen nun das Passwort eingeben, um dem Server beizutreten.

## So entfernst du das Passwort

Um das Passwort zu entfernen, setze den Wert auf leer:
```json
"Password": ""
```

:::: tip Hinweis
Ein Passwort ist eine einfache Alternative zur Whitelist. Du kannst das Passwort an Freunde weitergeben, ohne jeden einzeln zur Whitelist hinzufügen zu müssen.
::::
