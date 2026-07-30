---
description: Einem Ground Branch Server beitreten
---

# So trittst du deinem Ground Branch Server bei

Ground Branch bringt einen eigenen **Server Browser** mit. Darüber findest du deinen Server entweder in der Liste oder verbindest dich gezielt über die IP-Adresse.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Ground Branch belegt einen **Game Port** und einen **Query Port** – beide werden dir dort angezeigt und sind bereits freigegeben.
::::

## Über den Server Browser

1. <b>Ground Branch starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Server Browser öffnen</b><br>
   Wähle im Hauptmenü **Server Browser**.

3. <b>Richtigen Reiter wählen</b><br>
   Oben stehen die Reiter **Internet**, **Favorites**, **Friends**, **History** und **LAN**. Für deinen gemieteten Server bleibst du auf **Internet**.

4. <b>Server suchen</b><br>
   Gib im Suchfeld (**Search servers…**) den Namen deines Servers ein. Zusätzlich kannst du über die Filter passwortgeschützte, volle oder leere Server sowie Server mit Mods ein- und ausblenden.

5. <b>Server beitreten</b><br>
   Wähle deinen Server aus der Liste aus und klicke auf **Connect**. Über **Spectate** trittst du stattdessen als Zuschauer bei.

:::: tip Tipp
Mit dem **Stern-Symbol** neben dem Servernamen legst du deinen Server als Favorit ab. Danach findest du ihn jederzeit im Reiter **Favorites**, unabhängig davon, ob er gerade in der öffentlichen Liste auftaucht.
::::

## Direkt über die IP verbinden

Taucht dein Server in der Liste nicht auf, verbindest du dich direkt über die Adresse.

1. <b>Server Browser öffnen</b><br>
   Wähle im Hauptmenü **Server Browser**.

2. <b>Connect via IP wählen</b><br>
   Klicke auf **Connect via IP**. Es öffnet sich der Dialog **Enter server IP address**.

3. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Port deines Servers aus der Verwaltung ein, getrennt durch einen Doppelpunkt:

   ```
   <IP-Adresse>:<Port>
   ```

   :::: info Welchen Port eintragen?
   Nutze zuerst den **Game Port** aus der Verwaltung. Erscheint die Meldung **No server found at that IP address**, wiederhole den Vorgang mit dem **Query Port**.
   ::::

4. <b>Verbinden</b><br>
   Bestätige die Eingabe. Der Client baut die Verbindung anschließend direkt auf.

## Passwortgeschützter Server

Ist für deinen Server ein Passwort gesetzt, erscheint beim Beitritt der Dialog **Password required**. Trage dort das Serverpasswort ein, das du in der Verwaltung hinterlegt hast.

## Server mit Mods

Nutzt dein Server Mods, weist der Server Browser dich vor dem Beitritt darauf hin und startet einen **Mod-Sync**.

:::: info Hinweis
Der Client abonniert und lädt die benötigten Workshop-Inhalte dabei automatisch – du musst die Mods nicht von Hand heraussuchen. Warte den Download ab und tritt anschließend erneut bei. Mehr dazu unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

## Der Server wird nicht gefunden

Prüfe der Reihe nach:

- Läuft dein Server laut **Verwaltung**? Nach einem Start dauert es einen Moment, bis er sich in der Serverliste meldet.
- Stimmen IP-Adresse und Port exakt mit den Angaben in der Verwaltung überein?
- Verwendest du dieselbe Spielversion wie der Server? Nach einem Update muss dein Client aktualisiert sein – bei abweichender Version verweigert der Server den Beitritt.
- Ist auf dem Server eine Whitelist aktiv, kommen nur Admins und freigeschaltete Spieler auf den Server. Du erhältst dann einen entsprechenden Hinweis.

:::: tip Tipp
Findest du deinen Server im Reiter **Internet** dauerhaft nicht, nutze **Connect via IP** und lege ihn danach über das Stern-Symbol als Favorit ab.
::::
