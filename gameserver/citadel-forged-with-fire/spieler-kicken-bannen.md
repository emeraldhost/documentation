---
description: Spieler auf einem Citadel Forged with Fire Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Citadel Forged with Fire Server

Spieler entfernst du auf deinem Citadel Forged with Fire Server über Chat-Befehle im Spiel. Als Parameter dient dabei immer der **Spielername**, nicht die SteamID.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Als Admin einloggen</b><br>
   Tritt deinem Server bei, öffne den Chat und melde dich mit deinem Admin-Passwort an:

   ```
   /admin_login <Passwort>
   ```

2. <b>Spielernamen ermitteln</b><br>
   Mit folgendem Befehl listet dir der Server alle aktuell eingeloggten Spieler auf:

   ```
   /who
   ```

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl mit dem Spielernamen ein, zum Beispiel:

   ```
   /server_kick Merlin Regelverstoß
   ```

:::: info Spielernamen
Spielernamen sind auf **12 Zeichen begrenzt und enthalten keine Leerzeichen**. Damit ist der Name als Parameter eindeutig – du musst ihn nicht in Anführungszeichen setzen.
::::

## Spieler kicken

```
/server_kick <Spieler> <Grund>
```

Der Spieler wird sofort vom Server getrennt und bekommt den angegebenen Grund angezeigt. Er kann anschließend jederzeit wieder beitreten.

## Spieler bannen

```
/server_ban <Spieler> <Grund>
```

Der Spieler wird sofort vom Server geworfen und dauerhaft gesperrt. Bei jedem weiteren Beitrittsversuch bekommt er den angegebenen Grund angezeigt.

## Bann aufheben

```
/server_unban <Spieler>
```

Danach kann der Spieler wieder normal auf deinen Server.

## Charakter löschen

```
/admin_delete <Spieler>
```

Damit löschst du den Charakter eines Spielers vollständig vom Server. Ist der Spieler gerade online, wird er sofort vom Server getrennt. Gesperrt ist er dadurch **nicht** – er kann wieder beitreten, startet dann aber mit einem neuen Charakter.

:::: danger Wichtig
Ein gelöschter Charakter lässt sich nicht wiederherstellen. Erstelle vorher ein [Backup](backup-erstellen.md), wenn du dir nicht sicher bist.
::::

## Befehle im Überblick

| Befehl | Alternative | Beschreibung |
|--------|-------------|--------------|
| `/who` | – | Zeigt alle aktuell eingeloggten Spieler |
| `/whois <Spieler>` | – | Zeigt Informationen zu einem Spieler inklusive SteamID – auch, wenn er offline ist |
| `/server_kick <Spieler> <Grund>` | `/gtfo` | Trennt einen Spieler vom Server |
| `/server_ban <Spieler> <Grund>` | `/ban` | Sperrt einen Spieler dauerhaft |
| `/server_unban <Spieler>` | `/unban` | Hebt die Sperre wieder auf |
| `/admin_delete <Spieler>` | `/wipe` | Löscht den Charakter des Spielers vom Server |

:::: info Hinweis
Die Befehle in der Spalte **Alternative** sind lediglich Kurzformen und machen exakt dasselbe wie der jeweilige Hauptbefehl.
::::

:::: info Bannliste
Citadel Forged with Fire bietet keine Bannliste, die du als Datei bearbeiten könntest. Banns setzt und entfernst du ausschließlich über die Befehle `/server_ban` und `/server_unban`.
::::

:::: tip Befehl zeigt keine Wirkung?
Reagiert ein Befehl im Chat nicht, prüfe zuerst mit `/who`, ob du noch als Admin eingeloggt bist – nach einem Neustart oder Verbindungsabbruch musst du dich mit `/admin_login` erneut anmelden. Alternativ kannst du dieselben Befehle über die Remote Console im Browser ausführen, siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::
