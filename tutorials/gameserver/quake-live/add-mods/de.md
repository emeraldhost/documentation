---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Quake Live Server hinzu"
description: "Mods, Workshop-Inhalte und eigene Spielmodi auf einem Quake Live Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["quake-live"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/quake-live/add-admin", "gameserver/quake-live/create-backup", "gameserver/quake-live/join-server", "gameserver/quake-live/kick-ban-players"]
---

Zusätzliche Inhalte kommen bei Quake Live ausschließlich aus dem **Steam Workshop**. Eigene Spielregeln legst Du zusätzlich über sogenannte **Factories** an – das sind kleine JSON-Dateien, die auf Deinem Server liegen.

> [!NOTE]
> Deine Mitspieler müssen nichts von Hand installieren. Quake Live lädt Custom-Inhalte automatisch herunter, sofern sie im Steam Workshop liegen. Die früheren Download-Funktionen über HTTP und UDP wurden entfernt – Inhalte, die nicht im Workshop sind, erreichen Deine Spieler nicht.

## Workshop-Inhalte hinzufügen

1. **Item-ID heraussuchen**\
   Öffne das gewünschte Objekt im Steam Workshop von Quake Live in Deinem Browser. Die Item-ID ist die Zahl am Ende der Adresse:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   In diesem Beispiel lautet die Item-ID `123456789`.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **workshop.txt öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /baseq3/workshop.txt
   ```

5. **Item-IDs eintragen**\
   Trage pro Zeile genau eine Item-ID ein:

   ```text
   123456789
   987654321
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server. Der Server lädt alle eingetragenen Objekte herunter, bevor er die Initialisierung abschließt.

> [!NOTE]
> Den Fortschritt der Downloads siehst Du in der Konsole Deines Servers. Schlägt ein Download fehl, wird das betroffene Objekt übersprungen und der Server startet trotzdem.

## Custom-Maps in den Map-Pool aufnehmen

Eine heruntergeladene Map wird erst gespielt, wenn sie im Map-Pool steht.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **mappool.txt öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /baseq3/mappool.txt
   ```

3. **Map eintragen**\
   Trage pro Zeile eine Map und die zugehörige Factory ein, getrennt durch ein `|`:

   ```text
   campgrounds|ffa
   meinemap|ca
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Neben `mappool.txt` liefert der Server vorbereitete Map-Pools für einzelne Spielmodi mit, zum Beispiel `mappool_ca.txt`, `mappool_ctf.txt`, `mappool_duel.txt`, `mappool_ffa.txt`, `mappool_race.txt` und `mappool_tdm.txt`. Welche Datei verwendet wird, steuerst Du in `/baseq3/server.cfg` über `sv_mapPoolFile`.

## Eigene Spielmodi anlegen (Factories)

Gameplay-Einstellungen gehören in Quake Live **nicht** in die `server.cfg` – sie werden von der Factory des laufenden Spielmodus überschrieben. Eigene Regeln legst Du deshalb als Factory an.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Ordner anlegen**\
   Lege per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgenden Ordner an, falls er noch nicht existiert:

   ```text
   /baseq3/scripts/
   ```

3. **Factory-Datei erstellen**\
   Lege dort eine Datei an, deren Name auf `.factories` endet:

   ```text
   /baseq3/scripts/meinmodus.factories
   ```

4. **Factory definieren**\
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

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Factory nicht lädt.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Felder einer Factory

| Feld | Bedeutung |
|------|-----------|
| `id` | Kurzname, über den Du die Factory im Map-Pool oder per `callvote` ansprichst |
| `title` | Anzeigename im Menü „Start Match“ |
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

> [!WARNING]
> Alle Felder müssen vorhanden und vom richtigen Typ sein. Ist eine Factory fehlerhaft, gibt der Server den Grund beim Start in der Konsole aus und die Factory steht nicht zur Verfügung.

> [!TIP]
> Trage Deine eigene Factory zusammen mit den passenden Maps in die `mappool.txt` ein. Nur dann taucht sie am Ende einer Runde in der Map-Abstimmung auf.

## Ordnerstruktur im Überblick

```text
/baseq3/server.cfg                <- Serverkonfiguration
/baseq3/workshop.txt              <- Item-IDs aus dem Steam Workshop
/baseq3/mappool.txt               <- Maps und Factories des Map-Pools
/baseq3/access.txt                <- Admins, Moderatoren und Banns
/baseq3/scripts/                  <- eigene Factories (.factories)
```

> [!NOTE]
> Das Verzeichnis `baseq3` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/baseq3/`.

> [!WARNING]
> Stoppe Deinen Server immer, bevor Du Dateien bearbeitest oder hochlädst. Die `workshop.txt` wird nur beim Start des Servers ausgewertet.

> [!NOTE]
> **Plugins mit minqlx**
>
> Für Quake Live gibt es mit minqlx ein Plugin-Framework auf Python-Basis. Es setzt eine eigens dafür gebaute Serverumgebung samt Redis-Datenbank voraus und läuft deshalb nicht auf einem Standard-Quake-Live-Server. Für Maps, Modelle und eigene Spielmodi brauchst Du es nicht – dafür genügen Steam Workshop und Factories.
