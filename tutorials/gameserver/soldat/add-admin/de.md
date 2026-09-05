---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Soldat Server hinzu"
description: "Admin auf einem Soldat Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["soldat"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/soldat/add-mods", "gameserver/soldat/create-backup", "gameserver/soldat/join-server", "gameserver/soldat/kick-ban-players"]
---

Adminrechte funktionieren auf einem Soldat Server über zwei Mechanismen: über ein **Adminpasswort**, mit dem sich jeder Spieler im Spiel anmelden kann, und über eine **dauerhafte Adminliste**, in der IP-Adressen hinterlegt werden.

> [!NOTE]
> Soldat identifiziert Admins über die **IP-Adresse**, nicht über eine Steam-ID oder eine Spieler-UUID. Für die dauerhafte Adminliste brauchst Du daher die IP-Adresse des jeweiligen Spielers.

> [!NOTE]
> **Zwei Serverversionen**
>
> Für Soldat gibt es zwei Serverversionen mit unterschiedlicher Konfiguration. Welche bei Dir läuft, erkennst Du im Dateimanager beziehungsweise per [SFTP](/tutorials/gameserver/establish-sftp-connection):
>
> | Datei im Hauptverzeichnis | Version |
> |---------------------------|---------|
> | `soldat.ini` und `server.ini` | klassischer Soldat-Server |
> | `configs/server.cfg` | OpenSoldat |
>
> Die Anleitung nennt jeweils beide Varianten.

## Adminpasswort setzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfiguration öffnen**\
   Klassischer Server: öffne die `soldat.ini` und wechsle in den Abschnitt `[NETWORK]`.

   OpenSoldat: öffne die Datei `configs/server.cfg`.

4. **Passwort eintragen**\
   Klassischer Server:

   ```text
   Admin_Password=DeinAdminPasswort
   ```

   OpenSoldat:

   ```text
   set sv_adminpassword DeinAdminPasswort
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> Beim klassischen Soldat-Server ist `Admin_Password` ein Pflichtfeld: Ist es leer, **startet der Server nicht**. Das Passwort unterscheidet außerdem Groß- und Kleinschreibung.

> [!WARNING]
> Das Adminpasswort ist nicht das Spielpasswort. Das Spielpasswort (`Game_Password` beziehungsweise `sv_password`) regelt nur, wer überhaupt auf den Server darf. Wer das Adminpasswort kennt, hat die volle Kontrolle über Deinen Server – gib es nur an Personen weiter, denen Du vertraust.

## Als Admin im Spiel anmelden

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/soldat/join-server).

2. **Chat öffnen**\
   Öffne im Spiel den Chat.

3. **Anmelden**\
   Gib folgenden Befehl mit Deinem Adminpasswort ein:

   ```text
   /adminlog DeinAdminPasswort
   ```

   Beispiel:

   ```text
   /adminlog Rxz12F
   ```

4. **Befehle nutzen**\
   Anschließend stehen Dir die Adminbefehle im Chat zur Verfügung – alle beginnen mit einem `/`.

> [!NOTE]
> Die Anmeldung per `/adminlog` gilt nur für die laufende Sitzung. Nach einem Neuverbinden musst Du Dich erneut anmelden. Wer dauerhaft Admin sein soll, gehört in die Adminliste.

## Dauerhafte Admins über die Adminliste

Dauerhafte Admins werden in der Datei `remote.txt` im Hauptverzeichnis Deines Servers gepflegt. Dort steht **eine IP-Adresse pro Zeile**, optional gefolgt von einem Kommentar.

### Admin im Spiel hinzufügen

1. **Als Admin anmelden**\
   Melde Dich wie oben beschrieben mit `/adminlog` an.

2. **Spieler eintragen**\
   Gib im Chat folgenden Befehl mit dem Namen des Spielers ein:

   ```text
   /adm <Spielername>
   ```

   Der Server ermittelt die IP-Adresse des Spielers selbst und trägt sie in die `remote.txt` ein.

   Kennst Du die IP-Adresse bereits, trägst Du sie auch direkt ein – der Spieler muss dafür nicht auf dem Server sein:

   ```text
   /admip <IP-Adresse>
   ```

### Admin über die Datei hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **remote.txt öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `remote.txt` im Hauptverzeichnis Deines Servers. Existiert sie noch nicht, lege sie an.

3. **IP-Adressen eintragen**\
   Trage pro Zeile eine IPv4-Adresse ein. Dahinter kannst Du einen Kommentar setzen:

   ```text
   127.0.0.1 [!] Host
   198.51.100.5 [!] Zweiter Eintrag
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Admin entfernen

```text
/unadm <IP-Adresse>
```

> [!NOTE]
> In der Dokumentation kursiert für dasselbe Ziel auch der Befehl `/deadm`. Funktioniert eine der beiden Varianten auf Deinem Server nicht, probiere die andere – oder entferne die betreffende Zeile direkt aus der `remote.txt`. Der Weg über die Datei funktioniert immer.

## Remote-Admin-Konsole

Soldat bringt eine Remote-Admin-Konsole mit, über die Du dieselben Befehle von außerhalb des Spiels ausführen kannst. Sie läuft über **TCP auf demselben Port wie das Spiel** – also über Deinen Game Port.

| Einstellung (klassisch, `server.ini`) | Einstellung (OpenSoldat) | Bedeutung |
|---------------------------------------|--------------------------|-----------|
| `MaxAdminConnections` | `net_maxadminconnections` | Maximale Anzahl gleichzeitiger Admin-Verbindungen |
| – | `net_adminip` | IP-Adresse, an die der Admin-Port gebunden wird |
| – | `net_rcon_limit` / `net_rcon_burst` | Begrenzung der Verbindungsversuche pro Sekunde |

> [!IMPORTANT]
> Ohne gesetztes Adminpasswort kann sich niemand an der Remote-Konsole anmelden. Umgekehrt gilt: Wer Dein Adminpasswort kennt, kann Deinen Server vollständig fernsteuern – wähle ein langes, eindeutiges Passwort und nutze im Zweifel die Konsole in Deiner **Verwaltung**.

## Admins einschränken

Damit angemeldete Admins bestimmte Befehle nicht ausführen können, gibt es den gesperrten Modus.

| Serverversion | Aktivierung | Wirkung |
|---------------|-------------|---------|
| klassischer Server | Startparameter `-lock 1` | Admins können `/loadcon`, `/password` und `/maxplayers` nicht mehr verwenden |
| OpenSoldat | `set sv_lockedmode 1` in der `configs/server.cfg` | Admins können `/loadcon` nicht mehr verwenden |

> [!NOTE]
> Startparameter des Servers kannst Du nicht selbst ändern. Möchtest Du den gesperrten Modus auf dem klassischen Server nutzen, wende Dich an den Support.

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

> [!TIP]
> **Spielmodi**
>
> `0` Deathmatch, `1` Pointmatch, `2` Teammatch, `3` Capture the Flag, `4` Rambomatch, `5` Infiltration, `6` Hold the Flag

> [!NOTE]
> Die Team-ID hängt direkt am Befehl, es steht also kein Leerzeichen dazwischen. Der Botname ist der Dateiname des Bots ohne Pfad und ohne Endung und unterscheidet Groß- und Kleinschreibung.

> [!WARNING]
> `/gamemode`, `/friendlyfire` und `/respawntime` gibt es nur beim **klassischen** Server. Bei **OpenSoldat** stellst Du diese Werte stattdessen über die passenden Optionen der `configs/server.cfg` ein, zum Beispiel `sv_gamemode` oder `sv_friendlyfire`.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/soldat/kick-ban-players).
