---
description: Schritt-für-Schritt-Anleitung, wie du Mods auf deinem V Rising Server hinzufügst.
---

# So fügst du Mods auf deinem V Rising Server hinzu

:::: danger Achtung
Alle Spieler müssen die **gleichen Mods** installiert haben, um dem Server beitreten zu können.
::::

:::: info Info
V Rising verwendet **BepInEx** als Mod-Framework. BepInEx ist auf deinem Server bereits vorinstalliert.
::::

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von [Thunderstore](https://thunderstore.io/c/v-rising/) oder [NexusMods](https://www.nexusmods.com/vrising) herunter.

2. <b>Server stoppen</b><br>
   Öffne die Verwaltung und stoppe deinen V Rising Server.

3. <b>SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mods hochladen</b><br>
   Lade die `.dll`-Dateien der Mods in den Ordner `/BepInEx/plugins/` hoch.

5. <b>Server starten</b><br>
   Starte deinen Server, damit die Mods geladen werden.
