---
description: "Konsolenbefehle auf einem SCP: Secret Laboratory Server nutzen"
---

# So nutzt du Konsolenbefehle auf deinem SCP: Secret Laboratory Server

Die Konsole in der Verwaltung deines Servers ist die LocalAdmin-Konsole von SCP: Secret Laboratory. Darüber steuerst du deinen Server, ohne selbst im Spiel zu sein: Runden starten und neu starten, Konfigurationsdateien neu laden oder Nachrichten an alle Spieler senden. Die Konsole hat volle Rechte, du brauchst dafür keinen Rang im Spiel.

Diese Seite ist eine Übersicht der wichtigsten Konsolenbefehle. Die Remote-Admin-Befehle zum Moderieren im Spiel findest du in der Anleitung [Remote Admin nutzen](remote-admin-nutzen.md).

## So gibst du Befehle ein

1. <b>Konsole öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur Konsole.

2. <b>Befehl eingeben</b><br>
   Gib den Befehl in die Eingabezeile ein und bestätige mit Enter. Die Antwort des Servers erscheint direkt in der Konsole.

In der Konsole gibt es drei Arten von Befehlen:

| Art | Eingabe | Beispiel |
|-----|---------|----------|
| LocalAdmin- und Server-Befehle | direkt, ohne Präfix | `roundrestart` |
| Remote-Admin-Befehle | mit vorangestelltem `/` | `/bc 10 Willkommen!` |
| Befehle an die Northwood-Server | mit vorangestelltem `!` | `!private` |

In den Tabellen auf dieser Seite steht jeder Befehl genau so, wie du ihn eingibst. Fehlt bei einem Remote-Admin-Befehl das `/`, meldet die Konsole `Command ... does not exist!`.

:::: tip Tipp
Mit `help` zeigst du alle LocalAdmin- und Server-Befehle an, mit `/help` alle Remote-Admin-Befehle. Die Befehlsliste kann sich mit Spiel-Updates ändern, deshalb ist `help` immer die verlässlichste Referenz.
::::

## LocalAdmin-Befehle

Diese Befehle verarbeitet LocalAdmin selbst, also das Programm, das den eigentlichen Spielserver startet und überwacht.

| Befehl | Beschreibung |
|--------|--------------|
| `help` | Listet alle LocalAdmin-Befehle und danach alle Server-Befehle auf |
| `exit` | Stoppt den Server |
| `restart` | Startet den Server neu |
| `forcerestart` | Beendet den Server sofort und startet ihn neu |
| `lacfg` | Zeigt die aktuelle LocalAdmin-Konfiguration und den Pfad der Konfigurationsdatei |

:::: info Hinweis
Zum Stoppen und Neustarten nutzt du am besten die Schaltflächen in der Verwaltung. `exit` und `restart` in der Konsole sind nur eine Alternative. Nur beim Start über die Verwaltung laufen auch die automatischen Updates. Neustarts über die Konsole (`restart`, `forcerestart`, `restartnextround` und `softrestart`) starten nur den Spielserver neu und installieren keine Spiel-Updates.
::::

:::: warning Achtung
`restart` startet den kompletten Server neu und nicht nur die Runde. Für einen Rundenneustart nutzt du `roundrestart` oder kurz `rr`. `forcerestart` beendet den Server ohne geordnetes Herunterfahren und ist nur für den Fall gedacht, dass der Server nicht mehr reagiert.
::::

## Server in der Serverliste verbergen

Ist dein Server verifiziert und steht in der öffentlichen Serverliste, kannst du ihn über die Konsole vorübergehend aus der Liste nehmen. Die Befehle werden mit `!` und ohne `/` eingegeben:

| Befehl | Beschreibung |
|--------|--------------|
| `!private` | Verbirgt deinen verifizierten Server in der öffentlichen Serverliste |
| `!public` | Zeigt deinen Server wieder in der öffentlichen Serverliste an |

:::: info Hinweis
Diese Befehle wirken nur bei verifizierten Servern. Ein nicht verifizierter Server erscheint ohnehin nicht in der öffentlichen Liste. Wie du deinen Server verifizieren lässt, erfährst du in der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md).
::::

## Runden steuern

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `roundrestart` | `rr` | Startet die laufende Runde sofort neu |
| `forcestart` | `fs` | Startet die Runde sofort aus der Lobby heraus |
| `/lobbylock` | `/ll` | Sperrt oder entsperrt die Lobby: Die Runde startet nicht, bis du die Sperre wieder aufhebst |
| `/roundlock` | `/rl` | Sperrt oder entsperrt das Rundenende: Die laufende Runde kann nicht enden |
| `restartnextround` | `rnr` | Startet den Server neu, sobald die aktuelle Runde endet |
| `stopnextround` | `snr` | Stoppt den Server, sobald die aktuelle Runde endet |
| `softrestart` | `sr` | Startet den Server sofort neu und fordert alle Spieler auf, sich danach wieder zu verbinden |

`forcestart` und `/lobbylock` funktionieren nur in der Lobby, also bevor die Runde begonnen hat. `/lobbylock`, `/roundlock`, `restartnextround` und `stopnextround` sind Schalter: Gibst du den Befehl ein zweites Mal ein, hebst du ihn wieder auf. Die Konsole bestätigt dir jeweils den neuen Zustand, z.B. `Server WILL restart after next round.` oder `Server WON'T restart after next round.`

