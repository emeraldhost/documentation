---
description: Mods auf einem Arma 3 Server installieren
---

# So installierst du Mods auf deinem Arma 3 Server

Mods liegen bei Arma 3 als Ordner im Hauptverzeichnis deines Servers und beginnen immer mit einem `@` – zum Beispiel `@cba_a3`. Geladen werden sie über zwei Startparameter, die du in der Verwaltung über die entsprechenden Felder setzt.

| Parameter | Bedeutung |
|-----------|-----------|
| `-mod=` | Client-Mods. Diese Mods müssen **alle Spieler** ebenfalls installiert und im Launcher aktiviert haben. |
| `-serverMod=` | Server-Mods. Sie laufen ausschließlich auf dem Server und müssen von Spielern **nicht** installiert werden. |

Mehrere Mods trennst du in beiden Fällen durch ein Semikolon:

```
@cba_a3;@ace;@operation_trebuchet
```

:::: danger Wichtig
Dein Server läuft unter Linux, und Linux unterscheidet zwischen Groß- und Kleinschreibung. Benenne deshalb jeden Mod-Ordner **komplett in Kleinbuchstaben** um und entferne Leerzeichen sowie Sonderzeichen – Unterstriche sind erlaubt. Aus `@Operation TREBUCHET` wird also `@operation_trebuchet`. Das gilt auch für die `.pbo`-Dateien in den Unterordnern `addons`. Ordnernamen, die mit einer Zahl beginnen, funktionieren ebenfalls nicht zuverlässig.
::::

## Methode 1: Modliste aus dem Launcher exportieren

Bei dieser Methode lädt dein Server die Mods selbst aus dem Steam Workshop herunter. Das ist der einfachste Weg für Workshop-Mods.

1. <b>Arma 3 Launcher starten</b><br>
   Starte Arma 3 über Steam, sodass sich der Launcher öffnet, und wechsle zum Tab **Mods**.

2. <b>Mods aktivieren</b><br>
   Aktiviere alle Mods, die auf deinem Server laufen sollen. Achte darauf, dass auch benötigte Abhängigkeiten wie `@CBA_A3` aktiviert sind.

3. <b>Modliste exportieren</b><br>
   Exportiere die aktive Modliste über die Preset-Funktion des Launchers als **HTML-Datei** auf deinen PC.

4. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

5. <b>Datei hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die Datei als `modlist.html` in das Hauptverzeichnis hoch:

   ```
   /modlist.html
   ```

6. <b>Modliste eintragen</b><br>
   Öffne die **Einstellungen** in deiner Verwaltung und trage den Dateinamen im Feld für die Modliste-Datei ein. Standardmäßig steht dort bereits `modlist.html`.

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start werden die Mods aus der Liste heruntergeladen – je nach Umfang kann das einige Minuten dauern.

:::: info Steam-Konto erforderlich
Für den automatischen Download aus dem Workshop benötigt dein Server die Zugangsdaten eines Steam-Kontos, das Arma 3 besitzt. Anonyme Downloads sind für Workshop-Inhalte nicht möglich. Die Zugangsdaten hinterlegst du in den **Einstellungen** deiner Verwaltung.
::::

## Methode 2: Workshop-IDs direkt eintragen

Statt einer Modliste kannst du Mods auch einzeln über ihre Workshop-ID angeben.

1. <b>Workshop-ID kopieren</b><br>
   Öffne die Mod-Seite im Steam Workshop. Die ID ist die Zahl am Ende der Adresse, zum Beispiel `450814997` bei `.../filedetails/?id=450814997`.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>IDs eintragen</b><br>
   Trage die IDs in den **Einstellungen** im Feld für die Mods ein – jeweils mit vorangestelltem `@` und durch Semikolon getrennt:

   ```
   @450814997;@463939057;
   ```

   Server-Mods trägst du stattdessen in das Feld für die Server-Mods ein.

4. <b>Server starten</b><br>
   Starte deinen Server. Die Mods werden beim Start heruntergeladen.

