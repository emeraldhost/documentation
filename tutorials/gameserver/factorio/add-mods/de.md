---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Factorio Server hinzu"
description: "Mods auf einem Factorio Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/factorio/add-admin", "gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame"]
---

Factorio hat ein eigenes Mod-System und nutzt **keinen** Steam Workshop. Mods kommen als `.zip`-Datei vom offiziellen Mod-Portal [mods.factorio.com](https://mods.factorio.com/) oder aus dem Mod-Portal im Spiel.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst oder entfernst. Nach einem Spielupdate können Mods inkompatibel sein und den Serverstart verhindern.

## Mod herunterladen

1. **Mod-Portal öffnen**\
   Öffne [mods.factorio.com](https://mods.factorio.com/) und suche die gewünschte Mod.

2. **Passende Version wählen**\
   Lade die `.zip`-Datei herunter, die zur Spielversion Deines Servers passt.

3. **Datei nicht entpacken**\
   Die Mod bleibt als `.zip`-Datei erhalten – Factorio lädt Mods direkt aus dem Archiv.

## Mods auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mods hochladen**\
   Lade die `.zip`-Dateien in folgendes Verzeichnis hoch. Existiert der Ordner noch nicht, lege ihn an:

   ```text
   /mods/
   ```

4. **Server starten**\
   Starte Deinen Server.

## Mods aktivieren und deaktivieren

Welche Mods geladen werden, steuert die Datei `mods/mod-list.json`. Sie wird beim ersten Serverstart automatisch angelegt, sobald der Ordner `mods` existiert. Jede Mod steht darin mit ihrem Namen und dem Status `enabled`:

```json
{
  "mods":
  [
    {
      "name": "base",
      "enabled": true
    },
    {
      "name": "meine-mod",
      "enabled": false
    }
  ]
}
```

Setze `enabled` auf `false`, um eine Mod zu deaktivieren, ohne sie zu löschen. Starte den Server nach der Änderung neu.

> [!WARNING]
> Achte beim Bearbeiten auf gültiges JSON – ein fehlendes Komma oder eine überzählige Klammer kann dazu führen, dass der Server die Datei verwirft oder nicht startet. Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/).

> [!IMPORTANT]
> Alle Spieler benötigen **exakt dieselben Mods in derselben Version** wie der Server, sonst schlägt die Prüfsummen-Kontrolle beim Beitreten fehl.

> [!TIP]
> **Automatischer Mod-Sync**
>
> Beim Beitritt zu einem Server mit Mods bietet Factorio an, die Mods mit dem Server abzugleichen. Bestätigst Du den Mod-Sync, werden alle benötigten Mods automatisch heruntergeladen und aktiviert.

> [!NOTE]
> **Space Age und weitere Erweiterungen**
>
> Der Server bringt die Mods `base`, `elevated-rails`, `quality` und `space-age` bereits mit. Sind die Erweiterungs-Mods aktiv, können Spieler **ohne** das DLC nicht beitreten. Über `mods/mod-list.json` lassen sie sich auf `"enabled": false` setzen. Es gibt allerdings Berichte, dass der Server die Erweiterungs-Mods beim Start wieder aktiviert – eine offizielle Lösung dafür gibt es bislang nicht. Prüfe nach einem Neustart daher in der `mod-list.json`, ob die Einstellung erhalten geblieben ist.
