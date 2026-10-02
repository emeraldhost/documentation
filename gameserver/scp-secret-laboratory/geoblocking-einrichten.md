---
description: "Geoblocking auf einem SCP: Secret Laboratory Server einrichten"
---

# So richtest du Geoblocking auf deinem SCP: Secret Laboratory Server ein

Mit Geoblocking legst du fest, aus welchen Ländern Spieler deinem Server beitreten dürfen. Du kannst entweder nur bestimmte Länder zulassen oder einzelne Länder sperren. Alle Einstellungen dafür stehen in der Datei `config_gameplay.txt`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zu den Konfigurationsdateien enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Die Geoblocking-Einstellungen

In der `config_gameplay.txt` findest du den Abschnitt `#Geoblocking`. Im Auslieferungszustand sieht er so aus:

```
#Geoblocking
#If your server is on the public list, please refer to Verified Server Rules for more details.
#Modes: none, whitelist, blacklist
geoblocking_mode: none

#If enabled, players on the whitelist are able to ignore geoblocking.
geoblocking_ignore_whitelisted: true

#ISO country codes, eg. PL, US, DE
geoblocking_whitelist:
 - AA
 - AB
 - AC

geoblocking_blacklist:
 - AA
 - AB
 - AC
```

| Einstellung | Bedeutung |
|-------------|-----------|
| `geoblocking_mode` | `none` (Standard) – Geoblocking ist aus.<br>`whitelist` – nur Spieler aus den Ländern in `geoblocking_whitelist` dürfen beitreten.<br>`blacklist` – Spieler aus den Ländern in `geoblocking_blacklist` werden abgewiesen, alle anderen dürfen beitreten. |
| `geoblocking_ignore_whitelisted` | Bei `true` (Standard) umgehen Spieler aus deiner `UserIDWhitelist.txt` das Geoblocking. |
| `geoblocking_whitelist` | Liste der erlaubten Länder für den Modus `whitelist` |
| `geoblocking_blacklist` | Liste der gesperrten Länder für den Modus `blacklist` |

Die Länder trägst du als zweistellige ISO-Ländercodes ein, z.B. `DE` für Deutschland, `AT` für Österreich, `CH` für die Schweiz, `PL` für Polen oder `US` für die USA. Jedes Land steht in einer eigenen Zeile, eingerückt mit einem Leerzeichen und einem Bindestrich davor. Die Einträge `AA`, `AB` und `AC` sind nur Platzhalter und müssen ersetzt werden.

:::: info Hinweis
Es wird immer nur die Liste genutzt, die zum eingestellten Modus passt. Im Modus `whitelist` hat die `geoblocking_blacklist` also keine Wirkung und umgekehrt.
::::

## Geoblocking einrichten

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche darin den Abschnitt `#Geoblocking`.

5. <b>Modus wählen</b><br>
   Setze `geoblocking_mode` auf `whitelist`, wenn du nur bestimmte Länder zulassen möchtest, oder auf `blacklist`, wenn du bestimmte Länder sperren möchtest:

   ```
   geoblocking_mode: whitelist
   ```

6. <b>Länder eintragen</b><br>
   Ersetze in der passenden Liste die Platzhalter `AA`, `AB` und `AC` durch die gewünschten Ländercodes. Du kannst beliebig viele Zeilen ergänzen oder entfernen.

7. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

:::: tip Beispiel
So lässt du nur Spieler aus Deutschland, Österreich und der Schweiz auf deinen Server:

```
geoblocking_mode: whitelist

geoblocking_ignore_whitelisted: true

geoblocking_whitelist:
 - DE
 - AT
 - CH
```
::::

:::: warning Achtung
Mit dem Modus `whitelist` sperrst du auch dich selbst aus, wenn du dich gerade in einem Land aufhältst, das nicht auf der Liste steht. Trage deine eigene ID am besten in die `UserIDWhitelist.txt` ein und lass `geoblocking_ignore_whitelisted` auf `true` – dann kommst du trotzdem auf deinen Server. `enable_whitelist` musst du dafür nicht aktivieren.
::::

## Ausnahmen vom Geoblocking

**Spieler auf der Whitelist:** Steht `geoblocking_ignore_whitelisted` auf `true`, dürfen alle Spieler aus der `UserIDWhitelist.txt` unabhängig von ihrem Land beitreten. So kannst du einzelnen Freunden aus dem Ausland den Zugang erlauben, ohne ihr ganzes Land freizugeben.

Für die Ausnahme vom Geoblocking reicht es, die ID in die `UserIDWhitelist.txt` im selben Port-Ordner einzutragen (eine ID pro Zeile, z.B. `76561198000000001@steam`). `enable_whitelist` muss dafür nicht aktiviert werden – lässt du es auf `false`, können weiterhin alle anderen Spieler aus erlaubten Ländern beitreten.

:::: warning Achtung
Das Dateiformat der `UserIDWhitelist.txt` zeigt dir die Anleitung [Whitelist einrichten](whitelist-einrichten.md). Möchtest du nur die Ausnahme vom Geoblocking, überspringe dort den Schritt, in dem `enable_whitelist` auf `true` gesetzt wird. Sonst können nur noch Spieler aus der `UserIDWhitelist.txt` beitreten.
::::

**Northwood-Ban-Team:** In der Datei `config_remoteadmin.txt` im selben Port-Ordner gibt es die Einstellung (Standard `true`):

```
enable_banteam_bypass_geoblocking: true
```

Damit können Mitglieder des offiziellen Ban-Teams von Northwood dein Geoblocking umgehen. Lass diese Einstellung auf `true`.

:::: danger Wichtig
Ist dein Server verifiziert und in der öffentlichen Serverliste sichtbar, gelten für Geoblocking die Verified Server Rules von Northwood. Der Kommentar in der `config_gameplay.txt` weist ausdrücklich darauf hin. Prüfe die Regeln, bevor du Geoblocking auf einem öffentlichen Server aktivierst. Mehr zur Verifizierung findest du in der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md).
::::

## Abgewiesene Spieler erkennen

Versucht ein Spieler, aus einem gesperrten Land beizutreten, wird er abgewiesen und der Server vermerkt den Versuch in der Konsole der Verwaltung und im Server-Log, z.B.:

```
Player 76561198000000001@steam (203.0.113.10) tried joined from blocked country US.
```

So kannst du prüfen, ob dein Geoblocking wie gewünscht greift. Wie du das Log ausliest, erfährst du in der Anleitung [Server-Log auslesen](server-log-auslesen.md).

:::: info Hinweis
Geoblocking wird nur beim Beitreten geprüft. Spieler, die bereits verbunden sind, werden nach einer Änderung nicht entfernt – die neuen Regeln greifen erst, wenn sie sich neu verbinden.
::::

## Weitere Möglichkeiten

Geoblocking schränkt den Zugang nach Ländern ein. Möchtest du den Zugang auf einzelne Spieler beschränken, nutze die [Whitelist](whitelist-einrichten.md). Warum es kein Server-Passwort gibt und welche Alternativen du hast, erfährst du in der Anleitung [Server ohne Passwort schützen](server-passwort-setzen.md).
