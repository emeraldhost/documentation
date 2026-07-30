---
description: Einem Satisfactory Server beitreten
---

# So trittst du deinem Satisfactory Server bei

Satisfactory hat keinen öffentlichen Serverbrowser. Deinen dedizierten Server trägst du im Spiel einmalig über den **Server Manager** ein und verbindest dich anschließend von dort aus.

## Verbindungsdaten finden

:::: warning Wichtig
Die **IP-Adresse** und den **Game Port** deines Servers findest du in deiner **Verwaltung**. Verwende immer die Werte, die dort für deinen Server hinterlegt sind.
::::

Für die Verbindung trägst du im Spiel **nur einen Port** ein: den **Game Port**. Einen separaten Query Port gibt es bei Satisfactory nicht – die Serverabfrage läuft über denselben Port.

## Server im Server Manager hinzufügen

1. <b>Satisfactory starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Server Manager öffnen</b><br>
   Wähle im Hauptmenü **Server Manager**. Du siehst nun die Liste deiner eingetragenen Server – beim ersten Mal ist sie leer.

3. <b>Server hinzufügen</b><br>
   Klicke unten auf **Add Server**.

4. <b>Adresse und Port eintragen</b><br>
   Trage die **IP-Adresse** deines Servers ein und setze den Port auf den **Game Port** aus deiner Verwaltung.

   :::: tip Beispiel
   ```
   Adresse: <IP-Adresse>
   Port:    <Game Port>
   ```
   ::::

5. <b>Eintrag bestätigen</b><br>
   Bestätige den Dialog mit **Confirm**. Der Server wird jetzt abgefragt und erscheint in deiner Serverliste.

6. <b>Beitreten</b><br>
   Wähle deinen Server in der Liste aus und klicke unten rechts auf **Join Game**.

:::: warning Nicht über das Hauptmenü beitreten
Der Punkt **Join Game** im Hauptmenü ist für Sitzungen von Freunden gedacht und findet deinen dedizierten Server nicht. Dedizierte Server erreichst du ausschließlich über den **Server Manager**.
::::

## Adminrechte auf dem Server erhalten

Damit du im Server Manager mehr als den Reiter **Status** nutzen kannst – also Einstellungen ändern, Welten anlegen oder Spielstände verwalten –, musst du dich als Administrator anmelden.

1. <b>Reiter wechseln</b><br>
   Wähle im Server Manager einen beliebigen Reiter außer **Status**. Das Spiel meldet, dass du nicht authentifiziert bist.

2. <b>Authentifizieren</b><br>
   Klicke auf **Authenticate**.

3. <b>Admin Passwort eingeben</b><br>
   Trage das Admin Passwort deines Servers ein und bestätige. Anschließend hast du Zugriff auf alle Reiter des Server Managers.

:::: info Admin Passwort setzen
Wie du das Admin Passwort deines Servers festlegst, erfährst du unter [Admin Passwort setzen](admin-passwort-setzen.md).
::::

## Server beanspruchen (Claim)

Ist für deinen Server noch kein Name und kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. In diesem Fall führt dich das Spiel nach dem Hinzufügen durch zwei Dialoge:

1. <b>Server Namen vergeben</b><br>
   Zuerst fragt das Spiel nach einem Namen für den Server. Dieser Name wird dir später in deiner Serverliste angezeigt.

2. <b>Admin Passwort festlegen</b><br>
   Anschließend legst du das Admin Passwort fest. Wähle ein sicheres Passwort und teile es nur mit Personen, die Adminrechte erhalten sollen.

Danach bist du Administrator des Servers.

:::: warning Erst eine Welt anlegen
Direkt nach dem Beanspruchen läuft auf dem Server noch keine Welt. Lege im Server Manager zuerst über den Reiter **Create Game** eine neue Welt an oder lade über den Reiter **Manage Saves** einen vorhandenen Spielstand hoch. Erst danach kannst du dem Server beitreten.
::::

## Server Passwort

Ist für deinen Server ein Server Passwort gesetzt, wirst du beim Verbinden danach gefragt. Das Server Passwort regelt nur, wer überhaupt auf den Server darf – es ist nicht dasselbe wie das Admin Passwort. Als Admin findest du es im Server Manager im Reiter **Server Settings** unter **Player password protection**.

## Welche Ports nutzt Satisfactory?

:::: info Hinweis
Ein Satisfactory Server belegt zwei Ports:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| **Game Port** | TCP + UDP | Spieldaten und Serverabfrage – **diesen Port trägst du im Spiel ein** |
| **Reliable Messaging Port** | TCP | Zusätzliche Spieldaten, seit Patch 1.1 erforderlich – wird vom Server bereitgestellt, du trägst ihn im Spiel nicht ein |

Welche Werte für deinen Server gelten, siehst du in deiner **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Prüfe der Reihe nach:

- Läuft dein Server? Warte nach dem Start einen Moment, bis er vollständig hochgefahren ist.
- Hast du wirklich den **Game Port** aus deiner Verwaltung eingetragen und nicht einen anderen Port?
- Stimmt die IP-Adresse exakt mit der Angabe in deiner Verwaltung überein?
- Ist auf dem Server bereits eine Welt geladen? Ohne geladene Welt kannst du nicht beitreten.
- Entferne den Eintrag im Server Manager und lege ihn neu an, falls der Server dauerhaft als offline angezeigt wird.
::::
