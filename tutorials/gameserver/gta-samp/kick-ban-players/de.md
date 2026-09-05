---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem GTA San Andreas Server"
description: "Spieler auf einem GTA San Andreas Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["gta-samp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/gta-samp/add-admin", "gameserver/gta-samp/add-mods", "gameserver/gta-samp/create-backup", "gameserver/gta-samp/join-server"]
---

Spieler entfernst Du über **RCON** – entweder im Spiel per Chat oder über die externe Remote Console.

> [!NOTE]
> Du musst dafür als RCON-Admin angemeldet sein. Siehe [Admin hinzufügen](/tutorials/gameserver/gta-samp/add-admin).

## Spieler-ID ermitteln

Kick und Ban arbeiten mit der **Spieler-ID**, nicht mit dem Namen.

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **Spielerliste abrufen**\
   Lass Dir alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping anzeigen:

   ```text
   /rcon players
   ```

3. **ID notieren**\
   Notiere Dir die ID des Spielers – und bei einem geplanten Ban zusätzlich seine IP-Adresse.

> [!IMPORTANT]
> Die Spieler-ID ist nur ein temporärer Slot. Verlässt ein Spieler den Server, kann dieselbe ID sofort einem anderen Spieler zugewiesen werden. Frage die Liste deshalb direkt vor dem Kick oder Ban erneut ab, sonst erwischst Du den Falschen.

## Spieler kicken

```text
/rcon kick 3
```

Der Spieler wird vom Server getrennt und kann sofort wieder beitreten.

## Spieler bannen

```text
/rcon ban 3
```

Der Spieler wird vom Server geworfen und ausgesperrt.

> [!WARNING]
> Der Ban wird über die **IP-Adresse** ausgesprochen, auch wenn Du eine Spieler-ID angibst. Einen Ban auf den Spielernamen oder einen Account gibt es nicht. Bei wechselnden IP-Adressen kann ein gebannter Spieler daher zurückkehren – umgekehrt sperrst Du bei geteilten Anschlüssen unter Umständen mehrere Personen aus.

## IP-Adresse direkt bannen

```text
/rcon banip 123.45.67.89
```

Damit sperrst Du eine IP-Adresse aus, auch wenn der Spieler gerade nicht verbunden ist. Platzhalter sind erlaubt, sodass sich ganze Bereiche sperren lassen:

```text
/rcon banip 123.45.67.*
```

## Bann aufheben

```text
/rcon unbanip 123.45.67.89
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `/rcon players` | Alle verbundenen Spieler mit ID, Name, IP-Adresse und Ping anzeigen |
| `/rcon kick <ID>` | Spieler vom Server trennen |
| `/rcon ban <ID>` | Spieler aussperren (wirkt über seine IP-Adresse) |
| `/rcon banip <IP>` | IP-Adresse aussperren, Platzhalter erlaubt |
| `/rcon unbanip <IP>` | Bann für eine IP-Adresse aufheben |
| `/rcon reloadbans` | Bann-Liste neu einlesen |

## Bann-Liste per SFTP bearbeiten

Alle Banns landen in einer Datei im Hauptverzeichnis Deines Servers. Welche es ist, hängt von Deiner Server-Variante ab:

| Server | Datei |
|--------|-------|
| **open.mp** | `bans.json` |
| **SA-MP** | `samp.ban` |

Die Datei enthält unter anderem die gesperrte IP-Adresse sowie Datum, Uhrzeit und den Namen beziehungsweise Grund des Banns.

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Datei bearbeiten**\
   Öffne die Bann-Datei im Hauptverzeichnis und entferne oder ergänze die gewünschten Einträge.

3. **Liste neu einlesen**\
   Führe anschließend im Spiel folgenden Befehl aus:

   ```text
   /rcon reloadbans
   ```

> [!WARNING]
> Nach einer manuellen Änderung an der Bann-Datei ist `reloadbans` zwingend nötig. Ohne diesen Befehl arbeitet der laufende Server weiter mit der alten Liste und überschreibt Deine Änderungen unter Umständen wieder.

> [!NOTE]
> Ob eine bestehende `samp.ban` beim Wechsel von SA-MP auf open.mp automatisch in die `bans.json` übernommen wird, ist nicht dokumentiert. Prüfe Deine Bann-Liste nach einem Wechsel und trage fehlende Einträge über `/rcon banip` erneut ein.
