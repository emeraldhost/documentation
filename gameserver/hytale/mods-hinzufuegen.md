---
description: Mods auf einem Hytale Server installieren
---

# So installierst du Mods auf einem Hytale Server

:::: info Hinweis
Stoppe deinen Server bevor du Mods installierst, da diese sonst nicht korrekt geladen werden.
::::

:::: tip Tipp
Mods für Hytale kannst du z.B. von [CurseForge](https://www.curseforge.com/hytale) herunterladen. Achte darauf, dass der Mod die Hytale-Version deines Servers unterstützt. Auf CurseForge siehst du das unter **Game Versions** (z.B. `0.6`). Die Version deines Servers zeigt die Konsole beim Start an (z.B. `Version: 0.6.8`).
::::

## So installierst du Mods

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Mod herunterladen</b><br>
   Lade den gewünschten Mod als `.jar` oder `.zip` Datei herunter.

3. <b>Mod hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die Mod-Datei in den `mods/`-Ordner hoch.

4. <b>Server starten</b><br>
   Starte deinen Server, damit der Mod geladen wird.

## So entfernst du Mods

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Mod löschen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lösche die Mod-Datei aus dem `mods/`-Ordner.

3. <b>Server starten</b><br>
   Starte deinen Server.

## So installierst du Early Plugins

Early Plugins sind besondere Plugins, die den Code des Servers schon beim Start verändern. Hytale unterstützt sie offiziell nicht und warnt, dass sie zu Stabilitätsproblemen führen können. Installiere ein Early Plugin nur, wenn ein Mod das ausdrücklich verlangt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Early Plugins aktivieren</b><br>
   Navigiere in der Verwaltung zu den **Einstellungen** und setze das Feld **Aktiviere Early Plugins** auf `1`. Ohne diese Einstellung startet der Server nicht von selbst, sobald Early Plugins vorhanden sind, sondern verlangt eine zusätzliche Bestätigung.

3. <b>Early Plugin hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die `.jar` Datei in den Ordner `earlyplugins/` im Hauptverzeichnis hoch. Gibt es den Ordner noch nicht, lege ihn an.

4. <b>Server starten</b><br>
   Starte deinen Server. Wurde das Early Plugin geladen, zeigt die Konsole beim Start die Warnung `This is unsupported and may cause stability issues.` an.

:::: tip Tipp
Um ein Early Plugin zu entfernen, lösche die Datei aus dem Ordner `earlyplugins/`. Liegen dort keine Early Plugins mehr, kannst du **Aktiviere Early Plugins** wieder auf `0` setzen.
::::

:::: warning Achtung
Hytale befindet sich im Early Access. Mods können Stabilitätsprobleme verursachen. Nach größeren Hytale-Updates funktionieren ältere Mods teilweise nicht mehr, bis ihr Autor sie aktualisiert hat, und können sogar verhindern, dass dein Server startet. Erstelle vor der Installation ein [Backup](backup-erstellen.md) deines Servers.
::::
