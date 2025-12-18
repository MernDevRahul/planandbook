export default function gumletLoader({ src, width, quality }) {
  if (src.includes("<CURRENT_IMAGE_DOMAIN>")) {
    const parsedUrl = new URL(src);
    parsedUrl.hostname = "<your_gumlet_subdomain>.gumlet.io";
    parsedUrl.searchParams.set("w", width);
    parsedUrl.searchParams.set("q", quality || 80);
    return parsedUrl.toString();
  } else {
    return `${src}?w=${width}&q=${quality || 80}`;
  }
}
