---
description: "Einen SCP: Secret Laboratory Server von Northwood verifizieren lassen"
---

# So lässt du deinen SCP: Secret Laboratory Server verifizieren

Damit dein Server in der öffentlichen Serverliste von SCP: Secret Laboratory erscheint, muss er von Northwood verifiziert werden. Ohne Verifizierung erreichen Spieler deinen Server nur per Direct Connect — siehe [Server beitreten](server-beitreten.md). Diese Anleitung zeigt dir die Voraussetzungen und die beiden offiziellen Wege der Verifizierung.

## Voraussetzungen

Bevor du die Verifizierung startest, müssen folgende Punkte erfüllt sein. Die genannten Schlüssel stehen in der Datei `config_gameplay.txt` — wo sie liegt und wie du sie bearbeitest, zeigt [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md):

- **Community Server Guidelines gelesen**: Dein Server muss die offiziellen [Community Server Guidelines](https://scpslgame.com/CSG.pdf) von Northwood einhalten.
- **`server_name` gesetzt**: Dein Server braucht einen Servernamen.
- **`contact_email` gesetzt**: Eine gültige E-Mail-Adresse, auf die du Zugriff hast. E-Mails an das Verifizierungs-Team müssen von genau dieser Adresse gesendet werden.
- **Server-Info hinterlegt**: Über `serverinfo_pastebin_id` muss eine Server-Info hinterlegt sein, die mindestens einen Kontaktweg zu deinem Server-Team enthält, zum Beispiel eine E-Mail-Adresse oder eine Discord-Einladung. Server-Regeln sind zusätzlich empfohlen. Wie das geht, zeigt [Server-Info hinterlegen](server-info-hinterlegen.md).
- **`max_players` höchstens 60**: Verifizierte Server dürfen maximal 60 Slots haben — Server mit mehr als 60 Slots werden von der Liste entfernt.
- **Stabiler Betrieb**: Northwood erwartet von verifizierten Servern eine möglichst durchgehende Verfügbarkeit. Ein verifizierter Server, der länger als 14 Tage am Stück offline ist, verliert seine Verifizierung wieder.

:::: warning Achtung
Dein Server muss während des gesamten Verifizierungs-Prozesses online bleiben. Der Prozess kann bis zu einer Woche dauern.
::::

## Weg 1: Verifizierung über die Konsole

1. <b>Voraussetzungen prüfen</b><br>
   Stelle sicher, dass alle Punkte aus den Voraussetzungen erfüllt sind, und starte deinen Server über die Verwaltung.

2. <b>Konsole öffnen</b><br>
   Öffne die Konsole in der Verwaltung deines Servers.

3. <b>Verifizierung starten</b><br>
   Gib folgenden Befehl in die Konsole ein:

   ```
   !verify static
   ```

   Der Befehl wird ohne vorangestelltes `/` eingegeben — das brauchen nur Remote-Admin-Befehle. Die Variante `!verify dynamic` ist für dynamische IP-Adressen gedacht; die IP-Adresse deines Servers bei EmeraldHost ist statisch.

4. <b>Erreichbarkeits-Prüfung abwarten</b><br>
   Der Befehl veranlasst die zentralen Server von Northwood zu prüfen, ob dein Server erreichbar ist. Schlägt die Prüfung fehl oder kommst du an dieser Stelle nicht weiter, nutze stattdessen den Weg über die E-Mail.

## Weg 2: Verifizierung per E-Mail

Alternativ kannst du die Verifizierung per E-Mail beim Safety & Compliance Team von Northwood beantragen.

1. <b>Verbindungsdaten notieren</b><br>
   Notiere dir die IP-Adresse und den Game Port deines Servers aus der **Übersicht** der Verwaltung.

2. <b>E-Mail verfassen</b><br>
   Verfasse die E-Mail von genau der Adresse, die du in `contact_email` eingetragen hast. Die E-Mail muss enthalten:

   - die öffentliche IPv4-Adresse deines Servers
   - die Angabe, ob die IP-Adresse statisch oder dynamisch ist (bei EmeraldHost: statisch)
   - den Game Port deines Servers

   Formuliere die E-Mail sauber auf Englisch, gib ihr einen passenden Betreff und verzichte auf Anhänge.

3. <b>E-Mail senden</b><br>
   Sende die E-Mail an folgende Adresse:

   ```
   safety.compliance@scpslgame.com
   ```

   Innerhalb von etwa einer Stunde erhältst du eine automatische Eingangsbestätigung.

4. <b>Antwort abwarten</b><br>
   Das Team antwortet in der Regel innerhalb von 3 bis 7 Werktagen.

:::: warning Achtung
Frage nicht per weiterer E-Mail nach dem Stand deiner Verifizierung — solche Nachfragen schicken deine Anfrage ans Ende der Warteschlange.
::::

## Verifizierung abschließen

Sobald du die Benachrichtigung erhältst, dass dein Server verifiziert wurde, erscheint in der Konsole deines Servers ein Link, über den du die Community Server Guidelines offiziell unterzeichnest. Danach erscheint dein Server in der öffentlichen Serverliste.

:::: info Hinweis
Erscheint trotz der Benachrichtigung kein Link in der Konsole, starte deinen Server über die Verwaltung neu. Erscheint der Link auch danach nicht, öffne ein Technical-Support-Ticket auf dem offiziellen SCP:SL Discord.
::::

## Nach der Verifizierung

Die Voraussetzungen gelten dauerhaft: Überschreitet dein Server die 60 Slots, verstößt er gegen die Community Server Guidelines oder ist er länger als 14 Tage am Stück offline, wird die Verifizierung wieder entzogen.
