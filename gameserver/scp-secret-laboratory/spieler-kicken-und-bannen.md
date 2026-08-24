---
description: "Spieler auf einem SCP: Secret Laboratory Server kicken und bannen"
---

# So kickst und bannst du Spieler auf deinem SCP: Secret Laboratory Server

Störende Spieler entfernst du entweder über das Remote-Admin-Panel im Spiel oder per Befehl — und die Befehle funktionieren mit vorangestelltem `/` auch direkt in der Konsole der Verwaltung.

## Voraussetzung: Rang mit Admin-Rechten

Kicken und Bannen ist nur mit einem Rang möglich, der Moderations-Rechte besitzt (z.B. `moderator`, `admin` oder `owner`). Wie du dir selbst oder deinem Team einen Rang zuweist, zeigt die Anleitung [Ränge vergeben](raenge-vergeben.md).

## Weg 1: Remote-Admin-Panel im Spiel

1. <b>Remote-Admin-Panel öffnen</b><br>
   Drücke im Spiel die Taste **M**, um das Remote-Admin-Panel zu öffnen.

2. <b>Spieler auswählen</b><br>
   Wähle in der linken Spalte **Players** den Spieler aus, den du kicken oder bannen möchtest.

3. <b>Kick oder Ban ausführen</b><br>
   Wähle die gewünschte Aktion aus: Bei einem Kick kannst du optional einen Grund angeben, bei einem Ban legst du zusätzlich die Dauer fest. Bestätige die Aktion anschließend.

## Weg 2: Befehle

Die folgenden Befehle gibst du in die Befehlszeile des Remote-Admin-Panels ein.

:::: info Hinweis
Die Konsole in der Verwaltung ist die LocalAdmin-Konsole deines Servers. Alle hier gezeigten Befehle funktionieren auch dort, wenn du ihnen ein `/` voranstellst (z.B. `/kick Peter Beleidigungen`) — du kannst also moderieren, ohne selbst im Spiel zu sein. Mehr dazu in [Remote Admin nutzen](remote-admin-nutzen.md).
::::

| Befehl | Beschreibung |
|--------|--------------|
| `kick <Spieler> <Grund>` | Wirft einen Spieler vom Server |
| `ban <Spieler> <Dauer> <Grund>` | Bannt einen verbundenen Spieler |
| `offlineban <SteamID64> <Dauer> <Grund>` | Bannt einen Spieler, der gerade nicht verbunden ist (Kurzform: `oban`) |
| `unban id <SteamID64>` | Hebt einen Ban anhand der SteamID64 auf |
| `unban ip <IP-Adresse>` | Hebt einen IP-Ban auf |
| `banlist` | Zeigt alle aktiven Bans an |

Als `<Spieler>` kannst du den Spielernamen, die Spieler-ID aus der Spielerliste des Remote-Admin-Panels oder die SteamID64 mit vorangestelltem `@` angeben. Die [SteamID64](../steamid64-herausfinden.md) eines Spielers findest du über die verlinkte Anleitung heraus.

### Ban-Dauer

Die Dauer gibst du als Zahl in Minuten an. Mit den Suffixen `m` (Minuten), `h` (Stunden) und `d` (Tage) kannst du die Einheit auch explizit festlegen. Eine Dauer von `0` erzeugt einen permanenten Ban.

```
kick Peter Beleidigungen im Voice-Chat
ban Peter 1h Beleidigungen im Voice-Chat
ban @76561198801452050 30d Cheating
offlineban 76561198801452050 0 Permanenter Ausschluss
```

:::: tip Tipp
Der Befehl `banlist` zeigt dir zu jedem Ban die hinterlegte ID an. Übernimm die ID für den `unban`-Befehl genau so, wie sie in der Liste steht.
::::

:::: info Hinweis
Kicks und Bans wirken sofort — ein Neustart des Servers ist nicht nötig.
::::
