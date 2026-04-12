---
description: Mods auf einem Minecraft Java Server installieren
---

# So fügst du Mods auf deinem Minecraft Java Server hinzu

Du kannst Mods auf deinem Server installieren, um neue Inhalte, Mechaniken oder Verbesserungen hinzuzufügen.

:::: info Hinweis
Mods funktionieren nur mit Mod-fähigen Server-Versionen wie **Forge**, **NeoForge**, **Fabric** oder **Quilt**. Vanilla-, Spigot- oder Paper-Server unterstützen keine Mods. Wenn du stattdessen Plugins verwenden möchtest, findest du hier die Anleitung: [Plugins installieren](plugins-installieren.md).
::::

## Wo finde ich Mods?

Mods findest du auf folgenden Plattformen:

- [Modrinth](https://modrinth.com/mods)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods)

:::: warning Wichtig
Lade Mods nur von vertrauenswürdigen Quellen herunter. Mods aus unbekannten Quellen können Schadcode enthalten. Achte darauf, dass die Mod mit deiner Minecraft-Version und deinem Mod-Loader (Forge, Fabric etc.) kompatibel ist.
::::

## Mods hinzufügen

1. <b>Mod herunterladen</b><br>
   Lade die gewünschte Mod als `.jar`-Datei herunter. Stelle sicher, dass sie zu deinem Mod-Loader und deiner Minecraft-Version passt.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mod hochladen</b><br>
   Lade die `.jar`-Datei in den Ordner `/mods/` hoch.

5. <b>Server starten</b><br>
   Starte deinen Server.

:::: tip Tipp
Nach dem ersten Start erstellt die Mod meist einen eigenen Ordner unter `/config/` mit Konfigurationsdateien, die du anpassen kannst.
::::

## Mod entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Mod löschen</b><br>
   Lösche die `.jar`-Datei der Mod aus dem `/mods/`-Ordner.

3. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Die meisten Mods müssen sowohl auf dem Server als auch auf dem Client jedes Spielers installiert sein. Prüfe die Mod-Beschreibung, ob eine clientseitige Installation nötig ist.
::::
