---
description: Spieler auf einem FiveM Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem FiveM Server

Für die Moderation deines FiveM Servers hast du zwei Wege: die **txAdmin-Weboberfläche** und die **Server-Konsole**. In txAdmin kickst, verwarnst und bannst du Spieler per Klick und kannst Bans später wieder aufheben. Über die Konsole kannst du Spieler ausschließlich kicken – einen eingebauten Ban-Befehl bringt FXServer nicht mit.

:::: info Hinweis
Ob txAdmin läuft, steuerst du in der Verwaltung über das Feld **txAdmin** (`1` = aktiv, `0` = deaktiviert). Beim Serverstart gibt txAdmin die Adresse seiner Weboberfläche in der Konsole aus. Wie du txAdmin einrichtest, steht unter [txAdmin aktivieren](txadmin-aktivieren.md).
::::

## Spieler in txAdmin finden

1. <b>txAdmin öffnen</b><br>
   Rufe die txAdmin-Weboberfläche deines Servers auf und melde dich mit deinem Admin-Zugang an.

2. <b>Spielerliste öffnen</b><br>
   Alle verbundenen Spieler stehen in der Spielerliste am rechten Rand. Über das Feld **Filter by Name or ID** grenzt du die Liste ein.

3. <b>Spieler-Fenster öffnen</b><br>
   Klicke auf den Namen des Spielers. Es öffnet sich ein Fenster mit den Reitern **Info**, **History**, **IDs** und **Ban** sowie den Schaltflächen **DM**, **Kick** und **Warn**.

:::: info Hinweis
Spieler, die gerade offline sind, findest du oben im Menü unter **Players**. Dort kannst du nach **Name**, **Notes** oder **Player IDs** suchen. **Bannen** und **Verwarnen** funktioniert auch bei offline Spielern, **Kicken** nur bei Spielern, die gerade verbunden sind.
::::

## Spieler kicken

1. <b>Spieler-Fenster öffnen</b><br>
   Öffne das Fenster des Spielers wie oben beschrieben.

2. <b>Kick auswählen</b><br>
   Klicke unten im Fenster auf **Kick**.

3. <b>Grund eingeben</b><br>
   Trage einen Grund ein oder lass das Feld leer und bestätige mit **Send**.

:::: info Hinweis
Ein Kick entfernt den Spieler nur aus der laufenden Sitzung. Er kann sich danach sofort wieder verbinden. Soll jemand dauerhaft draußen bleiben, nutze einen Ban.
::::

:::: tip Tipp
Willst du alle Spieler auf einmal entfernen, klickst du in der linken Seitenleiste bei den Server-Steuerungen auf **Kick All Players**.
::::

## Spieler bannen

1. <b>Spieler-Fenster öffnen</b><br>
   Öffne das Fenster des Spielers und wechsle in den Reiter **Ban**.

2. <b>Grund eintragen</b><br>
   Trage im Feld **Reason** den Grund für den Ban ein. Der Grund muss mindestens drei Zeichen lang sein.

3. <b>Dauer auswählen</b><br>
   Wähle unter **Duration** eine der Vorgaben aus:

   | Auswahl | Bedeutung |
   |---------|-----------|
   | `Custom (set below)` | eigene Dauer |
   | `2 HOURS` / `8 HOURS` | 2 bzw. 8 Stunden |
   | `1 DAY` / `2 DAYS` | 1 bzw. 2 Tage |
   | `1 WEEK` / `2 WEEKS` | 1 bzw. 2 Wochen |
   | `Permanent` | dauerhaft |

   Bei **Custom (set below)** trägst du darunter eine Zahl ein und wählst als Einheit **HOURS**, **DAYS**, **WEEKS** oder **MONTHS**.

4. <b>Ban ausführen</b><br>
   Klicke auf **Apply Ban**. Ist der Spieler gerade verbunden, wird er sofort vom Server getrennt.

:::: info Hinweis
Der Ban gilt für alle Kennungen (Identifier), die txAdmin von diesem Spieler gespeichert hat – nicht nur für seinen Namen. Beim nächsten Verbindungsversuch sieht der Spieler eine Meldung mit **Ban Reason**, **Ban Date**, **Banned by** und der **Ban ID**.
::::

