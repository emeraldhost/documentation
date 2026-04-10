---
description: Spieler auf einem Counter-Strike 2 Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Counter-Strike 2 Server

Du kannst Spieler über die Serverkonsole in der Verwaltung kicken und bannen.

:::: tip Tipp
Hier findest du eine Anleitung, wie du die [SteamID64](../steamid64-herausfinden.md) eines Spielers herausfindest.
::::

## Spieler über die Serverkonsole kicken oder bannen

1. <b>Serverkonsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Spieler anzeigen</b><br>
   Gib den Befehl `status` ein, um alle verbundenen Spieler und deren SteamID64 anzuzeigen.

3. <b>Spieler kicken oder bannen</b><br>
   Verwende einen der folgenden Befehle:

   ```
   kick <Name>
   ```

   ```
   banid <Minuten> <SteamID64>
   ```

:::: info Hinweis
Setze die Minuten auf `0`, um den Spieler dauerhaft zu bannen.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Alle verbundenen Spieler anzeigen |
| `kick <Name>` | Spieler vom Server kicken |
| `banid <Minuten> <SteamID64>` | Spieler für eine bestimmte Dauer bannen |
| `removeid <SteamID64>` | Ban eines Spielers aufheben |
