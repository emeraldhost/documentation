---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem The Bus Server"
description: "Mods auf einem The Bus Server installieren"
tags: []
date: "2026-02-24"
visibility: "public"
updated: "2026-10-05"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 10
related: ["gameserver/the-bus/download-savegame", "gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-savegame", "gameserver/the-bus/join-server"]
---

The Bus unterstützt Mods über den **Steam Workshop**. Mods werden auf dem Server im Ordner `/TheBus/Mods/` abgelegt. Kompatible Mods werden auf dem Server immer automatisch aktiviert – Du musst sie nach dem Hochladen nicht zusätzlich einschalten.

> [!TIP]
> Mods für The Bus findest Du im [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).

## So installierst Du Mods

1. **Mod herunterladen**\
   Abonniere die gewünschten Mods im [Steam Workshop für The Bus](https://steamcommunity.com/workshop/browse/?appid=491540). Steam lädt sie anschließend in folgenden Ordner auf Deinem PC herunter:

   ```text
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Mit SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Mod hochladen**\
   Lade den Ordner jedes Mods in den Ordner `/TheBus/Mods/` hoch.

5. **Server starten**\
   Starte Deinen Server wieder, damit die Mods geladen werden.

> [!TIP]
> Ob ein Map-Mod geladen wurde, prüfst Du nach dem Start im Spiel: Öffne das **Admin-Menü** über das Pausenmenü und sieh nach, ob die Karte in der Map-Auswahl erscheint. Du benötigst dafür Owner- oder Admin-Rechte ([Admin hinzufügen](/tutorials/gameserver/the-bus/add-admin)). Alternativ zeigt Dir `/mapList` im Chat alle verfügbaren Karten an, eine Übersicht aller Befehle erhältst Du mit `/commands`. Wie Du die Karte wechselst, erfährst Du unter [Map ändern](/tutorials/gameserver/the-bus/change-map).

## Fahrpläne und Flotten aus dem Workshop

Auch Fahrpläne und Flotten aus dem Steam Workshop kannst Du wie Mods aus dem Workshop-Ordner (siehe Schritt 1) in den Ordner `/TheBus/Mods/` hochladen. Der Server lädt sie von dort, anschließend kannst Du sie wie gewohnt auswählen. Mehr dazu findest Du unter [Fahrplan ändern](/tutorials/gameserver/the-bus/change-operating-plan) und [Flotte ändern](/tutorials/gameserver/the-bus/change-fleet).

## Mod-Typen

Achte auf die Kennzeichnung der Mods, da diese bestimmt, wo sie installiert werden müssen:

| Typ | Beschreibung |
|-----|-------------|
| **Client and Server** | Muss sowohl auf dem Server als auch bei allen Spielern installiert sein |
| **Client only** | Wird normalerweise nur beim Spieler benötigt – ist der Mod jedoch auf dem Server installiert, müssen ihn auch alle Spieler installieren |
| **Server only** | Wird nur auf dem Server benötigt und ist bei Spielern deaktiviert |

> [!WARNING]
> Kompatible Mods werden auf dem Server automatisch aktiviert. Stelle sicher, dass alle Spieler die benötigten Client-Mods ebenfalls installiert haben, da sie sonst nicht beitreten können.

## Mods nach einem Spiel-Update

Mods, die für eine andere Nebenversion des Spiels erstellt wurden (z.B. eine ältere Version als die aktuelle), werden als „potentially incompatible“ (möglicherweise inkompatibel) gekennzeichnet. Prüfe nach einem Update im Workshop, ob es eine aktualisierte Version des Mods gibt, und lade diese auf Deinen Server hoch.

> [!NOTE]
> Stürzt Dein Server nach einem Spiel-Update ab oder startet er nicht mehr, entferne die Mods vorübergehend aus dem Ordner `/TheBus/Mods/` und starte den Server erneut. Startet er dann wieder, füge die Mods einzeln wieder hinzu, um den fehlerhaften Mod zu finden. Weitere Lösungen findest Du unter [Server-Probleme beheben](/tutorials/gameserver/the-bus/troubleshoot-server).
