---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Counter-Strike Global Offensive Server"
description: "Spieler auf einem Counter-Strike Global Offensive Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["counter-strike-global-offensive"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/counter-strike-global-offensive/add-admin", "gameserver/counter-strike-global-offensive/add-mods", "gameserver/counter-strike-global-offensive/create-backup", "gameserver/counter-strike-global-offensive/join-server"]
---

Spieler entfernst Du entweder über die **Serverkonsole** in der Verwaltung oder – falls SourceMod installiert ist – direkt im Spiel über die **SourceMod-Befehle**.

## Spieler anzeigen

1. **Serverkonsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

2. **Spielerliste abrufen**\
   Gib folgenden Befehl ein:

   ```text
   status
   ```

   Die Ausgabe zeigt Dir für jeden verbundenen Spieler die **userid** und die **SteamID**. Diese Werte brauchst Du für die folgenden Befehle.

## Befehle über die Serverkonsole

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Server- und Spielerinformationen inklusive userid und SteamID anzeigen |
| `kick <Spielername>` | Spieler über den Spielernamen vom Server entfernen |
| `kickid <userid> <Nachricht>` | Spieler über die userid vom Server entfernen |
| `banid <Minuten> <userid>` | Spieler bannen (`0` = dauerhaft) |
| `addip <Minuten> <IP>` | IP-Adresse bannen (`0` = dauerhaft) |
| `removeid <SteamID>` | Bann einer SteamID aufheben |
| `removeip <IP>` | Bann einer IP-Adresse aufheben |
| `writeid` | Dauerhafte SteamID-Banns in `banned_user.cfg` speichern |
| `writeip` | Dauerhafte IP-Banns in `banned_ip.cfg` speichern |
| `changelevel <Mapname>` | Map wechseln |

### Spieler kicken

```text
kick <Spielername>
```

Statt des Namens kannst Du auch die userid aus der `status`-Ausgabe angeben und eine Nachricht mitgeben:

```text
kickid 12 Regelverstoß
```

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

> [!WARNING]
> `kickid` und `banid` erwarten die **userid** aus der `status`-Ausgabe, nicht die SteamID. Die userid vergibt der Server pro Verbindung neu – rufe deshalb kurz vor dem Befehl noch einmal `status` auf.

### Spieler bannen

```text
banid 60 12
```

Die Dauer steht in Minuten vor der userid, `0` bannt dauerhaft. Eine IP-Adresse sperrst Du stattdessen mit `addip`:

```text
addip 0 123.45.67.89
```

### Banns dauerhaft speichern

> [!IMPORTANT]
> Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/csgo/cfg/banned_user.cfg` und `/csgo/cfg/banned_ip.cfg` geschrieben.

> [!NOTE]
> In die Dateien geschrieben werden ausschließlich dauerhafte Banns, also Einträge mit der Dauer `0`. Zeitlich begrenzte Banns bleiben nur bis zum nächsten Neustart bestehen.

> [!NOTE]
> Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür in `/csgo/cfg/server.cfg` folgende Zeilen ein:
>
> ```text
> exec banned_ip.cfg
> exec banned_user.cfg
> ```

## RCON aktivieren

Über RCON führst Du dieselben Befehle auch von außerhalb der Verwaltung aus.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /csgo/cfg/server.cfg
   ```

3. **Passwort setzen**\
   Trage folgende Zeile ein und wähle ein sicheres Passwort:

   ```text
   rcon_password "dein-passwort"
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> RCON läuft über denselben Port wie das Spiel – einen eigenen RCON-Port gibt es nicht. Befehle setzt Du anschließend über `rcon <Befehl>` ab.

> [!TIP]
> Möchtest Du RCON wieder abschalten, setzt Du das Passwort auf einen leeren Wert:
>
> ```text
> rcon_password ""
> ```

> [!IMPORTANT]
> Wer Dein RCON-Passwort kennt, hat die volle Kontrolle über Deinen Server. Gib es nicht weiter und nutze ein eigenes, langes Passwort.

## Befehle über SourceMod

Ist SourceMod installiert, kannst Du Spieler direkt aus dem Spiel heraus verwalten. Wie Du SourceMod einrichtest und Dir Adminrechte gibst, steht unter [Mods hinzufügen](/tutorials/gameserver/counter-strike-global-offensive/add-mods) und [Admin hinzufügen](/tutorials/gameserver/counter-strike-global-offensive/add-admin).

| Befehl | Syntax | Benötigtes Flag |
|--------|--------|-----------------|
| `sm_kick` | `<#userid\|Name> [Grund]` | `c` (kick) |
| `sm_ban` | `<#userid\|Name> <Minuten\|0> [Grund]` | `d` (ban) |
| `sm_banip` | `<IP\|#userid\|Name> <Dauer> [Grund]` | `d` (ban) |
| `sm_addban` | `<Dauer> <SteamID> [Grund]` | `m` (rcon) |
| `sm_unban` | `<SteamID\|IP>` | `e` (unban) |
| `sm_who` | `[#userid\|Name]` | `b` (generic) |
| `sm_slay` | `<Ziel>` | `f` (slay) |
| `sm_map` | `<Map>` | `g` (changemap) |
| `sm_rcon` | `<Befehl>` | `m` (rcon) |

> [!NOTE]
> Bei `sm_ban` und `sm_banip` bedeutet die Dauer `0` einen dauerhaften Bann. Mit `sm_addban` kannst Du auch Spieler bannen, die gerade nicht auf dem Server sind. Alle Befehle funktionieren sowohl in der Spielkonsole als auch im Chat – dort schreibst Du statt `sm_kick` einfach `!kick` oder `/kick`.

### Beispiele

```text
sm_kick "Spielername" Regelverstoß
```

```text
sm_ban #12 60 Regelverstoß
```

```text
sm_addban 0 STEAM_0:1:12345678 Regelverstoß
```

## Bann aufheben

Über die Serverkonsole:

```text
removeid STEAM_0:1:12345678
```

```text
removeip 123.45.67.89
```

Führe anschließend erneut `writeid` beziehungsweise `writeip` aus, damit die Änderung dauerhaft gespeichert wird.

Mit SourceMod:

```text
sm_unban STEAM_0:1:12345678
```

```text
sm_unban 123.45.67.89
```

> [!NOTE]
> Alternativ stoppst Du Deinen Server und löschst die betreffende Zeile per [SFTP](/tutorials/gameserver/establish-sftp-connection) aus `/csgo/cfg/banned_user.cfg` beziehungsweise `/csgo/cfg/banned_ip.cfg`.
