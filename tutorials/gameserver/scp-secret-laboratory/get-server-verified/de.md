---
slug: "server-verifizieren-lassen"
language: "de"
title: "So lässt Du Deinen SCP: Secret Laboratory Server verifizieren"
description: "Einen SCP: Secret Laboratory Server von Northwood verifizieren lassen"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server verifizieren lassen"
sort: 12
related: ["gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/install-labapi-plugins"]
---

Damit Dein Server in der öffentlichen Serverliste von SCP: Secret Laboratory erscheint, muss er von Northwood verifiziert werden. Ohne Verifizierung erreichen Spieler Deinen Server nur per Direct Connect – siehe [Server beitreten](/tutorials/gameserver/scp-secret-laboratory/join-server). Diese Anleitung zeigt Dir die Voraussetzungen und die beiden offiziellen Wege der Verifizierung.

## Voraussetzungen

Bevor Du die Verifizierung startest, müssen folgende Punkte erfüllt sein. Die genannten Schlüssel stehen in der Datei `config_gameplay.txt` – wo sie liegt und wie Du sie bearbeitest, zeigt [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files):

- **Community Server Guidelines gelesen**: Dein Server muss die offiziellen [Community Server Guidelines](https://scpslgame.com/CSG.pdf) von Northwood einhalten.
- **`server_name` gesetzt**: Dein Server braucht einen Servernamen.
- **`contact_email` gesetzt**: Eine gültige E-Mail-Adresse, auf die Du Zugriff hast. E-Mails an das Verifizierungs-Team müssen von genau dieser Adresse gesendet werden.
- **Server-Info hinterlegt**: Über `serverinfo_pastebin_id` muss eine Server-Info hinterlegt sein, die mindestens einen Kontaktweg zu Deinem Server-Team enthält, zum Beispiel eine E-Mail-Adresse oder eine Discord-Einladung. Server-Regeln sind zusätzlich empfohlen. Wie das geht, zeigt [Server-Info hinterlegen](/tutorials/gameserver/scp-secret-laboratory/set-up-server-info).
- **`max_players` höchstens 60**: Verifizierte Server dürfen maximal 60 Slots haben – Server mit mehr als 60 Slots werden von der Liste entfernt.
- **Stabiler Betrieb**: Northwood erwartet von verifizierten Servern eine möglichst durchgehende Verfügbarkeit. Ein verifizierter Server, der länger als 14 Tage am Stück offline ist, verliert seine Verifizierung wieder.

> [!WARNING]
> Dein Server muss während des gesamten Verifizierungs-Prozesses online bleiben. Der Prozess kann bis zu einer Woche dauern.

## Weg 1: Verifizierung über die Konsole

1. **Voraussetzungen prüfen**\
   Stelle sicher, dass alle Punkte aus den Voraussetzungen erfüllt sind, und starte Deinen Server über die Verwaltung.

2. **Konsole öffnen**\
   Öffne die Konsole in der Verwaltung Deines Servers.

3. **Verifizierung starten**\
   Gib folgenden Befehl in die Konsole ein:

   ```text
   !verify static
   ```

   Der Befehl wird ohne vorangestelltes `/` eingegeben – das brauchen nur Remote-Admin-Befehle. Die Variante `!verify dynamic` ist für dynamische IP-Adressen gedacht; die IP-Adresse Deines Servers bei EmeraldHost ist statisch.

4. **Erreichbarkeits-Prüfung abwarten**\
   Der Befehl veranlasst die zentralen Server von Northwood zu prüfen, ob Dein Server erreichbar ist. Schlägt die Prüfung fehl oder kommst Du an dieser Stelle nicht weiter, nutze stattdessen den Weg über die E-Mail.

## Weg 2: Verifizierung per E-Mail

Alternativ kannst Du die Verifizierung per E-Mail beim Safety & Compliance Team von Northwood beantragen.

1. **Verbindungsdaten notieren**\
   Notiere Dir die IP-Adresse und den Game Port Deines Servers aus der **Übersicht** der Verwaltung.

2. **E-Mail verfassen**\
   Verfasse die E-Mail von genau der Adresse, die Du in `contact_email` eingetragen hast. Die E-Mail muss enthalten:

   - die öffentliche IPv4-Adresse Deines Servers
   - die Angabe, ob die IP-Adresse statisch oder dynamisch ist (bei EmeraldHost: statisch)
   - den Game Port Deines Servers

   Formuliere die E-Mail sauber auf Englisch, gib ihr einen passenden Betreff und verzichte auf Anhänge.

3. **E-Mail senden**\
   Sende die E-Mail an folgende Adresse:

   ```text
   safety.compliance@scpslgame.com
   ```

   Innerhalb von etwa einer Stunde erhältst Du eine automatische Eingangsbestätigung.

4. **Antwort abwarten**\
   Das Team antwortet in der Regel innerhalb von 3 bis 7 Werktagen.

> [!WARNING]
> Frage nicht per weiterer E-Mail nach dem Stand Deiner Verifizierung – solche Nachfragen schicken Deine Anfrage ans Ende der Warteschlange.

## Verifizierung abschließen

Sobald Du die Benachrichtigung erhältst, dass Dein Server verifiziert wurde, erscheint in der Konsole Deines Servers ein Link, über den Du die Community Server Guidelines offiziell unterzeichnest. Danach erscheint Dein Server in der öffentlichen Serverliste.

> [!NOTE]
> Erscheint trotz der Benachrichtigung kein Link in der Konsole, starte Deinen Server über die Verwaltung neu. Erscheint der Link auch danach nicht, öffne ein Technical-Support-Ticket auf dem offiziellen SCP:SL Discord.

## Nach der Verifizierung

Die Voraussetzungen gelten dauerhaft: Überschreitet Dein Server die 60 Slots, verstößt er gegen die Community Server Guidelines oder ist er länger als 14 Tage am Stück offline, wird die Verifizierung wieder entzogen.
