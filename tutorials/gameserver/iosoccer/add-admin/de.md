---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem IOSoccer Server hinzu"
description: "Admin auf einem IOSoccer Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["iosoccer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/iosoccer/add-mods", "gameserver/iosoccer/create-backup", "gameserver/iosoccer/join-server", "gameserver/iosoccer/kick-ban-players"]
---

IOSoccer bringt von Haus aus **kein Adminsystem** mit. Es gibt keine Adminliste im Spiel und keine Servereinstellung, mit der Du einen Spieler zum Admin machst. Verwaltet wird der Server über die **Serverkonsole** beziehungsweise **RCON** – Adminrechte direkt im Spiel gibt es ausschließlich über **SourceMod**.

> [!NOTE]
> Die Kapitänsfunktionen `mp_captaincy_home` und `mp_captaincy_away` haben nichts mit Adminrechten zu tun – sie steuern nur, wer im Spiel Mannschaftskapitän ist. Ein Abstimmungssystem, über das Spieler selbst Entscheidungen treffen könnten, hat IOSoccer ebenfalls nicht.

> [!WARNING]
> **Voraussetzung**
>
> Metamod:Source und SourceMod müssen auf Deinem Server installiert sein. Wie das geht, steht unter [Mods hinzufügen](/tutorials/gameserver/iosoccer/add-mods).

## SteamID herausfinden

Für die Adminliste benötigst Du die SteamID im Format `STEAM_0:x:xxxxxxx`.

> [!TIP]
> Die SteamID eines verbundenen Spielers findest Du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst Du sie über die [SteamID](/tutorials/gameserver/steamid64-find-out) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.

> [!NOTE]
> Statt `STEAM_0:1:12345678` kannst Du auch das Steam3-Format `[U:1:24691357]` eintragen. Beide Schreibweisen funktionieren.

## Admin eintragen

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Datei öffnen**\
   Öffne folgende Datei:

   ```text
   /iosoccer/addons/sourcemod/configs/admins_simple.ini
   ```

3. **Spieler eintragen**\
   Trage pro Zeile einen Admin ein. Der Aufbau einer Zeile sieht so aus:

   ```text
   "<SteamID | !IP | Steam-Name>" "[Immunitätsstufe:]<Flags | @Gruppe>" ["Passwort"]
   ```

   Beispiele:

   ```text
   "STEAM_0:1:16"		"bce"			// generic, kick, unban für diese SteamID, keine Immunität
   "STEAM_0:1:12345678"	"99:z"			// alle Rechte, Immunitätsstufe 99
   "[U:1:24691357]"	"z"			// gleiche Rechte über das Steam3-Format
   "!127.0.0.1"		"5:z"			// alle Rechte für diese IP, Immunitätsstufe 5
   ```

4. **Änderungen übernehmen**\
   Speichere die Datei und gib in der Serverkonsole folgenden Befehl ein:

   ```text
   sm_reloadadmins
   ```

   Alternativ startest Du Deinen Server neu.

> [!NOTE]
> Ein `!` vor dem Eintrag kennzeichnet eine IP-Adresse. Trägst Du stattdessen einen Steam-Namen ein, solltest Du in der dritten Spalte ein Passwort setzen – sonst kann jeder Spieler mit diesem Namen die Rechte übernehmen.

## Rechte-Flags im Überblick

| Flag | Name | Bedeutung |
|------|------|-----------|
| `a` | reservation | Zugriff auf reservierte Slots |
| `b` | generic | Allgemeiner Adminstatus – für jeden Admin erforderlich |
| `c` | kick | Andere Spieler kicken |
| `d` | ban | Andere Spieler bannen |
| `e` | unban | Banns aufheben |
| `f` | slay | Spieler töten oder verletzen |
| `g` | changemap | Map wechseln oder zentrale Spielfunktionen ändern |
| `h` | cvars | Die meisten ConVars ändern |
| `i` | config | Konfigurationsdateien ausführen |
| `j` | chat | Besondere Chat-Rechte |
| `k` | vote | Abstimmungen starten oder erstellen |
| `l` | password | Passwort auf dem Server setzen |
| `m` | rcon | RCON-Befehle nutzen |
| `n` | cheats | `sv_cheats` ändern und Cheat-Befehle nutzen |
| `o` – `t` | custom1 – custom6 | Eigene Gruppen 1 bis 6 |
| `z` | root | Aktiviert alle Flags und ignoriert Immunität |

> [!IMPORTANT]
> Das Flag `b` (generic) ist Pflicht für jeden Admin. Ohne dieses Flag wird ein Eintrag nicht als Admin behandelt. Wer alle Rechte bekommen soll, erhält stattdessen `z`.

## Adminmenü nutzen

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/iosoccer/join-server).

2. **Menü öffnen**\
   Öffne das Adminmenü mit dem Befehl `sm_admin` in der Spielkonsole oder mit `!admin` beziehungsweise `/admin` im Chat.

## Alternative: admins.cfg

Statt der `admins_simple.ini` kannst Du Admins auch im KeyValues-Format eintragen:

```text
/iosoccer/addons/sourcemod/configs/admins.cfg
```

```text
Admins
{
	"Spielername"
	{
		"auth"		"steam"
		"identity"	"STEAM_0:1:12345678"
		"flags"		"abcdef"
	}
}
```

> [!NOTE]
> Beide Dateien werden von SourceMod ausgelesen. Nutze am besten nur eine davon, damit Du den Überblick behältst.

## Ohne Mods: Serverkonsole und RCON

Möchtest Du keine Plugins installieren, bleibt Dir die **Serverkonsole** in der Verwaltung. Dort führst Du alle Serverbefehle direkt aus, ohne im Spiel Admin zu sein – auch die Matchsteuerung mit `sv_restart`, `sv_endmatch`, `sv_startpenalties`, `sv_starttimeout` und `sv_endtimeout`.

Zusätzlich lässt sich RCON nutzen, um dieselben Befehle von außerhalb auszuführen. Das RCON-Passwort bekommt Dein Server bei jedem Start übergeben – Du setzt es deshalb in der Verwaltung:

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Passwort eintragen**\
   Trage im Feld **RCON Passwort** ein langes, einmaliges Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu. Das Passwort wird beim Start übergeben und gilt daher erst nach einem Neustart.

> [!IMPORTANT]
> Ab Werk ist ein Standardpasswort hinterlegt. Ändere es unbedingt, bevor Dein Server öffentlich erreichbar ist. RCON läuft bei IOSoccer über TCP auf derselben Portnummer wie das Spiel – einen eigenen RCON-Port gibt es nicht. Wer Dein RCON-Passwort kennt, hat die volle Kontrolle über Deinen Server. Nutze im Zweifel einfach die eingebaute Konsole in der **Verwaltung**.

### RCON absichern

Diese Werte trägst Du zusätzlich per [SFTP](/tutorials/gameserver/establish-sftp-connection) in die `/iosoccer/cfg/server.cfg` ein. Existiert die Datei noch nicht, lege sie an:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_rcon_maxfailures` | Anzahl fehlgeschlagener Anmeldungen, nach der eine IP gesperrt wird |
| `sv_rcon_minfailures` | Anzahl der Fehlversuche innerhalb von `sv_rcon_minfailuretime`, nach der eine IP gesperrt wird |
| `sv_rcon_minfailuretime` | Zeitraum in Sekunden, über den Fehlversuche mitgezählt werden |
| `sv_rcon_banpenalty` | Dauer der Sperre in Minuten |

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/iosoccer/kick-ban-players).
