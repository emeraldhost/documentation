---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Myth of Empires Server"
description: "Spieler auf einem Myth of Empires Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Spieler entfernst Du auf Deinem Myth of Empires Server über Adminbefehle. Alle Befehle arbeiten mit der **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/myth-of-empires/add-admin).

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!WARNING]
> Für Myth of Empires gibt es **keine offizielle Befehlsübersicht** des Entwicklers. Die Kick- und Ban-Befehle in dieser Anleitung stammen aus der Serveradministrations-Community. Je nach Serverversion kann es deshalb sein, dass ein Befehl bei Dir nicht wie beschrieben funktioniert.

## Spieler kicken

1. **Konsole öffnen**\
   Drücke im Spiel die Taste `~` beziehungsweise `` ` ``, um die Konsole zu öffnen.

2. **Befehl eingeben**\
   Gib den Befehl zusammen mit der SteamID64 des Spielers ein:

   ```text
   cheat KickOff 76561198012345678
   ```

3. **Bestätigen**\
   Bestätige die Eingabe. Der Spieler wird sofort vom Server getrennt, ein Serverneustart ist nicht nötig.

Ein gekickter Spieler kann jederzeit wieder beitreten. Möchtest Du ihn dauerhaft aussperren, musst Du ihn bannen.

## Spieler bannen

Zum Bannen gibt es **keinen Konsolenbefehl im Spiel**. Bans setzt Du über RCON ab:

```text
PrivateServerAddBlockList <SteamID64>
```

Der Spieler kann sich danach nicht mehr auf Deinem Server einloggen.

## Bann aufheben

```text
PrivateServerRemoveBlockList <SteamID64>
```

> [!WARNING]
> Die beiden Ban-Befehle sind **nicht Teil der offiziellen Dokumentation** von Myth of Empires. Sie stammen aus der Serveradministrations-Community und werden dort produktiv eingesetzt. Je nach Serverversion kann es deshalb sein, dass sie bei Dir nicht wie beschrieben funktionieren.

## RCON nutzen

RCON ist eine Fernwartungsverbindung zu Deinem Server, über die Du Befehle absetzen kannst, ohne im Spiel zu sein. Myth of Empires nutzt dafür das Source-RCON-Protokoll – Du kannst also gängige RCON-Programme verwenden.

1. **Zugangsdaten klären**\
   RCON muss auf Deinem Server aktiviert sein. Ob das der Fall ist und welcher Port sowie welcher Schlüssel gelten, siehst Du in der **Verwaltung**. Findest Du dort nichts, frag kurz per Support-Ticket nach.

2. **Verbinden**\
   Verbinde Dich mit Deinem RCON-Programm über die Adresse Deines Servers, den RCON-Port und den Schlüssel.

3. **Befehl absetzen**\
   Gib den gewünschten Befehl ein. RCON-Befehle werden **ohne** das vorangestellte `cheat` geschrieben.

> [!IMPORTANT]
> Der RCON-Schlüssel ist ein vollwertiges Serverpasswort. Ist noch ein einfacher Standardwert hinterlegt, ändere ihn unbedingt in einen eigenen, sicheren Schlüssel.

## Befehle im Überblick

| Befehl | Wo | Beschreibung |
|--------|-----|-------------|
| `cheat KickOff <SteamID64>` | Konsole im Spiel | Spieler vom Server trennen |
| `KickOff <SteamID64>` | RCON | Spieler vom Server trennen |
| `PrivateServerAddBlockList <SteamID64>` | RCON | Spieler aussperren |
| `PrivateServerRemoveBlockList <SteamID64>` | RCON | Bann aufheben |
| `BroadcastNotifySysInfo "<Text>" 5 1` | RCON | Ansage an alle Spieler senden |
| `SaveWorld` | RCON | Welt sofort speichern |
| `ShutDownServer` | RCON | Server sauber herunterfahren |

> [!NOTE]
> **Keine Ban-Datei**
>
> Myth of Empires legt keine Ban-Liste als Datei auf dem Server ab, die Du per SFTP bearbeiten könntest. Banns verwaltest Du ausschließlich über die oben genannten Befehle.

> [!NOTE]
> **Keine zeitlich begrenzten Banns**
>
> Ein Bann gilt so lange, bis Du ihn wieder aufhebst. Eine Angabe einer Bann-Dauer ist nicht vorgesehen.

> [!TIP]
> Zusätzlich lässt sich Dein Server so einstellen, dass er VAC-gebannte Spieler automatisch aussperrt. Ob Deine Verwaltung dafür eine Option anbietet, siehst Du unter **Einstellungen** – der zugehörige Startparameter lautet `-EnableVACBan=1`.
