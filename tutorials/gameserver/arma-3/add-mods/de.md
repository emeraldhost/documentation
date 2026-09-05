---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf Deinem Arma 3 Server"
description: "Mods auf einem Arma 3 Server installieren"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/arma-3/add-admin", "gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

Mods liegen bei Arma 3 als Ordner im Hauptverzeichnis Deines Servers und beginnen immer mit einem `@` – zum Beispiel `@cba_a3`. Geladen werden sie über zwei Startparameter, die Du in der Verwaltung über die entsprechenden Felder setzt.

| Parameter | Bedeutung |
|-----------|-----------|
| `-mod=` | Client-Mods. Diese Mods müssen **alle Spieler** ebenfalls installiert und im Launcher aktiviert haben. |
| `-serverMod=` | Server-Mods. Sie laufen ausschließlich auf dem Server und müssen von Spielern **nicht** installiert werden. |

Mehrere Mods trennst Du in beiden Fällen durch ein Semikolon:

```text
@cba_a3;@ace;@operation_trebuchet
```

> [!IMPORTANT]
> Dein Server läuft unter Linux, und Linux unterscheidet zwischen Groß- und Kleinschreibung. Benenne deshalb jeden Mod-Ordner **komplett in Kleinbuchstaben** um und entferne Leerzeichen sowie Sonderzeichen – Unterstriche sind erlaubt. Aus `@Operation TREBUCHET` wird also `@operation_trebuchet`. Das gilt auch für die `.pbo`-Dateien in den Unterordnern `addons`. Ordnernamen, die mit einer Zahl beginnen, funktionieren ebenfalls nicht zuverlässig.

## Methode 1: Modliste aus dem Launcher exportieren

Bei dieser Methode lädt Dein Server die Mods selbst aus dem Steam Workshop herunter. Das ist der einfachste Weg für Workshop-Mods.

1. **Arma 3 Launcher starten**\
   Starte Arma 3 über Steam, sodass sich der Launcher öffnet, und wechsle zum Tab **Mods**.

2. **Mods aktivieren**\
   Aktiviere alle Mods, die auf Deinem Server laufen sollen. Achte darauf, dass auch benötigte Abhängigkeiten wie `@CBA_A3` aktiviert sind.

3. **Modliste exportieren**\
   Exportiere die aktive Modliste über die Preset-Funktion des Launchers als **HTML-Datei** auf Deinen PC.

4. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

5. **Datei hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die Datei als `modlist.html` in das Hauptverzeichnis hoch:

   ```text
   /modlist.html
   ```

6. **Modliste eintragen**\
   Öffne die **Einstellungen** in Deiner Verwaltung und trage den Dateinamen im Feld für die Modliste-Datei ein. Standardmäßig steht dort bereits `modlist.html`.

7. **Server starten**\
   Starte Deinen Server. Beim Start werden die Mods aus der Liste heruntergeladen – je nach Umfang kann das einige Minuten dauern.

> [!NOTE]
> **Steam-Konto erforderlich**
>
> Für den automatischen Download aus dem Workshop benötigt Dein Server die Zugangsdaten eines Steam-Kontos, das Arma 3 besitzt. Anonyme Downloads sind für Workshop-Inhalte nicht möglich. Die Zugangsdaten hinterlegst Du in den **Einstellungen** Deiner Verwaltung.

## Methode 2: Workshop-IDs direkt eintragen

Statt einer Modliste kannst Du Mods auch einzeln über ihre Workshop-ID angeben.

1. **Workshop-ID kopieren**\
   Öffne die Mod-Seite im Steam Workshop. Die ID ist die Zahl am Ende der Adresse, zum Beispiel `450814997` bei `.../filedetails/?id=450814997`.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **IDs eintragen**\
   Trage die IDs in den **Einstellungen** im Feld für die Mods ein – jeweils mit vorangestelltem `@` und durch Semikolon getrennt:

   ```text
   @450814997;@463939057;
   ```

   Server-Mods trägst Du stattdessen in das Feld für die Server-Mods ein.

