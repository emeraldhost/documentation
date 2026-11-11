---
slug: "welt-seed-aendern"
language: "de"
title: "So änderst Du den Welt Seed Deines Stormforge Servers"
description: "Welt Seed Deines Stormforge Servers in der settings.json eintragen und mit einer neuen Welt wirksam machen."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt Seed ändern"
sort: 10
related: ["gameserver/stormforge/reset-world", "gameserver/stormforge/change-world-settings", "gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame"]
---

Der Welt Seed ist die Grundlage der Welt-Generierung. Bei Stormforge steht er als Text im Schlüssel `seed` im Block `worldSettings` der Datei `settings.json`. Im Spiel wird bei Seeds zwischen Groß- und Kleinschreibung unterschieden, übernimm einen Seed deshalb genau so, wie Du ihn bekommen hast.

> [!WARNING]
> Der Seed wird nur verwendet, wenn eine neue Welt generiert wird. Ein neuer Seed baut eine bestehende Welt nicht um. Damit er wirkt, brauchst Du eine neue Welt, siehe [Welt zurücksetzen](/tutorials/gameserver/stormforge/reset-world).

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Bearbeite die Datei nur bei gestopptem Server, denn der laufende Server schreibt sie selbst neu.

2. **settings.json öffnen**\
   Öffne in der Verwaltung den [Datei-Browser](/tutorials/gameserver/use-file-browser) und wähle bei der Datei `settings.json` im Menü (⋮) **Bearbeiten**. Alternativ bearbeitest Du die Datei per [SFTP](/tutorials/gameserver/establish-sftp-connection):

   ```text
   /settings.json
   ```

3. **Seed eintragen**\
   Trage im Block `worldSettings` in der Zeile `seed` Deinen Seed als Text in Anführungszeichen ein und speichere die Datei:

   ```json
   "seed": "Smaragdkueste",
   ```

   Die übrigen Zeilen lässt Du unverändert.

4. **Neue Welt generieren lassen**\
   Folge jetzt der Anleitung [Welt zurücksetzen](/tutorials/gameserver/stormforge/reset-world), Dein Server ist dafür bereits gestoppt. Beim Start am Ende dieser Anleitung generiert der Server eine neue Welt mit Deinem Seed.

> [!NOTE]
> Im Auslieferungszustand ist der Seed leer (`"seed": ""`).

> [!TIP]
> Achte darauf, dass die Datei gültiges JSON bleibt, also Anführungszeichen und das Komma am Zeilenende erhalten bleiben. Was bei einer fehlerhaften `settings.json` passiert, liest Du unter [Welt-Einstellungen ändern](/tutorials/gameserver/stormforge/change-world-settings).
