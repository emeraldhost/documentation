---
description: Admin auf einem Satisfactory Server hinzufügen
---

# So fügst du einen Admin auf deinem Satisfactory Server hinzu

Satisfactory kennt **keine Adminliste**. Es gibt keine Admin-Datei und keine Spieler-ID, die du irgendwo eintragen musst. Adminrechte hat jeder, der das **Admin Passwort** deines Servers kennt und sich damit im **Server Manager** anmeldet.

:::: info Hinweis
Adminrechte gelten für die Verwaltung des Servers im Server Manager – also Einstellungen, Welten und Spielstände. Im Spiel selbst gibt es weder eine Adminrolle noch gesonderte Adminbefehle im Chat.
::::

## Server beanspruchen

Ist für deinen Server noch kein Name und kein Admin Passwort hinterlegt, gilt er als **nicht beansprucht**. Beim ersten Verbinden führt dich das Spiel dann durch zwei Dialoge.

1. <b>Server hinzufügen</b><br>
   Trage deinen Server im Server Manager ein – der Ablauf steht unter [Server beitreten](server-beitreten.md).

2. <b>Server Namen vergeben</b><br>
   Das Spiel fragt zuerst nach einem Namen für den Server. Dieser Name wird dir später in deiner Serverliste angezeigt.

3. <b>Admin Passwort festlegen</b><br>
   Anschließend legst du das Admin Passwort fest. Danach bist du Administrator des Servers.

## Als Admin anmelden

Auf einem bereits beanspruchten Server meldest du dich so an:

1. <b>Server Manager öffnen</b><br>
   Starte Satisfactory, wähle im Hauptmenü **Server Manager** und dort deinen Server aus.

2. <b>Reiter wechseln</b><br>
   Wähle einen beliebigen Reiter außer **Status**. Das Spiel meldet, dass du nicht authentifiziert bist.

3. <b>Authentifizieren</b><br>
   Klicke auf **Authenticate**.

4. <b>Admin Passwort eingeben</b><br>
   Trage das Admin Passwort ein und bestätige. Anschließend hast du Zugriff auf alle Reiter des Server Managers.

## Weiteren Admin hinzufügen

Da es keine Adminliste gibt, machst du einen Mitspieler zum Admin, indem du ihm das Admin Passwort gibst.

1. <b>Admin Passwort weitergeben</b><br>
   Teile das Admin Passwort deines Servers mit der Person, die Adminrechte erhalten soll.

2. <b>Server eintragen lassen</b><br>
   Die Person trägt deinen Server im eigenen Server Manager ein – IP-Adresse und **Game Port** findest du in deiner **Verwaltung**.

3. <b>Anmelden lassen</b><br>
   Über **Authenticate** meldet sie sich mit dem Admin Passwort an und hat damit dieselben Rechte wie du.

:::: warning Achtung
Jeder mit dem Admin Passwort hat volle Kontrolle über den Server – einschließlich Einstellungen, Spielständen und Passwörtern. Gib es nur an Personen weiter, denen du vertraust.
::::

## Adminrechte entziehen

Einzelne Admins lassen sich nicht entfernen, weil es keine Liste gibt. Du entziehst die Rechte, indem du das Admin Passwort änderst – danach müssen sich alle Admins mit dem neuen Passwort erneut anmelden.

Servername sowie Admin- und Server-Passwort änderst du im Server Manager im Reiter **Server Settings**. Den ausführlichen Ablauf findest du unter [Admin Passwort setzen](admin-passwort-setzen.md).

:::: danger Admin Passwort vergessen
Kennst du das Admin Passwort nicht mehr, kannst du den Server zurücksetzen:

1. Stoppe den Server über die Verwaltung.
2. Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) und öffne das Verzeichnis `/.config/Epic/FactoryGame/Saved/SaveGames/`.
3. Lösche die Datei, die mit `ServerSettings.` beginnt und den Game Port deines Servers im Namen trägt.
4. Starte den Server. Er gilt jetzt wieder als nicht beansprucht und kann neu beansprucht werden.

Dabei gehen auch Servername, Server Passwort und das Zertifikat des Servers verloren – bestehende Spielstände bleiben aber erhalten. Ist der Server danach in der Serverliste als offline markiert, entferne den Eintrag im Server Manager und lege ihn neu an.
::::

:::: warning Kein Kicken und kein Bannen
Satisfactory bietet keine Funktion, um Spieler zu kicken oder zu bannen – weder im Spiel noch im Server Manager. Auch die Konsole im Server Manager kennt keine Befehle zur Spielerverwaltung. Wer auf deinen Server darf, steuerst du ausschließlich über das Server Passwort im Reiter **Server Settings** unter **Player password protection**.
::::
