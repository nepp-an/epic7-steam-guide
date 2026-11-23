import type { Locale } from '@/lib/site';
import { type GrowthLocale } from './growth';

export const ACTIVE_EVENT_IDS = [
  'dirge-rewind',
  'catalyst-search',
  'palace-maid',
] as const;

export type ActiveEventId = (typeof ACTIVE_EVENT_IDS)[number];

export type ExchangeRow = readonly [item: string, qty: string, chance: string];
export type ResetRow = readonly [servers: string, time: string];
export type MissionStep = readonly [step: string, clear: string];

export type ActiveEventCard = {
  id: ActiveEventId;
  status: string;
  title: string;
  lead: string;
  entryLabel: string;
  entryBody: string;
  rewardLabel: string;
  rewardBody: string;
  deadlineLabel: string;
  deadlineBody: string;
  doneLabel: string;
  doneBody: string;
  stuckLabel: string;
  stuckBody: string;
  officialHref: string;
  officialLabel: string;
  missionsTitle?: string;
  missions?: readonly MissionStep[];
  pointsTitle?: string;
  points?: readonly string[];
  exchangeTitle?: string;
  exchangeNote?: string;
  exchangeTh?: readonly [string, string, string];
  exchangeRows?: readonly ExchangeRow[];
  resetTitle?: string;
  resetTh?: readonly [string, string];
  resetRows?: readonly ResetRow[];
};

export type ActiveEventsCopy = {
  sectionTitle: string;
  intro: string;
  verified: string;
  sourceLabel: string;
  events: readonly ActiveEventCard[];
  bannerNote: string;
  rabbitNote: string;
  foundryLead: string;
  foundryLinkLabel: string;
};

const CATALYST_HREF = 'https://page.onstove.com/epicseven/global/view/14638258';
const PALACE_HREF = 'https://page.onstove.com/epicseven/global/view/14638262';
const DIRGE_HREF = 'https://page.onstove.com/epicseven/global/view/14638347';

const EXCHANGE_ROWS: readonly ExchangeRow[] = [
  ['MolaGora', '1', '5%'],
  ['Gold', '100,000', '20%'],
  ['Rare Catalyst Selection Chest', '1', '35%'],
  ['Rare Catalyst Selection Chest', '2', '25%'],
  ['Epic Catalyst Selection Chest', '1', '15%'],
];

