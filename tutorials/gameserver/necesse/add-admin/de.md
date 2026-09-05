---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Necesse Server hinzu"
description: "Admin auf einem Necesse Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/necesse/add-mods", "gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame"]
---

Necesse kennt **keine Admin-Datei**, die Du per SFTP bearbeiten könntest. Rechte vergibst Du ausschließlich über den Befehl `/permissions` – entweder direkt in der Konsole Deiner Verwaltung oder im Chat des Spiels. Angegeben wird dabei der **Spielername**, nicht die SteamID64.

> [!IMPORTANT]
> Der Spieler muss **online** auf Deinem Server sein, während Du ihm Rechte gibst. Für einen Spieler, der gerade nicht verbunden ist, lässt sich keine Rechtestufe setzen.

## Rechtestufen

| Stufe | Rechte |
|-------|--------|
| `user` | Standardstufe ohne Sonderrechte |
| `moderator` | Darf Spieler kicken |
| `admin` | Darf zusätzlich bannen, Welteinstellungen ändern und Cheat-Befehle nutzen |
| `owner` | Darf alle Befehle nutzen, inklusive der Rechtevergabe |

## Admin über die Konsole hinzufügen

Der zuverlässigste Weg führt über die Konsole in der Verwaltung. Dort brauchst Du selbst keine Rechte – die Konsole spricht direkt mit dem Server.

1. **Server starten**\
   Starte Deinen Server über die Verwaltung, falls er nicht bereits läuft.

2. **Spieler verbinden lassen**\
   Der Spieler, der Rechte erhalten soll, muss dem Server beitreten und online bleiben. Wie Du Deinem Server beitrittst, steht unter [Server beitreten](/tutorials/gameserver/necesse/join-server).

3. **Konsole öffnen**\
   Öffne in der Verwaltung die **Konsole** Deines Servers.

4. **Rechte vergeben**\
   Gib den folgenden Befehl ein und ersetze `<Spielername>` durch den exakten Namen des Spielers:

   ```text
   /permissions set <Spielername> admin
   ```

   > [!TIP]
   > **Beispiel**
   >
   > ```text
   > /permissions set MaxMustermann owner
   > ```

5. **Ergebnis prüfen**\
   Der Server bestätigt die Änderung in der Konsole. Die Rechte gelten sofort – ein Neustart ist nicht nötig.

## Admin im Spiel hinzufügen

Hast Du selbst bereits die Stufe `owner`, kannst Du weitere Rechte auch direkt im Spiel vergeben.

1. **Chat öffnen**\
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. **Befehl eingeben**\
   Nutze denselben Befehl wie in der Konsole:

   ```text
   /permissions set <Spielername> moderator
   ```

## Rechte prüfen und entziehen

| Befehl | Beschreibung |
|--------|-------------|
| `/permissions list` | Zeigt alle Spieler mit vergebenen Rechten an |
| `/permissions get <Spielername>` | Zeigt die Rechtestufe eines Spielers an |
| `/permissions set <Spielername> user` | Entzieht alle Sonderrechte |

> [!WARNING]
> Groß- und Kleinschreibung des Spielernamens müssen exakt stimmen. Nutze `/permissions list`, um die eingetragene Schreibweise zu kontrollieren.

## Weitere Befehle für Owner

| Befehl | Beschreibung |
|--------|-------------|
| `/stop` | Fährt den Server sauber herunter |
| `/allowcheats` | Schaltet Cheat-Befehle für die Welt frei |
| `/regen` | Erzeugt die aktuelle Ebene (Insel bzw. Dimension) neu |

> [!IMPORTANT]
> `/allowcheats` lässt sich **nicht rückgängig machen**. Einmal freigeschaltet, bleiben die Cheat-Befehle für diese Welt dauerhaft aktiv. `/regen` erzeugt die betroffene Ebene komplett neu und vernichtet dabei alles, was ihr dort gebaut habt – erstelle vorher ein [Backup](/tutorials/gameserver/necesse/create-backup).

> [!TIP]
> Wie Du als Admin Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/necesse/kick-ban-players).
