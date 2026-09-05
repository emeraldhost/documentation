---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Left 4 Dead Server"
description: "Spieler auf einem Left 4 Dead Server kicken und bannen"
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
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/left-4-dead/add-admin", "gameserver/left-4-dead/add-mods", "gameserver/left-4-dead/create-backup", "gameserver/left-4-dead/join-server"]
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

   > [!TIP]
   > Mit `users` bekommst Du zusätzlich die Benutzerinformationen aller Spieler auf dem Server angezeigt.

## Befehle über die Serverkonsole

| Befehl | Beschreibung |
|--------|-------------|
| `status` | Server- und Spielerinformationen inklusive userid und SteamID anzeigen |
| `users` | Benutzerinformationen der Spieler auf dem Server anzeigen |
| `kick <Spielername>` | Spieler über den Spielernamen vom Server entfernen |
| `kickid <userid\|SteamID> [Grund]` | Spieler über die ID vom Server entfernen |
| `banid <Minuten> <SteamID> [kick]` | Spieler bannen (`0` = dauerhaft) |
| `addip <Minuten> <IP>` | IP-Adresse bannen |
| `removeid <SteamID>` | Bann einer SteamID aufheben |
| `removeip <IP>` | Bann einer IP-Adresse aufheben |
| `listid` | Gebannte SteamIDs anzeigen |
| `listip` | Gebannte IP-Adressen anzeigen |
| `writeid` | SteamID-Banns dauerhaft speichern |
| `writeip` | IP-Banns dauerhaft speichern |
| `changelevel <Mapname>` | Map wechseln |
| `say <Nachricht>` | Nachricht an alle Spieler senden |

### Spieler kicken

```text
kick <Spielername>
```

Statt des Namens kannst Du auch die userid oder die SteamID angeben:

```text
kickid STEAM_0:1:12345678 Grund
```

Ein gekickter Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

### Spieler bannen

```text
banid 60 STEAM_0:1:12345678 kick
```

Die Dauer steht in Minuten vor der SteamID, `0` bannt dauerhaft. Der Zusatz `kick` entfernt den Spieler sofort vom Server – ohne ihn wirkt der Bann erst beim nächsten Verbindungsversuch.

### Banns dauerhaft speichern

> [!IMPORTANT]
> Banns liegen zunächst nur im Arbeitsspeicher des Servers und sind nach einem Neustart wieder verschwunden. Speichere sie deshalb nach jeder Änderung mit `writeid` (SteamID-Banns) beziehungsweise `writeip` (IP-Banns). Die Banns werden dann in die Dateien `/left4dead/cfg/banned_user.cfg` und `/left4dead/cfg/banned_ip.cfg` geschrieben.

> [!NOTE]
> Damit gespeicherte Banns nach einem Neustart wieder gelten, müssen die Dateien beim Serverstart ausgeführt werden. Trage dafür in `/left4dead/cfg/server.cfg` folgende Zeilen ein:
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
   /left4dead/cfg/server.cfg
   ```

3. **Passwort setzen**\
   Trage folgende Zeile ein und wähle ein sicheres Passwort:

   ```text
   rcon_password "dein-passwort"
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> RCON läuft über denselben Port wie das Spiel – einen eigenen RCON-Port gibt es nicht.

> [!IMPORTANT]
> Wer Dein RCON-Passwort kennt, hat die volle Kontrolle über Deinen Server. Gib es nicht weiter und nutze ein eigenes, langes Passwort.

## Befehle über SourceMod

Ist SourceMod installiert, kannst Du Spieler direkt aus dem Spiel heraus verwalten. Wie Du SourceMod einrichtest und Dir Adminrechte gibst, steht unter [Mods hinzufügen](/tutorials/gameserver/left-4-dead/add-mods) und [Admin hinzufügen](/tutorials/gameserver/left-4-dead/add-admin).

| Befehl | Syntax | Benötigtes Flag |
|--------|--------|-----------------|
| `sm_kick` | `<#userid\|Name> [Grund]` | `c` (kick) |
| `sm_ban` | `<#userid\|Name> <Minuten\|0> [Grund]` | `d` (ban) |
| `sm_banip` | `<IP\|#userid\|Name> <Dauer> [Grund]` | `d` (ban) |
| `sm_addban` | `<Dauer> <SteamID> [Grund]` | `m` (rcon) |
| `sm_unban` | `<SteamID\|IP>` | `e` (unban) |
| `sm_who` | `[#userid\|Name]` | `b` (generic) |
| `sm_map` | `<Map>` | `g` (changemap) |

> [!NOTE]
> Bei `sm_ban` und `sm_banip` bedeutet die Dauer `0` einen dauerhaften Bann. Mit `sm_addban` kannst Du auch Spieler bannen, die gerade nicht auf dem Server sind.

> [!TIP]
> SourceMod-Befehle funktionieren im Spielchat auch mit vorangestelltem `!` oder `/`, zum Beispiel `!kick`.

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
