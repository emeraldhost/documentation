---
slug: "konsolenbefehle-nutzen"
language: "de"
title: "So nutzt Du Konsolenbefehle auf Deinem SCP: Secret Laboratory Server"
description: "Konsolenbefehle auf einem SCP: Secret Laboratory Server nutzen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Konsolenbefehle nutzen"
sort: 20
related: ["gameserver/scp-secret-laboratory/use-remote-admin", "gameserver/scp-secret-laboratory/give-roles-and-items", "gameserver/scp-secret-laboratory/kick-and-ban-players", "gameserver/scp-secret-laboratory/create-custom-ranks"]
---
Die Konsole in der Verwaltung Deines Servers ist die LocalAdmin-Konsole von SCP: Secret Laboratory. Darüber steuerst Du Deinen Server, ohne selbst im Spiel zu sein: Runden starten und neu starten, Konfigurationsdateien neu laden oder Nachrichten an alle Spieler senden. Die Konsole hat volle Rechte, Du brauchst dafür keinen Rang im Spiel.

Diese Seite ist eine Übersicht der wichtigsten Konsolenbefehle. Die Remote-Admin-Befehle zum Moderieren im Spiel findest Du in der Anleitung [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

## So gibst Du Befehle ein

1. **Konsole öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur Konsole.

2. **Befehl eingeben**\
   Gib den Befehl in die Eingabezeile ein und bestätige mit Enter. Die Antwort des Servers erscheint direkt in der Konsole.

In der Konsole gibt es drei Arten von Befehlen:

| Art | Eingabe | Beispiel |
|-----|---------|----------|
| LocalAdmin- und Server-Befehle | direkt, ohne Präfix | `roundrestart` |
| Remote-Admin-Befehle | mit vorangestelltem `/` | `/bc 10 Willkommen!` |
| Befehle an die Northwood-Server | mit vorangestelltem `!` | `!private` |

In den Tabellen auf dieser Seite steht jeder Befehl genau so, wie Du ihn eingibst. Fehlt bei einem Remote-Admin-Befehl das `/`, meldet die Konsole `Command ... does not exist!`.

> [!TIP]
> Mit `help` zeigst Du alle LocalAdmin- und Server-Befehle an, mit `/help` alle Remote-Admin-Befehle. Die Befehlsliste kann sich mit Spiel-Updates ändern, deshalb ist `help` immer die verlässlichste Referenz.

## LocalAdmin-Befehle

Diese Befehle verarbeitet LocalAdmin selbst, also das Programm, das den eigentlichen Spielserver startet und überwacht.

| Befehl | Beschreibung |
|--------|--------------|
| `help` | Listet alle LocalAdmin-Befehle und danach alle Server-Befehle auf |
| `exit` | Stoppt den Server |
| `restart` | Startet den Server neu |
| `forcerestart` | Beendet den Server sofort und startet ihn neu |
| `lacfg` | Zeigt die aktuelle LocalAdmin-Konfiguration und den Pfad der Konfigurationsdatei |

> [!NOTE]
> Zum Stoppen und Neustarten nutzt Du am besten die Schaltflächen in der Verwaltung. `exit` und `restart` in der Konsole sind nur eine Alternative. Nur beim Start über die Verwaltung laufen auch die automatischen Updates. Neustarts über die Konsole (`restart`, `forcerestart`, `restartnextround` und `softrestart`) starten nur den Spielserver neu und installieren keine Spiel-Updates.

> [!WARNING]
> `restart` startet den kompletten Server neu und nicht nur die Runde. Für einen Rundenneustart nutzt Du `roundrestart` oder kurz `rr`. `forcerestart` beendet den Server ohne geordnetes Herunterfahren und ist nur für den Fall gedacht, dass der Server nicht mehr reagiert.

## Server in der Serverliste verbergen

Ist Dein Server verifiziert und steht in der öffentlichen Serverliste, kannst Du ihn über die Konsole vorübergehend aus der Liste nehmen. Die Befehle werden mit `!` und ohne `/` eingegeben:

| Befehl | Beschreibung |
|--------|--------------|
| `!private` | Verbirgt Deinen verifizierten Server in der öffentlichen Serverliste |
| `!public` | Zeigt Deinen Server wieder in der öffentlichen Serverliste an |

> [!NOTE]
> Diese Befehle wirken nur bei verifizierten Servern. Ein nicht verifizierter Server erscheint ohnehin nicht in der öffentlichen Liste. Wie Du Deinen Server verifizieren lässt, erfährst Du in der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).

## Runden steuern

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `roundrestart` | `rr` | Startet die laufende Runde sofort neu |
| `forcestart` | `fs` | Startet die Runde sofort aus der Lobby heraus |
| `/lobbylock` | `/ll` | Sperrt oder entsperrt die Lobby: Die Runde startet nicht, bis Du die Sperre wieder aufhebst |
| `/roundlock` | `/rl` | Sperrt oder entsperrt das Rundenende: Die laufende Runde kann nicht enden |
| `restartnextround` | `rnr` | Startet den Server neu, sobald die aktuelle Runde endet |
| `stopnextround` | `snr` | Stoppt den Server, sobald die aktuelle Runde endet |
| `softrestart` | `sr` | Startet den Server sofort neu und fordert alle Spieler auf, sich danach wieder zu verbinden |

`forcestart` und `/lobbylock` funktionieren nur in der Lobby, also bevor die Runde begonnen hat. `/lobbylock`, `/roundlock`, `restartnextround` und `stopnextround` sind Schalter: Gibst Du den Befehl ein zweites Mal ein, hebst Du ihn wieder auf. Die Konsole bestätigt Dir jeweils den neuen Zustand, z.B. `Server WILL restart after next round.` oder `Server WON'T restart after next round.`

