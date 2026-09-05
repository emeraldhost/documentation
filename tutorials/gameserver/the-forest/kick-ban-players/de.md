---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem The Forest Server"
description: "Spieler auf einem The Forest Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/the-forest/add-savegame", "gameserver/the-forest/create-backup", "gameserver/the-forest/download-savegame", "gameserver/the-forest/join-server"]
---

Spieler entfernst Du auf einem The Forest Server über **Chat-Befehle im Spiel**. Angegeben wird dabei immer die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!NOTE]
> Die Befehle stehen nur Spielern zur Verfügung, die beim Beitreten das Admin-Passwort eingetragen haben. Siehe [Admin hinzufügen](/tutorials/gameserver/the-forest/add-admin).

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Befehle im Spiel nutzen

1. **Als Admin beitreten**\
   Trage beim Beitritt das Admin-Passwort ein, sonst werden die Befehle ignoriert.

2. **Chat öffnen**\
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

3. **Befehl eingeben**\
   Alle Adminbefehle beginnen mit `/`, zum Beispiel:

   ```text
   /ban 76561198012345678
   ```

## Spieler kicken

```text
/kick <SteamID64>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```text
/ban <SteamID64>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden.

## Bann aufheben

```text
/unban <SteamID64>
```

> [!WARNING]
> `/unban` ist in der offiziellen Befehlsliste von The Forest **nicht** aufgeführt, wird aber von mehreren Hostern beschrieben. Es kann daher sein, dass der Befehl auf Deiner Serverversion nicht funktioniert. Eine Bann-Datei, die Du per SFTP bearbeiten könntest, gibt es nicht – The Forest legt keine dokumentierte Banliste im Dateisystem ab. Ebenso ist nicht dokumentiert, ob Banns einen Serverneustart überdauern.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/help` | Liste aller verfügbaren Befehle anzeigen |
| `/kick <SteamID64>` | Spieler vom Server trennen |
| `/ban <SteamID64>` | Spieler aussperren |
| `/save <1-5>` | Spielstand auf dem angegebenen Slot speichern |
| `/restart` | Server neu starten |
| `/shutdown` | Server herunterfahren |
| `/openlogs` | Log-Fenster öffnen |
| `/closelogs` | Log-Fenster schließen |
| `/treeregrowmode on\|off` | Nachwachsen gefällter Bäume ein- oder ausschalten |
| `/allowbuildingdestruction on\|off` | Zerstörung von Gebäuden erlauben oder verbieten |
| `/allowenemiescreative on\|off` | Gegner im Kreativmodus erlauben oder verbieten |

> [!IMPORTANT]
> Nutze `/restart` **nicht** zum Neustarten Deines Servers: Laut offizieller Befehlsliste setzt dieser Befehl den Spielstand zurück – die Speicherdaten werden dabei gelöscht. Starte Deinen Server stattdessen über die **Verwaltung** neu. Erstelle vorher ein [Backup](/tutorials/gameserver/the-forest/create-backup).

> [!WARNING]
> `/save <1-5>` speichert auf dem angegebenen Slot – gibst Du einen anderen Slot als den Deines Servers an, überschreibst Du damit möglicherweise einen anderen Spielstand.

## Keine Konsole in der Verwaltung

> [!NOTE]
> Die Konsole in der Verwaltung zeigt bei The Forest ausschließlich die Ausgaben des Servers an. Der Server nimmt dort **keine** Befehle entgegen – alle Adminbefehle laufen über den Chat im Spiel.

## Keine Whitelist

> [!WARNING]
> The Forest hat **keine Whitelist-Funktion**. Möchtest Du Deinen Server nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Spieler weiter.
