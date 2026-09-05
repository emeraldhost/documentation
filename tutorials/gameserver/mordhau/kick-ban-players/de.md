---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Mordhau Server"
description: "Spieler auf einem Mordhau Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mordhau"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 5
related: ["gameserver/mordhau/add-admin", "gameserver/mordhau/add-mods", "gameserver/mordhau/create-backup", "gameserver/mordhau/join-server"]
---

Spieler entfernst Du auf einem Mordhau Server über **RCON**. Damit verwaltest Du Deinen Server von Deinem PC aus, ohne selbst im Spiel zu sein. RCON ist ab Werk deaktiviert und muss einmalig eingerichtet werden.

> [!WARNING]
> Die Konsole in der **Verwaltung** ist keine Befehlszeile für Mordhau. Kick- und Bann-Befehle nimmt der Server ausschließlich über RCON entgegen – in der Serverkonsole eingetippt passiert nichts.

## RCON einrichten

1. **Port zuweisen**\
   RCON benötigt einen eigenen Port. Weise Deinem Server in der **Verwaltung** einen zusätzlichen Port zu und notiere Dir den Wert.

   > [!NOTE]
   > RCON läuft bei Mordhau über **TCP**, nicht über UDP. Der Port unterscheidet sich also von Game Port und Query Port und muss separat vergeben werden.

2. **Server stoppen**\
   Stoppe Deinen Server über die **Verwaltung**.

   > [!WARNING]
   > Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu – Änderungen im laufenden Betrieb gehen dabei verloren.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

5. **RCON aktivieren**\
   Trage im Abschnitt `[/Script/Mordhau.MordhauGameSession]` Dein RCON-Passwort und den zugewiesenen Port ein:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   RconPassword=EinSicheresPasswort
   RconPort=DeinRconPort
   RconTimeout=120.000000
   ```

   > [!IMPORTANT]
   > Steht bei `RconPort` eine `0`, ist RCON deaktiviert. Vergib außerdem unbedingt ein eigenes, sicheres RCON-Passwort – wer es kennt, hat die volle Kontrolle über Deinen Server.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

7. **Mit RCON verbinden**\
   Verbinde Dich mit einem RCON-Tool, das das Source-RCON-Protokoll unterstützt. Trage dort die IP-Adresse Deines Servers, den RCON-Port und das RCON-Passwort ein.

## Spieler auflisten

Für Kick und Bann brauchst Du die **PlayFab-ID** des Spielers. Diese liefert Dir folgender Befehl:

```text
playerlist
```

Der Server gibt pro Zeile die PlayFab-ID und den Spielernamen aus.

> [!NOTE]
> `playerlist` zeigt nur Spieler, die gerade verbunden sind. Notiere Dir die ID also, solange der Spieler noch online ist.

## Spieler kicken

```text
kick <PlayFabID> <Grund>
```

Der Spieler wird sofort vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
ban <PlayFabID> <Dauer> <Grund>
```

Die **Dauer wird in Minuten** angegeben. Trägst Du `0` ein, gilt der Bann dauerhaft.

> [!TIP]
> **Beispiel**
>
> ```text
> ban 909275ECE8FEDDB 1440 Teamkilling
> ```
>
> Dieser Bann gilt für 1440 Minuten, also 24 Stunden.

## Bann aufheben

```text
unban <PlayFabID>
```

Mit `banlist` siehst Du vorher alle aktiven Banns mit ihrer verbleibenden Dauer.

> [!WARNING]
> Bearbeite die Bann- und Mute-Listen in der `Game.ini` nicht von Hand. Der Server pflegt diese Einträge selbst – hebe Banns ausschließlich über `unban` auf.

## Spieler stummschalten

```text
mute <PlayFabID> <Minuten>
```

```text
unmute <PlayFabID>
```

Mit `mutelist` rufst Du alle aktuell stummgeschalteten Spieler ab.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `playerlist` | Zeigt alle verbundenen Spieler mit PlayFab-ID und Namen |
| `kick <ID> <Grund>` | Trennt einen Spieler vom Server |
| `ban <ID> <Minuten> <Grund>` | Sperrt einen Spieler aus, `0` bedeutet dauerhaft |
| `unban <ID>` | Hebt einen Bann auf |
| `banlist` | Listet alle aktiven Banns mit Dauer auf |
| `mute <ID> <Minuten>` | Schaltet einen Spieler stumm |
| `unmute <ID>` | Hebt die Stummschaltung auf |
| `mutelist` | Listet alle stummgeschalteten Spieler auf |
| `addadmin <ID>` | Trägt einen Spieler als Admin ein |
| `removeadmin <ID>` | Entfernt einen Admin |
| `adminlist` | Zeigt alle Admins an |
| `say <Text>` | Sendet eine Nachricht an alle Spieler |
| `changelevel <Karte>` | Wechselt die Karte |
| `killplayer <ID>` | Tötet einen Spieler im Spiel |
| `info` | Zeigt Informationen zum Server an |

> [!TIP]
> Wie Du dauerhafte Adminrechte vergibst, erfährst Du unter [Admin hinzufügen](/tutorials/gameserver/mordhau/add-admin).

> [!NOTE]
> Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem Dein Server einmal vollständig gestartet ist. Findest Du die Datei nicht, starte Deinen Server einmal und stoppe ihn wieder.
