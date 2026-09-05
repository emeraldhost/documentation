---
slug: "welt-herunterladen"
language: "de"
title: "So lädst Du die Welt Deines Hytale Servers herunter"
description: "Welt von einem Hytale Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt herunterladen"
sort: 21
related: ["gameserver/hytale/create-new-world", "gameserver/hytale/disable-npcs", "gameserver/hytale/enable-fall-damage", "gameserver/hytale/enable-pvp"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig, Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /universe/worlds/
   ```

4. **Welt-Ordner herunterladen**\
   Jede Welt liegt hier als eigener Ordner. Lade den Ordner Deiner Welt vollständig auf Deinen PC herunter.

5. **Spielerdaten herunterladen (optional)**\
   Der Spielerfortschritt (Inventar, Position, etc.) liegt nicht in den Welt-Ordnern, sondern eine Ebene höher unter `/universe/players/`. Möchtest Du ihn ebenfalls sichern, lade zusätzlich den Inhalt dieses Ordners herunter.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welche Welt aktuell geladen wird, siehst Du in der `config.json` im Hauptverzeichnis Deines Servers. Im `Defaults` Block gibt der Wert `World` den Namen des Welt-Ordners an.

> [!TIP]
> **Welt wieder einspielen**
>
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](/tutorials/gameserver/hytale/upload-world).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/hytale/create-backup).
