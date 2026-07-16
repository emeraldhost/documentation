---
description: Spieler auf einem Palworld Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Palworld Server

Du kannst als Admin Spieler per Befehl kicken oder dauerhaft bannen.

:::: info Hinweis
Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler-Liste anzeigen

Gib folgenden Befehl im Chat ein, um alle verbundenen Spieler mit ihrer SteamID anzuzeigen:

```
/ShowPlayers
```

## Spieler kicken

```
/KickPlayer <SteamID>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
/BanPlayer <SteamID>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```
/UnBanPlayer <SteamID>
```

Die SteamID des Spielers findest du in der `banlist.txt` oder über eine zuvor notierte `/ShowPlayers`-Ausgabe.

### Alternativ: Banliste manuell bearbeiten

Falls gerade kein Admin online ist, kannst du die Banliste auch direkt bearbeiten:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>banlist.txt öffnen</b><br>
   Öffne die Datei `banlist.txt` unter:

   ```
   /Pal/Saved/SaveGames/banlist.txt
   ```

4. <b>Spieler entfernen</b><br>
   Lösche die Zeile mit der SteamID des Spielers (Format: `steam_76561198000000000`).

5. <b>Server starten</b><br>
   Starte deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/ShowPlayers` | Spielerliste anzeigen |
| `/KickPlayer <SteamID>` | Spieler kicken |
| `/BanPlayer <SteamID>` | Spieler bannen |
| `/UnBanPlayer <SteamID>` | Spieler entbannen |
