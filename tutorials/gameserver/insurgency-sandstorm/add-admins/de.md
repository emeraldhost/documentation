---
slug: "admins-hinzufuegen"
language: "de"
title: "So fügst Du Admins auf Deinem Insurgency: Sandstorm Server hinzu"
description: "Admins auf einem Insurgency: Sandstorm Server hinzufügen"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admins hinzufügen"
sort: 1
related: ["gameserver/insurgency-sandstorm/add-bots", "gameserver/insurgency-sandstorm/add-mods", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters"]
---

Admins werden über die Datei `Admins.txt` festgelegt, indem Du die **SteamID64** der jeweiligen Spieler einträgst. Ein Admin kann anschließend im Spiel das Admin-Menü öffnen (standardmäßig über die **Minus-Taste** des Nummernblocks).

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Ordner anlegen**\
   Wechsle in den Ordner `Insurgency/Config/Server/`. Falls die Ordner `Config` und `Server` noch nicht existieren, lege sie an.

4. **Admins.txt erstellen**\
   Erstelle in diesem Ordner die Datei `Admins.txt` (falls noch nicht vorhanden).

5. **SteamID64 eintragen**\
   Trage die [SteamID64](/tutorials/gameserver/steamid64-find-out) jedes Admins ein – **eine ID pro Zeile**:

   ```text
   76561198000000000
   76561198000000001
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server. Die Änderungen werden erst nach einem Neustart (oder Map-Wechsel) übernommen.

> [!TIP]
> Du kannst mehrere Admin-Listen mit unterschiedlichen Namen anlegen und über den Startparameter `-AdminList=Dateiname` auswählen, welche geladen wird (Dateiname ohne `.txt`). So lässt sich z.B. schnell zwischen verschiedenen Admin-Teams umschalten.

> [!NOTE]
> Achte darauf, dass die Datei exakt `Admins.txt` heißt (nicht `Admins.txt.txt` – Windows blendet bekannte Dateiendungen standardmäßig aus).
