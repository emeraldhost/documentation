---
description: Spieler auf einem Valheim Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Valheim Server

Du kannst Spieler per Ingame-Konsole kicken und bannen oder die Banliste manuell per SFTP bearbeiten.

## Spieler per Konsole kicken und bannen

Öffne die Konsole mit `F5` und gib folgende Befehle ein. Die Befehle funktionieren nur, wenn du in der `adminlist.txt` eingetragen bist – siehe [Admin hinzufügen](admin-hinzufuegen.md).

### Spieler kicken

```
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

### Spieler bannen

```
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen. Ist er gerade online, trägt der Server seine Spieler-ID in die `bannedlist.txt` ein, sonst den eingegebenen Namen.

### Spieler entbannen

```
unban <ID>
```

Gib den Eintrag genau so ein, wie er in der Banliste steht. Mit dem Befehl `banned` lässt du dir alle gebannten Einträge anzeigen.

## Banliste manuell bearbeiten

Du kannst die Banliste und die Erlaubtliste auch direkt per SFTP bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Dateien bearbeiten</b><br>
   Öffne die Dateien unter `/.config/unity3d/IronGate/Valheim/`:

   - `bannedlist.txt` – Gebannte Spieler (eine Spieler-ID pro Zeile)
   - `permittedlist.txt` – Erlaubte Spieler (eine Spieler-ID pro Zeile), siehe [Whitelist aktivieren](whitelist-aktivieren.md)

4. <b>Spieler-ID hinzufügen oder entfernen</b><br>
   Füge die Spieler-ID des Spielers in eine neue Zeile ein oder entferne sie. Willst du einen Spieler entbannen, entferne alle Zeilen, die zu ihm gehören – ein Steam-Spieler kann in mehreren Schreibweisen eingetragen sein. Übernimm die ID genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung, z.B. `V_76561198012345678`. Für Steam-Spieler funktionieren auch die ältere Form `Steam_76561198012345678` und die reine SteamID64. Crossplay-Spieler (z.B. von Xbox, PlayStation 5 oder Nintendo Switch 2) haben keine SteamID64, für sie brauchst du immer die ID aus der Spielerliste oder dem Server-Log.

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
| `unban <ID>` | Spieler entbannen |
| `banned` | Gebannte Spieler anzeigen |
