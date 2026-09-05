---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Minecraft PocketMine Edition Server hinzu"
description: "Mods bzw. Plugins auf einem Minecraft PocketMine Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft-pocketmine"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/minecraft-pocketmine/add-admin", "gameserver/minecraft-pocketmine/add-savegame", "gameserver/minecraft-pocketmine/create-backup", "gameserver/minecraft-pocketmine/download-savegame"]
---

PocketMine-MP kennt **keine klassischen Mods**. Erweitert wird der Server stattdessen über **Plugins** – kleine PHP-Erweiterungen im `.phar`-Format, die ausschließlich auf dem Server laufen.

> [!IMPORTANT]
> Weder Forge- oder Fabric-Mods noch Bedrock Add-Ons funktionieren auf einem PocketMine-Server. Forge und Fabric gehören zur Minecraft Java Edition, und Behaviour Packs werden von PocketMine-MP ausdrücklich nicht unterstützt. Packs, die ein Behaviour Pack voraussetzen, funktionieren dort ebenfalls nicht korrekt.

> [!NOTE]
> Plugins laufen komplett auf dem Server. Deine Mitspieler müssen dafür **nichts** installieren und können mit einem unveränderten Minecraft Bedrock Client beitreten.

## Wo finde ich Plugins?

Die offizielle Plugin-Plattform von PocketMine-MP ist Poggit:

- [Poggit Release](https://poggit.pmmp.io/plugins)

> [!WARNING]
> Lade Plugins nur aus vertrauenswürdigen Quellen herunter und achte darauf, dass das Plugin zur installierten PocketMine-Hauptversion passt.

## Plugin installieren

1. **Plugin herunterladen**\
   Lade das Plugin als `.phar`-Datei herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. **Plugin hochladen**\
   Lade die `.phar`-Datei im Hauptordner Deines Servers in folgenden Ordner hoch:

   ```text
   plugins
   ```

5. **Server starten**\
   Starte Deinen Server. Beim Start wird das Plugin geladen.

> [!TIP]
> Beim ersten Start legt ein Plugin in der Regel einen eigenen Unterordner mit seinen Konfigurationsdateien an. Standardmäßig liegt dieser im Ordner `plugin_data` im Hauptordner Deines Servers. Die Dateien darin kannst Du anschließend anpassen.

## Plugin aktualisieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Alte Version löschen**\
   Lösche die alte `.phar`-Datei des Plugins aus dem Ordner `plugins`.

   > [!IMPORTANT]
   > Die offizielle PocketMine-Dokumentation weist ausdrücklich darauf hin, alte Versionen eines Plugins zu löschen und den Server neu zu starten. Lass die alte Datei also nicht einfach liegen.

3. **Neue Version hochladen**\
   Lade die neue `.phar`-Datei in den Ordner `plugins` hoch.

4. **Server starten**\
   Starte Deinen Server, damit die Änderung wirksam wird.

## Plugin entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugin löschen**\
   Lösche die `.phar`-Datei aus dem Ordner `plugins`.

3. **Konfiguration löschen**\
   Lösche optional den zugehörigen Unterordner des Plugins im Ordner `plugin_data`.

4. **Server starten**\
   Starte Deinen Server.

## Wo liegen die Konfigurationsdateien der Plugins?

Standardmäßig sammelt PocketMine-MP die Konfigurationen aller Plugins im Ordner `plugin_data` im Hauptordner Deines Servers – jedes Plugin bekommt dort einen eigenen Unterordner.

Möchtest Du stattdessen die alte Struktur nutzen, bei der die Konfiguration eines Plugins direkt unterhalb von `plugins/` liegt, setze in der Datei `pocketmine.yml` im Hauptordner Deines Servers folgenden Wert:

```yaml
plugins:
  legacy-data-dir: true
```

> [!NOTE]
> Standardmäßig steht dieser Wert auf `false`. Die Option existiert laut Kommentar in der `pocketmine.yml` nur aus Kompatibilitätsgründen für ältere Installationen – bei einem neuen Server musst Du sie nicht ändern.

## Resource Packs für die Optik

Optische Änderungen für alle Spieler setzt Du über Resource Packs um.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Pack hochladen**\
   Lade das Resource Pack als `.zip`- oder `.mcpack`-Datei im Hauptordner Deines Servers in folgenden Ordner hoch:

   ```text
   resource_packs
   ```

3. **Pack registrieren**\
   Öffne im Ordner `resource_packs` die Datei `resource_packs.yml` und trage den Dateinamen inklusive Endung in die Liste `resource_stack` ein:

   ```yaml
   resource_stack:
     - MeinPack.mcpack
   ```

4. **Server starten**\
   Starte Deinen Server.

> [!NOTE]
> Der Stapel unter `resource_stack` wird von unten nach oben angewendet: Einträge weiter oben überschreiben Einträge weiter unten.

> [!WARNING]
> Entpackte Resource Packs (also einfache Ordner) werden nicht unterstützt – erlaubt sind ausschließlich `.zip` und `.mcpack`. Ebenso lassen sich Resource Packs nicht pro Welt festlegen, sie gelten immer für den gesamten Server.

> [!TIP]
> **Resource Pack verpflichtend machen**
>
> Mit dem Eintrag `force_resources` in der Datei `resource_packs.yml` im Ordner `resource_packs` legst Du fest, ob Spieler das Pack laden müssen, um beitreten zu können:
>
> ```yaml
> force_resources: true
> ```
