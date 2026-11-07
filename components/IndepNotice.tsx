import type { Locale } from '@/lib/site';

const COPY: Record<Locale, { strong: string; short: string; full: string }> = {
  "en": {
    "strong": "Independent guide.",
    "short": "Not affiliated with Smilegate, STOVE, or Steam. Always verify steps and dates on official STOVE / Steam pages.",
    "full": "This site is an unofficial player guide for Epic Seven on Steam. It is not the official Smilegate, STOVE, or Steam website. We do not sell codes, accounts, or in-game currency. For account actions, downloads, and event dates, use the official Steam store and STOVE announcements linked on each page."
  },
  "ko": {
    "strong": "비공식 가이드.",
    "short": "Smilegate, STOVE, Steam과 무관합니다. 절차·일정은 반드시 공식 STOVE / Steam에서 확인하세요.",
    "full": "본 사이트는 Epic Seven Steam 관련 비공식 플레이어 가이드입니다. Smilegate, STOVE, Steam 공식 사이트가 아닙니다. 코드·계정·재화를 판매하지 않습니다. 계정 작업·다운로드·이벤트 일정은 각 페이지에 링크된 공식 Steam 스토어와 STOVE 공지를 이용하세요."
  },
  "ja": {
    "strong": "非公式ガイド。",
    "short": "Smilegate / STOVE / Steamとは無関係です。手順・日程は必ず公式STOVE / Steamで確認してください。",
    "full": "当サイトは Epic Seven Steam 向けの非公式プレイヤーガイドです。Smilegate・STOVE・Steamの公式サイトではありません。コード・アカウント・通貨の販売は行いません。アカウント操作・ダウンロード・イベント日程は、各ページの公式SteamストアおよびSTOVE告知をご利用ください。"
  },
  "zh-tw": {
    "strong": "非官方指南。",
    "short": "與 Smilegate、STOVE、Steam 無關。步驟與日程請務必以官方 STOVE / Steam 為準。",
    "full": "本站為 Epic Seven Steam 非官方玩家指南，並非 Smilegate、STOVE 或 Steam 官網。我們不販售序號、帳號或遊戲幣。帳號操作、下載與活動日程請使用各頁連結的官方 Steam 商店與 STOVE 公告。"
  },
  "th": {
    "strong": "ไกด์อิสระ",
    "short": "ไม่มีความเกี่ยวข้องกับ Smilegate, STOVE หรือ Steam ตรวจขั้นตอนและวันเวลากับหน้า STOVE / Steam ทางการเสมอ",
    "full": "เว็บนี้เป็นไกด์ผู้เล่นอย่างไม่เป็นทางการสำหรับ Epic Seven บน Steam ไม่ใช่เว็บไซต์ทางการของ Smilegate, STOVE หรือ Steam เราไม่ขายโค้ด บัญชี หรือสกุลเงินในเกม สำหรับการดำเนินการกับบัญชี การดาวน์โหลด และวันอีเวนต์ ให้ใช้ร้านค้า Steam ทางการและประกาศ STOVE ที่ลิงก์ไว้ในแต่ละหน้า"
  },
  "es": {
    "strong": "Guía independiente.",
    "short": "No estamos afiliados a Smilegate, STOVE ni Steam. Verifica siempre los pasos y las fechas en las páginas oficiales de STOVE / Steam.",
    "full": "Este sitio es una guía no oficial de jugadores para Epic Seven en Steam. No es el sitio web oficial de Smilegate, STOVE ni Steam. No vendemos códigos, cuentas ni moneda del juego. Para acciones de cuenta, descargas y fechas de eventos, usa la tienda oficial de Steam y los anuncios de STOVE enlazados en cada página."
  },
  "pt": {
    "strong": "Guia independente.",
    "short": "Não afiliado à Smilegate, STOVE ou Steam. Sempre verifique passos e datas nas páginas oficiais do STOVE / Steam.",
    "full": "Este site é um guia não oficial de jogador para Epic Seven na Steam. Não é o site oficial da Smilegate, STOVE ou Steam. Não vendemos códigos, contas ou moeda in-game. Para ações de conta, downloads e datas de eventos, use a loja oficial da Steam e os anúncios do STOVE linkados em cada página."
  },
  "de": {
    "strong": "Unabhängiger Guide.",
    "short": "Nicht mit Smilegate, STOVE oder Steam verbunden. Prüfe Schritte und Daten immer auf den offiziellen STOVE-/Steam-Seiten.",
    "full": "Diese Website ist ein unabhängiger Spieler-Guide für Epic Seven auf Steam. Sie ist nicht die offizielle Website von Smilegate, STOVE oder Steam. Wir verkaufen keine Codes, Konten oder Ingame-Währung. Für Kontoaktionen, Downloads und Event-Daten nutze den offiziellen Steam-Store und die STOVE-Ankündigungen, die auf jeder Seite verlinkt sind."
  },
  "fr": {
    "strong": "Guide indépendant.",
    "short": "Non affilié à Smilegate, STOVE ou Steam. Vérifiez toujours les étapes et les dates sur les pages officielles STOVE / Steam.",
    "full": "Ce site est un guide de joueur non officiel pour Epic Seven sur Steam. Il n’est pas le site officiel de Smilegate, STOVE ou Steam. Nous ne vendons ni codes, ni comptes, ni monnaie de jeu. Pour les actions de compte, les téléchargements et les dates d’événements, utilisez la boutique Steam officielle et les annonces STOVE liées sur chaque page."
  },
  "pl": {
    "strong": "Niezależny poradnik.",
    "short": "Niepowiązane ze Smilegate, STOVE ani Steam. Zawsze weryfikuj kroki i daty na oficjalnych stronach STOVE / Steam.",
    "full": "Ta strona to nieoficjalny poradnik gracza po Epic Seven na Steam. Nie jest oficjalną witryną Smilegate, STOVE ani Steam. Nie sprzedajemy kodów, kont ani waluty w grze. W sprawie działań na koncie, pobierania i dat wydarzeń korzystaj z oficjalnego sklepu Steam i ogłoszeń STOVE podlinkowanych na każdej stronie."
  }
};

export function IndepNotice({
  locale = 'en',
  compact = false,
}: {
  locale?: Locale;
  compact?: boolean;
}) {
  const c = COPY[locale];
  return (
    <aside className="indep-notice" role="note">
      <strong>{c.strong}</strong> {compact ? c.short : c.full}
    </aside>
  );
}
