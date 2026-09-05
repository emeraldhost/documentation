---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Nightingale Server hinzu"
description: "Admin auf einem Nightingale Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Nightingale kennt **keine Admin-Liste mit Steam- oder Epic-IDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es im Spiel eingibt, schaltet den Admin-Modus für sich frei. Du musst also keine IDs sammeln – Du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, kann auf Deinem Server Spieler kicken und bannen. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Server-Passwort.

## Admin-Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Admin-Passwort eintragen**\
   Trage im Feld **Admin Passwort** Dein gewünschtes Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu, damit das neue Passwort übernommen wird.

> [!IMPORTANT]
> Ist im Feld bereits ein Passwort vorausgefüllt, ersetze es unbedingt durch ein eigenes, bevor Dein Server öffentlich erreichbar ist – sonst kann sich jeder, der den vorausgefüllten Wert kennt, Adminrechte verschaffen.

> [!NOTE]
> **Warum nicht in der Konfigurationsdatei?**
>
> Das Admin-Passwort steht in der Datei `/NWX/Config/ServerSettings.ini` in der Zeile `AdminPassword=`. Dein Server schreibt diese Zeile aber bei **jedem Start** aus dem Feld der Verwaltung neu. Eine manuelle Änderung in der Datei wäre beim nächsten Start wieder weg – setze das Passwort deshalb ausschließlich in der Verwaltung. Dasselbe gilt für das Server-Passwort (`Password=`) und die Schwierigkeit (`StartingDifficulty=`).

## Admin-Modus im Spiel aktivieren

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/nightingale/join-server).

2. **Menü öffnen**\
   Drücke im Spiel `Esc`, um das Menü zu öffnen.

3. **Admin Mode wählen**\
   Wähle den Eintrag **Admin Mode: OFF**.

4. **Passwort eingeben**\
   Trage das Admin-Passwort Deines Servers ein und bestätige mit **Confirm**.

5. **Ergebnis prüfen**\
   Steht im Menü anschließend **Admin Mode: ON**, bist Du als Admin authentifiziert.

## Admin-Modus wieder deaktivieren

1. **Menü öffnen**\
   Drücke `Esc` und wähle den Eintrag **Admin Mode: ON**.

2. **Bestätigen**\
   Bestätige mit **Confirm**.

3. **Neu verbinden**\
   Verlasse den Server und tritt erneut bei, damit die Änderung wirksam wird.

> [!NOTE]
> Der Admin-Modus gilt immer nur für die aktuelle Sitzung und die aktuelle Verbindung. Nach einem Verbindungsabbruch oder einem Serverneustart aktivierst Du ihn beim nächsten Beitritt erneut.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/nightingale/kick-ban-players).

## Was der Admin-Modus kann – und was nicht

> [!NOTE]
> Der Admin-Modus dient in Nightingale dazu, Spieler zu **kicken und zu bannen**. Klassische Adminbefehle über einen Chat gibt es nicht, und die Konsole in der Verwaltung zeigt ausschließlich die Ausgaben des Servers an – sie nimmt **keine** Befehle entgegen.

> [!WARNING]
> **Cheat- und Debugmenü**
>
> Davon getrennt gibt es das Cheat- und Debugmenü. Für Kick und Bann brauchst Du es **nicht**. Möchtest Du es auf Deinem Server nutzen, sind drei Dinge nötig:
>
> - Schalte es auf dem Server über die Variable **Enable Cheats** in der Verwaltung frei.
> - Starte Deinen Client zusätzlich mit der Startoption `-EnableCheats`. Trage sie in Steam unter **Bibliothek → Nightingale → Eigenschaften → Startoptionen** ein.
> - Authentifiziere Dich im Spiel mit dem Admin-Passwort, wie oben beschrieben.
