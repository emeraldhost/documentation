---
description: Mods, Workshop-Inhalte und eigene Spielmodi auf einem Quake Live Server hinzufügen
---

# So fügst du Mods zu deinem Quake Live Server hinzu

Zusätzliche Inhalte kommen bei Quake Live ausschließlich aus dem **Steam Workshop**. Eigene Spielregeln legst du zusätzlich über sogenannte **Factories** an — das sind kleine JSON-Dateien, die auf deinem Server liegen.

:::: info Hinweis
Deine Mitspieler müssen nichts von Hand installieren. Quake Live lädt Custom-Inhalte automatisch herunter, sofern sie im Steam Workshop liegen. Die früheren Download-Funktionen über HTTP und UDP wurden entfernt — Inhalte, die nicht im Workshop sind, erreichen deine Spieler nicht.
::::

## Workshop-Inhalte hinzufügen

1. <b>Item-ID heraussuchen</b><br>
   Öffne das gewünschte Objekt im Steam Workshop von Quake Live in deinem Browser. Die Item-ID ist die Zahl am Ende der Adresse:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   In diesem Beispiel lautet die Item-ID `123456789`.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>workshop.txt öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /baseq3/workshop.txt
   ```

5. <b>Item-IDs eintragen</b><br>
   Trage pro Zeile genau eine Item-ID ein:

   ```
   123456789
   987654321
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Der Server lädt alle eingetragenen Objekte herunter, bevor er die Initialisierung abschließt.

:::: info Hinweis
Den Fortschritt der Downloads siehst du in der Konsole deines Servers. Schlägt ein Download fehl, wird das betroffene Objekt übersprungen und der Server startet trotzdem.
::::

## Custom-Maps in den Map-Pool aufnehmen

Eine heruntergeladene Map wird erst gespielt, wenn sie im Map-Pool steht.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>mappool.txt öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /baseq3/mappool.txt
   ```

3. <b>Map eintragen</b><br>
   Trage pro Zeile eine Map und die zugehörige Factory ein, getrennt durch ein `|`:

   ```
   campgrounds|ffa
   meinemap|ca
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Neben `mappool.txt` liefert der Server vorbereitete Map-Pools für einzelne Spielmodi mit, zum Beispiel `mappool_ca.txt`, `mappool_ctf.txt`, `mappool_duel.txt`, `mappool_ffa.txt`, `mappool_race.txt` und `mappool_tdm.txt`. Welche Datei verwendet wird, steuerst du in `/baseq3/server.cfg` über `sv_mapPoolFile`.
::::

## Eigene Spielmodi anlegen (Factories)

Gameplay-Einstellungen gehören in Quake Live **nicht** in die `server.cfg` — sie werden von der Factory des laufenden Spielmodus überschrieben. Eigene Regeln legst du deshalb als Factory an.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Ordner anlegen</b><br>
   Lege per [SFTP](../sftp-verbindung-herstellen.md) folgenden Ordner an, falls er noch nicht existiert:

   ```
   /baseq3/scripts/
   ```

3. <b>Factory-Datei erstellen</b><br>
   Lege dort eine Datei an, deren Name auf `.factories` endet:

   ```
   /baseq3/scripts/meinmodus.factories
   ```

4. <b>Factory definieren</b><br>
   Die Datei ist eine JSON-Datei und enthält entweder ein einzelnes Objekt oder ein Array mehrerer Factories. So sieht die mitgelieferte InstaGib-FFA-Factory aus:

   ```json
   {
     "id": "iffa",
     "title": "Instagib FFA",
     "author": "id Software",
     "description": "Railgun and Gauntlet only. One shot, one kill.",
     "basegt": "ffa",
     "cvars": {
       "g_dropCmds": "0",
       "g_spawnArmor": "0",
       "dmflags": "28",
       "g_instagib": "1",
       "g_startingWeapons": "65",
       "timelimit": "15",
       "g_allowKill": "0",
       "fraglimit": "50",
       "g_overtime": "0",
       "g_loadout": "0"
     }
   }
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

### Felder einer Factory

| Feld | Bedeutung |
|------|-----------|
| `id` | Kurzname, über den du die Factory im Map-Pool oder per `callvote` ansprichst |
| `title` | Anzeigename im Menü "Start Match" |
| `author` | Ersteller der Factory |
| `description` | Kurzbeschreibung im Menü |
| `basegt` | Grundspielmodus, auf dem die Einstellungen aufsetzen |
| `cvars` | Objekt mit den Servervariablen und ihren Werten |

Gültige Werte für `basegt`:

| Wert | Spielmodus |
|------|-----------|
| `ffa` | Free For All |
| `duel` | Duel |
| `race` | Race |
| `tdm` | Team Deathmatch |
| `ca` | Clan Arena |
| `ctf` | Capture the Flag |
| `oneflag` | One Flag CTF |
| `har` | Harvester |
| `ft` | Freeze Tag |
| `dom` | Domination |
| `ad` | Attack & Defend |
| `rr` | Red Rover |

:::: warning Achtung
Alle Felder müssen vorhanden und vom richtigen Typ sein. Ist eine Factory fehlerhaft, gibt der Server den Grund beim Start in der Konsole aus und die Factory steht nicht zur Verfügung.
::::

:::: tip Tipp
Trage deine eigene Factory zusammen mit den passenden Maps in die `mappool.txt` ein. Nur dann taucht sie am Ende einer Runde in der Map-Abstimmung auf.
::::

## Ordnerstruktur im Überblick

```
/baseq3/server.cfg                <- Serverkonfiguration
/baseq3/workshop.txt              <- Item-IDs aus dem Steam Workshop
/baseq3/mappool.txt               <- Maps und Factories des Map-Pools
/baseq3/access.txt                <- Admins, Moderatoren und Banns
/baseq3/scripts/                  <- eigene Factories (.factories)
```

:::: info Hinweis
Das Verzeichnis `baseq3` liegt im Hauptverzeichnis deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`.
::::

:::: warning Achtung
Stoppe deinen Server immer, bevor du Dateien bearbeitest oder hochlädst. Die `workshop.txt` wird nur beim Start des Servers ausgewertet.
::::

:::: info Plugins mit minqlx
Für Quake Live gibt es mit minqlx ein Plugin-Framework auf Python-Basis. Es setzt eine eigens dafür gebaute Serverumgebung samt Redis-Datenbank voraus und läuft deshalb nicht auf einem Standard-Quake-Live-Server. Für Maps, Modelle und eigene Spielmodi brauchst du es nicht — dafür genügen Steam Workshop und Factories.
::::
