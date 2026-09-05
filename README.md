# EmeraldHost Guides

*Read this in [Deutsch](./README.de.md).*

This repository holds every guide that appears on the EmeraldHost website:

- German: <https://emeraldhost.de/de/anleitungen>
- English: <https://emeraldhost.de/en/guides>

Each guide is a plain Markdown file with a small YAML header. Change a file here,
open a pull request, and once it is merged the guide goes live on the website a
few minutes later. No build step, no website account, no special tooling.

## What you find here

- **Step-by-step guides** for game servers, root servers, TeamSpeak and domains.
- **General guides** that apply to every product, for example how to secure your
  new customer discount.
- **Screenshots** that belong to a guide, stored next to it.
- **Category files** that give every section its name and description.

Everything is written by the EmeraldHost team and by customers like you. If a
guide is wrong, outdated or missing, you can fix it yourself.

## How the content is organised

```text
tutorials/
  <group>/              # gameserver, rootserver, teamspeak, domains, general
    <section>/          # optional sub-section, for example minecraft or linux
      <subcategory>/    # optional, for example plugins under a game
        <topic>/        # one folder per guide, named in English
          de.md         # German version
          en.md         # English version
          images/       # screenshots for this guide
          videos/       # short clips, only if a guide needs one
categories/
  <group>.yaml          # name and description of a group
  <group>/
    <section>.yaml      # name and description of a sub-section
    <section>/
      <subcategory>.yaml  # name and description of a subcategory
```

Three rules follow from that layout:

1. **One folder is one guide.** The folder name is the English topic name in
   lowercase with hyphens, for example `install-plugins`.
2. **The path is the category.** There is no category field in the file. Every
   path segment needs a matching file under `categories/`. The middle segments
   are optional: the segment directly below `gameserver/` is the game, under
   `rootserver/` and `domains/` it groups a topic, for example `linux` or
   `dns-records`. A further optional subcategory may sit between the game and the
   guide, for example `gameserver/minecraft/plugins/<guide>`.
3. **Both languages live side by side.** `de.md` and `en.md` share the same
   folder and the same `images/` folder.

## Contribute in five steps

1. **Fork this repository** on GitHub and clone your fork.

   ```bash
   git clone https://github.com/<your-user>/documentation.git
   cd documentation
   git checkout -b tutorial/install-minecraft-datapacks
   ```

2. **Copy the template** into a new guide folder, once per language. Pick a
   folder name that does not exist yet, so you create a guide instead of
   overwriting one.

   ```bash
   mkdir -p tutorials/gameserver/minecraft/install-datapacks/images
   cp tutorial-template.en.md tutorials/gameserver/minecraft/install-datapacks/en.md
   cp tutorial-template.de.md tutorials/gameserver/minecraft/install-datapacks/de.md
   ```

3. **Write the guide** in both languages. Fill in the header, write short steps,
   and put screenshots into the `images/` folder next to your files.
   [`CONTRIBUTING.md`](./CONTRIBUTING.md) explains every field and every rule.

4. **Open a pull request** against `main`. The pull request template lists what a
   reviewer checks, so tick it off yourself first.

5. **Review and publish.** A maintainer reads your draft and suggests changes if
   needed. After the merge, your guide appears on the website within a few
   minutes.

You do not need to run anything locally. The automated checks in the pull request
tell you if a header field is missing, if the Markdown style slipped, if an
internal link points nowhere or if the second language is missing. A reviewer
looks at everything else.

## Your reward

For every accepted contribution we thank you with EmeraldHost credit:
**10,00 €** for a new guide and **5,00 €** for a real improvement to an existing
one, for example a corrected procedure, a missing step or a translation. Put your
customer number into the pull request when you open it, so the credit reaches the
right account. You find it in the customer area under
[Account](https://emeraldhost.de/en/dashboard/account).

## Languages

German and English are both first-class. A guide ships in both languages, and a
reviewer does not merge a guide that exists in only one of them. If you can write
only one language, open the pull request anyway and say so: someone will help
with the second file.

The folder name stays English in both languages. Only the content and the header
values are translated, so a link keeps working no matter which language the
reader is on.

## Where to ask

- **A question about a guide:** open an [issue](https://github.com/emeraldhost/documentation/issues).
  There is a template for a fix and one for a new guide idea.
- **A question about your product or your account:** that is what our support
  is for. On the [support page](https://emeraldhost.de/en/support) you reach our
  team directly.
- **Questions, ideas or just a chat:** in our
  [community Discord](https://discord.emeraldhost.de/) you meet other EmeraldHost
  users who are happy to help with servers, games and guides. Our team is around
  there regularly as well, answers questions and picks up wishes for new guides.

Whichever way you reach us, the
[code of conduct](./CONTRIBUTING.md#code-of-conduct) applies. The full text is in
the repository as the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

[MIT](./LICENSE). By opening a pull request you confirm that you have the right
to contribute your text and screenshots under that license.
