---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem BeamMP Server hinzu"
description: "Admin auf einem BeamMP Server hinzufügen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["beammp"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/beammp/add-mods", "gameserver/beammp/add-savegame", "gameserver/beammp/change-map", "gameserver/beammp/change-max-cars"]
---

BeamMP verfügt standardmäßig über kein integriertes Admin-System. Admins werden über serverseitige Lua-Plugins verwaltet.

## Admin-Plugin installieren

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Plugin herunterladen**\
   Lade ein Admin-Plugin aus dem BeamMP-Forum oder einer vertrauenswürdigen Quelle herunter.

4. **Plugin hochladen**\
   Lade das Plugin in das folgende Verzeichnis auf Deinem Server hoch:

   ```text
   /Resources/Server/
   ```

5. **Plugin konfigurieren**\
   Öffne die Konfigurationsdatei des Plugins und trage dort die gewünschten Admins ein. Die genauen Schritte hängen vom jeweiligen Plugin ab.

6. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server.

> [!WARNING]
> **Wichtig**
>
> Verwende nur Plugins aus vertrauenswürdigen Quellen. Prüfe den Code oder die Bewertungen, bevor Du ein Plugin installierst.

> [!NOTE]
> Da es kein einheitliches Admin-System gibt, unterscheiden sich die verfügbaren Befehle und Berechtigungen je nach verwendetem Plugin. Lies die Dokumentation des jeweiligen Plugins für weitere Details.
