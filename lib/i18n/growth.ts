import type { Locale } from '@/lib/site';

export const GROWTH_COPY = {
  "en": {
    "homeTitle": "What do you need to do in Epic Seven?",
    "homeAnswer": "Keep your existing account, build a new Foundry character, or finish the current event. Choose the path that matches your account before you spend resources.",
    "paths": [
      [
        "Keep my old progress",
        "Check the STOVE → Steam conversion and wrong-account steps. This does not move your character to Foundry.",
        "/steam-transfer/"
      ],
      [
        "Grow on Foundry",
        "Start with today’s claims, this week’s dungeon and the Rank 70 Luna milestone.",
        "/foundry/#today"
      ],
      [
        "Solve an event case",
        "Choose Case 1, 2 or 3; reveal spoilers only when you want them.",
        "/case-files/"
      ]
    ],
    "routeTitle": "Foundry — your next action",
    "routeAnswer": "New Foundry character: claim daily summons, check time-limited mail, then work toward Rank 70. Existing roster: use the transfer guide instead; changing login does not change servers.",
    "today": "Today: claims and clues",
    "week": "This week: finish the current dungeon",
    "next": "Next milestone: Rank 70",
    "schedule": "Official timetable checked 23 Nov 2026: Foundry Guild War matchmaking reached its scheduled start on 23 Nov, 03:00 UTC. The separate GW login-gift window ended then; it is no longer a login-to-claim event. This confirms the published timetable, not an actual match or attack result. Check the client for your guild’s availability.",
    "mode": "Draft Arena is temporarily replaced by The Call of Chaos during Season 2 and its grace period, ending 17 Dec, 02:59 UTC. World Arena is scheduled after the 10 Dec maintenance.",
    "full": "Full calendar, reward reference and background",
    "questAnswer": "Start with expiring claims, then daily summons and case clues. Use this five-task checklist to plan the current Foundry window; it is not a full list of every in-game daily.",
    "checkNote": "Checks are for this tab only; they do not claim rewards, track your game account or reset with the server. Confirm server timers in the client.",
    "entry": "Entry / eligibility",
    "reward": "Reward / purpose",
    "deadline": "Deadline",
    "done": "Done when",
    "source": "Official rules",
    "reset": "Clear checks",
    "progress": "Tasks checked",
    "complete": "Plan checked — verify the rewards in your game before leaving.",
    "history": "Event details and past notices",
    "caseLink": "Case Files answers are optional spoilers on the dedicated case page.",
    "tasks": [
      [
        "summons",
        "today",
        "Claim daily Foundry summons",
        "Event → Welcome! Foundry Server → Summon Support; Foundry character.",
        "+20 free Covenant summons daily. 1,260 is the full-window maximum, not a reward for joining late.",
        "31 Dec 2026, 02:59 UTC; use the client’s daily-reset timer.",
        "Today’s free summons used; do not spend bookmarks by mistake."
      ],
      [
        "mail",
        "today",
        "Check the one-time growth mail",
        "Log in on Foundry; open the mailbox and read each mail’s expiry.",
        "Official one-time pack: Penguins, rune and catalyst chests, and Spirit Blooms. Official quantities, and which other Foundry gifts have already ended, are in the Claim windows table.",
        "Login window ended 19 Nov 2026, 02:59 UTC; if a copy is already in the mailbox, it stores for 7 days.",
        "Eligible mail claimed before its own timer expires."
      ],
      [
        "case",
        "today",
        "Collect Case Files clues",
        "Lobby → Secret Rabbit♥Hole → Case Files; finish the previous case first.",
        "Two daily magnifying glasses; one per new question. All 10 clues plus completed O/X boards unlock the decisive clue.",
        "10 Dec 2026, 02:59 UTC; stop daily claims after all cases are completed.",
        "Daily glasses claimed and current-case clues recorded; answer key cannot skip collection."
      ],
      [
        "catalyst",
        "week",
        "Use the current Catalyst Search window",
        "Battle → Event → Emergency Mission; clear 6th World Episode 1-6.",
        "Ruins Exploration Coins for the official catalyst exchange; 5 daily entries, optional Skystone recharges.",
        "3 Dec 2026, 02:59 UTC. Exchange closes too; leftover coins are removed.",
        "Chosen entries finished and coins exchanged before closing. The previous charm week / Ruins Reclamation already ended 26 Nov 2026, 02:59 UTC."
      ],
      [
        "luna",
        "next",
        "Work toward Rank 70 Luna",
        "Event → Welcome! Foundry Server → Luna Joins; Foundry account Rank 70.",
        "Limited 5★ Luna, Glacial Purity skin and 15 Experienced Penguins.",
        "31 Dec 2026, 02:59 UTC.",
        "Rank 70 reached and reward claimed. Follow story unlocks and use available growth buffs; no unverified speed-run promise."
      ]
    ]
  },
  "zh-tw": {
    "homeTitle": "你現在要解決哪個問題？",
    "homeAnswer": "保留原帳號、培養Foundry新角色，或完成當前活動？先選對路線，再投入資源。",
    "paths": [
      [
        "保留老帳號進度",
        "核對STOVE轉Steam與錯綁處理；登入方式轉換不會把角色搬到Foundry。",
        "/steam-transfer/"
      ],
      [
        "Foundry新服成長",
        "先領今天獎勵，再做本週地下城，朝Rank70露娜目標前進。",
        "/foundry/#today"
      ],
      [
        "事件手冊卡關",
        "選第1、2、3案，答案預設收合，需要時才看劇透。",
        "/case-files/"
      ]
    ],
    "routeTitle": "Foundry — 下一步做什麼",
    "routeAnswer": "Foundry新角色：領每日召喚、檢查限時郵件，再推進Rank70。要保留原服角色請走轉移指南；變更登入不會換伺服器。",
    "today": "今天：領獎與蒐集線索",
    "week": "本週：完成當期地下城",
    "next": "下一里程碑：Rank70",
    "schedule": "2026年11月23日重核官方日程：Foundry公會戰配對已到11月23日 03:00 UTC的排程開始點；獨立的團戰登入禮同時截止，現在不是登入即可領取的活動。這只確認公告時程，不代表已實測配對或戰果；請在遊戲查看自己公會的可用狀態。",
    "mode": "競技場選秀於混沌的呼喚第2季及寬限期暫停，至12月17日 02:59 UTC；世界競技場預定12月10日維護後開放。",
    "full": "完整日曆、獎勵資料與背景",
    "questAnswer": "先處理即將到期的領取，再做每日召喚和案件線索。這份5項清單針對當期Foundry路線，不是全部遊戲每日任務。",
    "checkNote": "勾選只在本分頁有效，不會替你領獎、不連動帳號，也不隨伺服器重設；實際倒數請看遊戲。",
    "entry": "入口／條件",
    "reward": "獎勵／用途",
    "deadline": "期限",
    "done": "完成判據",
    "source": "官方規則",
    "reset": "清除勾選",
    "progress": "已勾任務",
    "complete": "規劃已勾完，離開前請在遊戲確認實際獎勵。",
    "history": "活動細節與歷史公告",
    "caseLink": "各案答案已放到事件手冊專頁，可自行選擇是否看劇透。",
    "tasks": [
      [
        "summons",
        "today",
        "領取Foundry每日召喚",
        "活動 → Welcome! Foundry Server → Summon Support；使用Foundry角色。",
        "每日額外20次免費聖約召喚；1260次為完整期間上限，晚加入不會一次補發。",
        "2026年12月31日 02:59 UTC；每日重設依遊戲倒數。",
        "今天免費次數已用，不要誤花書籤。"
      ],
      [
        "mail",
        "today",
        "檢查一次性成長郵件",
        "登入Foundry，開啟信箱並逐封確認到期時間。",
        "官方一次性補給：企鵝、符文／催化劑選擇箱與精靈之花。精確數量，以及其他已結束的 Foundry 獎勵，見「領取時段對照」。",
        "登入窗口已於2026年11月19日 02:59 UTC結束；若信箱裡已有該信，保存7天。",
        "符合資格的郵件已在自身倒數前領完。"
      ],
      [
        "case",
        "today",
        "蒐集事件手冊線索",
        "大廳 → 秘密兔子洞 → 事件手冊；先完成前案。",
        "每日2個放大鏡，新問題各耗1個；10條線索加完整O/X表才解鎖決定性線索。",
        "至2026年12月10日 02:59 UTC；全案完成後每日成就不再重設。",
        "今日放大鏡已領並記錄當案線索；知道答案不能跳過蒐集。"
      ],
      [
        "catalyst",
        "week",
        "完成當期Catalyst Search",
        "戰鬥 → 活動 → 緊急任務；先通過第6世界Episode1-6。",
        "Ruins Exploration Coin用於官方催化劑兌換；每日5次，額外次數可用天空石。",
        "2026年12月3日 02:59 UTC；兌換同步關閉，剩餘代幣刪除。",
        "完成預定場次，關閉前換完代幣。上一檔魅力週／Ruins Reclamation已於2026年11月26日 02:59 UTC結束。"
      ],
      [
        "luna",
        "next",
        "朝Rank70露娜獎勵前進",
        "活動 → Welcome! Foundry Server → Luna Joins；Foundry帳號Rank70。",
        "限定5★露娜、Glacial Purity造型與15隻Experienced Penguin。",
        "2026年12月31日 02:59 UTC。",
        "達到Rank70並領獎；依故事解鎖和成長增益推進，不保證未驗證的速通時間。"
      ]
    ]
  },
  "ko": {
    "homeTitle": "지금 어떤 문제를 해결할까요?",
    "homeAnswer": "기존 계정 유지, 파운드리 새 캐릭터 성장, 현재 이벤트 진행 중에서 계정에 맞는 길을 먼저 선택하세요.",
    "paths": [
      [
        "기존 진행도 유지",
        "STOVE → Steam 전환과 잘못 연결된 계정을 확인하세요. 서버 이전은 아닙니다.",
        "/steam-transfer/"
      ],
      [
        "파운드리 성장",
        "오늘 보상, 이번 주 던전, 계정 Rank70 루나 목표를 순서대로 확인하세요.",
        "/foundry/#today"
      ],
      [
        "사건수첩 해결",
        "사건1·2·3을 선택하고 원할 때만 스포일러를 펼치세요.",
        "/case-files/"
      ]
    ],
    "routeTitle": "파운드리 — 다음 할 일",
    "routeAnswer": "새 파운드리 캐릭터라면 일일 소환과 기간제 우편을 먼저 확인하고 Rank70을 목표로 하세요. 기존 캐릭터를 유지하려면 전환 가이드를 이용하세요. 로그인 전환은 서버 이전이 아닙니다.",
    "today": "오늘: 보상과 단서",
    "week": "이번 주: 현재 던전 마무리",
    "next": "다음 목표: Rank70",
    "schedule": "2026년11월23일 공식 일정 재확인: 파운드리 길드전 매칭은11월23일 03:00 UTC에 예정 시작 시각이 지났습니다. 별도 길드전 접속 선물 기간도 그때 종료되어 지금 로그인해 받는 이벤트가 아닙니다. 실제 매칭·공격 결과를 확인했다는 뜻은 아닙니다. 소속 길드의 상태는 게임에서 확인하세요.",
    "mode": "드래프트 아레나는 혼돈의 부름 시즌2 및 유예 기간 동안 대체되며 유예 종료는12월17일 02:59 UTC입니다. 월드 아레나는12월10일 점검 후 예정입니다.",
    "full": "전체 달력·보상 자료·배경",
    "questAnswer": "만료되는 보상부터 확인한 뒤 일일 소환과 사건 단서를 진행하세요. 아래5개는 현재 파운드리 계획이며 모든 게임 일일 퀘스트 목록은 아닙니다.",
    "checkNote": "체크는 현재 탭에서만 유효하며 게임 계정이나 보상 수령에 연결되지 않고 서버 리셋과 연동되지 않습니다. 실제 타이머는 게임에서 확인하세요.",
    "entry": "입장 / 조건",
    "reward": "보상 / 목적",
    "deadline": "기한",
    "done": "완료 기준",
    "source": "공식 규칙",
    "reset": "체크 지우기",
    "progress": "체크한 과제",
    "complete": "계획 체크 완료 — 게임에서 실제 보상을 확인하세요.",
    "history": "이벤트 상세 및 지난 공지",
    "caseLink": "사건별 정답은 사건수첩 전용 페이지에서 원할 때 펼쳐 볼 수 있습니다.",
    "tasks": [
      [
        "summons",
        "today",
        "파운드리 일일 소환 받기",
        "이벤트 → Welcome! Foundry Server → Summon Support; 파운드리 캐릭터.",
        "매일 성약 무료 소환+20회. 1260회는 전체 기간 최대치이지 늦게 시작해도 한 번에 주는 양이 아닙니다.",
        "2026년12월31일 02:59 UTC; 일일 리셋은 게임 타이머 기준.",
        "오늘 무료 소환 사용 완료; 책갈피를 실수로 쓰지 마세요."
      ],
      [
        "mail",
        "today",
        "일회성 성장 우편 확인",
        "파운드리 로그인 후 우편함에서 각 만료 타이머를 읽으세요.",
        "공식 일회성 성장 우편: 펭귄, 룬·촉매 선택 상자, 정령의 꽃. 정확한 수량과 이미 종료된 다른 파운드리 선물은 수령 기간 비교표를 보세요.",
        "로그인 기간은 2026년 11월 19일 02:59 UTC에 종료; 우편함에 이미 있는 우편은 7일 보관.",
        "자격에 맞는 우편을 자체 만료 전에 수령."
      ],
      [
        "case",
        "today",
        "사건수첩 단서 수집",
        "로비 → 시크릿 래빗홀 → 사건수첩; 이전 사건 먼저 완료.",
        "일일 돋보기2개, 새 질문1개당1개. 단서10개와 완성된 O/X 표로 결정적 단서 해제.",
        "2026년12월10일 02:59 UTC; 모든 사건 완료 후 일일 업적 리셋 중단.",
        "오늘 돋보기 수령 및 현재 사건 단서 기록; 정답을 알아도 수집은 필요."
      ],
      [
        "catalyst",
        "week",
        "현재 Catalyst Search 진행",
        "전투 → 이벤트 → 긴급 임무; 6th World Episode1-6 클리어.",
        "공식 촉매 교환용 Ruins Exploration Coin; 일일 5회, 추가 충전은 선택적 스카이스톤.",
        "2026년 12월 3일 02:59 UTC; 교환소도 닫히며 남은 코인 삭제.",
        "계획한 입장 및 종료 전 코인 교환 완료. 이전 매력 주간/Ruins Reclamation은 2026년 11월 26일 02:59 UTC에 이미 종료됨."
      ],
      [
        "luna",
        "next",
        "Rank70 루나 목표 진행",
        "이벤트 → Welcome! Foundry Server → Luna Joins; 파운드리 계정 Rank70.",
        "한정5★루나, Glacial Purity 스킨, Experienced Penguin15개.",
        "2026년12월31일 02:59 UTC.",
        "Rank70 도달 후 보상 수령. 스토리 해제와 성장 버프를 활용하되 검증되지 않은 속성 완료 시간을 약속하지 않습니다."
      ]
    ]
  },
  "th": {
    "homeTitle": "ตอนนี้คุณต้องการทำอะไร?",
    "homeAnswer": "เก็บความคืบหน้าบัญชีเดิม ปั้นตัวใหม่บน Foundry หรือผ่านกิจกรรม เลือกทางที่ตรงกับบัญชีก่อนใช้ทรัพยากร",
    "paths": [
      [
        "เก็บความคืบหน้าเดิม",
        "ตรวจขั้นตอนแปลง STOVE → Steam และบัญชีผูกผิด ไม่ใช่การย้ายตัวละครไป Foundry",
        "/steam-transfer/"
      ],
      [
        "เติบโตบน Foundry",
        "เริ่มของรับวันนี้ ดันเจี้ยนสัปดาห์นี้ แล้วมุ่ง Rank70 เพื่อรับ Luna",
        "/foundry/#today"
      ],
      [
        "แก้คดีกิจกรรม",
        "เลือกคดี1,2,3 เปิดสปอยล์เมื่อคุณต้องการเท่านั้น",
        "/case-files/"
      ]
    ],
    "routeTitle": "Foundry — ทำอะไรต่อ",
    "routeAnswer": "ตัวละคร Foundry ใหม่: รับซัมมอนรายวัน ตรวจจดหมายจำกัดเวลา แล้วเดินหน้าสู่ Rank70 ถ้าต้องการตัวเดิมให้ใช้คู่มือย้ายล็อกอิน การแปลงล็อกอินไม่เปลี่ยนเซิร์ฟเวอร์",
    "today": "วันนี้: รับของและเก็บเบาะแส",
    "week": "สัปดาห์นี้: จบดันเจี้ยนปัจจุบัน",
    "next": "เป้าหมายถัดไป: Rank70",
    "schedule": "ตรวจประกาศทางการอีกครั้ง23พฤศจิกายน2026: การจับคู่ Guild War ของ Foundry ถึงเวลาเริ่มตามกำหนด23พฤศจิกายน03:00 UTC แล้ว ช่วงของขวัญล็อกอิน Guild War แยกต่างหากสิ้นสุดเวลาเดียวกัน ไม่ใช่กิจกรรมที่ล็อกอินรับได้ตอนนี้ นี่เป็นการยืนยันตารางประกาศ ไม่ใช่ผลการจับคู่หรือการโจมตีจริง โปรดตรวจสถานะกิลด์ในเกม",
    "mode": "Draft Arena ถูกแทนด้วย The Call of Chaos ระหว่างซีซัน2และช่วงผ่อนผัน ถึง17ธ.ค.02:59 UTC ส่วน World Arena กำหนดหลังปิดปรับปรุง10ธ.ค.",
    "full": "ปฏิทินเต็ม รางวัล และข้อมูลอ้างอิง",
    "questAnswer": "เริ่มของใกล้หมดเวลา แล้วซัมมอนรายวันและเบาะแสคดี เช็กลิสต์5งานนี้ใช้วางแผนช่วง Foundry ปัจจุบัน ไม่ใช่ภารกิจรายวันทั้งหมดในเกม",
    "checkNote": "เครื่องหมายใช้ในแท็บนี้เท่านั้น ไม่รับรางวัล ไม่เชื่อมบัญชี และไม่รีเซ็ตตามเซิร์ฟเวอร์ ดูเวลาจริงในเกม",
    "entry": "ทางเข้า / เงื่อนไข",
    "reward": "รางวัล / เป้าหมาย",
    "deadline": "กำหนดสิ้นสุด",
    "done": "ถือว่าเสร็จเมื่อ",
    "source": "กฎทางการ",
    "reset": "ล้างเครื่องหมาย",
    "progress": "งานที่ทำเครื่องหมาย",
    "complete": "ตรวจแผนครบแล้ว ตรวจรางวัลจริงในเกมก่อนออก",
    "history": "รายละเอียดกิจกรรมและประกาศเก่า",
    "caseLink": "เฉลยแต่ละคดีอยู่หน้าคดีเฉพาะ เลือกเปิดสปอยล์ได้เอง",
    "tasks": [
      [
        "summons",
        "today",
        "ใช้ซัมมอนฟรี Foundry รายวัน",
        "Event → Welcome! Foundry Server → Summon Support; ตัวละคร Foundry",
        "ซัมมอน Covenant ฟรีเพิ่ม20ครั้งต่อวัน 1260คือยอดสูงสุดตลอดช่วง ไม่ใช่ของชดเชยให้คนเริ่มช้า",
        "31ธ.ค.2026 02:59 UTC; รีเซ็ตรายวันดูตัวนับในเกม",
        "ใช้ครั้งฟรีวันนี้แล้ว ระวังอย่าใช้ Bookmarks โดยพลาด"
      ],
      [
        "mail",
        "today",
        "ตรวจจดหมายเติบโตครั้งเดียว",
        "ล็อกอิน Foundry เปิดกล่องจดหมายและดูวันหมดอายุแต่ละฉบับ",
        "ชุดสนับสนุนทางการครั้งเดียว: Penguin, กล่องเลือกรูน/ตัวเร่ง และ Spirit Bloom จำนวนทางการ และของขวัญ Foundry อื่นที่จบแล้ว ดูตารางช่วงรับของ",
        "ช่วงล็อกอินจบแล้วเมื่อ 19 พ.ย. 2026 02:59 UTC; ถ้ามีฉบับอยู่ในกล่องแล้ว เก็บ 7 วัน",
        "รับจดหมายที่มีสิทธิ์ก่อนหมดเวลาของฉบับนั้น"
      ],
      [
        "case",
        "today",
        "เก็บเบาะแส Case Files",
        "Lobby → Secret Rabbit♥Hole → Case Files; จบคดีก่อนหน้าก่อน",
        "แว่นขยายวันละ2อัน คำถามใหม่ใช้1อัน เบาะแส10ข้อและตาราง O/X ครบจึงปลดล็อกเบาะแสชี้ตัว",
        "10ธ.ค.2026 02:59 UTC; เมื่อจบทุกคดี ภารกิจรายวันจะหยุดรีเซ็ต",
        "รับแว่นวันนี้และบันทึกเบาะแสคดีปัจจุบันแล้ว รู้เฉลยก็ข้ามการเก็บไม่ได้"
      ],
      [
        "catalyst",
        "week",
        "เล่น Catalyst Search รอบปัจจุบัน",
        "Battle → Event → Emergency Mission; ผ่าน6th World Episode1-6",
        "Ruins Exploration Coin สำหรับแลกตัวเร่งตามประกาศทางการ เข้าฟรีวันละ5ครั้ง เติมด้วย Skystone ได้เป็นทางเลือก",
        "3 ธ.ค. 2026 02:59 UTC ร้านแลกปิดพร้อมกันและลบเหรียญคงเหลือ",
        "เล่นตามแผนและแลกเหรียญก่อนปิด สัปดาห์ชาร์ม / Ruins Reclamation ก่อนหน้าจบแล้วเมื่อ 26 พ.ย. 2026 02:59 UTC"
      ],
      [
        "luna",
        "next",
        "มุ่ง Rank70 เพื่อรับ Luna",
        "Event → Welcome! Foundry Server → Luna Joins; บัญชี Foundry Rank70",
        "Luna5★ลิมิเต็ด สกิน Glacial Purity และ Experienced Penguin15ตัว",
        "31ธ.ค.2026 02:59 UTC",
        "ถึงRank70และรับรางวัลแล้ว เดินตามเนื้อเรื่องและใช้บัฟเติบโต ไม่รับประกันเวลาเร่งเล่นที่ยังไม่ทดสอบ"
      ]
    ]
  }
} as const;
export type GrowthLocale = keyof typeof GROWTH_COPY;
export function isGrowthLocale(locale: Locale): locale is GrowthLocale { return locale in GROWTH_COPY; }
