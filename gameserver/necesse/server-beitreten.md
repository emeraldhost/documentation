---
description: Einem Necesse Server beitreten
---

# So trittst du deinem Necesse Server bei

Necesse hat **keinen öffentlichen Serverbrowser**. Du trägst deinen Server einmalig von Hand im Multiplayer-Menü ein und verbindest dich anschließend jederzeit per Doppelklick.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und den Port deines Servers findest du in der **Verwaltung**. Verwende genau den dort angezeigten **Game Port** – Necesse nutzt keinen abweichenden Port für den Beitritt.
::::

## Server hinzufügen und beitreten

1. <b>Necesse starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

3. <b>Server hinzufügen</b><br>
   Klicke auf **Add Server**.

4. <b>Verbindungsdaten eintragen</b><br>
   Trage die Daten deines Servers ein:

   - **Name** – ein frei wählbarer Anzeigename für deine Serverliste
   - **IP** – die IPv4-Adresse aus deiner Verwaltung
   - **Port** – der **Game Port** aus deiner Verwaltung

   :::: tip Beispiel
   ```
   Name:  Mein Necesse Server
   IP:    123.45.67.89
   Port:  Game Port aus der Verwaltung
   ```
   ::::

5. <b>Eintrag speichern</b><br>
   Bestätige mit **Add**. Dein Server erscheint jetzt dauerhaft in deiner Serverliste.

6. <b>Beitreten</b><br>
   Klicke doppelt auf den Eintrag, um dich zu verbinden.

:::: tip Tipp
Möchtest du dich nur einmalig verbinden, ohne den Server dauerhaft zu speichern, kannst du stattdessen die Direktverbindung nutzen. Sie fragt dieselben Daten ab, legt aber keinen Listeneintrag an.
::::

## Passwortgeschützter Server

Ist für deinen Server ein Passwort gesetzt, fragt Necesse es beim Verbinden ab. Gib das Passwort genau so ein, wie es in deiner Verwaltung hinterlegt ist – Groß- und Kleinschreibung müssen übereinstimmen.

## Welchen Port nutzt Necesse?

:::: info Hinweis
Ein Necesse Server belegt nur einen einzigen Port, den **Game Port** (UDP). Einen separaten **Query Port** gibt es nicht – im Spiel trägst du deshalb exakt den Game Port ein, der in deiner Verwaltung steht.
::::

:::: warning Server nicht erreichbar
Prüfe zuerst in der Verwaltung, ob dein Server tatsächlich läuft. Achte anschließend darauf, dass IP-Adresse und Game Port exakt übernommen wurden – ein Zahlendreher im Port ist die häufigste Ursache für eine fehlgeschlagene Verbindung.
::::

:::: warning Version prüfen
Client und Server müssen dieselbe Spielversion nutzen. Nach einem Update deines Spiels kann eine Verbindung fehlschlagen, bis auch dein Server auf demselben Stand ist.
::::
