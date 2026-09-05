---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Minecraft Endstone Edition Server hinzu"
description: "Mods bzw. Plugins auf einem Minecraft Endstone Edition Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/minecraft-endstone-edition/add-admin", "gameserver/minecraft-endstone-edition/add-savegame", "gameserver/minecraft-endstone-edition/create-backup", "gameserver/minecraft-endstone-edition/download-savegame"]
---

Endstone kennt **keine klassischen Mods**. Erweitert wird der Server stattdessen über **Endstone-Plugins**, die ausschließlich auf dem Server laufen.

> [!IMPORTANT]
> Mods für Forge oder Fabric funktionieren auf Deinem Server nicht. Sie gehören zur Minecraft Java Edition, während Endstone auf dem Bedrock Dedicated Server aufsetzt.

> [!NOTE]
> Plugins laufen komplett auf dem Server. Deine Mitspieler müssen dafür **nichts** installieren und können mit einem unveränderten Minecraft Bedrock Client beitreten.

## Welche Plugin-Formate gibt es?

| Format | Sprache | Hinweis |
|--------|---------|---------|
| `.whl` | Python | Das übliche Format. Endstone lädt alle `.whl`-Dateien aus dem Ordner `plugins`. |
| `.so` | C++ | Für Linux-Server. Achte darauf, die Linux-Variante des Plugins zu laden. |

> [!WARNING]
> Eine `.dll`-Datei ist die Windows-Variante eines C++-Plugins und funktioniert auf Deinem Linux-Server **nicht**. Bietet ein Plugin beide Varianten an, lade immer die `.so`-Datei herunter.

## Wo finde ich Plugins?

Einen offiziellen Plugin-Marktplatz mit Browser gibt es für Endstone **nicht**. Plugins findest Du an folgenden Stellen:

- Python-Plugins werden in der Regel als Paket auf [PyPI](https://pypi.org/) veröffentlicht
- Viele Entwickler stellen ihr Plugin zusätzlich als Release-Datei auf GitHub bereit
- Eine Übersicht öffentlicher Projekte liefert das GitHub-Thema [endstone-plugin](https://github.com/topics/endstone-plugin)

> [!WARNING]
> Lade Plugins nur aus vertrauenswürdigen Quellen herunter und achte darauf, dass das Plugin zur installierten Endstone-Version passt.

## Plugin installieren

1. **Plugin herunterladen**\
   Lade das Plugin als `.whl`-Datei (Python) beziehungsweise als `.so`-Datei (C++, Linux) herunter.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. **Plugin hochladen**\
   Lade die Datei im Hauptordner Deines Servers in folgenden Ordner hoch:

   ```text
   plugins
   ```

5. **Server starten**\
   Starte Deinen Server. Beim Start wird das Plugin geladen.

6. **Ergebnis prüfen**\
   Gib in der Konsole Deines Servers folgenden Befehl ein, um alle geladenen Plugins aufzulisten:

   ```text
   plugins
   ```

> [!NOTE]
> In der Konsole Deines Servers gibst Du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst Du sie mit `/`, also zum Beispiel `/plugins`.

> [!IMPORTANT]
> Im Ordner `plugins` liegt ein Unterordner `.local`. Diesen verwaltet Endstone selbst – dort werden die Abhängigkeiten der Python-Plugins abgelegt. Bearbeite oder lösche ihn nicht.

## Plugin aktualisieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Alte Version löschen**\
   Lösche die alte Plugin-Datei aus dem Ordner `plugins`. Lässt Du sie liegen, versucht der Server beide Versionen zu laden.

3. **Neue Version hochladen**\
   Lade die neue Datei in den Ordner `plugins` hoch.

4. **Server starten**\
   Starte Deinen Server, damit die Änderung wirksam wird.

## Plugin entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Plugin löschen**\
   Lösche die Plugin-Datei aus dem Ordner `plugins`.

3. **Konfiguration löschen**\
   Lösche optional den zugehörigen Unterordner des Plugins unter `plugins/`.

4. **Server starten**\
   Starte Deinen Server.

## Plugins neu laden

Mit folgendem Befehl lädt Endstone die Konfiguration und die Plugins neu ein:

```text
reload
```

> [!NOTE]
> Für den Befehl gibt es die Kurzform `rl`. Beide erfordern Operator-Rechte, siehe [Admin hinzufügen](/tutorials/gameserver/minecraft-endstone-edition/add-admin).

> [!WARNING]
> `reload` eignet sich, um Änderungen an der Konfiguration eines bereits installierten Plugins zu übernehmen. Für ein **neu hochgeladenes** oder aktualisiertes Plugin startest Du Deinen Server sicherheitshalber komplett neu.

## Behavior- und Resource Packs

Weil unter Endstone weiterhin der offizielle Bedrock Dedicated Server arbeitet, funktionieren Behavior- und Resource Packs zusätzlich zu den Plugins ganz normal.

> [!TIP]
> Wie Du Packs einbindest, erfährst Du unter [Behavior- und Resource Packs hinzufügen](/tutorials/gameserver/minecraft-bedrock/add-behavior-und-resource-packs).
