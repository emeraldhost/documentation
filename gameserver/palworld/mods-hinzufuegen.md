---
description: Mods auf einem Palworld Server hinzufügen
---

# So fügst du Mods zu deinem Palworld Server hinzu

Palworld-Mods gibt es in verschiedenen Typen — und nicht jeder Typ läuft auf einem Linux-Server. Unsere Palworld-Server laufen unter **Linux**, daher gilt:

| Mod-Typ | Auf deinem Server nutzbar? |
|---------|----------------------------|
| `.pak`-Mods (Asset-/Daten-Mods) | ✅ Ja |
| LogicMods (`.pak` im Ordner `LogicMods`, benötigt UE4SS) | ❌ Nein — Windows-only |
| UE4SS-Mods (Lua-Skripte) | ❌ Nein — Windows-only |
| Offizielles Mod-System / Steam Workshop | ❌ Nein — Windows-only |

:::: info So erkennst du den Mod-Typ
Wirf einen Blick in die Mod-Beschreibung (z.B. auf Nexus Mods): Erwähnt sie **UE4SS**, **RE-UE4SS**, **Lua**, **Scripts**, **dlls** oder **LogicMods**, läuft die Mod **nicht** auf deinem Server. Reine `.pak`-Mods ohne solche Voraussetzungen funktionieren.
::::

:::: warning Achtung
Mod-Support in Palworld gilt als experimentell und kann zu Abstürzen oder beschädigten Speicherständen führen — die Nutzung erfolgt auf eigene Gefahr. Erstelle vorher ein Backup deines [Savegames](savegame-hinzufuegen.md). Nach Spiel-Updates können Mods inkompatibel sein — entferne sie im Zweifel, bis die Mod-Autoren sie aktualisiert haben.
::::

## .pak-Mod auf dem Server installieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Ordner anlegen</b><br>
   Wechsle in den Ordner `Pal/Content/Paks/` und erstelle dort — falls noch nicht vorhanden — den Unterordner `~mods`:

   ```
   /Pal/Content/Paks/~mods/
   ```

4. <b>Mod hochladen</b><br>
   Lade die `.pak`-Datei der Mod in den Ordner `~mods` hoch.

5. <b>Server starten</b><br>
   Starte deinen Server. Die Mod wird beim Start automatisch geladen.

:::: danger Wichtig
Je nach Mod müssen auch die **Spieler** dieselbe `.pak`-Datei clientseitig installieren (auf dem eigenen PC unter `Pal/Content/Paks/~mods/` im Spielverzeichnis), damit die Inhalte korrekt angezeigt werden. Prüfe dazu die Beschreibung der jeweiligen Mod.
::::

## Mod entfernen

Lösche die `.pak`-Datei aus dem Ordner `/Pal/Content/Paks/~mods/` (bei gestopptem Server) und starte den Server neu.

## Clientseitige Mods

Viele Mods sind rein clientseitig (zum Beispiel Optik-, Sound- oder UI-Anpassungen) und funktionieren unabhängig vom Server. Diese installiert jeder Spieler lokal auf dem eigenen PC:

- [Steam Workshop](https://steamcommunity.com/app/1623730/workshop/) — Mod abonnieren, sie wird automatisch im Spiel geladen
- [Nexus Mods](https://www.nexusmods.com/games/palworld/mods) und [CurseForge](https://www.curseforge.com/palworld) — Installation gemäß der jeweiligen Mod-Beschreibung

:::: info Hinweis
Das offizielle Mod-System samt Steam-Workshop-Integration funktioniert serverseitig laut Pocketpair ausschließlich auf dem **Windows**-Dedicated-Server. Sobald Pocketpair Linux-Unterstützung ergänzt, aktualisieren wir diese Anleitung.
::::
