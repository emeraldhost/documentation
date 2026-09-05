---
slug: "markdown-showcase"
language: "en"
title: "Markdown Showcase: every supported component"
short_title: "Markdown Showcase"
description: "Preview of every supported markdown feature and custom component in the EmeraldHost guide system."
tags: ["test", "markdown", "showcase"]
date: "2026-06-02"
visibility: "internal"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
---

This page previews every markdown feature and component the guide system supports. Each section demonstrates exactly one feature, so you can see at a glance how it renders. The headings name the feature, not the topic.

## 1. Headings

The frontmatter provides the H1. In the body we use headings starting at H2.

### H3: subsection

#### H4: deeper level

##### H5: even deeper

###### H6: deepest level

## 2. Paragraphs and text styling

A normal paragraph just flows. A blank line starts a new paragraph.

In running text we use *italic*, **bold**, ***bold italic*** and ~~strikethrough~~. Highlighting has no dedicated Markdown character, so we fall back to the HTML tag <mark>marked</mark>. The same applies to <u>underlined</u>, H<sub>2</sub>O and x<sup>2</sup> via their respective HTML tags.

## 3. Inline code and keyboard shortcuts

Inline code such as `apt update` or `nginx -t` stays on a single line. We render keyboard shortcuts with <kbd>Ctrl</kbd>+<kbd>C</kbd> for Linux and <kbd>⌘</kbd>+<kbd>K</kbd> for macOS.

## 4. Code blocks in different languages

### Bash with title

```bash title="install.sh"
apt update
apt install -y nginx
systemctl reload nginx
```

### YAML with title

```yaml title="docker-compose.yml"
services:
  web:
    image: nginx:1.27-alpine
    ports:
      - "80:80"
    environment:
      NGINX_HOST: emeraldhost.de
      NGINX_PORT: "80"
```

### JSON with title

```json title="config.json"
{
  "name": "showcase",
  "version": 3,
  "enabled": true,
  "owner": null,
  "endpoints": {
    "primary": "https://api.example.com",
    "fallback": "https://api.fallback.example.com"
  }
}
```

### PHP with title

```php title="App\Services\Foo.php"
<?php

namespace App\Services;

final class Foo
{
    public function greet(string $name): string
    {
        return "Hello, {$name}";
    }
}
```

### JavaScript with title

```javascript title="serve.js"
import express from 'express';

const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(3000, () => console.log('Listening on :3000'));
```

### Nginx with title

```nginx title="server.conf"
server {
    listen 80;
    server_name emeraldhost.de;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
    }
}
```

### Plain text without language and without title

```text
Connected to sftp.emeraldhost.de
File uploaded: my-plugin.jar (482 KB)
Session closed.
```

## 5. Tables

### Narrow key/value table

| Key       | Value               |
| --------- | ------------------- |
| Host      | sftp.emeraldhost.de |
| Port      | 2022                |
| Protocol  | SFTP                |

### Wider table with alignment

| Left-aligned | Centered | Right-aligned |
| :----------- | :------: | ------------: |
| Entry A      | required |         12.50 |
| Entry B      | optional |        128.00 |
| Entry C      | legacy   |       2048.75 |

## 6. Task lists

- [x] Server image selected
- [x] Region set to Frankfurt
- [x] SSH key uploaded

Regular prose may sit between the task groups to show the list resumes cleanly.

- [ ] Review firewall rules
- [ ] Configure backup cron
- [ ] Install monitoring agent

## 7. Lists

### Unordered list with nesting

- Gameserver
  - Minecraft (Java)
  - Minecraft (Bedrock)
  - Aloft
- Rootserver
- TeamSpeak

### Ordered list

1. Place the order in the dashboard
2. Wait for provisioning to complete
3. Test the SSH connection

### Ordered list with a nested unordered list

1. Perform the initial configuration
   - Set the hostname
   - Choose a timezone
   - Upgrade packages
2. Install the application
3. Enable monitoring

## 8. Blockquotes

> Setting up backups only after the first data loss is too late. Plan for recovery, not just for storage.

## 9. GitHub alerts

<!-- markdownlint-disable MD028 -->

> [!NOTE]
> This guide applies to every plan. If you cannot run `nginx -t`, you lack the necessary sudo privileges.

> [!TIP]
> Take a snapshot before every update. `emerald snapshot create` completes in a few seconds.

