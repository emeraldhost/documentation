---
description: Spieler auf einem Soldat 2 Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Soldat 2 Server

Spieler entfernst du auf einem Soldat 2 Server ausschließlich über die Konsole im Spiel. Eine Bannliste als Datei gibt es nicht.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `Alt` + `~`.

2. <b>Als Admin anmelden</b><br>
   Bist du nicht schon über deine PlayFab-ID dauerhaft als Admin hinterlegt, melde dich mit dem RCON-Passwort an:

   ```
   rcon DeinRconPasswort
   ```

3. <b>Spieler-ID ermitteln</b><br>
   Kick und Bann arbeiten mit der **Spieler-ID**, nicht mit dem Namen. Die IDs liefert dir folgender Befehl:

   ```
   rcon listplayers
   ```

4. <b>Befehl ausführen</b><br>
   Führe den gewünschten Befehl mit der ermittelten ID aus:

   ```
   rcon kick 2
   ```

## Spieler kicken

```
rcon kick <id>
```

Der Spieler wird vom Server getrennt und kann grundsätzlich wieder beitreten.

Mit einem Grund:

```
rcon kick 2 "Spam im Chat"
```

:::: danger Wichtig
Der Grund muss in **Anführungszeichen** stehen. Ohne Anführungszeichen wird der Befehl nicht korrekt ausgewertet.
::::

## Alle Spieler kicken

```
rcon kickall
```

Auch hier kannst du einen Grund angeben:

```
rcon kickall "Server wird neu gestartet"
```

## Spieler bannen

```
rcon ban <id>
```

Der Spieler wird sofort vom Server geworfen und kann sich für einige Tage nicht mehr verbinden.

:::: warning Achtung
Ein Bann in Soldat 2 ist **zeitlich begrenzt**. Er läuft nach einigen Tagen von selbst ab – die genaue Dauer ist nicht dokumentiert und lässt sich nicht einstellen.
::::

:::: danger Kein Entbannen möglich
Soldat 2 kennt **keinen Unban-Befehl** und legt auch keine Bannliste als Datei an, die du bearbeiten könntest. Ein ausgesprochener Bann lässt sich daher nicht vorzeitig aufheben – du kannst nur warten, bis er abläuft. Setze `ban` deshalb bewusst ein und nutze für kurzfristige Störungen lieber `kick`.
::::

## Spieler ins Team setzen

Stört ein Spieler nur die Teamverteilung, musst du ihn nicht gleich entfernen:

```
rcon setteam <id> <team>
```

```
rcon setteam 2 1
```

:::: info Hinweis
Setzt du einen Spieler manuell in ein Team, wird der automatische Teamausgleich (Autobalance) für das laufende Match deaktiviert. Nach dem nächsten Kartenwechsel greift er wieder.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `rcon listplayers` | Alle Spieler mit ihren IDs anzeigen |
| `rcon kick <id>` | Spieler vom Server trennen |
| `rcon kick <id> "<Grund>"` | Spieler mit Begründung trennen |
| `rcon kickall` | Alle Spieler vom Server trennen |
| `rcon kickall "<Grund>"` | Alle Spieler mit Begründung trennen |
| `rcon ban <id>` | Spieler für einige Tage aussperren |
| `rcon setteam <id> <team>` | Spieler in ein Team setzen |
| `rcon say "<Text>"` | Nachricht an alle senden, z.B. als Verwarnung |

:::: tip Tipp
Möchtest du deinen Server dauerhaft nur für bestimmte Personen öffnen, ist ein Spielpasswort der zuverlässigere Weg als einzelne Banns. Das Passwort setzt du in der **Verwaltung**.
::::

:::: info Hinweis
Die Befehle unterscheiden nicht zwischen Groß- und Kleinschreibung. Mit der `Tab`-Taste blendet dir die Konsole die verfügbaren Befehle ein.
::::
