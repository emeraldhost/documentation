---
description: Plugins auf einem Minecraft Java Edition Server installieren
---

# So installierst du Plugins auf einem Minecraft Java Server

## Voraussetzungen

Plugins funktionieren nur mit Plugin-fähigen Server-Versionen wie **Spigot**, **Paper**, **Purpur** oder **Pufferfish**. Vanilla-Server unterstützen keine Plugins.

## Wo finde ich Plugins?

Plugins findest du auf folgenden Plattformen:

- [Modrinth](https://modrinth.com/plugins)
- [Hangar](https://hangar.papermc.io/)
- [SpigotMC](https://www.spigotmc.org/resources/)
- [Bukkit](https://dev.bukkit.org/bukkit-plugins)

::: warning Wichtig
Lade Plugins nur von vertrauenswürdigen Quellen herunter. Plugins aus unbekannten Quellen können Schadcode enthalten.
:::

## Wie installiere ich Plugins?

1. <strong>Lade das Plugin als `.jar` Datei herunter.</strong>

2. <strong>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und navigiere zum `plugins` Ordner.</strong>

3. <strong>Lade die `.jar` Datei in den `plugins` Ordner hoch.</strong>

4. <strong>Starte den Server neu, damit das Plugin geladen wird.</strong>

::: tip Hinweis
Nach dem ersten Start erstellt das Plugin meist einen eigenen Ordner unter `plugins/` mit Konfigurationsdateien, die du anpassen kannst.
:::

## Wie entferne ich ein Plugin?

1. <strong>Stoppe den Server.</strong>

2. <strong>Lösche die `.jar` Datei des Plugins aus dem `plugins` Ordner.</strong>

3. <strong>Lösche optional den zugehörigen Konfigurationsordner unter `plugins/`.</strong>

4. <strong>Starte den Server neu.</strong>
