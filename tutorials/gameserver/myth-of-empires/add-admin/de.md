---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Myth of Empires Server hinzu"
description: "Admin auf einem Myth of Empires Server hinzufügen"
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
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/download-savegame", "gameserver/myth-of-empires/join-server"]
---

Admins – im Spiel **GM-Accounts** genannt – werden auf einem Myth of Empires Server über ihre **SteamID64** eingetragen. Das ist eine 17-stellige Zahl, die mit `7656` beginnt. Eine Admin-Datei zum Bearbeiten per SFTP gibt es nicht: Die Liste wird beim Serverstart übergeben.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!IMPORTANT]
> Mehrere SteamID64 trennst Du durch ein **Semikolon** (`;`) – ohne Leerzeichen dazwischen. Ein Komma als Trennzeichen funktioniert nicht.

## Admin eintragen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **SteamID64 eintragen**\
   Trage Deine SteamID64 in das Feld für die Admin- beziehungsweise GM-Accounts ein. Bietet Deine Verwaltung nur ein Feld für zusätzliche Startparameter, ergänzt Du dort:

   ```text
   -ServerAdminAccounts=76561198012345678;76561198087654321
   ```

3. **GM-Accounts aktivieren**\
   Prüfe, ob in den Einstellungen zusätzlich ein Schalter für die GM-Accounts vorhanden ist (`bUseServerAdmin`). Ist er vorhanden, muss er aktiviert sein, sonst bleibt die Liste wirkungslos.

4. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu. Die Admin-Liste wird nur beim Serverstart eingelesen.

## Adminbefehle im Spiel nutzen

1. **Server beitreten**\
   Tritt Deinem Server bei, siehe [Server beitreten](/tutorials/gameserver/myth-of-empires/join-server).

2. **Konsole öffnen**\
   Drücke die Taste `~` beziehungsweise `` ` `` – auf einer englischen Tastatur die Taste links neben der `1`. Die Konsole öffnet sich nur, wenn Dein Account als Admin eingetragen ist.

   > [!TIP]
   > **Tastatur**
   >
   > Reagiert die Taste nicht, stelle Dein Tastaturlayout auf Englisch (US) um und versuche es erneut.

3. **Befehl eingeben**\
   Alle Adminbefehle beginnen mit `cheat`, zum Beispiel:

   ```text
   cheat SaveWorld
   ```

## Befehle im Überblick

> [!WARNING]
> Für Myth of Empires gibt es **keine offizielle Befehlsübersicht** des Entwicklers. Die folgende Liste stammt aus der Serveradministrations-Community. Je nach Serverversion kann ein einzelner Befehl deshalb abweichen oder fehlen.

| Befehl | Beschreibung |
|--------|-------------|
| `cheat SaveWorld` | Welt sofort speichern |
| `cheat Fly` | Flugmodus aktivieren |
| `cheat Walk` | Flugmodus wieder beenden |
| `cheat Ghost` | Durch Objekte hindurchbewegen |
| `cheat God` | Unverwundbarkeit ein- bzw. ausschalten |
| `cheat Hide` | Für andere Spieler unsichtbar werden |
| `cheat EnableSpectator` | Zuschauermodus aktivieren |
| `cheat DisableSpectator` | Zuschauermodus beenden |
| `cheat GotoPlayer <SteamID64>` | Zu einem Spieler teleportieren |
| `cheat PullPlayer <SteamID64>` | Einen Spieler zu Dir teleportieren |
| `cheat GotoPosition <x> <y> <z>` | Zu einer Koordinate teleportieren |
| `cheat AttachPlayerForWatch <SteamID64>` | Einem Spieler zusehen |
| `cheat UnAttachPlayerForWatch` | Zusehen beenden |
| `cheat DestroyTarget` | Anvisiertes Objekt entfernen |
| `cheat StunTarget` | Anvisiertes Ziel betäuben |
| `cheat AddItem <ItemID> <Menge> <Qualität>` | Gegenstand ins eigene Inventar legen |
| `cheat AddItemToPlayer <SteamID64> <ItemID> <Menge> <Qualität>` | Gegenstand einem Spieler geben |
| `cheat AddCopper <SteamID64> <Menge>` | Einem Spieler Kupfermünzen geben |
| `cheat AddExpToPlayer <SteamID64> <XP>` | Einem Spieler Erfahrung geben |
| `cheat EmptyPlayerInventory <SteamID64>` | Inventar eines Spielers leeren |
| `cheat SpawnNPCByIndex <Index> <Distanz> <Level> <Anzahl>` | NPCs erzeugen |
| `cheat KillAllSpawnedNPC` | Alle erzeugten NPCs entfernen |
| `cheat SetServerLevel <Level>` | Server-Level setzen |
| `cheat setTime <HH:MM>` | Uhrzeit in der Welt setzen |
| `cheat setTimeSpeed <Faktor>` | Vergehen der Zeit beschleunigen oder verlangsamen |
| `cheat setWeather <0-15>` | Wetter setzen |

> [!WARNING]
> Adminrechte lassen sich ausschließlich über die Admin-Liste beim Serverstart vergeben. Häufig kursierende Befehle wie `cheat SetAdmin` funktionieren nicht – ein Spieler, der nicht in der Liste steht, kann sich im Spiel keine Adminrechte geben.

> [!NOTE]
> Wird ein Admin nachträglich eingetragen, muss der Server neu gestartet werden. Speichere die Welt vorher mit `cheat SaveWorld` und warte rund 30 bis 45 Sekunden, bevor Du den Server stoppst.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/myth-of-empires/kick-ban-players).
