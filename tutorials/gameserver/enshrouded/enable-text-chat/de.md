---
slug: "text-chat-aktivieren"
language: "de"
title: "So aktivierst Du den Text-Chat auf Deinem Enshrouded Server"
description: "Text Chat auf einem Enshrouded Server aktivieren"
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
short_title: "Text-Chat aktivieren"
sort: 12
related: ["gameserver/enshrouded/create-backup", "gameserver/enshrouded/download-savegame", "gameserver/enshrouded/enable-voice-chat", "gameserver/enshrouded/join-server"]
---

Enshrouded bringt einen eigenen Text-Chat mit. Auf einem Server ist er standardmäßig **ausgeschaltet** und wird über den Schlüssel `enableTextChat` in der Datei `enshrouded_server.json` aktiviert.

## Text-Chat aktivieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **enshrouded_server.json öffnen**\
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis.

4. **Text-Chat einschalten**\
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

   Der Ausschnitt ist gekürzt – Deine Datei enthält weitere Schlüssel, unter anderem die Abschnitte `gameSettings` und `userGroups` weiter unten. Ändere ausschließlich die Zeile `enableTextChat` und lass den Rest unberührt. Kopiere den Ausschnitt nicht über Deine Datei, sonst verlierst Du alle anderen Einstellungen.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Mögliche Werte

| Wert | Beschreibung |
|------|-------------|
| `true` | Text-Chat ist aktiv |
| `false` | Text-Chat ist komplett deaktiviert (Standard) |

> [!WARNING]
> Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.

> [!NOTE]
> Den Schlüssel `enableTextChat` gibt es seit Update 5 „Pact of the Flame“ (Version 0.8.0.0) vom 28. Januar 2025. Fehlt er in Deiner Datei, ergänze ihn einfach selbst auf der obersten Ebene.

> [!TIP]
> Die Verwaltung überschreibt bei jedem Start nur `name`, `slotCount`, `queryPort` und `gameSettingsPreset`. Deine Text-Chat-Einstellung bleibt also dauerhaft erhalten.

## Im Spiel

Ist der Text-Chat aktiv, findest Du den Chatverlauf auf der Seite **Social** im Menü. Spieler können dort einzelne Mitspieler auswählen und deren Nachrichten stummschalten.

> [!TIP]
> Prüfe die JSON-Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) auf Syntax-Fehler, bevor Du den Server startest – ein einzelnes fehlendes Komma kann dazu führen, dass der Server Deine Einstellungen verwirft.

Der Sprach-Chat wird über eigene Schlüssel gesteuert. Wie das geht, liest Du unter [Voice Chat aktivieren](/tutorials/gameserver/enshrouded/enable-voice-chat).
