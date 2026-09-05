---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods auf Deinem Operation Harsh Doorstop Server hinzu"
description: "Mods auf einem Operation Harsh Doorstop Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/operation-harsh-doorstop/add-admin", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Mods für Operation Harsh Doorstop stammen aus dem **Steam Workshop**. Auf dem Server landen sie als Ordner im Verzeichnis `Mods` – eine Mod-Liste oder Konfigurationsdatei, in der Du Mods aktivierst, gibt es nicht. Karten, Fraktionen und Spielmodi aus Mods werden stattdessen über die **Startparameter** Deines Servers ausgewählt.

> [!WARNING]
> Dein Server lädt Mods **nicht** selbstständig aus dem Workshop herunter. Du lädst den Mod-Ordner selbst herunter und überträgst ihn per SFTP auf den Server.

## Schritt 1: Mod herunterladen

1. **Mod im Workshop öffnen**\
   Öffne die gewünschte Mod im **Steam Workshop** von Operation Harsh Doorstop und abonniere sie. Steam legt die Mod anschließend lokal auf Deinem PC ab – im Steam-Verzeichnis unter `steamapps/workshop/content/736590/<Workshop-ID>`.

   > [!NOTE]
   > `736590` ist die Steam-App-ID von Operation Harsh Doorstop. Die Workshop-ID steht in der Adresszeile der Workshop-Seite hinter `?id=`.

2. **Alternative: Download per SteamCMD**\
   Du kannst die Mod auch ohne Abo mit SteamCMD auf Deinem PC herunterladen:

   ```text
   steamcmd +login anonymous +workshop_download_item 736590 <Workshop-ID> +quit
   ```

   Die Dateien liegen danach ebenfalls unter `steamapps/workshop/content/736590/<Workshop-ID>`.

3. **Mod-Ordner heraussuchen**\
   In diesem Verzeichnis findest Du den eigentlichen Mod-Ordner. Dieser Ordner – nicht der Ordner mit der Workshop-ID – wird später auf den Server kopiert. Wie er heißt, steht in der Regel in der Beschreibung der Mod.

## Schritt 2: Mod auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mods-Ordner öffnen**\
   Wechsle in folgendes Verzeichnis. Existiert der Ordner `Mods` noch nicht, lege ihn an:

   ```text
   /HarshDoorstop/Mods
   ```

4. **Mod-Ordner hochladen**\
   Lade den kompletten Mod-Ordner in dieses Verzeichnis hoch. Für jede Mod liegt dort genau ein Ordner:

   ```text
   /HarshDoorstop/Mods/MEINE_MOD
   ```

5. **Server starten**\
   Starte Deinen Server, sobald der Upload abgeschlossen ist.

> [!WARNING]
> Lade den Ordner vollständig hoch und starte den Server erst danach. Ein abgebrochener Upload führt dazu, dass Karten oder Spielmodi der Mod nicht geladen werden können.

## Schritt 3: Modinhalte auf dem Server aktivieren

Es reicht nicht, die Mod hochzuladen: Karten, Fraktionen und Spielmodi musst Du zusätzlich in den **Startparametern** Deines Servers auswählen. Diese passt Du in der **Verwaltung** an.

| Parameter | Bedeutung |
|-----------|-----------|
| `<MapName>` | Die Karte, auf der der Server startet – bei einer Karten-Mod der Name der modifizierten Karte |
| `?BluforFaction=` | Fraktion des blauen Teams |
| `?OpforFaction=` | Fraktion des roten Teams |
| `?game=` | Pfad der Spielmodus-Klasse aus einer Mod |

Ein Startparameter-Beispiel für einen modifizierten Server sieht so aus:

```text
MODDED_MAP?BluforFaction=MODDED_FACTION?OpforFaction=MODDED_FACTION?game=MODDED_GAMEMODE_PFAD
```

> [!NOTE]
> Die genauen Werte für Karten-, Fraktions- und Spielmodusnamen legt der Ersteller der Mod fest. Sie stehen in der Beschreibung der Mod im Workshop – erfundene oder falsch geschriebene Namen führen dazu, dass der Server nicht wie erwartet startet. Lässt Du `?game=` weg, verwendet der Server den Standard-Spielmodus der Karte.

> [!TIP]
> Mods, die nur Inhalte ergänzen (zum Beispiel zusätzliche Ausrüstung), benötigen oft keine Startparameter. Nur Karten, Fraktionen und Spielmodi müssen ausdrücklich ausgewählt werden.

## Was Spieler tun müssen

Karten, Fraktionen und Spielmodi aus Mods müssen auch auf den PCs Deiner Mitspieler vorliegen. Am zuverlässigsten ist es, wenn alle die verwendeten Mods im **Steam Workshop** abonnieren und das Spiel anschließend neu starten.

## Mod entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Startparameter bereinigen**\
   Entferne alle Verweise auf die Mod aus den Startparametern – also modifizierte Karte, Fraktionen und Spielmodus. Bleibt ein Verweis stehen, startet der Server anschließend nicht mehr korrekt.

3. **Ordner löschen**\
   Lösche den Mod-Ordner per SFTP aus `/HarshDoorstop/Mods`.

4. **Server starten**\
   Starte Deinen Server.
