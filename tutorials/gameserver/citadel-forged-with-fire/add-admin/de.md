---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Citadel Forged with Fire Server hinzu"
description: "Admin auf einem Citadel Forged with Fire Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["citadel-forged-with-fire"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/citadel-forged-with-fire/add-savegame", "gameserver/citadel-forged-with-fire/create-backup", "gameserver/citadel-forged-with-fire/download-savegame", "gameserver/citadel-forged-with-fire/join-server"]
---

Citadel Forged with Fire arbeitet **nicht mit einer Admin-Liste aus SteamIDs**, sondern mit einem **Admin-Passwort**: Wer sich im Spiel mit diesem Passwort einloggt, hat Adminrechte. Du musst also keine IDs sammeln – Du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

> [!IMPORTANT]
> Ab Werk ist auf jedem Server das Standard-Passwort `citadel123` hinterlegt. Ändere es unbedingt, bevor Dein Server öffentlich erreichbar ist – sonst kann sich jeder, der dieses allgemein bekannte Passwort kennt, Adminrechte verschaffen.

## Admin-Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Passwort eintragen**\
   Trage im Feld für das **Admin-Passwort** Dein gewünschtes Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu, damit das neue Passwort übernommen wird.

> [!CAUTION]
> **Passwort in der Verwaltung setzen**
>
> Gespeichert wird das Admin-Passwort in der `Game.ini` im Abschnitt `[/script/citadel.socialmanager]` beim Wert `Password=`. Bietet Deine Verwaltung ein Feld dafür an, kann Dein Server diesen Wert beim Start aus der Verwaltung neu schreiben – eine Änderung direkt in der Datei oder im Spiel per `/admin_update <neues Passwort>` wäre dann nach dem nächsten Neustart wieder überschrieben. Setze das Admin-Passwort deshalb immer zuerst in der **Verwaltung** und greife nur dann zur Datei, wenn dort kein Feld dafür vorhanden ist.

> [!WARNING]
> Wer das Admin-Passwort kennt, hat volle Adminrechte auf Deinem Server – inklusive Befehlen zum Kicken, Bannen und Löschen von Charakteren. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Beitrittspasswort Deines Servers.

## Als Admin einloggen

1. **Server beitreten**\
   Tritt Deinem Server bei. Wie Du ihn findest, steht unter [Server beitreten](/tutorials/gameserver/citadel-forged-with-fire/join-server).

2. **Chat öffnen**\
   Öffne im Spiel das Chatfenster.

3. **Einloggen**\
   Gib folgenden Befehl mit Deinem Admin-Passwort ein:

   ```text
   /admin_login <Passwort>
   ```

   > [!NOTE]
   > Der Befehl `/iamgod <Passwort>` macht dasselbe – es ist lediglich ein alternativer Name für denselben Befehl.

4. **Rechte nutzen**\
   Ab sofort stehen Dir die Adminbefehle zur Verfügung, zum Beispiel `/who` für eine Liste aller eingeloggten Spieler.

## Adminrechte wieder ablegen

Möchtest Du Deine Adminrechte für die laufende Sitzung wieder abgeben, gibst Du im Chat ein:

```text
/admin_logout
```

> [!NOTE]
> Die Adminrechte gelten pro Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart musst Du Dich mit `/admin_login` erneut anmelden.

## Remote Console im Browser nutzen

Alternativ zum Ingame-Chat kannst Du Adminbefehle über die eingebaute Remote Console im Browser ausführen – praktisch, wenn Du gerade nicht im Spiel bist.

> [!CAUTION]
> **Zusätzlichen Port anlegen**
>
> Die Remote Console benötigt einen **eigenen Port**. Lege Dir dafür in der **Verwaltung** einen zusätzlichen Port an. Ohne freigegebenen Port ist die Oberfläche von außen nicht erreichbar.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Game.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /Config/Game.ini
   ```

4. **Abschnitt ergänzen**\
   Trage folgenden Abschnitt ein und setze bei `WebServerPort` den zusätzlichen Port aus Deiner Verwaltung:

   ```ini
   [/script/citadel.remoteconsole]
   WebServerPort=<zusätzlicher Port>
   WebServerUsername=<Benutzername>
   WebServerPass=<Passwort>
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

6. **Oberfläche aufrufen**\
   Rufe im Browser die IP-Adresse Deines Servers zusammen mit dem eingetragenen Port auf:

   ```text
   http://<Server-IP>:<Port>
   ```

   Melde Dich mit den oben gesetzten Zugangsdaten an. Mit `list` beziehungsweise `help` bekommst Du die verfügbaren Befehle angezeigt.

> [!WARNING]
> Trägst Du keine Zugangsdaten ein, gelten die im Server eingebauten Standardwerte. Setze deshalb immer einen eigenen Benutzernamen und ein eigenes Passwort, bevor Du den Port freigibst.

> [!NOTE]
> **Konfigurationsdatei wirkt aufgeräumt**
>
> Dein Server entfernt beim Start Abschnitte aus der `.ini`, die Du nicht angepasst hast. Das ist normal und kein Fehler – Deine eigenen Einträge bleiben erhalten.

> [!NOTE]
> **Wo liegt die Konfiguration?**
>
> Der Ordner `/Config/` und der Pfad `/Citadel/Saved/Config/LinuxServer/` verweisen auf dieselben Dateien. Du kannst also beide Wege nutzen.

> [!TIP]
> Welche Befehle Dir als Admin zur Verfügung stehen und wie Du Spieler entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/citadel-forged-with-fire/kick-ban-players).
