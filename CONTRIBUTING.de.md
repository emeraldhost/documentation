# Mitwirken an den EmeraldHost-Anleitungen

*Read this in [English](./CONTRIBUTING.md).*

Willkommen, und danke, dass Du Dir Zeit nimmst, eine Anleitung für EmeraldHost zu
schreiben. Dieses Repository ist die Quelle für jede Anleitung zu
**Gameservern**, **Rootservern**, **TeamSpeak**, **Domains** und allem anderen,
was unsere Kundinnen und Kunden betreiben. Was Du hier committest, sehen die
Leserinnen und Leser auf
[emeraldhost.de/de/anleitungen](https://emeraldhost.de/de/anleitungen) und
[emeraldhost.de/en/guides](https://emeraldhost.de/en/guides).

Dieses Dokument ist die Schreibanleitung. Lies sie vor Deinem ersten Pull
Request und lass sie beim Schreiben offen.

---

## Inhaltsverzeichnis

1. [Schnellstart](#schnellstart)
2. [Ordnerstruktur](#ordnerstruktur)
3. [Frontmatter](#frontmatter)
4. [Markdown-Style-Guide](#markdown-style-guide)
5. [Querverweise](#querverweise)
6. [Bilder und Screenshots](#bilder-und-screenshots)
7. [Übersetzungen](#übersetzungen)
8. [Namenskonventionen](#namenskonventionen)
9. [Prüfungen](#prüfungen)
10. [PR-Checkliste](#pr-checkliste)
11. [Verhaltenskodex und Lizenz](#verhaltenskodex-und-lizenz)

---

## Schnellstart

Wenn Du Dich mit Git und Markdown auskennst, hier die Kurzfassung.

1. **Forke** dieses Repository in Deinen eigenen GitHub-Account. Wenn Dein Fork
   noch einen flachen `tutorials/`-Ordner ohne Kategorie-Unterordner hat, stammt
   er von vor der Umstellung und zeigt jede Datei als geändert an. Forke dann neu
   oder gleiche Deinen Fork mit diesem Repository ab, über die Schaltfläche
   **Sync fork** auf GitHub oder auf der Kommandozeile:

   ```bash
   git remote add upstream https://github.com/emeraldhost/documentation.git
   git fetch upstream
   git reset --hard upstream/main
   ```

2. **Klone** Deinen Fork und erstelle einen Branch:

   ```bash
   git clone https://github.com/<dein-benutzer>/documentation.git
   cd documentation
   git checkout -b tutorial/install-minecraft-datapacks
   ```

3. **Kopiere die Vorlage** in einen neuen Anleitungsordner. Nutze einen
   englischen Ordnernamen in kebab-case, den es noch nicht gibt, damit Du eine
   Anleitung anlegst und keine bestehende überschreibst:

   ```bash
   mkdir -p tutorials/gameserver/minecraft/install-datapacks/images
   cp tutorial-template.en.md tutorials/gameserver/minecraft/install-datapacks/en.md
   cp tutorial-template.de.md tutorials/gameserver/minecraft/install-datapacks/de.md
   ```

4. **Schreibe die Anleitung in beiden Sprachen.** Fülle das Frontmatter aus, lege
   Screenshots in den Unterordner `images/` und halte Dich an den
   [Style-Guide](#markdown-style-guide).
5. **Öffne einen Pull Request** gegen `main`. Fülle die Pull-Request-Vorlage aus
   und hake die [Checkliste](#pr-checkliste) ab.

Lokal musst Du nichts bauen. Die automatischen Prüfungen im Pull Request melden
ein fehlendes Feld, einen kaputten Link oder eine fehlende Übersetzung. Wenn Du
sie selbst ausführen willst, siehe [Prüfungen](#prüfungen).

Eine Reviewerin oder ein Reviewer liest den Entwurf, schlägt bei Bedarf
Änderungen vor und merged, sobald alles passt. Nach dem Merge übernimmt die
Website die Anleitung innerhalb weniger Minuten.

---

## Ordnerstruktur

Anleitungen liegen in einer **verschachtelten Ordnerstruktur** unter
`tutorials/`. Der vollständige Pfad kodiert die Kategorie:
`tutorials/<gruppe>/[<bereich>/][<unterkategorie>/]<thema>/`. Der
Blatt-Ordnername ist der kanonische englische Themen-Slug. In diesem Ordner
bekommt jede Sprache ihre eigene Markdown-Datei, und alle Bilder liegen in einem
gemeinsamen Unterordner `images/`.

```text
tutorials/
  gameserver/
    aloft/
      add-admin/
        en.md
        de.md
        images/
          admin-panel.webp
      enable-whitelist/
        en.md
        de.md
    minecraft/               # hier ist das Segment <bereich> der Produkt-Key
      install-plugins/
        en.md
        de.md
        images/
          plugin-upload.webp
        videos/
          plugin-upload.mp4
      plugins/               # optionale <unterkategorie> unter dem Spiel
        install-essentialsx/
          en.md
          de.md
    create-database/         # geteilter Gameserver-Helfer, ohne mittleres Segment
      en.md
      de.md
  rootserver/
    services-tools/
      install-certbot/
        en.md
        de.md
    basic-configuration/
      change-ssh-port/
        en.md
        de.md
  teamspeak/
    setup-teamspeak-server/
      en.md
      de.md
      images/
        teamspeak-firewall.webp
  general/
    create-network-trace/
      en.md
      de.md
```

Der Baum oben zeigt die Form der Struktur. Nicht jedes Blatt darin gibt es
wirklich, echte Beispiele findest Du unter `tutorials/`.

Erlaubte Top-Level-Gruppen: `gameserver`, `rootserver`, `teamspeak`, `domains`,
`general`. Das mittlere Segment ist optional und steht für einen Unterbereich:
unter `gameserver/` ist es das Spiel, unter `rootserver/` und `domains/` bündelt
es ein Thema, zum Beispiel `linux`, `services-tools` oder `dns-records`. Ein
Bereich darf eine weitere optionale Unterkategorie vor dem Anleitungsordner
enthalten.

Regeln:

- **Ein Blatt-Ordner pro Anleitung.** Vermische nie zwei Themen in einem Ordner.
- **Nur `<sprache>.md`, und beide davon.** Heute erlaubt: `en.md`, `de.md`; jedes
  Blatt trägt beide. Eine neue Sprache besprichst Du vorher in einem Issue.
- **Das Segment direkt unter `gameserver/` ist der Produkt-Key**, also zum
  Beispiel `minecraft`, nicht `minecraft-java-edition`. Zwischen dem Spiel und
  der Anleitung darf eine weitere optionale Unterkategorie liegen, zum Beispiel
  `gameserver/minecraft/plugins/<anleitung>`; sie braucht eine eigene
  `categories/gameserver/minecraft/plugins.yaml` mit `parent: "gameserver/minecraft"`.
  Ein Spiel ohne Produkt behält seinen eigenen Slug, und seine Anleitungen tragen
  keine `product_keys`. Außerhalb von `gameserver/` ist das mittlere Segment eine
  Themengruppe und hat nichts mit Produkt-Keys zu tun.
- **Gemeinsame Bilder.** Alle Sprachen einer Anleitung verweisen auf dieselben
  Bilder. Dupliziere Screenshots nicht pro Sprache.
- **Der Ordnerpfad ist die Kategorie.** Für jedes übergeordnete Segment des Pfads
  muss eine passende `categories/<...>.yaml` existieren, zum Beispiel
  `categories/gameserver.yaml` und `categories/gameserver/aloft.yaml`.

---

## Frontmatter

Jede Markdown-Datei beginnt mit einem YAML-Frontmatter-Block, eingefasst von
`---`. Das Frontmatter ist der Vertrag zwischen Deiner Anleitung und der Website:
es steuert Seitentitel, Reihenfolge, Suchbegriffe und Metadaten.
[`tutorial-template.de.md`](./tutorial-template.de.md) und
[`tutorial-template.en.md`](./tutorial-template.en.md) enthalten denselben
Feldsatz in derselben Reihenfolge, fertig zum Kopieren.

### Pflichtfelder

| Feld          | Typ    | Beschreibung                                                                                                                                                                    |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`        | String | Sprachspezifischer Slug aus einem Segment in kebab-case. Bei `en.md` **muss** er dem Blatt-Ordnernamen entsprechen (kanonischer Anker), bei `de.md` ist es der deutsche Slug.     |
| `language`    | String | Sprachcode dieser Datei. Muss zum Dateinamen passen: `en.md` ergibt `en`, `de.md` ergibt `de`.                                                                                    |
| `title`       | String | Lesbarer Titel. Wird zur Überschrift der Seite. Wiederhole ihn nicht als Überschrift im Text.                                                                                     |
| `description` | String | Zusammenfassung in einem Satz, unter 160 Zeichen. Dient als Meta-Description und auf den Anleitungs-Karten.                                                                       |
| `date`        | Datum  | Veröffentlichungsdatum, `JJJJ-MM-TT`.                                                                                                                                            |

Die Website weist nur eine Datei zurück, der `slug`, `language`, `title` oder
`date` fehlt. Eine Anleitung ohne `description` bekommt aber einen leeren Teaser,
behandle sie also als Pflichtfeld.

Ein **`category`-Feld gibt es nicht**. Der Ordnerpfad
`tutorials/<gruppe>/[<bereich>/][<unterkategorie>/]<thema>/` bestimmt die
Einordnung, und für jedes übergeordnete Segment muss eine passende
`categories/<...>.yaml` existieren.

### Optionale Felder

| Feld                  | Typ      | Beschreibung                                                                                                                                                  |
| --------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tags`                | String[] | Freie Schlagworte für Suche und verwandte Inhalte. Die meisten Anleitungen tragen eine leere Liste.                                                                |
| `visibility`          | String   | `public`, `internal` oder `draft`. Standard ist `public`.                                                                                                         |
| `is_deprecated`       | Boolean  | Markiert die Anleitung als veraltet und zur Überarbeitung anstehend. Die Artikelseite zeigt unter dem Kopfbereich einen Warnhinweis mit Links zu Support und Community-Discord; die Anleitung bleibt gelistet und indexiert. Der monatliche Review-Report führt so markierte Anleitungen getrennt auf. Für aktuelle Anleitungen weglassen (oder `false`). Nicht mit `is_featured` kombinieren. |
| `updated`             | Datum    | Datum der letzten inhaltlichen Änderung, `JJJJ-MM-TT` wie bei `date`. Die Zeile ganz weglassen, solange sie `date` wiederholt, ein leerer Wert wird abgelehnt.     |
| `cta`                 | String   | Welcher Handlungsaufruf die Seite abschließt: `gameserver`, `rootserver`, `domain` oder `teamspeak`. Anleitungen unter `general/` tragen keinen.                   |
| `product_keys`        | String[] | Produkt-Keys, zu denen die Anleitung gehört, zum Beispiel `["minecraft"]`. Weglassen, wenn es kein passendes Produkt gibt.                                         |
| `author`              | String   | Angezeigter Name auf der Seite. Nutze `EmeraldHost Team`, außer Du möchtest Deinen eigenen Namen auf der Seite sehen.                                              |
| `author_link`         | String   | URL hinter dem Autorennamen, für das Team `https://emeraldhost.de`.                                                                                               |
| `author_img`          | String   | Avatar-Schlüssel, für das Team `emeraldhost-team`.                                                                                                                |
| `author_description`  | String   | Ein Satz über die Autorin oder den Autor, in der Sprache dieser Datei.                                                                                            |
| `available_languages` | String[] | Sprachen, in denen es die Anleitung gibt. Jede Anleitung trägt `["de", "en"]`; sonst schlägt die Sprachprüfung fehl.                                               |
| `short_title`         | String   | Label für Listen und die Seitenleiste. Kürzer als `title`.                                                                                                        |
| `sort`                | Zahl     | Position innerhalb der Kategorie, pro Sprache. Frag im Pull Request nach, wenn Du unsicher bist.                                                                   |
| `is_featured`         | Boolean  | Hebt die Anleitung an den Anfang ihrer Kategorieseite und in die Übersichtsgruppe der Seitenleiste. Ein optionales Datum `featured_until` (`YYYY-MM-DD`) beendet die Hervorhebung wieder. Nur für wenige Anleitungen gedacht, schlag es also im Pull Request vor. |
| `is_highlighted`      | Boolean  | Gibt der Anleitung ein Stern-Symbol in der Seitenleiste und in der Suche. Sonst ändert sich nichts.                                                                |
| `related`             | String[] | Pfadartige Verweise auf benachbarte Anleitungen: der Ordnerpfad der Anleitung ohne führendes `/tutorials`, zum Beispiel `gameserver/minecraft/install-plugins` oder `general/create-network-trace`. |

Der Autorenblock besteht aus vier einzelnen Feldern, nicht aus einem
verschachtelten Objekt. Es gibt kein `difficulty`, `estimated_time`,
`last_reviewed`, `requires`, `product` oder `cover_image`: keines davon wird
gelesen.

### Minimales gültiges Beispiel

Dateipfad: `tutorials/gameserver/minecraft/install-datapacks/de.md`

```yaml
---
slug: "datenpakete-installieren"
language: "de"
title: "Datenpakete auf Deinem Minecraft-Server installieren"
description: "Datenpakete auf einem Minecraft-Server bei EmeraldHost hinzufügen und prüfen, ob sie geladen wurden."
date: "2026-05-20"
---
```

### Vollständigeres Beispiel

So sieht es in allen Anleitungen aus, in genau dieser Reihenfolge:

```yaml
---
slug: "datenpakete-installieren"
language: "de"
title: "Datenpakete auf Deinem Minecraft-Server installieren"
description: "Datenpakete auf einem Minecraft-Server bei EmeraldHost hinzufügen und prüfen, ob sie geladen wurden."
tags: []
date: "2026-05-20"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenpakete installieren"
sort: 12
related: ["gameserver/minecraft/install-plugins", "gameserver/minecraft/create-backup"]
---
```

---

## Markdown-Style-Guide

Anleitungen sind einfaches GitHub-Markdown: CommonMark, die GitHub-Erweiterung
(Tabellen, Aufgabenlisten, Durchstreichen, Autolinks), Fußnoten und
Attributblöcke. Es gibt kein MDX und keinen Komponenten-Compiler. Ein Tag, das
wie eine Komponente aussieht, ist also keine: die Website packt es aus, und nur
sein Text bleibt übrig.

[`tutorials/general/markdown-showcase/de.md`](./tutorials/general/markdown-showcase/de.md)
zeigt jedes Konstrukt, das wirklich gerendert wird, und
[die gerenderte Seite auf der Website](https://emeraldhost.de/de/anleitungen/general/markdown-showcase)
zeigt, wie jedes davon aussieht. Was dort nicht steht, nutzt Du nicht.

### Überschriften

- **Schreibe keine Überschrift erster Ebene in den Text.** Die Seitenüberschrift
  kommt aus `title` im Frontmatter. Eine zweite zerlegt das
  Inhaltsverzeichnis.
- **Nutze `##` für die obersten Abschnitte.** Eine typische Anleitung läuft so:
  kurzer Einleitungsabsatz, `## Voraussetzungen`, ein `##`-Abschnitt pro Teil des
  Ablaufs, optional `## Fehlerbehebung` und ein abschließender Abschnitt.
- **Nutze `###` für Unterabschnitte.** Geh nicht tiefer als `####`.
- Überschriften stehen im Satzstil: „Mods installieren“, nicht „Mods
  Installieren“.

### Absätze und Ton

- Schreibe kurze Absätze. Ein Gedanke pro Absatz.
- Sprich die Leserin oder den Leser mit „Du“ an, groß geschrieben, ebenso „Dich“,
  „Dir“, „Dein“.
- Sei freundlich, aber präzise. Anleitungen sind Nachschlagewerk, kein Blog.
- Vermeide Füllwörter („einfach“, „nur“, „offensichtlich“). Wer hier liest, weiß
  es noch nicht.
- **Keine Geviertstriche.** Ersetze sie durch Komma, Doppelpunkt oder Punkt.

### Code-Blöcke

Jeder Code-Block **muss** eine Sprachangabe tragen. Sie steuert das
Syntax-Highlighting und den Kopieren-Button. Gängige Angaben:

- `bash` für Shell-Befehle
- `powershell` für PowerShell
- `yaml` für Konfiguration und Frontmatter
- `json` für JSON
- `ini` für Dateien im Stil von `.ini`, `.conf` und `.env`
- `properties` für Java-`.properties`
- `nginx`, `apache` für Webserver-Konfiguration
- `text` für reine Ausgaben, ASCII-Art oder Inhalte ohne Sprache

Ein Block kann zusätzlich einen Titel tragen, der als Dateiname darüber
erscheint:

````markdown
```bash title="install.sh"
apt update
apt install -y nginx
```
````

Inline-Code steht in einfachen Backticks: `server.properties`, `25565`,
`systemctl restart sshd`.

### Hervorgehobene Kästen (GitHub-Alerts)

Hervorgehobene Kästen sind GitHub-Alert-Zitate. Fünf Typen werden gerendert, und
die Seite setzt die Überschrift selbst. **Schreibe das Label also nicht in den
Text:**

```markdown
> [!NOTE]
> Diese Anleitung gilt für jeden Tarif.

> [!TIP]
> Lege vor jedem Update einen Snapshot an.

> [!IMPORTANT]
> Die Option `--purge` entfernt auch die Konfigurationsdateien.

> [!WARNING]
> Ein Neustart trennt aktive SFTP-Verbindungen.

> [!CAUTION]
> `rm -rf /var/lib/minecraft` löscht Deine gesamte Welt.
```

| Alert          | Überschrift in `en.md` | Überschrift in `de.md` |
| -------------- | ---------------------- | ---------------------- |
| `[!NOTE]`      | Note                   | Hinweis                |
| `[!TIP]`       | Tip                    | Tipp                   |
| `[!IMPORTANT]` | Important              | Wichtig                |
| `[!WARNING]`   | Warning                | Achtung                |
| `[!CAUTION]`   | Caution                | Vorsicht               |

Die Website setzt die Überschrift in der Sprache der Datei, schreib das Label
also nie selbst in den Text. Der Marker selbst bleibt in beiden Sprachen
englisch: auch in `de.md` schreibst Du `> [!WARNING]`.

Ein Alert kann mehrere Absätze, Listen und Code-Blöcke enthalten. Jede Zeile
braucht das Zitat-Präfix, und der Block braucht eine Leerzeile darüber und
darunter. Wenn der Kasten einen eigenen Titel braucht, einen, den der Alert-Typ
nicht schon sagt, schreib ihn als fette erste Zeile im Alert.

`<Callout type="…">` ist **keine** Komponente. Es ist ein Überbleibsel der
älteren Website; die Website packt es aus, und Kasten, Farbe und Symbol gehen
verloren. Einige alte Anleitungen enthalten es noch. Ersetze es durch den
passenden Alert, wenn Du eine davon anfasst.

### Schritte

Nummerierte Abläufe sind gewöhnliche nummerierte Markdown-Listen. Der
Schritt-Titel ist fett und endet mit einem Backslash: das ist der harte
Zeilenumbruch, damit die Beschreibung in der nächsten Zeile innerhalb desselben
Listenpunkts beginnt.

````markdown
1. **Modpack herunterladen**\
   Öffne die [CurseForge-Modpack-Seite](https://www.curseforge.com/minecraft/modpacks)
   und lade das ZIP für die Serverseite herunter.

   ```bash
   wget https://example.com/modpacks/foo-server.zip
   ```

2. **Auf den Server hochladen**\
   Lade das ZIP per SFTP in das Hauptverzeichnis Deines Gameservers.

   ![SFTP-Upload-Dialog](images/sftp-upload.webp)
````

Der Backslash am Zeilenende ist wichtig. Ohne ihn ist ein einfacher Umbruch nur
ein weicher Umbruch, und Titel und Beschreibung fallen in eine Zeile zusammen.
`<Step title="…">` ist aus demselben Grund wie `<Callout>` ebenfalls keine
Komponente.

### Tabellen

Normale GitHub-Markdown-Tabellen funktionieren. Halte sie schmal genug, damit sie
auf dem Handy lesbar bleiben:

```markdown
| Port  | Protokoll | Zweck            |
| ----- | --------- | ---------------- |
| 25565 | TCP       | Minecraft-Client |
| 25575 | TCP       | RCON             |
```

### Listen

- Nutze `-` für Aufzählungen. Einheitlichkeit vor Abwechslung.
- Nutze `1.` für nummerierte Listen; die gerenderten Zahlen müssen nicht der
  Quelle entsprechen.
- Rücke verschachtelte Listen um zwei Leerzeichen ein.

### Aufgabenlisten, Fußnoten und Anker

```markdown
- [x] Server gestoppt
- [ ] Backup erstellt

Ein Verweis im Text[^1] mit seiner Definition am Ende der Datei.

[^1]: Führe jeden Befehl als root oder mit `sudo` aus.

<a name="eigener-anker"></a>

### Mein Abschnitt
```

Die Attributblock-Schreibweise (`### Mein Abschnitt {#eigener-anker}`) rendert
hier gleich, erscheint auf github.com aber als reiner Text. Nutze deshalb die
Form mit `<a name>`.

### Roh-HTML

Markdown zuerst: wenn es für ein Konstrukt eine Markdown-Entsprechung gibt, nutze
sie. `**fett**` statt `<b>`, einen harten Umbruch (Backslash am Zeilenende) statt
`<br>`, `![alt](quelle)` statt `<img>`.

Erlaubt, weil das Showcase sie zeigt und die Website sie behält:

- `<details>` und `<summary>` für aufklappbare Blöcke
- `<kbd>` für Tasten, `<mark>` für Hervorhebungen, `<u>` für Unterstreichung,
  `<sub>` und `<sup>`
- `<a name="…"></a>` für einen eigenen Überschriften-Anker
- `<video controls …>`, wenn Du Attribute brauchst, die die Kurzform
  `![clip](videos/x.mp4)` nicht bietet

Alles andere fällt in drei Gruppen, von denen keine das Schreiben wert ist:

- `<Callout>` und `<Step>` packt die Website aus. Der Text bleibt, Kasten, Farbe
  und Titel gehen verloren. Nimm einen Alert oder einen fetten Schritt-Titel.
- `<script>` und `<style>` werden samt Inhalt entfernt.
- `<div>`, `<span>` und eine rohe `<table>` überleben auf der Website zwar, aber
  nichts im Showcase nutzt sie und es gibt kein Styling dafür. Schreib also
  Markdown. Eine Markdown-Tabelle rendert über genau dieselbe `<table>`.

Wenn Du etwas brauchst, das hier nicht steht, öffne ein Issue, statt ein Tag zu
erfinden.

### Screenshot-Dateinamen

Screenshots verlassen Browser und Aufnahmeprogramme mit Namen wie
`chrome_AbCd123.png` oder `Screenshot 2026-05-31 at 14.22.png`. **Benenne sie vor
dem Commit um.** Nutze sprechende Namen in kebab-case, die beschreiben, was zu
sehen ist:

| Schlecht                             | Gut                          |
| ------------------------------------ | ---------------------------- |
| `chrome_AbCd123.png`                 | `modpack-suche.webp`         |
| `Screenshot 2026-05-31 at 14.22.png` | `forge-installer-schritt3.webp` |
| `image1.png`                         | `sshd-config-port.webp`      |

---

## Querverweise

Verlinkte Anleitungen lassen die Dokumentation wie ein Produkt wirken und nicht
wie einen Stapel Artikel.

- **Nutze den kanonischen Ordnerpfad, keine Dateipfade.** Verlinke auf
  `/tutorials/` plus den Ordnerpfad der Anleitung, also denselben Pfad, den der
  Ordner unter `tutorials/` hat, in beiden Sprachen mit dem englischen
  Blattnamen. Die Website löst den Link automatisch auf die aktuelle Sprache auf.
- **Kein Sprachpräfix** (`/en/`, `/de/`) in Querverweisen innerhalb von
  Anleitungen. Darum kümmert sich die Website.
- **Verlinke keine `.md`-Dateien direkt.** Diese URLs gibt es auf der Website
  nicht, und die Link-Prüfung schlägt darauf fehl.
- **`related` ist kein Link.** Es trägt denselben Pfad *ohne* das Präfix
  `/tutorials`: `gameserver/minecraft/install-plugins`.

Beispiele:

```markdown
Bevor Du startest, folge bitte
[Minecraft-EULA akzeptieren](/tutorials/gameserver/minecraft/accept-minecraft-eula).

Wenn etwas kaputtgeht, siehe [Backup erstellen](/tutorials/gameserver/minecraft/create-backup).
```

Externe Links nutzen die vollständige URL und öffnen standardmäßig im selben Tab.
Markiere einen externen Link nur dann ausdrücklich, wenn der Zusammenhang
unklar ist.

---

## Bilder und Screenshots

Bilder liegen neben der Markdown-Datei, die sie einbindet, im Unterordner
`images/` der Anleitung.

```text
tutorials/gameserver/minecraft/install-datapacks/
  en.md
  de.md
  images/
    01-datapacks-ordner.webp
    02-konsole-paket-geladen.webp
```

Beide Sprachen teilen sich den `images/`-Ordner. Dateinamen sind sprachneutral
und tragen ein zweistelliges Schritt-Präfix (`01-`, `02-`, …), damit sie im
Dateibaum natürlich sortieren.

Binde sie mit einem **relativen** Pfad ein:

```markdown
![Forge-Installer mit ausgewähltem „Install server“](images/forge-installer-schritt3.webp)
```

Verwende nie eine absolute URL auf GitHub-Rohdaten. Relativ ist richtig.

Videos liegen nach derselben Regel im Ordner `videos/` neben den
Markdown-Dateien und werden relativ als `![Clip](videos/clip.mp4)` eingebunden.

### Bildregeln

- **Format:** WebP, wo immer es geht. PNG nur, wenn Transparenz oder
  Pixelgenauigkeit zählt. Vermeide JPEG für Oberflächen-Screenshots, das macht
  die Schrift unscharf.
- **Größe:** Halte jede Datei unter **500 KB**. Die meisten Screenshots landen
  als WebP bei Qualität 80 zwischen 100 und 300 KB.
- **Abmessungen:** Höchstens 1920px breit. Skaliere vor dem Commit.
- **Alt-Text:** Wird im Review verlangt. Beschreibe, was zu sehen ist, nicht
  „Screenshot der Modpack-Seite“. Screenreader und Suchmaschinen lesen ihn.
- **Keine animierten GIFs.** Wenn Du Bewegung brauchst, nimm ein kurzes Video
  (siehe Showcase) oder zerlege die Bewegung in nummerierte Schritte.
- **Eng zuschneiden.** Zeige nicht das ganze Browserfenster, außer die
  Adressleiste oder der Tab-Titel gehört zur Aussage.
- **Geheimnisse schwärzen.** Tokens, IP-Adressen anderer Kunden, echte
  E-Mail-Adressen. Im Zweifel unkenntlich machen.

---

## Übersetzungen

**Jede Anleitung erscheint in beiden Sprachen.** Die Sprachprüfung läuft durch
den Baum und schlägt fehl, wenn einem Blatt `de.md` oder `en.md` fehlt oder wenn
eine der beiden Dateien etwas anderes als `available_languages: ["de", "en"]`
angibt. Sie läuft lokal mit `npm run check-languages`, und ein Reviewer merged
keine Anleitung, die es nur in einer Sprache gibt.

Wenn Du nur eine der beiden Sprachen schreiben kannst, öffne den Pull Request
trotzdem und schreib es in die Beschreibung. Jemand hilft Dir vor dem Merge mit
der zweiten Datei.

- **Eine Datei pro Sprache**, benannt nach dem Sprachcode: `en.md`, `de.md`.
- **Gleiche Frontmatter-Schlüssel, übersetzte Werte.** Übersetzt werden `title`,
  `description`, `short_title`, `author_description` und der Text. Der `slug`
  unterscheidet sich pro Sprache (siehe
  [Slugs pro Sprache](#slugs-pro-sprache)); der Blatt-Ordnername bleibt in beiden
  englisch.
- **`available_languages` steht in der Datei**, es wird nicht abgeleitet. Lass es
  auf `["de", "en"]`.
- **Hinweis auf den Übersetzungsstand.** Wenn eine deutsche Seite nach einer
  Aktualisierung hinter der englischen zurückliegt, schreib das in einen Alert
  oben auf der veralteten Seite:

  ```markdown
  > [!NOTE]
  > Diese Seite wurde zuletzt am 2026-03-01 aktualisiert. Die englische Version ist neuer.
  ```

---

## Namenskonventionen

Einheitliche Namen machen die URLs vorhersehbar und das Repository navigierbar.

### Kanonischer Blatt-Ordnername (der englische Slug)

- **Sprache:** Englisch.
- **Schreibweise:** klein, kebab-case.
- **Ein Segment**, keine Schrägstriche.
- **Verben:** beginne mit einem Verb, wo es passt: `install-`, `configure-`,
  `change-`, `migrate-`, `restore-`, `secure-`.
- **Keine Versionsnummern** im Slug, außer die Anleitung ist wirklich
  versionsspezifisch und eine neuere Version hat eine eigene Anleitung. Bevorzuge
  zeitlose Slugs und datiere stattdessen den Inhalt.
- **Beispiele:**
  - `install-minecraft-mods`
  - `change-ssh-port`
  - `setup-teamspeak-server`
  - `migrate-domain-to-emeraldhost`
  - `secure-rootserver-with-fail2ban`

### Slugs pro Sprache

Das Frontmatter-Feld `slug` ist der Slug aus einem Segment für genau diese
Sprache. Die englische Datei nutzt denselben Wert wie der Blatt-Ordnername (den
kanonischen Anker), die deutsche Datei den deutschen Themen-Slug, zum Beispiel
`admin-hinzufuegen` für einen englischen Ordner namens `add-admin`.

### Dateinamen

- **Immer `<sprache>.md`** direkt im Anleitungsordner.
- **Der Ordnerpfad ist englisch.** Der deutsche Titel und der deutsche `slug` im
  Frontmatter sind das, was Leserinnen und Leser auf der deutschen Seite sehen;
  der Ordnerpfad bleibt englisch, damit sprachübergreifende Links zueinander
  passen.

### Bildnamen

- kebab-case und beschreibend: `modpack-suche.webp`, `firewall-regel-22.webp`.
- Endung `.webp`, wo möglich. Für Diagramme ist PNG in Ordnung.

### Branch-Namen

- `tutorial/<slug>` für neue Anleitungen: `tutorial/change-ssh-port`.
- `fix/<slug>-<kurz>` für Korrekturen: `fix/install-minecraft-mods-broken-link`.
- `translate/<slug>-<sprache>` für Übersetzungen: `translate/change-ssh-port-de`.

### Commit-Nachrichten

Wir folgen [Conventional Commits](https://www.conventionalcommits.org/):

```text
docs(install-minecraft-mods): add Forge 1.20.4 instructions
fix(change-ssh-port): correct firewall command for Debian 12
docs(change-ssh-port): translate to German
```

---

## Prüfungen

Du kannst einen Pull Request öffnen, ohne etwas zu installieren: die Prüfungen
unten laufen automatisch darauf. Wenn Du das Ergebnis lieber vor dem Push sehen
willst, brauchst Du Node und einen Befehl:

```bash
npm install
npm run check
```

Das führt vier Prüfungen aus:

| Befehl                     | Was geprüft wird                                                          | Im Pull Request     |
| -------------------------- | ------------------------------------------------------------------------- | ------------------- |
| `npm run frontmatter`      | Pflichtfelder, Slug-Regeln und eine Kategorie-Datei für jedes Pfad-Segment | Blockiert den Merge |
| `npm run lint`             | Markdown-Formatierung                                                     | Blockiert den Merge |
| `npm run check-links`      | Interne Links und Bildpfade                                               | Blockiert den Merge |
| `npm run check-languages`  | Beide Sprachen vorhanden, mit passendem `available_languages`             | Blockiert den Merge |

Jede läuft auch einzeln, wenn Du einen Fehler eingrenzen willst.

Alle vier blockieren den Merge. Am schnellsten kommst Du also durch, wenn Du
`npm run check` vor dem Push ausführst.

---

## PR-Checkliste

Bevor Du Deinen Pull Request zum Review freigibst, geh diese Liste durch.
Reviewer nutzen dieselbe Liste, das Abhaken spart also eine Runde.

Angenommene Beiträge belohnen wir mit EmeraldHost-Guthaben. Die Beträge und den
Weg Deiner Kundennummer zu uns findest Du unter
[Deine Belohnung](./README.de.md#deine-belohnung).

- [ ] Der Branch-Name folgt der [Konvention](#branch-namen).
- [ ] Der Ordnerpfad ist `tutorials/<gruppe>/[<bereich>/][<unterkategorie>/]<thema>/`,
      alles kebab-case, mit `<thema>` als kanonischem englischem Slug.
- [ ] Für jedes übergeordnete Segment des Pfads existiert eine passende
      `categories/<...>.yaml`.
- [ ] Der Dateiname ist `<sprache>.md`, also `en.md` oder `de.md`.
- [ ] Das Frontmatter enthält `slug`, `language`, `title`, `description` und
      `date`.
- [ ] `slug` ist ein einzelnes Segment in kebab-case ohne Schrägstriche. Bei
      `en.md` entspricht er dem Blatt-Ordnernamen, bei `de.md` ist es der
      deutsche Themen-Slug.
- [ ] `language` passt zum Dateinamen.
- [ ] `description` ist ein Satz unter 160 Zeichen.
- [ ] `de.md` und `en.md` existieren beide und geben
      `available_languages: ["de", "en"]` an.
- [ ] Der Text enthält keine Überschrift erster Ebene. Oberste Abschnitte nutzen
      `##`.
- [ ] Jeder Code-Block hat eine Sprachangabe.
- [ ] Schritte sind Punkte einer nummerierten Liste mit fettem Titel und
      Backslash am Zeilenende.
- [ ] Hervorgehobene Kästen sind GitHub-Alerts (`> [!NOTE]` und so weiter), kein
      `<Callout>`.
- [ ] Roh-HTML beschränkt sich auf die Tags aus dem Showcase; `<b>`, `<br>` und
      `<img>` stehen stattdessen als Markdown da.
- [ ] Keine Geviertstriche im Text.
- [ ] Querverweise nutzen `/tutorials/` plus den Ordnerpfad der Anleitung statt
      Dateipfaden; `related` nutzt denselben Pfad ohne das Präfix `/tutorials`.
- [ ] Screenshots sind von `chrome_AbCd123.png` auf sprechende Namen umbenannt.
- [ ] Alle Bilder liegen im `images/`-Ordner der Anleitung und werden relativ als
      `images/foo.webp` eingebunden.
- [ ] Bilder sind nach Möglichkeit WebP, je unter 500 KB, mit beschreibendem
      Alt-Text.
- [ ] Keine Geheimnisse, Tokens oder IP-Adressen anderer Kunden in Screenshots.
- [ ] Du hast die Anleitung einmal komplett gelesen und sie ergibt von Anfang bis
      Ende Sinn.
- [ ] Die Commit-Nachrichten folgen Conventional Commits.
- [ ] Die Beschreibung des Pull Requests erklärt das „Warum“, nicht nur das
      „Was“.
- [ ] Wenn Du das EmeraldHost-Guthaben möchtest, steht Deine Kundennummer aus
      [Account](https://emeraldhost.de/de/dashboard/account) im Pull
      Request.

---

## Verhaltenskodex und Lizenz

### Verhaltenskodex

Sei respektvoll, sei geduldig, unterstelle gute Absichten. Belästigung und
diskriminierendes Verhalten dulden wir nicht, weder in Issues noch in Pull
Requests oder Reviews. Reviewer halten sich an denselben Maßstab. Die
ausführliche Fassung liegt als [Code of Conduct](./CODE_OF_CONDUCT.md) auf
Englisch im Repository.

### Lizenz

Alles in diesem Repository steht unter der
[MIT-Lizenz](./LICENSE). Mit dem Öffnen eines Pull Requests stimmst Du zu, dass
Dein Beitrag unter dieser Lizenz steht und dass Du das Recht hast, ihn
einzureichen.

Screenshots fremder Software, zum Beispiel des Minecraft-Launchers, von
CurseForge oder des TeamSpeak-Clients, bleiben Eigentum der jeweiligen
Anbieter. Wir nutzen sie zu Erklärzwecken.

Wenn davon etwas unklar ist, frag im Pull Request nach, bevor gemerged wird.

---

Danke fürs Mitmachen. Jede Anleitung, die Du schreibst, spart Dutzende
Support-Tickets und hilft der nächsten Person, die um 2 Uhr nachts vor demselben
Problem sitzt.
