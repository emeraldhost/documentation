---
description: Admin auf einem Soldat Server hinzufügen
---

# So fügst du einen Admin auf deinem Soldat Server hinzu

Adminrechte funktionieren auf einem Soldat Server über zwei Mechanismen: über ein **Adminpasswort**, mit dem sich jeder Spieler im Spiel anmelden kann, und über eine **dauerhafte Adminliste**, in der IP-Adressen hinterlegt werden.

:::: info Hinweis
Soldat identifiziert Admins über die **IP-Adresse**, nicht über eine Steam-ID oder eine Spieler-UUID. Für die dauerhafte Adminliste brauchst du daher die IP-Adresse des jeweiligen Spielers.
::::

:::: info Zwei Serverversionen
Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei dir läuft, erkennst du im Dateimanager beziehungsweise per [SFTP](../sftp-verbindung-herstellen.md):

| Datei im Hauptverzeichnis | Version |
|---------------------------|---------|
| `soldat.ini` und `server.ini` | klassischer Soldat-Server |
| `configs/server.cfg` | OpenSoldat |

Die Anleitung nennt jeweils beide Varianten.
::::

## Adminpasswort setzen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfiguration öffnen</b><br>
   Klassischer Server: öffne die `soldat.ini` und wechsle in den Abschnitt `[NETWORK]`.

   OpenSoldat: öffne die Datei `configs/server.cfg`.

4. <b>Passwort eintragen</b><br>
   Klassischer Server:

   ```
   Admin_Password=DeinAdminPasswort
   ```

   OpenSoldat:

   ```
   set sv_adminpassword DeinAdminPasswort
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: danger Wichtig
Beim klassischen Soldat-Server ist `Admin_Password` ein Pflichtfeld: Ist es leer, **startet der Server nicht**. Das Passwort unterscheidet außerdem Groß- und Kleinschreibung.
::::

:::: warning Achtung
Das Adminpasswort ist nicht das Spielpasswort. Das Spielpasswort (`Game_Password` beziehungsweise `sv_password`) regelt nur, wer überhaupt auf den Server darf. Wer das Adminpasswort kennt, hat die volle Kontrolle über deinen Server – gib es nur an Personen weiter, denen du vertraust.
::::

## Als Admin im Spiel anmelden

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Chat öffnen</b><br>
   Öffne im Spiel den Chat.

3. <b>Anmelden</b><br>
   Gib folgenden Befehl mit deinem Adminpasswort ein:

   ```
   /adminlog DeinAdminPasswort
   ```

   Beispiel:

   ```
   /adminlog Rxz12F
   ```

4. <b>Befehle nutzen</b><br>
   Anschließend stehen dir die Adminbefehle im Chat zur Verfügung – alle beginnen mit einem `/`.

:::: info Hinweis
Die Anmeldung per `/adminlog` gilt nur für die laufende Sitzung. Nach einem Neuverbinden musst du dich erneut anmelden. Wer dauerhaft Admin sein soll, gehört in die Adminliste.
::::

## Dauerhafte Admins über die Adminliste

Dauerhafte Admins werden in der Datei `remote.txt` im Hauptverzeichnis deines Servers gepflegt. Dort steht **eine IP-Adresse pro Zeile**, optional gefolgt von einem Kommentar.

### Admin im Spiel hinzufügen

1. <b>Als Admin anmelden</b><br>
   Melde dich wie oben beschrieben mit `/adminlog` an.

2. <b>Spieler eintragen</b><br>
   Gib im Chat folgenden Befehl mit dem Namen des Spielers ein:

   ```
   /adm <Spielername>
   ```

   Der Server ermittelt die IP-Adresse des Spielers selbst und trägt sie in die `remote.txt` ein.

   Kennst du die IP-Adresse bereits, trägst du sie auch direkt ein – der Spieler muss dafür nicht auf dem Server sein:

   ```
   /admip <IP-Adresse>
   ```

### Admin über die Datei hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>remote.txt öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `remote.txt` im Hauptverzeichnis deines Servers. Existiert sie noch nicht, lege sie an.

3. <b>IP-Adressen eintragen</b><br>
   Trage pro Zeile eine IPv4-Adresse ein. Dahinter kannst du einen Kommentar setzen:

   ```
   127.0.0.1 [!] Host
   24.232.167.2 [!] Zweiter Eintrag
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

