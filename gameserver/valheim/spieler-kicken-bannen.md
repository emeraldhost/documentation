---
description: Spieler auf einem Valheim Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Valheim Server

Du kannst Spieler per Ingame-Konsole kicken und bannen oder die Banliste manuell per SFTP bearbeiten.

## Spieler per Konsole kicken und bannen

Öffne die Konsole mit `F5` und gib folgende Befehle ein:

### Spieler kicken

```
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

### Spieler bannen

```
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

### Spieler entbannen

```
unban <Name>
```

## Banliste manuell bearbeiten

Du kannst die Banliste und die Erlaubtliste auch direkt per SFTP bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Dateien bearbeiten</b><br>
   Öffne die Dateien unter `/config/`:

   - `banlist.txt` – Gebannte Spieler (eine SteamID64 pro Zeile)
   - `permittedlist.txt` – Erlaubte Spieler (eine SteamID64 pro Zeile)

4. <b>SteamID64 hinzufügen oder entfernen</b><br>
   Füge die SteamID64 des Spielers in eine neue Zeile ein oder entferne sie.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Name>` | Spieler kicken |
| `ban <Name>` | Spieler bannen |
| `unban <Name>` | Spieler entbannen |
