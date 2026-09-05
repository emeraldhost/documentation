---
slug: "map-aendern"
language: "de"
title: "So änderst Du die Map auf Deinem 7 Days to Die Server"
description: "Map auf einem 7 Days to Die Server ändern"
tags: []
date: "2026-03-18"
visibility: "public"
cta: "gameserver"
product_keys: ["7-days-to-die"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Map ändern"
sort: 5
related: ["gameserver/7-days-to-die/add-mods", "gameserver/7-days-to-die/add-savegame", "gameserver/7-days-to-die/create-backup", "gameserver/7-days-to-die/download-savegame"]
---

Du kannst zwischen der handgestalteten Map **Navezgane**, vorgenerierten Maps (**Pregen**) und einer zufällig generierten Welt (**RWG**) wählen.

## Map ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **serverconfig.xml öffnen**\
   Öffne die Datei `serverconfig.xml` im Hauptverzeichnis Deines Servers.

4. **Map festlegen**\
   Suche die folgende Zeile und ändere den Wert:

   ```xml
   <property name="GameWorld" value="Navezgane"/>
   ```

   | Wert | Beschreibung |
   |------|-------------|
   | `Navezgane` | Die handgestaltete Standard-Map |
   | `RWG` | Zufällig generierte Welt |
   | `Pregen06k01` bis `Pregen06k04` | Vorgenerierte 6k-Maps |
   | `Pregen08k01` bis `Pregen08k04` | Vorgenerierte 8k-Maps |
   | `Pregen10k01` bis `Pregen10k04` | Vorgenerierte 10k-Maps |

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Zufällige Welt konfigurieren (RWG)

Wenn Du `RWG` als Map gewählt hast, kannst Du die Weltgenerierung zusätzlich anpassen:

```xml
<property name="GameWorld" value="RWG"/>
<property name="WorldGenSeed" value="MeinSeed"/>
<property name="WorldGenSize" value="6144"/>
```

| Einstellung | Beschreibung |
|-------------|-------------|
| `WorldGenSeed` | Der Seed für die Weltgenerierung (beliebiger Text) |
| `WorldGenSize` | Kartengröße: `6144`, `8192` oder `10240` |

> [!NOTE]
> Je größer die Welt, desto mehr Ressourcen benötigt der Server. Eine Größe von `6144` ist für die meisten Server empfehlenswert.

> [!WARNING]
> Beim Wechseln der Map wird die bestehende Welt nicht gelöscht. Wenn Du zu einer neuen zufälligen Welt wechseln möchtest, ändere den `WorldGenSeed` oder lösche den bestehenden Weltordner unter `/Saves/`.
