---
description: Mods auf einem Necesse Server hinzufügen
---

# So fügst du Mods zu deinem Necesse Server hinzu

Mods sind in Necesse einzelne **`.jar`-Dateien**. Dein Server lädt sie aus einem eigenen Ordner, den du per SFTP befüllst.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](backup-erstellen.md) – Mods können die Welt dauerhaft verändern.
::::

:::: info Kein automatischer Workshop-Download
Dein Server kann Mods **nicht** selbst aus dem Steam Workshop laden. Du lädst die `.jar`-Datei jedes Mods immer manuell hoch.
::::

:::: danger Startparameter beachten
Necesse liest den Ordner `mods` nur, wenn der Startbefehl deines Servers den Parameter `-mod ./mods` enthält. Kontrolliere nach dem Neustart in der Konsole, ob deine Mods aufgelistet werden. Fehlen sie dort, ergänzen wir den Parameter gerne kostenlos für dich – schreibe uns dazu einfach ein Support-Ticket.
::::

## Mod-Datei besorgen

1. <b>Mod auswählen</b><br>
   Suche dir den gewünschten Mod im Steam Workshop von Necesse oder auf der Seite des Mod-Autors.

2. <b>`.jar`-Datei beschaffen</b><br>
   Du benötigst die reine `.jar`-Datei des Mods. Bietet der Autor keinen Direktdownload an, abonniere den Mod im Steam Workshop und starte Necesse einmal – das Spiel lädt den Mod dann herunter und legt die `.jar`-Datei in deinem lokalen Mod-Ordner ab:

   ```
   %appdata%\Necesse\mods
   ```

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
   /mods/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, lege ihn im Hauptverzeichnis deines Servers an. Der Name muss exakt `mods` lauten – dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.
   ::::

4. <b>`.jar`-Datei hochladen</b><br>
   Lade die `.jar`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an – der Server liest ausschließlich die Dateien, die direkt im Ordner liegen.

5. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

6. <b>Konsole prüfen</b><br>
   Beim Start listet dein Server die erkannten Mods in der Konsole auf. Erscheint dein Mod dort, wurde er geladen.

:::: danger Wichtig
Alle Mods, die **nicht** als `clientside` gekennzeichnet sind, müssen auf dem Server **und** bei jedem Spieler in derselben Version installiert sein. Fehlt ein solcher Mod auf einer Seite oder liegt er in einer anderen Version vor, schlägt der Beitritt fehl. Jeder Spieler abonniert den Mod dafür im Steam Workshop und aktiviert ihn im Mod-Menü des Spiels. Mods, die der Autor als `clientside` markiert hat, kannst du dagegen allein nutzen – der Server braucht sie nicht.
::::

## Mods entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei löschen</b><br>
   Lösche die entsprechende `.jar`-Datei aus dem Ordner `/mods/`.

3. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Entfernst du einen Mod, der Blöcke, Gegenstände oder Gegner zur Welt hinzugefügt hat, verschwinden dessen Inhalte aus deiner Welt. Spiele im Zweifel ein [Backup](backup-erstellen.md) zurück, statt den Mod einfach zu löschen.
::::

:::: warning Mods werden nicht geladen
Taucht dein Mod nach dem Neustart nicht in der Konsole auf, prüfe zuerst Schreibweise und Ablageort der Datei: Sie muss direkt in `/mods/` liegen und auf `.jar` enden. Wird weiterhin kein Mod erkannt, fehlt in der Regel der Startparameter `-mod ./mods` – melde dich dafür per Support-Ticket bei uns.
::::

:::: info Hinweis
Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere deine Mods in diesem Fall oder entferne sie vorübergehend aus dem Ordner `/mods/`.
::::
