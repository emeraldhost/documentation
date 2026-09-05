---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Minecraft Endstone Edition Server"
description: "Spieler auf einem Minecraft Endstone Edition Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame", "gameserver/minecraft-endstone-edition/join-server"]
---

Spieler entfernst Du über Befehle – entweder in der Konsole Deines Servers oder im Spiel im Chat. Endstone erweitert den Bedrock Dedicated Server dabei um ein vollwertiges Bann-System mit Namens- und IP-Banns.

> [!NOTE]
> Im Spiel benötigst Du Operator-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/minecraft-endstone-edition/add-admin). In der Konsole Deines Servers stehen Dir die Befehle immer zur Verfügung.

> [!NOTE]
> In der Konsole Deines Servers gibst Du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst Du sie mit `/`.

## Spieler kicken

```text
/kick <Spielername> [Grund]
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten. Der optionale Grund wird ihm dabei angezeigt.

> [!NOTE]
> `kick` funktioniert nur bei Spielern, die gerade online sind.

## Spieler bannen

```text
/ban <Spielername> [Grund]
```

Der Spieler kann sich nicht mehr verbinden. Ist er gerade online, wird er sofort vom Server geworfen.

## IP-Adresse bannen

```text
/ban-ip <IP-Adresse> [Grund]
```

Statt einer IP-Adresse kannst Du auch den Namen eines Spielers angeben – dann sperrt der Server dessen aktuelle IP-Adresse.

> [!WARNING]
> Ein IP-Bann trifft alle Spieler hinter derselben Verbindung – zum Beispiel Mitspieler im selben Haushalt. Viele Internetanschlüsse erhalten außerdem regelmäßig eine neue IP-Adresse, sodass ein IP-Bann nicht dauerhaft wirkt.

## Banns anzeigen

```text
/banlist [players|ips]
```

Ohne Zusatz zeigt der Befehl alle Banns an. Mit `players` siehst Du nur die gebannten Spieler, mit `ips` nur die gebannten IP-Adressen.

## Bann aufheben

```text
/pardon <Spielername>
```

```text
/pardon-ip <IP-Adresse>
```

> [!TIP]
> Für beide Befehle gibt es Kurzformen: `/unban <Spielername>` und `/unban-ip <IP-Adresse>` bewirken genau dasselbe.

> [!NOTE]
> Ein Bann lässt sich damit im laufenden Betrieb aufheben. Du musst Deinen Server dafür weder stoppen noch eine Datei von Hand bearbeiten.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername> [Grund]` | Trennt einen Spieler vom Server |
| `/ban <Spielername> [Grund]` | Sperrt einen Spieler dauerhaft |
| `/ban-ip <IP oder Name> [Grund]` | Sperrt eine IP-Adresse |
| `/banlist [players\|ips]` | Zeigt alle Banns des Servers an |
| `/pardon <Spielername>` | Hebt den Bann eines Spielers auf (auch `/unban`) |
| `/pardon-ip <IP-Adresse>` | Hebt den Bann einer IP-Adresse auf (auch `/unban-ip`) |

## Bann-Listen als Datei

Alle Banns liegen im Hauptordner Deines Servers in zwei Dateien:

| Datei | Inhalt |
|-------|--------|
| `banned-players.json` | Gebannte Spieler |
| `banned-ips.json` | Gebannte IP-Adressen |

Beide Dateien sind JSON-Listen. Ein Eintrag enthält unter anderem folgende Felder:

| Feld | Bedeutung |
|------|-----------|
| `name` / `uuid` / `xuid` | Der gesperrte Spieler beziehungsweise seine Kennungen – nur in `banned-players.json` |
| `ip` | Die gesperrte IP-Adresse – nur in `banned-ips.json` |
| `created` | Zeitpunkt, zu dem der Bann gesetzt wurde |
| `source` | Wer den Bann gesetzt hat |
| `expires` | Ablaufzeitpunkt – bei einem dauerhaften Bann steht hier `forever` |
| `reason` | Der angegebene Grund |

> [!NOTE]
> Abgelaufene Banns entfernt der Server automatisch aus der Liste, sobald er sie prüft. Du musst also nichts von Hand aufräumen.

> [!WARNING]
> Bearbeitest Du die Dateien von Hand, stoppe Deinen Server vorher und starte ihn danach wieder – sonst greifen Deine Änderungen nicht zuverlässig und werden unter Umständen überschrieben. Im laufenden Betrieb nutzt Du am besten immer die Befehle.

## Allowlist statt Bann-Liste

Möchtest Du Deinen Server nur für bestimmte Spieler öffnen, statt einzelne Spieler auszusperren, nutze die Allowlist des Bedrock-Servers. Sie liegt als Datei `allowlist.json` im Hauptordner Deines Servers.

> [!TIP]
> Wie Du die Allowlist einrichtest, erfährst Du unter [Allowlist aktivieren](/tutorials/gameserver/minecraft-bedrock/enable-allowlist).
