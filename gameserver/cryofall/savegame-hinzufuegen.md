---
description: Savegame auf einem CryoFall Server hinzufügen
---

# So fügst du ein Savegame zu deinem CryoFall Server hinzu

Die komplette Welt eines CryoFall Servers liegt im Ordner `/Data/Saves/`. Um einen anderen Spielstand zu verwenden, ersetzt du diesen Ordner – einen Weltnamen musst du dafür nirgends eintragen.

:::: info Hinweis
Diese Anleitung gilt für Spielstände, die von einem CryoFall Server stammen – etwa aus einem [heruntergeladenen Savegame](savegame-herunterladen.md) oder von einem anderen Server, den du umziehen möchtest.
::::

:::: warning Achtung
Verwende nur Spielstände, die mit derselben Spielversion erstellt wurden, die auch dein Server nutzt. Spielstände älterer Versionen sind nach einem Update nicht mehr kompatibel.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er regelmäßig in den Spielstand.

2. <b>Backup erstellen</b><br>
   Sichere deinen bisherigen Stand, bevor du ihn ersetzt: [Backup erstellen](backup-erstellen.md).

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Data/
   ```

5. <b>Alten Spielstand entfernen</b><br>
   Lösche den vorhandenen Ordner `Saves` samt Inhalt.

   :::: warning Achtung
   Damit ist die bisherige Welt deines Servers weg. Überspringe Schritt 2 also nicht, falls du zurückwechseln möchtest.
   ::::

6. <b>Neuen Spielstand hochladen</b><br>
   Lade deinen Ordner `Saves` mit seinem kompletten Inhalt nach `/Data/` hoch. Der Ordnername muss exakt `Saves` lauten – dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start lädt er den vorhandenen Spielstand.

## Mehrere Welten über Slots verwalten

CryoFall speichert jede Welt in einem nummerierten Slot. So kannst du mehrere Welten parallel aufbewahren und zwischen ihnen wechseln, ohne Dateien zu verschieben.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Konfiguration öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) folgende Datei:

   ```
   /Data/SettingsServer.xml
   ```

3. <b>Slot ändern</b><br>
   Trage die gewünschte Slot-Nummer ein:

   ```xml
   <savegame_slot_id>0</savegame_slot_id>
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Existiert für den Slot bereits eine Welt, wird sie geladen – andernfalls erzeugt der Server eine neue Welt.

:::: danger Wichtig
Lädst du einen fremden Spielstand hoch, muss die Slot-Nummer zu diesem Spielstand passen. Wird nach dem Start eine leere Welt erzeugt, ist in der Regel der falsche Slot eingetragen. Stoppe den Server, ändere `savegame_slot_id` und starte ihn erneut – der hochgeladene Spielstand geht dabei nicht verloren.
::::

## Welt zurücksetzen

Möchtest du komplett neu starten, löschst du einfach den Spielstand – dein Server erzeugt beim nächsten Start automatisch eine neue Welt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Backup erstellen</b><br>
   Sichere die alte Welt, falls du sie später noch brauchst: [Backup erstellen](backup-erstellen.md).

3. <b>Spielstand löschen</b><br>
   Lösche per [SFTP](../sftp-verbindung-herstellen.md) den Ordner:

   ```
   /Data/Saves/
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Er generiert eine neue Welt.

:::: warning Achtung
Beim Zurücksetzen gehen auch alle Charaktere, Basen und Fortschritte deiner Spieler verloren. Kündige einen Wipe deshalb rechtzeitig an.
::::

:::: info Einzelspieler-Welten
Für Welten, die du lokal in deinem Spiel gestartet hast, liegt uns kein dokumentierter Weg vor, sie auf einen Server zu übertragen. Arbeite deshalb mit Spielständen, die von einem Server stammen.
::::

:::: warning Änderungen aus der Verwaltung
Servername, Beschreibung, Serverliste, maximale Spielerzahl, Speicherintervall und Anzahl der Speicherstände werden bei jedem Start aus der **Verwaltung** in die Datei `SettingsServer.xml` geschrieben. Änderst du diese Werte in der Datei, gehen sie beim nächsten Start verloren – stelle sie ausschließlich in der Verwaltung ein.
::::
