---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem DayZ Server"
description: "Mods auf einem DayZ Server installieren"
tags: []
date: "2026-01-22"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 6
related: ["gameserver/dayz/add-admin", "gameserver/dayz/add-savegame", "gameserver/dayz/adjust-loot", "gameserver/dayz/change-map"]
---

Es gibt zwei Methoden, um Mods auf Deinem DayZ Server zu installieren: per Modlist-Datei (einfacher) oder manuell (für mehr Kontrolle).

## Methode 1: Modlist-Datei

Diese Methode ist am einfachsten und empfohlen für die meisten Nutzer.

1. **DayZ starten**\
   Starte DayZ und klicke auf **Mods**.

2. **Mods aktivieren**\
   Aktiviere alle Mods, die Du auf Deinem Server haben möchtest.

3. **Modlist exportieren**\
   Klicke auf **More** und wähle **Export list of mods to a file**.

4. **Geladene Mods wählen**\
   Wähle **Only loaded mods** und speichere die `.html` Datei.

5. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

6. **Modlist hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die `.html` Datei als `modlist.html` hoch.

7. **Modlist konfigurieren**\
   Gehe in die **Einstellungen** über Deine Verwaltung und trage den Dateinamen bei **Modliste-Datei (Exportiert aus dem DayZ Launcher)** ein. Standardmäßig ist dort bereits `modlist.html` eingetragen.

8. **Server starten**\
   Starte Deinen Server.

## Methode 2: Manuelle Installation

Diese Methode bietet mehr Kontrolle und ist nötig für Server-Side-Only Mods.

1. **Mod abonnieren**\
   Öffne Steam, wähle DayZ aus Deiner Bibliothek und gehe zum **Workshop** Tab. Abonniere den gewünschten Mod.

> [!WARNING]
> **Hinweis**
>
> Manche Mods haben Abhängigkeiten, die zuerst installiert werden müssen.

2. **DayZ starten**\
   Starte DayZ, damit die Mods heruntergeladen werden.

3. **Mod-Ordner öffnen**\
   Gehe zu **Mods**, wähle einen Mod aus und klicke auf die drei Punkte. Wähle **Open folder**.

4. **Mods komprimieren**\
   Komprimiere die gewünschten Mod-Ordner (beginnen mit `@`) in eine `.zip` Datei.

5. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

6. **Archiv hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die `.zip` Datei hoch.

7. **Archiv entpacken**\
   Entpacke die `.zip` Datei auf dem Server.

8. **Bikey-Dateien kopieren**\
   Öffne den Mod-Ordner und navigiere zum `Keys` Unterordner. Lade alle `.bikey` Dateien herunter und lade sie in den `/keys` Ordner Deines Servers hoch.

9. **Mods aktivieren**\
   Gehe in die **Einstellungen** über Deine Verwaltung und trage die Mod-Namen unter **Zusätzliche Mods** ein, getrennt durch Semikolon:

   ```text
   @CF;@ModName1;@ModName2
   ```

> [!TIP]
> **Hinweis**
>
> Mods unter **Zusätzliche Mods** müssen auch von Spielern installiert werden. Mods unter **Mods** sind Server-Side Only und erfordern keine Installation durch Spieler.

10. **Server starten**\
    Starte Deinen Server.

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Server startet nicht | Prüfe, ob alle Mod-Namen korrekt eingetragen sind |
| Mod Mismatch | Spieler müssen dieselben Mods installiert haben |
| Signatur-Fehler | Prüfe, ob alle `.bikey` Dateien im `/keys` Ordner liegen |
