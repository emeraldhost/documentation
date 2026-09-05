---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem CryoFall Server"
description: "Spieler auf einem CryoFall Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["cryofall"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame", "gameserver/cryofall/join-server"]
---

Spieler verwaltest Du in CryoFall über die Konsole im Spiel. Alternativ kannst Du die Listen bei gestopptem Server direkt in der Serverkonfiguration bearbeiten.

> [!NOTE]
> Du benötigst Operator- oder Moderatoren-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/cryofall/add-admin).

## Befehle im Spiel nutzen

1. **Konsole öffnen**\
   Drücke im Spiel die Taste `~`, um die Konsole zu öffnen.

2. **Befehl eingeben**\
   Alle Befehle beginnen mit `/`, zum Beispiel:

   ```text
   /ban Spielername
   ```

3. **Befehle vervollständigen**\
   Mit der Tab-Taste vervollständigt die Konsole angefangene Befehle.

## Spieler kicken

Ein Kick wirft den Spieler für eine bestimmte Zeit vom Server. Danach kann er wieder beitreten.

```text
/kick <Spielername> [Minuten] ["Grund"]
```

Beispiel – der Spieler fliegt für 60 Minuten mit Begründung:

```text
/kick Spielername 60 "Bitte halte dich an die Serverregeln"
```

> [!NOTE]
> Den Grund schreibst Du direkt hinter die Minutenangabe in doppelte Anführungszeichen. Lässt Du die Minuten weg, gilt der Kick für 30 Minuten. Möchtest Du einen Kick vorzeitig aufheben, nutzt Du `/mod.kickList.remove <Spielername>`.

## Spieler bannen

Ein Bann ist dauerhaft und gilt so lange, bis Du ihn wieder aufhebst.

```text
/ban <Spielername>
```

Der Spieler wird sofort getrennt und kann sich nicht mehr verbinden.

> [!NOTE]
> CryoFall kennt **keine zeitlich begrenzten Banns** – der Befehl hat keinen Zeitparameter. Soll ein Spieler nur vorübergehend draußen bleiben, nutze stattdessen `/kick` mit einer Minutenangabe.

## Bann aufheben

```text
/mod.blackList.remove <Spielername>
```

Mit `/mod.blackList.print` siehst Du alle gebannten Spieler.

## Fraktionen kicken und bannen

Ganze Fraktionen entfernst Du über deren Kürzel (Clan-Tag):

```text
/banFaction <Kürzel>
```

```text
/kickFaction <Kürzel> [Minuten] ["Grund"]
```

## Spieler stummschalten

```text
/mute <Spielername> [Minuten]
```

```text
/mod.muteList.remove <Spielername>
```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/ban <Spielername>` | Spieler dauerhaft aussperren |
| `/mod.blackList.remove <Spielername>` | Bann aufheben |
| `/mod.blackList.print` | Gebannte Spieler anzeigen |
| `/banFaction <Kürzel>` | Ganze Fraktion aussperren |
| `/kick <Spielername> [Minuten] ["Grund"]` | Spieler zeitlich begrenzt vom Server werfen |
| `/mod.kickList.remove <Spielername>` | Kick aufheben |
| `/mod.kickList.print` | Gekickte Spieler anzeigen |
| `/kickFaction <Kürzel> [Minuten] ["Grund"]` | Ganze Fraktion zeitlich begrenzt entfernen |
| `/mute <Spielername> [Minuten]` | Spieler stummschalten |
| `/mod.muteList.remove <Spielername>` | Stummschaltung aufheben |
| `/whiteListAdd <Spielername>` | Spieler auf die Whitelist setzen |
| `/mod.whiteList.remove <Spielername>` | Spieler von der Whitelist entfernen |
| `/mod.whiteList.print` | Whitelist anzeigen |
| `/mod.whiteList.enabled 1` | Whitelist aktivieren |

> [!NOTE]
> Gebannte Spieler kommen nicht mehr auf den Server – Operatoren und Moderatoren sind davon ausgenommen.

## Server nur für bestimmte Spieler öffnen

CryoFall kennt kein Serverpasswort. Möchtest Du Deinen Server privat halten, nutzt Du die Whitelist: Ist sie aktiv, kommen nur noch gelistete Spieler auf den Server – Operatoren und Moderatoren ausgenommen.

1. **Spieler eintragen**\
   Setze zuerst Dich selbst und alle Mitspieler auf die Liste:

   ```text
   /whiteListAdd Spielername
   ```

2. **Whitelist aktivieren**\
   Schalte die Whitelist erst danach scharf:

   ```text
   /mod.whiteList.enabled 1
   ```

3. **Liste prüfen**\
   Kontrolliere das Ergebnis:

   ```text
   /mod.whiteList.print
   ```

> [!IMPORTANT]
> Aktiviere die Whitelist erst, wenn alle gewünschten Spieler eingetragen sind. Andernfalls sperrst Du Deine Mitspieler aus.

## Listen über die Konfigurationsdatei verwalten

Die Listen stehen zusätzlich als Klartext in der Serverkonfiguration. Das hilft Dir zum Beispiel, wenn Du einen Bann aufheben möchtest und gerade niemand mit Rechten im Spiel ist.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Konfiguration öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) folgende Datei:

   ```text
   /Data/SettingsServer.xml
   ```

3. **Liste bearbeiten**\
   Die Namen stehen durch Komma getrennt in diesen Einträgen:

   ```xml
   <access_blacklist></access_blacklist>
   <access_whitelist></access_whitelist>
   <access_whitelist_enabled>0</access_whitelist_enabled>
   ```

   | Eintrag | Funktion |
   |---------|----------|
   | `access_blacklist` | Gebannte Spieler. Einen Namen zu entfernen entspricht einem Unban. |
   | `access_whitelist` | Zugelassene Spieler |
   | `access_whitelist_enabled` | `1` aktiviert die Whitelist, `0` deaktiviert sie |

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Bearbeite die Datei nur bei gestopptem Server. Im laufenden Betrieb verwaltet der Server die Listen selbst und überschreibt Deine Änderungen.
