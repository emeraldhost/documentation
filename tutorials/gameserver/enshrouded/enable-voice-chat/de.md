---
slug: "voice-chat-aktivieren"
language: "de"
title: "So aktivierst Du den Voice Chat auf Deinem Enshrouded Server"
description: "Voice Chat auf einem Enshrouded Server aktivieren"
tags: []
date: "2026-08-13"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Voice-Chat aktivieren"
sort: 13
related: ["gameserver/enshrouded/download-savegame", "gameserver/enshrouded/enable-text-chat", "gameserver/enshrouded/join-server", "gameserver/enshrouded/kick-ban-players"]
---

Enshrouded bringt einen eigenen Sprach-Chat mit. Auf einem Server ist er standardmäßig **ausgeschaltet** und wird über die Datei `enshrouded_server.json` aktiviert. Zusätzlich legst Du dort fest, ob sich Spieler nur in der Nähe oder serverweit hören.

## Voice Chat aktivieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **enshrouded_server.json öffnen**\
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis.

4. **Voice Chat einschalten**\
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

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Voice-Chat-Modi

| Wert | Beschreibung |
|------|-------------|
| `Proximity` | Nur Spieler in Deiner Nähe hören Dich (Standard) |
| `Global` | Alle Spieler auf dem Server hören Dich |

> [!WARNING]
> Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.

> [!NOTE]
> Die Schlüssel `enableVoiceChat` und `voiceChatMode` gibt es seit Update 5 „Pact of the Flame“ (Version 0.8.0.0) vom 28. Januar 2025. Fehlen sie in Deiner Datei, ergänze sie einfach selbst auf der obersten Ebene.

> [!TIP]
> Die Verwaltung überschreibt bei jedem Start nur `name`, `slotCount`, `queryPort` und `gameSettingsPreset`. Deine Voice-Chat-Einstellungen bleiben also dauerhaft erhalten.

## Im Spiel

Ist der Voice Chat aktiv, können Spieler ihr Mikrofon stummschalten, zwischen Push-to-Talk und offenem Mikrofon wählen und die Eingangslautstärke anpassen. Über die Seite **Social** im Menü lassen sich außerdem einzelne Mitspieler leiser stellen oder stummschalten.

> [!TIP]
> Prüfe die JSON-Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) auf Syntax-Fehler, bevor Du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server Deine Einstellungen verwirft.

Da Du für diese Änderung ohnehin die `enshrouded_server.json` öffnest, kannst Du im selben Zug auch Dein [Server Passwort ändern](/tutorials/gameserver/enshrouded/change-server-password) oder den [Text-Chat aktivieren](/tutorials/gameserver/enshrouded/enable-text-chat).