:::: info Hinweis
Ob dein Server Mods allein anhand der Workshop-ID herunterlädt, hängt von seiner Konfiguration ab. Werden die zugehörigen Mod-Ordner beim Start nicht angelegt, nutze stattdessen Methode 1 oder lade die Mods nach Methode 3 manuell hoch.
::::

## Methode 3: Mods manuell hochladen

Diese Methode brauchst du für Mods, die nicht aus dem Workshop stammen.

1. <b>Mod abonnieren</b><br>
   Abonniere den Mod im Steam Workshop und starte Arma 3 einmal, damit er heruntergeladen wird.

2. <b>Mod-Ordner öffnen</b><br>
   Die abonnierten Mods findest du auf deinem PC unter:

   ```
   ...\Steam\steamapps\common\Arma 3\!Workshop
   ```

3. <b>Ordner umbenennen</b><br>
   Benenne den Mod-Ordner komplett in Kleinbuchstaben um und ersetze Leerzeichen durch Unterstriche, zum Beispiel `@operation_trebuchet`. Benenne auch die `.pbo`-Dateien im Unterordner `addons` in Kleinbuchstaben um.

4. <b>Ordner packen</b><br>
   Packe den Mod-Ordner in eine `.zip`-Datei.

5. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

6. <b>Hochladen und entpacken</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md), lade das Archiv in das **Hauptverzeichnis** deines Servers hoch und entpacke es dort. Der Mod-Ordner muss anschließend direkt im Hauptverzeichnis liegen:

   ```
   /@operation_trebuchet
   ```

   :::: warning Achtung
   Arma 3 lädt Mods ausschließlich aus dem Hauptverzeichnis des Servers und dessen Unterordnern. Ordner außerhalb davon werden nicht erkannt.
   ::::

7. <b>Key kopieren</b><br>
   Öffne den Unterordner `keys` (bzw. `key`) des Mods und lade die enthaltene `.bikey`-Datei in den Ordner `/keys` deines Servers hoch.

8. <b>Mod aktivieren</b><br>
   Trage den Ordnernamen in den **Einstellungen** im Feld für die Mods ein – mehrere durch Semikolon getrennt:

   ```
   @cba_a3;@operation_trebuchet
   ```

9. <b>Server starten</b><br>
   Starte deinen Server.

## Signaturen prüfen

Damit nur Spieler mit unveränderten Mod-Dateien auf deinen Server kommen, prüft Arma 3 die Signaturen der Mods. Dafür muss die `.bikey` jedes Mods im Ordner `/keys` liegen. Die Prüfung ist bei Arma 3 standardmäßig aktiv – kontrolliere im Zweifel, ob der Wert in deiner `server.cfg` gesetzt ist.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>server.cfg öffnen</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `/server.cfg`.

3. <b>Signaturprüfung aktivieren</b><br>
   Trage folgenden Wert ein:

   ```
   verifySignatures = 2;
   ```

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Bei aktiver Signaturprüfung müssen Server-Mods aus `-serverMod=` von den Spielern nicht installiert werden. Mods ohne `.bikey`-Datei lassen sich ausschließlich als Server-Mod laden.
::::

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Server startet nicht | Prüfe, ob alle Mod-Ordner exakt so heißen, wie sie in den Einstellungen eingetragen sind – inklusive Kleinschreibung |
| Mod wird nicht geladen | Prüfe, ob der Ordner direkt im Hauptverzeichnis liegt und mit `@` beginnt |
| Spieler werden beim Beitritt abgewiesen | Alle Client-Mods müssen bei den Spielern in derselben Version aktiv sein |
| Signatur-Fehler | Prüfe, ob für jeden Mod die passende `.bikey`-Datei im Ordner `/keys` liegt |
| Mods fehlen nach dem Start | Prüfe, ob ein Steam-Konto mit Arma-3-Lizenz in den Einstellungen hinterlegt ist |
