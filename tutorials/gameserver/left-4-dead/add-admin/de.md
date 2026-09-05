---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Left 4 Dead Server hinzu"
description: "Admin auf einem Left 4 Dead Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["left-4-dead"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/left-4-dead/add-mods", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/join-server", "gameserver/left-4-dead/kick-ban-players"]
---

Left 4 Dead bringt von Haus aus **kein Adminsystem** mit. Adminrechte im Spiel gibt es ausschließlich über **SourceMod**.

> [!WARNING]
> **Voraussetzung**
>
> Metamod:Source und SourceMod müssen auf Deinem Server installiert sein. Wie das geht, steht unter [Mods hinzufügen](/tutorials/gameserver/left-4-dead/add-mods).

## SteamID herausfinden

Für die Adminliste benötigst Du die SteamID im Format `STEAM_0:x:xxxxxxx`.

> [!TIP]
> Die SteamID eines verbundenen Spielers findest Du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst Du sie über die [SteamID](/tutorials/gameserver/steamid64-find-out) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.

## Admin eintragen

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Datei öffnen**\
   Öffne folgende Datei:

   ```text
   /left4dead/addons/sourcemod/configs/admins_simple.ini
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
   "!127.0.0.1"		"5:z"			// alle Rechte für diese IP, Immunitätsstufe 5
   "Spielername"		"abc"	"Passwort"	// Rechte über den Steam-Namen, durch Passwort abgesichert
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
| `h` | cvar | Die meisten ConVars ändern |
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
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/left-4-dead/join-server).

2. **Menü öffnen**\
   Öffne das Adminmenü mit dem Befehl `sm_admin` in der Spielkonsole oder mit `!admin` beziehungsweise `/admin` im Chat.

## Alternative: admins.cfg

Statt der `admins_simple.ini` kannst Du Admins auch im KeyValues-Format eintragen:

```text
/left4dead/addons/sourcemod/configs/admins.cfg
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

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/left-4-dead/kick-ban-players).