Weitere Befehle zum Steuern der Runde findest du in der Anleitung [Remote Admin nutzen](remote-admin-nutzen.md).

:::: tip Tipp
`restartnextround` ist ideal, um einen Neustart ohne Unterbrechung für die Spieler vorzubereiten, z.B. nachdem du eine Konfigurationsdatei geändert hast. Der Server startet erst neu, wenn die laufende Runde ohnehin vorbei ist.
::::

## Konfiguration ohne Neustart neu laden

Viele Änderungen an den Konfigurationsdateien kannst du übernehmen, ohne den Server neu zu starten. Die Grundlagen zu den Dateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `config reload` | `cfg r` | Lädt die Spielkonfiguration neu: `config_gameplay.txt`, [Whitelist](whitelist-einrichten.md), [reservierte Slots](reservierte-slots-einrichten.md), Bans und [Geoblocking](geoblocking-einrichten.md) sowie die Ränge aus `config_remoteadmin.txt` |
| `/pm reload` | – | Lädt die Rang-Datei `config_remoteadmin.txt` und die Spielkonfiguration neu |

So übernimmst du eine Änderung ohne Neustart:

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei bearbeiten</b><br>
   Öffne die gewünschte Datei im folgenden Verzeichnis, ersetze `<Port>` durch deinen Game Port, nimm deine Änderungen vor und speichere die Datei:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

4. <b>Konfiguration neu laden</b><br>
   Gib in der Konsole der Verwaltung folgenden Befehl ein:

   ```
   config reload
   ```

   War das Neuladen erfolgreich, antwortet der Server mit:

   ```
   Configuration file successfully reloaded. Some of the changes will be applied in the next round.
   ```

:::: info Hinweis
Wie die Meldung schon sagt, greifen manche Änderungen erst in der nächsten Runde. Wenn eine Änderung auch dann nicht wirkt, starte den Server über die Verwaltung neu. Plugin-Konfigurationen von EXILED oder LabAPI werden mit `config reload` nicht neu geladen.
::::

### Neuen Rang sofort übernehmen

Hast du in der `config_remoteadmin.txt` einem Spieler einen Rang gegeben (siehe [Ränge vergeben](raenge-vergeben.md)), erhält er den Rang nach `config reload` erst in der nächsten Runde. Ist der Spieler gerade online und soll den Rang sofort bekommen, weise ihn zusätzlich mit `/setgroup` zu:

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/setgroup <SpielerID> <Rang>` | `/sg` | Weist einem Spieler, der gerade online ist, sofort einen Rang zu |

1. <b>Spieler-ID herausfinden</b><br>
   Gib in der Konsole `players` ein. Du erhältst eine Liste aller Spieler im Format `- Name: UserID [SpielerID]`.

2. <b>Rang zuweisen</b><br>
   Gib `/setgroup`, die Spieler-ID und den Namen des Rangs ein, z.B.:

   ```
   /setgroup 2 admin
   ```

:::: warning Achtung
`/setgroup` weist den Rang nur vorübergehend zu. Dauerhaft vergibst du einen Rang über den Eintrag in der `config_remoteadmin.txt`. Der Rang muss dort außerdem bereits definiert sein, sonst meldet die Konsole, dass es die Gruppe nicht gibt. Außerdem funktioniert `/setgroup` nur, wenn in der `config_gameplay.txt` `online_mode: true` gesetzt ist (Standard). Andernfalls meldet die Konsole `Empty encryption key of player ...`.
::::

## Nachrichten und CASSIE-Durchsagen

Über die Konsole kannst du Nachrichten an die Spieler senden. Broadcasts erscheinen am oberen Bildschirmrand, CASSIE-Durchsagen sind Sprachdurchsagen der Anlage im Spiel. Alle Befehle in diesem Abschnitt sind Remote-Admin-Befehle und brauchen deshalb das `/`. Den vollständigen Befehlssatz im Spiel findest du in der Anleitung [Remote Admin nutzen](remote-admin-nutzen.md).

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/bc <Sekunden> <Text>` | – | Zeigt allen Spielern eine Nachricht für die angegebene Dauer |
| `/pbc <SpielerID> <Sekunden> <Text>` | – | Zeigt nur bestimmten Spielern eine Nachricht |
| `/clearbc` | `/cl` | Entfernt alle aktiven Broadcasts |
| `/cassie <Text>` | – | Spielt eine CASSIE-Durchsage mit dem üblichen Signalton davor ab |
| `/cassie_sl <Text>` | – | Spielt eine CASSIE-Durchsage ohne Signalton ab |
| `/cassiewords` | – | Listet alle Wörter auf, die CASSIE aussprechen kann |
| `/clearcassie` | – | Leert die Warteschlange der CASSIE-Durchsagen |

Mehrere Spieler sprichst du bei `/pbc` über ihre Spieler-IDs getrennt durch Punkte an, z.B. `/pbc 2.5 10 Bitte im Lobby-Bereich warten`.

:::: tip Tipp
CASSIE spricht nur Wörter, die in seiner Wortliste stehen. Prüfe deshalb mit `/cassiewords`, welche Wörter verfügbar sind, bevor du eine längere Durchsage schreibst.
::::

:::: tip Beispiel
So kündigst du einen Neustart an und lässt ihn nach dem Ende der laufenden Runde durchführen:

```
/bc 15 Der Server startet nach dieser Runde neu.
restartnextround
```
::::
