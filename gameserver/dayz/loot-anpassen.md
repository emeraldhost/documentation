---
description: Loot-Verteilung auf einem DayZ Server anpassen
---

# So passt du die Loot-Verteilung auf deinem DayZ Server an

Du kannst die Spawn-Raten und Mengen von Items über die `types.xml` Datei anpassen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>types.xml öffnen</b><br>
   Öffne die Datei `types.xml` im Verzeichnis:

   ```
   /mpmissions/dayzOffline.chernarusplus/db/types.xml
   ```

   :::: info Hinweis
   Bei Livonia liegt die Datei unter `/mpmissions/dayzOffline.enoch/db/types.xml`.
   ::::

4. <b>Item anpassen</b><br>
   Suche das gewünschte Item und passe die Werte an. Beispiel für Munition:

   ```xml
   <type name="Ammo_545x39">
       <nominal>120</nominal>
       <lifetime>14400</lifetime>
       <restock>1800</restock>
       <min>80</min>
       <quantmin>20</quantmin>
       <quantmax>60</quantmax>
       <cost>100</cost>
   </type>
   ```

   | Einstellung | Beschreibung |
   |-------------|-------------|
   | `nominal` | Maximale Anzahl auf der Map |
   | `min` | Minimale Anzahl auf der Map |
   | `lifetime` | Lebenszeit in Sekunden |
   | `restock` | Zeit bis zum Respawn |
   | `quantmin` / `quantmax` | Min./Max. Stack-Größe |
   | `cost` | Spawn-Priorität |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Eine fehlerhafte `types.xml` kann verhindern, dass dein Server startet. Mache vor Änderungen immer ein Backup der Datei.
::::

:::: tip Tipp
Es gibt online Tools wie [DayZ Editor](https://dayzeditor.com/) oder den [DayZ Loot Editor](https://www.dayz-loot-editor.com/), mit denen du die `types.xml` einfacher bearbeiten kannst.
::::
