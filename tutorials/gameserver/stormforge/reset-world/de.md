---
slug: "welt-zuruecksetzen"
language: "de"
title: "So setzt Du die Welt Deines Stormforge Servers zurück"
description: "Starte auf Deinem Stormforge Server mit einer neuen Welt, indem Du den Ordner der bisherigen Welt umbenennst oder löschst."
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
short_title: "Welt zurücksetzen"
sort: 11
related: ["gameserver/stormforge/create-backup", "gameserver/stormforge/download-savegame", "gameserver/stormforge/change-world-seed", "gameserver/stormforge/change-world-settings"]
---

Eine neue Welt bekommst Du, indem Du den Ordner der bisherigen Welt umbenennst oder löschst. Findet der Server beim Start die Dateien der eingetragenen Welt nicht mehr, erzeugt er automatisch eine neue Welt.

> [!WARNING]
> Sichere Deine aktuelle Welt, bevor Du sie zurücksetzt: Erstelle über die Verwaltung ein [Backup](/tutorials/gameserver/stormforge/create-backup) oder lade die Welt auf Deinen PC herunter ([Savegame herunterladen](/tutorials/gameserver/stormforge/download-savegame)). Eine gelöschte Welt bekommst Du ohne Sicherung nicht zurück.

## Welt zurücksetzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Weltname und Seed festlegen (optional)**\
   Soll die neue Welt einen bestimmten Namen tragen, navigiere in der Verwaltung zum **Config-Editor**, trage ihn im Feld **Weltname** ein (höchstens 64 Zeichen) und speichere. Einen bestimmten Seed legst Du ebenfalls jetzt fest: [Welt Seed ändern](/tutorials/gameserver/stormforge/change-world-seed). Beide Angaben werden verwendet, wenn eine neue Welt erzeugt wird.

3. **ID der aktuellen Welt nachsehen**\
   Öffne die Datei `/settings.json` im Hauptverzeichnis Deines Servers, per [SFTP](/tutorials/gameserver/establish-sftp-connection) oder im [Datei-Browser](/tutorials/gameserver/use-file-browser). Der Wert von `worldPrefabID` ist die ID der Welt, die Dein Server gerade lädt:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

   Den Eintrag selbst musst Du nicht ändern.

4. **Welt-Ordner umbenennen oder löschen**\
   Wechsle per SFTP oder im Datei-Browser in folgendes Verzeichnis:

   ```text
   /saves/Worlds/
   ```

   Dort liegt ein Ordner, der so heißt wie die ID aus Schritt 3. Benenne ihn um, z.B. in `3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30-alt`, wenn die alte Welt als Rückfallebene auf dem Server bleiben soll, oder lösche ihn.

5. **Server starten**\
   Starte Deinen Server. Beim Start erzeugt er eine neue Welt.

> [!TIP]
> **Zur alten Welt zurückwechseln**\
> Hast Du den Ordner umbenannt, kannst Du die alte Welt wieder laden: Stoppe den Server, gib dem Ordner seinen ursprünglichen Namen zurück (die ID ohne Zusatz) und trage diese ID in der `/settings.json` bei `worldPrefabID` ein. Starte danach den Server.

> [!NOTE]
> **Nur der richtige Ordner**\
> In `/saves/Worlds/` können mehrere Welt-Ordner nebeneinander liegen. Geladen wird nur die Welt, deren ID in `worldPrefabID` steht. Benenne deshalb genau diesen Ordner um oder lösche ihn. Die Datei `/settings.json` bleibt bestehen, sie enthält Deine Servereinstellungen.

> [!NOTE]
> **Ein neuer Seed allein reicht nicht**\
> Ein geänderter Seed baut eine bestehende Welt nicht um. Er wirkt erst, wenn eine neue Welt erzeugt wird.

> [!TIP]
> Soll die neue Welt nach anderen Regeln laufen, passe die [Welteinstellungen](/tutorials/gameserver/stormforge/change-world-settings) an, bevor Du den Server wieder startest.