> [!IMPORTANT]
> The `--purge` option also removes configuration files. Use `apt remove` if you want to keep them.

> [!WARNING]
> A restart disconnects active SFTP sessions. Schedule maintenance windows so your users are informed.

> [!CAUTION]
> Running `rm -rf /var/lib/minecraft` deletes your whole world. There is no confirmation prompt and no trash bin to recover from.

<!-- markdownlint-enable MD028 -->

## 10. Internal links

Learn more under [our SFTP guide](/tutorials/gameserver/establish-sftp-connection). If you need to document network issues, [Create a PCAP file](/tutorials/rootserver/tips-troubleshooting/create-pcap-file) is a good starting point.

## 11. External links

The official nginx documentation lives at <https://nginx.org/en/docs/> or as a [named link to nginx.org](https://nginx.org/en/docs/). Both variants should render identically in the frontend.

## 12. Footnotes

We use an inline reference[^1] and show the definition below. A second footnote[^backup] shows what a second definition looks like.

## 13. Attribute block with anchor

<a name="custom-anchor"></a>

### My section

This heading has a fixed anchor and can be linked directly via `#custom-anchor`. The inline `<a name="…"></a>` form is [GitHub's officially documented pattern](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#custom-anchors); use it, because the alternative attribute-block form (`### My section {#custom-anchor}`) renders correctly on our site but shows up as literal text on GitHub.

## 14. Images

Images follow standard Markdown syntax `![alt](url)`. Images from the tutorial's `images/` folder are shown on the website, and external URLs work just as well.

![Sample 1200x600 image for demonstration](https://placehold.co/1200x600/png)

![Narrower 800x300 sample image](https://placehold.co/800x300/png)

## 15. Horizontal rule

This paragraph sits above the divider.

---

After the divider the content continues here. The `hr` line should be clearly visible and separate sections optically.

## 16. Details and summary

<details>
<summary>Show advanced configuration options</summary>

Here we hide details that only matter occasionally, for example rarely used flags such as `--max-old-space-size=4096` or `--experimental-modules`.

```bash
node --max-old-space-size=4096 serve.js
```

</details>

## 17. Video

There are two routes, because github.com does not play a video that lives in the repository. Pick the route per video, based on where it has to play.

### 17a. Repo-committed video (our site renders, GitHub shows a link)

Drop the file into the guide's `videos/` folder and reference it with the standard markdown image syntax. Our site plays the video; on github.com a plain link to the file appears instead.

![Sample clip](videos/sample.mp4)

Use this route when the video belongs to the article source: versioned, changeable in branches and reviewable in pull requests.

### 17b. UI-uploaded video (both surfaces render)

Drag any `.mp4`/`.webm`/`.mov` (≤ 10 MB free / 100 MB paid) into a GitHub Issue/PR comment draft. GitHub uploads to its `user-images.githubusercontent.com` CDN and pastes back a ready `<video>` tag with the generated URL. Copy that block into the markdown verbatim. Both renderers play it.

```html
<video controls muted playsinline src="https://user-images.githubusercontent.com/USER/ID-uuid.mp4"></video>
```

Use this route when the preview on GitHub has to show the video itself and you accept that the file lives in GitHub's user-content store rather than in the repository.

### Direct `<video>` for custom attributes

Whichever URL source you use, if you need raw control (multi-codec fallback via `<source>`, custom poster, autoplay flags), write the `<video>` tag directly. The `src`/`poster`/`source src` attributes accept both repo-relative `videos/`/`images/` paths AND absolute user-content URLs.

## 18. YouTube embed

A plain YouTube URL on its own line turns into an embedded player. No third-party tracking cookies are set before the user interacts with the player.

<!-- markdownlint-disable-next-line MD034 -->
https://www.youtube.com/watch?v=wmJ1vFvaYXI

Inline links like [Watch the trailer](https://www.youtube.com/watch?v=wmJ1vFvaYXI) stay as ordinary links, only standalone URLs get the player treatment. Supported URL shapes: `youtube.com/watch?v=ID`, `youtu.be/ID`, `youtube.com/embed/ID`, `youtube.com/shorts/ID`.

Note: GitHub does not render the embed, iframes are removed there. On github.com you'll see the URL as a clickable link; on our site you get the full player.

[^1]: This first footnote explains that all commands should be run as root or via `sudo`.
[^backup]: This second footnote is a placeholder so you can see two definitions rendered next to each other.
