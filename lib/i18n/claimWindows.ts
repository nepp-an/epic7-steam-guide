import type { Locale } from '@/lib/site';
import { type GrowthLocale } from './growth';

export type WindowRow = readonly [gift: string, how: string, deadline: string, status: string];
export type QtyRow = readonly [item: string, qty: string];

export type ClaimWindowsCopy = {
  sectionTitle: string;
  intro: string;
  verified: string;
  windowTitle: string;
  windowTh: readonly [string, string, string, string];
  windows: readonly WindowRow[];
  mailTitle: string;
  mailNote: string;
  mailTh: readonly [string, string];
  mailRows: readonly QtyRow[];
  wishlistTitle: string;
  wishlistNote: string;
  wishlistTh: readonly [string, string];
  wishlistRows: readonly QtyRow[];
  stuckLabel: string;
  stuckBody: string;
  sourceLabel: string;
  mailOfficialLabel: string;
  wishlistOfficialLabel: string;
  foundryLead: string;
  foundryLinkLabel: string;
};

const MAIL_ROWS: readonly QtyRow[] = [
  ['Epic Penguin', '60'],
  ['Common Rune Selection Chest', '180'],
  ['Greater Rune Selection Chest', '90'],
  ['Epic Rune Selection Chest', '75'],
  ['Rare Catalyst Selection Chest', '60'],
  ['Epic Catalyst Selection Chest', '40'],
  ['Epic Spirit Bloom', '80'],
];

const WISHLIST_ROWS: readonly QtyRow[] = [
  ['Epic Charm Selection Chest', '20'],
  ['Epic Artifact Charm', '3'],
  ['Gold', '1,000,000'],
];

