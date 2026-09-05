---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Ground Branch Server"
description: "Spieler auf einem Ground Branch Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/add-mods", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server"]
---

Spieler entfernst Du auf einem Ground Branch Server über das **Adminmenü im Spiel**. Zusätzlich kannst Du in den Konfigurationsdateien festlegen, wie lange Banns standardmäßig gelten, ab wann Teamkiller automatisch gebannt werden und ob Spieler selbst über einen Kick abstimmen dürfen.

> [!NOTE]
> Du benötigst Adminrechte mit der Berechtigung `kick` beziehungsweise `ban`. Wie Du Dir diese gibst, steht unter [Admin hinzufügen](/tutorials/gameserver/ground-branch/add-admin).

## Spieler kicken oder bannen

1. **Als Admin beitreten**\
   Tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/ground-branch/join-server). Ohne Adminrechte stehen Dir die folgenden Funktionen nicht zur Verfügung.

2. **Adminmenü öffnen**\
   Drücke `F8`. Alternativ öffnest Du das ESC-Menü und wählst dort die Admin-Schaltfläche oder gibst in der Konsole (`` ` ``) den Befehl `admin` ein.

3. **Spieler auswählen**\
   Wähle in der Spielerliste den betreffenden Spieler aus.

4. **Aktion wählen**\
   Wähle **Kick**, um den Spieler vom Server zu trennen, oder **Ban**, um ihn auszusperren. In beiden Fällen kannst Du optional einen Grund angeben.

5. **Banndauer bestätigen**\
   Beim Bannen fragt Dich der Server nach der Dauer. Vorbelegt ist der Wert aus der `Ban.ini`, den Du überschreiben kannst. Ein Bann kann befristet oder dauerhaft sein.

> [!NOTE]
> Ein Kick trennt den Spieler nur vom Server – er kann sofort wieder beitreten. Erst ein Bann sperrt ihn für die angegebene Dauer aus.

## Standard-Banndauer festlegen

Wie lange ein Bann standardmäßig gilt, steuerst Du über die `Ban.ini`.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ban.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /GroundBranch/ServerConfig/Ban.ini
   ```

4. **Dauer eintragen**\
   Passe den Wert im Abschnitt `[/Script/RBZooKeeper.ZKBan]` an. Die Angabe erfolgt in **Minuten**:

   ```ini
   [/Script/RBZooKeeper.ZKBan]
   DefaultBanDuration=720
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> **Umrechnung**
>
> | Wert | Entspricht |
> |------|-----------|
> | `60` | 1 Stunde |
> | `720` | 12 Stunden (Standard) |
> | `1440` | 1 Tag |
> | `10080` | 7 Tage |

## Teamkiller automatisch bannen

Ground Branch kann Spieler eigenständig bannen, die zu oft eigene Teammitglieder töten. Die Einstellungen dazu findest Du in der `TeamKill.ini`:

```text
/GroundBranch/ServerConfig/TeamKill.ini
```

```ini
[/Script/RBZooKeeper.ZKTeamKill]
MaxTeamKills=3
BanTime=60
TeamKillExpireTime=30
```

| Wert | Bedeutung |
|------|-----------|
| `MaxTeamKills` | Anzahl der Teamkills, ab der ein Spieler gebannt wird |
| `BanTime` | Dauer des automatischen Banns in Minuten |
| `TeamKillExpireTime` | Zeit in Minuten, nach der ein einzelner Teamkill wieder verfällt |

> [!NOTE]
> Mit den Standardwerten wird ein Spieler also gebannt, wenn er innerhalb von 30 Minuten dreimal ein eigenes Teammitglied tötet. Einen so ausgesprochenen Bann hebst Du wie jeden anderen Bann über den Befehl `unban` wieder auf.

## Abstimmungen der Spieler konfigurieren

Über die `Vote.ini` legst Du fest, worüber Spieler auf Deinem Server abstimmen dürfen – unter anderem über einen Kick.

```text
/GroundBranch/ServerConfig/Vote.ini
```

```ini
[/Script/RBZooKeeper.ZKVote]
VotingCommands=kick
VotingCommands=changemap
VotingCommands=nextmap
VotingCommands=missionsettings
VotingCommands=restartround
```

| Wert | Bedeutung |
|------|-----------|
| `VotingCommands` | Eine Zeile pro erlaubter Abstimmung. Verfügbar sind nur `kick`, `changemap`, `nextmap`, `missionsettings` und `restartround` |
| `VoteDuration` | Dauer einer laufenden Abstimmung in Sekunden |
| `MinPlayers` | Mindestanzahl an Spielern, damit abgestimmt werden darf |
| `VoteSucceededTimeout` | Wartezeit in Sekunden nach einer erfolgreichen Abstimmung |
| `VoteFailedTimeout` | Wartezeit in Sekunden nach einer gescheiterten Abstimmung |
| `MapVoteTimeout` | Wartezeit in Sekunden zwischen Kartenabstimmungen |
| `bAllowVotingOffMapList` | Erlaubt Abstimmungen über Karten außerhalb der Kartenliste |
| `PermittedGameModes` | Spielmodi, in denen abgestimmt werden darf |

> [!WARNING]
> Möchtest Du Vote-Kicks vollständig unterbinden, entferne die Zeile `VotingCommands=kick`. Andernfalls können Spieler sich ohne Adminrechte gegenseitig vom Server werfen.

## Bann wieder aufheben

Ground Branch kennt den Adminbefehl `unban`. Damit entfernst Du einen Spieler anhand seiner eindeutigen Spieler-ID (SteamID64) wieder von der Bannliste. Den Befehl nutzt Du wie die übrigen Adminbefehle über das Adminmenü – siehe [Admin hinzufügen](/tutorials/gameserver/ground-branch/add-admin).

> [!NOTE]
> Die genaue Konsolen-Schreibweise von `unban` ist offiziell nicht dokumentiert. Notiere Dir die SteamID64 des gebannten Spielers, bevor Du ihn sperrst – ohne sie lässt sich der Bann nicht gezielt aufheben.

## Whitelist

Ground Branch kennt eine Whitelist – ist sie aktiv, kommen nur Admins und freigeschaltete Spieler auf den Server. Alle anderen erhalten beim Beitritt den Hinweis, dass der Server eine Whitelist verwendet.

> [!NOTE]
> Die Whitelist verwaltest Du im Adminmenü über den Punkt **Whitelist**. Der Dateiname und das Dateiformat auf dem Server sind nicht offiziell dokumentiert – pflege sie deshalb im Spiel und nicht per SFTP.

## Was Ground Branch nicht bietet

> [!NOTE]
> **Kein RCON**
>
> Ground Branch bietet keine RCON-Schnittstelle. Kick und Bann laufen ausschließlich über das Adminmenü im Spiel.

> [!IMPORTANT]
> Alle Dateien im Ordner `ServerConfig` werden nur beim Serverstart eingelesen. Stoppe Deinen Server, bevor Du sie bearbeitest, und starte ihn danach neu.
