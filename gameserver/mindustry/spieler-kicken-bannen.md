---
description: Spieler auf einem Mindustry Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Mindustry Server

Spieler entfernst du auf einem Mindustry Server über die **Konsole** deines Servers. Eine Datei zum Bearbeiten gibt es nicht – alle Banns liegen binär in `config/settings.bin`.

:::: info Hinweis
In der Konsole deiner Verwaltung stehen dir alle Befehle ohne zusätzliche Rechte zur Verfügung. Als [Admin](admin-hinzufuegen.md) kannst du Spieler zusätzlich direkt im Spiel über die Spielerliste kicken und bannen.
::::

## Spieler kicken

```
kick <Spielername>
```

Der Spieler wird sofort vom Server getrennt und im Chat erscheint ein Hinweis für alle. Nach einer kurzen Sperre von rund 30 Sekunden kann er wieder beitreten.

:::: warning Achtung
`kick` findet nur Spieler, die gerade **online** sind, und der Name muss exakt stimmen. Eine Zeitangabe gibt es nicht – einen Spieler "für 30 Minuten" zu kicken, ist in Mindustry nicht möglich.
::::

## Spieler bannen

Beim Bannen gibst du immer zuerst den Typ an:

```
ban <id/name/ip> <Wert>
```

| Variante | Wann sinnvoll |
|----------|---------------|
| `ban id <UUID>` | Der zuverlässigste Bann. Funktioniert auch, wenn der Spieler offline ist. |
| `ban name <Spielername>` | Nur für Spieler, die gerade online sind. |
| `ban ip <IP-Adresse>` | Sperrt eine komplette IP-Adresse. |

:::: tip Beispiel
```
ban id AbCdEfGhIjKlMnOpQrSt==
```
::::

Der Server bestätigt mit `Banned.` und wirft den Spieler direkt vom Server, falls er noch verbunden ist.

:::: info Hinweis
Die UUID eines Spielers liest du mit `players` (alle verbundenen Spieler) oder `info <Name/UUID/IP>` aus. Gibst du einen anderen Typ als `id`, `name` oder `ip` an, meldet der Server `Invalid type.`
::::

## Banns anzeigen

```
bans
```

Zeigt alle gesperrten UUIDs mit dem letzten bekannten Namen sowie alle gesperrten IP-Adressen an.

## Bann aufheben

```
unban <UUID/IP-Adresse>
```

Der Server bestätigt mit `Unbanned player: <Wert>`.

:::: tip Tipp
Hebst du einen Bann über die UUID auf, entfernt der Server automatisch auch die dazugehörigen IP-Adressen aus der Sperrliste.
::::

## Votekick rückgängig machen

Haben Mitspieler jemanden per Votekick entfernt, hilft `unban` nicht – dafür gibt es einen eigenen Befehl:

```
pardon <UUID>
```

Damit darf der Spieler wieder beitreten.

:::: info Hinweis
Das Votekick-System ist standardmäßig aktiv. Du kannst es abschalten:

```
config enableVotekick false
```
::::

## Weitere Sperrmöglichkeiten

| Befehl | Beschreibung |
|--------|-------------|
| `name-ban [add/remove/clear] [Ausdruck]` | Sperrt Spielernamen anhand eines regulären Ausdrucks, Groß- und Kleinschreibung wird ignoriert |
| `subnet-ban [add/remove] [Adresse]` | Sperrt einen ganzen IP-Bereich anhand des Adressanfangs |
| `dos-ban [add/remove] [IP]` | Sperrt eine IP-Adresse wegen Verbindungsflut |

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `players` | Alle verbundenen Spieler mit UUID und IP anzeigen |
| `kick <Spielername>` | Spieler vom Server trennen |
| `ban id <UUID>` | Spieler dauerhaft über seine UUID sperren |
| `ban name <Spielername>` | Online-Spieler über den Namen sperren |
| `ban ip <IP>` | IP-Adresse sperren |
| `bans` | Alle Banns anzeigen |
| `unban <UUID/IP>` | Bann aufheben |
| `pardon <UUID>` | Votekick aufheben |

:::: danger Wichtig
Banns und Whitelist liegen zusammen mit allen Einstellungen in der Binärdatei `config/settings.bin`. Verwalte sie ausschließlich über die Konsolenbefehle – öffnest du die Datei in einem Texteditor, zerstörst du sie.
::::

:::: tip Server nur für bestimmte Spieler öffnen
Statt einzelne Spieler zu sperren, kannst du deinen Server auch komplett schließen und nur ausgewählte Spieler freischalten. Wie das geht, steht unter [Admin hinzufügen](admin-hinzufuegen.md) im Abschnitt zur Whitelist.
::::