:::: tip Tipp
Wiederkehrende Gründe legst du dir als Vorlage an: **Settings** → **Bans** → **Edit Ban Templates**. Auf derselben Seite steht die **Ban Rejection Message** – ein optionaler Text, der dem gebannten Spieler zusätzlich angezeigt wird. Wenn du ein Einspruchsverfahren hast, kannst du die Spieler dort darauf hinweisen.
::::

## Ban aufheben

1. <b>History öffnen</b><br>
   Klicke oben im Menü auf **History**. Dort stehen alle Verwarnungen und Bans.

2. <b>Eintrag suchen</b><br>
   Suche den Ban über die **Action ID** (Format `XXXX-XXXX`), über **Reason** oder über **Player IDs**. Zusätzlich kannst du nach Typ und nach ausführendem Admin filtern.

   :::: tip Tipp
   Die Action ID ist genau die **Ban ID**, die dem gebannten Spieler beim Verbindungsversuch angezeigt wird. Lass sie dir vom Spieler nennen, dann findest du den Eintrag sofort.
   ::::

3. <b>Eintrag öffnen</b><br>
   Klicke auf den Eintrag. Es öffnet sich ein Fenster mit den Reitern **Info**, **IDs** und **Revoke**.

4. <b>Ban zurücknehmen</b><br>
   Wechsle in den Reiter **Revoke** und klicke auf **Revoke Ban**.

:::: info Hinweis
Du erreichst denselben Dialog auch direkt aus dem Spieler-Fenster: Im Reiter **History** klickst du dort einfach auf den betreffenden Eintrag.
::::

## Spieler über die Server-Konsole kicken

:::: info Hinweis
Welche Konsole du brauchst, hängt vom Feld **txAdmin** ab: Steht es auf `1`, steuert txAdmin den eigentlichen Serverprozess – gib deine Befehle dann in der **Live Console** ein, die du in txAdmin in der linken Seitenleiste findest. Steht es auf `0`, startet dein Server direkt mit `+exec server.cfg` und du nutzt die Konsole in der Verwaltung.
::::

:::: warning Achtung
In der Konsole werden Befehle **ohne** vorangestellten Schrägstrich eingegeben.
::::

1. <b>Konsole öffnen</b><br>
   Öffne die **Live Console** in txAdmin oder – bei deaktiviertem txAdmin – die Konsole in der Verwaltung.

2. <b>Spieler-ID ermitteln</b><br>
   Lass dir die verbundenen Spieler ausgeben:

   ```
   status
   ```

   Die Ausgabe enthält je Spieler die Server-ID, den Namen, die primäre Kennung und den Ping.

3. <b>Spieler kicken</b><br>
   Kicke den Spieler über seine Server-ID und gib einen Grund an:

   ```
   clientkick 12 Regelverstoss
   ```

:::: info Hinweis
`status` und `clientkick` stammen aus der Standard-Ressource `rconlog`. Sie muss laufen, damit die Befehle verfügbar sind – in der Standard-`server.cfg` sorgt dafür die Zeile `ensure rconlog`.
::::

:::: warning Achtung
Einen eingebauten Ban-Befehl gibt es in FXServer nicht. Bans setzt du entweder über txAdmin oder über das Ban-System deines Frameworks bzw. Skripts.
::::

## Berechtigungen für dein Team

Welcher Admin kicken oder bannen darf, legst du in txAdmin unter **Admins** fest. Relevant sind dabei:

- `players.kick` – Spieler kicken
- `players.warn` – Spieler verwarnen
- `players.ban` – Spieler bannen und entbannen
- `console.write` – Befehle in der Live Console ausführen

:::: tip Tipp
Vergib nur die Rechte, die wirklich gebraucht werden. Ein Moderator kommt in der Regel mit `players.kick`, `players.warn` und `players.ban` aus – Rechte wie `control.server` oder `settings.write` braucht er dafür nicht.
::::