4. **Server starten**\
   Starte Deinen Server. Die Mods werden beim Start heruntergeladen.

> [!NOTE]
> Ob Dein Server Mods allein anhand der Workshop-ID herunterlädt, hängt von seiner Konfiguration ab. Werden die zugehörigen Mod-Ordner beim Start nicht angelegt, nutze stattdessen Methode 1 oder lade die Mods nach Methode 3 manuell hoch.

## Methode 3: Mods manuell hochladen

Diese Methode brauchst Du für Mods, die nicht aus dem Workshop stammen.

1. **Mod abonnieren**\
   Abonniere den Mod im Steam Workshop und starte Arma 3 einmal, damit er heruntergeladen wird.

2. **Mod-Ordner öffnen**\
   Die abonnierten Mods findest Du auf Deinem PC unter:

   ```text
   ...\Steam\steamapps\common\Arma 3\!Workshop
   ```

3. **Ordner umbenennen**\
   Benenne den Mod-Ordner komplett in Kleinbuchstaben um und ersetze Leerzeichen durch Unterstriche, zum Beispiel `@operation_trebuchet`. Benenne auch die `.pbo`-Dateien im Unterordner `addons` in Kleinbuchstaben um.

4. **Ordner packen**\
   Packe den Mod-Ordner in eine `.zip`-Datei.

5. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

6. **Hochladen und entpacken**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection), lade das Archiv in das **Hauptverzeichnis** Deines Servers hoch und entpacke es dort. Der Mod-Ordner muss anschließend direkt im Hauptverzeichnis liegen:

   ```text
   /@operation_trebuchet
   ```

   > [!WARNING]
   > Arma 3 lädt Mods ausschließlich aus dem Hauptverzeichnis des Servers und dessen Unterordnern. Ordner außerhalb davon werden nicht erkannt.

7. **Key kopieren**\
   Öffne den Unterordner `keys` (bzw. `key`) des Mods und lade die enthaltene `.bikey`-Datei in den Ordner `/keys` Deines Servers hoch.

8. **Mod aktivieren**\
   Trage den Ordnernamen in den **Einstellungen** im Feld für die Mods ein – mehrere durch Semikolon getrennt:

   ```text
   @cba_a3;@operation_trebuchet
   ```

9. **Server starten**\
   Starte Deinen Server.

## Signaturen prüfen

Damit nur Spieler mit unveränderten Mod-Dateien auf Deinen Server kommen, prüft Arma 3 die Signaturen der Mods. Dafür muss die `.bikey` jedes Mods im Ordner `/keys` liegen. Die Prüfung ist bei Arma 3 standardmäßig aktiv – kontrolliere im Zweifel, ob der Wert in Deiner `server.cfg` gesetzt ist.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **server.cfg öffnen**\
   Öffne per [SFTP](/tutorials/gameserver/establish-sftp-connection) die Datei `/server.cfg`.

3. **Signaturprüfung aktivieren**\
   Trage folgenden Wert ein:

   ```text
   verifySignatures = 2;
   ```

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Bei aktiver Signaturprüfung müssen Server-Mods aus `-serverMod=` von den Spielern nicht installiert werden. Mods ohne `.bikey`-Datei lassen sich ausschließlich als Server-Mod laden.

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Server startet nicht | Prüfe, ob alle Mod-Ordner exakt so heißen, wie sie in den Einstellungen eingetragen sind – inklusive Kleinschreibung |
| Mod wird nicht geladen | Prüfe, ob der Ordner direkt im Hauptverzeichnis liegt und mit `@` beginnt |
| Spieler werden beim Beitritt abgewiesen | Alle Client-Mods müssen bei den Spielern in derselben Version aktiv sein |
| Signatur-Fehler | Prüfe, ob für jeden Mod die passende `.bikey`-Datei im Ordner `/keys` liegt |
| Mods fehlen nach dem Start | Prüfe, ob ein Steam-Konto mit Arma-3-Lizenz in den Einstellungen hinterlegt ist |
