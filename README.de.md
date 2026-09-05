# EmeraldHost Anleitungen

*Read this in [English](./README.md).*

In diesem Repository liegt jede Anleitung, die auf der EmeraldHost-Website
erscheint:

- Deutsch: <https://emeraldhost.de/de/anleitungen>
- Englisch: <https://emeraldhost.de/en/guides>

Jede Anleitung ist eine einfache Markdown-Datei mit einem kleinen YAML-Kopf.
Du änderst hier eine Datei, öffnest einen Pull Request, und nach dem Merge ist
die Anleitung wenige Minuten später auf der Website live. Kein Build-Schritt,
kein Website-Zugang, keine Spezialwerkzeuge.

## Was Du hier findest

- **Schritt-für-Schritt-Anleitungen** zu Gameservern, Rootservern, TeamSpeak
  und Domains.
- **Allgemeine Anleitungen**, die für jedes Produkt gelten, zum Beispiel wie Du
  Dir den Neukunden-Rabatt sicherst.
- **Screenshots**, die zu einer Anleitung gehören und direkt daneben liegen.
- **Kategorie-Dateien**, die jedem Bereich Namen und Beschreibung geben.

Geschrieben wird das alles vom EmeraldHost-Team und von Kundinnen und Kunden wie
Dir. Wenn eine Anleitung falsch, veraltet oder gar nicht vorhanden ist, kannst Du
das selbst beheben.

## Wie die Inhalte aufgebaut sind

```text
tutorials/
  <gruppe>/             # gameserver, rootserver, teamspeak, domains, general
    <bereich>/          # optionaler Unterbereich, z. B. minecraft oder linux
      <unterkategorie>/ # optional, z. B. plugins unter einem Spiel
        <thema>/        # ein Ordner pro Anleitung, englisch benannt
          de.md         # deutsche Fassung
          en.md         # englische Fassung
          images/       # Screenshots zu dieser Anleitung
          videos/       # kurze Clips, nur wenn eine Anleitung eines braucht
categories/
  <gruppe>.yaml         # Name und Beschreibung einer Gruppe
  <gruppe>/
    <bereich>.yaml      # Name und Beschreibung eines Unterbereichs
    <bereich>/
      <unterkategorie>.yaml  # Name und Beschreibung einer Unterkategorie
```

Daraus folgen drei Regeln:

1. **Ein Ordner ist eine Anleitung.** Der Ordnername ist das englische Thema in
   Kleinbuchstaben mit Bindestrichen, zum Beispiel `install-plugins`.
2. **Der Pfad ist die Kategorie.** Ein Kategorie-Feld gibt es in der Datei nicht.
   Für jedes Pfad-Segment muss eine passende Datei unter `categories/` liegen.
   Die mittleren Segmente sind optional: das Segment direkt unter `gameserver/`
   ist das Spiel, unter `rootserver/` und `domains/` bündelt es ein Thema, zum
   Beispiel `linux` oder `dns-records`. Zwischen dem Spiel und der Anleitung darf
   eine weitere optionale Unterkategorie liegen, zum Beispiel
   `gameserver/minecraft/plugins/<anleitung>`.
3. **Beide Sprachen liegen nebeneinander.** `de.md` und `en.md` teilen sich den
   Ordner und den `images/`-Ordner.

## In fünf Schritten mitmachen

1. **Forke dieses Repository** auf GitHub und klone Deinen Fork.

   ```bash
   git clone https://github.com/<dein-benutzer>/documentation.git
   cd documentation
   git checkout -b tutorial/install-minecraft-datapacks
   ```

2. **Kopiere die Vorlage** in einen neuen Anleitungsordner, einmal pro Sprache.
   Wähle einen Ordnernamen, den es noch nicht gibt, damit Du eine Anleitung
   anlegst und keine bestehende überschreibst.

   ```bash
   mkdir -p tutorials/gameserver/minecraft/install-datapacks/images
   cp tutorial-template.en.md tutorials/gameserver/minecraft/install-datapacks/en.md
   cp tutorial-template.de.md tutorials/gameserver/minecraft/install-datapacks/de.md
   ```

