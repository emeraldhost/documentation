---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Avorion Server"
description: "Spieler auf einem Avorion Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/avorion/add-savegame", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame", "gameserver/avorion/join-server"]
---

Spieler entfernst Du in Avorion über Befehle. Diese kannst Du entweder in der **Konsole** Deiner Verwaltung eingeben oder im Spiel im Chat – dort mit vorangestelltem `/`.

> [!NOTE]
> Um die Befehle im Spiel nutzen zu können, benötigst Du Adminrechte. Siehe [Admin hinzufügen](/tutorials/gameserver/avorion/add-admin).

## Spieler kicken

```text
/kick <Spielername>
```

Der Spieler wird vom Server getrennt, kann aber sofort wieder beitreten. Ein Kick eignet sich als Verwarnung oder um einen hängenden Spieler zu trennen.

## Spieler bannen

```text
/ban <Spielername>
```

Der Spieler wird auf die Blacklist gesetzt und kommt nicht mehr auf Deinen Server, bis Du den Bann aufhebst.

## Bann aufheben

```text
/unban <Spielername>
```

## IP bannen

```text
/banip <Spieler-IP>
```

Aufheben lässt sich ein IP-Bann mit:

```text
/unbanip <Spieler-IP>
```

> [!WARNING]
> Ein IP-Bann trifft alle Spieler hinter derselben IP-Adresse – zum Beispiel mehrere Personen aus einem Haushalt. Viele Internetanschlüsse bekommen zudem regelmäßig eine neue IP-Adresse, wodurch der Bann ins Leere läuft. Nutze im Regelfall `/ban`.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/kick <Spielername>` | Spieler vom Server trennen |
| `/ban <Spielername>` | Spieler auf die Blacklist setzen |
| `/unban <Spielername>` | Bann aufheben |
| `/banip <Spieler-IP>` | IP-Adresse bannen |
| `/unbanip <Spieler-IP>` | IP-Bann aufheben |
| `/blacklist` | Optionen der Blacklist anzeigen |
| `/whitelist` | Optionen der Whitelist anzeigen |
| `/player` | Anzahl der verbundenen Spieler anzeigen |
| `/status` | Informationen zum aktuellen Status des Servers anzeigen |
| `/w <Spielername>` | Private Nachricht an einen Spieler senden |
| `/save` | Aktuellen Stand speichern |
| `/stop` | Server herunterfahren |
| `/help` | Alle verfügbaren Befehle anzeigen |

> [!TIP]
> Der Spielername muss exakt stimmen – inklusive Groß- und Kleinschreibung. Kopiere ihn am besten aus der Konsole Deiner Verwaltung, dort taucht er beim Verbinden des Spielers auf.

> [!NOTE]
> Kickst oder bannst Du über die Konsole der Verwaltung, lässt Du das `/` weg oder gibst es mit ein – beides funktioniert. Im Spielchat ist das `/` zwingend, sonst wird Deine Eingabe als normale Chatnachricht gesendet.

> [!WARNING]
> Speichere vor einem geplanten Serverstopp mit `/save`, bevor Du `/stop` ausführst oder den Server über die Verwaltung stoppst – so geht kein Fortschritt verloren.
