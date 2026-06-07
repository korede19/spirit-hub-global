export const WA_NUMBER = "2347041341982";

export function openWhatsApp(text: string) {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer"
  );
}
