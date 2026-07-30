---
description: Mods auf einem Mindustry Server hinzufügen
---

# So fügst du Mods zu deinem Mindustry Server hinzu

Mindustry unterscheidet zwei Arten von Erweiterungen, die beide in denselben Ordner gehören:

| Art | Wirkung |
|-----|---------|
| **Mod** | Fügt Inhalte wie Blöcke, Einheiten oder Items hinzu. Muss auf dem Server **und** bei jedem Spieler installiert sein. |
| **Plugin** | Läuft ausschließlich auf dem Server, meist für zusätzliche Befehle oder Spielmodi. Spieler brauchen es **nicht**. |

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](backup-erstellen.md) – Mods können deine Karte dauerhaft verändern.
::::

:::: info Kein automatischer Download
Dein Server lädt Mods **nicht** selbst herunter, und er verteilt sie auch nicht an die Spieler. Du lädst jede Datei manuell hoch, und jeder Spieler installiert die Mods bei sich selbst.
::::

## Mod-Datei besorgen

1. <b>Mod auswählen</b><br>
   Suche dir den gewünschten Mod im Mod-Browser des Spiels oder auf der Seite des Mod-Autors.

2. <b>Datei herunterladen</b><br>
   Dein Server akzeptiert folgende Formate:

   | Format | Hinweis |
   |--------|---------|
   | `.jar` | Typisch für Java-Mods und Plugins |
   | `.zip` | Typisch für Mods, die mit JSON bzw. HJSON gebaut sind |
   | Entpackter Ordner | Muss direkt eine `mod.json`, `mod.hjson`, `plugin.json` oder `plugin.hjson` enthalten |

3. <b>Version prüfen</b><br>
   Achte darauf, dass der Mod zur Spielversion deines Servers passt. Mods für eine andere Version können den Serverstart verhindern.

## Mod hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Ordner öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /config/mods/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, lege ihn an. Die Schreibweise muss exakt `config/mods` lauten – dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung. Behalte auch die Dateinamen der Mods unverändert bei.
   ::::

4. <b>Datei hochladen</b><br>
   Lade die Datei direkt in diesen Ordner hoch.

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Änderungen im Mod-Ordner werden ausschließlich beim Serverstart eingelesen – einen Befehl zum Nachladen von Mods gibt es nicht.

6. <b>Mods prüfen</b><br>
   Öffne in der Verwaltung die **Konsole** und gib ein:

   ```
   mods
   ```

   Der Server listet alle geladenen Mods mit Version und Status auf und nennt am Ende den verwendeten Mod-Ordner. Details zu einem einzelnen Mod zeigt dir:

   ```
   mod <Name>
   ```

## Mods bei den Spielern

:::: danger Wichtig
Beim Verbinden vergleicht der Server seine Modliste mit der des Spielers. **Name und Version müssen exakt übereinstimmen.** Passt etwas nicht, wird der Spieler mit der Meldung `Incompatible mods!` abgewiesen. Die Meldung nennt dem Spieler dabei, welche Mods ihm fehlen (`Missing`) und welche er zu viel hat (`Unnecessary mods`).
::::

Jeder Spieler installiert die Mods deshalb selbst – über den Mod-Browser im Spiel oder manuell im Mod-Menü. Ein Download vom Server findet nicht statt.

:::: tip Tipp
Mit `mods` in der Konsole liest du Name und Version exakt so ab, wie der Server sie erwartet. Genau diese Werte müssen bei deinen Spielern installiert sein.
::::

## Plugins

Plugins sind Java-Erweiterungen, die nur auf Servern laufen. Sie bringen typischerweise neue Befehle oder Spielmodi mit und erkennen sich an ihrer Meta-Datei `plugin.json` beziehungsweise `plugin.hjson`.

:::: info Hinweis
Plugins sind für Spieler unsichtbar: Sie fließen nicht in den Modabgleich ein. Deine Spieler müssen ein Plugin also weder herunterladen noch installieren. Auch Plugins gehören in den Ordner `/config/mods/`.
::::

## Mods entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei löschen</b><br>
   Lösche die entsprechende Datei aus dem Ordner `/config/mods/`.

3. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Entfernst du einen Mod, der Blöcke, Einheiten oder Items zu deiner Karte hinzugefügt hat, verschwinden dessen Inhalte aus dem Spielstand. Spiele im Zweifel ein [Backup](backup-erstellen.md) zurück, statt den Mod einfach zu löschen.
::::

:::: warning Mod wird nicht geladen
Taucht dein Mod nach dem Neustart nicht in der Ausgabe von `mods` auf, prüfe Ablageort und Schreibweise: Die Datei muss direkt in `/config/mods/` liegen und auf `.jar` oder `.zip` enden – oder als Ordner eine Meta-Datei enthalten.
::::

:::: info Hinweis
Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere deine Mods in diesem Fall oder entferne sie vorübergehend aus dem Ordner `/config/mods/`.
::::