export const CLAIM_WINDOWS: Record<GrowthLocale, ClaimWindowsCopy> = {
  en: {
    sectionTitle: 'Which Foundry gifts are still claimable?',
    intro:
      'Four official Foundry grants are easy to mix up: the welcome-skin pop-up, the one-time growth mailbox pack, the ended Steam wishlist mail, and the ended Guild War login gift. This section lists official windows and quantities only. It does not claim in-game testing.',
    verified:
      'Reviewed 23 November 2026, Asia/Shanghai, against the official notices linked below.',
    windowTitle: 'Claim windows',
    windowTh: ['Gift', 'How to claim', 'Deadline (Asia/Shanghai)', 'Status'],
    windows: [
      [
        'Welcome Gift (skin pop-up)',
        'First Foundry login during the window; shown once as a pop-up, not as mailbox mail.',
        '31 Dec 2026, 10:59 (12/31 02:59 UTC)',
        'Open (once)',
      ],
      [
        'Foundry Server Mail Rewards (growth pack)',
        'Log in on a Foundry character during the login window, then claim from the mailbox.',
        'Login by 26 Nov 2026, 22:59 (11/26 14:59 UTC); then 7-day mailbox storage',
        'Open, ending soon',
      ],
      [
        'Steam 100,000 wishlist milestone mail',
        'The login window has already closed. Do not log in now expecting a new mail.',
        'Login window ended 19 Nov 2026, 11:00 (11/19 03:00 UTC); any copy already in the mailbox follows its own 7-day timer',
        'Ended — no new mail',
      ],
      [
        'Foundry Guild War login gift',
        'This was a separate login-to-claim window, not the growth mailbox pack.',
        'Ended 23 Nov 2026, 11:00 (03:00 UTC)',
        'Ended',
      ],
    ],
    mailTitle: 'Official growth-mail items (once)',
    mailNote:
      'Sent after a Foundry login during the login window. Stored in the mailbox for 7 days. Issued once and not reissued.',
    mailTh: ['Item', 'Quantity'],
    mailRows: MAIL_ROWS,
    wishlistTitle: 'Ended wishlist-mail items (for reference)',
    wishlistNote:
      'The login window ended 19 Nov 2026, 11:00 Asia/Shanghai (11/19 03:00 UTC). This is not an instruction to log in now for a new mail. If a copy is already in your mailbox, it follows its own 7-day storage timer from when it was sent. The item list follows official notice 14606492, not unofficial alternative lists.',
    wishlistTh: ['Item', 'Quantity'],
    wishlistRows: WISHLIST_ROWS,
    stuckLabel: 'If the mail is missing',
    stuckBody:
      'If you were already logged in when the mail was sent, log out and back in, or return to the lobby, then open the mailbox. After a valid login, claim the mail before its own 7-day timer ends — not only before the login window. Missed mail is not reissued. The welcome skin is a first-login pop-up through 31 Dec 2026, 10:59 Asia/Shanghai, not this mailbox pack. The Guild War login gift already ended on 23 Nov 2026, 11:00 Asia/Shanghai.',
    sourceLabel: 'Official notice',
    mailOfficialLabel: 'Foundry Server Gift',
    wishlistOfficialLabel: 'Steam 100,000 Wishlist Milestone Reward',
    foundryLead:
      'The one-time growth-mail login window ends 26 Nov 2026, 22:59 Asia/Shanghai. Official item quantities, and which other launch gifts have already ended:',
    foundryLinkLabel: 'Claim windows on the quests page',
  },
  'zh-tw': {
    sectionTitle: '哪些 Foundry 獎勵現在還能領？',
    intro:
      '歡迎造型彈窗、一次性成長郵件、已結束的 Steam 願望單郵件，以及已結束的公會戰登入禮，這四項官方獎勵很容易混在一起。這裡只列官方時段與數量，不宣稱已在遊戲內實測。',
    verified: '已於 2026 年 11 月 23 日（Asia/Shanghai）對照下方官方公告核對。',
    windowTitle: '領取時段對照',
    windowTh: ['獎勵', '如何領取', '截止時間（Asia/Shanghai）', '狀態'],
    windows: [
      [
        '歡迎禮（造型彈窗）',
        '時段內首次登入 Foundry，以彈窗顯示一次，不是信箱郵件。',
        '2026 年 12 月 31 日 10:59（12/31 02:59 UTC）',
        '進行中（一次）',
      ],
      [
        'Foundry 伺服器郵件獎勵（成長補給）',
        '在登入窗口內以 Foundry 角色登入，再從信箱領取。',
        '登入至 2026 年 11 月 26 日 22:59（11/26 14:59 UTC）；其後信箱保存 7 天',
        '進行中，即將截止',
      ],
      [
        'Steam 10 萬願望單里程碑郵件',
        '登入窗口已關閉。現在登入不會再發出新的願望單郵件。',
        '登入窗口已於 2026 年 11 月 19 日 11:00（11/19 03:00 UTC）結束；若信箱裡已有該信，依其自身 7 天倒數',
        '已結束 — 不再新發',
      ],
      [
        'Foundry 公會戰登入禮',
        '這是獨立的登入領取窗口，不是成長郵件包。',
        '已於 2026 年 11 月 23 日 11:00（03:00 UTC）結束',
        '已結束',
      ],
    ],
    mailTitle: '官方成長郵件內容（僅一次）',
    mailNote: '在登入窗口內登入 Foundry 後發到信箱，保存 7 天。只發一次，錯過不補發。',
    mailTh: ['道具', '數量'],
    mailRows: MAIL_ROWS,
    wishlistTitle: '已結束的願望單郵件內容（供核對）',
    wishlistNote:
      '登入窗口已於 2026 年 11 月 19 日 11:00（Asia/Shanghai，即 11/19 03:00 UTC）結束。這不是請你現在登入以領取新郵件的說明。若信箱裡已經有該信，依寄出後 7 天保存期限計算。物品清單以官方公告 14606492 為準，不採用非官方的其他清單。',
    wishlistTh: ['道具', '數量'],
    wishlistRows: WISHLIST_ROWS,
    stuckLabel: '信箱沒看到郵件時',
    stuckBody:
      '若發送當時已在線，請先登出再登入，或返回大廳後再開信箱。有效登入後，請在該封郵件自身的 7 天保存期限內領取，不要只看登入窗口。錯過不會補發。歡迎造型是至 2026 年 12 月 31 日 10:59（Asia/Shanghai）的首次登入彈窗，不是這包郵件。公會戰登入禮已於 2026 年 11 月 23 日 11:00（Asia/Shanghai）結束。',
    sourceLabel: '官方公告',
    mailOfficialLabel: 'Foundry Server Gift',
    wishlistOfficialLabel: 'Steam 100,000 Wishlist Milestone Reward',
    foundryLead:
      '一次性成長郵件的登入窗口至 2026 年 11 月 26 日 22:59（Asia/Shanghai）。官方數量，以及其他已結束的上市獎勵：',
    foundryLinkLabel: '任務頁的領取時段對照',
  },
  ko: {
    sectionTitle: '지금 받을 수 있는 파운드리 선물은?',
    intro:
      '환영 스킨 팝업, 일회성 성장 우편, 이미 종료된 Steam 위시리스트 우편, 이미 종료된 길드전 로그인 선물은 섞이기 쉽습니다. 여기에는 공식 기간과 수량만 정리하며, 게임 내 실측을 주장하지 않습니다.',
    verified: '2026년 11월 23일 Asia/Shanghai 기준으로 아래 공식 공지를 대조했습니다.',
    windowTitle: '수령 기간 비교',
    windowTh: ['선물', '받는 방법', '마감 (Asia/Shanghai)', '상태'],
    windows: [
      [
        '환영 선물 (스킨 팝업)',
        '기간 중 파운드리 첫 로그인 시 팝업으로 1회 표시되며, 우편함 우편이 아닙니다.',
        '2026년 12월 31일 10:59 (12/31 02:59 UTC)',
        '진행 중 (1회)',
      ],
      [
        '파운드리 서버 우편 보상 (성장 팩)',
        '로그인 기간에 파운드리 캐릭터로 로그인한 뒤 우편함에서 수령하세요.',
        '로그인 기한 2026년 11월 26일 22:59 (11/26 14:59 UTC); 이후 우편 보관 7일',
        '진행 중, 곧 종료',
      ],
      [
        'Steam 10만 위시리스트 마일스톤 우편',
        '로그인 기간은 이미 끝났습니다. 지금 로그인해도 새 우편이 오지 않습니다.',
        '로그인 기간은 2026년 11월 19일 11:00 (11/19 03:00 UTC)에 종료; 우편함에 이미 있는 우편은 자체 7일 타이머를 따름',
        '종료 — 신규 발송 없음',
      ],
      [
        '파운드리 길드전 로그인 선물',
        '성장 우편 팩과는 별개의 로그인 수령 기간이었습니다.',
        '2026년 11월 23일 11:00 (03:00 UTC)에 종료',
        '종료',
      ],
    ],
    mailTitle: '공식 성장 우편 구성 (1회)',
    mailNote: '로그인 기간에 파운드리에 접속하면 우편함으로 발송되며 7일간 보관됩니다. 1회만 지급되며 재지급되지 않습니다.',
    mailTh: ['아이템', '수량'],
    mailRows: MAIL_ROWS,
    wishlistTitle: '종료된 위시리스트 우편 구성 (대조용)',
    wishlistNote:
      '로그인 기간은 2026년 11월 19일 11:00 Asia/Shanghai (11/19 03:00 UTC)에 끝났습니다. 지금 로그인해서 새 우편을 받으라는 안내가 아닙니다. 우편함에 이미 있는 우편은 발송 시점부터 7일 보관 타이머를 따릅니다. 아이템 목록은 공식 공지 14606492를 따르며, 비공식 다른 목록은 사용하지 않습니다.',
    wishlistTh: ['아이템', '수량'],
    wishlistRows: WISHLIST_ROWS,
    stuckLabel: '우편이 보이지 않을 때',
    stuckBody:
      '우편이 발송될 때 이미 접속 중이었다면 로그아웃 후 다시 로그인하거나, 로비로 돌아간 뒤 우편함을 여세요. 유효한 로그인 이후에는 로그인 기간만이 아니라 해당 우편의 7일 타이머가 끝나기 전에 수령하세요. 놓친 우편은 재지급되지 않습니다. 환영 스킨은 2026년 12월 31일 10:59 Asia/Shanghai까지 제공되는 첫 로그인 팝업이며, 이 우편 팩이 아닙니다. 길드전 로그인 선물은 2026년 11월 23일 11:00 Asia/Shanghai에 이미 종료되었습니다.',
    sourceLabel: '공식 공지',
    mailOfficialLabel: 'Foundry Server Gift',
    wishlistOfficialLabel: 'Steam 100,000 Wishlist Milestone Reward',
    foundryLead:
      '일회성 성장 우편의 로그인 기간은 2026년 11월 26일 22:59 Asia/Shanghai에 끝납니다. 공식 수량과 이미 종료된 다른 출시 선물:',
    foundryLinkLabel: '퀘스트 페이지의 수령 기간 비교',
  },
  th: {
    sectionTitle: 'ของขวัญ Foundry ใบไหนยังรับได้อยู่?',
    intro:
      'สกินต้อนรับแบบป๊อปอัป จดหมายเติบโตครั้งเดียว จดหมาย Wishlist ของ Steam ที่ปิดช่วงล็อกอินแล้ว และของขวัญล็อกอินสงครามกิลด์ที่จบแล้ว มักถูกสับสนได้ง่าย ส่วนนี้รวบรวมเฉพาะช่วงเวลาและจำนวนจากประกาศทางการ ไม่ได้บอกว่าทดสอบในเกมแล้ว',
    verified: 'ตรวจสอบแล้วเมื่อ 23 พ.ย. 2026 เวลา Asia/Shanghai จากประกาศทางการด้านล่าง',
    windowTitle: 'ตารางช่วงรับของ',
    windowTh: ['ของขวัญ', 'วิธีรับ', 'หมดเขต (Asia/Shanghai)', 'สถานะ'],
    windows: [
      [
        'ของขวัญต้อนรับ (ป๊อปอัปสกิน)',
        'ล็อกอิน Foundry ครั้งแรกในช่วงเวลานี้ จะแสดงเป็นป๊อปอัปครั้งเดียว ไม่ใช่จดหมายในกล่อง',
        '31 ธ.ค. 2026 10:59 (12/31 02:59 UTC)',
        'เปิดอยู่ (ครั้งเดียว)',
      ],
      [
        'รางวัลจดหมายเซิร์ฟเวอร์ Foundry (ชุดเติบโต)',
        'ล็อกอินด้วยตัวละคร Foundry ในช่วงล็อกอิน แล้วรับจากกล่องจดหมาย',
        'ล็อกอินภายใน 26 พ.ย. 2026 22:59 (11/26 14:59 UTC); จากนั้นเก็บในกล่อง 7 วัน',
        'เปิดอยู่ ใกล้ปิด',
      ],
      [
        'จดหมายไมล์สโตน Wishlist Steam 100,000',
        'ช่วงล็อกอินปิดแล้ว ล็อกอินตอนนี้จะไม่มีจดหมายใหม่',
        'ช่วงล็อกอินจบ 19 พ.ย. 2026 11:00 (11/19 03:00 UTC); ถ้ามีฉบับอยู่ในกล่องแล้ว ให้ดูตัวนับ 7 วันของฉบับนั้น',
        'จบแล้ว — ไม่ส่งใหม่',
      ],
      [
        'ของขวัญล็อกอินสงครามกิลด์ Foundry',
        'เป็นช่วงรับของจากการล็อกอินแยกต่างหาก ไม่ใช่ชุดจดหมายเติบโต',
        'จบแล้ว 23 พ.ย. 2026 11:00 (03:00 UTC)',
        'จบแล้ว',
      ],
    ],
    mailTitle: 'รายการจดหมายเติบโตทางการ (ครั้งเดียว)',
    mailNote:
      'ส่งเข้ากล่องจดหมายหลังล็อกอิน Foundry ในช่วงล็อกอิน เก็บ 7 วัน แจกครั้งเดียวและไม่เติมให้ถ้าพลาด',
    mailTh: ['ไอเท็ม', 'จำนวน'],
    mailRows: MAIL_ROWS,
    wishlistTitle: 'รายการจดหมาย Wishlist ที่จบแล้ว (สำหรับอ้างอิง)',
    wishlistNote:
      'ช่วงล็อกอินจบแล้วเมื่อ 19 พ.ย. 2026 11:00 Asia/Shanghai (11/19 03:00 UTC) นี่ไม่ใช่คำแนะนำให้ล็อกอินตอนนี้เพื่อรับจดหมายใหม่ หากมีฉบับอยู่ในกล่องแล้ว ให้ใช้ตัวนับเก็บ 7 วันนับจากวันที่ส่ง รายการไอเท็มยึดประกาศทางการ 14606492 ไม่ใช้รายการอื่นที่ไม่เป็นทางการ',
    wishlistTh: ['ไอเท็ม', 'จำนวน'],
    wishlistRows: WISHLIST_ROWS,
    stuckLabel: 'ถ้าไม่เห็นจดหมาย',
    stuckBody:
      'ถ้าล็อกอินค้างอยู่ตอนจดหมายถูกส่ง ให้ล็อกเอาท์แล้วล็อกอินใหม่ หรือกลับล็อบบี้แล้วค่อยเปิดกล่องจดหมาย หลังล็อกอินที่ใช้ได้แล้ว ให้รับก่อนตัวนับ 7 วันของฉบับนั้นจะหมด ไม่ใช่ดูแค่ช่วงล็อกอิน จดหมายที่พลาดจะไม่ถูกส่งซ้ำ สกินต้อนรับเป็นป๊อปอัปตอนล็อกอินครั้งแรกถึง 31 ธ.ค. 2026 10:59 Asia/Shanghai ไม่ใช่ชุดจดหมายนี้ ของขวัญล็อกอินสงครามกิลด์จบแล้วเมื่อ 23 พ.ย. 2026 11:00 Asia/Shanghai',
    sourceLabel: 'ประกาศทางการ',
    mailOfficialLabel: 'Foundry Server Gift',
    wishlistOfficialLabel: 'Steam 100,000 Wishlist Milestone Reward',
    foundryLead:
      'ช่วงล็อกอินของจดหมายเติบโตครั้งเดียวสิ้นสุด 26 พ.ย. 2026 22:59 Asia/Shanghai จำนวนของทางการ และของขวัญเปิดเซิร์ฟอื่นที่จบแล้ว:',
    foundryLinkLabel: 'ตารางช่วงรับของในหน้าเควสต์',
  },
};

export function isClaimWindowsLocale(locale: Locale): locale is GrowthLocale {
  return locale in CLAIM_WINDOWS;
}
