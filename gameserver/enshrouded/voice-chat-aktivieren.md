---
description: Voice Chat auf einem Enshrouded Server aktivieren
---

# So aktivierst du den Voice Chat auf deinem Enshrouded Server

Enshrouded bringt einen eigenen Sprach-Chat mit. Auf einem Server ist er standardmäßig **ausgeschaltet** und wird über die Datei `enshrouded_server.json` aktiviert. Zusätzlich legst du dort fest, ob sich Spieler nur in der Nähe oder serverweit hören.

## Voice Chat aktivieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>enshrouded_server.json öffnen</b><br>
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis.

4. <b>Voice Chat einschalten</b><br>
   Setze den Schlüssel `enableVoiceChat` auf `true` und wähle bei `voiceChatMode` den gewünschten Modus. Beide Schlüssel stehen auf der **obersten Ebene** der Datei – also direkt neben `name` und `gameSettingsPreset` und **nicht** im Abschnitt `gameSettings`:

   ```json
   {
       "name": "Enshrouded Server",
       "saveDirectory": "./savegame",
       "logDirectory": "./logs",
       "voiceChatMode": "Proximity",
       "enableVoiceChat": true,
       "enableTextChat": false,
       "gameSettingsPreset": "Default"
   }
   ```

   Der Ausschnitt zeigt nur einen Teil der Datei – dazwischen und darunter stehen weitere Schlüssel wie `userGroups` und `gameSettings`. Ändere nur die Zeilen `enableVoiceChat` und `voiceChatMode` und lass den Rest unberührt.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Voice-Chat-Modi

| Wert | Beschreibung |
|------|-------------|
| `Proximity` | Nur Spieler in deiner Nähe hören dich (Standard) |
| `Global` | Alle Spieler auf dem Server hören dich |

:::: warning Achtung
Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.
::::

:::: info Hinweis
Die Schlüssel `enableVoiceChat` und `voiceChatMode` gibt es seit Update 5 „Pact of the Flame“ (Version 0.8.0.0) vom 28. Januar 2025. Fehlen sie in deiner Datei, ergänze sie einfach selbst auf der obersten Ebene.
::::

:::: tip Tipp
Die Verwaltung überschreibt bei jedem Start nur `name`, `slotCount`, `queryPort` und `gameSettingsPreset`. Deine Voice-Chat-Einstellungen bleiben also dauerhaft erhalten.
::::

## Im Spiel

Ist der Voice Chat aktiv, können Spieler ihr Mikrofon stummschalten, zwischen Push-to-Talk und offenem Mikrofon wählen und die Eingangslautstärke anpassen. Über die Seite **Social** im Menü lassen sich außerdem einzelne Mitspieler leiser stellen oder stummschalten.

:::: tip Tipp
Prüfe die JSON-Datei nach dem Bearbeiten auf Syntax-Fehler, bevor du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server deine Einstellungen verwirft.
::::

Da du für diese Änderung ohnehin die `enshrouded_server.json` öffnest, kannst du im selben Zug auch dein [Server Passwort ändern](server-passwort-aendern.md) oder den [Text-Chat aktivieren](text-chat-aktivieren.md).
