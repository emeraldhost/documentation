---
description: Spieler auf einem Soulmask Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Soulmask Server

Du kannst als Admin Spieler per GM-Befehl kicken oder dauerhaft bannen.

:::: info Hinweis
Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Banliste aktivieren

Bevor du Spieler bannen kannst, musst du die Banliste aktivieren. Öffne die Konsole mit `~` und gib ein:

```
gm EnableServerPermissionList 1 1
```

## Spieler kicken

```
gm KickPlayer <SteamID64>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
gm AddServerPermissionList 1 <SteamID64>
```

Der Spieler wird sofort gekickt und dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```
gm RemoveServerPermissionList 1 <SteamID64>
```

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Banliste manuell bearbeiten

Du kannst die Banliste auch direkt per [SFTP](../sftp-verbindung-herstellen.md) bearbeiten. Die Datei liegt unter:

```
/WS/Saved/BlackAccountList.txt
```

Jede Zeile enthält eine SteamID64 eines gebannten Spielers.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `gm EnableServerPermissionList 1 1` | Banliste aktivieren |
| `gm KickPlayer <SteamID64>` | Spieler kicken |
| `gm AddServerPermissionList 1 <SteamID64>` | Spieler bannen |
| `gm RemoveServerPermissionList 1 <SteamID64>` | Spieler entbannen |
