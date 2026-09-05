#!/usr/bin/env bash
# Build the monthly outdated-tutorials review report.
#
# Walks tutorials/**/en.md (English is the canonical anchor for every slug)
# and emits a markdown report listing tutorials whose last content change is
# older than the configurable age threshold. That date is `updated:`, falling
# back to `date:` when `updated:` is absent or unusable, so a finished review
# clears the guide from the next report and a broken value never hides one.
# Guides already carrying `is_deprecated: true` are listed separately:
# they await a rewrite, not a re-check. The output is suitable as an issue body
# and as a GitHub Actions step summary.

set -euo pipefail

AGE_THRESHOLD_DAYS="${AGE_THRESHOLD_DAYS:-365}"

threshold_epoch=$(date -d "$AGE_THRESHOLD_DAYS days ago" +%s)

outdated=$(mktemp)
deprecated=$(mktemp)
trap 'rm -f "$outdated" "$deprecated"' EXIT

total=0
flagged=0
awaiting_rewrite=0

while IFS= read -r -d '' file; do
    total=$((total + 1))

    # `updated:` wins, `date:` is the fallback whenever `updated:` is missing,
    # empty or unparseable, so a broken value never hides a guide from the report.
    tutor_epoch=0
    freshness=$(yq --front-matter extract '.updated // ""' "$file" 2>/dev/null)
    if [ -n "$freshness" ]; then
        tutor_epoch=$(date -d "$freshness" +%s 2>/dev/null || echo 0)
    fi
    if [ "$tutor_epoch" -eq 0 ]; then
        freshness=$(yq --front-matter extract '.date // ""' "$file" 2>/dev/null)
        [ -z "$freshness" ] && continue
        tutor_epoch=$(date -d "$freshness" +%s 2>/dev/null || echo 0)
    fi
    [ "$tutor_epoch" -eq 0 ] && continue
    [ "$tutor_epoch" -ge "$threshold_epoch" ] && continue

    title=$(yq --front-matter extract '.title // ""' "$file")
    author_link=$(yq --front-matter extract '.author_link // ""' "$file")
    author=$(yq --front-matter extract '.author // ""' "$file")
    is_deprecated=$(yq --front-matter extract '.is_deprecated // false' "$file")

    # Prefer a @github-handle when the author_link points at a github profile.
    display_author="_(unassigned)_"
    if [[ "$author_link" == https://github.com/* ]]; then
        display_author=$(echo "$author_link" | sed 's|https://github.com/|@|')
    elif [ -n "$author" ] && [ "$author" != "null" ]; then
        display_author="$author"
    fi

    rel="${file#./}"
    permalink="https://github.com/emeraldhost/documentation/blob/main/${rel}"
    guide_path=$(dirname "${rel#tutorials/}")
    row=$(printf '| %s | [%s](%s) | %s | %s |' \
        "$freshness" "$guide_path" "$permalink" "$title" "$display_author")

    # A guide flagged as deprecated needs a rewrite, so keep it out of the review pass.
    if [ "$is_deprecated" = "true" ]; then
        awaiting_rewrite=$((awaiting_rewrite + 1))
        echo "$row" >> "$deprecated"
        continue
    fi

    flagged=$((flagged + 1))
    echo "$row" >> "$outdated"
done < <(find ./tutorials -type f -name 'en.md' -print0 | sort -z)

cat <<EOF
## Monthly tutorial review

**${flagged} of ${total}** tutorials are older than ${AGE_THRESHOLD_DAYS} days and need a check. ${awaiting_rewrite} further tutorials are already flagged with \`is_deprecated\` and are left out of that pass.

For each entry below:

- Skim the steps and screenshots against the current product UI.
- Bump the \`updated:\` field in the frontmatter once you have verified or refreshed the content.
- Comment here when done, or flag the tutorial for removal if it is no longer relevant.

EOF

if [ "$flagged" -gt 0 ]; then
    cat <<'EOF'
| Last update | Guide | Title | Author |
| --- | --- | --- | --- |
EOF
    sort "$outdated"
else
    echo "_No tutorial needs a routine check this month._"
fi

if [ "$awaiting_rewrite" -gt 0 ]; then
    cat <<'EOF'

### Already flagged for a rewrite

These carry `is_deprecated: true` in their frontmatter. They are waiting for a rewrite, so do not review or re-date them here.

| Last update | Guide | Title | Author |
| --- | --- | --- | --- |
EOF
    sort "$deprecated"
fi
