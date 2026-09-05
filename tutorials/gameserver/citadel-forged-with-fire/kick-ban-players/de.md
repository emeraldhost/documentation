---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Citadel Forged with Fire Server"
description: "Spieler auf einem Citadel Forged with Fire Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Spieler entfernst Du auf Deinem Citadel Forged with Fire Server über Chat-Befehle im Spiel. Als Parameter dient dabei immer der **Spielername**, nicht die SteamID.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/citadel-forged-with-fire/add-admin).

## Befehle im Spiel nutzen

1. **Als Admin einloggen**\
   Tritt Deinem Server bei, öffne den Chat und melde Dich mit Deinem Admin-Passwort an:

   ```text
   /admin_login <Passwort>
   ```

2. **Spielernamen ermitteln**\
   Mit folgendem Befehl listet Dir der Server alle aktuell eingeloggten Spieler auf:

   ```text
   /who
   ```

3. **Befehl ausführen**\
   Gib den gewünschten Befehl mit dem Spielernamen ein, zum Beispiel:

   ```text
   /server_kick Merlin Regelverstoß
   ```

> [!NOTE]
> **Spielernamen**
>
> Spielernamen sind auf **12 Zeichen begrenzt und enthalten keine Leerzeichen**. Damit ist der Name als Parameter eindeutig – Du musst ihn nicht in Anführungszeichen setzen.

## Spieler kicken

```text
/server_kick <Spieler> <Grund>
```

Der Spieler wird sofort vom Server getrennt und bekommt den angegebenen Grund angezeigt. Er kann anschließend jederzeit wieder beitreten.

## Spieler bannen

```text
/server_ban <Spieler> <Grund>
```

Der Spieler wird sofort vom Server geworfen und dauerhaft gesperrt. Bei jedem weiteren Beitrittsversuch bekommt er den angegebenen Grund angezeigt.

## Bann aufheben

```text
/server_unban <Spieler>
```

Danach kann der Spieler wieder normal auf Deinen Server.

## Charakter löschen

```text
/admin_delete <Spieler>
```

Damit löschst Du den Charakter eines Spielers vollständig vom Server. Ist der Spieler gerade online, wird er sofort vom Server getrennt. Gesperrt ist er dadurch **nicht** – er kann wieder beitreten, startet dann aber mit einem neuen Charakter.

> [!IMPORTANT]
> Ein gelöschter Charakter lässt sich nicht wiederherstellen. Erstelle vorher ein [Backup](/tutorials/gameserver/citadel-forged-with-fire/create-backup), wenn Du Dir nicht sicher bist.

## Befehle im Überblick

| Befehl | Alternative | Beschreibung |
|--------|-------------|--------------|
| `/who` | – | Zeigt alle aktuell eingeloggten Spieler |
| `/whois <Spieler>` | – | Zeigt Informationen zu einem Spieler inklusive SteamID – auch, wenn er offline ist |
| `/server_kick <Spieler> <Grund>` | `/gtfo` | Trennt einen Spieler vom Server |
| `/server_ban <Spieler> <Grund>` | `/ban` | Sperrt einen Spieler dauerhaft |
| `/server_unban <Spieler>` | `/unban` | Hebt die Sperre wieder auf |
| `/admin_delete <Spieler>` | `/wipe` | Löscht den Charakter des Spielers vom Server |

> [!NOTE]
> Die Befehle in der Spalte **Alternative** sind lediglich Kurzformen und machen exakt dasselbe wie der jeweilige Hauptbefehl.

> [!NOTE]
> **Bannliste**
>
> Citadel Forged with Fire bietet keine Bannliste, die Du als Datei bearbeiten könntest. Banns setzt und entfernst Du ausschließlich über die Befehle `/server_ban` und `/server_unban`.

> [!TIP]
> **Befehl zeigt keine Wirkung?**
>
> Reagiert ein Befehl im Chat nicht, prüfe zuerst mit `/who`, ob Du noch als Admin eingeloggt bist – nach einem Neustart oder Verbindungsabbruch musst Du Dich mit `/admin_login` erneut anmelden. Alternativ kannst Du dieselben Befehle über die Remote Console im Browser ausführen, siehe [Admin hinzufügen](/tutorials/gameserver/citadel-forged-with-fire/add-admin).
