---
description: Mods auf einem Factorio Server hinzufügen
---

# So fügst du Mods zu deinem Factorio Server hinzu

Factorio hat ein eigenes Mod-System und nutzt **keinen** Steam Workshop. Mods kommen als `.zip`-Datei vom offiziellen Mod-Portal [mods.factorio.com](https://mods.factorio.com/) oder aus dem Mod-Portal im Spiel.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst oder entfernst. Nach einem Spielupdate können Mods inkompatibel sein und den Serverstart verhindern.
::::

## Mod herunterladen

1. <b>Mod-Portal öffnen</b><br>
   Öffne [mods.factorio.com](https://mods.factorio.com/) und suche die gewünschte Mod.

2. <b>Passende Version wählen</b><br>
   Lade die `.zip`-Datei herunter, die zur Spielversion deines Servers passt.

3. <b>Datei nicht entpacken</b><br>
   Die Mod bleibt als `.zip`-Datei erhalten – Factorio lädt Mods direkt aus dem Archiv.

## Mods auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mods hochladen</b><br>
   Lade die `.zip`-Dateien in folgendes Verzeichnis hoch. Existiert der Ordner noch nicht, lege ihn an:

   ```
   /mods/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

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

:::: warning Achtung
Achte beim Bearbeiten auf gültiges JSON – ein fehlendes Komma oder eine überzählige Klammer kann dazu führen, dass der Server die Datei verwirft oder nicht startet.
::::

:::: danger Wichtig
Alle Spieler benötigen **exakt dieselben Mods in derselben Version** wie der Server, sonst schlägt die Prüfsummen-Kontrolle beim Beitreten fehl.
::::

:::: tip Automatischer Mod-Sync
Beim Beitritt zu einem Server mit Mods bietet Factorio an, die Mods mit dem Server abzugleichen. Bestätigst du den Mod-Sync, werden alle benötigten Mods automatisch heruntergeladen und aktiviert.
::::

:::: info Space Age und weitere Erweiterungen
Der Server bringt die Mods `base`, `elevated-rails`, `quality` und `space-age` bereits mit. Sind die Erweiterungs-Mods aktiv, können Spieler **ohne** das DLC nicht beitreten. Über `mods/mod-list.json` lassen sie sich auf `"enabled": false` setzen. Es gibt allerdings Berichte, dass der Server die Erweiterungs-Mods beim Start wieder aktiviert – eine offizielle Lösung dafür gibt es bislang nicht. Prüfe nach einem Neustart daher in der `mod-list.json`, ob die Einstellung erhalten geblieben ist.
::::
