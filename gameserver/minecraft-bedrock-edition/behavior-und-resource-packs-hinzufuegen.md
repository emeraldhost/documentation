---
description: Behavior und Resource Packs auf einem Minecraft Bedrock Server hinzufügen
---

# So fügst du Behavior und Resource Packs auf deinem Minecraft Bedrock Server hinzu

Du kannst Behavior Packs und Resource Packs auf deinem Server installieren, um das Spielerlebnis zu erweitern. Packs werden als Ordner hochgeladen und anschließend per JSON-Datei in der Welt aktiviert.

## Pack hochladen

1. <b>Pack herunterladen</b><br>
   Lade das gewünschte Pack herunter. Falls es als `.mcpack` oder `.mcaddon` vorliegt, benenne die Datei in `.zip` um und entpacke sie.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Pack-Ordner hochladen</b><br>
   Lade den entpackten Ordner in das entsprechende Verzeichnis hoch:

   | Pack-Typ | Verzeichnis |
   |----------|-------------|
   | Behavior Pack | `/behavior_packs/` |
   | Resource Pack | `/resource_packs/` |

## Pack aktivieren

5. <b>UUID und Version ermitteln</b><br>
   Öffne die Datei `manifest.json` im hochgeladenen Pack-Ordner. Kopiere die Werte `uuid` und `version` aus dem `header`-Bereich:

   ```json
   {
     "header": {
       "uuid": "dein-pack-uuid",
       "version": [1, 0, 0]
     }
   }
   ```

6. <b>JSON-Datei bearbeiten</b><br>
   Öffne (oder erstelle) die entsprechende JSON-Datei im Welt-Ordner deines Servers (z.B. `/worlds/Bedrock level/`):

   | Pack-Typ | Datei |
   |----------|-------|
   | Behavior Pack | `world_behavior_packs.json` |
   | Resource Pack | `world_resource_packs.json` |

   Trage das Pack mit `pack_id` und `version` ein:

   ```json
   [
     {
       "pack_id": "dein-pack-uuid",
       "version": [1, 0, 0]
     }
   ]
   ```

   Für mehrere Packs fügst du weitere Einträge mit Komma getrennt hinzu.

7. <b>Server starten</b><br>
   Speichere die Dateien und starte deinen Server.

:::: warning Achtung
Verwende immer die `uuid` aus dem `header`-Bereich der `manifest.json`, nicht die aus dem `modules`-Bereich.
::::

:::: info Hinweis
Einige Packs erfordern, dass alle Spieler das Resource Pack ebenfalls auf ihrem Client installiert haben.
::::
