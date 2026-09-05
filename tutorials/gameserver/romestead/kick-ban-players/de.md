---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Romestead Server"
description: "Spieler auf einem Romestead Server kicken und bannen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 4
related: ["gameserver/romestead/create-backup", "gameserver/romestead/download-savegame", "gameserver/romestead/join-server"]
---

Spieler entfernst Du auf einem Romestead Server über die **Konsole in der Verwaltung**. Die Befehle arbeiten dabei mit der **IP-Adresse** des Spielers – nicht mit dem Spielernamen und nicht mit der SteamID64.

> [!NOTE]
> Romestead kennt kein Admin- oder Operator-System. Es gibt weder eine Adminliste noch Adminrechte im Spiel: Kicken und Bannen kann, wer Zugriff auf die Konsole in der Verwaltung hat.

> [!WARNING]
> Die Konsolenbefehle stehen erst zur Verfügung, sobald Dein Server die Welt vollständig geladen hat. Direkt nach dem Start ignoriert der Server Deine Eingaben noch.

## Spieler kicken

Öffne die **Konsole** in der Verwaltung und gib ein:

```text
kick <IP-Adresse>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
ban <IP-Adresse>
```

Der Spieler wird vom Server getrennt und kann sich nicht mehr verbinden, solange der Bann aktiv ist.

> [!CAUTION]
> **Banns überleben keinen Neustart**
>
> Banns gelten nur bis zum nächsten Serverstart. Sobald Du Deinen Server neu startest oder er durch ein Update neu gestartet wird, ist die Bannliste wieder leer und der Spieler kann sich erneut verbinden. Du musst den Befehl danach erneut ausführen.

## Bann aufheben

```text
unban <IP-Adresse>
```

Danach kann sich der Spieler sofort wieder verbinden.

## IP-Adresse eines Spielers herausfinden

Alle drei Befehle brauchen zwingend eine IP-Adresse. Mit

```text
list
```

zeigt Dir der Server die aktuell verbundenen Spieler an. Sieh Dir die Ausgabe in der Konsole an und achte zusätzlich auf die Meldungen, die der Server beim Beitritt eines Spielers ausgibt.

> [!WARNING]
> Es gibt keinen Befehl, der einen Spieler anhand seines Namens oder seiner SteamID64 entfernt. Ohne die passende IP-Adresse funktionieren `kick`, `ban` und `unban` nicht.

## Banns gelten für IP-Adressen

> [!IMPORTANT]
> Ein Bann sperrt eine IP-Adresse, nicht ein Spielerkonto. Verbindet sich der Spieler später über eine andere IP-Adresse – etwa nach einem Router-Neustart bei dynamischer IP oder aus einem anderen Netzwerk –, greift der Bann nicht mehr. Umgekehrt sperrst Du mit einer IP-Adresse auch alle anderen Spieler, die sich diese Adresse teilen, zum Beispiel im selben Haushalt.

## Weitere Konsolenbefehle

| Befehl | Beschreibung |
|--------|-------------|
| `list` | Verbundene Spieler anzeigen |
| `kick <IP-Adresse>` | Spieler vom Server trennen |
| `ban <IP-Adresse>` | IP-Adresse aussperren |
| `unban <IP-Adresse>` | Bann aufheben (gilt bis zum nächsten Serverstart) |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
| `save` | Vollständiger Speichervorgang – der Server ist währenddessen eingefroren |
| `quicksave` | Speichert in einem zweiten Thread, der Server läuft weiter |
| `stop` | Welt vollständig speichern und Server beenden |
| `quickstop` | Server beenden, ohne zu speichern |

> [!IMPORTANT]
> `quickstop` beendet den Server **ohne zu speichern**. Alles seit dem letzten Speicherpunkt geht dabei verloren. Nutze zum geordneten Beenden `stop` oder die Stopp-Funktion in der Verwaltung.

## Keine Kick- und Bann-Befehle im Spiel

> [!NOTE]
> Im Spiel selbst gibt es keine Möglichkeit, Spieler zu entfernen. Die Developer Console von Romestead enthält ausschließlich Cheat- und Debug-Befehle, aber keine Befehle zum Kicken oder Bannen. Alles, was Spieler betrifft, läuft über die Konsole in der Verwaltung.

> [!TIP]
> Möchtest Du Deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Serverpasswort und gib es nur an diese Personen weiter. Das ist zuverlässiger als ein Bann auf eine IP-Adresse.
