import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  titleTemplate: ":title - EmeraldHost.de",
  head: [
    [
      'link',
      {
        rel: 'icon',
        sizes: '32x32',
        href: 'https://emeraldhost.de/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        sizes: '16x16',
        href: 'https://emeraldhost.de/favicon-16x16.png'
      }
    ]
  ],
  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/',
      title: "Dokumentation",
      description: "Zentralen Wissensdatenbank von EmeraldHost! Hier möchten wir Dir, als unserem Kunden, unsere Produkte näher bringen und Dir zeigen, wie Du sie bestmöglich nutzen kannst.",
      themeConfig: {
        nav: [
          { text: 'Webseite', link: 'https://emeraldhost.de/de' },
          { text: 'Support', link: 'https://emeraldhost.de/de/support' },
          { text: 'Impressum', link: 'https://emeraldhost.de/de/impressum' }
        ],
        sidebar: [
          { text: 'Willkommen!', link: '/' },
          { text: 'Neukunden Rabatt sichern! 🎉', link: '/neukunden-rabatt-sichern' },
          {
            text: 'Gameserver',
            items: [
              {
                text: 'Allgemein',
                collapsed: false,
                items: [
                  { text: 'SFTP-Verbindung Herstellen', link: '/gameserver/sftp-verbindung-herstellen' },
                  { text: 'Datenbank erstellen', link: '/gameserver/datenbank-erstellen' },
                  { text: 'Backup erstellen', link: '/gameserver/backup-erstellen' },
                  { text: 'Epic Games ID Herausfinden', link: '/gameserver/epicgamesid-herausfinden' },
                  { text: 'SteamID64 Herausfinden', link: '/gameserver/steamid64-herausfinden' }
                ]
              },
              {
                text: '7 Days to Die',
                link: '/gameserver/7-days-to-die',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/7-days-to-die/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/7-days-to-die/backup-erstellen' },
                  { text: 'Cheat-Modus aktivieren', link: '/gameserver/7-days-to-die/cheat-modus-aktivieren' },
                  { text: 'Crossplay aktivieren', link: '/gameserver/7-days-to-die/crossplay-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/7-days-to-die/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/7-days-to-die/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/7-days-to-die/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/7-days-to-die/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/7-days-to-die/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/7-days-to-die/spieler-kicken-bannen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/7-days-to-die/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Abiotic Factor',
                link: '/gameserver/abiotic-factor',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/abiotic-factor/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/abiotic-factor/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/abiotic-factor/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/abiotic-factor/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/abiotic-factor/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/abiotic-factor/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Aloft',
                link: '/gameserver/aloft',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/aloft/admin-hinzufuegen' },
                  { text: 'Anzahl der Inseln ändern', link: '/gameserver/aloft/anzahl-der-inseln-aendern' },
                  { text: 'Backup erstellen', link: '/gameserver/aloft/backup-erstellen' },
                  { text: 'Ingame Konsole öffnen', link: '/gameserver/aloft/ingame-konsole-oeffnen' },
                  { text: 'Private Inseln aktivieren', link: '/gameserver/aloft/private-inseln-aktivieren' },
                  { text: 'Savegame herunterladen', link: '/gameserver/aloft/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/aloft/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/aloft/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/aloft/server-name-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/aloft/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/american-truck-simulator/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/american-truck-simulator/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/american-truck-simulator/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/american-truck-simulator/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/american-truck-simulator/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/american-truck-simulator/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/ark-survival-evolved/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/ark-survival-evolved/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/ark-survival-evolved/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/ark-survival-evolved/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/ark-survival-evolved/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/ark-survival-evolved/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/ark-survival-evolved/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Arma 3',
                link: '/gameserver/arma-3',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/arma-3/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/arma-3/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/arma-3/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/arma-3/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/arma-3/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/arma-3/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/arma-3/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '/gameserver/arma-reforger',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/arma-reforger/admin-hinzufuegen' },
                  { text: 'Admin werden', link: '/gameserver/arma-reforger/admin-werden' },
                  { text: 'Backup erstellen', link: '/gameserver/arma-reforger/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/arma-reforger/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/arma-reforger/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/arma-reforger/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/arma-reforger/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/arma-reforger/spieler-kicken-bannen' },
                  { text: 'Szenario ändern', link: '/gameserver/arma-reforger/szenario-aendern' }
                ]
              },
              {
                text: 'Astroneer',
                link: '/gameserver/astroneer',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/astroneer/backup-erstellen' },
                  { text: 'Maximale Spieler ändern', link: '/gameserver/astroneer/max-spieler-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/astroneer/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/astroneer/server-name-aendern' },
                  { text: 'Server Owner festlegen', link: '/gameserver/astroneer/server-owner-festlegen' },
                  { text: 'Server Passwort setzen', link: '/gameserver/astroneer/server-passwort-setzen' }
                ]
              },
              {
                text: 'Avorion',
                link: '/gameserver/avorion',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/avorion/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/avorion/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/avorion/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/avorion/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/avorion/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/avorion/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/avorion/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Barotrauma',
                link: '/gameserver/barotrauma',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/barotrauma/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/barotrauma/backup-erstellen' },
                  { text: 'Bots hinzufügen', link: '/gameserver/barotrauma/bots-hinzufuegen' },
                  { text: 'Custom Ranks hinzufügen', link: '/gameserver/barotrauma/custom-ranks-hinzufuegen' },
                  { text: 'Karma aktivieren', link: '/gameserver/barotrauma/karma-aktivieren' },
                  { text: 'Mods hinzufügen', link: '/gameserver/barotrauma/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/barotrauma/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/barotrauma/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/barotrauma/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/barotrauma/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/barotrauma/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/barotrauma/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/barotrauma/serverliste-aktivieren' },
                  { text: 'Spielmodus ändern', link: '/gameserver/barotrauma/spielmodus-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/barotrauma/max-spieler-aendern' },
                  { text: 'Spieler bannen', link: '/gameserver/barotrauma/spieler-bannen' },
                  { text: 'Traitors aktivieren', link: '/gameserver/barotrauma/traitors-aktivieren' }
                ]
              },
              {
                text: 'BATTALION Legacy',
                link: '/gameserver/battalion-legacy',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/battalion-legacy/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/battalion-legacy/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/battalion-legacy/server-beitreten' }
                ]
              },
              {
                text: 'BeamMP',
                link: '/gameserver/beammp',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/beammp/admin-hinzufuegen' },
                  { text: 'Auth-Schlüssel hinterlegen', link: '/gameserver/beammp/auth-schluessel-hinterlegen' },
                  { text: 'Backup erstellen', link: '/gameserver/beammp/backup-erstellen' },
                  { text: 'Chat Logging aktivieren', link: '/gameserver/beammp/chat-logging-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/beammp/map-aendern' },
                  { text: 'Max Autos ändern', link: '/gameserver/beammp/max-autos-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/beammp/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/beammp/mods-hinzufuegen' },
                  { text: 'Privat-Modus aktivieren', link: '/gameserver/beammp/privat-modus-aktivieren' },
                  { text: 'Savegame herunterladen', link: '/gameserver/beammp/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/beammp/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/beammp/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/beammp/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/beammp/server-name-aendern' },
                  { text: 'Server Version ändern', link: '/gameserver/beammp/server-version-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/beammp/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Black Mesa',
                link: '/gameserver/black-mesa',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/black-mesa/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/black-mesa/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/black-mesa/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/black-mesa/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/black-mesa/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Citadel Forged with Fire',
                link: '/gameserver/citadel-forged-with-fire',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/citadel-forged-with-fire/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/citadel-forged-with-fire/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/citadel-forged-with-fire/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/citadel-forged-with-fire/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/citadel-forged-with-fire/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/citadel-forged-with-fire/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Colony Survival',
                link: '/gameserver/colony-survival',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/colony-survival/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/colony-survival/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/colony-survival/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/colony-survival/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/colony-survival/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/colony-survival/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/colony-survival/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Conan Exiles',
                link: '/gameserver/conan-exiles',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/conan-exiles/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/conan-exiles/backup-erstellen' },
                  { text: 'BattlEye aktivieren', link: '/gameserver/conan-exiles/battleye-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/conan-exiles/map-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/conan-exiles/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/conan-exiles/mods-hinzufuegen' },
                  { text: 'PvP aktivieren', link: '/gameserver/conan-exiles/pvp-aktivieren' },
                  { text: 'Savegame herunterladen', link: '/gameserver/conan-exiles/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/conan-exiles/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/conan-exiles/server-beitreten' },
                  { text: 'Server Community ändern', link: '/gameserver/conan-exiles/server-community-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/conan-exiles/server-name-aendern' },
                  { text: 'Server Region ändern', link: '/gameserver/conan-exiles/server-region-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/conan-exiles/spieler-kicken-bannen' },
                  { text: 'VAC aktivieren', link: '/gameserver/conan-exiles/vac-aktivieren' }
                ]
              },
              {
                text: 'Counter-Strike 2',
                link: '/gameserver/counter-strike-2',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/counter-strike-2/backup-erstellen' },
                  { text: 'Map ändern', link: '/gameserver/counter-strike-2/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/counter-strike-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/counter-strike-2/server-beitreten' },
                  { text: 'Server konfigurieren', link: '/gameserver/counter-strike-2/server-konfigurieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/counter-strike-2/spieler-kicken-bannen' },
                  { text: 'Spielmodus ändern', link: '/gameserver/counter-strike-2/spielmodus-aendern' },
                  { text: 'Workshop Maps hinzufügen', link: '/gameserver/counter-strike-2/workshop-maps-hinzufuegen' }
                ]
              },
              {
                text: 'Core Keeper',
                link: '/gameserver/core-keeper',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/core-keeper/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/core-keeper/backup-erstellen' },
                  { text: 'Content Bundle ändern', link: '/gameserver/core-keeper/content-bundle-aendern' },
                  { text: 'Game ID ändern', link: '/gameserver/core-keeper/game-id-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/core-keeper/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/core-keeper/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/core-keeper/savegame-hinzufuegen' },
                  { text: 'Seasonal Events aktivieren', link: '/gameserver/core-keeper/seasonal-events-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/core-keeper/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/core-keeper/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/core-keeper/server-passwort-setzen' },
                  { text: 'Spieler bannen', link: '/gameserver/core-keeper/spieler-bannen' },
                  { text: 'Welt Index ändern', link: '/gameserver/core-keeper/welt-index-aendern' },
                  { text: 'Welt Modus ändern', link: '/gameserver/core-keeper/welt-modus-aendern' },
                  { text: 'Welt Seed ändern', link: '/gameserver/core-keeper/welt-seed-aendern' }
                ]
              },
              {
                text: 'Counter-Strike Global Offensive',
                link: '/gameserver/counter-strike-global-offensive',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/counter-strike-global-offensive/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/counter-strike-global-offensive/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/counter-strike-global-offensive/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/counter-strike-global-offensive/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/counter-strike-global-offensive/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Counter-Strike Source',
                link: '/gameserver/counter-strike-source',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/counter-strike-source/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/counter-strike-source/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/counter-strike-source/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/counter-strike-source/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/counter-strike-source/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Craftopia',
                link: '/gameserver/craftopia',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/craftopia/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/craftopia/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/craftopia/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/craftopia/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/craftopia/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'CryoFall',
                link: '/gameserver/cryofall',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/cryofall/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/cryofall/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/cryofall/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/cryofall/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/cryofall/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/cryofall/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/cryofall/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'DayZ',
                link: '/gameserver/dayz',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/dayz/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/dayz/backup-erstellen' },
                  { text: 'Fadenkreuz aktivieren', link: '/gameserver/dayz/fadenkreuz-aktivieren' },
                  { text: 'Loot anpassen', link: '/gameserver/dayz/loot-anpassen' },
                  { text: 'Map ändern', link: '/gameserver/dayz/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/dayz/mods-hinzufuegen' },
                  { text: 'PvP einstellen', link: '/gameserver/dayz/pvp-einstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/dayz/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/dayz/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/dayz/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/dayz/spieler-kicken-bannen' },
                  { text: 'Tageszeit ändern', link: '/gameserver/dayz/tageszeit-aendern' },
                  { text: 'Third Person aktivieren', link: '/gameserver/dayz/third-person-aktivieren' },
                  { text: 'VoN aktivieren', link: '/gameserver/dayz/von-aktivieren' }
                ]
              },
              {
                text: 'Don’t Starve Together',
                link: '/gameserver/dont-starve-together',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/dont-starve-together/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/dont-starve-together/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/dont-starve-together/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/dont-starve-together/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/dont-starve-together/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/dont-starve-together/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/dont-starve-together/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Echoes of Elysium',
                link: '/gameserver/echoes-of-elysium',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/echoes-of-elysium/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/echoes-of-elysium/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/echoes-of-elysium/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/echoes-of-elysium/server-beitreten' }
                ]
              },
              {
                text: 'Eco',
                link: '/gameserver/eco',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/eco/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/eco/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/eco/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/eco/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/eco/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/eco/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/eco/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/enshrouded/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/enshrouded/backup-erstellen' },
                  { text: 'Performance-Probleme auf Enshrouded Servern', link: '/gameserver/enshrouded/performance-probleme-auf-enshrouded-servern' },
                  { text: 'Savegame herunterladen', link: '/gameserver/enshrouded/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/enshrouded/savegame-hinzufuegen' },
                  { text: 'Schwierigkeit anpassen', link: '/gameserver/enshrouded/schwierigkeit-anpassen' },
                  { text: 'Server beitreten', link: '/gameserver/enshrouded/server-beitreten' },
                  { text: 'Server Passwort ändern', link: '/gameserver/enshrouded/server-passwort-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/enshrouded/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Empyrion: Galactic Survival',
                link: '/gameserver/empyrion-galactic-survival',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/empyrion-galactic-survival/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/empyrion-galactic-survival/backup-erstellen' },
                  { text: 'Gamemode ändern', link: '/gameserver/empyrion-galactic-survival/gamemode-aendern' },
                  { text: 'Maximale Spieler ändern', link: '/gameserver/empyrion-galactic-survival/max-spieler-aendern' },
                  { text: 'Savegame-Name ändern', link: '/gameserver/empyrion-galactic-survival/savegame-name-aendern' },
                  { text: 'Seed ändern', link: '/gameserver/empyrion-galactic-survival/seed-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/empyrion-galactic-survival/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/empyrion-galactic-survival/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/empyrion-galactic-survival/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/empyrion-galactic-survival/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/empyrion-galactic-survival/serverliste-aktivieren' }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/euro-truck-simulator-2/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/euro-truck-simulator-2/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/euro-truck-simulator-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/euro-truck-simulator-2/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/euro-truck-simulator-2/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden deaktivieren', link: '/gameserver/euro-truck-simulator-2/spieler-schaden-deaktivieren' }
                ]
              },
              {
                text: 'Factorio',
                link: '/gameserver/factorio',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/factorio/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/factorio/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/factorio/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/factorio/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/factorio/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/factorio/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/factorio/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Fistful of Frags',
                link: '/gameserver/fistful-of-frags',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/fistful-of-frags/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/fistful-of-frags/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/fistful-of-frags/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/fistful-of-frags/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/fistful-of-frags/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'FiveM',
                link: '/gameserver/fivem',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/fivem/backup-erstellen' },
                  { text: 'Lizenz Key hinterlegen', link: '/gameserver/fivem/lizenz-key-hinterlegen' },
                  { text: 'Port einstellen', link: '/gameserver/fivem/port-einstellen' },
                  { text: 'Server beitreten', link: '/gameserver/fivem/server-beitreten' }
                ]
              },
              {
                text: 'FOUNDRY',
                link: '/gameserver/foundry',
                collapsed: true,
                items: [
                  { text: 'Autosave ändern', link: '/gameserver/foundry/autosave-aendern' },
                  { text: 'Backup erstellen', link: '/gameserver/foundry/backup-erstellen' },
                  { text: 'Maximale Spieler ändern', link: '/gameserver/foundry/max-spieler-aendern' },
                  { text: 'Server anhalten wenn leer', link: '/gameserver/foundry/server-anhalten-wenn-leer' },
                  { text: 'Server beitreten', link: '/gameserver/foundry/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/foundry/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/foundry/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/foundry/serverliste-aktivieren' },
                  { text: 'Welt Name ändern', link: '/gameserver/foundry/welt-name-aendern' },
                  { text: 'Welt Seed ändern', link: '/gameserver/foundry/welt-seed-aendern' }
                ]
              },
              {
                text: 'Frozen Flame',
                link: '/gameserver/frozen-flame',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/frozen-flame/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/frozen-flame/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/frozen-flame/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/frozen-flame/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/frozen-flame/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/frozen-flame/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Garry\'s Mod',
                link: '/gameserver/garrys-mod',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/garrys-mod/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/garrys-mod/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/garrys-mod/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/garrys-mod/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/garrys-mod/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Ground Branch',
                link: '/gameserver/ground-branch',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/ground-branch/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/ground-branch/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/ground-branch/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/ground-branch/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/ground-branch/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'GTA San Andreas',
                link: '/gameserver/gta-san-andreas',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/gta-san-andreas/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/gta-san-andreas/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/gta-san-andreas/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/gta-san-andreas/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/gta-san-andreas/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'HumanitZ',
                link: '/gameserver/humanitz',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/humanitz/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/humanitz/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/humanitz/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/humanitz/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/humanitz/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/humanitz/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Hytale',
                link: '/gameserver/hytale',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/hytale/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/hytale/backup-erstellen' },
                  { text: 'Fallschaden aktivieren', link: '/gameserver/hytale/fallschaden-aktivieren' },
                  { text: 'Gamemode ändern', link: '/gameserver/hytale/gamemode-aendern' },
                  { text: 'Item-Verlust beim Tod', link: '/gameserver/hytale/item-verlust-beim-tod' },
                  { text: 'Max Spieler ändern', link: '/gameserver/hytale/max-spieler-aendern' },
                  { text: 'Max View Radius ändern', link: '/gameserver/hytale/max-view-radius-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/hytale/mods-hinzufuegen' },
                  { text: 'MOTD ändern', link: '/gameserver/hytale/motd-aendern' },
                  { text: 'Neue Welt erstellen', link: '/gameserver/hytale/neue-welt-erstellen' },
                  { text: 'NPCs deaktivieren', link: '/gameserver/hytale/npcs-deaktivieren' },
                  { text: 'Passwort setzen', link: '/gameserver/hytale/passwort-setzen' },
                  { text: 'Performance verbessern', link: '/gameserver/hytale/performance-verbessern' },
                  { text: 'PvP aktivieren', link: '/gameserver/hytale/pvp-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/hytale/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/hytale/server-name-aendern' },
                  { text: 'Spawn-Punkt setzen', link: '/gameserver/hytale/spawn-punkt-setzen' },
                  { text: 'Spieler kicken und bannen', link: '/gameserver/hytale/spieler-kicken-bannen' },
                  { text: 'Spielzeit pausieren', link: '/gameserver/hytale/spielzeit-pausieren' },
                  { text: 'Tageszeit ändern', link: '/gameserver/hytale/tageszeit-aendern' },
                  { text: 'Welt herunterladen', link: '/gameserver/hytale/welt-herunterladen' },
                  { text: 'Welt hochladen', link: '/gameserver/hytale/welt-hochladen' },
                  { text: 'Wetter ändern', link: '/gameserver/hytale/wetter-aendern' },
                  { text: 'World Seed ändern', link: '/gameserver/hytale/world-seed-aendern' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/hytale/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Icarus',
                link: '/gameserver/icarus',
                collapsed: true,
                items: [
                  { text: 'Admin Passwort setzen', link: '/gameserver/icarus/admin-passwort-setzen' },
                  { text: 'Backup erstellen', link: '/gameserver/icarus/backup-erstellen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/icarus/max-spieler-aendern' },
                  { text: 'Savegame herunterladen', link: '/gameserver/icarus/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/icarus/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/icarus/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/icarus/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/icarus/server-passwort-setzen' }
                ]
              },
              {
                text: 'Insurgency: Sandstorm',
                link: '/gameserver/insurgency-sandstorm',
                collapsed: true,
                items: [
                  { text: 'Admins hinzufügen', link: '/gameserver/insurgency-sandstorm/admins-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/insurgency-sandstorm/backup-erstellen' },
                  { text: 'Bots hinzufügen', link: '/gameserver/insurgency-sandstorm/bots-hinzufuegen' },
                  { text: 'Cheats aktivieren', link: '/gameserver/insurgency-sandstorm/cheats-aktivieren' },
                  { text: 'Co-Op-Server einrichten', link: '/gameserver/insurgency-sandstorm/coop-server-einrichten' },
                  { text: 'Game Stats Token setzen', link: '/gameserver/insurgency-sandstorm/game-stats-token-setzen' },
                  { text: 'Gamemode-Einstellungen ändern', link: '/gameserver/insurgency-sandstorm/gamemode-einstellungen-aendern' },
                  { text: 'GSL Token setzen', link: '/gameserver/insurgency-sandstorm/gsl-token-setzen' },
                  { text: 'Kill-Feed konfigurieren', link: '/gameserver/insurgency-sandstorm/kill-feed-konfigurieren' },
                  { text: 'Map ändern', link: '/gameserver/insurgency-sandstorm/map-aendern' },
                  { text: 'Map Cycle einrichten', link: '/gameserver/insurgency-sandstorm/map-cycle-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/insurgency-sandstorm/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/insurgency-sandstorm/mods-hinzufuegen' },
                  { text: 'Mutatoren hinzufügen', link: '/gameserver/insurgency-sandstorm/mutatoren-hinzufuegen' },
                  { text: 'RCON verwenden', link: '/gameserver/insurgency-sandstorm/rcon-verwenden' },
                  { text: 'Server beitreten', link: '/gameserver/insurgency-sandstorm/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/insurgency-sandstorm/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/insurgency-sandstorm/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/insurgency-sandstorm/spieler-kicken-bannen' },
                  { text: 'Spieler-Voting konfigurieren', link: '/gameserver/insurgency-sandstorm/spieler-voting-konfigurieren' },
                  { text: 'Szenario ändern', link: '/gameserver/insurgency-sandstorm/szenario-aendern' },
                  { text: 'Team-Kill-Einstellungen', link: '/gameserver/insurgency-sandstorm/team-kill-einstellungen' },
                  { text: 'Zusätzliche Parameter', link: '/gameserver/insurgency-sandstorm/zusaetzliche-parameter' }
                ]
              },
              {
                text: 'IOSoccer',
                link: '/gameserver/iosoccer',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/iosoccer/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/iosoccer/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/iosoccer/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/iosoccer/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/iosoccer/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Kerbal Space Program',
                link: '/gameserver/kerbal-space-program',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/kerbal-space-program/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/kerbal-space-program/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/kerbal-space-program/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/kerbal-space-program/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/kerbal-space-program/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/kerbal-space-program/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/kerbal-space-program/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Left 4 Dead',
                link: '/gameserver/left-4-dead',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/left-4-dead/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/left-4-dead/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/left-4-dead/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/left-4-dead/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/left-4-dead/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Left 4 Dead 2',
                link: '/gameserver/left-4-dead-2',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/left-4-dead-2/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/left-4-dead-2/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/left-4-dead-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/left-4-dead-2/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/left-4-dead-2/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Longvinter',
                link: '/gameserver/longvinter',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/longvinter/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/longvinter/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/longvinter/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/longvinter/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/longvinter/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/longvinter/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Midnight Ghost Hunt',
                link: '/gameserver/midnight-ghost-hunt',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/midnight-ghost-hunt/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/midnight-ghost-hunt/server-beitreten' }
                ]
              },
              {
                text: 'Mindustry',
                link: '/gameserver/mindustry',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/mindustry/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/mindustry/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/mindustry/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/mindustry/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/mindustry/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/mindustry/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/mindustry/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Allowlist aktivieren', link: '/gameserver/minecraft-bedrock-edition/allowlist-aktivieren' },
                  { text: 'Backup erstellen', link: '/gameserver/minecraft-bedrock-edition/backup-erstellen' },
                  { text: 'Behavior und Resource Packs hinzufügen', link: '/gameserver/minecraft-bedrock-edition/behavior-und-resource-packs-hinzufuegen' },
                  { text: 'End deaktivieren', link: '/gameserver/minecraft-bedrock-edition/end-deaktivieren' },
                  { text: 'Locator Bar deaktivieren', link: '/gameserver/minecraft-bedrock-edition/locator-bar-deaktivieren' },
                  { text: 'Nether deaktivieren', link: '/gameserver/minecraft-bedrock-edition/nether-deaktivieren' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-bedrock-edition/op-rechte-vergeben' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-bedrock-edition/server-beitreten' },
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-bedrock-edition/slots-erhoehen' },
                  { text: 'Tick-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/tick-distance-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-bedrock-edition/spieler-kicken-bannen' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-bedrock-edition/view-distance-aendern' },
                  { text: 'Welt herunterladen', link: '/gameserver/minecraft-bedrock-edition/welt-herunterladen' },
                  { text: 'Welt-Grenze ändern', link: '/gameserver/minecraft-bedrock-edition/welt-grenze-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-bedrock-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-bedrock-edition/welt-loeschen' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-bedrock-edition/world-seed-aendern' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-bedrock-edition/befehle/tp-befehl-verwenden' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Endstone Edition',
                link: '/gameserver/minecraft-endstone-edition',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/minecraft-endstone-edition/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/minecraft-endstone-edition/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/minecraft-endstone-edition/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/minecraft-endstone-edition/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/minecraft-endstone-edition/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-endstone-edition/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-endstone-edition/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Minecraft Java Edition',
                link: '/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/minecraft-java-edition/backup-erstellen' },
                  { text: 'End deaktivieren', link: '/gameserver/minecraft-java-edition/end-deaktivieren' },
                  { text: 'Locator Bar deaktivieren', link: '/gameserver/minecraft-java-edition/locator-bar-deaktivieren' },
                  { text: 'Minecraft EULA akzeptieren', link: '/gameserver/minecraft-java-edition/minecraft-eula-akzeptieren' },
                  { text: 'Modpack ändern', link: '/gameserver/minecraft-java-edition/modpack-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/minecraft-java-edition/mods-hinzufuegen' },
                  { text: 'MOTD ändern', link: '/gameserver/minecraft-java-edition/motd-aendern' },
                  { text: 'Nether deaktivieren', link: '/gameserver/minecraft-java-edition/nether-deaktivieren' },
                  { text: 'OP-Rechte vergeben', link: '/gameserver/minecraft-java-edition/op-rechte-vergeben' },
                  { text: 'Plugins installieren', link: '/gameserver/minecraft-java-edition/plugins-installieren' },
                  { text: 'Schwierigkeitsgrad ändern', link: '/gameserver/minecraft-java-edition/schwierigkeitsgrad-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-java-edition/server-beitreten' },
                  { text: 'Server-Icon ändern', link: '/gameserver/minecraft-java-edition/server-icon-aendern' },
                  { text: 'Simulation-Distance ändern', link: '/gameserver/minecraft-java-edition/simulation-distance-aendern' },
                  { text: 'Slots erhöhen', link: '/gameserver/minecraft-java-edition/slots-erhoehen' },
                  { text: 'Spawn-Schutz ändern', link: '/gameserver/minecraft-java-edition/spawn-schutz-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-java-edition/spieler-kicken-bannen' },
                  { text: 'Version ändern', link: '/gameserver/minecraft-java-edition/version-aendern' },
                  { text: 'View-Distance ändern', link: '/gameserver/minecraft-java-edition/view-distance-aendern' },
                  { text: 'Welt herunterladen', link: '/gameserver/minecraft-java-edition/welt-herunterladen' },
                  { text: 'Welt-Grenze ändern', link: '/gameserver/minecraft-java-edition/welt-grenze-aendern' },
                  { text: 'Welt Hochladen', link: '/gameserver/minecraft-java-edition/welt-hochladen' },
                  { text: 'Welt Löschen', link: '/gameserver/minecraft-java-edition/welt-loeschen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/minecraft-java-edition/whitelist-aktivieren' },
                  { text: 'World-Seed ändern', link: '/gameserver/minecraft-java-edition/world-seed-aendern' },
                  {
                    text: 'Befehle',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Gamemode verändern', link: '/gameserver/minecraft-java-edition/befehle/gamemode-veraendern' },
                      { text: 'Server moderieren', link: '/gameserver/minecraft-java-edition/befehle/server-moderieren' },
                      { text: 'Tp-Befehl verwenden', link: '/gameserver/minecraft-java-edition/befehle/tp-befehl-verwenden' },
                      { text: 'Wetter verändern', link: '/gameserver/minecraft-java-edition/befehle/wetter-veraendern' }
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'BlueMap einrichten', link: '/gameserver/minecraft-java-edition/plugins/bluemap-einrichten' },
                      { text: 'Dynmap einrichten', link: '/gameserver/minecraft-java-edition/plugins/dynmap-einrichten' },
                      { text: 'Java mit Bedrock verknüpfen', link: '/gameserver/minecraft-java-edition/plugins/java-mit-bedrock-verknuepfen' },
                      { text: 'Plasmo Voice einrichten', link: '/gameserver/minecraft-java-edition/plugins/plasmo-voice-einrichten' },
                      { text: 'Pl3xMap einrichten', link: '/gameserver/minecraft-java-edition/plugins/pl3xmap-einrichten' },
                      { text: 'Simple Voice Chat einrichten', link: '/gameserver/minecraft-java-edition/plugins/simple-voice-chat-einrichten' },
                      { text: 'squaremap einrichten', link: '/gameserver/minecraft-java-edition/plugins/squaremap-einrichten' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft PocketMine Edition',
                link: '/gameserver/minecraft-pocketmine-edition',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/minecraft-pocketmine-edition/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/minecraft-pocketmine-edition/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/minecraft-pocketmine-edition/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/minecraft-pocketmine-edition/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/minecraft-pocketmine-edition/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/minecraft-pocketmine-edition/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/minecraft-pocketmine-edition/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Mordhau',
                link: '/gameserver/mordhau',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/mordhau/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/mordhau/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/mordhau/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/mordhau/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/mordhau/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Myth of Empires',
                link: '/gameserver/myth-of-empires',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/myth-of-empires/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/myth-of-empires/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/myth-of-empires/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/myth-of-empires/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/myth-of-empires/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/myth-of-empires/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Necesse',
                link: '/gameserver/necesse',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/necesse/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/necesse/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/necesse/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/necesse/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/necesse/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/necesse/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/necesse/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Nightingale',
                link: '/gameserver/nightingale',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/nightingale/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/nightingale/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/nightingale/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/nightingale/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/nightingale/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/nightingale/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'No Love Lost',
                link: '/gameserver/no-love-lost',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/no-love-lost/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/no-love-lost/server-beitreten' }
                ]
              },
              {
                text: 'No More Room in Hell',
                link: '/gameserver/no-more-room-in-hell',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/no-more-room-in-hell/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/no-more-room-in-hell/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/no-more-room-in-hell/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/no-more-room-in-hell/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/no-more-room-in-hell/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'No One Survived',
                link: '/gameserver/no-one-survived',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/no-one-survived/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/no-one-survived/backup-erstellen' },
                  { text: 'Map ändern', link: '/gameserver/no-one-survived/map-aendern' },
                  { text: 'Savegame herunterladen', link: '/gameserver/no-one-survived/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/no-one-survived/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/no-one-survived/server-beitreten' },
                  { text: 'Spieleinstellungen ändern', link: '/gameserver/no-one-survived/spieleinstellungen-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/no-one-survived/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Operation Harsh Doorstop',
                link: '/gameserver/operation-harsh-doorstop',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/operation-harsh-doorstop/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/operation-harsh-doorstop/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/operation-harsh-doorstop/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/operation-harsh-doorstop/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/operation-harsh-doorstop/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Palworld',
                link: '/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/palworld/admin-hinzufuegen' },
                  { text: 'Arbeitsgeschwindigkeit ändern', link: '/gameserver/palworld/arbeitsgeschwindigkeit-aendern' },
                  { text: 'Ausrüstungs-Haltbarkeit ändern', link: '/gameserver/palworld/ausruestungs-haltbarkeit-aendern' },
                  { text: 'Backup erstellen', link: '/gameserver/palworld/backup-erstellen' },
                  { text: 'Broadcast Nachricht senden', link: '/gameserver/palworld/broadcast-nachricht-senden' },
                  { text: 'Drop-Rate ändern', link: '/gameserver/palworld/drop-rate-aendern' },
                  { text: 'Eier-Ausbrützeit ändern', link: '/gameserver/palworld/eier-ausbrutzeit-aendern' },
                  { text: 'Fast Travel aktivieren', link: '/gameserver/palworld/fast-travel-aktivieren' },
                  { text: 'Gebäudeschaden ändern', link: '/gameserver/palworld/gebaeudeschaden-aendern' },
                  { text: 'Gilden-Einstellungen ändern', link: '/gameserver/palworld/gilden-einstellungen-aendern' },
                  { text: 'Hardcore-Modus aktivieren', link: '/gameserver/palworld/hardcore-modus-aktivieren' },
                  { text: 'HP-Regeneration ändern', link: '/gameserver/palworld/hp-regeneration-aendern' },
                  { text: 'Hunger & Ausdauer anpassen', link: '/gameserver/palworld/hunger-ausdauer-anpassen' },
                  { text: 'Max Dropped Items ändern', link: '/gameserver/palworld/max-dropped-items-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/palworld/mods-hinzufuegen' },
                  { text: 'Pal-Fangrate ändern', link: '/gameserver/palworld/pal-fangrate-aendern' },
                  { text: 'Pal-Schaden ändern', link: '/gameserver/palworld/pal-schaden-aendern' },
                  { text: 'Pal-Spawnrate ändern', link: '/gameserver/palworld/pal-spawnrate-aendern' },
                  { text: 'PvP aktivieren', link: '/gameserver/palworld/pvp-aktivieren' },
                  { text: 'Raids aktivieren', link: '/gameserver/palworld/raids-aktivieren' },
                  { text: 'Savegame herunterladen', link: '/gameserver/palworld/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/palworld/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/palworld/server-beitreten' },
                  { text: 'Server Config anpassen', link: '/gameserver/palworld/server-config-anpassen' },
                  { text: 'Server Name ändern', link: '/gameserver/palworld/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/palworld/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/palworld/spieler-kicken-bannen' },
                  { text: 'Spieler-Schaden ändern', link: '/gameserver/palworld/spieler-schaden-aendern' },
                  { text: 'Tageszeit-Geschwindigkeit ändern', link: '/gameserver/palworld/tageszeit-geschwindigkeit-aendern' },
                  { text: 'Todesstrafe deaktivieren', link: '/gameserver/palworld/todesstrafe-deaktivieren' },
                  { text: 'Welt zurücksetzen', link: '/gameserver/palworld/welt-zuruecksetzen' },
                  { text: 'XP-Rate ändern', link: '/gameserver/palworld/xp-rate-aendern' }
                ]
              },
              {
                text: 'PixARK',
                link: '/gameserver/pixark',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/pixark/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/pixark/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/pixark/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/pixark/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/pixark/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/pixark/server-beitreten' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '/gameserver/project-zomboid',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/project-zomboid/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/project-zomboid/backup-erstellen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/project-zomboid/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/project-zomboid/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/project-zomboid/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/project-zomboid/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/project-zomboid/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/project-zomboid/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/project-zomboid/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/project-zomboid/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/project-zomboid/serverliste-aktivieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/project-zomboid/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'QANGA',
                link: '/gameserver/qanga',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/qanga/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/qanga/server-beitreten' }
                ]
              },
              {
                text: 'Quake Live',
                link: '/gameserver/quake-live',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/quake-live/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/quake-live/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/quake-live/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/quake-live/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/quake-live/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Renown',
                link: '/gameserver/renown',
                collapsed: true,
                items: [
                  { text: 'Admin Passwort setzen', link: '/gameserver/renown/admin-passwort-setzen' },
                  { text: 'Backup erstellen', link: '/gameserver/renown/backup-erstellen' },
                  { text: 'First Person Only aktivieren', link: '/gameserver/renown/first-person-only-aktivieren' },
                  { text: 'Map Rotation ändern', link: '/gameserver/renown/map-rotation-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/renown/max-spieler-aendern' },
                  { text: 'Öffentlicher Server ändern', link: '/gameserver/renown/oeffentlicher-server-aendern' },
                  { text: 'Private Sitzung ändern', link: '/gameserver/renown/private-sitzung-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/renown/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/renown/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/renown/server-passwort-setzen' },
                  { text: 'Use First Map aktivieren', link: '/gameserver/renown/use-first-map-aktivieren' }
                ]
              },
              {
                text: 'Romestead',
                link: '/gameserver/romestead',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/romestead/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/romestead/savegame-herunterladen' },
                  { text: 'Server beitreten', link: '/gameserver/romestead/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/romestead/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'RuneScape: Dragonwilds',
                link: '/gameserver/runescape-dragonwilds',
                collapsed: true,
                items: [
                  { text: 'Admin Passwort setzen', link: '/gameserver/runescape-dragonwilds/admin-passwort-setzen' },
                  { text: 'Backup erstellen', link: '/gameserver/runescape-dragonwilds/backup-erstellen' },
                  { text: 'Custom Welt erstellen', link: '/gameserver/runescape-dragonwilds/custom-welt-erstellen' },
                  { text: 'Owner ID setzen', link: '/gameserver/runescape-dragonwilds/owner-id-setzen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/runescape-dragonwilds/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/runescape-dragonwilds/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/runescape-dragonwilds/server-beitreten' },
                  { text: 'Server Passwort setzen', link: '/gameserver/runescape-dragonwilds/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/runescape-dragonwilds/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Rust',
                link: '/gameserver/rust',
                collapsed: true,
                items: [
                  { text: 'Autosave-Intervall ändern', link: '/gameserver/rust/autosave-intervall-aendern' },
                  { text: 'Backup erstellen', link: '/gameserver/rust/backup-erstellen' },
                  { text: 'Custom Map URL setzen', link: '/gameserver/rust/custom-map-url-setzen' },
                  { text: 'Map ändern', link: '/gameserver/rust/map-aendern' },
                  { text: 'Maximale Spieler ändern', link: '/gameserver/rust/max-spieler-aendern' },
                  { text: 'Seed ändern', link: '/gameserver/rust/seed-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/rust/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/rust/server-beschreibung-aendern' },
                  { text: 'Server Image setzen', link: '/gameserver/rust/server-image-setzen' },
                  { text: 'Server Logo setzen', link: '/gameserver/rust/server-logo-setzen' },
                  { text: 'Server Name ändern', link: '/gameserver/rust/server-name-aendern' },
                  { text: 'Server URL setzen', link: '/gameserver/rust/server-url-setzen' },
                  { text: 'uMod installieren', link: '/gameserver/rust/umod-installieren' },
                  { text: 'Weltgröße ändern', link: '/gameserver/rust/weltgroesse-aendern' }
                ]
              },
              {
                text: 's&box',
                link: '/gameserver/sbox',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/sbox/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/sbox/backup-erstellen' },
                  { text: 'Gamemode ändern', link: '/gameserver/sbox/gamemode-aendern' },
                  { text: 'Map ändern', link: '/gameserver/sbox/map-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/sbox/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/sbox/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'SCP: Secret Laboratory',
                link: '/gameserver/scp-secret-laboratory',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/scp-secret-laboratory/backup-erstellen' },
                  { text: 'EXILED Plugins installieren', link: '/gameserver/scp-secret-laboratory/exiled-plugins-installieren' },
                  { text: 'Ränge vergeben', link: '/gameserver/scp-secret-laboratory/raenge-vergeben' },
                  { text: 'Server beitreten', link: '/gameserver/scp-secret-laboratory/server-beitreten' }
                ]
              },
              {
                text: 'SCUM',
                link: '/gameserver/scum',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/scum/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/scum/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/scum/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/scum/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/scum/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/scum/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Satisfactory',
                link: '/gameserver/satisfactory',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/satisfactory/admin-hinzufuegen' },
                  { text: 'Admin Passwort setzen', link: '/gameserver/satisfactory/admin-passwort-setzen' },
                  { text: 'Backup erstellen', link: '/gameserver/satisfactory/backup-erstellen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/satisfactory/max-spieler-aendern' },
                  { text: 'Savegame herunterladen', link: '/gameserver/satisfactory/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/satisfactory/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/satisfactory/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/satisfactory/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/satisfactory/server-passwort-setzen' }
                ]
              },
              {
                text: 'Smalland Survive the Wilds',
                link: '/gameserver/smalland-survive-the-wilds',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/smalland-survive-the-wilds/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/smalland-survive-the-wilds/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/smalland-survive-the-wilds/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/smalland-survive-the-wilds/server-beitreten' }
                ]
              },
              {
                text: 'Solace Crafting',
                link: '/gameserver/solace-crafting',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/solace-crafting/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/solace-crafting/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/solace-crafting/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/solace-crafting/server-beitreten' }
                ]
              },
              {
                text: 'Soldat',
                link: '/gameserver/soldat',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/soldat/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/soldat/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/soldat/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/soldat/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/soldat/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Soldat 2',
                link: '/gameserver/soldat-2',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/soldat-2/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/soldat-2/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/soldat-2/mods-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/soldat-2/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/soldat-2/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Sons Of The Forest',
                link: '/gameserver/sons-of-the-forest',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/sons-of-the-forest/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/sons-of-the-forest/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/sons-of-the-forest/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/sons-of-the-forest/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/sons-of-the-forest/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/sons-of-the-forest/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Soulmask',
                link: '/gameserver/soulmask',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/soulmask/admin-hinzufuegen' },
                  { text: 'Admin Passwort setzen', link: '/gameserver/soulmask/admin-passwort-setzen' },
                  { text: 'Backup erstellen', link: '/gameserver/soulmask/backup-erstellen' },
                  { text: 'Invitation Code finden', link: '/gameserver/soulmask/invitation-code-finden' },
                  { text: 'Map ändern', link: '/gameserver/soulmask/map-aendern' },
                  { text: 'Max Spieler ändern', link: '/gameserver/soulmask/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/soulmask/mods-hinzufuegen' },
                  { text: 'PvP einstellen', link: '/gameserver/soulmask/pvp-einstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/soulmask/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/soulmask/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/soulmask/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/soulmask/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/soulmask/server-passwort-setzen' },
                  { text: 'Shifting Sands einrichten', link: '/gameserver/soulmask/shifting-sands-einrichten' },
                  { text: 'Speicher-Intervall ändern', link: '/gameserver/soulmask/speicher-intervall-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/soulmask/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Space Engineers',
                link: '/gameserver/space-engineers',
                collapsed: true,
                items: [
                  { text: 'Admins hinzufügen', link: '/gameserver/space-engineers/admins-hinzufuegen' },
                  { text: 'Automatische Backups aktivieren', link: '/gameserver/space-engineers/automatische-backups-aktivieren' },
                  { text: 'Experimental Modus aktivieren', link: '/gameserver/space-engineers/experimental-modus-aktivieren' },
                  { text: 'Game Mode ändern', link: '/gameserver/space-engineers/game-mode-aendern' },
                  { text: 'Ingame Skripte aktivieren', link: '/gameserver/space-engineers/ingame-skripte-aktivieren' },
                  { text: 'Maximale Spieler ändern', link: '/gameserver/space-engineers/max-spieler-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/space-engineers/mods-hinzufuegen' },
                  { text: 'Remote API aktivieren', link: '/gameserver/space-engineers/remote-api-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/space-engineers/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/space-engineers/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/space-engineers/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/space-engineers/server-passwort-setzen' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/space-engineers/spieler-kicken-bannen' },
                  { text: 'Welt herunterladen', link: '/gameserver/space-engineers/welt-herunterladen' },
                  { text: 'Welt hochladen', link: '/gameserver/space-engineers/welt-hochladen' }
                ]
              },
              {
                text: 'Space Station 14',
                link: '/gameserver/space-station-14',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/space-station-14/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/space-station-14/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/space-station-14/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/space-station-14/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Squad 44',
                link: '/gameserver/squad-44',
                collapsed: true,
                items: [
                  { text: 'Admin werden', link: '/gameserver/squad-44/admin-werden' },
                  { text: 'Backup erstellen', link: '/gameserver/squad-44/backup-erstellen' },
                  { text: 'Demos aufzeichnen', link: '/gameserver/squad-44/demos-aufzeichnen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/squad-44/max-spieler-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/squad-44/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/squad-44/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/squad-44/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/squad-44/serverliste-aktivieren' },
                  { text: 'Team Balance erzwingen', link: '/gameserver/squad-44/team-balance-erzwingen' },
                  { text: 'Teamwechsel erlauben', link: '/gameserver/squad-44/teamwechsel-erlauben' },
                  { text: 'Teamwechsel verhindern', link: '/gameserver/squad-44/teamwechsel-verhindern' }
                ]
              },
              {
                text: 'StarRupture',
                link: '/gameserver/starrupture',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/starrupture/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/starrupture/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/starrupture/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/starrupture/server-beitreten' }
                ]
              },
              {
                text: 'Terraria',
                link: '/gameserver/terraria',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/terraria/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/terraria/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/terraria/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/terraria/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/terraria/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Terraria tShock',
                link: '/gameserver/terraria-tshock',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/terraria-tshock/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/terraria-tshock/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/terraria-tshock/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/terraria-tshock/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/terraria-tshock/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/terraria-tshock/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/terraria-tshock/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/terraria-tmodloader/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/terraria-tmodloader/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/terraria-tmodloader/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/terraria-tmodloader/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/terraria-tmodloader/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/terraria-tmodloader/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/terraria-tmodloader/spieler-kicken-bannen' },
                  { text: 'Welt hinzufügen', link: '/gameserver/terraria-tmodloader/welt-hinzufuegen' }
                ]
              },
              {
                text: 'The Bus',
                link: '/gameserver/the-bus',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/the-bus/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/the-bus/backup-erstellen' },
                  { text: 'Bus spawnen', link: '/gameserver/the-bus/bus-spawnen' },
                  { text: 'Chat-Nachrichten senden', link: '/gameserver/the-bus/chat-nachrichten-senden' },
                  { text: 'DLC aktivieren', link: '/gameserver/the-bus/dlc-aktivieren' },
                  { text: 'Fahrplan ändern', link: '/gameserver/the-bus/fahrplan-aendern' },
                  { text: 'Flotte ändern', link: '/gameserver/the-bus/flotte-aendern' },
                  { text: 'KI-Busse aktivieren', link: '/gameserver/the-bus/ki-busse-aktivieren' },
                  { text: 'Map ändern', link: '/gameserver/the-bus/map-aendern' },
                  { text: 'Mods hinzufügen', link: '/gameserver/the-bus/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/the-bus/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/the-bus/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/the-bus/server-beitreten' },
                  { text: 'Server konfigurieren', link: '/gameserver/the-bus/server-konfigurieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-bus/spieler-kicken-bannen' },
                  { text: 'Tageszeit ändern', link: '/gameserver/the-bus/tageszeit-aendern' },
                  { text: 'Teleportieren', link: '/gameserver/the-bus/teleportieren' },
                  { text: 'Ticketchance ändern', link: '/gameserver/the-bus/ticketchance-aendern' },
                  { text: 'Verkehr einstellen', link: '/gameserver/the-bus/verkehr-einstellen' },
                  { text: 'Wetter ändern', link: '/gameserver/the-bus/wetter-aendern' }
                ]
              },
              {
                text: 'The Cenozoic Era',
                link: '/gameserver/the-cenozoic-era',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/the-cenozoic-era/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/the-cenozoic-era/backup-erstellen' },
                  { text: 'Server beitreten', link: '/gameserver/the-cenozoic-era/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-cenozoic-era/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'The Forest',
                link: '/gameserver/the-forest',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/the-forest/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/the-forest/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/the-forest/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/the-forest/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/the-forest/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-forest/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'The Front',
                link: '/gameserver/the-front',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/the-front/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/the-front/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/the-front/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/the-front/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/the-front/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-front/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'The Lord of the Rings Return to Moria',
                link: '/gameserver/the-lord-of-the-rings-return-to-moria',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/the-lord-of-the-rings-return-to-moria/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/the-lord-of-the-rings-return-to-moria/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/the-lord-of-the-rings-return-to-moria/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/the-lord-of-the-rings-return-to-moria/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/the-lord-of-the-rings-return-to-moria/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Unturned',
                link: '/gameserver/unturned',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/unturned/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/unturned/backup-erstellen' },
                  { text: 'Mods hinzufügen', link: '/gameserver/unturned/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/unturned/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/unturned/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/unturned/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/unturned/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'V Rising',
                link: '/gameserver/v-rising',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/v-rising/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/v-rising/backup-erstellen' },
                  { text: 'BepInEx installieren', link: '/gameserver/v-rising/bepinex-installieren' },
                  { text: 'EOS NotReady Fehler beheben', link: '/gameserver/v-rising/eos-notready-fehler-beheben' },
                  { text: 'Mods hinzufügen', link: '/gameserver/v-rising/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/v-rising/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/v-rising/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/v-rising/server-beitreten' },
                  { text: 'Server Beschreibung ändern', link: '/gameserver/v-rising/server-beschreibung-aendern' },
                  { text: 'Server Name ändern', link: '/gameserver/v-rising/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/v-rising/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/v-rising/serverliste-aktivieren' },
                  { text: 'Speicher-Intervall ändern', link: '/gameserver/v-rising/speicher-intervall-aendern' },
                  { text: 'Spieleinstellungen ändern', link: '/gameserver/v-rising/spieleinstellungen-aendern' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/v-rising/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'Valheim',
                link: '/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/valheim/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/valheim/backup-erstellen' },
                  { text: 'BepInEx installieren', link: '/gameserver/valheim/bepinex-installieren' },
                  { text: 'Branch wechseln', link: '/gameserver/valheim/branch-wechseln' },
                  { text: 'Mods hinzufügen', link: '/gameserver/valheim/mods-hinzufuegen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/valheim/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/valheim/savegame-hinzufuegen' },
                  { text: 'Backup Einstellungen ändern', link: '/gameserver/valheim/backup-einstellungen-aendern' },
                  { text: 'Crossplay aktivieren', link: '/gameserver/valheim/crossplay-aktivieren' },
                  { text: 'Server beitreten', link: '/gameserver/valheim/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/valheim/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/valheim/server-passwort-setzen' },
                  { text: 'Serverliste aktivieren', link: '/gameserver/valheim/serverliste-aktivieren' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/valheim/spieler-kicken-bannen' }
                ]
              },
              {
                text: 'VEIN',
                link: '/gameserver/vein',
                collapsed: true,
                items: [
                  { text: 'Admin hinzufügen', link: '/gameserver/vein/admin-hinzufuegen' },
                  { text: 'Backup erstellen', link: '/gameserver/vein/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/vein/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/vein/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/vein/server-beitreten' },
                  { text: 'Spieler kicken & bannen', link: '/gameserver/vein/spieler-kicken-bannen' },
                  { text: 'Whitelist aktivieren', link: '/gameserver/vein/whitelist-aktivieren' }
                ]
              },
              {
                text: 'Voyagers of Nera',
                link: '/gameserver/voyagers-of-nera',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/voyagers-of-nera/backup-erstellen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/voyagers-of-nera/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/voyagers-of-nera/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/voyagers-of-nera/server-beitreten' }
                ]
              },
              {
                text: 'Windrose',
                link: '/gameserver/windrose',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/windrose/backup-erstellen' },
                  { text: 'Direktverbindung aktivieren', link: '/gameserver/windrose/direktverbindung-aktivieren' },
                  { text: 'Invite Code setzen', link: '/gameserver/windrose/invite-code-setzen' },
                  { text: 'Island ID setzen', link: '/gameserver/windrose/island-id-setzen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/windrose/max-spieler-aendern' },
                  { text: 'Notiz setzen', link: '/gameserver/windrose/notiz-setzen' },
                  { text: 'Savegame herunterladen', link: '/gameserver/windrose/savegame-herunterladen' },
                  { text: 'Savegame hinzufügen', link: '/gameserver/windrose/savegame-hinzufuegen' },
                  { text: 'Server beitreten', link: '/gameserver/windrose/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/windrose/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/windrose/server-passwort-setzen' },
                  { text: 'Systemanforderungen', link: '/gameserver/windrose/systemanforderungen' },
                  { text: 'Welt-Einstellungen ändern', link: '/gameserver/windrose/welt-einstellungen-aendern' }
                ]
              },
              {
                text: 'Wreckfest',
                link: '/gameserver/wreckfest',
                collapsed: true,
                items: [
                  { text: 'Backup erstellen', link: '/gameserver/wreckfest/backup-erstellen' },
                  { text: 'Max Spieler ändern', link: '/gameserver/wreckfest/max-spieler-aendern' },
                  { text: 'Server beitreten', link: '/gameserver/wreckfest/server-beitreten' },
                  { text: 'Server Name ändern', link: '/gameserver/wreckfest/server-name-aendern' },
                  { text: 'Server Passwort setzen', link: '/gameserver/wreckfest/server-passwort-setzen' },
                  { text: 'Willkommensnachricht ändern', link: '/gameserver/wreckfest/willkommensnachricht-aendern' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Dienste & Tools',
                collapsed: true,
                items: [
                  { text: 'Certbot installieren', link: '/rootserver/dienste-tools/certbot-installieren' },
                  { text: 'Docker installieren', link: '/rootserver/dienste-tools/docker-installieren' },
                  { text: 'Minecraft Server installieren', link: '/rootserver/dienste-tools/minecraft-server-installieren' },
                  { text: 'Screen nutzen', link: '/rootserver/dienste-tools/screen-nutzen' },
                  { text: 'phpMyAdmin, Apache2 und MySQL installieren', link: '/rootserver/dienste-tools/phpmyadmin-apache2-und-mysql' },
                  { text: 'TeamSpeak 3 Server installieren', link: '/rootserver/dienste-tools/teamspeak-3-server-installieren' },
                  { text: 'Webserver installieren', link: '/rootserver/dienste-tools/webserver-installieren' }
                ]
              },
              {
                text: 'Grundkonfiguration',
                collapsed: true,
                items: [
                  { text: 'Fail2Ban installieren', link: '/rootserver/grundkonfiguration/fail2ban-installieren' },
                  { text: 'Root-Passwort ändern', link: '/rootserver/grundkonfiguration/root-passwort-aendern' },
                  { text: 'SSH-Zugang absichern', link: '/rootserver/grundkonfiguration/ssh-zugang-absichern' },
                  { text: 'UFW installieren', link: '/rootserver/grundkonfiguration/ufw-installieren' }
                ]
              },
              {
                text: 'Linux',
                collapsed: true,
                items: [
                  { text: 'Mit einem Linux Server verbinden', link: '/rootserver/linux/mit-linux-server-verbinden' }
                ]
              },
              {
                text: 'Tipps & Fehlerbehebung',
                collapsed: true,
                items: [
                  { text: 'Cronjobs erstellen', link: '/rootserver/tipps_fehlerbehebung/cronjobs-erstellen' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Mit einem Windows Server verbinden', link: '/rootserver/windows/mit-windows-server-verbinden' },
                  { text: 'Windows Festplatte erweitern', link: '/rootserver/windows/windows-hard-drive-expand' },
                  { text: 'Windows Firewall freischalten', link: '/rootserver/windows/windows-firewall-freischalten' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'TeamSpeak 6 Server Verfügbarkeit', link: '/teamspeak/teamspeak-6-server-verfuegbarkeit' },
              { text: 'ServerQuery Login', link: '/teamspeak/serverquery-login' }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Einträge',
                link: '/domains/dns-eintraege',
                collapsed: true,
                items: [
                  { text: 'FiveM Server', link: '/domains/dns-eintraege/fivem-server' },
                  { text: 'Minecraft Server', link: '/domains/dns-eintraege/minecraft-server' },
                  { text: 'TeamSpeak Server', link: '/domains/dns-eintraege/teamspeak-server' }
                ]
              },
              { text: 'NIS2 – Inhaberverifizierung', link: '/domains/nis2-inhaberverifizierung' }
            ]
          },
          {
            text: 'Allgemein',
            items: [
              { text: 'Netzwerk-Trace erstellen', link: '/allgemein/netzwerk-trace-erstellen' },
              { text: 'PCAP-Datei erstellen', link: '/allgemein/pcap-datei-erstellen' }
            ]
          }
        ],
        outline: {
          label: 'Auf dieser Seite'
        },
        docFooter: {
          prev: 'Vorherige Seite',
          next: 'Nächste Seite'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://twitter.com/EmeraldHostDE' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhost.de/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhost' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhost.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Seite nicht gefunden',
          quote: 'Die von Dir aufgerufene Seite existiert nicht oder wurde entfernt.',
          linkLabel: 'Zurück zur Startseite',
          linkText: 'Zur Startseite',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Diese Seite auf GitHub bearbeiten'
        },
        lastUpdated: {
          text: 'Zuletzt aktualisiert'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Documentation",
      description: "EmeraldHost's central knowledge base! Here, we aim to introduce you to our products and show you how to make the most of them.",
      themeConfig: {
        nav: [
          { text: 'Website', link: 'https://emeraldhost.de/en' },
          { text: 'Support', link: 'https://emeraldhost.de/en/support' },
          { text: 'Imprint', link: 'https://emeraldhost.de/en/imprint' }
        ],
        sidebar: [
          { text: 'Welcome!', link: '/en/' },
          { text: 'Secure your New Customer Discount! 🎉', link: '/en/secure-new-customer-discount' },
          {
            text: 'Gameserver',
            items: [
              {
                text: 'General',
                collapsed: false,
                items: [
                  { text: 'Establish SFTP Connection', link: '/en/gameserver/establish-sftp-connection' },
                  { text: 'Create Database', link: '/en/gameserver/create-database' },
                  { text: 'Create Backup', link: '/en/gameserver/create-backup' },
                  { text: 'Epic Games ID Find Out', link: '/en/gameserver/epicgamesid-find-out' },
                  { text: 'SteamID64 Find Out', link: '/en/gameserver/steamid64-find-out' }
                ]
              },
              {
                text: '7 Days to Die',
                link: '/en/gameserver/7-days-to-die',
                collapsed: true,
                items: [
                  { text: 'Activate Crossplay', link: '/en/gameserver/7-days-to-die/activate-crossplay' },
                  { text: 'Add Admin', link: '/en/gameserver/7-days-to-die/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/7-days-to-die/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/7-days-to-die/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/7-days-to-die/change-map' },
                  { text: 'Create Backup', link: '/en/gameserver/7-days-to-die/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/7-days-to-die/download-savegame' },
                  { text: 'Enable Cheat Mode', link: '/en/gameserver/7-days-to-die/enable-cheat-mode' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/7-days-to-die/enable-whitelist' },
                  { text: 'Join Server', link: '/en/gameserver/7-days-to-die/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/7-days-to-die/kick-ban-players' }
                ]
              },
              {
                text: 'Abiotic Factor',
                link: '/en/gameserver/abiotic-factor',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/abiotic-factor/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/abiotic-factor/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/abiotic-factor/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/abiotic-factor/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/abiotic-factor/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/abiotic-factor/kick-ban-players' }
                ]
              },
              {
                text: 'Aloft',
                link: '/en/gameserver/aloft',
                collapsed: true,
                items: [
                  { text: 'Activate Private Islands', link: '/en/gameserver/aloft/activate-private-islands' },
                  { text: 'Add Admin', link: '/en/gameserver/aloft/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/aloft/add-savegame' },
                  { text: 'Change Number of Islands', link: '/en/gameserver/aloft/change-number-of-islands' },
                  { text: 'Change Server Name', link: '/en/gameserver/aloft/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/aloft/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/aloft/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/aloft/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/aloft/kick-ban-players' },
                  { text: 'Open Ingame Console', link: '/en/gameserver/aloft/open-ingame-console' }
                ]
              },
              {
                text: 'American Truck Simulator',
                link: '/en/gameserver/american-truck-simulator',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/american-truck-simulator/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/american-truck-simulator/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/american-truck-simulator/create-backup' },
                  { text: 'Deactivate Player Damage', link: '/en/gameserver/american-truck-simulator/deactivate-player-damage' },
                  { text: 'Join Server', link: '/en/gameserver/american-truck-simulator/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/american-truck-simulator/kick-ban-players' }
                ]
              },
              {
                text: 'ARK Survival Evolved',
                link: '/en/gameserver/ark-survival-evolved',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/ark-survival-evolved/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/ark-survival-evolved/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/ark-survival-evolved/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/ark-survival-evolved/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/ark-survival-evolved/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/ark-survival-evolved/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/ark-survival-evolved/kick-ban-players' }
                ]
              },
              {
                text: 'Arma 3',
                link: '/en/gameserver/arma-3',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/arma-3/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/arma-3/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/arma-3/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/arma-3/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/arma-3/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/arma-3/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/arma-3/kick-ban-players' }
                ]
              },
              {
                text: 'Arma Reforger',
                link: '/en/gameserver/arma-reforger',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/arma-reforger/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/arma-reforger/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/arma-reforger/add-savegame' },
                  { text: 'Become Admin', link: '/en/gameserver/arma-reforger/become-admin' },
                  { text: 'Download Savegame', link: '/en/gameserver/arma-reforger/download-savegame' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/arma-reforger/kick-ban-players' },
                  { text: 'Change Scenario', link: '/en/gameserver/arma-reforger/change-scenario' },
                  { text: 'Create Backup', link: '/en/gameserver/arma-reforger/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/arma-reforger/join-server' }
                ]
              },
              {
                text: 'Astroneer',
                link: '/en/gameserver/astroneer',
                collapsed: true,
                items: [
                  { text: 'Change Max Players', link: '/en/gameserver/astroneer/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/astroneer/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/astroneer/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/astroneer/join-server' },
                  { text: 'Set Server Owner', link: '/en/gameserver/astroneer/set-server-owner' },
                  { text: 'Set Server Password', link: '/en/gameserver/astroneer/set-server-password' }
                ]
              },
              {
                text: 'Avorion',
                link: '/en/gameserver/avorion',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/avorion/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/avorion/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/avorion/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/avorion/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/avorion/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/avorion/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/avorion/kick-ban-players' }
                ]
              },
              {
                text: 'Barotrauma',
                link: '/en/gameserver/barotrauma',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/barotrauma/add-admin' },
                  { text: 'Add Bots', link: '/en/gameserver/barotrauma/add-bots' },
                  { text: 'Add Custom Ranks', link: '/en/gameserver/barotrauma/add-custom-ranks' },
                  { text: 'Add Mods', link: '/en/gameserver/barotrauma/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/barotrauma/add-savegame' },
                  { text: 'Change Game Mode', link: '/en/gameserver/barotrauma/change-game-mode' },
                  { text: 'Change Max Players', link: '/en/gameserver/barotrauma/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/barotrauma/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/barotrauma/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/barotrauma/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/barotrauma/download-savegame' },
                  { text: 'Enable Server List', link: '/en/gameserver/barotrauma/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/barotrauma/join-server' },
                  { text: 'Enable Karma', link: '/en/gameserver/barotrauma/enable-karma' },
                  { text: 'Enable Traitors', link: '/en/gameserver/barotrauma/enable-traitors' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/barotrauma/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/barotrauma/set-server-password' }
                ]
              },
              {
                text: 'BATTALION Legacy',
                link: '/en/gameserver/battalion-legacy',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/battalion-legacy/add-admin' },
                  { text: 'Create Backup', link: '/en/gameserver/battalion-legacy/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/battalion-legacy/join-server' }
                ]
              },
              {
                text: 'BeamMP',
                link: '/en/gameserver/beammp',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/beammp/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/beammp/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/beammp/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/beammp/change-map' },
                  { text: 'Change Max Cars', link: '/en/gameserver/beammp/change-max-cars' },
                  { text: 'Change Max Players', link: '/en/gameserver/beammp/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/beammp/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/beammp/change-server-name' },
                  { text: 'Change Server Version', link: '/en/gameserver/beammp/change-server-version' },
                  { text: 'Create Backup', link: '/en/gameserver/beammp/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/beammp/download-savegame' },
                  { text: 'Enable Chat Logging', link: '/en/gameserver/beammp/enable-chat-logging' },
                  { text: 'Enable Private Mode', link: '/en/gameserver/beammp/enable-private-mode' },
                  { text: 'Join Server', link: '/en/gameserver/beammp/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/beammp/kick-ban-players' },
                  { text: 'Set Auth Key', link: '/en/gameserver/beammp/set-auth-key' }
                ]
              },
              {
                text: 'Black Mesa',
                link: '/en/gameserver/black-mesa',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/black-mesa/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/black-mesa/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/black-mesa/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/black-mesa/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/black-mesa/kick-ban-players' }
                ]
              },
              {
                text: 'Citadel Forged with Fire',
                link: '/en/gameserver/citadel-forged-with-fire',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/citadel-forged-with-fire/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/citadel-forged-with-fire/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/citadel-forged-with-fire/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/citadel-forged-with-fire/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/citadel-forged-with-fire/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/citadel-forged-with-fire/kick-ban-players' }
                ]
              },
              {
                text: 'Colony Survival',
                link: '/en/gameserver/colony-survival',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/colony-survival/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/colony-survival/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/colony-survival/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/colony-survival/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/colony-survival/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/colony-survival/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/colony-survival/kick-ban-players' }
                ]
              },
              {
                text: 'Conan Exiles',
                link: '/en/gameserver/conan-exiles',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/conan-exiles/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/conan-exiles/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/conan-exiles/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/conan-exiles/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/conan-exiles/change-max-players' },
                  { text: 'Change Server Community', link: '/en/gameserver/conan-exiles/change-server-community' },
                  { text: 'Change Server Name', link: '/en/gameserver/conan-exiles/change-server-name' },
                  { text: 'Change Server Region', link: '/en/gameserver/conan-exiles/change-server-region' },
                  { text: 'Create Backup', link: '/en/gameserver/conan-exiles/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/conan-exiles/download-savegame' },
                  { text: 'Enable BattlEye', link: '/en/gameserver/conan-exiles/enable-battleye' },
                  { text: 'Enable PvP', link: '/en/gameserver/conan-exiles/enable-pvp' },
                  { text: 'Enable VAC', link: '/en/gameserver/conan-exiles/enable-vac' },
                  { text: 'Join Server', link: '/en/gameserver/conan-exiles/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/conan-exiles/kick-ban-players' }
                ]
              },
              {
                text: 'Counter-Strike 2',
                link: '/en/gameserver/counter-strike-2',
                collapsed: true,
                items: [
                  { text: 'Add Mods', link: '/en/gameserver/counter-strike-2/add-mods' },
                  { text: 'Add Workshop Maps', link: '/en/gameserver/counter-strike-2/add-workshop-maps' },
                  { text: 'Change Game Mode', link: '/en/gameserver/counter-strike-2/change-game-mode' },
                  { text: 'Change Map', link: '/en/gameserver/counter-strike-2/change-map' },
                  { text: 'Configure Server', link: '/en/gameserver/counter-strike-2/configure-server' },
                  { text: 'Create Backup', link: '/en/gameserver/counter-strike-2/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/counter-strike-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/counter-strike-2/kick-ban-players' }
                ]
              },
              {
                text: 'Core Keeper',
                link: '/en/gameserver/core-keeper',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/core-keeper/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/core-keeper/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/core-keeper/add-savegame' },
                  { text: 'Ban Players', link: '/en/gameserver/core-keeper/ban-players' },
                  { text: 'Change Content Bundle', link: '/en/gameserver/core-keeper/change-content-bundle' },
                  { text: 'Change Game ID', link: '/en/gameserver/core-keeper/change-game-id' },
                  { text: 'Change Server Name', link: '/en/gameserver/core-keeper/change-server-name' },
                  { text: 'Change World Index', link: '/en/gameserver/core-keeper/change-world-index' },
                  { text: 'Change World Mode', link: '/en/gameserver/core-keeper/change-world-mode' },
                  { text: 'Change World Seed', link: '/en/gameserver/core-keeper/change-world-seed' },
                  { text: 'Create Backup', link: '/en/gameserver/core-keeper/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/core-keeper/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/core-keeper/join-server' },
                  { text: 'Enable Seasonal Events', link: '/en/gameserver/core-keeper/enable-seasonal-events' },
                  { text: 'Set Server Password', link: '/en/gameserver/core-keeper/set-server-password' }
                ]
              },
              {
                text: 'Counter-Strike Global Offensive',
                link: '/en/gameserver/counter-strike-global-offensive',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/counter-strike-global-offensive/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/counter-strike-global-offensive/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/counter-strike-global-offensive/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/counter-strike-global-offensive/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/counter-strike-global-offensive/kick-ban-players' }
                ]
              },
              {
                text: 'Counter-Strike Source',
                link: '/en/gameserver/counter-strike-source',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/counter-strike-source/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/counter-strike-source/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/counter-strike-source/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/counter-strike-source/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/counter-strike-source/kick-ban-players' }
                ]
              },
              {
                text: 'Craftopia',
                link: '/en/gameserver/craftopia',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/craftopia/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/craftopia/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/craftopia/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/craftopia/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/craftopia/kick-ban-players' }
                ]
              },
              {
                text: 'CryoFall',
                link: '/en/gameserver/cryofall',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/cryofall/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/cryofall/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/cryofall/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/cryofall/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/cryofall/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/cryofall/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/cryofall/kick-ban-players' }
                ]
              },
              {
                text: 'DayZ',
                link: '/en/gameserver/dayz',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/dayz/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/dayz/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/dayz/add-savegame' },
                  { text: 'Adjust Loot', link: '/en/gameserver/dayz/adjust-loot' },
                  { text: 'Change Map', link: '/en/gameserver/dayz/change-map' },
                  { text: 'Change Time', link: '/en/gameserver/dayz/change-time' },
                  { text: 'Configure PvP', link: '/en/gameserver/dayz/configure-pvp' },
                  { text: 'Create Backup', link: '/en/gameserver/dayz/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/dayz/download-savegame' },
                  { text: 'Enable Crosshair', link: '/en/gameserver/dayz/enable-crosshair' },
                  { text: 'Enable Third Person', link: '/en/gameserver/dayz/enable-third-person' },
                  { text: 'Enable VoN', link: '/en/gameserver/dayz/enable-von' },
                  { text: 'Join Server', link: '/en/gameserver/dayz/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/dayz/kick-ban-players' }
                ]
              },
              {
                text: 'Don’t Starve Together',
                link: '/en/gameserver/dont-starve-together',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/dont-starve-together/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/dont-starve-together/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/dont-starve-together/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/dont-starve-together/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/dont-starve-together/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/dont-starve-together/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/dont-starve-together/kick-ban-players' }
                ]
              },
              {
                text: 'Echoes of Elysium',
                link: '/en/gameserver/echoes-of-elysium',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/echoes-of-elysium/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/echoes-of-elysium/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/echoes-of-elysium/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/echoes-of-elysium/join-server' }
                ]
              },
              {
                text: 'Eco',
                link: '/en/gameserver/eco',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/eco/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/eco/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/eco/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/eco/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/eco/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/eco/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/eco/kick-ban-players' }
                ]
              },
              {
                text: 'Enshrouded',
                link: '/en/gameserver/enshrouded',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/enshrouded/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/enshrouded/add-savegame' },
                  { text: 'Adjust Difficulty', link: '/en/gameserver/enshrouded/adjust-difficulty' },
                  { text: 'Change Server Password', link: '/en/gameserver/enshrouded/change-server-password' },
                  { text: 'Create Backup', link: '/en/gameserver/enshrouded/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/enshrouded/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/enshrouded/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/enshrouded/kick-ban-players' },
                  { text: 'Performance Problems on Enshrouded Servers', link: '/en/gameserver/enshrouded/performance-problems-on-enshrouded-servers' }
                ]
              },
              {
                text: 'Empyrion: Galactic Survival',
                link: '/en/gameserver/empyrion-galactic-survival',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/empyrion-galactic-survival/add-admin' },
                  { text: 'Change Gamemode', link: '/en/gameserver/empyrion-galactic-survival/change-gamemode' },
                  { text: 'Change Max Players', link: '/en/gameserver/empyrion-galactic-survival/change-max-players' },
                  { text: 'Change Savegame Name', link: '/en/gameserver/empyrion-galactic-survival/change-savegame-name' },
                  { text: 'Change Seed', link: '/en/gameserver/empyrion-galactic-survival/change-seed' },
                  { text: 'Change Server Description', link: '/en/gameserver/empyrion-galactic-survival/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/empyrion-galactic-survival/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/empyrion-galactic-survival/create-backup' },
                  { text: 'Enable Server List', link: '/en/gameserver/empyrion-galactic-survival/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/empyrion-galactic-survival/join-server' },
                  { text: 'Set Server Password', link: '/en/gameserver/empyrion-galactic-survival/set-server-password' }
                ]
              },
              {
                text: 'Euro Truck Simulator 2',
                link: '/en/gameserver/euro-truck-simulator-2',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/euro-truck-simulator-2/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/euro-truck-simulator-2/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/euro-truck-simulator-2/create-backup' },
                  { text: 'Deactivate Player Damage', link: '/en/gameserver/euro-truck-simulator-2/deactivate-player-damage' },
                  { text: 'Join Server', link: '/en/gameserver/euro-truck-simulator-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/euro-truck-simulator-2/kick-ban-players' }
                ]
              },
              {
                text: 'Factorio',
                link: '/en/gameserver/factorio',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/factorio/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/factorio/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/factorio/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/factorio/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/factorio/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/factorio/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/factorio/kick-ban-players' }
                ]
              },
              {
                text: 'Fistful of Frags',
                link: '/en/gameserver/fistful-of-frags',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/fistful-of-frags/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/fistful-of-frags/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/fistful-of-frags/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/fistful-of-frags/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/fistful-of-frags/kick-ban-players' }
                ]
              },
              {
                text: 'FiveM',
                link: '/en/gameserver/fivem',
                collapsed: true,
                items: [
                  { text: 'Create Backup', link: '/en/gameserver/fivem/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/fivem/join-server' },
                  { text: 'Set License Key', link: '/en/gameserver/fivem/set-license-key' },
                  { text: 'Set Port', link: '/en/gameserver/fivem/set-port' }
                ]
              },
              {
                text: 'FOUNDRY',
                link: '/en/gameserver/foundry',
                collapsed: true,
                items: [
                  { text: 'Change Autosave', link: '/en/gameserver/foundry/change-autosave' },
                  { text: 'Change Max Players', link: '/en/gameserver/foundry/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/foundry/change-server-name' },
                  { text: 'Change World Name', link: '/en/gameserver/foundry/change-world-name' },
                  { text: 'Change World Seed', link: '/en/gameserver/foundry/change-world-seed' },
                  { text: 'Create Backup', link: '/en/gameserver/foundry/create-backup' },
                  { text: 'Enable Server List', link: '/en/gameserver/foundry/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/foundry/join-server' },
                  { text: 'Pause Server When Empty', link: '/en/gameserver/foundry/pause-server-when-empty' },
                  { text: 'Set Server Password', link: '/en/gameserver/foundry/set-server-password' }
                ]
              },
              {
                text: 'Frozen Flame',
                link: '/en/gameserver/frozen-flame',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/frozen-flame/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/frozen-flame/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/frozen-flame/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/frozen-flame/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/frozen-flame/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/frozen-flame/kick-ban-players' }
                ]
              },
              {
                text: 'Garry\'s Mod',
                link: '/en/gameserver/garrys-mod',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/garrys-mod/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/garrys-mod/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/garrys-mod/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/garrys-mod/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/garrys-mod/kick-ban-players' }
                ]
              },
              {
                text: 'Ground Branch',
                link: '/en/gameserver/ground-branch',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/ground-branch/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/ground-branch/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/ground-branch/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/ground-branch/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/ground-branch/kick-ban-players' }
                ]
              },
              {
                text: 'GTA San Andreas',
                link: '/en/gameserver/gta-san-andreas',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/gta-san-andreas/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/gta-san-andreas/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/gta-san-andreas/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/gta-san-andreas/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/gta-san-andreas/kick-ban-players' }
                ]
              },
              {
                text: 'HumanitZ',
                link: '/en/gameserver/humanitz',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/humanitz/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/humanitz/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/humanitz/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/humanitz/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/humanitz/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/humanitz/kick-ban-players' }
                ]
              },
              {
                text: 'Hytale',
                link: '/en/gameserver/hytale',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/hytale/add-admin' },
                  { text: 'Change Gamemode', link: '/en/gameserver/hytale/change-gamemode' },
                  { text: 'Change Max Players', link: '/en/gameserver/hytale/change-max-players' },
                  { text: 'Change Max View Radius', link: '/en/gameserver/hytale/change-max-view-radius' },
                  { text: 'Change MOTD', link: '/en/gameserver/hytale/change-motd' },
                  { text: 'Change Server Name', link: '/en/gameserver/hytale/change-server-name' },
                  { text: 'Change Time', link: '/en/gameserver/hytale/change-time' },
                  { text: 'Change Weather', link: '/en/gameserver/hytale/change-weather' },
                  { text: 'Create Backup', link: '/en/gameserver/hytale/create-backup' },
                  { text: 'Create New World', link: '/en/gameserver/hytale/create-new-world' },
                  { text: 'Disable NPCs', link: '/en/gameserver/hytale/disable-npcs' },
                  { text: 'Download World', link: '/en/gameserver/hytale/download-world' },
                  { text: 'Enable Fall Damage', link: '/en/gameserver/hytale/enable-fall-damage' },
                  { text: 'Enable PvP', link: '/en/gameserver/hytale/enable-pvp' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/hytale/enable-whitelist' },
                  { text: 'Improve Performance', link: '/en/gameserver/hytale/improve-performance' },
                  { text: 'Add Mods', link: '/en/gameserver/hytale/add-mods' },
                  { text: 'Item Loss on Death', link: '/en/gameserver/hytale/item-loss-on-death' },
                  { text: 'Join Server', link: '/en/gameserver/hytale/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/hytale/kick-ban-players' },
                  { text: 'Pause Game Time', link: '/en/gameserver/hytale/pause-game-time' },
                  { text: 'Set Password', link: '/en/gameserver/hytale/set-password' },
                  { text: 'Set Spawn Point', link: '/en/gameserver/hytale/set-spawn-point' },
                  { text: 'Upload World', link: '/en/gameserver/hytale/upload-world' },
                  { text: 'Change World Seed', link: '/en/gameserver/hytale/change-world-seed' }
                ]
              },
              {
                text: 'Icarus',
                link: '/en/gameserver/icarus',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/icarus/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/icarus/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/icarus/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/icarus/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/icarus/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/icarus/join-server' },
                  { text: 'Set Admin Password', link: '/en/gameserver/icarus/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/icarus/set-server-password' }
                ]
              },
              {
                text: 'Insurgency: Sandstorm',
                link: '/en/gameserver/insurgency-sandstorm',
                collapsed: true,
                items: [
                  { text: 'Add Admins', link: '/en/gameserver/insurgency-sandstorm/add-admins' },
                  { text: 'Add Bots', link: '/en/gameserver/insurgency-sandstorm/add-bots' },
                  { text: 'Add Mods', link: '/en/gameserver/insurgency-sandstorm/add-mods' },
                  { text: 'Add Mutators', link: '/en/gameserver/insurgency-sandstorm/add-mutators' },
                  { text: 'Additional Parameters', link: '/en/gameserver/insurgency-sandstorm/additional-parameters' },
                  { text: 'Change Gamemode Settings', link: '/en/gameserver/insurgency-sandstorm/change-gamemode-settings' },
                  { text: 'Change Map', link: '/en/gameserver/insurgency-sandstorm/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/insurgency-sandstorm/change-max-players' },
                  { text: 'Change Scenario', link: '/en/gameserver/insurgency-sandstorm/change-scenario' },
                  { text: 'Change Server Name', link: '/en/gameserver/insurgency-sandstorm/change-server-name' },
                  { text: 'Configure Kill Feed', link: '/en/gameserver/insurgency-sandstorm/configure-kill-feed' },
                  { text: 'Configure Player Voting', link: '/en/gameserver/insurgency-sandstorm/configure-player-voting' },
                  { text: 'Create Backup', link: '/en/gameserver/insurgency-sandstorm/create-backup' },
                  { text: 'Enable Cheats', link: '/en/gameserver/insurgency-sandstorm/enable-cheats' },
                  { text: 'Join Server', link: '/en/gameserver/insurgency-sandstorm/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/insurgency-sandstorm/kick-ban-players' },
                  { text: 'Set Game Stats Token', link: '/en/gameserver/insurgency-sandstorm/set-game-stats-token' },
                  { text: 'Set GSL Token', link: '/en/gameserver/insurgency-sandstorm/set-gsl-token' },
                  { text: 'Set Map Cycle', link: '/en/gameserver/insurgency-sandstorm/set-map-cycle' },
                  { text: 'Set Server Password', link: '/en/gameserver/insurgency-sandstorm/set-server-password' },
                  { text: 'Set Up Co-Op Server', link: '/en/gameserver/insurgency-sandstorm/setup-coop-server' },
                  { text: 'Team Kill Settings', link: '/en/gameserver/insurgency-sandstorm/team-kill-settings' },
                  { text: 'Use RCON', link: '/en/gameserver/insurgency-sandstorm/use-rcon' }
                ]
              },
              {
                text: 'IOSoccer',
                link: '/en/gameserver/iosoccer',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/iosoccer/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/iosoccer/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/iosoccer/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/iosoccer/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/iosoccer/kick-ban-players' }
                ]
              },
              {
                text: 'Kerbal Space Program',
                link: '/en/gameserver/kerbal-space-program',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/kerbal-space-program/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/kerbal-space-program/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/kerbal-space-program/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/kerbal-space-program/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/kerbal-space-program/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/kerbal-space-program/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/kerbal-space-program/kick-ban-players' }
                ]
              },
              {
                text: 'Left 4 Dead',
                link: '/en/gameserver/left-4-dead',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/left-4-dead/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/left-4-dead/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/left-4-dead/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/left-4-dead/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/left-4-dead/kick-ban-players' }
                ]
              },
              {
                text: 'Left 4 Dead 2',
                link: '/en/gameserver/left-4-dead-2',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/left-4-dead-2/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/left-4-dead-2/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/left-4-dead-2/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/left-4-dead-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/left-4-dead-2/kick-ban-players' }
                ]
              },
              {
                text: 'Longvinter',
                link: '/en/gameserver/longvinter',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/longvinter/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/longvinter/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/longvinter/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/longvinter/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/longvinter/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/longvinter/kick-ban-players' }
                ]
              },
              {
                text: 'Midnight Ghost Hunt',
                link: '/en/gameserver/midnight-ghost-hunt',
                collapsed: true,
                items: [
                  { text: 'Create Backup', link: '/en/gameserver/midnight-ghost-hunt/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/midnight-ghost-hunt/join-server' }
                ]
              },
              {
                text: 'Mindustry',
                link: '/en/gameserver/mindustry',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/mindustry/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/mindustry/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/mindustry/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/mindustry/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/mindustry/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/mindustry/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/mindustry/kick-ban-players' }
                ]
              },
              {
                text: 'Minecraft Bedrock Edition',
                link: '/en/gameserver/minecraft-bedrock-edition',
                collapsed: true,
                items: [
                  { text: 'Add Behavior and Resource Packs', link: '/en/gameserver/minecraft-bedrock-edition/add-behavior-und-resource-packs' },
                  { text: 'Change Tick Distance', link: '/en/gameserver/minecraft-bedrock-edition/change-tick-distance' },
                  { text: 'Change View Distance', link: '/en/gameserver/minecraft-bedrock-edition/change-view-distance' },
                  { text: 'Change World Border', link: '/en/gameserver/minecraft-bedrock-edition/change-world-border' },
                  { text: 'Change World Seed', link: '/en/gameserver/minecraft-bedrock-edition/change-world-seed' },
                  { text: 'Create Backup', link: '/en/gameserver/minecraft-bedrock-edition/create-backup' },
                  { text: 'Delete World', link: '/en/gameserver/minecraft-bedrock-edition/delete-world' },
                  { text: 'Disable End', link: '/en/gameserver/minecraft-bedrock-edition/disable-end' },
                  { text: 'Disable Locator Bar', link: '/en/gameserver/minecraft-bedrock-edition/disable-locator-bar' },
                  { text: 'Disable Nether', link: '/en/gameserver/minecraft-bedrock-edition/disable-nether' },
                  { text: 'Download World', link: '/en/gameserver/minecraft-bedrock-edition/download-world' },
                  { text: 'Enable Allowlist', link: '/en/gameserver/minecraft-bedrock-edition/enable-allowlist' },
                  { text: 'Grant OP Rights', link: '/en/gameserver/minecraft-bedrock-edition/grant-op-rights' },
                  { text: 'Increase Slots', link: '/en/gameserver/minecraft-bedrock-edition/increase-slots' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-bedrock-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-bedrock-edition/kick-ban-players' },
                  { text: 'Upload World', link: '/en/gameserver/minecraft-bedrock-edition/upload-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp Command', link: '/en/gameserver/minecraft-bedrock-edition/commands/use-tp-command' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft Endstone Edition',
                link: '/en/gameserver/minecraft-endstone-edition',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/minecraft-endstone-edition/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/minecraft-endstone-edition/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/minecraft-endstone-edition/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/minecraft-endstone-edition/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/minecraft-endstone-edition/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-endstone-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-endstone-edition/kick-ban-players' }
                ]
              },
              {
                text: 'Minecraft Java Edition',
                link: '/en/gameserver/minecraft-java-edition',
                collapsed: true,
                items: [
                  { text: 'Accept Minecraft EULA', link: '/en/gameserver/minecraft-java-edition/accept-minecraft-eula' },
                  { text: 'Change Modpack', link: '/en/gameserver/minecraft-java-edition/change-modpack' },
                  { text: 'Change MOTD', link: '/en/gameserver/minecraft-java-edition/change-motd' },
                  { text: 'Change Server Icon', link: '/en/gameserver/minecraft-java-edition/change-server-icon' },
                  { text: 'Change Simulation Distance', link: '/en/gameserver/minecraft-java-edition/change-simulation-distance' },
                  { text: 'Change Spawn Protection', link: '/en/gameserver/minecraft-java-edition/change-spawn-protection' },
                  { text: 'Change Difficulty', link: '/en/gameserver/minecraft-java-edition/change-difficulty' },
                  { text: 'Change Version', link: '/en/gameserver/minecraft-java-edition/change-version' },
                  { text: 'Change View Distance', link: '/en/gameserver/minecraft-java-edition/change-view-distance' },
                  { text: 'Change World Border', link: '/en/gameserver/minecraft-java-edition/change-world-border' },
                  { text: 'Change World Seed', link: '/en/gameserver/minecraft-java-edition/change-world-seed' },
                  { text: 'Create Backup', link: '/en/gameserver/minecraft-java-edition/create-backup' },
                  { text: 'Delete World', link: '/en/gameserver/minecraft-java-edition/delete-world' },
                  { text: 'Disable End', link: '/en/gameserver/minecraft-java-edition/disable-end' },
                  { text: 'Disable Nether', link: '/en/gameserver/minecraft-java-edition/disable-nether' },
                  { text: 'Disable Locator Bar', link: '/en/gameserver/minecraft-java-edition/disable-locator-bar' },
                  { text: 'Download World', link: '/en/gameserver/minecraft-java-edition/download-world' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/minecraft-java-edition/enable-whitelist' },
                  { text: 'Grant OP Rights', link: '/en/gameserver/minecraft-java-edition/grant-op-rights' },
                  { text: 'Increase Slots', link: '/en/gameserver/minecraft-java-edition/increase-slots' },
                  { text: 'Install Mods', link: '/en/gameserver/minecraft-java-edition/install-mods' },
                  { text: 'Install Plugins', link: '/en/gameserver/minecraft-java-edition/install-plugins' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-java-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-java-edition/kick-ban-players' },
                  { text: 'Upload World', link: '/en/gameserver/minecraft-java-edition/upload-world' },
                  {
                    text: 'Commands',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Use Tp Command', link: '/en/gameserver/minecraft-java-edition/commands/use-tp-command' }
                    ]
                  },
                  {
                    text: 'Plugins',
                    link: '',
                    collapsed: true,
                    items: [
                      { text: 'Link Java with Bedrock', link: '/en/gameserver/minecraft-java-edition/plugins/link-java-with-bedrock' },
                      { text: 'Setup BlueMap', link: '/en/gameserver/minecraft-java-edition/plugins/setup-bluemap' },
                      { text: 'Setup Dynmap', link: '/en/gameserver/minecraft-java-edition/plugins/setup-dynmap' },
                      { text: 'Setup Plasmo Voice', link: '/en/gameserver/minecraft-java-edition/plugins/setup-plasmo-voice' },
                      { text: 'Setup Pl3xMap', link: '/en/gameserver/minecraft-java-edition/plugins/setup-pl3xmap' },
                      { text: 'Setup Simple Voice Chat', link: '/en/gameserver/minecraft-java-edition/plugins/setup-simple-voice-chat' },
                      { text: 'Setup squaremap', link: '/en/gameserver/minecraft-java-edition/plugins/setup-squaremap' }
                    ]
                  }
                ]
              },
              {
                text: 'Minecraft PocketMine Edition',
                link: '/en/gameserver/minecraft-pocketmine-edition',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/minecraft-pocketmine-edition/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/minecraft-pocketmine-edition/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/minecraft-pocketmine-edition/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/minecraft-pocketmine-edition/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/minecraft-pocketmine-edition/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/minecraft-pocketmine-edition/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/minecraft-pocketmine-edition/kick-ban-players' }
                ]
              },
              {
                text: 'Mordhau',
                link: '/en/gameserver/mordhau',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/mordhau/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/mordhau/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/mordhau/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/mordhau/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/mordhau/kick-ban-players' }
                ]
              },
              {
                text: 'Myth of Empires',
                link: '/en/gameserver/myth-of-empires',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/myth-of-empires/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/myth-of-empires/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/myth-of-empires/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/myth-of-empires/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/myth-of-empires/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/myth-of-empires/kick-ban-players' }
                ]
              },
              {
                text: 'Necesse',
                link: '/en/gameserver/necesse',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/necesse/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/necesse/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/necesse/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/necesse/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/necesse/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/necesse/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/necesse/kick-ban-players' }
                ]
              },
              {
                text: 'Nightingale',
                link: '/en/gameserver/nightingale',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/nightingale/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/nightingale/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/nightingale/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/nightingale/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/nightingale/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/nightingale/kick-ban-players' }
                ]
              },
              {
                text: 'No Love Lost',
                link: '/en/gameserver/no-love-lost',
                collapsed: true,
                items: [
                  { text: 'Create Backup', link: '/en/gameserver/no-love-lost/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/no-love-lost/join-server' }
                ]
              },
              {
                text: 'No More Room in Hell',
                link: '/en/gameserver/no-more-room-in-hell',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/no-more-room-in-hell/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/no-more-room-in-hell/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/no-more-room-in-hell/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/no-more-room-in-hell/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/no-more-room-in-hell/kick-ban-players' }
                ]
              },
              {
                text: 'No One Survived',
                link: '/en/gameserver/no-one-survived',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/no-one-survived/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/no-one-survived/add-savegame' },
                  { text: 'Change Game Settings', link: '/en/gameserver/no-one-survived/change-game-settings' },
                  { text: 'Change Map', link: '/en/gameserver/no-one-survived/change-map' },
                  { text: 'Create Backup', link: '/en/gameserver/no-one-survived/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/no-one-survived/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/no-one-survived/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/no-one-survived/kick-ban-players' }
                ]
              },
              {
                text: 'Operation Harsh Doorstop',
                link: '/en/gameserver/operation-harsh-doorstop',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/operation-harsh-doorstop/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/operation-harsh-doorstop/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/operation-harsh-doorstop/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/operation-harsh-doorstop/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/operation-harsh-doorstop/kick-ban-players' }
                ]
              },
              {
                text: 'Palworld',
                link: '/en/gameserver/palworld',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/palworld/add-admin' },
                  { text: 'Broadcast Message', link: '/en/gameserver/palworld/broadcast-message' },
                  { text: 'Adjust Hunger & Stamina', link: '/en/gameserver/palworld/adjust-hunger-stamina' },
                  { text: 'Change Day/Night Speed', link: '/en/gameserver/palworld/change-day-night-speed' },
                  { text: 'Change Drop Rate', link: '/en/gameserver/palworld/change-drop-rate' },
                  { text: 'Change Egg Hatching Time', link: '/en/gameserver/palworld/change-egg-hatching-time' },
                  { text: 'Change Equipment Durability', link: '/en/gameserver/palworld/change-equipment-durability' },
                  { text: 'Change Guild Settings', link: '/en/gameserver/palworld/change-guild-settings' },
                  { text: 'Change HP Regeneration', link: '/en/gameserver/palworld/change-hp-regeneration' },
                  { text: 'Change Max Dropped Items', link: '/en/gameserver/palworld/change-max-dropped-items' },
                  { text: 'Change Pal Capture Rate', link: '/en/gameserver/palworld/change-pal-capture-rate' },
                  { text: 'Change Pal Damage', link: '/en/gameserver/palworld/change-pal-damage' },
                  { text: 'Change Pal Spawn Rate', link: '/en/gameserver/palworld/change-pal-spawn-rate' },
                  { text: 'Change Player Damage', link: '/en/gameserver/palworld/change-player-damage' },
                  { text: 'Change Server Name', link: '/en/gameserver/palworld/change-server-name' },
                  { text: 'Change Structure Damage', link: '/en/gameserver/palworld/change-structure-damage' },
                  { text: 'Change Work Speed', link: '/en/gameserver/palworld/change-work-speed' },
                  { text: 'Change XP Rate', link: '/en/gameserver/palworld/change-xp-rate' },
                  { text: 'Create Backup', link: '/en/gameserver/palworld/create-backup' },
                  { text: 'Disable Death Penalty', link: '/en/gameserver/palworld/disable-death-penalty' },
                  { text: 'Download Savegame', link: '/en/gameserver/palworld/download-savegame' },
                  { text: 'Edit Server Config', link: '/en/gameserver/palworld/edit-server-config' },
                  { text: 'Enable Fast Travel', link: '/en/gameserver/palworld/enable-fast-travel' },
                  { text: 'Enable Hardcore Mode', link: '/en/gameserver/palworld/enable-hardcore-mode' },
                  { text: 'Enable PvP', link: '/en/gameserver/palworld/enable-pvp' },
                  { text: 'Enable Raids', link: '/en/gameserver/palworld/enable-raids' },
                  { text: 'Add Mods', link: '/en/gameserver/palworld/add-mods' },
                  { text: 'Join Server', link: '/en/gameserver/palworld/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/palworld/kick-ban-players' },
                  { text: 'Reset World', link: '/en/gameserver/palworld/reset-world' },
                  { text: 'Set Server Password', link: '/en/gameserver/palworld/set-server-password' },
                  { text: 'Add Savegame', link: '/en/gameserver/palworld/upload-savegame' }
                ]
              },
              {
                text: 'PixARK',
                link: '/en/gameserver/pixark',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/pixark/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/pixark/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/pixark/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/pixark/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/pixark/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/pixark/join-server' }
                ]
              },
              {
                text: 'Project Zomboid',
                link: '/en/gameserver/project-zomboid',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/project-zomboid/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/project-zomboid/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/project-zomboid/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/project-zomboid/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/project-zomboid/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/project-zomboid/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/project-zomboid/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/project-zomboid/download-savegame' },
                  { text: 'Enable Server List', link: '/en/gameserver/project-zomboid/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/project-zomboid/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/project-zomboid/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/project-zomboid/set-server-password' }
                ]
              },
              {
                text: 'QANGA',
                link: '/en/gameserver/qanga',
                collapsed: true,
                items: [
                  { text: 'Create Backup', link: '/en/gameserver/qanga/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/qanga/join-server' }
                ]
              },
              {
                text: 'Quake Live',
                link: '/en/gameserver/quake-live',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/quake-live/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/quake-live/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/quake-live/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/quake-live/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/quake-live/kick-ban-players' }
                ]
              },
              {
                text: 'Renown',
                link: '/en/gameserver/renown',
                collapsed: true,
                items: [
                  { text: 'Change Map Rotation', link: '/en/gameserver/renown/change-map-rotation' },
                  { text: 'Change Max Players', link: '/en/gameserver/renown/change-max-players' },
                  { text: 'Change Private Session', link: '/en/gameserver/renown/change-private-session' },
                  { text: 'Change Public Server', link: '/en/gameserver/renown/change-public-server' },
                  { text: 'Change Server Name', link: '/en/gameserver/renown/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/renown/create-backup' },
                  { text: 'Enable First Person Only', link: '/en/gameserver/renown/enable-first-person-only' },
                  { text: 'Enable Use First Map', link: '/en/gameserver/renown/enable-use-first-map' },
                  { text: 'Join Server', link: '/en/gameserver/renown/join-server' },
                  { text: 'Set Admin Password', link: '/en/gameserver/renown/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/renown/set-server-password' }
                ]
              },
              {
                text: 'Romestead',
                link: '/en/gameserver/romestead',
                collapsed: true,
                items: [
                  { text: 'Create Backup', link: '/en/gameserver/romestead/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/romestead/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/romestead/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/romestead/kick-ban-players' }
                ]
              },
              {
                text: 'RuneScape: Dragonwilds',
                link: '/en/gameserver/runescape-dragonwilds',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/runescape-dragonwilds/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/runescape-dragonwilds/create-backup' },
                  { text: 'Create Custom World', link: '/en/gameserver/runescape-dragonwilds/create-custom-world' },
                  { text: 'Download Savegame', link: '/en/gameserver/runescape-dragonwilds/download-savegame' },
                  { text: 'Set Admin Password', link: '/en/gameserver/runescape-dragonwilds/set-admin-password' },
                  { text: 'Join Server', link: '/en/gameserver/runescape-dragonwilds/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/runescape-dragonwilds/kick-ban-players' },
                  { text: 'Set Owner ID', link: '/en/gameserver/runescape-dragonwilds/set-owner-id' },
                  { text: 'Set Server Password', link: '/en/gameserver/runescape-dragonwilds/set-server-password' }
                ]
              },
              {
                text: 'Rust',
                link: '/en/gameserver/rust',
                collapsed: true,
                items: [
                  { text: 'Change Autosave Interval', link: '/en/gameserver/rust/change-autosave-interval' },
                  { text: 'Change Map', link: '/en/gameserver/rust/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/rust/change-max-players' },
                  { text: 'Change Seed', link: '/en/gameserver/rust/change-seed' },
                  { text: 'Change Server Description', link: '/en/gameserver/rust/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/rust/change-server-name' },
                  { text: 'Change World Size', link: '/en/gameserver/rust/change-world-size' },
                  { text: 'Create Backup', link: '/en/gameserver/rust/create-backup' },
                  { text: 'Install uMod', link: '/en/gameserver/rust/install-umod' },
                  { text: 'Join Server', link: '/en/gameserver/rust/join-server' },
                  { text: 'Set Custom Map URL', link: '/en/gameserver/rust/set-custom-map-url' },
                  { text: 'Set Server Image', link: '/en/gameserver/rust/set-server-image' },
                  { text: 'Set Server Logo', link: '/en/gameserver/rust/set-server-logo' },
                  { text: 'Set Server URL', link: '/en/gameserver/rust/set-server-url' }
                ]
              },
              {
                text: 's&box',
                link: '/en/gameserver/sbox',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/sbox/add-admin' },
                  { text: 'Change Gamemode', link: '/en/gameserver/sbox/change-gamemode' },
                  { text: 'Change Map', link: '/en/gameserver/sbox/change-map' },
                  { text: 'Create Backup', link: '/en/gameserver/sbox/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/sbox/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/sbox/kick-ban-players' }
                ]
              },
              {
                text: 'SCP: Secret Laboratory',
                link: '/en/gameserver/scp-secret-laboratory',
                collapsed: true,
                items: [
                  { text: 'Assign Ranks', link: '/en/gameserver/scp-secret-laboratory/assign-ranks' },
                  { text: 'Create Backup', link: '/en/gameserver/scp-secret-laboratory/create-backup' },
                  { text: 'Install EXILED Plugins', link: '/en/gameserver/scp-secret-laboratory/install-exiled-plugins' },
                  { text: 'Join Server', link: '/en/gameserver/scp-secret-laboratory/join-server' }
                ]
              },
              {
                text: 'SCUM',
                link: '/en/gameserver/scum',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/scum/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/scum/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/scum/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/scum/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/scum/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/scum/kick-ban-players' }
                ]
              },
              {
                text: 'Satisfactory',
                link: '/en/gameserver/satisfactory',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/satisfactory/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/satisfactory/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/satisfactory/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/satisfactory/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/satisfactory/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/satisfactory/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/satisfactory/join-server' },
                  { text: 'Set Admin Password', link: '/en/gameserver/satisfactory/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/satisfactory/set-server-password' }
                ]
              },
              {
                text: 'Smalland Survive the Wilds',
                link: '/en/gameserver/smalland-survive-the-wilds',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/smalland-survive-the-wilds/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/smalland-survive-the-wilds/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/smalland-survive-the-wilds/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/smalland-survive-the-wilds/join-server' }
                ]
              },
              {
                text: 'Solace Crafting',
                link: '/en/gameserver/solace-crafting',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/solace-crafting/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/solace-crafting/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/solace-crafting/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/solace-crafting/join-server' }
                ]
              },
              {
                text: 'Soldat',
                link: '/en/gameserver/soldat',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/soldat/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/soldat/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/soldat/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/soldat/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/soldat/kick-ban-players' }
                ]
              },
              {
                text: 'Soldat 2',
                link: '/en/gameserver/soldat-2',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/soldat-2/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/soldat-2/add-mods' },
                  { text: 'Create Backup', link: '/en/gameserver/soldat-2/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/soldat-2/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/soldat-2/kick-ban-players' }
                ]
              },
              {
                text: 'Sons Of The Forest',
                link: '/en/gameserver/sons-of-the-forest',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/sons-of-the-forest/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/sons-of-the-forest/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/sons-of-the-forest/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/sons-of-the-forest/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/sons-of-the-forest/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/sons-of-the-forest/kick-ban-players' }
                ]
              },
              {
                text: 'Soulmask',
                link: '/en/gameserver/soulmask',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/soulmask/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/soulmask/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/soulmask/add-savegame' },
                  { text: 'Change Map', link: '/en/gameserver/soulmask/change-map' },
                  { text: 'Change Max Players', link: '/en/gameserver/soulmask/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/soulmask/change-server-name' },
                  { text: 'Configure PvP', link: '/en/gameserver/soulmask/configure-pvp' },
                  { text: 'Create Backup', link: '/en/gameserver/soulmask/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/soulmask/download-savegame' },
                  { text: 'Find Invitation Code', link: '/en/gameserver/soulmask/find-invitation-code' },
                  { text: 'Join Server', link: '/en/gameserver/soulmask/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/soulmask/kick-ban-players' },
                  { text: 'Set Admin Password', link: '/en/gameserver/soulmask/set-admin-password' },
                  { text: 'Set Server Password', link: '/en/gameserver/soulmask/set-server-password' },
                  { text: 'Change Save Interval', link: '/en/gameserver/soulmask/change-save-interval' },
                  { text: 'Setup Shifting Sands', link: '/en/gameserver/soulmask/setup-shifting-sands' }
                ]
              },
              {
                text: 'Space Engineers',
                link: '/en/gameserver/space-engineers',
                collapsed: true,
                items: [
                  { text: 'Add Admins', link: '/en/gameserver/space-engineers/add-admins' },
                  { text: 'Add Mods', link: '/en/gameserver/space-engineers/add-mods' },
                  { text: 'Change Game Mode', link: '/en/gameserver/space-engineers/change-game-mode' },
                  { text: 'Change Max Players', link: '/en/gameserver/space-engineers/change-max-players' },
                  { text: 'Change Server Description', link: '/en/gameserver/space-engineers/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/space-engineers/change-server-name' },
                  { text: 'Configure Automatic Backups', link: '/en/gameserver/space-engineers/configure-automatic-backups' },
                  { text: 'Download World', link: '/en/gameserver/space-engineers/download-world' },
                  { text: 'Enable Experimental Mode', link: '/en/gameserver/space-engineers/enable-experimental-mode' },
                  { text: 'Enable In-Game Scripts', link: '/en/gameserver/space-engineers/enable-ingame-scripts' },
                  { text: 'Enable Remote API', link: '/en/gameserver/space-engineers/enable-remote-api' },
                  { text: 'Join Server', link: '/en/gameserver/space-engineers/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/space-engineers/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/space-engineers/set-server-password' },
                  { text: 'Upload World', link: '/en/gameserver/space-engineers/upload-world' }
                ]
              },
              {
                text: 'Space Station 14',
                link: '/en/gameserver/space-station-14',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/space-station-14/add-admin' },
                  { text: 'Create Backup', link: '/en/gameserver/space-station-14/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/space-station-14/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/space-station-14/kick-ban-players' }
                ]
              },
              {
                text: 'Squad 44',
                link: '/en/gameserver/squad-44',
                collapsed: true,
                items: [
                  { text: 'Allow Team Change', link: '/en/gameserver/squad-44/allow-team-change' },
                  { text: 'Become Admin', link: '/en/gameserver/squad-44/become-admin' },
                  { text: 'Change Max Players', link: '/en/gameserver/squad-44/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/squad-44/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/squad-44/create-backup' },
                  { text: 'Enable Server List', link: '/en/gameserver/squad-44/enable-server-list' },
                  { text: 'Force Team Balance', link: '/en/gameserver/squad-44/force-team-balance' },
                  { text: 'Join Server', link: '/en/gameserver/squad-44/join-server' },
                  { text: 'Prevent Team Change', link: '/en/gameserver/squad-44/prevent-team-change' },
                  { text: 'Record Demos', link: '/en/gameserver/squad-44/record-demos' },
                  { text: 'Set Server Password', link: '/en/gameserver/squad-44/set-server-password' }
                ]
              },
              {
                text: 'StarRupture',
                link: '/en/gameserver/starrupture',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/starrupture/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/starrupture/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/starrupture/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/starrupture/join-server' }
                ]
              },
              {
                text: 'Terraria',
                link: '/en/gameserver/terraria',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/terraria/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/terraria/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/terraria/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/terraria/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/terraria/kick-ban-players' }
                ]
              },
              {
                text: 'Terraria tShock',
                link: '/en/gameserver/terraria-tshock',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/terraria-tshock/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/terraria-tshock/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/terraria-tshock/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/terraria-tshock/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/terraria-tshock/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/terraria-tshock/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/terraria-tshock/kick-ban-players' }
                ]
              },
              {
                text: 'Terraria: tModLoader',
                link: '/en/gameserver/terraria-tmodloader',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/terraria-tmodloader/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/terraria-tmodloader/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/terraria-tmodloader/add-savegame' },
                  { text: 'Add World', link: '/en/gameserver/terraria-tmodloader/add-world' },
                  { text: 'Create Backup', link: '/en/gameserver/terraria-tmodloader/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/terraria-tmodloader/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/terraria-tmodloader/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/terraria-tmodloader/kick-ban-players' }
                ]
              },
              {
                text: 'The Bus',
                link: '/en/gameserver/the-bus',
                collapsed: true,
                items: [
                  { text: 'Activate DLC', link: '/en/gameserver/the-bus/activate-dlc' },
                  { text: 'Add Admin', link: '/en/gameserver/the-bus/add-admin' },
                  { text: 'Change Fleet', link: '/en/gameserver/the-bus/change-fleet' },
                  { text: 'Change Map', link: '/en/gameserver/the-bus/change-map' },
                  { text: 'Change Operating Plan', link: '/en/gameserver/the-bus/change-operating-plan' },
                  { text: 'Change Ticket Chance', link: '/en/gameserver/the-bus/change-ticket-chance' },
                  { text: 'Change Time', link: '/en/gameserver/the-bus/change-time' },
                  { text: 'Change Traffic', link: '/en/gameserver/the-bus/change-traffic' },
                  { text: 'Change Weather', link: '/en/gameserver/the-bus/change-weather' },
                  { text: 'Configure Server', link: '/en/gameserver/the-bus/configure-server' },
                  { text: 'Create Backup', link: '/en/gameserver/the-bus/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/the-bus/download-savegame' },
                  { text: 'Enable AI Buses', link: '/en/gameserver/the-bus/enable-ai-buses' },
                  { text: 'Add Mods', link: '/en/gameserver/the-bus/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/the-bus/add-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/the-bus/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-bus/kick-ban-players' },
                  { text: 'Send Chat Messages', link: '/en/gameserver/the-bus/send-chat-messages' },
                  { text: 'Spawn Bus', link: '/en/gameserver/the-bus/spawn-bus' },
                  { text: 'Teleport', link: '/en/gameserver/the-bus/teleport' }
                ]
              },
              {
                text: 'The Cenozoic Era',
                link: '/en/gameserver/the-cenozoic-era',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/the-cenozoic-era/add-admin' },
                  { text: 'Create Backup', link: '/en/gameserver/the-cenozoic-era/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/the-cenozoic-era/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-cenozoic-era/kick-ban-players' }
                ]
              },
              {
                text: 'The Forest',
                link: '/en/gameserver/the-forest',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/the-forest/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/the-forest/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/the-forest/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/the-forest/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/the-forest/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-forest/kick-ban-players' }
                ]
              },
              {
                text: 'The Front',
                link: '/en/gameserver/the-front',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/the-front/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/the-front/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/the-front/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/the-front/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/the-front/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-front/kick-ban-players' }
                ]
              },
              {
                text: 'The Lord of the Rings Return to Moria',
                link: '/en/gameserver/the-lord-of-the-rings-return-to-moria',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/the-lord-of-the-rings-return-to-moria/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/the-lord-of-the-rings-return-to-moria/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/the-lord-of-the-rings-return-to-moria/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/the-lord-of-the-rings-return-to-moria/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players' }
                ]
              },
              {
                text: 'Unturned',
                link: '/en/gameserver/unturned',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/unturned/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/unturned/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/unturned/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/unturned/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/unturned/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/unturned/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/unturned/kick-ban-players' }
                ]
              },
              {
                text: 'V Rising',
                link: '/en/gameserver/v-rising',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/v-rising/add-admin' },
                  { text: 'Add Mods', link: '/en/gameserver/v-rising/add-mods' },
                  { text: 'Download Savegame', link: '/en/gameserver/v-rising/download-savegame' },
                  { text: 'Install BepInEx', link: '/en/gameserver/v-rising/install-bepinex' },
                  { text: 'Add Savegame', link: '/en/gameserver/v-rising/add-savegame' },
                  { text: 'Change Game Settings', link: '/en/gameserver/v-rising/change-game-settings' },
                  { text: 'Change Save Interval', link: '/en/gameserver/v-rising/change-save-interval' },
                  { text: 'Change Server Description', link: '/en/gameserver/v-rising/change-server-description' },
                  { text: 'Change Server Name', link: '/en/gameserver/v-rising/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/v-rising/create-backup' },
                  { text: 'Enable Server List', link: '/en/gameserver/v-rising/enable-server-list' },
                  { text: 'Fix EOS NotReady Error', link: '/en/gameserver/v-rising/fix-eos-notready-error' },
                  { text: 'Join Server', link: '/en/gameserver/v-rising/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/v-rising/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/v-rising/set-server-password' }
                ]
              },
              {
                text: 'Valheim',
                link: '/en/gameserver/valheim',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/valheim/add-admin' },
                  { text: 'Download Savegame', link: '/en/gameserver/valheim/download-savegame' },
                  { text: 'Install BepInEx', link: '/en/gameserver/valheim/install-bepinex' },
                  { text: 'Add Mods', link: '/en/gameserver/valheim/add-mods' },
                  { text: 'Add Savegame', link: '/en/gameserver/valheim/add-savegame' },
                  { text: 'Change Branch', link: '/en/gameserver/valheim/change-branch' },
                  { text: 'Change Backup Settings', link: '/en/gameserver/valheim/change-backup-settings' },
                  { text: 'Change Server Name', link: '/en/gameserver/valheim/change-server-name' },
                  { text: 'Create Backup', link: '/en/gameserver/valheim/create-backup' },
                  { text: 'Enable Crossplay', link: '/en/gameserver/valheim/enable-crossplay' },
                  { text: 'Enable Server List', link: '/en/gameserver/valheim/enable-server-list' },
                  { text: 'Join Server', link: '/en/gameserver/valheim/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/valheim/kick-ban-players' },
                  { text: 'Set Server Password', link: '/en/gameserver/valheim/set-server-password' }
                ]
              },
              {
                text: 'VEIN',
                link: '/en/gameserver/vein',
                collapsed: true,
                items: [
                  { text: 'Add Admin', link: '/en/gameserver/vein/add-admin' },
                  { text: 'Add Savegame', link: '/en/gameserver/vein/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/vein/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/vein/download-savegame' },
                  { text: 'Enable Whitelist', link: '/en/gameserver/vein/enable-whitelist' },
                  { text: 'Join Server', link: '/en/gameserver/vein/join-server' },
                  { text: 'Kick & Ban Players', link: '/en/gameserver/vein/kick-ban-players' }
                ]
              },
              {
                text: 'Voyagers of Nera',
                link: '/en/gameserver/voyagers-of-nera',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/voyagers-of-nera/add-savegame' },
                  { text: 'Create Backup', link: '/en/gameserver/voyagers-of-nera/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/voyagers-of-nera/download-savegame' },
                  { text: 'Join Server', link: '/en/gameserver/voyagers-of-nera/join-server' }
                ]
              },
              {
                text: 'Windrose',
                link: '/en/gameserver/windrose',
                collapsed: true,
                items: [
                  { text: 'Add Savegame', link: '/en/gameserver/windrose/add-savegame' },
                  { text: 'Change Max Players', link: '/en/gameserver/windrose/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/windrose/change-server-name' },
                  { text: 'Change World Settings', link: '/en/gameserver/windrose/change-world-settings' },
                  { text: 'Create Backup', link: '/en/gameserver/windrose/create-backup' },
                  { text: 'Download Savegame', link: '/en/gameserver/windrose/download-savegame' },
                  { text: 'Enable Direct Connection', link: '/en/gameserver/windrose/enable-direct-connection' },
                  { text: 'Join Server', link: '/en/gameserver/windrose/join-server' },
                  { text: 'Set Invite Code', link: '/en/gameserver/windrose/set-invite-code' },
                  { text: 'Set Island ID', link: '/en/gameserver/windrose/set-island-id' },
                  { text: 'Set Note', link: '/en/gameserver/windrose/set-note' },
                  { text: 'Set Server Password', link: '/en/gameserver/windrose/set-server-password' },
                  { text: 'System Requirements', link: '/en/gameserver/windrose/system-requirements' }
                ]
              },
              {
                text: 'Wreckfest',
                link: '/en/gameserver/wreckfest',
                collapsed: true,
                items: [
                  { text: 'Change Max Players', link: '/en/gameserver/wreckfest/change-max-players' },
                  { text: 'Change Server Name', link: '/en/gameserver/wreckfest/change-server-name' },
                  { text: 'Change Welcome Message', link: '/en/gameserver/wreckfest/change-welcome-message' },
                  { text: 'Create Backup', link: '/en/gameserver/wreckfest/create-backup' },
                  { text: 'Join Server', link: '/en/gameserver/wreckfest/join-server' },
                  { text: 'Set Server Password', link: '/en/gameserver/wreckfest/set-server-password' }
                ]
              }
            ]
          },
          {
            text: 'Rootserver',
            items: [
              {
                text: 'Basic configuration',
                collapsed: true,
                items: [
                  { text: 'Change Root Password', link: '/en/rootserver/basic_configuration/change-root-password' },
                  { text: 'Install Fail2Ban', link: '/en/rootserver/basic_configuration/install-fail2ban' },
                  { text: 'Secure SSH Access', link: '/en/rootserver/basic_configuration/secure-ssh-access' },
                  { text: 'Install UFW', link: '/en/rootserver/basic_configuration/install-ufw' }
                ]
              },
              {
                text: 'Linux',
                collapsed: true,
                items: [
                  { text: 'Connect to Linux Server', link: '/en/rootserver/linux/connect-to-linux-server' }
                ]
              },
              {
                text: 'Services & Tools',
                collapsed: true,
                items: [
                  { text: 'Install Certbot', link: '/en/rootserver/services-tools/install-certbot' },
                  { text: 'Install Docker', link: '/en/rootserver/services-tools/install-docker' },
                  { text: 'Install Minecraft Server', link: '/en/rootserver/services-tools/install-minecraft-server' },
                  { text: 'Use Screen', link: '/en/rootserver/services-tools/use-screen' },
                  { text: 'Install phpMyAdmin, Apache2 und MySQL', link: '/en/rootserver/services-tools/install-phpmyadmin-apache2-und-mysql' },
                  { text: 'Install TeamSpeak 3 Server', link: '/en/rootserver/services-tools/install-teamspeak-3-server' },
                  { text: 'Install Webserver', link: '/en/rootserver/services-tools/install-webserver' }
                ]
              },
              {
                text: 'Tips & troubleshooting',
                collapsed: true,
                items: [
                  { text: 'Create cronjobs', link: '/en/rootserver/tips_troubleshooting/create-cronjobs' }
                ]
              },
              {
                text: 'Windows',
                collapsed: true,
                items: [
                  { text: 'Connect to Windows Server', link: '/en/rootserver/windows/connect-to-windows-server' },
                  { text: 'Expand Windows Hard Drive', link: '/en/rootserver/windows/windows-hard-drive-expand' },
                  { text: 'Open Windows Firewall Ports', link: '/en/rootserver/windows/open-windows-firewall-ports' }
                ]
              }
            ]
          },
          {
            text: 'TeamSpeak',
            items: [
              { text: 'TeamSpeak 6 Server Availability', link: '/en/teamspeak/teamspeak-6-server-availability' },
              { text: 'ServerQuery Login', link: '/en/teamspeak/serverquery-login' }
            ]
          },
          {
            text: 'Domains',
            items: [
              {
                text: 'DNS-Records',
                link: '/en/domains/dns-records',
                collapsed: true,
                items: [
                  { text: 'FiveM Server', link: '/en/domains/dns-records/fivem-server' },
                  { text: 'Minecraft Server', link: '/en/domains/dns-records/minecraft-server' },
                  { text: 'TeamSpeak Server', link: '/en/domains/dns-records/teamspeak-server' }
                ]
              },
              { text: 'NIS2 – Domain Owner Verification', link: '/en/domains/nis2-domain-verification' }
            ]
          },
          {
            text: 'General',
            items: [
              { text: 'Create Network Trace', link: '/en/general/create-network-trace' },
              { text: 'Create PCAP File', link: '/en/general/create-pcap-file' }
            ]
          }
        ],
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        socialLinks: [
          { icon: 'twitter', link: 'https://x.com/EmeraldHostINT' },
          { icon: 'instagram', link: 'https://www.instagram.com/emeraldhostint/' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>'
            },
            link: 'https://www.tiktok.com/@emeraldhost.de',
          },
          { icon: 'mastodon', link: 'https://mastodon.social/@emeraldhostint' },
          { icon: 'facebook', link: 'https://www.facebook.com/EmeraldHostDE/' },
          { icon: 'youtube', link: 'https://www.youtube.com/@emeraldhost' },
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bluesky</title><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/></svg>'
            },
            link: 'https://bsky.app/profile/emeraldhostint.bsky.social',
          },
          { icon: 'discord', link: 'https://discord.emeraldhost.de/' },
          { icon: 'github', link: 'https://github.com/emeraldhost/' }
        ],
        notFound: {
          title: 'Page not found',
          quote: 'The page you requested does not exist or has been removed.',
          linkLabel: 'Back to Homepage',
          linkText: 'Go to Homepage',
          code: '404'
        },
        editLink: {
          pattern: 'https://github.com/emeraldhost/documentation/edit/master/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated'
        }
      }
    }
  },
  themeConfig: {
    logo: "https://emeraldhost.b-cdn.net/branding/icon.svg",
    footer: {
      copyright: '© 2016 - 2026 EmeraldHost'
    },
    search: {
      provider: 'local'
    },
    lastUpdated: true,
    i18nRouting: false
  }
})
