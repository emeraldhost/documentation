---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Mindustry Server"
description: "Spieler auf einem Mindustry Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame", "gameserver/mindustry/join-server"]
---

Spieler entfernst Du auf einem Mindustry Server über die **Konsole** Deines Servers. Eine Datei zum Bearbeiten gibt es nicht – alle Banns liegen binär in `config/settings.bin`.

> [!NOTE]
> In der Konsole Deiner Verwaltung stehen Dir alle Befehle ohne zusätzliche Rechte zur Verfügung. Als [Admin](/tutorials/gameserver/mindustry/add-admin) kannst Du Spieler zusätzlich direkt im Spiel über die Spielerliste kicken und bannen.

## Spieler kicken

```text
kick <Spielername>
```

Der Spieler wird sofort vom Server getrennt und im Chat erscheint ein Hinweis für alle. Nach einer kurzen Sperre von rund 30 Sekunden kann er wieder beitreten.

> [!WARNING]
> `kick` findet nur Spieler, die gerade **online** sind, und der Name muss exakt stimmen. Eine Zeitangabe gibt es nicht – einen Spieler „für 30 Minuten“ zu kicken, ist in Mindustry nicht möglich.

## Spieler bannen

Beim Bannen gibst Du immer zuerst den Typ an:

```text
ban <id/name/ip> <Wert>
```

| Variante | Wann sinnvoll |
|----------|---------------|
| `ban id <UUID>` | Der zuverlässigste Bann. Funktioniert auch, wenn der Spieler offline ist. |
| `ban name <Spielername>` | Nur für Spieler, die gerade online sind. |
| `ban ip <IP-Adresse>` | Sperrt eine komplette IP-Adresse. |

> [!TIP]
> **Beispiel**
>
> ```text
> ban id AbCdEfGhIjKlMnOpQrSt==
> ```

Der Server bestätigt mit `Banned.` und wirft den Spieler direkt vom Server, falls er noch verbunden ist.

> [!NOTE]
> Die UUID eines Spielers liest Du mit `players` (alle verbundenen Spieler) oder `info <Name/UUID/IP>` aus. Gibst Du einen anderen Typ als `id`, `name` oder `ip` an, meldet der Server `Invalid type.`

## Banns anzeigen

```text
bans
```

Zeigt alle gesperrten UUIDs mit dem letzten bekannten Namen sowie alle gesperrten IP-Adressen an.

## Bann aufheben

```text
unban <UUID/IP-Adresse>
```

Der Server bestätigt mit `Unbanned player: <Wert>`.

> [!TIP]
> Hebst Du einen Bann über die UUID auf, entfernt der Server automatisch auch die dazugehörigen IP-Adressen aus der Sperrliste.

## Votekick rückgängig machen

Haben Mitspieler jemanden per Votekick entfernt, hilft `unban` nicht – dafür gibt es einen eigenen Befehl:

```text
pardon <UUID>
```

Damit darf der Spieler wieder beitreten.

> [!NOTE]
> Das Votekick-System ist standardmäßig aktiv. Du kannst es abschalten:
>
> ```text
> config enableVotekick false
> ```

## Weitere Sperrmöglichkeiten

| Befehl | Beschreibung |
|--------|-------------|
| `name-ban [add/remove/clear] [Ausdruck]` | Sperrt Spielernamen anhand eines regulären Ausdrucks, Groß- und Kleinschreibung wird ignoriert |
| `subnet-ban [add/remove] [Adresse]` | Sperrt einen ganzen IP-Bereich anhand des Adressanfangs |
| `dos-ban [add/remove] [IP]` | Sperrt eine IP-Adresse wegen Verbindungsflut |

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `players` | Alle verbundenen Spieler mit UUID und IP anzeigen |
| `kick <Spielername>` | Spieler vom Server trennen |
| `ban id <UUID>` | Spieler dauerhaft über seine UUID sperren |
| `ban name <Spielername>` | Online-Spieler über den Namen sperren |
| `ban ip <IP>` | IP-Adresse sperren |
| `bans` | Alle Banns anzeigen |
| `unban <UUID/IP>` | Bann aufheben |
| `pardon <UUID>` | Votekick aufheben |

> [!IMPORTANT]
> Banns und Whitelist liegen zusammen mit allen Einstellungen in der Binärdatei `config/settings.bin`. Verwalte sie ausschließlich über die Konsolenbefehle – öffnest Du die Datei in einem Texteditor, zerstörst Du sie.

> [!TIP]
> **Server nur für bestimmte Spieler öffnen**
>
> Statt einzelne Spieler zu sperren, kannst Du Deinen Server auch komplett schließen und nur ausgewählte Spieler freischalten. Wie das geht, steht unter [Admin hinzufügen](/tutorials/gameserver/mindustry/add-admin) im Abschnitt zur Whitelist.
