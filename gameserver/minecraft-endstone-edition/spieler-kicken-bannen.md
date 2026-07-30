---
description: Spieler auf einem Minecraft Endstone Edition Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Minecraft Endstone Edition Server

Spieler entfernst du über Befehle – entweder in der Konsole deines Servers oder im Spiel im Chat. Endstone erweitert den Bedrock Dedicated Server dabei um ein vollwertiges Bann-System mit Namens- und IP-Banns.

:::: info Hinweis
Im Spiel benötigst du Operator-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md). In der Konsole deines Servers stehen dir die Befehle immer zur Verfügung.
::::

:::: info Hinweis
In der Konsole deines Servers gibst du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst du sie mit `/`.
::::

## Spieler kicken

```
/kick <Spielername> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Der optionale Grund wird ihm dabei angezeigt.

:::: info Hinweis
`kick` funktioniert nur bei Spielern, die gerade online sind.
::::

## Spieler bannen

```
/ban <Spielername> [Grund]
```

Der Spieler kann sich nicht mehr verbinden. Ist er gerade online, wird er sofort vom Server geworfen.

## IP-Adresse bannen

```
/ban-ip <IP-Adresse> [Grund]
```

Statt einer IP-Adresse kannst du auch den Namen eines Spielers angeben – dann sperrt der Server dessen aktuelle IP-Adresse.

:::: warning Achtung
Ein IP-Bann trifft alle Spieler hinter derselben Verbindung – zum Beispiel Mitspieler im selben Haushalt. Viele Internetanschlüsse erhalten außerdem regelmäßig eine neue IP-Adresse, sodass ein IP-Bann nicht dauerhaft wirkt.
::::

## Banns anzeigen

```
/banlist [players|ips]
```

Ohne Zusatz zeigt der Befehl alle Banns an. Mit `players` siehst du nur die gebannten Spieler, mit `ips` nur die gebannten IP-Adressen.

## Bann aufheben

```
/pardon <Spielername>
```

```
/pardon-ip <IP-Adresse>
```

:::: tip Tipp
Für beide Befehle gibt es Kurzformen: `/unban <Spielername>` und `/unban-ip <IP-Adresse>` bewirken genau dasselbe.
::::

:::: info Hinweis
Ein Bann lässt sich damit im laufenden Betrieb aufheben. Du musst deinen Server dafür weder stoppen noch eine Datei von Hand bearbeiten.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername> [Grund]` | Trennt einen Spieler vom Server |
| `/ban <Spielername> [Grund]` | Sperrt einen Spieler dauerhaft |
| `/ban-ip <IP oder Name> [Grund]` | Sperrt eine IP-Adresse |
| `/banlist [players\|ips]` | Zeigt alle Banns des Servers an |
| `/pardon <Spielername>` | Hebt den Bann eines Spielers auf (auch `/unban`) |
| `/pardon-ip <IP-Adresse>` | Hebt den Bann einer IP-Adresse auf (auch `/unban-ip`) |

## Bann-Listen als Datei

Alle Banns liegen im Hauptordner deines Servers in zwei Dateien:

| Datei | Inhalt |
|-------|--------|
| `banned-players.json` | Gebannte Spieler |
| `banned-ips.json` | Gebannte IP-Adressen |

Beide Dateien sind JSON-Listen. Ein Eintrag enthält unter anderem folgende Felder:

| Feld | Bedeutung |
|------|-----------|
| `name` / `uuid` / `xuid` | Der gesperrte Spieler beziehungsweise seine Kennungen – nur in `banned-players.json` |
| `ip` | Die gesperrte IP-Adresse – nur in `banned-ips.json` |
| `created` | Zeitpunkt, zu dem der Bann gesetzt wurde |
| `source` | Wer den Bann gesetzt hat |
| `expires` | Ablaufzeitpunkt – bei einem dauerhaften Bann steht hier `forever` |
| `reason` | Der angegebene Grund |

:::: info Hinweis
Abgelaufene Banns entfernt der Server automatisch aus der Liste, sobald er sie prüft. Du musst also nichts von Hand aufräumen.
::::

:::: warning Achtung
Bearbeitest du die Dateien von Hand, stoppe deinen Server vorher und starte ihn danach wieder – sonst greifen deine Änderungen nicht zuverlässig und werden unter Umständen überschrieben. Im laufenden Betrieb nutzt du am besten immer die Befehle.
::::

## Allowlist statt Bann-Liste

Möchtest du deinen Server nur für bestimmte Spieler öffnen, statt einzelne Spieler auszusperren, nutze die Allowlist des Bedrock-Servers. Sie liegt als Datei `allowlist.json` im Hauptordner deines Servers.

:::: tip Tipp
Wie du die Allowlist einrichtest, erfährst du unter [Allowlist aktivieren](../minecraft-bedrock-edition/allowlist-aktivieren.md).
::::
