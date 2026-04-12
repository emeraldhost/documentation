---
description: Plugins auf einem Minecraft Java Edition Server installieren
---

# So installierst du Plugins auf einem Minecraft Java Server

Du kannst Plugins auf deinem Server installieren, um neue Funktionen, Verwaltungstools oder Spielmechaniken hinzuzufügen.

:::: info Hinweis
Plugins funktionieren nur mit Plugin-fähigen Server-Versionen wie **Spigot**, **Paper**, **Purpur** oder **Pufferfish**. Vanilla-Server unterstützen keine Plugins. Wenn du stattdessen Mods (Forge, Fabric etc.) verwenden möchtest, findest du hier die Anleitung: [Mods hinzufügen](mods-hinzufuegen.md).
::::

## Wo finde ich Plugins?

Plugins findest du auf folgenden Plattformen:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

:::: warning Wichtig
Lade Plugins nur von vertrauenswürdigen Quellen herunter. Plugins aus unbekannten Quellen können Schadcode enthalten.
::::

## Wie installiere ich Plugins?

1. <b>Plugin herunterladen</b><br>
   Lade das Plugin als `.jar` Datei herunter.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zum `plugins` Ordner.

3. <b>Plugin hochladen</b><br>
   Lade die `.jar` Datei in den `plugins` Ordner hoch.

4. <b>Server neu starten</b><br>
   Starte den Server neu, damit das Plugin geladen wird.

:::: tip Hinweis
Nach dem ersten Start erstellt das Plugin meist einen eigenen Ordner unter `plugins/` mit Konfigurationsdateien, die du anpassen kannst.
::::

## Wie entferne ich ein Plugin?

1. <b>Server stoppen</b><br>
   Stoppe den Server.

2. <b>Plugin löschen</b><br>
   Lösche die `.jar` Datei des Plugins aus dem `plugins` Ordner.

3. <b>Konfiguration löschen</b><br>
   Lösche optional den zugehörigen Konfigurationsordner unter `plugins/`.

4. <b>Server neu starten</b><br>
   Starte den Server neu.
