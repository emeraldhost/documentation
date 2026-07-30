---
description: Spieler auf einem Minecraft PocketMine Edition Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Minecraft PocketMine Edition Server

Spieler entfernst du über Befehle – entweder in der Konsole deines Servers oder im Spiel im Chat. PocketMine-MP unterscheidet dabei zwischen Namens-Banns und IP-Banns.

:::: info Hinweis
Im Spiel benötigst du Operator-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md). In der Konsole deines Servers stehen dir die Befehle immer zur Verfügung.
::::

:::: info Hinweis
Reagiert der Server in der Konsole nicht auf einen Befehl, probiere ihn zusätzlich mit einem führenden `/`.
::::

## Spieler kicken

```
/kick <Spielername> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Der optionale Grund wird ihm dabei angezeigt.

:::: info Hinweis
`kick` funktioniert nur bei Spielern, die gerade online sind. Der Name muss nicht vollständig sein – PocketMine-MP sucht den Spieler anhand des Namensanfangs.
::::

## Spieler bannen

```
/ban <Spielername> [Grund]
```

Der Spieler kann sich nicht mehr verbinden. Ist er gerade online, wird er sofort vom Server geworfen.

:::: tip Tipp
`ban` funktioniert auch bei Spielern, die gerade **nicht** online sind. Du kannst also jemanden im Voraus sperren, solange du den Namen exakt kennst.
::::

## IP-Adresse bannen

```
/ban-ip <IP-Adresse oder Spielername> [Grund]
```

Gibst du eine IP-Adresse an, wird diese direkt gesperrt. Gibst du stattdessen den Namen eines Spielers an, der gerade online ist, sperrt der Server dessen aktuelle IP-Adresse.

:::: warning Achtung
Ein IP-Bann trifft alle Spieler hinter derselben Verbindung – zum Beispiel Mitspieler im selben Haushalt. Viele Internetanschlüsse erhalten außerdem regelmäßig eine neue IP-Adresse, sodass ein IP-Bann nicht dauerhaft wirkt.
::::

## Banns anzeigen

```
/banlist [ips|players]
```

Ohne Zusatz zeigt der Befehl die gebannten Spielernamen an – genau wie mit `players`. Die gebannten IP-Adressen siehst du nur mit `ips`.

## Bann aufheben

```
/pardon <Spielername>
```

```
/pardon-ip <IP-Adresse>
```

:::: info Hinweis
Für beide Befehle gibt es Kurzformen: `/unban <Spielername>` und `/unban-ip <IP-Adresse>` bewirken genau dasselbe.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername> [Grund]` | Trennt einen Spieler vom Server |
| `/ban <Spielername> [Grund]` | Sperrt einen Spielernamen dauerhaft |
| `/ban-ip <IP oder Name> [Grund]` | Sperrt eine IP-Adresse |
| `/pardon <Spielername>` | Hebt den Bann eines Spielernamens auf (auch `/unban`) |
| `/pardon-ip <IP-Adresse>` | Hebt den Bann einer IP-Adresse auf (auch `/unban-ip`) |
| `/banlist [ips\|players]` | Zeigt die gebannten Spielernamen an, mit `ips` die gebannten IP-Adressen |

## Bann-Listen als Datei

Alle Banns liegen im Hauptordner deines Servers in zwei Textdateien:

| Datei | Inhalt |
|-------|--------|
| `banned-players.txt` | Gebannte Spielernamen |
| `banned-ips.txt` | Gebannte IP-Adressen |

Jede Zeile in `banned-players.txt` ist nach folgendem Muster aufgebaut, getrennt durch einen senkrechten Strich:

```
Name|Erstellt am|Erstellt von|Läuft ab|Grund
```

:::: info Hinweis
Bei einem dauerhaften Bann steht im Feld "Läuft ab" der Wert `Forever`. Datumsangaben werden im Format `Jahr-Monat-Tag Stunde:Minute:Sekunde ±Zeitzone` gespeichert.
::::

:::: warning Achtung
Die Bann-Listen werden beim Serverstart eingelesen. Bearbeitest du die Dateien von Hand, stoppe deinen Server vorher und starte ihn danach wieder – sonst greifen deine Änderungen nicht zuverlässig. Im laufenden Betrieb nutzt du am besten immer die Befehle.
::::

## Whitelist statt Bann-Liste

Möchtest du deinen Server nur für bestimmte Spieler öffnen, statt einzelne Spieler auszusperren, nutze die Whitelist.

1. <b>Whitelist aktivieren</b><br>
   Gib folgenden Befehl ein:

   ```
   /whitelist on
   ```

2. <b>Spieler freischalten</b><br>
   Trage jeden erlaubten Spieler einzeln ein:

   ```
   /whitelist add <Spielername>
   ```

3. <b>Liste prüfen</b><br>
   Lass dir alle freigeschalteten Spieler anzeigen:

   ```
   /whitelist list
   ```

| Befehl | Beschreibung |
|--------|-------------|
| `/whitelist on` | Aktiviert die Whitelist |
| `/whitelist off` | Deaktiviert die Whitelist |
| `/whitelist add <Spielername>` | Fügt einen Spieler hinzu |
| `/whitelist remove <Spielername>` | Entfernt einen Spieler |
| `/whitelist list` | Zeigt alle freigeschalteten Spieler an |
| `/whitelist reload` | Lädt die Whitelist neu ein |

:::: info Hinweis
Die freigeschalteten Spieler stehen in der Datei `white-list.txt` im Hauptordner deines Servers. Ob die Whitelist aktiv ist, steuert zusätzlich der Eintrag `white-list` in der Datei `server.properties`.
::::
