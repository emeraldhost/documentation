---
description: Spieler auf einem The Front Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem The Front Server

Spieler entfernst du auf deinem The Front Server über Adminbefehle direkt im Spiel. Alle Befehle arbeiten mit der **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Befehle im Spiel nutzen

1. <b>Adminmenü öffnen</b><br>
   Drücke im Spiel `Shift` + `G`, um das Adminmenü zu öffnen. Alternativ öffnest du die Konsole mit `` ` `` beziehungsweise `~`.

2. <b>Befehl eingeben</b><br>
   Gib den gewünschten Befehl zusammen mit der SteamID64 des Spielers ein, zum Beispiel:

   ```
   BanPlayer 76561198012345678 login
   ```

3. <b>Bestätigen</b><br>
   Bestätige die Eingabe. Der Befehl wirkt sofort, ein Serverneustart ist nicht nötig.

## Spieler kicken

```
KickPlayerOff <SteamID64>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
BanPlayer <SteamID64> login
```

Der Spieler kann sich nicht mehr auf deinem Server einloggen, bis du den Bann wieder aufhebst.

## Bann aufheben

```
PermitPlayer <SteamID64> login
```

## Spieler stummschalten

```
BanPlayer <SteamID64> chat
```

Damit sperrst du den Spieler aus dem Chat des Spiels aus. Auf den Server kommt er weiterhin.

## Stummschaltung aufheben

```
PermitPlayer <SteamID64> chat
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `KickPlayerOff <SteamID64>` | Spieler vom Server trennen |
| `BanPlayer <SteamID64> login` | Spieler aussperren |
| `PermitPlayer <SteamID64> login` | Bann aufheben |
| `BanPlayer <SteamID64> chat` | Spieler stummschalten (Chat) |
| `PermitPlayer <SteamID64> chat` | Stummschaltung aufheben |
| `GotoPlayerByAccount <SteamID64>` | Zu einem Spieler teleportieren |

:::: warning Achtung
Der Unterschied liegt im zweiten Wert: `login` steuert den Zugang zum Server, `chat` nur die Kommunikation. Möchtest du einen Spieler komplett aussperren, verwende `login`.
::::

:::: info Wo werden Banns gespeichert?
Admins und Banns liegen in der Datei `Saved/GameStates/Accounts/GM.csv` deines Servers. Bearbeite sie nicht von Hand – hebe Banns über den Befehl `PermitPlayer` auf, damit die Daten konsistent bleiben. Bei einem Backup deines Spielstands wird die Datei automatisch mitgesichert, siehe [Savegame herunterladen](savegame-herunterladen.md).
::::
