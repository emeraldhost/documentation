---
slug: "markdown-showcase"
language: "de"
title: "Markdown-Showcase: alle unterstützten Komponenten"
short_title: "Markdown-Showcase"
description: "Vorschau aller unterstützten Markdown-Features und Custom-Komponenten im EmeraldHost-Guide-System."
tags: ["test", "markdown", "showcase"]
date: "2026-06-02"
visibility: "internal"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
---

Diese Seite zeigt alle Markdown-Features und Komponenten, die das Guide-System unterstützt. Jeder Abschnitt demonstriert genau ein Feature, so dass Du auf einen Blick siehst, wie es rendert. Die Überschriften benennen das Feature, nicht das Thema.

## 1. Überschriften

Das Frontmatter liefert die H1. Im Text verwenden wir Überschriften ab H2.

### H3: Unterabschnitt

#### H4: Tiefere Ebene

##### H5: Noch tiefer

###### H6: Tiefste Ebene

## 2. Absätze und Textauszeichnung

Ein normaler Absatz fließt einfach weiter. Eine Leerzeile beginnt einen neuen Absatz.

Im Fließtext nutzen wir *kursiv*, **fett**, ***fett-kursiv*** und ~~durchgestrichen~~. Für Hervorhebung gibt es kein dediziertes Markdown-Zeichen, also verwenden wir das HTML-Tag <mark>hervorgehoben</mark>. Genauso funktionieren <u>unterstrichen</u>, H<sub>2</sub>O und x<sup>2</sup> über die jeweiligen HTML-Tags.

## 3. Inline-Code und Tastenkürzel

Inline-Code wie `apt update` oder `nginx -t` bleibt einzeilig. Tastenkürzel rendern wir mit <kbd>Strg</kbd>+<kbd>C</kbd> für Linux und <kbd>⌘</kbd>+<kbd>K</kbd> für macOS.

## 4. Code-Blöcke in verschiedenen Sprachen

### Bash mit Titel

```bash title="install.sh"
apt update
apt install -y nginx
systemctl reload nginx
```

### YAML mit Titel

```yaml title="docker-compose.yml"
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    environment:
      NGINX_HOST: emeraldhost.de
      NGINX_PORT: "80"
```

### JSON mit Titel

```json title="config.json"
{
  "name": "showcase",
  "version": 3,
  "enabled": true,
  "owner": null,
  "endpoints": {
    "primary": "https://api.example.com",
    "fallback": "https://api.fallback.example.com"
  }
}
```

### PHP mit Titel

```php title="App\Services\Foo.php"
<?php

namespace App\Services;

final class Foo
{
    public function greet(string $name): string
    {
        return "Hallo, {$name}";
    }
}
```

### JavaScript mit Titel

```javascript title="serve.js"
import express from 'express';

const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(3000, () => console.log('Listening on :3000'));
```

### Nginx mit Titel

```nginx title="server.conf"
server {
    listen 80;
    server_name emeraldhost.de;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
    }
}
```

### Plain Text ohne Sprache und ohne Titel

```text
Verbindung hergestellt mit sftp.emeraldhost.de
Datei hochgeladen: my-plugin.jar (482 KB)
Sitzung beendet.
```

## 5. Tabellen

### Schmale Key-Value-Tabelle

| Schlüssel | Wert                |
| --------- | ------------------- |
| Host      | sftp.emeraldhost.de |
| Port      | 2022                |
| Protokoll | SFTP                |

### Breite Tabelle mit Ausrichtung

| Linksbündig | Zentriert  | Rechtsbündig |
| :---------- | :--------: | -----------: |
| Eintrag A   | wichtig    |        12,50 |
| Eintrag B   | optional   |       128,00 |
| Eintrag C   | veraltet   |     2.048,75 |

## 6. Aufgabenlisten

- [x] Server-Image ausgewählt
- [x] Region in Frankfurt gesetzt
- [x] SSH-Key hinterlegt

