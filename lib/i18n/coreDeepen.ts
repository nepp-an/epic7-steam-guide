import type { Locale } from '@/lib/site';

/**
 * Extra operational sections for the three core locales.
 * Only locales with a populated entry are rendered. This cut fills `ko`.
 * zh-tw / th remain empty until their own deepen batch.
 * Do not use this to change the English /steam-transfer/ first screen.
 */
export type DeepenCard = {
  title: string;
  body: string;
};

export type DeepenBlock = {
  h2: string;
  lead?: string;
  cards?: readonly DeepenCard[];
  steps?: readonly string[];
  limits?: readonly string[];
  sources?: readonly (readonly [href: string, label: string, date: string])[];
};

export const CORE_DEEPEN: Partial<
  Record<
    '/' | '/steam-transfer/' | '/foundry/' | '/faq/' | '/download/' | '/heroes/' | '/quests/',
    Partial<Record<Locale, DeepenBlock>>
  >
> = {
  '/': {
    ko: {
      h2: '세 경로를 고르기 전에',
      lead:
        '이 허브는 기존 진행을 유지하는 경로, 파운드리 신서버로 새로 시작하는 경로, 공식 설치만 하는 경로를 나눕니다. 계정 이전과 신서버 입장은 같은 작업이 아닙니다. 핵증일 2026-11-10 기준 파운드리 길드전과 월드 아레나는 아직 시작하지 않았습니다.',
      cards: [
        {
          title: '기존 진행을 유지하려면',
          body:
            'Steam에서 새 후계자를 키우기 전에, STOVE에서 이메일/SNS 로그인을 Steam Simple Login으로 전환하세요. 절차·충돌 복구·되돌릴 수 없는 삭제 경고는 [[계정 이전 가이드|/steam-transfer/]]와 [[데모 삭제 경고|/demo-delete-warning/]]에 있습니다. 근거: STOVE Steam FAQ view/14378309, 데모 주의 view/14581667.',
        },
        {
          title: '파운드리에서 새로 시작하려면',
          body:
            '의도한 로그인인지 확인한 뒤 파운드리 캐릭터를 만드세요. 로그인 전환만으로 레거시 후계자가 파운드리로 가지 않습니다. 일정은 [[파운드리 가이드|/foundry/]]를 따릅니다. 길드전은 2026-11-19 점검 후 도입, 2026-11-21 03:00 UTC 방어팀 구성, 2026-11-23 03:00 UTC 매칭입니다. 월드 아레나는 2026-12-10 점검 후이며, 공식 공지는 KST와 UTC를 각각 표기했습니다.',
        },
        {
          title: '설치만 하려면',
          body:
            '공식 스토어 app 5019180만 사용하세요. 설치 체크리스트, 데모와 정식 클라이언트 경계, UNCHEATER 안내는 [[다운로드|/download/]]와 [[Steam 안내|/steam-notes/]]에 있습니다. 미러·크랙·제3자 설치 파일은 쓰지 마세요.',
        },
      ],
      limits: [
        '이 사이트는 Smilegate·STOVE·Valve·Steam과 무관한 비공식 가이드입니다. 지원 창구가 아니며 이전 성공이나 복구를 약속하지 않습니다.',
        '케이스 파일(Case Files) 허브는 영어 페이지만 있습니다. 한국어 경로 /ko/case-files/ 는 만들지 않았고, 홈 CTA는 유효한 영어 페이지 /case-files/ 로 연결되며 “(영어)”로 표시합니다.',
        '일정은 점검 후 바뀔 수 있습니다. 실행 전에 STOVE/Steam 원문을 다시 확인하세요.',
      ],
      sources: [
        [
          'https://page.onstove.com/epicseven/global/view/14378309',
          'STOVE Steam FAQ',
          '본 가이드에서 로그인 전환·크로스플레이 문구의 근거로 인용, 핵증 2026-11-10',
        ],
        [
          'https://store.steampowered.com/app/5019180/',
          'Steam 공식 스토어 app 5019180',
          '공식 설치 입구, 핵증 2026-11-10',
        ],
        [
          'https://store.steampowered.com/news/app/5019180/view/1848664643349012',
          'Steam Foundry 길드전 공지',
          '게시 2026-11-07 — 11/19 도입, 11/21 03:00 UTC 방어팀, 11/23 03:00 UTC 매칭',
        ],
      ],
    },
  },
  '/steam-transfer/': {
    ko: {
      h2: '막혔을 때 조건별 순서',
      lead:
        '아래는 이미 있는 체크리스트와 충돌 복구를 보조하는 결정 순서입니다. 공식 화면 문구가 다르면 항상 STOVE를 따릅니다. 이 페이지는 계정 복구나 이전 성공을 보증하지 않습니다.',
      steps: [
        'Steam이 지금 인가한 STOVE 신원을 먼저 확인하세요. 옛 영웅이 없는 새 후계자면, 빈 Steam 연동 STOVE 계정일 가능성이 큽니다.',
        '그 경우 인게임 삭제로 「정리」하지 마세요. STOVE 데모 주의(view/14581667)에 따르면, Steam 로그인 전환 후 인게임 삭제는 원서버 진행을 지울 수 있습니다.',
        '복구 순서는 탈퇴 → (안내된 대기 기간) → 원래 이메일/SNS 로그인 전환입니다. 자세한 단계는 위 충돌 복구와 [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]를 따릅니다.',
        '데모와 정식 클라이언트를 혼용 중이면, 정식 app 5019180 설치 여부를 [[다운로드 체크리스트|/download/]]에서 먼저 확인하세요. 데모 잔여 로그인이 「이미 연동됨」을 만들 수 있습니다.',
        '파운드리 길드전·월드 아레나를 기대하고 있다면, 로그인 전환과 신서버 입장을 구분해 [[파운드리|/foundry/]] 일정을 보세요. 핵증일 2026-11-10 기준 길드전(11/19 도입 · 11/21 방어팀 · 11/23 매칭)과 WA(12/10 점검 후)는 아직 시작하지 않았습니다.',
        '대기 기간을 건너뛰거나 연동을 강제로 푸는 제3자 도구는 쓰지 마세요. 막히면 스크린샷을 남기고 STOVE 공식 고객센터만 이용하세요.',
      ],
      limits: [
        '이전은 로그인 경로를 바꿀 뿐, 레거시 후계자를 파운드리로 옮기지 않습니다.',
        '구매·미수령 보상·에픽패스 이전 범위는 공식 FAQ 문구를 실행 직전에 다시 확인하세요. 이 사이트는 결과를 약속하지 않습니다.',
      ],
      sources: [
        [
          'https://page.onstove.com/epicseven/global/view/14378309',
          'STOVE Steam FAQ',
          '전환·데이터 유지·크로스플레이 문구, 핵증 2026-11-10',
        ],
        [
          'https://page.onstove.com/epicseven/global/view/14581667',
          'STOVE 데모/계정 삭제 주의',
          '전환 후 인게임 삭제 위험, 핵증 2026-11-10',
        ],
      ],
    },
  },
  '/foundry/': {
    ko: {
      h2: '길드전·월드 아레나, 아직 시작하지 않은 일정',
      lead:
        '핵증일 2026-11-10 기준으로 파운드리 길드전과 월드 아레나는 미래의 단계입니다. 「진행 중」으로 읽히지 않게, 공식 공지의 세 지점과 시즌 시작만 적습니다.',
      cards: [
        {
          title: '2026-11-19 점검 후 — 도입',
          body:
            'Steam 2026-11-07 공지에 따른 길드전 도입 시점입니다. 그 전에 파운드리 캐릭터로 길드에 가입하거나 생성하는 편이 안전합니다. 로그인 전환만으로 레거시 길드가 파운드리 길드전에 등록되지 않습니다.',
        },
        {
          title: '2026-11-21 03:00 UTC — 방어팀 구성',
          body:
            'Form Defense Team이 열리는 시각입니다(아시아/상하이 11:00). 이 시각에도 가입이 Pending이면 첫 방어팀 구성을 놓칠 수 있습니다. 이 시각을 길드전 전체의 「시작일」로 줄여 쓰지 마세요.',
        },
        {
          title: '2026-11-23 03:00 UTC — 매칭',
          body:
            '길드전 매칭이 열리는 시각입니다(아시아/상하이 11:00). 도입·방어팀·매칭은 한 날짜가 아닙니다.',
        },
        {
          title: '2026-12-10 점검 후 — 월드 아레나',
          body:
            '월드 아레나는 12/10 점검 후로만 적습니다. 같은 공식 소스에서 KST와 UTC가 각각 표기된 적이 있어, 단일 시점을 이미 확정된 사실처럼 쓰지 않습니다.',
        },
      ],
      limits: [
        '점검 후 일정이 바뀔 수 있습니다. 이 페이지는 일정 보장을 하지 않습니다.',
        '팩트 캘린더 그림 diagram-foundry-calendar.webp 는 길드전을 11/21 한 줄로 요약해 공식 세 지점과 어긋나, 본문에서는 인용하지 않습니다. 파일은 삭제하지 않았습니다.',
      ],
      sources: [
        [
          'https://store.steampowered.com/news/app/5019180/view/1848664643349012',
          'Steam Foundry 길드전 공지',
          '2026-11-07 게시 — 11/19 도입, 11/21 03:00 UTC 방어팀, 11/23 03:00 UTC 매칭',
        ],
        [
          'https://page.onstove.com/epicseven/global/view/14571828',
          'STOVE Foundry 공지',
          '파운드리 일정 인용, 핵증 2026-11-10',
        ],
      ],
    },
  },
  '/faq/': {
    ko: {
      h2: '계정·클라이언트·지역·공식 지원 점검',
      lead:
        '아래는 자주 묻는 막힘을 유형별로 나눈 점검입니다. 같은 한국어 페이지를 우선 열고, 영어 페이지만 있는 대상은 영어라고 밝힙니다.',
      cards: [
        {
          title: '계정 / 로그인',
          body:
            '빈 후계자·이미 연동됨·진행 실종은 대부분 잘못된 Steam-STOVE 연동입니다. [[계정 이전|/steam-transfer/]]의 탈퇴→전환을 따르고, 전환 후 인게임 삭제는 [[데모 삭제 경고|/demo-delete-warning/]]를 읽기 전에는 누르지 마세요.',
        },
        {
          title: '클라이언트 / 실행',
          body:
            '공식 app 5019180인지, UNCHEATER 상승 권한이 허용됐는지, 드라이버와 파일 무결성을 확인하세요. 상세 순서는 [[다운로드|/download/]]와 [[Steam 안내|/steam-notes/]]에 있습니다. 2026-11-05 패치로 간헐적 Steam 실행 실패가 언급되었습니다. 계속 재현되면 STOVE Known Issues view/14608118을 확인하세요.',
        },
        {
          title: '지역 / 서버',
          body:
            '파운드리 길드전은 파운드리 캐릭터와 파운드리 길드가 필요합니다. 핵증일 2026-11-10 기준 길드전은 11/19 도입, 11/21 방어팀, 11/23 매칭으로 아직 시작하지 않았습니다. 일정은 [[파운드리 길드전|/foundry/#guild-war]]을 보세요.',
        },
        {
          title: '공식 지원',
          body:
            '막히면 STOVE 공식 고객센터만 이용하세요. 디스코드 DM의 「즉시 해제」나 크랙 설치 파일은 쓰지 마세요. Case Files 허브는 [[영어 Case Files|/case-files/]]만 있으며, 한국어 전용 페이지는 없습니다.',
        },
      ],
      sources: [
        [
          'https://page.onstove.com/epicseven/global/view/14378309',
          'STOVE Steam FAQ',
          '핵증 2026-11-10',
        ],
        [
          'https://page.onstove.com/epicseven/global/view/14608118',
          'STOVE Known Issues',
          '컨트롤러 UI / 크래시 등, 핵증 2026-11-10',
        ],
      ],
    },
  },
  '/download/': {
    ko: {
      h2: '공식 설치와 데모 경계',
      lead:
        '설치는 공식 Steam 스토어 app 5019180에서만 시작하세요. 다운로드 자체가 진행도를 옮기지 않습니다. 진행 유지와 파운드리 신규, 안티치트 통과는 서로 다른 결정입니다.',
      steps: [
        '기존 진행이 필요하면 Play를 누르기 전에 [[계정 이전|/steam-transfer/]]을 끝내세요.',
        '스토어 사양(윈도우 10 64비트, 약 10GB 여유 등)과 디스크 공간을 확인하세요. 수치는 Steam 스토어 표기를 다시 대조합니다.',
        '첫 실행에서 커널급 UNCHEATER 권한 창을 허용하세요. 회사/학교 PC가 드라이버를 막으면 우회 파일을 쓰지 말고, 같은 전환 계정을 STOVE PC나 개인 PC에서 쓰세요.',
        '데모와 정식 클라이언트를 같은 「정리」로 취급하지 마세요. 전환 후 인게임 삭제는 [[데모 삭제 경고|/demo-delete-warning/]]가 경고하는 원서버 데이터 손실 경로입니다.',
        '설치 후 계정 메뉴에서 Steam이 인가한 STOVE 신원을 확인하세요. 새 후계자면 재화나 시간을 쓰기 전에 복구 절차를 여세요.',
      ],
      limits: [
        '이 사이트는 설치 파일·미러·그레이 코드를 호스팅하지 않습니다.',
        '안티치트 우회나 「빠른 다운로드」 크랙은 악성코드·약관 위반 위험이 있습니다.',
      ],
      sources: [
        [
          'https://store.steampowered.com/app/5019180/',
          'Steam 공식 스토어 app 5019180',
          '공식 설치 입구, 핵증 2026-11-10',
        ],
        [
          'https://page.onstove.com/epicseven/global/view/14581667',
          'STOVE 데모/계정 삭제 주의',
          '핵증 2026-11-10',
        ],
      ],
    },
  },
  '/heroes/': {
    ko: {
      h2: '용도와 획득·장비 제약',
      lead:
        '이 페이지는 Steam/파운드리 온보딩용 역할 묶음입니다. 버전 강약 순위나 승률을 만들지 않습니다. 스킬 배수와 재료는 게임 안 툴팁이 기준입니다.',
      cards: [
        {
          title: '어디에 쓰나',
          body:
            '초반 에피소드 클리어, 상태이상 대비 서포트, 사냥(특히 초반 속도 세트를 노리는 와이번)처럼 용도별로 묶었습니다. 파운드리 성장 버프는 레벨링 속도를 바꿀 수 있어도, 전직 재료와 장비 제작 관문을 없애지 않습니다.',
        },
        {
          title: '어떻게 얻나',
          body:
            '튜토리얼/스토리 지급, 전직(specialty change) 재료, 소환·이벤트 배포는 경로가 다릅니다. 무료 전직 후보를 「무조건 최강」으로 적지 않습니다. 재료와 해금 조건은 퀘스트 로그와 인게임 제작 창에서 확인하세요.',
        },
        {
          title: '장비 제약',
          body:
            '초반 사냥은 필요한 세트·주스탯을 목표로 하는 편이 안전합니다. 이 사이트는 세트 우선순위를 시즌 티어처럼 고정하지 않으며, 제작 비용과 촉매는 클라이언트 수치가 바뀌면 그 화면을 따릅니다.',
        },
      ],
      limits: [
        '배너 확률이나 공식 스플래시 아트를 미러하지 않습니다. 허브 이미지는 Steam CDN 인용, 자작 다이어그램, 자작 속성색 아바타입니다.',
        '커뮤니티 위키는 Further reading에만 두고, 본문의 기본 경로는 사이트 안에 둡니다.',
      ],
    },
  },
  '/quests/': {
    ko: {
      h2: '퀘스트 경로를 나누는 이유',
      lead:
        '메인·일일·주간은 목적과 리셋 주기가 다릅니다. 파운드리와 레거시는 퀘스트 체크가 분리되어 있습니다. 로그인 전환은 레거시 진행만 유지하며 파운드리 미션을 자동 완료하지 않습니다.',
      limits: [
        '케이스 파일은 전투 퀘스트가 아니라 기간 한정 미니게임입니다. 허브 페이지는 [[영어 Case Files|/case-files/]]만 있고, 한국어 전용 경로는 없습니다.',
        '파운드리 길드전을 주간 숙제와 맞출 때는 단일 11/21이 아니라 11/19 도입, 11/21 방어팀, 11/23 매칭을 쓰세요. 핵증일 2026-11-10 기준 아직 시작하지 않았습니다.',
      ],
      sources: [
        [
          'https://store.steampowered.com/news/app/5019180/view/1848664643349012',
          'Steam Foundry 길드전 공지',
          '2026-11-07 — 주간/길드 일정과 교차 확인',
        ],
        [
          'https://page.onstove.com/epicseven/global/view/14606293',
          'STOVE Case Files 공지',
          '사이드 이벤트 기간, 핵증 2026-11-10',
        ],
      ],
    },
  },
};
