---
description: Spieler auf einem Space Station 14 Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Space Station 14 Server

Spieler entfernst du in Space Station 14 über die Konsole im Spiel. Bans werden dabei in der Datenbank deines Servers gespeichert – du musst keine Datei bearbeiten.

:::: info Hinweis
Du benötigst Adminrechte, um diese Befehle nutzen zu können. Für Banns brauchst du zusätzlich die Berechtigung `Ban`. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Befehl eingeben</b><br>
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```
   kick Beispielspieler
   ```

:::: tip Tipp
Kick, Bann, Ban-Liste und Notizen erreichst du auch ohne Befehle: Öffne mit `F1` das Ahelp-Fenster und nutze dort die Schaltflächen **Kick**, **Ban**, **Ban list** und **Notes**.
::::

## Spieler kicken

```
kick <Spielername> [<Grund>]
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Grund ist optional.

:::: info Hinweis
`kick` erwartet den Benutzernamen eines aktuell verbundenen Spielers – eine User-ID akzeptiert der Befehl nicht.
::::

## Spieler bannen

```
ban <Spielername oder User-ID> <Grund> [<Dauer in Minuten>]
```

Beispiel für einen Bann über 60 Minuten:

```
ban Beispielspieler Griefing 60
```

:::: danger Wichtig
Lässt du die Dauer weg oder trägst `0` ein, ist der Bann **dauerhaft**. Das ist die häufigste Fehlerquelle – gib eine Dauer in Minuten an, wenn der Bann wieder auslaufen soll.
::::

:::: tip Tipp
Bequemer geht es über die Oberfläche: Mit `banpanel` öffnest du das Ban-Fenster, optional direkt für einen bestimmten Spieler:

```
banpanel <Spielername oder User-ID>
```

Der Befehl funktioniert nur in der Konsole im Spiel, nicht in der Server-Konsole.
::::

## Bann aufheben

1. <b>Ban-ID herausfinden</b><br>
   Lass dir die Banns eines Spielers anzeigen:

   ```
   banlist <Spielername oder User-ID>
   ```

   In der Konsole im Spiel öffnet sich daraufhin ein Fenster mit allen Banns des Spielers samt ihrer ID. In der Server-Konsole wird stattdessen je Bann eine Zeile aus ID und Grund ausgegeben – zum Beispiel `12: Griefing`.

2. <b>Bann aufheben</b><br>
   Hebe den Bann über seine ID auf:

   ```
   pardon 12
   ```

:::: warning Achtung
Einen Befehl namens `unban` gibt es in Space Station 14 nicht. Ein Bann wird immer mit `pardon` und der zugehörigen Ban-ID aufgehoben, nicht mit dem Spielernamen.
::::

## Spieler von einer Rolle ausschließen

Statt einen Spieler komplett auszusperren, kannst du ihm auch nur einen einzelnen Beruf verbieten:

```
roleban <Spielername oder User-ID> <Beruf> <Grund> [<Dauer in Minuten>]
```

Aufgehoben wird ein Rollen-Bann über seine eigene ID:

```
roleunban <ID des Rollen-Banns>
```

Auch hier gilt: keine Dauer oder `0` bedeutet dauerhaft.

:::: info Hinweis
Als Beruf erwartet der Befehl die interne ID der Rolle, nicht den angezeigten Namen. Die Konsole im Spiel schlägt dir die gültigen IDs beim Tippen vor.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Spielername> [<Grund>]` | Spieler vom Server trennen |
| `ban <Name oder User-ID> <Grund> [<Minuten>]` | Spieler bannen, ohne Dauer dauerhaft |
| `banpanel [<Name oder User-ID>]` | Ban-Fenster öffnen (nur im Spiel) |
| `banlist <Name oder User-ID>` | Banns eines Spielers samt Ban-ID anzeigen |
| `pardon <Ban-ID>` | Bann aufheben |
| `roleban <Name oder User-ID> <Beruf> <Grund> [<Minuten>]` | Spieler von einem Beruf ausschließen |
| `roleunban <ID des Rollen-Banns>` | Rollen-Bann aufheben |
| `ban_exemption_update <Spieler> <Flag> [<Flag> …]` | Ausnahmen von Banns setzen |
| `ban_exemption_get <Spieler>` | Gesetzte Ausnahmen anzeigen |

:::: info Hinweis
Alle Befehle aus dieser Tabelle funktionieren auch in der Server-Konsole – einzige Ausnahme ist `banpanel`, das ein Fenster im Spiel öffnet und deshalb nur dort läuft.
::::

:::: info Hinweis
Banns und Adminrechte liegen gemeinsam in der Datenbank im Ordner `data` deines Servers. Sicherst du diesen Ordner, sicherst du auch deine Ban-Liste – siehe [Backup erstellen](backup-erstellen.md).
::::