Zwischen den Aufgaben darf ganz normale Prosa stehen, um zu zeigen, dass die Liste sauber wieder aufgenommen wird.

- [ ] Firewall-Regeln prüfen
- [ ] Backup-Cron einrichten
- [ ] Monitoring-Agent installieren

## 7. Listen

### Unsortierte Liste mit Verschachtelung

- Gameserver
  - Minecraft (Java)
  - Minecraft (Bedrock)
  - Aloft
- Rootserver
- TeamSpeak

### Geordnete Liste

1. Bestellung im Dashboard auslösen
2. Auf die Bereitstellung warten
3. Verbindung per SSH testen

### Geordnete Liste mit eingebetteter unsortierter Liste

1. Initiale Konfiguration vornehmen
   - Hostname setzen
   - Zeitzone wählen
   - Pakete aktualisieren
2. Anwendung installieren
3. Monitoring aktivieren

## 8. Blockzitate

> Wer Backups erst nach dem ersten Datenverlust einrichtet, hat schon verloren. Plane Wiederherstellung, nicht nur Sicherung.

## 9. GitHub-Alerts

<!-- markdownlint-disable MD028 -->

> [!NOTE]
> Diese Anleitung gilt für alle Tarife. Falls Du `nginx -t` nicht ausführen darfst, fehlt Dir die nötige sudo-Berechtigung.

> [!TIP]
> Lege vor jedem Update einen Snapshot an. Mit `emerald snapshot create` ist das in wenigen Sekunden erledigt.

> [!IMPORTANT]
> Die Option `--purge` löscht auch Konfigurationsdateien. Verwende stattdessen `apt remove`, wenn Du Konfigurationen behalten willst.

> [!WARNING]
> Ein Neustart trennt aktive SFTP-Sitzungen. Plane Wartungsfenster so, dass Deine Nutzer:innen Bescheid wissen.

> [!CAUTION]
> Mit `rm -rf /var/lib/minecraft` löschst Du Deine gesamte Welt. Es gibt keinen Bestätigungsdialog, und kein Papierkorb fängt das auf.

<!-- markdownlint-enable MD028 -->

## 10. Interne Links

Mehr dazu unter [unsere SFTP-Anleitung](/tutorials/gameserver/establish-sftp-connection). Wenn Du Netzwerkprobleme dokumentieren willst, ist [PCAP-Datei erstellen](/tutorials/rootserver/tips-troubleshooting/create-pcap-file) ein guter Startpunkt.

## 11. Externe Links

Die offizielle Nginx-Dokumentation findest Du unter <https://nginx.org/en/docs/> oder als [benannter Link auf nginx.org](https://nginx.org/en/docs/). Beide Varianten sollen im Frontend gleich aussehen.

## 12. Fußnoten

Wir verwenden eine Inline-Referenz[^1] und zeigen unten die Definition. Eine zweite Fußnote[^backup] zeigt, wie eine zweite Definition aussieht.

## 13. Attribut-Block mit Anker

<a name="custom-anchor"></a>

### Mein Abschnitt

