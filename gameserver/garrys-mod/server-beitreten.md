---
description: Einem Garry's Mod Server beitreten
---

# So trittst du deinem Garry's Mod Server bei

## Verbindungsdaten finden

:::: info Hinweis
Die **IP-Adresse** und den **Port** deines Servers findest du in der **Verwaltung** deines Servers. Garry's Mod nutzt für den Spielbetrieb und für Serverabfragen denselben Port — du brauchst also keinen separaten Query Port. Standardmäßig ist das der Port `27015`.
::::

## Über den Legacy Browser im Spiel

1. <b>Garry's Mod starten</b><br>
   Starte Garry's Mod.

2. <b>Serversuche öffnen</b><br>
   Wähle im Hauptmenü **Find Multiplayer Game** und anschließend **Legacy Browser**.

3. <b>Server hinzufügen</b><br>
   Klicke auf **Add a Server** und trage die IP-Adresse und den Port deines Servers ein.

   :::: tip Beispiel
   ```
   123.45.67.89:27015
   ```
   ::::

4. <b>Zu den Favoriten hinzufügen</b><br>
   Bestätige mit **Add this address to favorites**.

5. <b>Server beitreten</b><br>
   Wähle deinen Server in der Favoritenliste aus und klicke auf **Connect**.

## Über den Steam-Server-Browser

1. <b>Steam öffnen</b><br>
   Öffne den Steam-Client.

2. <b>Server-Browser öffnen</b><br>
   Klicke oben links auf **Anzeige** und wähle **Spielserver**.

3. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten** und dann unten rechts auf **+**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den Port deines Servers ein und bestätige mit **OK**.

5. <b>Verbinden</b><br>
   Wähle den Server aus und klicke auf **Verbinden**.

## Über die Spielkonsole

1. <b>Garry's Mod starten</b><br>
   Starte Garry's Mod.

2. <b>Konsole öffnen</b><br>
   Drücke `~`, um die Konsole zu öffnen.

3. <b>Verbinden</b><br>
   Gib folgenden Befehl ein:

   ```
   connect IP:Port
   ```

   :::: tip Beispiel
   ```
   connect 123.45.67.89:27015
   ```
   ::::

:::: warning Achtung
Trage immer den **Gameport** deines Servers ein. Der Port `27005` ist der lokale Client-Port deines Spiels und darf nicht als Serveradresse verwendet werden.
::::

:::: info Server erscheint nicht in der öffentlichen Serverliste?
Seit Mai 2020 werden Garry's Mod Server ohne einen Steam Game Server Login Token (GSLT) in der Serverliste stark abgewertet. Einen Token kannst du unter [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers) mit der App-ID `4000` erstellen. Trage ihn anschließend in der **Verwaltung** deines Servers unter **Einstellungen** im Feld **Steam Account Token** ein und starte den Server neu. Der Server startet damit mit dem Parameter `+sv_setsteamaccount <Token>`. Jeder Server benötigt einen eigenen Token. Die direkte Verbindung über IP und Port funktioniert auch ohne Token.
::::
