---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Mindustry Server hinzu"
description: "Mods auf einem Mindustry Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/mindustry/add-admin", "gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/download-savegame"]
---

Mindustry unterscheidet zwei Arten von Erweiterungen, die beide in denselben Ordner gehören:

| Art | Wirkung |
|-----|---------|
| **Mod** | Fügt Inhalte wie Blöcke, Einheiten oder Items hinzu. Muss auf dem Server **und** bei jedem Spieler installiert sein. |
| **Plugin** | Läuft ausschließlich auf dem Server, meist für zusätzliche Befehle oder Spielmodi. Spieler brauchen es **nicht**. |

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](/tutorials/gameserver/mindustry/create-backup) – Mods können Deine Karte dauerhaft verändern.

> [!NOTE]
> **Kein automatischer Download**
>
> Dein Server lädt Mods **nicht** selbst herunter, und er verteilt sie auch nicht an die Spieler. Du lädst jede Datei manuell hoch, und jeder Spieler installiert die Mods bei sich selbst.

## Mod-Datei besorgen

1. **Mod auswählen**\
   Suche Dir den gewünschten Mod im Mod-Browser des Spiels oder auf der Seite des Mod-Autors.

2. **Datei herunterladen**\
   Dein Server akzeptiert folgende Formate:

   | Format | Hinweis |
   |--------|---------|
   | `.jar` | Typisch für Java-Mods und Plugins |
   | `.zip` | Typisch für Mods, die mit JSON bzw. HJSON gebaut sind |
   | Entpackter Ordner | Muss direkt eine `mod.json`, `mod.hjson`, `plugin.json` oder `plugin.hjson` enthalten |

3. **Version prüfen**\
   Achte darauf, dass der Mod zur Spielversion Deines Servers passt. Mods für eine andere Version können den Serverstart verhindern.

## Mod hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Ordner öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /config/mods/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, lege ihn an. Die Schreibweise muss exakt `config/mods` lauten – Dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung. Behalte auch die Dateinamen der Mods unverändert bei.

4. **Datei hochladen**\
   Lade die Datei direkt in diesen Ordner hoch.

5. **Server starten**\
   Starte Deinen Server über die Verwaltung. Änderungen im Mod-Ordner werden ausschließlich beim Serverstart eingelesen – einen Befehl zum Nachladen von Mods gibt es nicht.

6. **Mods prüfen**\
   Öffne in der Verwaltung die **Konsole** und gib ein:

   ```text
   mods
   ```

   Der Server listet alle geladenen Mods mit Version und Status auf und nennt am Ende den verwendeten Mod-Ordner. Details zu einem einzelnen Mod zeigt Dir:

   ```text
   mod <Name>
   ```

## Mods bei den Spielern

> [!IMPORTANT]
> Beim Verbinden vergleicht der Server seine Modliste mit der des Spielers. **Name und Version müssen exakt übereinstimmen.** Passt etwas nicht, wird der Spieler mit der Meldung `Incompatible mods!` abgewiesen. Die Meldung nennt dem Spieler dabei, welche Mods ihm fehlen (`Missing`) und welche er zu viel hat (`Unnecessary mods`).

Jeder Spieler installiert die Mods deshalb selbst – über den Mod-Browser im Spiel oder manuell im Mod-Menü. Ein Download vom Server findet nicht statt.

> [!TIP]
> Mit `mods` in der Konsole liest Du Name und Version exakt so ab, wie der Server sie erwartet. Genau diese Werte müssen bei Deinen Spielern installiert sein.

## Plugins

Plugins sind Java-Erweiterungen, die nur auf Servern laufen. Sie bringen typischerweise neue Befehle oder Spielmodi mit und erkennen sich an ihrer Meta-Datei `plugin.json` beziehungsweise `plugin.hjson`.

> [!NOTE]
> Plugins sind für Spieler unsichtbar: Sie fließen nicht in den Modabgleich ein. Deine Spieler müssen ein Plugin also weder herunterladen noch installieren. Auch Plugins gehören in den Ordner `/config/mods/`.

## Mods entfernen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Datei löschen**\
   Lösche die entsprechende Datei aus dem Ordner `/config/mods/`.

3. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Entfernst Du einen Mod, der Blöcke, Einheiten oder Items zu Deiner Karte hinzugefügt hat, verschwinden dessen Inhalte aus dem Spielstand. Spiele im Zweifel ein [Backup](/tutorials/gameserver/mindustry/create-backup) zurück, statt den Mod einfach zu löschen.

> [!WARNING]
> **Mod wird nicht geladen**
>
> Taucht Dein Mod nach dem Neustart nicht in der Ausgabe von `mods` auf, prüfe Ablageort und Schreibweise: Die Datei muss direkt in `/config/mods/` liegen und auf `.jar` oder `.zip` enden – oder als Ordner eine Meta-Datei enthalten.

> [!NOTE]
> Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere Deine Mods in diesem Fall oder entferne sie vorübergehend aus dem Ordner `/config/mods/`.