Weitere Befehle zum Steuern der Runde findest Du in der Anleitung [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

> [!TIP]
> `restartnextround` ist ideal, um einen Neustart ohne Unterbrechung für die Spieler vorzubereiten, z.B. nachdem Du eine Konfigurationsdatei geändert hast. Der Server startet erst neu, wenn die laufende Runde ohnehin vorbei ist.

## Konfiguration ohne Neustart neu laden

Viele Änderungen an den Konfigurationsdateien kannst Du übernehmen, ohne den Server neu zu starten. Die Grundlagen zu den Dateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `config reload` | `cfg r` | Lädt die Spielkonfiguration neu: `config_gameplay.txt`, [Whitelist](/tutorials/gameserver/scp-secret-laboratory/set-up-whitelist), [reservierte Slots](/tutorials/gameserver/scp-secret-laboratory/set-up-reserved-slots), Bans und [Geoblocking](/tutorials/gameserver/scp-secret-laboratory/set-up-geoblocking) sowie die Ränge aus `config_remoteadmin.txt` |
| `/pm reload` | – | Lädt die Rang-Datei `config_remoteadmin.txt` und die Spielkonfiguration neu |

So übernimmst Du eine Änderung ohne Neustart:

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei bearbeiten**\
   Öffne die gewünschte Datei im folgenden Verzeichnis, ersetze `<Port>` durch Deinen Game Port, nimm Deine Änderungen vor und speichere die Datei:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

4. **Konfiguration neu laden**\
   Gib in der Konsole der Verwaltung folgenden Befehl ein:

   ```text
   config reload
   ```

   War das Neuladen erfolgreich, antwortet der Server mit:

   ```text
   Configuration file successfully reloaded. Some of the changes will be applied in the next round.
   ```

> [!NOTE]
> Wie die Meldung schon sagt, greifen manche Änderungen erst in der nächsten Runde. Wenn eine Änderung auch dann nicht wirkt, starte den Server über die Verwaltung neu. Plugin-Konfigurationen von EXILED oder LabAPI werden mit `config reload` nicht neu geladen.

### Neuen Rang sofort übernehmen

Hast Du in der `config_remoteadmin.txt` einem Spieler einen Rang gegeben (siehe [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks)), erhält er den Rang nach `config reload` erst in der nächsten Runde. Ist der Spieler gerade online und soll den Rang sofort bekommen, weise ihn zusätzlich mit `/setgroup` zu:

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/setgroup <SpielerID> <Rang>` | `/sg` | Weist einem Spieler, der gerade online ist, sofort einen Rang zu |

1. **Spieler-ID herausfinden**\
   Gib in der Konsole `players` ein. Du erhältst eine Liste aller Spieler im Format `- Name: UserID [SpielerID]`.

2. **Rang zuweisen**\
   Gib `/setgroup`, die Spieler-ID und den Namen des Rangs ein, z.B.:

   ```text
   /setgroup 2 admin
   ```

> [!WARNING]
> `/setgroup` weist den Rang nur vorübergehend zu. Dauerhaft vergibst Du einen Rang über den Eintrag in der `config_remoteadmin.txt`. Der Rang muss dort außerdem bereits definiert sein, sonst meldet die Konsole, dass es die Gruppe nicht gibt. Außerdem funktioniert `/setgroup` nur, wenn in der `config_gameplay.txt` `online_mode: true` gesetzt ist (Standard). Andernfalls meldet die Konsole `Empty encryption key of player ...`.

## Nachrichten und CASSIE-Durchsagen

Über die Konsole kannst Du Nachrichten an die Spieler senden. Broadcasts erscheinen am oberen Bildschirmrand, CASSIE-Durchsagen sind Sprachdurchsagen der Anlage im Spiel. Alle Befehle in diesem Abschnitt sind Remote-Admin-Befehle und brauchen deshalb das `/`. Den vollständigen Befehlssatz im Spiel findest Du in der Anleitung [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

| Befehl | Kurzform | Beschreibung |
|--------|----------|--------------|
| `/bc <Sekunden> <Text>` | – | Zeigt allen Spielern eine Nachricht für die angegebene Dauer |
| `/pbc <SpielerID> <Sekunden> <Text>` | – | Zeigt nur bestimmten Spielern eine Nachricht |
| `/clearbc` | `/cl` | Entfernt alle aktiven Broadcasts |
| `/cassie <Text>` | – | Spielt eine CASSIE-Durchsage mit dem üblichen Signalton davor ab |
| `/cassie_sl <Text>` | – | Spielt eine CASSIE-Durchsage ohne Signalton ab |
| `/cassiewords` | – | Listet alle Wörter auf, die CASSIE aussprechen kann |
| `/clearcassie` | – | Leert die Warteschlange der CASSIE-Durchsagen |

Mehrere Spieler sprichst Du bei `/pbc` über ihre Spieler-IDs getrennt durch Punkte an, z.B. `/pbc 2.5 10 Bitte im Lobby-Bereich warten`.

> [!TIP]
> CASSIE spricht nur Wörter, die in seiner Wortliste stehen. Prüfe deshalb mit `/cassiewords`, welche Wörter verfügbar sind, bevor Du eine längere Durchsage schreibst.

> [!TIP]
> **Beispiel**
>
> So kündigst Du einen Neustart an und lässt ihn nach dem Ende der laufenden Runde durchführen:
>
> ```text
> /bc 15 Der Server startet nach dieser Runde neu.
> restartnextround
> ```
