---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods auf Deinem Insurgency: Sandstorm Server hinzu"
description: "Mods über mod.io auf einem Insurgency: Sandstorm Server hinzufügen"
tags: []
date: "2026-06-23"
visibility: "public"
cta: "gameserver"
product_keys: ["insurgency-sandstorm"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 13
related: ["gameserver/insurgency-sandstorm/add-admins", "gameserver/insurgency-sandstorm/add-bots", "gameserver/insurgency-sandstorm/add-mutators", "gameserver/insurgency-sandstorm/additional-parameters"]
---

Mods für Insurgency: Sandstorm werden über **mod.io** bereitgestellt. Der Server meldet sich mit einem eigenen mod.io-Konto an und lädt die Mods herunter, die dieses Konto im **mod.io-Webportal abonniert** hat. Die Anmeldung erfolgt einmalig über einen **Sicherheitscode**.

> [!NOTE]
> **Geändert mit Update 1.20**
>
> Mit dem Update **1.20 (Operation: Clear Sight)** hat mod.io das Mod-Verfahren umgestellt. Mods werden seitdem über ein **eigenes Server-Konto** und einen einmaligen **Sicherheitscode** geladen. Die früheren Methoden (AccessToken in der `GameUserSettings.ini`, `Mods.txt` / `-ModList`) funktionieren **nicht mehr**.

> [!WARNING]
> Der Server benötigt ein **eigenes, separates mod.io-Konto** mit einer eigenen E-Mail-Adresse – **nicht** dasselbe Konto, das Du als Spieler im Spiel verwendest. Mit einem geteilten Konto lädt der Server keine Mods herunter.

## Schritt 1: mod.io-Konto erstellen

Erstelle ein neues [mod.io](https://mod.io/)-Konto ausschließlich für Deinen Server und merke Dir die verwendete E-Mail-Adresse. mod.io verwendet keine Passwörter, sondern meldet Dich per E-Mail-Code an.

## Schritt 2: Mods abonnieren

1. **Im Webportal anmelden**\
   Melde Dich mit dem **Server-Konto** auf [mod.io](https://mod.io/) an.

2. **Mods abonnieren**\
   Öffne den [Insurgency: Sandstorm Bereich](https://mod.io/g/insurgencysandstorm) und abonniere jede Mod, die der Server laden soll.

   > [!NOTE]
   > Mods werden ausschließlich über die **Abos** des Server-Kontos gesteuert. Das Hinzufügen und Entfernen von Mods ist nur über das mod.io-Webportal möglich.

## Schritt 3: Sicherheitscode anfordern

Beim ersten Start muss sich der Server einmalig mit einem **Sicherheitscode** bei mod.io autorisieren.

1. **PowerShell öffnen**\
   Öffne auf Deinem PC die **PowerShell**.

2. **Code anfordern**\
   Führe folgenden Befehl aus und ersetze `DEINE_EMAIL` durch die E-Mail-Adresse Deines **Server-Kontos**:

   ```powershell
   curl.exe -s -L -X POST "https://g-254.modapi.io/v1/oauth/emailrequest?api_key=bbf3af200848aef28418c032a601e7a2" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "email=DEINE_EMAIL"
   ```

3. **Code aus E-Mail entnehmen**\
   Du erhältst anschließend einen **5-stelligen Sicherheitscode** per E-Mail.

## Schritt 4: Server einmalig autorisieren

1. **Verwaltung öffnen**\
   Öffne die Verwaltung und navigiere zu den **Einstellungen**.

2. **Sicherheitscode eintragen**\
   Trage im Feld **Security Code** den per E-Mail erhaltenen Code ein (ersetze den Standardwert `none`) und speichere die Einstellung.

3. **Server starten**\
   Starte Deinen Server. Er autorisiert sich einmalig mit dem Code und lädt die abonnierten Mods herunter.

## Schritt 5: Sicherheitscode zurücksetzen

Der Sicherheitscode ist **einmalig** und nach dem ersten Start verbraucht. Setze das Feld **Security Code** anschließend wieder auf `none` und starte den Server neu.

> [!TIP]
> Das Feld **Security Code** steht standardmäßig auf `none`, und `-Mods` ist im Feld **Zusätzliche Parameter** bereits aktiv. Du trägst den Code also nur für den **einmaligen** ersten Start ein und setzt das Feld danach wieder auf `none`.

## Modifizierte Karte laden

Damit der Server nach dem Download direkt auf eine modifizierte Karte wechselt, ergänze im Feld **Zusätzliche Parameter**:

```text
-ModDownloadTravelTo=MAP?Scenario=SZENARIO
```

Die genauen Werte für `MAP` und `SZENARIO` stehen in der Beschreibung der jeweiligen Karten-Mod auf mod.io.

> [!WARNING]
> Die als Boot-Map gesetzte **Map**/**Szenario** muss eine **Vanilla-Karte** sein – eine modifizierte Karte kann nicht als Start-Map dienen, da sie beim Start noch nicht heruntergeladen ist. Der Server bootet auf der Vanilla-Karte, lädt die Mods und wechselt erst danach per `-ModDownloadTravelTo` auf die modifizierte Karte.

## Fehlerbehebung

Lädt der Server keine Mods herunter, prüfe folgende Punkte:

- Das Server-Konto ist ein **eigenes** Konto (nicht Dein Spieler-Konto).
- Das Server-Konto hat die gewünschten Mods im **Webportal abonniert**.
- `-Mods` ist im Feld **Zusätzliche Parameter** gesetzt.
- Meldung „Security code has already been redeemed“: Der Code wurde bereits verwendet – setze das Feld **Security Code** auf `none` (der Server ist dann bereits autorisiert).
- Hartnäckige Download-Probleme: Lösche per [SFTP](/tutorials/gameserver/establish-sftp-connection) den mod.io-Cache (Ordner `mod.io/254/`) und autorisiere den Server mit einem neuen Code erneut.

> [!NOTE]
> Auch die **Spieler** müssen die Mods (z.B. eigene Karten) mit ihrem eigenen mod.io-Konto abonnieren, um dem Server beitreten zu können. Der Download startet beim Verbinden im Hintergrund und wird nicht immer mit einem Fortschrittsbalken angezeigt.

> [!NOTE]
> **Migration vom alten Verfahren**
>
> Falls Du den Server zuvor über einen **AccessToken** in der `GameUserSettings.ini` eingerichtet hast: Entferne den Abschnitt `[/Script/ModKit.ModIOClient]` aus dieser Datei. Das aktuelle Verfahren nutzt ausschließlich den Sicherheitscode.

## Mutatoren

Manche Mods benötigen zusätzlich aktivierte **Mutatoren**. Wie Du sie aktivierst, erfährst Du in der Anleitung [Mutatoren hinzufügen](/tutorials/gameserver/insurgency-sandstorm/add-mutators). Einige Mods benötigen außerdem Einträge in der `Game.ini` – prüfe dazu die Mod-Beschreibung auf mod.io.