export const ACTIVE_EVENTS: Record<GrowthLocale, ActiveEventsCopy> = {
  en: {
    sectionTitle: 'Current and upcoming event routes',
    intro:
      'Official windows only — this is not a full in-game quest list. Dirge of the End: Rewind is already open. Catalyst Search and Daily Life of a Palace Maid open on 26 Nov 2026, 11:00 Asia/Shanghai. Shop catalogs and Leif totals are listed only when the official notice publishes them.',
    verified:
      'Reviewed 23 November 2026, Asia/Shanghai, against the official notices linked below. Steam news at this check still had no post newer than the 18 Nov 2026, 18:30 Asia/Shanghai Version 8.7 update.',
    sourceLabel: 'Official notice',
    bannerNote:
      'A separate points event, Daily Life of a Palace Maid, opens on the same schedule as this Cecilia pickup. It is entered from Secret Rabbit♥Hole and does not summon Cecilia. Route, point cap and shop close: the quests page.',
    rabbitNote:
      'From 26 Nov 2026, 11:00 Asia/Shanghai, Secret Rabbit♥Hole also hosts Daily Life of a Palace Maid, a points-and-exchange event. It is not part of Case Files and does not replace clue collection. Details are on the quests page.',
    foundryLead:
      'Current Emergency Mission (charm week) ends 26 Nov 2026, 10:59 Asia/Shanghai. Catalyst Search starts the same day at 11:00. Dirge of the End: Rewind is already open until 17 Dec, 10:59.',
    foundryLinkLabel: 'Event routes on the quests page',
    events: [
      {
        id: 'dirge-rewind',
        status: 'Open now',
        title: 'Dirge of the End: Rewind',
        lead: 'Episode 6 support event. Use it to clear the listed chapters and claim mission rewards in order. This is not a story walkthrough.',
        entryLabel: 'Entry / eligibility',
        entryBody: 'Lobby → Event → Ashen Apocalypse. Started after the 19 Nov maintenance.',
        rewardLabel: 'Reward / purpose',
        rewardBody:
          'Official notice: a free Continue buff during the event, and Leif from missions and participation. The notice does not publish per-step Leif amounts or buff values.',
        deadlineLabel: 'Deadline',
        deadlineBody: '17 Dec 2026, 10:59 Asia/Shanghai (12/17 02:59 UTC).',
        doneLabel: 'Done when',
        doneBody:
          'All eight listed chapters are cleared, and each previous mission’s rewards have been claimed before the next claim. That claim order is an official rule.',
        stuckLabel: 'If blocked',
        stuckBody:
          'Claim the previous mission’s rewards first. Traditional Chinese Chapter 4-8 could not continue after the cutscene; the 19 Nov Known Issues post asked players to switch language temporarily, and the 20 Nov patch targeted the issue. This page does not claim it is fully resolved — confirm in the client.',
        officialHref: DIRGE_HREF,
        officialLabel: 'STOVE 14638347 — Dirge of the End: Rewind',
        missionsTitle: 'Official mission order',
        missions: [
          ['Step 1', 'Clear Chapter 1-4, “Land of Miracles”'],
          ['Step 2', 'Clear Chapter 1-8, “Black Grail”'],
          ['Step 3', 'Clear Chapter 2-5, “The Star Rising in the North II”'],
          ['Step 4', 'Clear Chapter 2-8, “The Cult Embedded in Shadows”'],
          ['Step 5', 'Clear Chapter 3-4, “To the Black Grail Cult”'],
          ['Step 6', 'Clear Chapter 3-8, “False Covenant”'],
          ['Step 7', 'Clear Chapter 4-5, “A Dream Seen with Open Eyes”'],
          ['Step 8', 'Clear Chapter 4-8, “Dirge of the End”'],
        ],
      },
      {
        id: 'catalyst-search',
        status: 'Opens 26 Nov, 11:00 Asia/Shanghai — not enterable today',
        title: 'Emergency Mission! Catalyst Search',
        lead: 'The next Emergency Mission week after the current charm window. Do not treat today’s Ruins Reclamation / charm week as this event.',
        entryLabel: 'Entry / eligibility',
        entryBody:
          'Battle → Event → Emergency Mission. Unlock by clearing 6th World Episode 1-6, not the entire Episode 6. Up to 5 entries a day; after that, up to 3 more with Skystone (the notice says the cost increases and does not publish prices). Normal and Hard. Guardians and Pets are allowed; Supporter is not; Pet skill effects do not apply.',
        rewardLabel: 'Reward / purpose',
        rewardBody:
          'Gold and the event token Ruins Exploration Coin on clear. Coins exchange at 100 per pull in the official table below. The exchange closes when the mission ends; leftover coins are removed.',
        deadlineLabel: 'Deadline',
        deadlineBody:
          '26 Nov 2026, 11:00 Asia/Shanghai (11/26 03:00 UTC) through 3 Dec 2026, 10:59 Asia/Shanghai (12/3 02:59 UTC). The current charm week ends one hour earlier, at 26 Nov, 10:59 Asia/Shanghai (11/26 02:59 UTC).',
        doneLabel: 'Done when',
        doneBody: 'Planned entries are finished and coins are exchanged before the exchange closes.',
        stuckLabel: 'If blocked',
        stuckBody:
          'If Episode 1-6 is not cleared, finish that first. If you still need charms, use the current Emergency Mission before 26 Nov, 10:59 Asia/Shanghai — that is a different week from Catalyst Search.',
        officialHref: CATALYST_HREF,
        officialLabel: 'STOVE 14638258 — Emergency Mission! Catalyst Search',
        exchangeTitle: 'Official exchange (100 tokens each)',
        exchangeNote: 'Probabilities are copied from the official notice. This is not a recommendation to buy extra entries.',
        exchangeTh: ['Item', 'Quantity', 'Probability'],
        exchangeRows: EXCHANGE_ROWS,
      },
      {
        id: 'palace-maid',
        status: 'Opens 26 Nov, 11:00 Asia/Shanghai — not playable today',
        title: 'Daily Life of a Palace Maid',
        lead: 'A points event celebrating Bunny Girl Maid Cecilia. It shares a start date with her pickup banner but is not a summon.',
        entryLabel: 'Entry / eligibility',
        entryBody:
          'Lobby → Event → Special Event → Secret Rabbit♥Hole. This is not Case Files and does not skip clue collection.',
        rewardLabel: 'Reward / purpose',
        rewardBody:
          'Decorative Buttons and Leif at official point milestones, spent in Party Lost and Found. Each shop item has an exchange limit. The notice does not list the shop catalog or Leif milestone values, so they are not invented here.',
        deadlineLabel: 'Deadline',
        deadlineBody:
          'Event play: 26 Nov 2026, 11:00 Asia/Shanghai (11/26 03:00 UTC) through 17 Dec at each server’s reset (official wording). Party Lost and Found closes 17 Dec 2026, 10:59 Asia/Shanghai (12/17 02:59 UTC). Do not treat the whole event as one global end hour except for that shop close.',
        doneLabel: 'Done when',
        doneBody: 'Daily points are used before they expire, and buttons are exchanged before the shop closes.',
        stuckLabel: 'If blocked',
        stuckBody:
          'The event is not open until 26 Nov, 11:00 Asia/Shanghai. Enter from Secret Rabbit♥Hole, not the Case Files page. The official point list includes Draft Arena; on Foundry, Draft Arena is temporarily replaced by The Call of Chaos through 17 Dec. World Arena is scheduled after the 10 Dec maintenance. Use modes that are actually open in your client.',
        officialHref: PALACE_HREF,
        officialLabel: 'STOVE 14638262 — Daily Life of a Palace Maid',
        pointsTitle: 'Official point sources (daily cap 400; unused points expire)',
        points: [
          'Arena: points equal to Energy used (Spectral Core purchases do not count).',
          'Consume 1 Spectral Core: 160 points.',
          'Play Arena / Draft Arena / World Arena / The Call of Chaos once: 80 points.',
          'Stages that do not consume Energy, such as Side Story story stages, give no points.',
        ],
        resetTitle: 'Daily reset by server (official UTC, with Asia/Shanghai)',
        resetTh: ['Servers', 'Reset time'],
        resetRows: [
          ['Korea / Asia / Japan', '18:00 UTC (02:00 next calendar day, Asia/Shanghai)'],
          ['Europe', '03:00 UTC (11:00 Asia/Shanghai)'],
          ['Global', '10:00 UTC (18:00 Asia/Shanghai)'],
        ],
      },
    ],
  },
  'zh-tw': {
    sectionTitle: '進行中與即將開始的活動路線',
    intro:
      '只整理官方時段，不是遊戲內全部任務。Dirge of the End: Rewind 目前已開放。Catalyst Search 與宮廷女僕的日常（Daily Life of a Palace Maid）於2026年11月26日11:00（Asia/Shanghai）開始。兌換目錄與Leif檔位僅在官方公告有寫時才列出。',
    verified:
      '2026年11月23日於Asia/Shanghai對照下方官方公告覆核。此次檢查時，Steam新聞仍無晚於2026年11月18日18:30（Asia/Shanghai）的8.7更新帖。',
    sourceLabel: '官方公告',
    bannerNote:
      '與Cecilia卡池同一日程還有獨立的積分活動「宮廷女僕的日常」，入口在秘密兔子洞，不能用來抽Cecilia。積分上限與兌換關閉時間見任務頁。',
    rabbitNote:
      '自2026年11月26日11:00（Asia/Shanghai）起，秘密兔子洞也會舉辦積分兌換活動「宮廷女僕的日常」。它不是事件手冊的一部分，也不取代線索蒐集。詳細步驟見任務頁。',
    foundryLead:
      '當前緊急任務（魅力週）至2026年11月26日10:59（Asia/Shanghai）結束；同日11:00開始Catalyst Search。Dirge of the End: Rewind 已開放，至12月17日10:59。',
    foundryLinkLabel: '任務頁的活動路線',
    events: [
      {
        id: 'dirge-rewind',
        status: '進行中',
        title: 'Dirge of the End: Rewind',
        lead: '第6部支援活動。依序列出的章節通關並按順序領獎。這裡不是劇情攻略。',
        entryLabel: '入口／條件',
        entryBody: '大廳 → 活動 → Ashen Apocalypse。11月19日維護後開始。',
        rewardLabel: '獎勵／用途',
        rewardBody:
          '官方公告：活動期間有免費Continue增益，並可透過任務與參與獲得Leif。公告未公布每步Leif數量或增益數值。',
        deadlineLabel: '期限',
        deadlineBody: '2026年12月17日10:59（Asia/Shanghai；12/17 02:59 UTC）。',
        doneLabel: '完成判據',
        doneBody: '八個指定章節均已通關，且領取下一任務獎勵前已領完上一任務的全部獎勵。這是官方規定。',
        stuckLabel: '若卡住',
        stuckBody:
          '先領完上一任務獎勵。繁中第4-8章過場後可能無法繼續；11/19 Known Issues要求暫時更換語言，11/20補丁針對此問題。本頁不宣稱問題已徹底修好，請以遊戲內為準。',
        officialHref: DIRGE_HREF,
        officialLabel: 'STOVE 14638347 — Dirge of the End: Rewind',
        missionsTitle: '官方任務順序',
        missions: [
          ['第1步', '通關 Chapter 1-4「Land of Miracles」'],
          ['第2步', '通關 Chapter 1-8「Black Grail」'],
          ['第3步', '通關 Chapter 2-5「The Star Rising in the North II」'],
          ['第4步', '通關 Chapter 2-8「The Cult Embedded in Shadows」'],
          ['第5步', '通關 Chapter 3-4「To the Black Grail Cult」'],
          ['第6步', '通關 Chapter 3-8「False Covenant」'],
          ['第7步', '通關 Chapter 4-5「A Dream Seen with Open Eyes」'],
          ['第8步', '通關 Chapter 4-8「Dirge of the End」'],
        ],
      },
      {
        id: 'catalyst-search',
        status: '11月26日11:00（Asia/Shanghai）開始——今天還不能進',
        title: 'Emergency Mission! Catalyst Search',
        lead: '接在當前魅力週之後的下一檔緊急任務。不要把今天的Ruins Reclamation／魅力週當成這場活動。',
        entryLabel: '入口／條件',
        entryBody:
          '戰鬥 → 活動 → 緊急任務。解鎖條件是通過第6世界Episode 1-6，不是清完整部Episode 6。每日最多5次；用完後最多再用天空石加購3次（公告寫費用會增加，但未公布價格）。難度有Normal與Hard。可帶守護者與寵物；不可用支援者；寵物技能效果不生效。',
        rewardLabel: '獎勵／用途',
        rewardBody:
          '通關獲得金幣與活動代幣Ruins Exploration Coin。每100枚依下方官方表兌換一次。活動結束時兌換所立即關閉，剩餘代幣會被移除。',
        deadlineLabel: '期限',
        deadlineBody:
          '2026年11月26日11:00至12月3日10:59（Asia/Shanghai；11/26 03:00–12/3 02:59 UTC）。當前魅力週提早一小時結束，即11月26日10:59（11/26 02:59 UTC）。',
        doneLabel: '完成判據',
        doneBody: '已完成預定場次，並在兌換所關閉前換完代幣。',
        stuckLabel: '若卡住',
        stuckBody:
          '若尚未通過Episode 1-6，先完成該關。若還需要魅力，請在11月26日10:59（Asia/Shanghai）前使用當前緊急任務——那是與Catalyst Search不同的一週。',
        officialHref: CATALYST_HREF,
        officialLabel: 'STOVE 14638258 — Emergency Mission! Catalyst Search',
        exchangeTitle: '官方兌換（每次100枚）',
        exchangeNote: '機率照錄官方公告，不是建議加購入場次數。',
        exchangeTh: ['物品', '數量', '機率'],
        exchangeRows: EXCHANGE_ROWS,
      },
      {
        id: 'palace-maid',
        status: '11月26日11:00（Asia/Shanghai）開始——今天還不能打',
        title: '宮廷女僕的日常（Daily Life of a Palace Maid）',
        lead: '慶祝Bunny Girl Maid Cecilia的積分活動。與卡池同一天開始，但不是召喚活動。',
        entryLabel: '入口／條件',
        entryBody: '大廳 → 活動 → Special Event → 秘密兔子洞。這不是事件手冊，也不能跳過線索蒐集。',
        rewardLabel: '獎勵／用途',
        rewardBody:
          '依官方積分里程碑獲得Decorative Button與Leif，在Party Lost and Found兌換。各物品有次數上限。公告未列兌換目錄或Leif檔位，這裡不編造。',
        deadlineLabel: '期限',
        deadlineBody:
          '遊玩期：2026年11月26日11:00（Asia/Shanghai；11/26 03:00 UTC）起，至12月17日各伺服器重置（官方原文）。Party Lost and Found於12月17日10:59（Asia/Shanghai；12/17 02:59 UTC）關閉。除該兌換所關閉時刻外，不要把整段活動寫成單一全球結束小時。',
        doneLabel: '完成判據',
        doneBody: '每日積分已在過期前使用，並在兌換所關閉前換完按鈕。',
        stuckLabel: '若卡住',
        stuckBody:
          '活動要到11月26日11:00（Asia/Shanghai）才開放。請從秘密兔子洞進入，不要走事件手冊頁。官方積分來源包含Draft Arena；在Foundry，Draft Arena已被Call of Chaos臨時替代至12月17日。世界競技場預定12月10日維護後開放。請使用遊戲內實際開放的模式。',
        officialHref: PALACE_HREF,
        officialLabel: 'STOVE 14638262 — Daily Life of a Palace Maid',
        pointsTitle: '官方積分來源（每日上限400；未使用的分數會過期）',
        points: [
          '競技場：依消耗的Energy計分（購買的Spectral Core不計入）。',
          '消耗1個Spectral Core：160分。',
          '進行Arena / Draft Arena / World Arena / The Call of Chaos 1次：80分。',
          '不消耗Energy的關卡（如Side Story劇情關）不得分。',
        ],
        resetTitle: '各服每日重置（官方UTC，並附Asia/Shanghai）',
        resetTh: ['伺服器', '重置時間'],
        resetRows: [
          ['Korea / Asia / Japan', '18:00 UTC（Asia/Shanghai次日02:00）'],
          ['Europe', '03:00 UTC（11:00 Asia/Shanghai）'],
          ['Global', '10:00 UTC（18:00 Asia/Shanghai）'],
        ],
      },
    ],
  },
  ko: {
    sectionTitle: '진행 중·예정 이벤트 동선',
    intro:
      '공식 기간만 정리합니다. 게임 안 모든 퀘스트 목록이 아닙니다. Dirge of the End: Rewind는 이미 열려 있습니다. Catalyst Search와 Daily Life of a Palace Maid는 2026년 11월 26일 11:00 Asia/Shanghai에 시작됩니다. 상점 목록과 Leif 구간은 공식 공지에 있을 때만 적습니다.',
    verified:
      '2026년 11월 23일 Asia/Shanghai 기준으로 아래 공식 공지를 재확인했습니다. 이 시점 Steam 뉴스에는 2026년 11월 18일 18:30 Asia/Shanghai의 8.7 업데이트보다 새로운 글이 없었습니다.',
    sourceLabel: '공식 공지',
    bannerNote:
      '같은 일정의 Cecilia 픽업과 별개로, Daily Life of a Palace Maid 포인트 이벤트가 열립니다. 입구는 Secret Rabbit♥Hole이며 Cecilia를 뽑는 방법이 아닙니다. 한도와 상점 마감은 퀘스트 페이지를 보세요.',
    rabbitNote:
      '2026년 11월 26일 11:00 Asia/Shanghai부터 Secret Rabbit♥Hole에서 Daily Life of a Palace Maid 포인트·교환 이벤트도 열립니다. 케이스 파일의 일부가 아니며 단서 수집을 대체하지 않습니다. 자세한 동선은 퀘스트 페이지에 있습니다.',
    foundryLead:
      '현재 Emergency Mission(매력 주간)은 2026년 11월 26일 10:59 Asia/Shanghai에 끝납니다. 같은 날 11:00에 Catalyst Search가 시작됩니다. Dirge of the End: Rewind는 이미 열려 있으며 12월 17일 10:59까지입니다.',
    foundryLinkLabel: '퀘스트 페이지의 이벤트 동선',
    events: [
      {
        id: 'dirge-rewind',
        status: '지금 진행 중',
        title: 'Dirge of the End: Rewind',
        lead: '에피소드 6 지원 이벤트입니다. 안내에 적힌 챕터를 순서대로 클리어하고 보상을 받으세요. 스토리 공략이 아닙니다.',
        entryLabel: '입구 / 조건',
        entryBody: '로비 → 이벤트 → Ashen Apocalypse. 11월 19일 점검 후 시작.',
        rewardLabel: '보상 / 목적',
        rewardBody:
          '공식 공지: 기간 중 무료 Continue 버프, 미션과 참여로 Leif. 단계별 Leif 수량이나 버프 수치는 공지에 없습니다.',
        deadlineLabel: '기한',
        deadlineBody: '2026년 12월 17일 10:59 Asia/Shanghai (12/17 02:59 UTC).',
        doneLabel: '완료 기준',
        doneBody: '안내된 8개 챕터를 클리어했고, 다음 보상을 받기 전에 이전 미션 보상을 모두 수령했습니다. 이 순서는 공식 규칙입니다.',
        stuckLabel: '막혔을 때',
        stuckBody:
          '이전 미션 보상을 먼저 받으세요. 번체 중국어 4-8장은 컷신 이후 진행이 안 될 수 있습니다. 11/19 Known Issues는 일시적으로 다른 언어로 바꾸라고 했고, 11/20 패치가 이 문제를 대상으로 했습니다. 이 페이지는 완전히 수정되었다고 단정하지 않습니다. 클라이언트에서 확인하세요.',
        officialHref: DIRGE_HREF,
        officialLabel: 'STOVE 14638347 — Dirge of the End: Rewind',
        missionsTitle: '공식 미션 순서',
        missions: [
          ['1단계', 'Chapter 1-4 “Land of Miracles” 클리어'],
          ['2단계', 'Chapter 1-8 “Black Grail” 클리어'],
          ['3단계', 'Chapter 2-5 “The Star Rising in the North II” 클리어'],
          ['4단계', 'Chapter 2-8 “The Cult Embedded in Shadows” 클리어'],
          ['5단계', 'Chapter 3-4 “To the Black Grail Cult” 클리어'],
          ['6단계', 'Chapter 3-8 “False Covenant” 클리어'],
          ['7단계', 'Chapter 4-5 “A Dream Seen with Open Eyes” 클리어'],
          ['8단계', 'Chapter 4-8 “Dirge of the End” 클리어'],
        ],
      },
      {
        id: 'catalyst-search',
        status: '11월 26일 11:00 Asia/Shanghai 시작 — 오늘은 입장 불가',
        title: 'Emergency Mission! Catalyst Search',
        lead: '현재 매력 주간이 끝난 뒤 이어지는 다음 Emergency Mission입니다. 오늘의 Ruins Reclamation/매력 주간과 섞지 마세요.',
        entryLabel: '입구 / 조건',
        entryBody:
          '전투 → 이벤트 → Emergency Mission. 해금은 6번째 세계 Episode 1-6 클리어이며, Episode 6 전체가 아닙니다. 하루 5회, 이후 스카이스톤으로 최대 3회 추가(비용이 오른다고만 되어 있고 가격은 없음). Normal/Hard. 가디언과 펫은 가능, 서포터 불가, 펫 스킬 효과 미적용.',
        rewardLabel: '보상 / 목적',
        rewardBody:
          '클리어 시 골드와 이벤트 토큰 Ruins Exploration Coin. 100개당 아래 공식 표로 교환. 미션이 끝나면 교환소가 바로 닫히고 남은 코인은 삭제됩니다.',
        deadlineLabel: '기한',
        deadlineBody:
          '2026년 11월 26일 11:00–12월 3일 10:59 Asia/Shanghai (11/26 03:00–12/3 02:59 UTC). 현재 매력 주간은 한 시간 이른 11월 26일 10:59 Asia/Shanghai (11/26 02:59 UTC)에 끝납니다.',
        doneLabel: '완료 기준',
        doneBody: '계획한 입장 횟수를 소진하고 교환소가 닫히기 전에 코인을 교환했습니다.',
        stuckLabel: '막혔을 때',
        stuckBody:
          'Episode 1-6을 아직 클리어하지 않았다면 먼저 깨세요. 매력이 더 필요하면 11월 26일 10:59 Asia/Shanghai 전에 현재 Emergency Mission을 이용하세요. Catalyst Search와는 다른 주간입니다.',
        officialHref: CATALYST_HREF,
        officialLabel: 'STOVE 14638258 — Emergency Mission! Catalyst Search',
        exchangeTitle: '공식 교환 (1회 100토큰)',
        exchangeNote: '확률은 공식 공지를 옮긴 것이며, 추가 입장을 권하는 내용이 아닙니다.',
        exchangeTh: ['아이템', '수량', '확률'],
        exchangeRows: EXCHANGE_ROWS,
      },
      {
        id: 'palace-maid',
        status: '11월 26일 11:00 Asia/Shanghai 시작 — 오늘은 진행 불가',
        title: 'Daily Life of a Palace Maid',
        lead: 'Bunny Girl Maid Cecilia를 기념하는 포인트 이벤트입니다. 픽업과 같은 날 시작하지만 소환이 아닙니다.',
        entryLabel: '입구 / 조건',
        entryBody: '로비 → 이벤트 → Special Event → Secret Rabbit♥Hole. 케이스 파일이 아니며 단서 수집을 건너뛸 수 없습니다.',
        rewardLabel: '보상 / 목적',
        rewardBody:
          '공식 포인트 구간에 따라 Decorative Button과 Leif를 받아 Party Lost and Found에서 교환합니다. 품목마다 교환 횟수 제한이 있습니다. 공지에 상점 목록과 Leif 구간이 없어 여기서 만들지 않습니다.',
        deadlineLabel: '기한',
        deadlineBody:
          '플레이: 2026년 11월 26일 11:00 Asia/Shanghai (11/26 03:00 UTC)부터 12월 17일 각 서버 리셋까지(공식 문구). Party Lost and Found는 12월 17일 10:59 Asia/Shanghai (12/17 02:59 UTC)에 닫힙니다. 상점 마감을 제외하면 전 서버 동일 종료 시각으로 단정하지 마세요.',
        doneLabel: '완료 기준',
        doneBody: '일일 포인트를 만료 전에 사용하고, 상점이 닫히기 전에 버튼을 교환했습니다.',
        stuckLabel: '막혔을 때',
        stuckBody:
          '이벤트는 11월 26일 11:00 Asia/Shanghai 이후에 열립니다. Secret Rabbit♥Hole로 들어가고 케이스 파일 페이지로 들어가지 마세요. 공식 포인트 목록에는 Draft Arena가 포함됩니다. 파운드리에서는 Draft Arena가 12월 17일까지 Call of Chaos로 임시 대체됩니다. 월드 아레나는 12월 10일 점검 후 예정입니다. 클라이언트에서 실제로 열린 모드를 사용하세요.',
        officialHref: PALACE_HREF,
        officialLabel: 'STOVE 14638262 — Daily Life of a Palace Maid',
        pointsTitle: '공식 포인트 출처 (일일 최대 400, 미사용 점수는 만료)',
        points: [
          '아레나: 사용한 에너지만큼 점수(구매한 Spectral Core는 제외).',
          'Spectral Core 1개 소모: 160점.',
          'Arena / Draft Arena / World Arena / The Call of Chaos 1회 플레이: 80점.',
          '에너지를 쓰지 않는 스테이지(사이드 스토리 스토리 스테이지 등)는 점수가 없습니다.',
        ],
        resetTitle: '서버별 일일 리셋 (공식 UTC, Asia/Shanghai 환산)',
        resetTh: ['서버', '리셋 시각'],
        resetRows: [
          ['Korea / Asia / Japan', '18:00 UTC (Asia/Shanghai 다음 날 02:00)'],
          ['Europe', '03:00 UTC (11:00 Asia/Shanghai)'],
          ['Global', '10:00 UTC (18:00 Asia/Shanghai)'],
        ],
      },
    ],
  },
  th: {
    sectionTitle: 'เส้นทางอีเวนต์ที่เปิดอยู่และกำลังจะมา',
    intro:
      'รวบรวมเฉพาะช่วงเวลาอย่างเป็นทางการ ไม่ใช่เควสต์ในเกมทั้งหมด Dirge of the End: Rewind เปิดอยู่แล้ว Catalyst Search และ Daily Life of a Palace Maid เปิด 26 พ.ย. 2026 11:00 Asia/Shanghai รายการร้านค้าและขั้น Leif จะเขียนเมื่อประกาศทางการระบุเท่านั้น',
    verified:
      'ตรวจกับประกาศทางการด้านล่างเมื่อ 23 พ.ย. 2026 เขตเวลา Asia/Shanghai ข่าว Steam ณ รอบนี้ยังไม่มีโพสต์ใหม่กว่าอัปเดต 8.7 วันที่ 18 พ.ย. 2026 18:30 Asia/Shanghai',
    sourceLabel: 'ประกาศทางการ',
    bannerNote:
      'ในกำหนดการเดียวกับแบนเนอร์ Cecilia ยังมีอีเวนต์คะแนน Daily Life of a Palace Maid เข้าจาก Secret Rabbit♥Hole และไม่ใช้สุ่ม Cecilia เพดานคะแนนและเวลาปิดร้านดูที่หน้าเควสต์',
    rabbitNote:
      'ตั้งแต่ 26 พ.ย. 2026 11:00 Asia/Shanghai Secret Rabbit♥Hole ยังมีอีเวนต์คะแนนและแลกของ Daily Life of a Palace Maid ซึ่งไม่ใช่ส่วนหนึ่งของ Case Files และไม่ทดแทนการเก็บเบาะแส รายละเอียดอยู่ที่หน้าเควสต์',
    foundryLead:
      'Emergency Mission สัปดาห์ชาร์มปัจจุบันจบ 26 พ.ย. 2026 10:59 Asia/Shanghai และ Catalyst Search เริ่มวันเดียวกัน 11:00 Dirge of the End: Rewind เปิดอยู่แล้วถึง 17 ธ.ค. 10:59',
    foundryLinkLabel: 'เส้นทางอีเวนต์ในหน้าเควสต์',
    events: [
      {
        id: 'dirge-rewind',
        status: 'เปิดอยู่ตอนนี้',
        title: 'Dirge of the End: Rewind',
        lead: 'อีเวนต์สนับสนุน Episode 6 เคลียร์บทตามรายการแล้วรับรางวัลตามลำดับ นี่ไม่ใช่บทสรุปเนื้อเรื่อง',
        entryLabel: 'ทางเข้า / เงื่อนไข',
        entryBody: 'ล็อบบี้ → อีเวนต์ → Ashen Apocalypse เริ่มหลังปิดปรับปรุง 19 พ.ย.',
        rewardLabel: 'รางวัล / จุดประสงค์',
        rewardBody:
          'ประกาศทางการ: มีบัฟ Continue ฟรีระหว่างอีเวนต์ และได้ Leif จากภารกิจและการเข้าร่วม ประกาศไม่ได้ระบุจำนวน Leif รายขั้นหรือค่าตัวเลขของบัฟ',
        deadlineLabel: 'กำหนดสิ้นสุด',
        deadlineBody: '17 ธ.ค. 2026 10:59 Asia/Shanghai (12/17 02:59 UTC)',
        doneLabel: 'ถือว่าเสร็จเมื่อ',
        doneBody: 'เคลียร์ครบ 8 บทตามรายการ และรับรางวัลภารกิจก่อนหน้าทั้งหมดก่อนรับอันถัดไป นี่เป็นกฎทางการ',
        stuckLabel: 'ถ้าติด',
        stuckBody:
          'รับรางวัลภารกิจก่อนหน้าก่อน บท 4-8 ภาษาจีนตัวเต็มอาจไปต่อไม่ได้หลังคัตซีน ประกาศ Known Issues 19 พ.ย. ให้เปลี่ยนภาษาชั่วคราว และแพตช์ 20 พ.ย. ระบุปัญหานี้ หน้านี้ไม่ยืนยันว่าแก้ครบแล้ว ให้ดูในเกม',
        officialHref: DIRGE_HREF,
        officialLabel: 'STOVE 14638347 — Dirge of the End: Rewind',
        missionsTitle: 'ลำดับภารกิจทางการ',
        missions: [
          ['ขั้น 1', 'เคลียร์ Chapter 1-4 “Land of Miracles”'],
          ['ขั้น 2', 'เคลียร์ Chapter 1-8 “Black Grail”'],
          ['ขั้น 3', 'เคลียร์ Chapter 2-5 “The Star Rising in the North II”'],
          ['ขั้น 4', 'เคลียร์ Chapter 2-8 “The Cult Embedded in Shadows”'],
          ['ขั้น 5', 'เคลียร์ Chapter 3-4 “To the Black Grail Cult”'],
          ['ขั้น 6', 'เคลียร์ Chapter 3-8 “False Covenant”'],
          ['ขั้น 7', 'เคลียร์ Chapter 4-5 “A Dream Seen with Open Eyes”'],
          ['ขั้น 8', 'เคลียร์ Chapter 4-8 “Dirge of the End”'],
        ],
      },
      {
        id: 'catalyst-search',
        status: 'เปิด 26 พ.ย. 11:00 Asia/Shanghai — วันนี้ยังเข้าไม่ได้',
        title: 'Emergency Mission! Catalyst Search',
        lead: 'Emergency Mission สัปดาห์ถัดไปหลังสัปดาห์ชาร์มปัจจุบัน อย่าสับสนกับ Ruins Reclamation / สัปดาห์ชาร์มของวันนี้',
        entryLabel: 'ทางเข้า / เงื่อนไข',
        entryBody:
          'แบทเทิล → อีเวนต์ → Emergency Mission ปลดล็อกด้วยการเคลียร์ 6th World Episode 1-6 ไม่ใช่ทั้ง Episode 6 เข้าได้วันละ 5 ครั้ง หลังจากนั้นซื้อเพิ่มด้วย Skystone ได้สูงสุด 3 ครั้ง (ประกาศบอกว่าราคาเพิ่มแต่ไม่ได้ระบุราคา) มี Normal และ Hard พา Guardian และ Pet ได้ ใช้ Supporter ไม่ได้ เอฟเฟกต์สกิล Pet ใช้ไม่ได้',
        rewardLabel: 'รางวัล / จุดประสงค์',
        rewardBody:
          'เคลียร์ได้ทองและเหรียญอีเวนต์ Ruins Exploration Coin แลก 100 เหรียญต่อการสุ่มตามตารางทางการด้านล่าง เมื่อมิชชันจบ ร้านแลกปิดทันที และเหรียญที่เหลือจะถูกลบ',
        deadlineLabel: 'กำหนดสิ้นสุด',
        deadlineBody:
          '26 พ.ย. 2026 11:00 ถึง 3 ธ.ค. 2026 10:59 Asia/Shanghai (11/26 03:00–12/3 02:59 UTC) สัปดาห์ชาร์มปัจจุบันจบเร็วกว่าหนึ่งชั่วโมง คือ 26 พ.ย. 10:59 Asia/Shanghai (11/26 02:59 UTC)',
        doneLabel: 'ถือว่าเสร็จเมื่อ',
        doneBody: 'เล่นครบตามที่วางแผน และแลกเหรียญก่อนร้านปิด',
        stuckLabel: 'ถ้าติด',
        stuckBody:
          'ถ้ายังไม่เคลียร์ Episode 1-6 ให้ทำให้จบก่อน ถ้ายังต้องการชาร์ม ให้ใช้ Emergency Mission ปัจจุบันก่อน 26 พ.ย. 10:59 Asia/Shanghai ซึ่งเป็นคนละสัปดาห์กับ Catalyst Search',
        officialHref: CATALYST_HREF,
        officialLabel: 'STOVE 14638258 — Emergency Mission! Catalyst Search',
        exchangeTitle: 'การแลกทางการ (ครั้งละ 100 เหรียญ)',
        exchangeNote: 'ความน่าจะเป็นคัดลอกจากประกาศทางการ ไม่ได้แนะนำให้ซื้อรอบเพิ่ม',
        exchangeTh: ['ไอเทม', 'จำนวน', 'โอกาส'],
        exchangeRows: EXCHANGE_ROWS,
      },
      {
        id: 'palace-maid',
        status: 'เปิด 26 พ.ย. 11:00 Asia/Shanghai — วันนี้ยังเล่นไม่ได้',
        title: 'Daily Life of a Palace Maid',
        lead: 'อีเวนต์คะแนนฉลอง Bunny Girl Maid Cecilia เริ่มวันเดียวกับแบนเนอร์ แต่ไม่ใช่การสุ่มฮีโร่',
        entryLabel: 'ทางเข้า / เงื่อนไข',
        entryBody: 'ล็อบบี้ → อีเวนต์ → Special Event → Secret Rabbit♥Hole ไม่ใช่ Case Files และข้ามการเก็บเบาะแสไม่ได้',
        rewardLabel: 'รางวัล / จุดประสงค์',
        rewardBody:
          'ได้ Decorative Button และ Leif ตามขั้นคะแนนทางการ แลกที่ Party Lost and Found แต่ละสินค้ามีจำกัดจำนวนครั้ง ประกาศไม่ได้ระบุรายการร้านหรือขั้น Leif จึงไม่สมมติในหน้านี้',
        deadlineLabel: 'กำหนดสิ้นสุด',
        deadlineBody:
          'ช่วงเล่น: 26 พ.ย. 2026 11:00 Asia/Shanghai (11/26 03:00 UTC) ถึงรีเซ็ตของแต่ละเซิร์ฟเวอร์ในวันที่ 17 ธ.ค. (ถ้อยคำทางการ) Party Lost and Found ปิด 17 ธ.ค. 2026 10:59 Asia/Shanghai (12/17 02:59 UTC) นอกจากเวลาร้านปิดแล้ว อย่าสรุปว่าทั้งอีเวนต์จบชั่วโมงเดียวกันทุกเซิร์ฟ',
        doneLabel: 'ถือว่าเสร็จเมื่อ',
        doneBody: 'ใช้คะแนนรายวันก่อนหมดอายุ และแลกกระดุมก่อนร้านปิด',
        stuckLabel: 'ถ้าติด',
        stuckBody:
          'อีเวนต์ยังไม่เปิดจนกว่า 26 พ.ย. 11:00 Asia/Shanghai เข้าจาก Secret Rabbit♥Hole ไม่ใช่หน้า Case Files รายการคะแนนทางการรวม Draft Arena แต่บน Foundry โหมดนี้ถูกแทนที่ชั่วคราวด้วย Call of Chaos ถึง 17 ธ.ค. World Arena กำหนดหลังปิดปรับปรุง 10 ธ.ค. ให้ใช้โหมดที่เปิดจริงในเกม',
        officialHref: PALACE_HREF,
        officialLabel: 'STOVE 14638262 — Daily Life of a Palace Maid',
        pointsTitle: 'แหล่งคะแนนทางการ (สูงสุดวันละ 400 คะแนนที่ไม่ได้ใช้จะหมดอายุ)',
        points: [
          'อารีน่า: ได้คะแนนเท่ากับ Energy ที่ใช้ (ไม่นับการซื้อ Spectral Core)',
          'ใช้ Spectral Core 1 ชิ้น: 160 คะแนน',
          'เล่น Arena / Draft Arena / World Arena / The Call of Chaos 1 ครั้ง: 80 คะแนน',
          'ด่านที่ไม่ใช้ Energy เช่นด่านเนื้อเรื่อง Side Story จะไม่ได้คะแนน',
        ],
        resetTitle: 'รีเซ็ตรายวันตามเซิร์ฟเวอร์ (UTC ทางการ พร้อม Asia/Shanghai)',
        resetTh: ['เซิร์ฟเวอร์', 'เวลารีเซ็ต'],
        resetRows: [
          ['Korea / Asia / Japan', '18:00 UTC (02:00 วันถัดไป เขต Asia/Shanghai)'],
          ['Europe', '03:00 UTC (11:00 Asia/Shanghai)'],
          ['Global', '10:00 UTC (18:00 Asia/Shanghai)'],
        ],
      },
    ],
  },
};

export function isActiveEventsLocale(locale: Locale): locale is GrowthLocale {
  return locale in ACTIVE_EVENTS;
}