### Admin entfernen

```
/unadm <IP-Adresse>
```

:::: info Hinweis
In der Dokumentation kursiert für dasselbe Ziel auch der Befehl `/deadm`. Funktioniert eine der beiden Varianten auf deinem Server nicht, probiere die andere – oder entferne die betreffende Zeile direkt aus der `remote.txt`. Der Weg über die Datei funktioniert immer.
::::

## Remote-Admin-Konsole

Soldat bringt eine Remote-Admin-Konsole mit, über die du dieselben Befehle von außerhalb des Spiels ausführen kannst. Sie läuft über **TCP auf demselben Port wie das Spiel** – also über deinen Game Port.

| Einstellung (klassisch, `server.ini`) | Einstellung (OpenSoldat) | Bedeutung |
|---------------------------------------|--------------------------|-----------|
| `MaxAdminConnections` | `net_maxadminconnections` | Maximale Anzahl gleichzeitiger Admin-Verbindungen |
| – | `net_adminip` | IP-Adresse, an die der Admin-Port gebunden wird |
| – | `net_rcon_limit` / `net_rcon_burst` | Begrenzung der Verbindungsversuche pro Sekunde |

:::: danger Wichtig
Ohne gesetztes Adminpasswort kann sich niemand an der Remote-Konsole anmelden. Umgekehrt gilt: Wer dein Adminpasswort kennt, kann deinen Server vollständig fernsteuern – wähle ein langes, eindeutiges Passwort und nutze im Zweifel die Konsole in deiner **Verwaltung**.
::::

## Admins einschränken

Damit angemeldete Admins bestimmte Befehle nicht ausführen können, gibt es den gesperrten Modus.

| Serverversion | Aktivierung | Wirkung |
|---------------|-------------|---------|
| klassischer Server | Startparameter `-lock 1` | Admins können `/loadcon`, `/password` und `/maxplayers` nicht mehr verwenden |
| OpenSoldat | `set sv_lockedmode 1` in der `configs/server.cfg` | Admins können `/loadcon` nicht mehr verwenden |

:::: info Hinweis
Startparameter des Servers kannst du nicht selbst ändern. Möchtest du den gesperrten Modus auf dem klassischen Server nutzen, wende dich an den Support.
::::

## Wichtige Adminbefehle

| Befehl | Beschreibung |
|--------|-------------|
| `/adminlog <Passwort>` | Als Admin anmelden |
| `/adm <Spielername>` | Spieler dauerhaft zur Adminliste hinzufügen |
| `/admip <IP-Adresse>` | IP-Adresse dauerhaft zur Adminliste hinzufügen |
| `/unadm <IP-Adresse>` | Eintrag aus der Adminliste entfernen |
| `/map <Mapname>` | Auf eine bestimmte Karte wechseln |
| `/nextmap` | Zur nächsten Karte der Rotation wechseln |
| `/restart` | Runde neu starten |
| `/gamemode 0-6` | Spielmodus wechseln |
| `/friendlyfire 0/1` | Eigenbeschuss aus- oder einschalten |
| `/respawntime <Sekunden>` | Wiedereinstiegszeit setzen |
| `/say <Text>` | Nachricht an alle Spieler senden |
| `/addbot <Botname>` | Bot hinzufügen |
| `/addbot<Team-ID> <Botname>` | Bot in ein bestimmtes Team setzen, z.B. `/addbot2 Terminator` |

:::: tip Spielmodi
`0` Deathmatch, `1` Pointmatch, `2` Teammatch, `3` Capture the Flag, `4` Rambomatch, `5` Infiltration, `6` Hold the Flag
::::

:::: info Hinweis
Die Team-ID hängt direkt am Befehl, es steht also kein Leerzeichen dazwischen. Der Botname ist der Dateiname des Bots ohne Pfad und ohne Endung und unterscheidet Groß- und Kleinschreibung.
::::

:::: warning Achtung
`/gamemode`, `/friendlyfire` und `/respawntime` gibt es nur beim **klassischen** Server. Bei **OpenSoldat** stellst du diese Werte stattdessen über die passenden Optionen der `configs/server.cfg` ein, zum Beispiel `sv_gamemode` oder `sv_friendlyfire`.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
