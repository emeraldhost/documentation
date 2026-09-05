---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem SCUM Server"
description: "Spieler auf einem SCUM Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Spieler kannst Du direkt im Spiel per Chat-Befehl entfernen oder über die Konfigurationsdateien Deines Servers verwalten.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/scum/add-admin).

## Befehle im Spiel nutzen

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **SteamID64 ermitteln**\
   Für einen Bann benötigst Du die SteamID64 des Spielers. Diese liefert Dir der folgende Befehl:

   ```text
   #ListPlayers
   ```

3. **Befehl ausführen**\
   Gib den gewünschten Befehl mit führendem `#` ein, zum Beispiel:

   ```text
   #Ban 76561198012345678
   ```

## Spieler kicken

```text
#Kick <Spielername>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
#Ban <SteamID64>
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden, bis der Bann aufgehoben wird.

> [!NOTE]
> SCUM kennt keine zeitlich begrenzten Banns. Ein Bann gilt so lange, bis Du ihn wieder aufhebst.

## Bann aufheben

```text
#Unban <SteamID64>
```

## Spieler stummschalten

```text
#Mute <Spielername>
```

```text
#UnMute <Spielername>
```

Mit `#Silence <Spielername> <Dauer in Stunden>` schaltest Du einen Spieler für eine bestimmte Zeit stumm. Lässt Du die Dauer weg oder trägst `0` ein, gilt die Stummschaltung unbegrenzt.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `#ListPlayers` | Alle Spieler inklusive SteamID64 anzeigen |
| `#Kick <Spielername>` | Spieler vom Server trennen |
| `#Ban <SteamID64>` | Spieler dauerhaft aussperren |
| `#Unban <SteamID64>` | Bann aufheben |
| `#Mute <Spielername>` | Spieler stummschalten |
| `#UnMute <Spielername>` | Stummschaltung aufheben |
| `#Silence <Spielername> <Stunden>` | Spieler zeitlich begrenzt stummschalten |
| `#ListMutedPlayers` | Stummgeschaltete Spieler anzeigen |
| `#Announce <Text>` | Ansage an alle Spieler senden |

## Listen über die Konfigurationsdateien verwalten

Alle Listen liegen per [SFTP](/tutorials/gameserver/establish-sftp-connection) in folgendem Verzeichnis:

```text
/SCUM/Saved/Config/WindowsServer/
```

| Datei | Funktion |
|-------|----------|
| `BannedUsers.ini` | Gebannte Spieler, eine SteamID64 pro Zeile. Eine Zeile zu löschen entspricht einem Unban. |
| `SilencedUsers.ini` | Stummgeschaltete Spieler inklusive verbleibender Dauer |
| `ExclusiveUsers.ini` | Echte Whitelist: Sobald hier die erste SteamID64 steht, kommen nur noch gelistete Spieler auf den Server. |
| `WhitelistedUsers.ini` | Prioritätsslots: Gelistete Spieler kommen auch auf einen vollen Server – dafür wird ein anderer Spieler gekickt. |

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei bearbeiten**\
   Öffne die gewünschte Datei per SFTP und trage die SteamID64 ein – eine pro Zeile. Existiert die Datei noch nicht, lege sie an.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Die Listen werden nur beim Serverstart eingelesen. Änderungen an den Dateien im laufenden Betrieb wirken nicht – und werden beim Stoppen des Servers unter Umständen überschrieben. Stoppe Deinen Server daher immer, bevor Du die Dateien bearbeitest.

> [!IMPORTANT]
> `WhitelistedUsers.ini` ist **keine** Whitelist. Wenn Du Deinen Server nur für bestimmte Spieler öffnen möchtest, nutze `ExclusiveUsers.ini`.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. SCUM stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
