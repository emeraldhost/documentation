---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Operation Harsh Doorstop Server"
description: "Spieler auf einem Operation Harsh Doorstop Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server"]
---

Spieler entfernst Du entweder direkt aus dem Spiel heraus über die Ingame-Konsole oder per RCON. Dauerhafte Banns landen in der Datei `Bans.cfg`, die Du per SFTP bearbeiten kannst.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/operation-harsh-doorstop/add-admin).

## Befehle im Spiel nutzen

1. **Konsole öffnen**\
   Drücke im Spiel die Taste `~`, um die Ingame-Konsole zu öffnen.

2. **Spielerliste abrufen**\
   Lass Dir zuerst alle verbundenen Spieler mit Name, ID-Nummer und SteamID64 anzeigen:

   ```text
   admin status
   ```

3. **Befehl ausführen**\
   Führe den gewünschten Befehl mit vorangestelltem `admin` aus, zum Beispiel:

   ```text
   admin kick Spielername Regelverstoß
   ```

> [!WARNING]
> Jeder Adminbefehl braucht in der Ingame-Konsole das Präfix `admin`. Über einen RCON-Client gibst Du dieselben Befehle **ohne** dieses Präfix ein.

## Spieler kicken

```text
admin kick <Name> [Grund]
```

```text
admin kickid <ID#> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Die ID-Nummer stammt aus der Ausgabe von `admin status`.

## Spieler bannen

```text
admin ban <Name> [Grund] [Dauer]
```

```text
admin banid <ID#> [Grund] [Dauer]
```

Die **Dauer** gibst Du in **Minuten** an. Der Wert `0` beziehungsweise eine weggelassene Dauer bedeutet einen dauerhaften Bann.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `admin status` | Alle Spieler inklusive ID-Nummer und SteamID64 anzeigen |
| `admin kick <Name> [Grund]` | Spieler über seinen Namen vom Server trennen |
| `admin kickid <ID#> [Grund]` | Spieler über seine ID-Nummer vom Server trennen |
| `admin ban <Name> [Grund] [Dauer]` | Spieler über seinen Namen aussperren |
| `admin banid <ID#> [Grund] [Dauer]` | Spieler über seine ID-Nummer aussperren |

## Bann aufheben

Gebannte Spieler stehen in der Datei `Bans.cfg`. Ein Bann wird aufgehoben, indem Du die entsprechende Zeile löschst.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Bans.cfg öffnen**\
   Öffne folgende Datei:

   ```text
   /HarshDoorstop/Saved/Config/LinuxServer/Bans.cfg
   ```

4. **Zeile löschen**\
   Jede Zeile enthält eine SteamID64, gefolgt von einem Doppelpunkt und einer Zahl:

   ```text
   76561198012345678:0
   ```

   Lösche die komplette Zeile des Spielers, den Du entbannen möchtest.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!TIP]
> **Ohne Neustart entbannen**
>
> Du kannst Dir den Neustart sparen: Lösche die Zeile in der `Bans.cfg` und sende anschließend per RCON den Befehl `RELOADSERVERCONFIG`. Der Server liest `Bans.cfg`, `Admins.cfg` und die übrigen Konfigurationsdateien dann direkt neu von der Festplatte ein.

> [!NOTE]
> Auch die `Bans.cfg` wird nicht mitgeliefert. Sie entsteht, sobald der erste Bann ausgesprochen wird – Du kannst sie aber auch selbst im Ordner `LinuxServer` anlegen und SteamID64s im Format `76561198012345678:0` eintragen.

## Befehle per RCON senden

Statt in der Ingame-Konsole kannst Du dieselben Befehle auch über einen externen RCON-Client senden – dann ohne das Präfix `admin`, also zum Beispiel `status`, `kick`, `kickid`, `ban` und `banid`.

> [!IMPORTANT]
> RCON-Port und RCON-Passwort Deines Servers findest Du in der **Verwaltung**. Gib beides niemals an Spieler weiter – wer den Zugang hat, kann Deinen Server vollständig fernsteuern.
