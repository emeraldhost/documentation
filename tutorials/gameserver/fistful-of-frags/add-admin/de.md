---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Fistful of Frags Server hinzu"
description: "Admin auf einem Fistful of Frags Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["fistful-of-frags"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/fistful-of-frags/add-mods", "gameserver/fistful-of-frags/create-backup", "gameserver/fistful-of-frags/join-server", "gameserver/fistful-of-frags/kick-ban-players"]
---

Fistful of Frags bringt von Haus aus **kein Adminsystem** mit. Es gibt keine Adminliste im Spiel und keine Servereinstellung, mit der Du einen Spieler zum Admin machst. Verwaltet wird der Server über die **Serverkonsole** beziehungsweise **RCON** – Adminrechte direkt im Spiel gibt es ausschließlich über **SourceMod**.

> [!WARNING]
> **Voraussetzung**
>
> Metamod:Source und SourceMod müssen auf Deinem Server installiert sein. Wie das geht, steht unter [Mods hinzufügen](/tutorials/gameserver/fistful-of-frags/add-mods).

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
   /fof/addons/sourcemod/configs/admins_simple.ini
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
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/fistful-of-frags/join-server).

2. **Menü öffnen**\
   Öffne das Adminmenü mit dem Befehl `sm_admin` in der Spielkonsole oder mit `!admin` beziehungsweise `/admin` im Chat.

## Alternative: admins.cfg

Statt der `admins_simple.ini` kannst Du Admins auch im KeyValues-Format eintragen:

```text
/fof/addons/sourcemod/configs/admins.cfg
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

Möchtest Du keine Plugins installieren, bleibt Dir die **Serverkonsole** in der Verwaltung. Dort führst Du alle Serverbefehle direkt aus, ohne im Spiel Admin zu sein.

Zusätzlich lässt sich RCON aktivieren, um dieselben Befehle von außerhalb auszuführen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /fof/cfg/server.cfg
   ```

3. **Passwort setzen**\
   Trage folgende Zeile ein und wähle ein sicheres Passwort:

   ```text
   rcon_password "dein-passwort"
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!IMPORTANT]
> RCON läuft bei Fistful of Frags über TCP auf derselben Portnummer wie das Spiel – einen eigenen RCON-Port gibt es nicht. Wer Dein RCON-Passwort kennt, hat die volle Kontrolle über Deinen Server. Nutze im Zweifel die eingebaute Konsole in der **Verwaltung** und vergib ein langes, einmaliges Passwort.

### RCON absichern

Diese Werte trägst Du zusätzlich in die `/fof/cfg/server.cfg` ein:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_rcon_maxfailures` | Anzahl fehlgeschlagener Anmeldungen, nach der eine IP gesperrt wird |
| `sv_rcon_minfailures` | Anzahl der Fehlversuche innerhalb von `sv_rcon_minfailuretime`, nach der eine IP gesperrt wird |
| `sv_rcon_banpenalty` | Dauer der Sperre in Minuten |
| `sv_rcon_whitelist_address` | IP-Adresse, die niemals wegen Fehlversuchen gesperrt wird |

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/fistful-of-frags/kick-ban-players).
