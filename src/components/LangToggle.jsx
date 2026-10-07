import { useLang, useT } from "../lang";

/** Floating English ⇄ Gujarati language button. */
export default function LangToggle() {
  const { toggle } = useLang();
  const ui = useT();

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggle}
      aria-label={ui.langButton}
      title={ui.langButton}
    >
      {ui.langButton}
    </button>
  );
}
