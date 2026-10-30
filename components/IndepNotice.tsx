import type { Locale } from '@/lib/site';

const COPY: Record<Locale, { strong: string; short: string; full: string }> = {
  en: {
    strong: 'Independent guide.',
    short:
      'Not affiliated with Smilegate, STOVE, or Steam. Always verify steps and dates on official STOVE / Steam pages.',
    full: 'This site is an unofficial player guide for Epic Seven on Steam. It is not the official Smilegate, STOVE, or Steam website. We do not sell codes, accounts, or in-game currency. For account actions, downloads, and event dates, use the official Steam store and STOVE announcements linked on each page.',
  },
  ko: {
    strong: '비공식 가이드.',
    short:
      'Smilegate, STOVE, Steam과 무관합니다. 절차·일정은 반드시 공식 STOVE / Steam에서 확인하세요.',
    full: '본 사이트는 Epic Seven Steam 관련 비공식 플레이어 가이드입니다. Smilegate, STOVE, Steam 공식 사이트가 아닙니다. 코드·계정·재화를 판매하지 않습니다. 계정 작업·다운로드·이벤트 일정은 각 페이지에 링크된 공식 Steam 스토어와 STOVE 공지를 이용하세요.',
  },
  ja: {
    strong: '非公式ガイド。',
    short:
      'Smilegate / STOVE / Steamとは無関係です。手順・日程は必ず公式STOVE / Steamで確認してください。',
    full: '当サイトは Epic Seven Steam 向けの非公式プレイヤーガイドです。Smilegate・STOVE・Steamの公式サイトではありません。コード・アカウント・通貨の販売は行いません。アカウント操作・ダウンロード・イベント日程は、各ページの公式SteamストアおよびSTOVE告知をご利用ください。',
  },
  'zh-tw': {
    strong: '非官方指南。',
    short:
      '與 Smilegate、STOVE、Steam 無關。步驟與日程請務必以官方 STOVE / Steam 為準。',
    full: '本站為 Epic Seven Steam 非官方玩家指南，並非 Smilegate、STOVE 或 Steam 官網。我們不販售序號、帳號或遊戲幣。帳號操作、下載與活動日程請使用各頁連結的官方 Steam 商店與 STOVE 公告。',
  },
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
