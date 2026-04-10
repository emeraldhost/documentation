---
description: Spieler auf einem ARK Survival Evolved Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem ARK Survival Evolved Server

Du kannst Spieler per Konsolenbefehl kicken und bannen.

:::: warning Voraussetzung
Du musst Admin auf deinem Server sein. Hier findest du eine Anleitung, wie du einen [Admin hinzufügst](admin-hinzufuegen.md).
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du die [SteamID64](../steamid64-herausfinden.md) eines Spielers herausfindest.
::::

## Spieler per Konsolenbefehl kicken oder bannen

1. <b>Server beitreten</b><br>
   Tritt deinem ARK Survival Evolved Server bei.

2. <b>Konsole öffnen</b><br>
   Drücke die `Tab`-Taste, um die Konsole zu öffnen.

3. <b>Spieler anzeigen</b><br>
   Gib den Befehl `ListPlayers` ein, um alle verbundenen Spieler und deren SteamID64 anzuzeigen.

4. <b>Spieler kicken oder bannen</b><br>
   Verwende einen der folgenden Befehle:

   ```
   KickPlayer <SteamID64>
   ```

   ```
   BanPlayer <SteamID64>
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `ListPlayers` | Alle verbundenen Spieler anzeigen |
| `KickPlayer <SteamID64>` | Spieler vom Server kicken |
| `BanPlayer <SteamID64>` | Spieler dauerhaft bannen |
| `UnbanPlayer <SteamID64>` | Ban eines Spielers aufheben |
