---
description: Admin auf einem No One Survived Server hinzufügen
---

# So fügst du einen Admin auf deinem No One Survived Server hinzu

No One Survived kennt **keine Adminliste** und keine Vergabe von Rechten über Steam-IDs. Adminrechte laufen ausschließlich über ein **Admin-Passwort**: Wer es kennt, kann sich im Spiel selbst als Admin anmelden und das Admin-Panel öffnen.

:::: danger Wichtig
Jeder, der das Admin-Passwort kennt, hat vollen Admin-Zugriff auf deinem Server – inklusive Gegenstände erzeugen, Wetter und Zeit ändern sowie Spieler kicken und bannen. Gib es nur an Personen weiter, denen du vertraust.
::::

## Admin-Passwort setzen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Einstellung wird nur beim Serverstart eingelesen.

2. <b>Admin-Passwort eintragen</b><br>
   Öffne die **Verwaltung** deines Servers und trage im Feld für das Admin-Passwort dein gewünschtes Passwort ein.

   :::: info Alternativ in der Konfigurationsdatei
   Findest du in der Verwaltung kein passendes Feld, steht der Wert in folgender Datei:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   Im Abschnitt `[ServerSetting]` trägst du ihn so ein:

   ```ini
   [ServerSetting]
   AdminPassword=MeinAdminPasswort
   ```

   Trägst du den Wert von Hand ein, wird er beim nächsten Serverstart wieder aus dem Feld der Verwaltung überschrieben. Nutze deshalb vorrangig die Verwaltung.
   ::::

3. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server.

:::: warning Achtung
Das Admin-Passwort ist **nicht** das Server-Passwort. Das Server-Passwort brauchen alle Spieler zum Beitreten, das Admin-Passwort gibt Adminrechte. Verwende zwei unterschiedliche Passwörter.
::::

:::: danger Standardpasswort ändern
Ist in der Verwaltung noch ein voreingestelltes Admin-Passwort hinterlegt, ändere es unbedingt. Ein bekanntes Standardpasswort bedeutet, dass sich jeder Spieler auf deinem Server Adminrechte verschaffen kann.
::::

## Admin-Panel im Spiel öffnen

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei – siehe [Server beitreten](server-beitreten.md).

2. <b>Panel öffnen</b><br>
   Drücke im Spiel gleichzeitig `Alt` + `Shift` + `O`. Achte darauf, dass es sich um den Buchstaben **O** handelt und nicht um die Ziffer Null.

3. <b>Anmelden</b><br>
   Gib das Admin-Passwort ein und bestätige die Eingabe.

4. <b>Adminrechte prüfen</b><br>
   Öffnet sich das Panel mit den Reitern für Gegenstände, Spielwelt und Blacklist, hat der Server dich als Admin erkannt. Passiert nichts, wurde das Passwort nicht übernommen – prüfe den Eintrag in der Verwaltung und starte den Server neu.

:::: info Panel schließen
Mit derselben Tastenkombination `Alt` + `Shift` + `O` schließt du das Panel wieder.
::::

## Was kann ein Admin?

:::: info Funktionen des Admin-Panels
Das Admin-Panel wird über Schaltflächen bedient, nicht über eingetippte Befehle. Unter anderem findest du dort:

- **Gegenstände erzeugen** – Kleidung, Nahrung, Materialien, Werkzeuge, Waffen und Fahrzeuge
- **Spielwelt steuern** – Wetter, Uhrzeit, Jahreszeit sowie das Auffrischen von Beute
- **Charakterwerte anpassen** – einzelne Werte deines Charakters erhöhen oder senken
- **Blacklist** – Spieler kicken, bannen und entbannen, siehe [Spieler kicken & bannen](spieler-kicken-bannen.md)

Welche Reiter und Schaltflächen genau vorhanden sind, kann sich mit Spiel-Updates ändern.
::::

:::: warning Keine Chat- oder Konsolenbefehle
Für No One Survived sind **keine** Admin-Befehle im Chat, keine Serverkonsole und kein RCON dokumentiert. Häufig kursierende Befehle wie `AdminLogin`, `Kick <Spieler>` oder Konfigurationswerte wie `AdminSteamIDs` tauchen in der offiziellen Dokumentation nicht auf – Adminrechte vergibst du ausschließlich über das Admin-Passwort und das Admin-Panel im Spiel.
::::
