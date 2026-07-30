---
description: Spieler auf einem Unturned Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Unturned Server

Spieler entfernst du auf einem Unturned Server über Befehle – entweder in der **Konsole** der Verwaltung oder als Admin direkt im Spielchat. Die Befehle wirken sofort, ein Neustart ist nicht nötig.

:::: warning Voraussetzung
Für die Befehle im Spielchat brauchst du Adminrechte. Hier findest du eine Anleitung, wie du einen [Admin hinzufügst](admin-hinzufuegen.md). In der Konsole der Verwaltung funktionieren die Befehle immer.
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du die [SteamID64](../steamid64-herausfinden.md) eines Spielers herausfindest.
::::

## Befehle eingeben

1. <b>Konsole oder Chat öffnen</b><br>
   Öffne die **Konsole** in der Verwaltung deines Servers oder – als Admin im Spiel – den Chat.

2. <b>Befehl eingeben</b><br>
   In der Konsole gibst du den Befehl ohne Präfix ein, im Spielchat mit einem vorangestellten `/` oder `@`:

   ```
   kick Sam/AFK
   ```

   ```
   /kick Sam/AFK
   ```

:::: danger Parameter werden mit Schrägstrich getrennt
Anders als in vielen anderen Spielen trennt Unturned die Parameter mit einem **`/`** statt mit einem Leerzeichen. `ban Sam Griefing` funktioniert also nicht – richtig ist `ban Sam/Griefing`.
::::

## Spieler kicken

```
kick <SteamID64|Spielername>/<Grund>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Lässt du den Grund weg, wird der Spieler mit dem Grund "unspecified" gekickt.

:::: tip Beispiel
```
kick 76561198012345678/AFK
```
::::

## Spieler bannen

```
ban <SteamID64|Spielername>/<Grund>/<Dauer in Sekunden>
```

Der Spieler wird vom Server geworfen und kann sich für die angegebene Dauer nicht mehr verbinden.

:::: tip Beispiel
```
ban 76561198012345678/Griefing/86400
```

Das bannt den Spieler für einen Tag (86.400 Sekunden).
::::

:::: info Dauer weglassen
Gibst du keine Dauer an, wird der Spieler für 31.536.000 Sekunden gebannt – das entspricht 365 Tagen. Für einen längeren Ausschluss trägst du einen entsprechend größeren Wert in Sekunden ein.
::::

| Dauer | Wert in Sekunden |
|-------|------------------|
| 1 Stunde | `3600` |
| 1 Tag | `86400` |
| 7 Tage | `604800` |
| 30 Tage | `2592000` |
| 365 Tage | `31536000` |

## Bann aufheben

```
unban <SteamID64>
```

:::: warning Achtung
Beim Entbannen funktioniert **nur die SteamID64** – der Spielername nicht, weil der Spieler nicht mehr auf dem Server ist. Notiere dir die SteamID64 deshalb, bevor du jemanden bannst.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `kick <SteamID64\|Spielername>/<Grund>` | Spieler vom Server trennen |
| `ban <SteamID64\|Spielername>/<Grund>/<Sekunden>` | Spieler aussperren |
| `unban <SteamID64>` | Bann aufheben |
| `admin <SteamID64\|Spielername>` | Spieler zum Admin machen |
| `unadmin <SteamID64\|Spielername>` | Adminrechte entziehen |
| `save` | Spielstand speichern |
| `shutdown` | Spielstand speichern und Server herunterfahren |

## Bannliste

:::: warning Bannliste über die Befehle pflegen
Banns werden unter `/Servers/<ServerID>/Server/Blacklist.dat` gespeichert. Banne und entbanne ausschließlich über die Befehle `ban` und `unban` – so bleibt die Liste garantiert gültig. Möchtest du alle Banns auf einen Schlag aufheben, kannst du die Datei bei gestopptem Server auch löschen.
::::

## Server nur für bestimmte Spieler öffnen

:::: info Whitelist
Unturned kennt zusätzlich den Konfigurationsbefehl `Whitelisted` für die `Commands.dat`. Damit ist dein Server nur noch für freigegebene Spieler zugänglich. Wie du Spieler auf diese Liste setzt, ist offiziell nicht dokumentiert – möchtest du deinen Server einfach nur privat halten, ist ein Server-Passwort der unkompliziertere Weg.
::::
