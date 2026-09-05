---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Terraria Server"
description: "Spieler auf einem Terraria Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["terraria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/terraria/add-savegame", "gameserver/terraria/create-backup", "gameserver/terraria/download-savegame", "gameserver/terraria/join-server"]
---

Du kickst und bannst Spieler über die **Serverkonsole** in der Verwaltung. Angegeben wird dabei immer der **Spielername**, mit dem der Spieler dem Server beigetreten ist.

> [!NOTE]
> Die Befehle werden in der Serverkonsole **ohne** führenden Schrägstrich eingegeben, also `kick Spielername` statt `/kick Spielername`. Ein Ingame-Admin-System gibt es im normalen Terraria nicht – die Moderation läuft ausschließlich über die Serverkonsole.

## Spielernamen ermitteln

```text
playing
```

Der Befehl listet alle aktuell verbundenen Spieler auf. Übernimm den Namen für die folgenden Befehle exakt so, wie er dort steht.

## Spieler kicken

```text
kick <Spielername>
```

Der Spieler wird vom Server entfernt, kann aber sofort wieder beitreten.

## Spieler bannen

```text
ban <Spielername>
```

Der Spieler wird vom Server entfernt und in die Datei `banlist.txt` eingetragen.

> [!WARNING]
> `ban` funktioniert nur bei Spielern, die **gerade mit dem Server verbunden** sind. Terraria bannt die IP-Adresse der aktiven Verbindung – ist der Spieler offline, kennt der Server sie nicht. Kicke oder banne den Spieler also, solange er online ist. Da der Bann an die IP-Adresse gebunden ist, kann der Spieler mit einer anderen IP-Adresse erneut beitreten.

## Spieler entbannen

Einen `unban`-Befehl gibt es nicht. Zum Entbannen bearbeitest Du die Banliste per SFTP:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **banlist.txt öffnen**\
   Öffne im Hauptverzeichnis Deines Servers die Datei:

   ```text
   /banlist.txt
   ```

4. **Eintrag entfernen**\
   Jeder Bann besteht aus zwei Zeilen: dem Spielernamen und darunter der gebannten IP-Adresse. Entferne **beide** Zeilen des Spielers und speichere die Datei.

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > //Spielername
   > 123.45.67.89
   > ```

5. **Server starten**\
   Starte Deinen Server, damit die Banliste neu eingelesen wird.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `playing` | Verbundene Spieler anzeigen |
| `kick <Spielername>` | Spieler kicken |
| `ban <Spielername>` | Spieler bannen |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
| `help` | Alle Konsolenbefehle anzeigen |
| `time` | Aktuelle Spielzeit anzeigen |
| `save` | Welt sofort speichern |
| `exit` | Welt speichern und Server beenden |

> [!TIP]
> Speichere nach einem Ban mit `save`, damit der aktuelle Stand der Welt gesichert ist.
