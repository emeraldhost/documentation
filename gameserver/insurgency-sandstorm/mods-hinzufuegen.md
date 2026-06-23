---
description: "Mods über mod.io auf einem Insurgency: Sandstorm Server hinzufügen"
---

# So fügst du Mods auf deinem Insurgency: Sandstorm Server hinzu

Mods für Insurgency: Sandstorm werden über **mod.io** bereitgestellt. Der Server meldet sich mit einem eigenen mod.io-Konto an und lädt die Mods herunter, die dieses Konto im **mod.io-Webportal abonniert** hat. Die Anmeldung erfolgt einmalig über einen **Sicherheitscode**.

:::: info Geändert mit Update 1.20
Mit dem Update **1.20 (Operation: Clear Sight)** hat mod.io das Mod-Verfahren umgestellt. Mods werden seitdem über ein **eigenes Server-Konto** und einen einmaligen **Sicherheitscode** geladen. Die früheren Methoden (AccessToken in der `GameUserSettings.ini`, `Mods.txt` / `-ModList`) funktionieren **nicht mehr**.
::::

:::: warning Achtung
Der Server benötigt ein **eigenes, separates mod.io-Konto** mit einer eigenen E-Mail-Adresse — **nicht** dasselbe Konto, das du als Spieler im Spiel verwendest. Mit einem geteilten Konto lädt der Server keine Mods herunter.
::::

## Schritt 1: mod.io-Konto erstellen

Erstelle ein neues [mod.io](https://mod.io/)-Konto ausschließlich für deinen Server und merke dir die verwendete E-Mail-Adresse. mod.io verwendet keine Passwörter, sondern meldet dich per E-Mail-Code an.

## Schritt 2: Mods abonnieren

1. <b>Im Webportal anmelden</b><br>
   Melde dich mit dem **Server-Konto** auf [mod.io](https://mod.io/) an.

2. <b>Mods abonnieren</b><br>
   Öffne den [Insurgency: Sandstorm Bereich](https://mod.io/g/insurgencysandstorm) und abonniere jede Mod, die der Server laden soll.

   :::: info Hinweis
   Mods werden ausschließlich über die **Abos** des Server-Kontos gesteuert. Das Hinzufügen und Entfernen von Mods ist nur über das mod.io-Webportal möglich.
   ::::

## Schritt 3: Sicherheitscode anfordern

Beim ersten Start muss sich der Server einmalig mit einem **Sicherheitscode** bei mod.io autorisieren.

1. <b>PowerShell öffnen</b><br>
   Öffne auf deinem PC die **PowerShell**.

2. <b>Code anfordern</b><br>
   Führe folgenden Befehl aus und ersetze `DEINE_EMAIL` durch die E-Mail-Adresse deines **Server-Kontos**:

   ```powershell
   curl.exe -s -L -X POST "https://g-254.modapi.io/v1/oauth/emailrequest?api_key=bbf3af200848aef28418c032a601e7a2" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "email=DEINE_EMAIL"
   ```

3. <b>Code aus E-Mail entnehmen</b><br>
   Du erhältst anschließend einen **5-stelligen Sicherheitscode** per E-Mail.

## Schritt 4: Server einmalig autorisieren

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung und navigiere zu den **Einstellungen**.

2. <b>Sicherheitscode eintragen</b><br>
   Trage im Feld **Security Code** den per E-Mail erhaltenen Code ein (ersetze den Standardwert `none`) und speichere die Einstellung.

3. <b>Server starten</b><br>
   Starte deinen Server. Er autorisiert sich einmalig mit dem Code und lädt die abonnierten Mods herunter.

## Schritt 5: Sicherheitscode zurücksetzen

Der Sicherheitscode ist **einmalig** und nach dem ersten Start verbraucht. Setze das Feld **Security Code** anschließend wieder auf `none` und starte den Server neu.

:::: tip Tipp
Das Feld **Security Code** steht standardmäßig auf `none`, und `-Mods` ist im Feld **Zusätzliche Parameter** bereits aktiv. Du trägst den Code also nur für den **einmaligen** ersten Start ein und setzt das Feld danach wieder auf `none`.
::::

## Modifizierte Karte laden

Damit der Server nach dem Download direkt auf eine modifizierte Karte wechselt, ergänze im Feld **Zusätzliche Parameter**:

```
-ModDownloadTravelTo=MAP?Scenario=SZENARIO
```

Die genauen Werte für `MAP` und `SZENARIO` stehen in der Beschreibung der jeweiligen Karten-Mod auf mod.io.

:::: warning Achtung
Die als Boot-Map gesetzte **Map**/**Szenario** muss eine **Vanilla-Karte** sein — eine modifizierte Karte kann nicht als Start-Map dienen, da sie beim Start noch nicht heruntergeladen ist. Der Server bootet auf der Vanilla-Karte, lädt die Mods und wechselt erst danach per `-ModDownloadTravelTo` auf die modifizierte Karte.
::::

## Fehlerbehebung

Lädt der Server keine Mods herunter, prüfe folgende Punkte:

- Das Server-Konto ist ein **eigenes** Konto (nicht dein Spieler-Konto).
- Das Server-Konto hat die gewünschten Mods im **Webportal abonniert**.
- `-Mods` ist im Feld **Zusätzliche Parameter** gesetzt.
- Meldung „Security code has already been redeemed": Der Code wurde bereits verwendet — setze das Feld **Security Code** auf `none` (der Server ist dann bereits autorisiert).
- Hartnäckige Download-Probleme: Lösche per [SFTP](../sftp-verbindung-herstellen.md) den mod.io-Cache (Ordner `mod.io/254/`) und autorisiere den Server mit einem neuen Code erneut.

:::: info Hinweis
Auch die **Spieler** müssen die Mods (z.B. eigene Karten) mit ihrem eigenen mod.io-Konto abonnieren, um dem Server beitreten zu können. Der Download startet beim Verbinden im Hintergrund und wird nicht immer mit einem Fortschrittsbalken angezeigt.
::::

:::: info Migration vom alten Verfahren
Falls du den Server zuvor über einen **AccessToken** in der `GameUserSettings.ini` eingerichtet hast: Entferne den Abschnitt `[/Script/ModKit.ModIOClient]` aus dieser Datei. Das aktuelle Verfahren nutzt ausschließlich den Sicherheitscode.
::::

## Mutatoren

Manche Mods benötigen zusätzlich aktivierte **Mutatoren**. Wie du sie aktivierst, erfährst du in der Anleitung [Mutatoren hinzufügen](mutatoren-hinzufuegen.md). Einige Mods benötigen außerdem Einträge in der `Game.ini` — prüfe dazu die Mod-Beschreibung auf mod.io.
