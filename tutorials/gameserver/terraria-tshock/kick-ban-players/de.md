---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Terraria tShock Server"
description: "Spieler auf einem Terraria tShock Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria-tshock"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/terraria-tshock/add-savegame", "gameserver/terraria-tshock/create-backup", "gameserver/terraria-tshock/download-savegame", "gameserver/terraria-tshock/join-server"]
---

tShock bringt ein vollwertiges Bannsystem mit: zeitlich begrenzte Banns, Gründe und Ticketnummern zum gezielten Aufheben. Alle Befehle funktionieren sowohl im **Ingame-Chat** als auch in der **Serverkonsole** Deiner Verwaltung.

> [!NOTE]
> In der Serverkonsole schreibst Du die Befehle **ohne** führenden Schrägstrich (`kick Spielername`), im Ingame-Chat **mit** (`/kick Spielername`). Für die Befehle im Spiel benötigst Du einen Account mit den passenden Rechten: [Admin hinzufügen](/tutorials/gameserver/terraria-tshock/add-admin).

## Spieler anzeigen

```text
who
```

Der Befehl listet alle verbundenen Spieler auf. Mit `who -i` bekommst Du zusätzlich den Index jedes Spielers angezeigt, über den Du ihn eindeutig ansprechen kannst.

## Spieler kicken

```text
kick <Spieler> [Grund]
```

Der Spieler wird vom Server entfernt, kann aber sofort wieder beitreten. Ohne Angabe eines Grundes trägt tShock automatisch einen Standardtext ein.

> [!TIP]
> **Beispiel**
>
> ```text
> kick Spielername "Bitte im Chat sachlich bleiben"
> ```

> [!NOTE]
> Besteht der Grund aus mehreren Wörtern, setze ihn in Anführungszeichen. Spieler mit Adminrechten lassen sich nicht kicken.

## Spieler bannen

```text
ban add <Ziel> [Grund] [Dauer] [Flags]
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden. Als Antwort nennt Dir tShock eine **Ticketnummer** – die brauchst Du später zum Entbannen.

> [!TIP]
> **Beispiel**
>
> ```text
> ban add Spielername "Griefing" 10d0h0m0s
> ```

### Dauer angeben

Die Dauer schreibst Du im Format `0d0h0m0s` – Tage, Stunden, Minuten, Sekunden. Lässt Du die Angabe weg, ist der Bann **dauerhaft**.

| Angabe | Bedeutung |
|--------|-----------|
| `1d0h0m0s` | 1 Tag |
| `0d12h0m0s` | 12 Stunden |
| `10d30m0s` | 10 Tage und 30 Minuten |
| _(keine Angabe)_ | Dauerhaft |

### Flags

Über Flags legst Du fest, woran der Bann festgemacht wird. Ohne Angabe bannt tShock Account, Geräte-Kennung und IP-Adresse gleichzeitig.

| Flag | Bedeutung |
|------|-----------|
| `-a` | Bannt den tShock-Account |
| `-u` | Bannt die Geräte-Kennung (UUID) des Clients |
| `-n` | Bannt den Charakternamen |
| `-ip` | Bannt die IP-Adresse |
| `-e` | Wertet die Angabe als direkten Identifier – nötig für Banns gegen Offline-Spieler |

> [!WARNING]
> Ohne das Flag `-e` muss der Spieler **online** sein. Ist er es nicht, meldet Dir tShock, dass das Ziel nicht gefunden wurde.

### Offline-Spieler bannen

Ist der Spieler nicht mehr auf dem Server, verwendest Du das Flag `-e` zusammen mit einem Präfix, das angibt, worauf sich der Bann bezieht:

| Präfix | Bedeutung |
|--------|-----------|
| `acc:` | tShock-Account |
| `name:` | Charaktername |
| `uuid:` | Geräte-Kennung des Clients |
| `ip:` | IP-Adresse |

> [!TIP]
> **Beispiel**
>
> ```text
> ban add "acc:Spielername" "Griefing" -e
> ```

## Bann aufheben

```text
ban del <Ticketnummer>
```

Einen `unban`-Befehl gibt es nicht – Du hebst einen Bann immer über seine Ticketnummer auf.

1. **Ticketnummer heraussuchen**\
   Lass Dir die Banns auflisten:

   ```text
   ban list
   ```

   Bei vielen Einträgen blätterst Du mit `ban list 2`, `ban list 3` und so weiter.

2. **Eintrag prüfen**\
   Details zu einem Eintrag zeigt Dir:

   ```text
   ban details <Ticketnummer>
   ```

3. **Bann löschen**\
   Hebe den Bann auf:

   ```text
   ban del <Ticketnummer>
   ```

> [!IMPORTANT]
> Ein Spieler kann **mehrere Ban-Einträge** haben: Bannst Du ohne Flags, legt tShock je einen Eintrag für Account, Geräte-Kennung und IP-Adresse mit jeweils eigener Ticketnummer an. Kommt der Spieler nach dem Entbannen weiterhin nicht auf den Server, sind noch weitere Einträge vorhanden – prüfe die Liste mit `ban list` und lösche alle zugehörigen Tickets.

> [!NOTE]
> Banns speichert tShock in der Datenbank `/tshock/tshock.sqlite`. Eine Datei `banlist.txt` wie beim normalen Terraria-Server gibt es hier nicht.

## Spieler stummschalten

```text
mute <Spieler> [Grund]
```

```text
unmute <Spieler>
```

Der Spieler bleibt auf dem Server, kann aber nicht mehr im Chat schreiben.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `who` | Verbundene Spieler anzeigen (`who -i` mit Index) |
| `kick <Spieler> [Grund]` | Spieler vom Server entfernen |
| `ban add <Ziel> [Grund] [Dauer] [Flags]` | Spieler bannen |
| `ban del <Ticketnummer>` | Bann aufheben |
| `ban list [Seite]` | Alle Banns auflisten |
| `ban details <Ticketnummer>` | Details zu einem Bann anzeigen |
| `ban help` | Hilfe zum Bannsystem anzeigen |
| `mute <Spieler>` | Spieler stummschalten |
| `unmute <Spieler>` | Stummschaltung aufheben |
| `broadcast <Nachricht>` | Nachricht an alle Spieler senden |
| `save` | Welt sofort speichern |
| `reload` | Konfiguration neu einlesen |
| `help` | Alle verfügbaren Befehle anzeigen |

> [!TIP]
> Speichere nach Moderationsmaßnahmen mit `save`, damit der aktuelle Stand der Welt gesichert ist.

> [!NOTE]
> **Whitelist**
>
> Möchtest Du Deinen Server nur für bestimmte Spieler öffnen, kannst Du zusätzlich die Whitelist von tShock nutzen. Sie arbeitet mit IP-Adressen: Der Befehl `whitelist <IP-Adresse>` trägt eine Adresse in die Datei `/tshock/whitelist.txt` ein. Aktiv wird die Liste erst, wenn Du in der Datei `/tshock/config.json` den Wert `EnableWhitelist` auf `true` setzt.
