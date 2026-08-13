---
description: Text Chat auf einem Enshrouded Server aktivieren
---

# So aktivierst du den Text-Chat auf deinem Enshrouded Server

Enshrouded bringt einen eigenen Text-Chat mit. Auf einem Server ist er standardmäßig **ausgeschaltet** und wird über den Schlüssel `enableTextChat` in der Datei `enshrouded_server.json` aktiviert.

## Text-Chat aktivieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>enshrouded_server.json öffnen</b><br>
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis.

4. <b>Text-Chat einschalten</b><br>
   Setze den Schlüssel `enableTextChat` auf `true`. Er steht auf der **obersten Ebene** der Datei – also direkt neben `name` und `gameSettingsPreset` und **nicht** im Abschnitt `gameSettings`:

   ```json
   {
       "name": "Enshrouded Server",
       "saveDirectory": "./savegame",
       "logDirectory": "./logs",
       "enableTextChat": true,
       "gameSettingsPreset": "Default"
   }
   ```

   Der Ausschnitt ist gekürzt – deine Datei enthält weitere Schlüssel, unter anderem die Abschnitte `gameSettings` und `userGroups` weiter unten. Ändere ausschließlich die Zeile `enableTextChat` und lass den Rest unberührt. Kopiere den Ausschnitt nicht über deine Datei, sonst verlierst du alle anderen Einstellungen.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Mögliche Werte

| Wert | Beschreibung |
|------|-------------|
| `true` | Text-Chat ist aktiv |
| `false` | Text-Chat ist komplett deaktiviert (Standard) |

:::: warning Achtung
Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.
::::

:::: info Hinweis
Den Schlüssel `enableTextChat` gibt es seit Update 5 „Pact of the Flame“ (Version 0.8.0.0) vom 28. Januar 2025. Fehlt er in deiner Datei, ergänze ihn einfach selbst auf der obersten Ebene.
::::

:::: tip Tipp
Die Verwaltung überschreibt bei jedem Start nur `name`, `slotCount`, `queryPort` und `gameSettingsPreset`. Deine Text-Chat-Einstellung bleibt also dauerhaft erhalten.
::::

## Im Spiel

Ist der Text-Chat aktiv, findest du den Chatverlauf auf der Seite **Social** im Menü. Spieler können dort einzelne Mitspieler auswählen und deren Nachrichten stummschalten.

:::: tip Tipp
Prüfe die JSON-Datei nach dem Bearbeiten auf Syntax-Fehler, bevor du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server deine Einstellungen verwirft.
::::

Der Sprach-Chat wird über eigene Schlüssel gesteuert. Wie das geht, liest du unter [Voice Chat aktivieren](voice-chat-aktivieren.md).