Diese Überschrift hat einen festen Anker und kann mit `#custom-anchor` direkt verlinkt werden. Der `<a name="…"></a>`-Inline-Anker ist [GitHubs offiziell dokumentiertes Pattern](https://docs.github.com/de/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#custom-anchors); nutze ihn, denn die alternative Attribut-Block-Form (`### Mein Abschnitt {#custom-anchor}`) rendert auf unserer Seite korrekt, erscheint auf GitHub aber als literaler Text.

## 14. Bilder

Bilder folgen der Standard-Markdown-Syntax `![alt](url)`. Bilder aus dem `images/`-Ordner des Tutorials werden auf der Website angezeigt, externe URLs funktionieren genauso.

![Beispielbild 1200x600 als Demonstration](https://placehold.co/1200x600/png)

![Schmaleres Beispielbild 800x300](https://placehold.co/800x300/png)

## 15. Horizontale Trennlinie

Vor der Trennlinie steht dieser Absatz.

---

Nach der Trennlinie geht es hier weiter. Die `hr`-Linie soll deutlich sichtbar sein und Abschnitte optisch trennen.

## 16. Details und Summary

<details>
<summary>Erweiterte Konfigurationsoptionen einblenden</summary>

Hier stehen Details, die nur bei Bedarf sichtbar sein müssen, zum Beispiel selten genutzte Flags wie `--max-old-space-size=4096` oder `--experimental-modules`.

```bash
node --max-old-space-size=4096 serve.js
```

</details>

## 17. Video

Es gibt zwei Wege, weil github.com ein Video aus dem Repository nicht selbst abspielt. Wähle pro Video den Weg danach aus, wo es laufen soll.

### 17a. Im Repo committed (unsere Seite spielt, GitHub zeigt nur Link)

Leg die Datei in den `videos/`-Ordner der Anleitung und binde sie mit der normalen Markdown-Bildsyntax ein. Auf unserer Seite läuft das Video, auf github.com erscheint stattdessen ein Link zur Datei.

![Beispielclip](videos/sample.mp4)

Nimm diesen Weg, wenn das Video zur Quelle des Artikels gehört: versioniert, in Branches änderbar und im Pull Request prüfbar.

### 17b. Via GitHub-UI hochgeladen (beide Seiten spielen)

Zieh ein `.mp4`/`.webm`/`.mov` (höchstens 10 MB im kostenlosen Plan, 100 MB in bezahlten Plänen) in einen GitHub-Issue- oder PR-Kommentar-Entwurf. GitHub lädt es ins `user-images.githubusercontent.com` CDN und gibt einen fertigen `<video>`-Tag mit der URL zurück. Den Block kopierst Du wörtlich ins Markdown. Beide Renderer spielen das ab.

```html
<video controls muted playsinline src="https://user-images.githubusercontent.com/USER/ID-uuid.mp4"></video>
```

Nimm diesen Weg, wenn die Vorschau auf GitHub das Video zeigen soll und Du damit leben kannst, dass die Datei in GitHubs User-Content liegt und nicht im Repository.

### Direktes `<video>` für Custom-Attribute

Egal welche URL-Quelle: wenn Du volle Kontrolle brauchst (Multi-Codec-Fallback via `<source>`, eigenes Poster, Autoplay-Flags), schreib das `<video>`-Tag direkt. Die `src`/`poster`/`source src`-Attribute akzeptieren sowohl Repo-relative `videos/`/`images/`-Pfade als auch absolute User-Content-URLs.

## 18. YouTube-Embed

Eine YouTube-URL alleine auf einer Zeile wird automatisch zu einem eingebetteten Player. Vor der ersten Interaktion mit dem Player werden keine Tracking-Cookies von Drittanbietern gesetzt.

<!-- markdownlint-disable-next-line MD034 -->
https://www.youtube.com/watch?v=wL2MFdB98gc

Inline-Links wie [Trailer ansehen](https://www.youtube.com/watch?v=wL2MFdB98gc) bleiben normale Links, nur Standalone-URLs bekommen den Player. Unterstützte URL-Formen: `youtube.com/watch?v=ID`, `youtu.be/ID`, `youtube.com/embed/ID`, `youtube.com/shorts/ID`.

Hinweis: GitHub rendert das Embed nicht, iframes werden dort entfernt. Auf github.com siehst Du die URL als klickbaren Link, auf unserer Seite den vollen Player.

[^1]: Diese erste Fußnote erklärt, dass alle Befehle als root oder mit `sudo` ausgeführt werden sollten.
[^backup]: Diese zweite Fußnote ist ein Platzhalter, damit Du zwei Definitionen nebeneinander siehst.
