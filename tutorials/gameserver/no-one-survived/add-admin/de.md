---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem No One Survived Server hinzu"
description: "Admin auf einem No One Survived Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/no-one-survived/add-savegame", "gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

No One Survived kennt **keine Adminliste** und keine Vergabe von Rechten über Steam-IDs. Adminrechte laufen ausschließlich über ein **Admin-Passwort**: Wer es kennt, kann sich im Spiel selbst als Admin anmelden und das Admin-Panel öffnen.

> [!IMPORTANT]
> Jeder, der das Admin-Passwort kennt, hat vollen Admin-Zugriff auf Deinem Server – inklusive Gegenstände erzeugen, Wetter und Zeit ändern sowie Spieler kicken und bannen. Gib es nur an Personen weiter, denen Du vertraust.

## Admin-Passwort setzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Einstellung wird nur beim Serverstart eingelesen.

2. **Admin-Passwort eintragen**\
   Öffne die **Verwaltung** Deines Servers und trage im Feld für das Admin-Passwort Dein gewünschtes Passwort ein.

   > [!NOTE]
   > **Alternativ in der Konfigurationsdatei**
   >
   > Findest Du in der Verwaltung kein passendes Feld, steht der Wert in folgender Datei:
   >
   > ```text
   > /WRSH/Saved/Config/WindowsServer/Game.ini
   > ```
   >
   > Im Abschnitt `[ServerSetting]` trägst Du ihn so ein:
   >
   > ```ini
   > [ServerSetting]
   > AdminPassword=MeinAdminPasswort
   > ```
   >
   > Trägst Du den Wert von Hand ein, wird er beim nächsten Serverstart wieder aus dem Feld der Verwaltung überschrieben. Nutze deshalb vorrangig die Verwaltung.

3. **Server starten**\
   Speichere die Änderung und starte Deinen Server.

> [!WARNING]
> Das Admin-Passwort ist **nicht** das Server-Passwort. Das Server-Passwort brauchen alle Spieler zum Beitreten, das Admin-Passwort gibt Adminrechte. Verwende zwei unterschiedliche Passwörter.

> [!CAUTION]
> **Standardpasswort ändern**
>
> Ist in der Verwaltung noch ein voreingestelltes Admin-Passwort hinterlegt, ändere es unbedingt. Ein bekanntes Standardpasswort bedeutet, dass sich jeder Spieler auf Deinem Server Adminrechte verschaffen kann.

## Admin-Panel im Spiel öffnen

1. **Server beitreten**\
   Tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/no-one-survived/join-server).

2. **Panel öffnen**\
   Drücke im Spiel gleichzeitig `Alt` + `Shift` + `O`. Achte darauf, dass es sich um den Buchstaben **O** handelt und nicht um die Ziffer Null.

3. **Anmelden**\
   Gib das Admin-Passwort ein und bestätige die Eingabe.

4. **Adminrechte prüfen**\
   Öffnet sich das Panel mit den Reitern für Gegenstände, Spielwelt und Blacklist, hat der Server Dich als Admin erkannt. Passiert nichts, wurde das Passwort nicht übernommen – prüfe den Eintrag in der Verwaltung und starte den Server neu.

> [!NOTE]
> **Panel schließen**
>
> Mit derselben Tastenkombination `Alt` + `Shift` + `O` schließt Du das Panel wieder.

## Was kann ein Admin?

> [!NOTE]
> **Funktionen des Admin-Panels**
>
> Das Admin-Panel wird über Schaltflächen bedient, nicht über eingetippte Befehle. Unter anderem findest Du dort:
>
> - **Gegenstände erzeugen** – Kleidung, Nahrung, Materialien, Werkzeuge, Waffen und Fahrzeuge
> - **Spielwelt steuern** – Wetter, Uhrzeit, Jahreszeit sowie das Auffrischen von Beute
> - **Charakterwerte anpassen** – einzelne Werte Deines Charakters erhöhen oder senken
> - **Blacklist** – Spieler kicken, bannen und entbannen, siehe [Spieler kicken & bannen](/tutorials/gameserver/no-one-survived/kick-ban-players)
>
> Welche Reiter und Schaltflächen genau vorhanden sind, kann sich mit Spiel-Updates ändern.

> [!WARNING]
> **Keine Chat- oder Konsolenbefehle**
>
> Für No One Survived sind **keine** Admin-Befehle im Chat, keine Serverkonsole und kein RCON dokumentiert. Häufig kursierende Befehle wie `AdminLogin`, `Kick <Spieler>` oder Konfigurationswerte wie `AdminSteamIDs` tauchen in der offiziellen Dokumentation nicht auf – Adminrechte vergibst Du ausschließlich über das Admin-Passwort und das Admin-Panel im Spiel.
