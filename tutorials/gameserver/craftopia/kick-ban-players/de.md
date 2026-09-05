---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Craftopia Server"
description: "Spieler auf einem Craftopia Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/craftopia/add-savegame", "gameserver/craftopia/create-backup", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server"]
---

Spieler entfernst Du auf einem Craftopia Server über die **Konsole in der Verwaltung**. Chat-Befehle im Spiel gibt es dafür nicht.

> [!NOTE]
> **Kein Adminkonzept im Spiel**
>
> Craftopia kennt **keine Adminrechte für Spieler**: Es gibt keine Admin-Datei, keine Admin-Liste und keinen Befehl, mit dem Du einem Spieler im Spiel Rechte gibst. Die gesamte Verwaltung läuft deshalb über die Konsole Deines Servers – und damit über jeden, der Zugriff auf die Verwaltung hat.

## Konsole öffnen

1. **Verwaltung öffnen**\
   Melde Dich in der Verwaltung Deines Servers an.

2. **Konsole aufrufen**\
   Wechsle zur **Konsole**. Dort siehst Du die Ausgaben Deines Servers und kannst Befehle eingeben.

3. **Server muss laufen**\
   Befehle werden nur von einem laufenden Server angenommen. Ist Dein Server gestoppt, starte ihn zuerst.

## Spieler auflisten

Bevor Du jemanden kicken oder bannen kannst, brauchst Du seine **UserID**. Diese liefert Dir folgender Befehl:

```text
list
```

Der Befehl gibt die Spieler mit ihrer UserID aus der Multiplayer-Liste aus.

> [!WARNING]
> Führe `list` immer direkt vor einem `kick` oder `ban` aus und übernimm die UserID genau so, wie sie in der Konsole steht.

## Spieler kicken

```text
kick <UserID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
ban <UserID>
```

Der Spieler wird vom Server geworfen und in die Bannliste eingetragen.

> [!WARNING]
> **Banns gelten für die IP-Adresse**
>
> In der Bannliste von Craftopia stehen **IP-Adressen**, nicht die Spieleraccounts. Daraus folgt:
>
> - Wechselt der Spieler seine IP-Adresse, kommt er wieder auf den Server.
> - Spieler, die sich eine IP-Adresse teilen – etwa im selben Haushalt – werden mitgesperrt.

## Gebannte Spieler anzeigen

```text
banlist
```

Zeigt alle gesperrten IP-Adressen an.

## Bann aufheben

```text
pardon <IP-Adresse>
```

Nimm die IP-Adresse genau so, wie sie Dir `banlist` anzeigt.

> [!TIP]
> **Wenn ein Befehl nicht angenommen wird**
>
> Craftopia befindet sich weiterhin in der Entwicklung, die Schreibweise der Befehle kann sich zwischen Spielversionen ändern. Wird ein Befehl nicht angenommen, prüfe die Ausgabe in der Konsole Deines Servers.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `list` | Spieler inklusive UserID anzeigen |
| `kick <UserID>` | Spieler vom Server trennen |
| `ban <UserID>` | Spieler aussperren (IP-basiert) |
| `banlist` | Gesperrte IP-Adressen anzeigen |
| `pardon <IP-Adresse>` | Bann aufheben |

## Server nicht über die Konsole beenden

> [!IMPORTANT]
> Nutze zum Stoppen und Neustarten immer die **Verwaltung**, nicht die Befehle der Serverkonsole. Nur so wird Dein Server sauber beendet und anschließend korrekt wieder gestartet.

## Keine Whitelist

> [!WARNING]
> Craftopia hat **keine Whitelist-Funktion**. Möchtest Du Deinen Server nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Spieler weiter. Beachte dabei, dass das Passwort in Craftopia eine reine Zahl mit maximal acht Stellen ist.
