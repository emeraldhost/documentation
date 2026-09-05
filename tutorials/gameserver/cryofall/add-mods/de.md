---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem CryoFall Server hinzu"
description: "Mods auf einem CryoFall Server hinzufügen"
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
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/cryofall/add-admin", "gameserver/cryofall/add-savegame", "gameserver/cryofall/create-backup", "gameserver/cryofall/download-savegame"]
---

Mods sind in CryoFall einzelne **`.mpk`-Dateien**. Du lädst sie in den Ordner `/Data/Mods/` hoch und aktivierst sie anschließend in der Datei `/Data/ModsConfig.xml`. Ohne den Eintrag in dieser Datei wird ein hochgeladener Mod nicht geladen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](/tutorials/gameserver/cryofall/create-backup) – Mods können Deine Welt dauerhaft verändern.

> [!NOTE]
> **Kein Steam Workshop**
>
> Für CryoFall Server gibt es keine Workshop-Anbindung. Du lädst die `.mpk`-Datei jedes Mods immer manuell hoch.

## Mod besorgen

1. **Mod auswählen**\
   Mods findest Du im offiziellen [CryoFall-Forum](https://forums.atomictorch.com/index.php?board=24.0) oder auf den Seiten und Discord-Servern der jeweiligen Mod-Autoren.

2. **Kennzeichnung beachten**\
   Mod-Autoren geben an, wo ihr Mod installiert werden muss:

   | Kennzeichnung | Bedeutung |
   |---------------|-----------|
   | `[Server]` | Läuft nur auf dem Server. Deine Spieler müssen nichts installieren. |
   | `[Client]` | Reiner Spieler-Mod. Auf dem Server hat er keine Wirkung. |
   | `[Client+Server]` | Muss auf dem Server **und** bei jedem Spieler installiert sein. |

3. **Mod-ID notieren**\
   Notiere Dir die vom Autor angegebene Mod-ID – häufig inklusive Versionsnummer, zum Beispiel `duality_1.2.1`. Genau diese ID trägst Du später in die `ModsConfig.xml` ein.

4. **Version prüfen**\
   Achte darauf, dass der Mod zur Spielversion Deines Servers passt. Mods für eine andere Version können den Serverstart verhindern.

## Mod hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Ordner öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Data/Mods/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, lege ihn im Verzeichnis `/Data/` an. Der Name muss exakt `Mods` lauten – Dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.

4. **`.mpk`-Datei hochladen**\
   Lade die `.mpk`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an.

## Mod aktivieren

1. **ModsConfig.xml öffnen**\
   Öffne folgende Datei:

   ```text
   /Data/ModsConfig.xml
   ```

2. **Mod eintragen**\
   Ergänze für jeden Mod eine eigene Zeile mit der Mod-ID:

   ```xml
   <?xml version="1.0" encoding="utf-8" standalone="yes"?>
   <mods>
     <mod>core_1.0.0</mod>
     <mod>cnei</mod>
   </mods>
   ```

   > [!IMPORTANT]
   > Lösche vorhandene Einträge nicht. Der Eintrag für den Core gehört zum Spiel selbst und muss stehen bleiben. Neue Mods kommen einfach darunter.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

4. **Konsole prüfen**\
   Beim Start meldet Dein Server die geladenen Mods in der Konsole. Erscheint Dein Mod dort nicht, stimmt in der Regel die Mod-ID nicht mit dem Dateinamen im Ordner `Mods` überein.

## Mods bei Deinen Spielern

> [!IMPORTANT]
> Dein Server verteilt Mods **nicht** automatisch an die Spieler. Bei einem Mod, der als `[Client+Server]` gekennzeichnet ist, muss jeder Spieler dieselbe `.mpk`-Datei zusätzlich in seinem eigenen Spiel installieren – wie genau, beschreibt der jeweilige Mod-Autor in seinem Forenbeitrag. Reine `[Server]`-Mods brauchen dagegen keine Installation bei den Spielern.

> [!WARNING]
> **Client-Mods nicht sperren**
>
> In der Datei `/Data/SettingsServer.xml` steuert der Wert `no_client_mods`, ob Spieler mit eigenen Mods beitreten dürfen. Auf einem gemoddeten Server muss er auf `0` stehen:
>
> ```xml
> <no_client_mods>0</no_client_mods>
> ```
>
> Steht dort `1`, werden alle Mods auf Spielerseite deaktiviert.

## Mods entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Eintrag löschen**\
   Entferne die Zeile des Mods aus der Datei `/Data/ModsConfig.xml`.

3. **Datei löschen**\
   Lösche die zugehörige `.mpk`-Datei aus dem Ordner `/Data/Mods/`.

4. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Entfernst Du einen Mod, der Gegenstände, Gebäude oder Technologien zur Welt hinzugefügt hat, verschwinden dessen Inhalte aus Deiner Welt. Spiele im Zweifel ein [Backup](/tutorials/gameserver/cryofall/create-backup) zurück, statt den Mod einfach zu löschen.

> [!NOTE]
> Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere Deine Mods in diesem Fall oder entferne sie vorübergehend aus `ModsConfig.xml` und dem Ordner `/Data/Mods/`.
