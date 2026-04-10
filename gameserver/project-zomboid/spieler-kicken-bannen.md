---
description: Spieler auf einem Project Zomboid Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Project Zomboid Server

Du kannst als Admin Spieler per Befehl kicken oder dauerhaft bannen.

:::: info Hinweis
Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler-Liste anzeigen

Gib folgenden Befehl ein, um alle verbundenen Spieler anzuzeigen:

```
/players
```

## Spieler kicken

```
/kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

Per Spielername:

```
/banuser <Name>
```

Per SteamID64:

```
/banid <SteamID64>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Spieler entbannen

Per Spielername:

```
/unbanuser <Name>
```

Per SteamID64:

```
/unbanid <SteamID64>
```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/players` | Spielerliste anzeigen |
| `/kick <Name>` | Spieler kicken |
| `/banuser <Name>` | Spieler per Name bannen |
| `/banid <SteamID64>` | Spieler per SteamID64 bannen |
| `/unbanuser <Name>` | Spieler per Name entbannen |
| `/unbanid <SteamID64>` | Spieler per SteamID64 entbannen |
