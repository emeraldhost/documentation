---
description: Spieler auf einem Colony Survival Server bannen
---

# So bannst du Spieler auf deinem Colony Survival Server

Störende Spieler sperrst du in Colony Survival über die **Blacklist** deines Servers aus. Zusätzlich kannst du deinen Server mit einer **Whitelist** von vornherein nur für bestimmte Spieler öffnen. Beides steuerst du direkt im Chat im Spiel.

:::: danger Colony Survival kennt keinen Kick
Es gibt **keinen Befehl, um einen Spieler nur kurzzeitig vom Server zu werfen**. Der `Kick`-Knopf im Spiel gehört zur Verwaltung einer Kolonie und entfernt lediglich einen Mitbesitzer aus dieser Kolonie – der Spieler bleibt dabei auf dem Server. Wer den Server verlassen soll, muss über die Blacklist gesperrt werden.
::::

:::: info Hinweis
Du benötigst Rechte der Gruppe `god`, um Blacklist und Whitelist zu verwalten. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler bannen

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>Spieler auf die Blacklist setzen</b><br>
   Gib den folgenden Befehl ein – wahlweise mit dem Spielernamen oder mit der SteamID64:

   ```
   /blacklist add Sam
   ```

   ```
   /blacklist add 76561198012345678
   ```

   :::: tip Tipp
   Verwende am besten die [SteamID64](../steamid64-herausfinden.md). Sie bleibt immer gleich, auch wenn der Spieler seinen Namen ändert. Namen mit Leerzeichen setzt du in Anführungszeichen.
   ::::

3. <b>Bann prüfen</b><br>
   Lass dir die aktuelle Liste anzeigen und kontrolliere, ob der Spieler darin steht:

   ```
   /blacklist
   ```

Gebannte Spieler bekommen beim nächsten Verbindungsversuch die Meldung, dass die Verbindung abgelehnt wurde, weil sie auf der Blacklist stehen.

## Bann aufheben

```
/blacklist remove 76561198012345678
```

Die komplette Liste leerst du mit:

```
/blacklist clear
```

## Server nur für bestimmte Spieler öffnen

Mit der Whitelist drehst du das Prinzip um: Sobald sie genutzt wird, kommen nur noch gelistete Spieler auf deinen Server. Alle anderen erhalten beim Verbinden die Meldung, dass sie nicht auf der Whitelist stehen.

```
/whitelist add 76561198012345678
```

```
/whitelist remove 76561198012345678
```

```
/whitelist clear
```

:::: warning Achtung
Trage dich selbst und alle Mitspieler ein, bevor du dich auf die Whitelist verlässt – sonst sperrst du dich aus deiner eigenen Welt aus.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/blacklist` | Zeigt alle gebannten Spieler an |
| `/blacklist add <Spieler>` | Sperrt einen Spieler aus |
| `/blacklist remove <Spieler>` | Hebt den Bann wieder auf |
| `/blacklist clear` | Leert die Blacklist |
| `/whitelist` | Zeigt die Whitelist an |
| `/whitelist add <Spieler>` | Nimmt einen Spieler in die Whitelist auf |
| `/whitelist remove <Spieler>` | Entfernt einen Spieler aus der Whitelist |
| `/whitelist clear` | Leert die Whitelist |

:::: info Hinweis
Als `<Spieler>` funktionieren sowohl der Spielername als auch die SteamID64. Ist ein Spieler gerade nicht online, nutze in jedem Fall die SteamID64.
::::

:::: info Hinweis
Der Server speichert Blacklist und Whitelist als Dateien im Savegame-Verzeichnis. Wie diese Dateien genau heißen und aufgebaut sind, hängt von der Spielversion ab – pflege die Listen deshalb über die Befehle im Chat und nicht direkt in der Datei.
::::
