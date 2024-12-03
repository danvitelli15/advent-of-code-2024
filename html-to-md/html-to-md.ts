export const htmlToMd = (input: string) =>
  input
    .match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1]
    .replaceAll(/<h2[^>]*>/g, "# ")
    .replaceAll(/<\/h2>/g, "\n")
    .replaceAll(/<p>/g, "\n")
    .replaceAll(/<\/p>/g, "")
    .replaceAll(/<pre><code>/g, "```\n")
    .replaceAll(/<\/code><\/pre>/g, "```")
    .replaceAll(/<code>/g, "`")
    .replaceAll(/<\/code>/g, "`")
    .replaceAll(/<em>/g, "*")
    .replaceAll(/<\/em>/g, "*")
    .replaceAll(/<li>/g, "- ")
    .replaceAll(/<\/?[^>]+>/g, "");
