---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Minecraft PocketMine Edition Server"
description: "Spieler auf einem Minecraft PocketMine Edition Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame", "gameserver/minecraft-pocketmine/join-server"]
---

Spieler entfernst Du über Befehle – entweder in der Konsole Deines Servers oder im Spiel im Chat. PocketMine-MP unterscheidet dabei zwischen Namens-Banns und IP-Banns.

> [!NOTE]
> Im Spiel benötigst Du Operator-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/minecraft-pocketmine/add-admin). In der Konsole Deines Servers stehen Dir die Befehle immer zur Verfügung.

> [!NOTE]
> Reagiert der Server in der Konsole nicht auf einen Befehl, probiere ihn zusätzlich mit einem führenden `/`.

## Spieler kicken

```text
/kick <Spielername> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Der optionale Grund wird ihm dabei angezeigt.

> [!NOTE]
> `kick` funktioniert nur bei Spielern, die gerade online sind. Der Name muss nicht vollständig sein – PocketMine-MP sucht den Spieler anhand des Namensanfangs.

## Spieler bannen

```text
/ban <Spielername> [Grund]
```

Der Spieler kann sich nicht mehr verbinden. Ist er gerade online, wird er sofort vom Server geworfen.

> [!TIP]
> `ban` funktioniert auch bei Spielern, die gerade **nicht** online sind. Du kannst also jemanden im Voraus sperren, solange Du den Namen exakt kennst.

## IP-Adresse bannen

```text
/ban-ip <IP-Adresse oder Spielername> [Grund]
```

Gibst Du eine IP-Adresse an, wird diese direkt gesperrt. Gibst Du stattdessen den Namen eines Spielers an, der gerade online ist, sperrt der Server dessen aktuelle IP-Adresse.

> [!WARNING]
> Ein IP-Bann trifft alle Spieler hinter derselben Verbindung – zum Beispiel Mitspieler im selben Haushalt. Viele Internetanschlüsse erhalten außerdem regelmäßig eine neue IP-Adresse, sodass ein IP-Bann nicht dauerhaft wirkt.

## Banns anzeigen

```text
/banlist [ips|players]
```

Ohne Zusatz zeigt der Befehl die gebannten Spielernamen an – genau wie mit `players`. Die gebannten IP-Adressen siehst Du nur mit `ips`.

## Bann aufheben

```text
/pardon <Spielername>
```

```text
/pardon-ip <IP-Adresse>
```

> [!NOTE]
> Für beide Befehle gibt es Kurzformen: `/unban <Spielername>` und `/unban-ip <IP-Adresse>` bewirken genau dasselbe.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername> [Grund]` | Trennt einen Spieler vom Server |
| `/ban <Spielername> [Grund]` | Sperrt einen Spielernamen dauerhaft |
| `/ban-ip <IP oder Name> [Grund]` | Sperrt eine IP-Adresse |
| `/pardon <Spielername>` | Hebt den Bann eines Spielernamens auf (auch `/unban`) |
| `/pardon-ip <IP-Adresse>` | Hebt den Bann einer IP-Adresse auf (auch `/unban-ip`) |
| `/banlist [ips\|players]` | Zeigt die gebannten Spielernamen an, mit `ips` die gebannten IP-Adressen |

## Bann-Listen als Datei

Alle Banns liegen im Hauptordner Deines Servers in zwei Textdateien:

| Datei | Inhalt |
|-------|--------|
| `banned-players.txt` | Gebannte Spielernamen |
| `banned-ips.txt` | Gebannte IP-Adressen |

Jede Zeile in `banned-players.txt` ist nach folgendem Muster aufgebaut, getrennt durch einen senkrechten Strich:

```text
Name|Erstellt am|Erstellt von|Läuft ab|Grund
```

> [!NOTE]
> Bei einem dauerhaften Bann steht im Feld „Läuft ab“ der Wert `Forever`. Datumsangaben werden im Format `Jahr-Monat-Tag Stunde:Minute:Sekunde ±Zeitzone` gespeichert.

> [!WARNING]
> Die Bann-Listen werden beim Serverstart eingelesen. Bearbeitest Du die Dateien von Hand, stoppe Deinen Server vorher und starte ihn danach wieder – sonst greifen Deine Änderungen nicht zuverlässig. Im laufenden Betrieb nutzt Du am besten immer die Befehle.

## Whitelist statt Bann-Liste

Möchtest Du Deinen Server nur für bestimmte Spieler öffnen, statt einzelne Spieler auszusperren, nutze die Whitelist.

1. **Whitelist aktivieren**\
   Gib folgenden Befehl ein:

   ```text
   /whitelist on
   ```

2. **Spieler freischalten**\
   Trage jeden erlaubten Spieler einzeln ein:

   ```text
   /whitelist add <Spielername>
   ```

3. **Liste prüfen**\
   Lass Dir alle freigeschalteten Spieler anzeigen:

   ```text
   /whitelist list
   ```

| Befehl | Beschreibung |
|--------|-------------|
| `/whitelist on` | Aktiviert die Whitelist |
| `/whitelist off` | Deaktiviert die Whitelist |
| `/whitelist add <Spielername>` | Fügt einen Spieler hinzu |
| `/whitelist remove <Spielername>` | Entfernt einen Spieler |
| `/whitelist list` | Zeigt alle freigeschalteten Spieler an |
| `/whitelist reload` | Lädt die Whitelist neu ein |

> [!NOTE]
> Die freigeschalteten Spieler stehen in der Datei `white-list.txt` im Hauptordner Deines Servers. Ob die Whitelist aktiv ist, steuert zusätzlich der Eintrag `white-list` in der Datei `server.properties`.
