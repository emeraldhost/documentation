---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem PixARK Server hinzu"
description: "Mods auf einem PixARK Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/pixark/add-admin", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

Für PixARK gibt es einen Steam Workshop. Anders als bei ARK Survival Evolved lädt der Server die Mods aber **nicht** selbst herunter – es gibt kein Feld, in das Du Mod-IDs einträgst. Du musst die Dateien selbst per SFTP auf den Server laden.

> [!IMPORTANT]
> Mods sind bei PixARK ein Sonderfall. Der Workshop wird seit Jahren kaum noch gepflegt, viele Einträge sind ausdrücklich als „Legacy“ oder „Discontinued“ markiert, und für den Serverbetrieb gibt es keine offizielle Dokumentation. Ob ein bestimmter Mod auf Deinem Server läuft, lässt sich vorher nicht sagen. Erstelle deshalb **immer** vorher ein [Backup](/tutorials/gameserver/pixark/create-backup) und teste einen Mod nach dem anderen.

## Voraussetzung

Die Mod-Dateien bekommst Du nur über eine PixARK-Installation auf Deinem eigenen PC: Steam lädt den Mod als Archiv herunter, entpackt wird er erst beim ersten Start des Spiels. Erst danach liegen die Dateien in einer Form vor, die Du auf den Server laden kannst.

## Mod-Dateien beschaffen

1. **Mod abonnieren**\
   Öffne den [Steam Workshop für PixARK](https://steamcommunity.com/app/593600/workshop/), suche den gewünschten Mod und abonniere ihn.

2. **PixARK starten**\
   Starte PixARK einmal auf Deinem PC und warte, bis Du im Hauptmenü bist. Erst dabei entpackt das Spiel die Mod-Dateien.

3. **Mod-Ordner öffnen**\
   Öffne auf Deinem PC folgendes Verzeichnis:

   ```text
   <Steam>\steamapps\common\PixARK\ShooterGame\Content\Mods
   ```

4. **Dateien heraussuchen**\
   Zu jedem Mod gehören **zwei** Dinge:

   | Element | Beschreibung |
   |---------|--------------|
   | Ordner mit der Mod-ID | Ein Ordner, dessen Name aus der Zahlenfolge der Mod-ID besteht |
   | `<ModID>.mod` | Eine gleichnamige Datei direkt daneben |

   > [!WARNING]
   > Du brauchst beides. Lädst Du nur den Ordner hoch und vergisst die `.mod`-Datei, erkennt der Server den Mod nicht.

## Mod auf den Server laden

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis. Existiert der Ordner `Mods` noch nicht, lege ihn an:

   ```text
   /ShooterGame/Content/Mods/
   ```

4. **Dateien hochladen**\
   Lade den Mod-Ordner **und** die zugehörige `.mod`-Datei in dieses Verzeichnis hoch.

5. **Server starten**\
   Starte Deinen Server. Lädt er nicht sauber durch oder stürzt er ab, entferne den Mod wieder und spiele Dein Backup zurück.

## Mods aktualisieren

> [!NOTE]
> Der Server aktualisiert Mods nicht von selbst. Erscheint im Workshop eine neue Version, musst Du sie auf Deinem PC herunterladen, das Spiel einmal starten und die Dateien erneut auf den Server laden. Passen Server- und Client-Version eines Mods nicht zusammen, kommt es zu Fehlern beim Beitritt.

> [!TIP]
> Damit alle Mitspieler dieselben Mod-Dateien haben, sollten sie den Mod ebenfalls im Steam Workshop abonnieren und das Spiel einmal starten, bevor sie Deinem Server beitreten.
