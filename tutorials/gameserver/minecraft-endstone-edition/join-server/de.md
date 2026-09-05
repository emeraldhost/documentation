---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Minecraft Endstone Edition Server bei"
description: "Einem Minecraft Endstone Edition Server beitreten"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 6
related: ["gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame", "gameserver/minecraft-endstone-edition/kick-ban-players"]
---

Endstone startet im Hintergrund den offiziellen Bedrock Dedicated Server. Du verbindest Dich deshalb mit einem ganz normalen Minecraft Bedrock Client – zum Beispiel unter Windows, Android oder iOS. Der Server wird dort einmalig manuell mit IP-Adresse und Port eingetragen.

## Verbindungsdaten finden

> [!NOTE]
> Die IP-Adresse und den Game Port Deines Servers findest Du in der **Verwaltung** Deines Servers. Trage im Spiel immer genau diesen Game Port ein.

> [!IMPORTANT]
> Der Server beantwortet Serverabfragen über denselben UDP-Port, auf dem auch das Spiel läuft. Einen getrennten Query Port zum Verbinden gibt es nicht – trägst Du einen anderen Port ein, kommst Du nicht auf den Server.

## Server im Spiel hinzufügen

1. **Minecraft starten**\
   Starte Minecraft Bedrock Edition auf Deinem Gerät.

2. **Spielen öffnen**\
   Wähle im Hauptmenü **Play** beziehungsweise **Spielen**.

3. **Reiter Server öffnen**\
   Wechsle in den Reiter **Servers** beziehungsweise **Server**.

4. **Server hinzufügen**\
   Scrolle nach unten und wähle **Add Server** beziehungsweise **Server hinzufügen**.

5. **Verbindungsdaten eintragen**\
   Trage einen frei wählbaren Servernamen sowie die IP-Adresse und den Game Port aus der Verwaltung ein:

   ```text
   Server Name:    Mein Endstone Server
   Server Address: 123.45.67.89
   Port:           Game Port aus der Verwaltung
   ```

6. **Speichern**\
   Speichere den Eintrag. Dein Server erscheint anschließend in der Liste unter **Additional Servers** beziehungsweise **Weitere Server**.

7. **Beitreten**\
   Wähle Deinen Server aus und klicke auf **Join Server** beziehungsweise **Server beitreten**.

## Warum Dein Server nicht in der Serverliste auftaucht

> [!NOTE]
> Im Reiter **Server** listet Minecraft unter „Featured Servers“ ausschließlich die großen Partner-Server von Mojang. Eigene Server – egal ob gemietet oder selbst betrieben – erscheinen dort grundsätzlich nicht. Du erreichst Deinen Server nur über den manuellen Eintrag mit IP-Adresse und Game Port.

## Erster Start dauert länger

> [!WARNING]
> Beim allerersten Start lädt Endstone zunächst den offiziellen Bedrock Dedicated Server herunter und richtet ihn ein. Das dauert einen Moment – warte, bis in der Konsole der Serverstart abgeschlossen ist, bevor Du Dich verbindest.

## Beitritt von Konsolen

Konsolen erlauben es nicht, eigene Server-Adressen direkt einzutragen. Über einen DNS-Umweg (BedrockConnect) kannst Du die Liste der „Featured Server“ so umleiten, dass Du Deine eigene IP eingeben kannst.

> [!WARNING]
> Du änderst hierbei die DNS-Einstellungen Deiner Konsole. Notiere Dir vorher die aktuellen Werte, falls Du sie später wiederherstellen möchtest.

### DNS-Adressen

| Konsole | Primär | Sekundär |
|---------|--------|----------|
| Xbox One / Series X\|S | `104.238.130.180` | `8.8.8.8` |
| PlayStation 4 / 5 | `45.55.68.52` | `8.8.8.8` |
| Nintendo Switch | `104.238.130.180` | `8.8.8.8` |

### Xbox

1. **Netzwerk-Einstellungen öffnen**\
   Gehe zu **Einstellungen → Allgemein → Netzwerkeinstellungen → Erweiterte Einstellungen → DNS-Einstellungen**.

2. **Manuell wählen**\
   Wähle **Manuell** und trage die DNS-Adressen aus der Tabelle ein.

3. **Speichern und neustarten**\
   Speichere die Einstellung und starte die Xbox neu.

### PlayStation

1. **Netzwerk-Einstellungen öffnen**\
   Gehe zu **Einstellungen → Netzwerk → Einstellungen → Internet einrichten**.

2. **Verbindung anpassen**\
   Wähle Dein Netzwerk aus, öffne die **Erweiterten Einstellungen** und setze die **DNS-Einstellungen** auf **Manuell**.

3. **DNS eintragen**\
   Trage die DNS-Adressen aus der Tabelle ein und bestätige.

4. **Konsole neustarten**\
   Starte Deine Konsole neu.

### Server verbinden

1. **Minecraft starten**\
   Öffne Minecraft Bedrock Edition und wechsle in den Reiter **Server**.

2. **Featured Server beitreten**\
   Klicke auf einen der angezeigten Featured Server. Du wirst stattdessen zu BedrockConnect weitergeleitet.

3. **Eigene IP eingeben**\
   Wähle **Connect to a Server** und gib die IP-Adresse sowie den Game Port Deines Servers ein.

## Minecraft Java Edition

> [!IMPORTANT]
> Clients der **Minecraft Java Edition** können Deinem Server nicht beitreten. Endstone startet den Bedrock Dedicated Server, und beide Editionen nutzen unterschiedliche Netzwerkprotokolle – Bedrock kommuniziert über UDP, Java über TCP.
