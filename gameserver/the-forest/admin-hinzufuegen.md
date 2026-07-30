---
description: Admin auf einem The Forest Server hinzufügen
---

# So fügst du einen Admin auf deinem The Forest Server hinzu

The Forest kennt **keine Admin-Liste mit SteamIDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es beim Beitreten einträgt, ist Admin. Du musst also keine IDs sammeln – du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, hat volle Adminrechte auf deinem Server – inklusive Befehlen wie `/ban` und `/shutdown`. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Server-Passwort.
::::

## Admin-Passwort setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Admin-Passwort eintragen</b><br>
   Trage im Feld **Admin Password** dein gewünschtes Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu, damit das neue Passwort übernommen wird.

:::: danger Wichtig
Ab Werk ist ein Standard-Passwort hinterlegt. Ändere es unbedingt, bevor dein Server öffentlich erreichbar ist – sonst kann sich jeder, der das Standard-Passwort kennt, Adminrechte verschaffen.
::::

:::: info Warum nicht in der Konfigurationsdatei?
Der Konfigurationswert dafür heißt `serverPasswordAdmin`. Dein Server übergibt das Admin-Passwort aber beim Start als Parameter, und Startparameter überschreiben passende Einträge aus der Konfigurationsdatei. Ein Eintrag in der `config.cfg` hätte deshalb keine Wirkung – setze das Passwort ausschließlich in der Verwaltung.
::::

## Als Admin beitreten

1. <b>Server auswählen</b><br>
   Starte The Forest, öffne **Multiplayer → Join Game**, stelle die Quelle auf **Dedicated (Internet)** und wähle deinen Server aus. Wie du deinen Server findest, steht unter [Server beitreten](server-beitreten.md).

2. <b>Admin-Passwort eingeben</b><br>
   Es öffnet sich die Passwortabfrage. Trage dein Passwort in das Feld **Admin Password** ein – nicht in das Feld für das normale Server-Passwort.

   :::: info Hinweis
   Ist zusätzlich ein Server-Passwort gesetzt, füllst du beide Felder aus: oben das Server-Passwort, darunter das Admin-Passwort.
   ::::

3. <b>Beitreten</b><br>
   Klicke auf **Join** beziehungsweise **Continue**.

## Adminrechte prüfen

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

2. <b>Befehlsliste aufrufen</b><br>
   Gib folgenden Befehl ein:

   ```
   /help
   ```

3. <b>Ergebnis</b><br>
   Erscheint die Liste der verfügbaren Befehle, hast du Adminrechte. Passiert nichts, wurde das Admin-Passwort beim Beitreten nicht oder falsch eingetragen – verlasse den Server und tritt erneut bei.

:::: tip Tipp
Welche Befehle dir als Admin zur Verfügung stehen und wie du Spieler entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::

:::: info Hinweis
Adminrechte gelten immer nur für die aktuelle Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart musst du das Admin-Passwort beim nächsten Beitritt erneut eintragen.
::::
