---
description: Admin auf einem BeamMP Server hinzufügen
---

# So fügst du einen Admin auf deinem BeamMP Server hinzu

BeamMP verfügt standardmäßig über kein integriertes Admin-System. Admins werden über serverseitige Lua-Plugins verwaltet.

## Admin-Plugin installieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Plugin herunterladen</b><br>
   Lade ein Admin-Plugin aus dem BeamMP-Forum oder einer vertrauenswürdigen Quelle herunter.

4. <b>Plugin hochladen</b><br>
   Lade das Plugin in das folgende Verzeichnis auf deinem Server hoch:

   ```
   /Resources/Server/
   ```

5. <b>Plugin konfigurieren</b><br>
   Öffne die Konfigurationsdatei des Plugins und trage dort die gewünschten Admins ein. Die genauen Schritte hängen vom jeweiligen Plugin ab.

6. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server.

:::: warning Wichtig
Verwende nur Plugins aus vertrauenswürdigen Quellen. Prüfe den Code oder die Bewertungen, bevor du ein Plugin installierst.
::::

:::: info Hinweis
Da es kein einheitliches Admin-System gibt, unterscheiden sich die verfügbaren Befehle und Berechtigungen je nach verwendetem Plugin. Lies die Dokumentation des jeweiligen Plugins für weitere Details.
::::
