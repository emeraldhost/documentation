---
description: Spieler auf einem Terraria tModLoader Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Terraria tModLoader Server

Du kannst Spieler über die Serverkonsole kicken und bannen.

## Spieler kicken

Gib folgenden Befehl in der Serverkonsole ein:

```
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

Per Konsole:

```
unban <Name>
```

Du kannst die Banliste auch manuell bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>banlist.txt bearbeiten</b><br>
   Öffne die Datei `banlist.txt` und entferne die Zeile mit dem Spielernamen.

4. <b>Server starten</b><br>
   Starte deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Name>` | Spieler kicken |
| `ban <Name>` | Spieler bannen |
| `unban <Name>` | Spieler entbannen |
