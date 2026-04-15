---
description: uMod (ehemals Oxide) auf einem Rust Server installieren
---

# So installierst du uMod auf deinem Rust Server

uMod (ehemals Oxide) ist das meistverwendete Mod-Framework für Rust und bietet Zugriff auf tausende Plugins. Auf EmeraldHost kannst du uMod direkt über die Verwaltung aktivieren.

:::: warning Achtung
uMod funktioniert nicht im `staging`-Branch. Ist uMod trotzdem aktiviert, schlagen Client-Verbindungen mit folgender Fehlermeldung fehl:

```
Disconnected: Connection Attempt Failed
```

Wechsle den Branch vor der Installation wie unten beschrieben.
::::

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>uMod aktivieren</b><br>
   Setze das Feld **uMod** auf aktiviert.

4. <b>Branch wechseln</b><br>
   Ändere das Feld **Branch** von `staging` auf `workcart` und speichere die Einstellungen.

5. <b>Server neu installieren</b><br>
   Klicke oben rechts auf die drei Punkte und wähle **Neuinstallieren**. Bestätige den Vorgang, damit der Server mit dem neuen Branch und uMod neu aufgesetzt wird.

   :::: warning Achtung
   Bei der Neuinstallation werden alle Server-Dateien zurückgesetzt. Erstelle vorher ein [Backup](backup-erstellen.md), wenn du deinen aktuellen Spielstand behalten möchtest.
   ::::

6. <b>Server starten</b><br>
   Starte deinen Server. uMod wird automatisch geladen.

## Plugins hinzufügen

Nach der Installation von uMod kannst du Plugins im Ordner `/oxide/plugins/` ablegen. uMod erkennt neue `.cs`-Dateien automatisch und lädt sie bei laufendem Server nach.

Plugins findest du unter anderem hier:

- [uMod Plugin-Liste](https://umod.org/plugins)

:::: tip Tipp
Prüfe nach jedem Rust-Update, ob deine Plugins noch kompatibel sind. Viele Plugins müssen nach größeren Spielupdates aktualisiert werden.
::::
