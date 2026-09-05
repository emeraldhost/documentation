---
# Kopiere diese Datei nach
# tutorials/<gruppe>/[<bereich>/][<unterkategorie>/]<thema>/de.md und ersetze die
# Beispielwerte. Auskommentierte Felder sind optional: entferne das `#`, um eines
# zu nutzen. Behalte die Reihenfolge bei, alle Anleitungen nutzen sie.

# Pflicht. Kleinbuchstaben, Bindestriche, ein Segment. Der deutsche Themen-Slug.
slug: "datenpakete-installieren"

# Pflicht. Muss zum Dateinamen passen: de.md -> de.
language: "de"

# Pflicht. Wird als Seitenüberschrift angezeigt. Wiederhole ihn nicht im Text.
title: "Datenpakete auf Deinem Minecraft-Server installieren"

# Pflicht. Ein Satz, unter 160 Zeichen. Dient als Teaser und Meta-Description.
description: "Datenpakete auf einem Minecraft-Server bei EmeraldHost hinzufügen und prüfen, ob sie geladen wurden."

# Optionale Schlagworte, sonst die leere Liste stehen lassen.
tags: []

# Pflicht. Veröffentlichungsdatum im Format JJJJ-MM-TT. Ersetze den Platzhalter.
date: "YYYY-MM-DD"

# public, internal oder draft. Standard ist public.
visibility: "public"

# Markiert die Anleitung als veraltet, solange sie auf eine Überarbeitung
# wartet. Die Artikelseite zeigt dann unter dem Kopfbereich einen Warnhinweis
# mit Links zu Support und Community-Discord; die Anleitung bleibt gelistet und
# indexiert. Nicht mit is_featured kombinieren.
# is_deprecated: true

# Datum der letzten inhaltlichen Änderung. Weglassen, solange es `date`
# wiederholt, sonst den Platzhalter ersetzen.
# updated: "YYYY-MM-DD"

# Handlungsaufruf am Seitenende: gameserver, rootserver, domain oder teamspeak.
# cta: "gameserver"

# Produkt-Keys, zu denen die Anleitung gehört. Weglassen, wenn kein Produkt passt.
# product_keys: ["minecraft"]

author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."

# Pflicht. Jede Anleitung erscheint in beiden Sprachen.
available_languages: ["de", "en"]

# Kurzes Label für Listen und die Seitenleiste.
short_title: "Datenpakete installieren"

# Position innerhalb der Kategorie. Frag im Pull Request nach, wenn Du unsicher bist.
# sort: 12

# Verwandte Anleitungen als Ordnerpfade ohne das Präfix tutorials/.
# related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/create-backup"]
---

Zwei oder drei Sätze dazu, was am Ende fertig ist und wann man diese Anleitung
braucht. Zähle die Schritte hier nicht auf, die Seite baut ihr
Inhaltsverzeichnis selbst aus den Überschriften.

> [!TIP]
> Lege ein Backup an, bevor Du Serverdateien änderst. Siehe
> [Backup erstellen](/tutorials/gameserver/minecraft/create-backup).

## Voraussetzungen

- Ein Minecraft-Server bei EmeraldHost.
- Zugriff auf das Dashboard dieses Servers.
- Ein Datenpaket, das zu Deiner Serverversion passt.

## Datenpaket installieren

1. **Server stoppen**\
   Stoppe den Server im Dashboard und warte, bis der Status offline ist.

2. **Per SFTP verbinden**\
   Verbinde Dich mit dem Server, wie in
   [SFTP-Verbindung herstellen](/tutorials/gameserver/establish-sftp-connection)
   beschrieben.

3. **Datenpaket hochladen**\
   Kopiere die `.zip`-Datei in den Ordner `datapacks` Deiner Welt:

   ```text
   /world/datapacks/mein-datenpaket.zip
   ```

4. **Server starten**\
   Starte den Server und beobachte die Konsole, bis die Welt geladen ist.

   ```text
   [INFO] Loaded 1 data pack
   ```

## Ergebnis prüfen

| Was Du siehst                   | Was es bedeutet                          |
| ------------------------------- | ---------------------------------------- |
| Das Paket wird aufgelistet      | Das Datenpaket wurde korrekt geladen     |
| Die Konsole meldet einen Fehler | Das Paket passt nicht zur Version        |
| Im Spiel ändert sich nichts     | Das Paket liegt bereit, ist aber inaktiv |

> [!WARNING]
> Ein Datenpaket für eine andere Minecraft-Version kann die Welt beschädigen.
> Teste ein neues Paket zuerst auf einer Kopie.

## Nächste Schritte

- [Plugins installieren](/tutorials/gameserver/minecraft/install-plugins)
- [Modpack wechseln](/tutorials/gameserver/minecraft/change-modpack)

Wenn etwas nicht klappt, öffne im Dashboard ein Support-Ticket und hänge die
letzten Zeilen aus der Serverkonsole an.
