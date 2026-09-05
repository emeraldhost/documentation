---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Garry's Mod Server"
description: "Spieler auf einem Garry's Mod Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/garrys-mod/add-admin", "gameserver/garrys-mod/add-mods", "gameserver/garrys-mod/create-backup", "gameserver/garrys-mod/join-server"]
---

Du kannst Spieler über die Serverkonsole in der Verwaltung kicken und bannen. Garry's Mod nutzt dafür die Standardbefehle der Source Engine.

## Spieler anzeigen

1. **Serverkonsole öffnen**\
   Öffne die Konsole Deines Servers über die Verwaltung.

2. **Spielerliste abrufen**\
   Gib folgenden Befehl ein:

   ```text
   status
   ```

   Die Ausgabe zeigt Dir für jeden verbundenen Spieler die **userid**, die SteamID im Format `STEAM_0:x:xxxxxxx` und die IP-Adresse. Diese Werte brauchst Du für die folgenden Befehle.

## Spieler kicken

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

```text
kick <Name>
```

```text
kickid <userid> Grund
```

Statt der `userid` kannst Du auch die SteamID angeben:

```text
kickid STEAM_0:1:12345678 Grund
```

## Spieler bannen

```text
banid <Minuten> <userid> kick
```

Auch hier kannst Du statt der `userid` die SteamID verwenden:

```text
banid 0 STEAM_0:1:12345678 kick
```

> [!NOTE]
> Setze die Minuten auf `0`, um den Spieler dauerhaft zu bannen. Der Zusatz `kick` sorgt dafür, dass der Spieler sofort vom Server entfernt wird – ohne ihn wirkt der Ban erst beim nächsten Verbindungsversuch.

## IP-Adresse bannen

```text
banip <Minuten> <IP-Adresse>
```

> [!NOTE]
> Der Befehl `addip <Minuten> <IP-Adresse>` bewirkt genau dasselbe wie `banip` und ist nur ein zweiter Name für dieselbe Funktion.

## Bans dauerhaft speichern

> [!IMPORTANT]
> Bans liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung ab.

1. **SteamID-Bans speichern**\
   Gib in der Serverkonsole ein:

   ```text
   writeid
   ```

   Die Bans werden in die Datei `/garrysmod/cfg/banned_user.cfg` geschrieben.

2. **IP-Bans speichern**\
   Gib in der Serverkonsole ein:

   ```text
   writeip
   ```

   Die Bans werden in die Datei `/garrysmod/cfg/banned_ip.cfg` geschrieben.

> [!NOTE]
> Damit die gespeicherten Bans nach einem Neustart wieder gelten, müssen beide Dateien beim Serverstart ausgeführt werden. In der mitgelieferten `/garrysmod/cfg/server.cfg` stehen dafür bereits diese beiden Zeilen – lösche sie nicht:
>
> ```text
> exec banned_ip.cfg
> exec banned_user.cfg
> ```

> [!WARNING]
> Bearbeite die Bannlisten möglichst nicht von Hand, während der Server läuft – `writeid` und `writeip` überschreiben die Dateien vollständig mit dem aktuellen Stand aus dem Arbeitsspeicher.

## Spieler entbannen

```text
removeid STEAM_0:1:12345678
```

```text
removeip <IP-Adresse>
```

Führe anschließend erneut `writeid` bzw. `writeip` aus, damit die Änderung dauerhaft gespeichert wird.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Alle verbundenen Spieler mit userid, SteamID und IP anzeigen |
| `kick <Name>` | Spieler über den Spielernamen kicken |
| `kickid <userid\|SteamID> [Grund]` | Spieler über die ID kicken |
| `banid <Minuten> <userid\|SteamID> [kick]` | Spieler bannen (`0` = dauerhaft) |
| `banip <Minuten> <IP>` | IP-Adresse bannen |
| `addip <Minuten> <IP>` | Identisch zu `banip` |
| `removeid <SteamID>` | Ban einer SteamID aufheben |
| `removeip <IP>` | Ban einer IP-Adresse aufheben |
| `writeid` | SteamID-Bans dauerhaft speichern |
| `writeip` | IP-Bans dauerhaft speichern |
