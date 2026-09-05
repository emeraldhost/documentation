---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Palworld Server hinzu"
description: "Mods auf einem Palworld Server hinzufügen"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-30"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 16
related: ["gameserver/palworld/enable-pvp", "gameserver/palworld/enable-raids", "gameserver/palworld/join-server", "gameserver/palworld/kick-ban-players"]
---

Palworld-Mods gibt es in verschiedenen Typen – und nicht jeder Typ läuft auf einem Linux-Server. Unsere Palworld-Server laufen unter **Linux**, daher gilt:

| Mod-Typ | Auf Deinem Server nutzbar? |
|---------|----------------------------|
| `.pak`-Mods (Asset-/Daten-Mods) | ✅ Ja |
| LogicMods (`.pak` im Ordner `LogicMods`, benötigt UE4SS) | ❌ Nein – Windows-only |
| UE4SS-Mods (Lua-Skripte) | ❌ Nein – Windows-only |
| Offizielles Mod-System / Steam Workshop | ❌ Nein – Windows-only |

> [!NOTE]
> **So erkennst Du den Mod-Typ**
>
> Wirf einen Blick in die Mod-Beschreibung (z.B. auf Nexus Mods): Erwähnt sie **UE4SS**, **RE-UE4SS**, **Lua**, **Scripts**, **dlls** oder **LogicMods**, läuft die Mod **nicht** auf Deinem Server. Reine `.pak`-Mods ohne solche Voraussetzungen funktionieren.

> [!WARNING]
> Mod-Support in Palworld gilt als experimentell und kann zu Abstürzen oder beschädigten Speicherständen führen – die Nutzung erfolgt auf eigene Gefahr. Erstelle vorher ein Backup Deines [Savegames](/tutorials/gameserver/palworld/upload-savegame). Nach Spiel-Updates können Mods inkompatibel sein – entferne sie im Zweifel, bis die Mod-Autoren sie aktualisiert haben.

## .pak-Mod auf dem Server installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Ordner anlegen**\
   Wechsle in den Ordner `Pal/Content/Paks/` und erstelle dort – falls noch nicht vorhanden – den Unterordner `~mods`:

   ```text
   /Pal/Content/Paks/~mods/
   ```

4. **Mod hochladen**\
   Lade die `.pak`-Datei der Mod in den Ordner `~mods` hoch.

5. **Server starten**\
   Starte Deinen Server. Die Mod wird beim Start automatisch geladen.

> [!IMPORTANT]
> Je nach Mod müssen auch die **Spieler** dieselbe `.pak`-Datei clientseitig installieren (auf dem eigenen PC unter `Pal/Content/Paks/~mods/` im Spielverzeichnis), damit die Inhalte korrekt angezeigt werden. Prüfe dazu die Beschreibung der jeweiligen Mod.

## Mod entfernen

Lösche die `.pak`-Datei aus dem Ordner `/Pal/Content/Paks/~mods/` (bei gestopptem Server) und starte den Server neu.

## Clientseitige Mods

Viele Mods sind rein clientseitig (zum Beispiel Optik-, Sound- oder UI-Anpassungen) und funktionieren unabhängig vom Server. Diese installiert jeder Spieler lokal auf dem eigenen PC:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/) – Mod abonnieren, sie wird automatisch im Spiel geladen
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods) und [CurseForge](https://www.curseforge.com/palworld) – Installation gemäß der jeweiligen Mod-Beschreibung

> [!NOTE]
> Das offizielle Mod-System samt Steam-Workshop-Integration funktioniert serverseitig laut Pocketpair ausschließlich auf dem **Windows**-Dedicated-Server. Sobald Pocketpair Linux-Unterstützung ergänzt, aktualisieren wir diese Anleitung.
