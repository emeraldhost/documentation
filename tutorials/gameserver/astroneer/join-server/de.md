---
slug: "server-beitreten"
language: "de"
title: "So trittst Du Deinem Astroneer Server bei"
description: "Einem Astroneer Server beitreten"
tags: []
date: "2026-04-15"
visibility: "public"
updated: "2026-05-01"
cta: "gameserver"
product_keys: ["astroneer"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server beitreten"
sort: 3
related: ["gameserver/astroneer/change-server-name", "gameserver/astroneer/create-backup", "gameserver/astroneer/set-server-owner", "gameserver/astroneer/set-server-password"]
---

Um Deinem Server beizutreten, benötigst Du die IP-Adresse und den Port Deines Servers sowie – falls gesetzt – das Server-Passwort.

1. **Astroneer starten**\
   Starte Astroneer.

2. **CO-OP auswählen**\
   Wähle im Hauptmenü **CO-OP**.

3. **Dedicated Server wählen**\
   Klicke auf **Dedicated Server**, um einem dedizierten Server beizutreten.

4. **Server-Adresse eingeben**\
   Gib die IP-Adresse und den Port Deines Servers im folgenden Format ein:

   ```text
   123.45.67.89:8777
   ```

5. **Passwort eingeben (optional)**\
   Falls auf Deinem Server ein Passwort gesetzt ist, gib dieses ein.

6. **Beitreten**\
   Bestätige, um Deinem Server beizutreten.

## Verschlüsselung deaktivieren

Einige Clients – insbesondere unter Linux oder auf dem Steam Deck, gelegentlich aber auch unter Windows – können sich nicht direkt mit einem Astroneer-Dedicated-Server verbinden. In diesem Fall muss die Verschlüsselung sowohl auf dem Server als auch auf allen Clients deaktiviert werden.

### Auf dem Server

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Verschlüsselung deaktivieren**\
   Aktiviere den Schalter **Deaktiviere Encryption**.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

### Auf dem Client

1. **Engine.ini öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %localappdata%\Astro\Saved\Config\WindowsNoEditor\Engine.ini
   ```

2. **Eintrag ergänzen**\
   Füge am Ende der Datei folgenden Abschnitt ein:

   ```text
   [SystemSettings]
   net.AllowEncryption=False
   ```

3. **Datei speichern**\
   Speichere die Datei und starte Astroneer neu.

> [!WARNING]
> Das Deaktivieren der Verschlüsselung wird nicht empfohlen, da es die Sicherheit der Verbindung reduziert. Nutze diese Option nur, wenn es keine andere Möglichkeit gibt, eine Verbindung zum Server herzustellen.
