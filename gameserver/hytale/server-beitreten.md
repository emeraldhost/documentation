---
description: Einem Hytale Server beitreten
---

# So trittst du deinem Hytale Server bei

Du trittst deinem Server über **Direct Connect** bei oder speicherst ihn für spätere Verbindungen in deiner Server-Liste.

## Verbindungsdaten finden

:::: info Hinweis
Die IP-Adresse und den **Game Port** deines Servers findest du in der **Verwaltung** deines Servers unter der Übersicht. Im Spiel gibst du beides zusammen ein, getrennt durch einen Doppelpunkt.
::::

## Über Direct Connect

1. <b>Hytale starten</b><br>
   Öffne den Hytale Launcher und starte das Spiel.

2. <b>Server-Menü öffnen</b><br>
   Klicke im Hauptmenü auf **Servers**.

3. <b>Direct Connect wählen</b><br>
   Klicke unten rechts auf **Direct Connect**.

4. <b>Serveradresse eingeben</b><br>
   Gib die IP-Adresse und den Game Port deines Servers ein und klicke auf **Connect**:
   ```
   <IP-Adresse>:<Game Port>
   ```

5. <b>Passwort eingeben</b><br>
   Ist für deinen Server ein [Passwort](passwort-setzen.md) gesetzt, fragt Hytale jetzt danach.

## Server speichern

Um den Server für zukünftige Verbindungen zu speichern:

1. <b>Server hinzufügen</b><br>
   Klicke im Server-Menü unten rechts auf **Add Server**.

2. <b>Server-Details eingeben</b><br>
   Gib die Adresse im Format `<IP-Adresse>:<Game Port>` in das Feld **Connection Address** ein und vergib einen Namen.

3. <b>Speichern</b><br>
   Klicke auf **Add Server**. Der Server erscheint nun in deiner Server-Liste.

:::: info Hinweis
Hytale unterstützt derzeit keine SRV-Einträge. Verbindest du dich über eine eigene Domain, gib den Port daher immer mit an, z.B. `play.example.com:<Game Port>`.
::::

:::: info Hinweis
Dein Server erscheint nicht automatisch in der **Server Discovery**, der offiziellen Serverliste im Spiel. Server für diese Liste werden im Hytale-Account unter **Server Profiles** eingereicht und von Hytale manuell geprüft. Für den Beitritt über Direct Connect oder deine Server-Liste ist das nicht nötig.
::::

## Wenn die Verbindung nicht klappt

:::: warning Achtung
Kommt keine Verbindung zustande, prüfe der Reihe nach:

- Läuft dein Server? Er ist bereit, sobald in der Konsole der **Verwaltung** `Hytale Server Booted!` erscheint. Direkt nach einem Start oder einem Update kann das einen Moment dauern.
- Stimmen die Versionen überein? Dein Hytale-Client und dein Server müssen exakt dieselbe Protokollversion nutzen. Nach einem Hytale-Update kannst du erst wieder beitreten, wenn auch dein Server aktualisiert ist. Ist in der **Verwaltung** unter **Einstellungen** das Feld **Auto Update** aktiv und steht das Feld **Hytale Version** auf `latest` (beides Standard), prüft dein Server bei jedem Start, ob eine neue Version verfügbar ist. Ein Neustart reicht dann aus.
- Passt die Patchline? Spielst du im Launcher die Pre-Release-Version, passt dein Client in der Regel nicht zu einem Server auf der Patchline `release`. Die Patchline deines Servers stellst du in der **Verwaltung** unter **Einstellungen** im Feld **Hytale Patchline** ein (`release` oder `pre-release`).
- Ist die [Whitelist](whitelist-aktivieren.md) aktiv? Dann können nur freigeschaltete Spieler beitreten.
::::

:::: danger Wichtig
Erstelle ein [Backup](backup-erstellen.md), bevor du die Patchline wechselst. Eine Welt, die einmal auf einer neueren Pre-Release-Version geladen wurde, lässt sich auf einem älteren Server unter Umständen nicht mehr öffnen.
::::
