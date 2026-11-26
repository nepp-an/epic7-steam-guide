export const CASE_OG_IMAGE: Record<'en' | 'ko' | 'zh-tw' | 'th', string> = {
  en: '/images/og-case-files.webp',
  ko: '/images/og-case-files-ko.webp',
  'zh-tw': '/images/og-case-files-zh-tw.webp',
  th: '/images/og-case-files-th.webp',
};

export const CASE_VISUAL_COPY: Record<'en' | 'ko' | 'zh-tw' | 'th', {
  answerBefore: string;
  answerAfter: string;
  windowEnd: string;
  windowBannerAfter: string;
  bannerDates: string;
  eventName: string;
  eventOverview: string;
  questTask: string;
  questSection: string;
  openFile: string;
  decisive: string;
  diagramNote: string;
  shortTitles: [string, string, string];
  types: [string, string, string];
  enterTitle: string;
  enterSteps: [string, string, string];
  boardTitle: string;
  boardSteps: [[string, string], [string, string], [string, string], [string, string]];
  troubleVisualTitle: string;
  troubleVisual: [[string, string], [string, string], [string, string]];
}> = {
  en: {
    answerBefore: "Trusty Sidekick Alencia's Case Files: open Lobby → ",
    answerAfter: ' → Case Files. Check your case number, collect all 10 clues and complete both O/X categories before accusing. Choose a case below; answers stay hidden until you open them.',
    windowEnd: 'Case Files and the side story end 10 December 2026, 10:59 Asia/Shanghai (02:59 UTC).',
    windowBannerAfter: ' ended 19 November. Check the in-game timer before spending.',
    bannerDates: 'The separate Lucky Board and Moro Mystic banner',
    eventName: 'Secret Rabbit♥Hole',
    eventOverview: 'Secret Rabbit♥Hole event overview',
    questTask: 'Collect Case Files clues',
    questSection: 'Case Files section on the quests hub',
    openFile: 'Open this case',
    decisive: 'Decisive clue',
    diagramNote: 'Illustrative diagram — not a game screenshot.',
    shortTitles: ['Missing plushie', 'Broken gramophone', 'Missing safe item'],
    types: ['Time + location', 'Nail polish + arrival order', 'Food + possession'],
    enterTitle: "Trusty Sidekick Alencia's Case Files — how to enter",
    enterSteps: ['Lobby', 'Secret Rabbit♥Hole', 'Case Files'],
    boardTitle: 'How a case unlocks',
    boardSteps: [
      ['10 clues', 'Collect all ten for the current case only.'],
      ['Both boards', 'Fill every question mark in both O/X categories.'],
      ['Culprit Clue', 'Unlocks after the clues and both boards are complete.'],
      ['Accuse', 'Compare the clue with your board, then accuse.'],
    ],
    troubleVisualTitle: 'If a control stays locked',
    troubleVisual: [
      ['Magnifying glasses', 'Claim the daily Achievement Rewards first.'],
      ['Culprit Clue', 'It stays locked until this case has all 10 clues and a full board.'],
      ['Accuse', 'A grey Accuse means a question mark or a conflict remains. Use Eraser or Reset.'],
    ],
  },
  ko: {
    answerBefore: '로비 → ',
    answerAfter: ' → 사건수첩으로 이동하세요. 사건 번호를 확인하고 해당 사건의 단서 10개와 두 종류의 O/X 표를 완성한 뒤 지목하세요. 아래에서 사건을 고르면 정답을 직접 펼쳐 볼 수 있습니다.',
    windowEnd: '사건수첩과 서브스토리 종료: 2026년 12월 10일 10:59 Asia/Shanghai (02:59 UTC).',
    windowBannerAfter: '는 11월 19일에 종료되었습니다. 재화 사용 전 게임 타이머를 확인하세요.',
    bannerDates: '별도 럭키보드와 모로 신비 소환',
    eventName: '시크릿 래빗홀',
    eventOverview: 'Secret Rabbit♥Hole 이벤트 개요',
    questTask: '사건수첩 단서 수집',
    questSection: '퀘스트 허브의 Case Files 절',
    openFile: '이 사건 열기',
    decisive: '결정적 단서',
    diagramNote: '설명용 도해이며 게임 스크린샷이 아닙니다.',
    shortTitles: ['사라진 인형', '고장 난 축음기', '금고 분실물'],
    types: ['시간 × 장소', '매니큐어 × 도착 순서', '음식 × 소지품'],
    enterTitle: '입장 경로',
    enterSteps: ['로비', '시크릿 래빗홀', '사건수첩'],
    boardTitle: '사건 해제 순서',
    boardSteps: [
      ['단서 10개', '지금 진행 중인 사건에서만 10개를 모으세요.'],
      ['두 종류의 표', '두 O/X 범주의 물음표를 모두 채우세요.'],
      ['범인 단서', '단서와 표가 모두 끝나야 잠금이 해제됩니다.'],
      ['지목', '단서를 표와 비교한 뒤 지목하세요.'],
    ],
    troubleVisualTitle: '버튼이 잠겨 있을 때',
    troubleVisual: [
      ['돋보기', '먼저 일일 업적 보상을 받으세요.'],
      ['범인 단서', '해당 사건의 단서 10개와 완성된 표가 있어야 열립니다.'],
      ['지목', '회색 지목 버튼은 물음표나 모순이 남았다는 뜻입니다. 지우개 또는 초기화를 사용하세요.'],
    ],
  },
  'zh-tw': {
    answerBefore: '入口：大廳 → ',
    answerAfter: ' → 事件手冊。先核對案號，收齊當案10條線索並填完兩類O/X表，再指認。下方案號可直接跳轉；答案預設收合，自行選擇是否展開。',
    windowEnd: '事件手冊與支線故事至2026年12月10日10:59（Asia/Shanghai；02:59 UTC）。',
    windowBannerAfter: '已於11月19日結束。花資源前請核對遊戲倒數。',
    bannerDates: '獨立的幸運轉盤與茉蘿神秘召喚',
    eventName: '秘密兔子洞',
    eventOverview: 'Secret Rabbit♥Hole 活動概要',
    questTask: '收集事件手冊線索',
    questSection: '任務頁上的事件手冊說明',
    openFile: '打開本案',
    decisive: '決定性線索',
    diagramNote: '此為說明用示意圖，不是遊戲截圖。',
    shortTitles: ['遺失的玩偶', '壞掉的留聲機', '保險箱失物'],
    types: ['時間 × 地點', '指甲油 × 抵達順序', '食物 × 持有物'],
    enterTitle: '怎麼進入',
    enterSteps: ['大廳', '秘密兔子洞', '事件手冊'],
    boardTitle: '一案如何解鎖',
    boardSteps: [
      ['10條線索', '只計算你正在查的這一案。'],
      ['兩類表格', '把兩類O/X表的問號全部填完。'],
      ['犯人線索', '線索與表格都完成後才會解鎖。'],
      ['指認', '先把線索和表格對完，再指認。'],
    ],
    troubleVisualTitle: '按鈕仍鎖住時',
    troubleVisual: [
      ['放大鏡', '先領取每日成就獎勵。'],
      ['犯人線索', '必須收齊當案10條線索並填完整表才會解鎖。'],
      ['指認', '灰色指認表示還有問號或矛盾。用橡皮擦改單格，或重設後重排。'],
    ],
  },
  th: {
    answerBefore: 'ล็อบบี้ → ',
    answerAfter: ' → แฟ้มคดี ตรวจเลขคดี เก็บเบาะแส 10 ข้อของคดีนี้ให้ครบ และกรอกตาราง O/X ทั้งสองหมวดก่อนกล่าวหา เลือกคดีด้านล่างได้ คำตอบถูกซ่อนไว้จนกว่าจะเปิด',
    windowEnd: 'Case Files และเนื้อเรื่องรองสิ้นสุด 10 ธันวาคม 2026 เวลา 10:59 Asia/Shanghai (02:59 UTC).',
    windowBannerAfter: 'จบแล้วเมื่อ 19 พฤศจิกายน ตรวจตัวนับในเกมก่อนใช้ทรัพยากร',
    bannerDates: 'Lucky Board และตู้ Mystic ของ Moro',
    eventName: 'Secret Rabbit♥Hole',
    eventOverview: 'ภาพรวมกิจกรรม Secret Rabbit♥Hole',
    questTask: 'เก็บเบาะแสแฟ้มคดี',
    questSection: 'ส่วนแฟ้มคดีในหน้าเควสต์',
    openFile: 'เปิดคดีนี้',
    decisive: 'เบาะแสชี้ตัว',
    diagramNote: 'แผนภาพประกอบ — ไม่ใช่ภาพหน้าจอในเกม',
    shortTitles: ['ตุ๊กตาที่หาย', 'เครื่องเล่นแผ่นเสียงพัง', 'ของหายในตู้เซฟ'],
    types: ['เวลา × สถานที่', 'สีเล็บ × ลำดับมาถึง', 'อาหาร × สิ่งของ'],
    enterTitle: 'วิธีเข้า',
    enterSteps: ['ล็อบบี้', 'Secret Rabbit♥Hole', 'แฟ้มคดี'],
    boardTitle: 'ลำดับการปลดล็อกคดี',
    boardSteps: [
      ['เบาะแส 10 ข้อ', 'นับเฉพาะคดีที่กำลังทำอยู่'],
      ['ตารางสองหมวด', 'เติมเครื่องหมายคำถามในหมวด O/X ทั้งสองให้ครบ'],
      ['เบาะแสผู้กระทำผิด', 'ปลดล็อกเมื่อเบาะแสและตารางครบ'],
      ['กล่าวหา', 'เทียบเบาะแสกับตาราง แล้วจึงกล่าวหา'],
    ],
    troubleVisualTitle: 'เมื่อปุ่มยังล็อก',
    troubleVisual: [
      ['แว่นขยาย', 'รับรางวัลความสำเร็จรายวันก่อน'],
      ['เบาะแสผู้กระทำผิด', 'จะเปิดเมื่อคดีนี้มีเบาะแส 10 ข้อและตารางครบ'],
      ['กล่าวหา', 'ปุ่มสีเทาแปลว่ายังมีเครื่องหมายคำถามหรือข้อมูลขัดแย้ง ใช้ Eraser หรือ Reset'],
    ],
  },
};