3. **Schreibe die Anleitung** in beiden Sprachen. Fülle den Kopf aus, formuliere
   kurze Schritte und lege Screenshots in den `images/`-Ordner neben Deine
   Dateien. [`CONTRIBUTING.de.md`](./CONTRIBUTING.de.md) erklärt jedes Feld und
   jede Regel.

4. **Öffne einen Pull Request** gegen `main`. Die Pull-Request-Vorlage listet
   auf, was ein Reviewer prüft. Hake sie am besten vorher selbst ab.

5. **Review und Veröffentlichung.** Eine Maintainerin oder ein Maintainer liest
   Deinen Entwurf und schlägt bei Bedarf Änderungen vor. Nach dem Merge erscheint
   Deine Anleitung innerhalb weniger Minuten auf der Website.

Lokal musst Du nichts ausführen. Die automatischen Prüfungen im Pull Request
sagen Dir, wenn ein Feld im Kopf fehlt, der Markdown-Stil verrutscht ist, ein
interner Link ins Leere zeigt oder die zweite Sprache fehlt. Alles Weitere
schaut sich ein Reviewer an.

## Deine Belohnung

Für jeden angenommenen Beitrag bedanken wir uns mit EmeraldHost Guthaben:
**10,00 €** für eine neue Anleitung und **5,00 €** für eine echte Verbesserung an
einer bestehenden, zum Beispiel einen korrigierten Ablauf, einen fehlenden
Schritt oder eine Übersetzung. Trag Deine Kundennummer beim Öffnen des Pull
Requests ein, damit das Guthaben auf dem richtigen Konto landet. Du findest sie
im Kundenbereich unter
[Account](https://emeraldhost.de/de/dashboard/account).

## Sprachen

Deutsch und Englisch sind gleichwertig. Eine Anleitung erscheint in beiden
Sprachen, und ein Reviewer merged keine Anleitung, die es nur in einer Sprache
gibt. Wenn Du nur eine Sprache schreiben kannst, öffne den Pull Request trotzdem
und schreib es dazu: jemand hilft Dir mit der zweiten Datei.

Der Ordnername bleibt in beiden Sprachen englisch. Übersetzt werden nur der
Inhalt und die Werte im Kopf, damit ein Link funktioniert, egal in welcher
Sprache die Leserin oder der Leser gerade unterwegs ist.

## Wo Du fragen kannst

- **Frage zu einer Anleitung:** öffne ein
  [Issue](https://github.com/emeraldhost/documentation/issues). Es gibt eine
  Vorlage für Korrekturen und eine für die Idee zu einer neuen Anleitung.
- **Frage zu Deinem Produkt oder Deinem Konto:** dafür ist unser Support da.
  Über die [Support-Seite](https://emeraldhost.de/de/support) erreichst Du unser
  Team direkt.
- **Fragen, Ideen oder einfach Austausch:** in unserem
  [Community-Discord](https://discord.emeraldhost.de/) triffst Du andere
  EmeraldHost-Nutzer, die gern bei Fragen zu Servern, Spielen und Anleitungen
  weiterhelfen. Auch unser Team ist dort regelmäßig unterwegs, beantwortet Fragen
  und nimmt Wünsche für neue Anleitungen mit.

Egal welchen Weg Du wählst, es gilt der
[Verhaltenskodex](./CONTRIBUTING.de.md#verhaltenskodex). Die ausführliche Fassung
liegt als [Code of Conduct](./CODE_OF_CONDUCT.md) auf Englisch im Repository.

## Lizenz

[MIT](./LICENSE). Mit dem Öffnen eines Pull Requests bestätigst Du, dass Du das
Recht hast, Deinen Text und Deine Screenshots unter dieser Lizenz beizutragen.
