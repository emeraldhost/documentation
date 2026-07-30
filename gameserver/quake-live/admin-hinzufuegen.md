---
description: Admin auf einem Quake Live Server hinzufügen
---

# So fügst du einen Admin auf deinem Quake Live Server hinzu

Quake Live verwaltet Adminrechte, Moderatorenrechte und Banns gemeinsam in einer einzigen Textdatei: der `access.txt`. Eingetragen wird die **SteamID64** des Spielers — eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest. Alternativ verbindest du dich auf einen Server und gibst in der Konsole des Spiels `/players` ein — die Ausgabe enthält die SteamID64 aller verbundenen Spieler.
::::

## Rechtestufen

| Stufe | Bedeutung |
|-------|-----------|
| `mod` | Moderator — darf Spieler verwalten, zum Beispiel stummschalten oder vom Server entfernen |
| `admin` | Administrator — die höchste Stufe der `access.txt`, umfasst die Moderatorenrechte |
| `ban` | Kein Recht, sondern ein Bann: Der Spieler kommt nicht mehr auf den Server |

## Admin über die access.txt eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>access.txt öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /baseq3/access.txt
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage pro Zeile einen Eintrag ein, bestehend aus der SteamID64 und der Rechtestufe, getrennt durch ein `|`:

   ```
   76561198012345678|admin
   76561198087654321|mod
   ```

   Zeilen, die mit `#` beginnen, sind Kommentare und werden ignoriert.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Bearbeite die `access.txt` **nur bei gestopptem Server**. Der Server schreibt die Zugriffsliste vor jedem Map-Ladevorgang aus dem Arbeitsspeicher zurück in die Datei — Änderungen, die du im laufenden Betrieb speicherst, werden dabei überschrieben.
::::

:::: info Hinweis
Das Verzeichnis `baseq3` liegt im Hauptverzeichnis deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`. Welche Datei der Server verwendet, steuert die Servervariable `g_accessFile` — voreingestellt ist `access.txt`.
::::

## Rechte im laufenden Betrieb vergeben

Du kannst Rechte auch vergeben, ohne den Server zu stoppen. Dafür nutzt du die **Konsole** deines Servers in der Verwaltung.

1. <b>Client-ID herausfinden</b><br>
   Die Befehle erwarten die **Client-ID** — die Nummer, die der Server einem verbundenen Spieler zuweist. Verbinde dich dafür im Spiel auf deinen Server und gib in der Konsole des Spiels folgenden Befehl ein:

   ```
   /players
   ```

   Die Ausgabe listet alle verbundenen Spieler mit ihrer Client-ID und ihrer SteamID64 auf.

2. <b>Konsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

3. <b>Rechte vergeben</b><br>
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```
   addadmin 3
   ```

| Befehl | Beschreibung |
|--------|-------------|
| `addadmin <Client-ID>` | Spieler zum Administrator machen |
| `addmod <Client-ID>` | Spieler zum Moderator machen |
| `demote <Client-ID>` | Adminrechte eines Spielers entziehen |
| `reload_access` | Die `access.txt` neu einlesen |

:::: info Hinweis
In der Konsole deines Servers gibst du die Befehle ohne führendes `/` ein. Im Spiel schreibst du dieselben Befehle mit einem führenden `/`, also zum Beispiel `/addadmin 3` oder `/demote 3`.
::::

:::: warning Achtung
`reload_access` liest die Datei zwar sofort neu ein, der Server überschreibt sie aber weiterhin beim nächsten Map-Wechsel mit seinem eigenen Stand. Für dauerhafte Änderungen ist der Weg über den gestoppten Server sicherer.
::::

## Sicherheitshinweis zur Fernwartung

Die mitgelieferte `server.cfg` aktiviert die ZeroMQ-Fernkonsole (`zmq_rcon_enable "1"`) und enthält dabei das Platzhalter-Passwort `ADMINPASSWORD`.

:::: danger Wichtig
Verwalte deinen Server über die Konsole in der Verwaltung. Nutzt du die Fernkonsole nicht, setze in `/baseq3/server.cfg` folgenden Wert:

```
set zmq_rcon_enable "0"
```

Möchtest du sie nutzen, vergib zwingend ein eigenes, langes Passwort über `zmq_rcon_password` und lege den in `zmq_rcon_port` eingetragenen Port zuvor als zusätzliche Portfreigabe in der Verwaltung an. Die Fernkonsole bindet auf einen eigenen **TCP**-Port, nicht auf den Game Port.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

:::: info Hinweis
Das Plugin-Framework minqlx bringt ein eigenes, davon getrenntes Rechtesystem mit. Es steht nur zur Verfügung, wenn dein Server ausdrücklich mit einem minqlx-Image betrieben wird — auf einem Standard-Quake-Live-Server gilt ausschließlich die `access.txt`.
::::
