---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods auf Deinem Ground Branch Server hinzu"
description: "Mods auf einem Ground Branch Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["ground-branch"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/ground-branch/add-admin", "gameserver/ground-branch/create-backup", "gameserver/ground-branch/join-server", "gameserver/ground-branch/kick-ban-players"]
---

Mods für Ground Branch werden über den **Steam Workshop** bereitgestellt. Auf dem Server trägst Du dafür lediglich die **Workshop-IDs** in die Datei `mods.txt` ein – den Rest erledigt der Server beim Start.

> [!NOTE]
> **Ab Version 1035.2**
>
> Das Verfahren über die `mods.txt` gilt seit dem Update **V1035.2**. Ältere Anleitungen beschreiben andere Wege, die nicht mehr funktionieren.

## Workshop-ID finden

1. **Mod im Workshop öffnen**\
   Öffne die gewünschte Mod im [Ground Branch Workshop](https://steamcommunity.com/app/16900/workshop/).

2. **ID aus der Adresszeile ablesen**\
   Die Workshop-ID ist die Zahl am Ende der Adresse hinter `?id=`:

   ```text
   https://steamcommunity.com/sharedfiles/filedetails/?id=1234567890
   ```

   In diesem Beispiel lautet die ID `1234567890`.

## Mods auf dem Server eintragen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Modliste wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **mods.txt öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /GroundBranch/ServerConfig/mods.txt
   ```

   > [!NOTE]
   > Der Ordner `ServerConfig` entsteht erst beim ersten Serverstart. Starte Deinen Server einmal, falls Du ihn nicht findest.

4. **IDs eintragen**\
   Trage pro Zeile genau eine Workshop-ID ein:

   ```text
   1234567890
   9876543210
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt er die eingetragenen Mods herunter und legt sie im Ordner `GroundBranch/Mods` ab.

> [!WARNING]
> Der erste Start nach dem Hinzufügen neuer Mods dauert länger, weil die Inhalte erst heruntergeladen werden müssen. Warte den Vorgang ab, bevor Du beitrittst.

## Was Spieler tun müssen

Nichts von Hand. Beim Beitritt auf einen Server mit Mods führt der Server Browser automatisch einen **Mod-Sync** durch: Der Client abonniert die benötigten Workshop-Inhalte und lädt sie herunter.

> [!NOTE]
> Spieler sehen vorher einen Hinweis, dass der Server Mods verwendet und diese vor dem Beitritt geladen werden. Nach dem Download tritt man ganz normal bei – siehe [Server beitreten](/tutorials/gameserver/ground-branch/join-server).

## Mods entfernen oder aktualisieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Zeile entfernen**\
   Lösche die entsprechende Workshop-ID aus der `mods.txt`.

3. **Server starten**\
   Starte Deinen Server. Änderungen an der Modliste greifen ausschließlich nach einem Neustart – im laufenden Betrieb passiert nichts.

## Fehlerbehebung

Lädt der Server keine Mods, prüfe folgende Punkte:

- Steht in der `mods.txt` **eine ID pro Zeile**, ohne Kommas, Anführungszeichen oder Leerzeichen?
- Handelt es sich um die ID des Workshop-Eintrags und nicht um die des Erstellers?
- Ist die Mod noch im Workshop verfügbar und zur aktuellen Spielversion kompatibel?
- Wurde der Server nach der Änderung **neu gestartet**?
- Wirft die Mod weiterhin Probleme, entferne die IDs testweise einzeln, um die verursachende Mod einzugrenzen.

> [!NOTE]
> Ground Branch kennt zwei Arten von Mods: Inhalte aus dem **Quick Create** (Spielmodi, Missionen, Ausrüstungssets, Übersetzungen) sowie asset-basierte Mods aus dem **Mod Kit**. Beide werden über dieselbe `mods.txt` geladen. Details zu den Mod-Typen findest Du im [offiziellen Modding-Wiki](https://wiki.groundbranch.com/en/modding).

> [!TIP]
> Sichere Deine `mods.txt` zusammen mit dem restlichen Ordner `ServerConfig`, bevor Du größere Änderungen vornimmst – siehe [Backup erstellen](/tutorials/gameserver/ground-branch/create-backup).
