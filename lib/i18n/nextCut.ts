import type { Locale } from '@/lib/site';

/** Verification day for this content cut. Do not bump only to look fresh. */
export const VERIFIED_DATE = '2026-11-10';

/** Foundry page re-checked against the 2026-11-07 Steam Guild War notice. */
export const FOUNDRY_VERIFIED_DATE = '2026-11-10';

/** Case Files page verified against the STOVE event notices. */
export const CASE_FILES_VERIFIED_DATE = '2026-11-09';

export type VerifiedCopy = {
  /** Text before the date, including the trailing space after the colon. */
  before: string;
  /** Text after the date, including the leading space before the parenthesis. */
  after: string;
};

export const HOME_VERIFIED: Record<Locale, VerifiedCopy> = {
  "en": {
    "before": "Last verified: ",
    "after": " (Steam/Foundry focus). Schedules and kits can change — confirm on STOVE / Steam."
  },
  "ko": {
    "before": "최근 확인: ",
    "after": " (Steam/Foundry 초점). 일정과 키트는 바뀔 수 있습니다 — STOVE / Steam에서 확인하세요."
  },
  "ja": {
    "before": "最終確認: ",
    "after": " (Steam/Foundry 焦点). 日程とキットは変わり得ます — STOVE / Steamで確認してください."
  },
  "zh-tw": {
    "before": "最近核對: ",
    "after": " (Steam/Foundry 焦點). 日程與技能組可能變動 — 請以 STOVE / Steam 為準."
  },
  "th": {
    "before": "ตรวจสอบล่าสุด: ",
    "after": " (เน้น Steam/Foundry) กำหนดการและชุดสกิลอาจเปลี่ยน — ยืนยันบน STOVE / Steam"
  },
  "es": {
    "before": "Última verificación: ",
    "after": " (enfoque Steam/Foundry). Los calendarios y kits pueden cambiar; confirma en STOVE / Steam."
  },
  "pt": {
    "before": "Última verificação: ",
    "after": " (foco em Steam/Foundry). Cronogramas e kits podem mudar — confirme no STOVE / Steam."
  },
  "de": {
    "before": "Zuletzt geprüft: ",
    "after": " (Fokus Steam/Foundry). Zeitpläne und Kits können sich ändern – bestätige sie auf STOVE / Steam."
  },
  "fr": {
    "before": "Dernière vérification : ",
    "after": " (axé Steam/Foundry). Les calendriers et les kits peuvent changer — vérifiez sur STOVE / Steam."
  },
  "pl": {
    "before": "Ostatnia weryfikacja: ",
    "after": " (nacisk na Steam/Foundry). Harmonogramy i zestawy umiejętności mogą się zmienić — potwierdź na STOVE / Steam."
  }
};

export const HEROES_VERIFIED: Record<Locale, VerifiedCopy> = {
  "en": {
    "before": "Last verified: ",
    "after": " (onboarding roster · kits in-client)"
  },
  "ko": {
    "before": "최근 확인: ",
    "after": " (온보딩 명단 · 키트는 게임 내)"
  },
  "ja": {
    "before": "最終確認: ",
    "after": " (オンボーディング名簿 · キットはゲーム内)"
  },
  "zh-tw": {
    "before": "最近核對: ",
    "after": " (上手名單 · 技能以遊戲內為準)"
  },
  "th": {
    "before": "ตรวจสอบล่าสุด: ",
    "after": " (ฮีโร่ช่วงเริ่มต้น · ดูชุดสกิลในเกม)"
  },
  "es": {
    "before": "Última verificación: ",
    "after": " (roster inicial · kits en el cliente)"
  },
  "pt": {
    "before": "Última verificação: ",
    "after": " (elenco de entrada · kits no cliente)"
  },
  "de": {
    "before": "Zuletzt geprüft: ",
    "after": " (Onboarding-Roster · Kits im Client)"
  },
  "fr": {
    "before": "Dernière vérification : ",
    "after": " (effectif de démarrage · kits en jeu)"
  },
  "pl": {
    "before": "Ostatnia weryfikacja: ",
    "after": " (lista startowa · umiejętności w kliencie)"
  }
};

export const TRANSFER_VERIFIED: Record<Locale, VerifiedCopy> = {
  "en": {
    "before": "Last verified: ",
    "after": " (STOVE↔Steam transfer steps)"
  },
  "ko": {
    "before": "최근 확인: ",
    "after": " (STOVE↔Steam 이전 단계)"
  },
  "ja": {
    "before": "最終確認: ",
    "after": " (STOVE↔Steam 引き継ぎ手順)"
  },
  "zh-tw": {
    "before": "最近核對: ",
    "after": " (STOVE↔Steam 轉移步驟)"
  },
  "th": {
    "before": "ตรวจสอบล่าสุด: ",
    "after": " (ขั้นตอนโอน STOVE↔Steam)"
  },
  "es": {
    "before": "Última verificación: ",
    "after": " (pasos de transferencia STOVE↔Steam)"
  },
  "pt": {
    "before": "Última verificação: ",
    "after": " (passos de transferência STOVE↔Steam)"
  },
  "de": {
    "before": "Zuletzt geprüft: ",
    "after": " (STOVE↔Steam-Transfer-Schritte)"
  },
  "fr": {
    "before": "Dernière vérification : ",
    "after": " (étapes du transfert STOVE↔Steam)"
  },
  "pl": {
    "before": "Ostatnia weryfikacja: ",
    "after": " (kroki transferu STOVE↔Steam)"
  }
};

export const FOUNDRY_VERIFIED: Record<Locale, VerifiedCopy> = {
  "en": {
    "before": "Last verified: ",
    "after": " (Steam/Foundry focus)"
  },
  "ko": {
    "before": "최근 확인: ",
    "after": " (Steam/Foundry 초점)"
  },
  "ja": {
    "before": "最終確認: ",
    "after": " (Steam/Foundry 焦点)"
  },
  "zh-tw": {
    "before": "最近核對: ",
    "after": " (Steam/Foundry 焦點)"
  },
  "th": {
    "before": "ตรวจสอบล่าสุด: ",
    "after": " (เน้น Steam/Foundry)"
  },
  "es": {
    "before": "Última verificación: ",
    "after": " (enfoque Steam/Foundry)"
  },
  "pt": {
    "before": "Última verificação: ",
    "after": " (foco em Steam/Foundry)"
  },
  "de": {
    "before": "Zuletzt geprüft: ",
    "after": " (Fokus Steam/Foundry)"
  },
  "fr": {
    "before": "Dernière vérification : ",
    "after": " (axé Steam/Foundry)"
  },
  "pl": {
    "before": "Ostatnia weryfikacja: ",
    "after": " (nacisk na Steam/Foundry)"
  }
};

/**
 * One segment of a start-step line.
 * href "" = plain text; "#id" = same-page anchor; "/path/" = internal route.
 */
export type LineSeg = readonly [text: string, href: string];

export const START5: Record<
  Locale,
  { h2: string; steps: readonly (readonly LineSeg[])[] }
> = {
  "en": {
    "h2": "Get started in 5 steps",
    "steps": [
      [
        [
          "Choose path: keep legacy progress (",
          ""
        ],
        [
          "convert login",
          "/steam-transfer/"
        ],
        [
          ") or start fresh on ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Convert ",
          ""
        ],
        [
          "STOVE email/SNS → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " before treating a new Steam session as main.",
          ""
        ]
      ],
      [
        [
          "Install from the official Steam store (app 5019180) and launch — ",
          ""
        ],
        [
          "do not delete the in-game demo account after transfer",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "On Foundry / new accounts: prioritize specialty-change supports + an early farmer (see ",
          ""
        ],
        [
          "Heroes hub",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "Stuck on empty account, anti-cheat, or missing events? Use ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " & ",
          ""
        ],
        [
          "troubleshooting",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "ko": {
    "h2": "5단계로 시작하기",
    "steps": [
      [
        [
          "경로를 고르세요: 기존 진행도를 유지(",
          ""
        ],
        [
          "로그인 전환",
          "/steam-transfer/"
        ],
        [
          ")하거나 ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          "에서 새로 시작합니다.",
          ""
        ]
      ],
      [
        [
          "새 Steam 세션을 본계정으로 다루기 전에 ",
          ""
        ],
        [
          "STOVE 이메일/SNS → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          "으로 전환하세요.",
          ""
        ]
      ],
      [
        [
          "공식 Steam 스토어(app 5019180)에서 설치하고 실행하세요 — ",
          ""
        ],
        [
          "이전 후 인게임 데모 계정은 삭제하지 마세요",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Foundry / 신규 계정: 전직 서포트와 초반 파머를 우선하세요(",
          ""
        ],
        [
          "영웅 허브",
          "/heroes/"
        ],
        [
          " 참고).",
          ""
        ]
      ],
      [
        [
          "빈 계정, 안티치트, 또는 이벤트가 안 보이나요? ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          "와 ",
          ""
        ],
        [
          "문제 해결",
          "#troubleshoot"
        ],
        [
          "을 이용하세요.",
          ""
        ]
      ]
    ]
  },
  "ja": {
    "h2": "5ステップではじめる",
    "steps": [
      [
        [
          "経路を選ぶ: 既存の進行を残す（",
          ""
        ],
        [
          "ログイン変換",
          "/steam-transfer/"
        ],
        [
          "）か、",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          "で新しく始める。",
          ""
        ]
      ],
      [
        [
          "新しいSteamセッションを本アカウントにする前に、",
          ""
        ],
        [
          "STOVEのメール/SNS → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          "へ変換する。",
          ""
        ]
      ],
      [
        [
          "公式Steamストア（app 5019180）からインストールして起動する — ",
          ""
        ],
        [
          "引き継ぎ後にゲーム内デモアカウントを削除しない",
          "#faq"
        ],
        [
          "。",
          ""
        ]
      ],
      [
        [
          "Foundry／新規アカウント: 専改サポートと序盤ファーマーを優先する（",
          ""
        ],
        [
          "英雄ハブ",
          "/heroes/"
        ],
        [
          "を参照）。",
          ""
        ]
      ],
      [
        [
          "空のアカウント、アンチチート、またはイベントが見えない？",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          "と",
          ""
        ],
        [
          "トラブルシュート",
          "#troubleshoot"
        ],
        [
          "を使う。",
          ""
        ]
      ]
    ]
  },
  "zh-tw": {
    "h2": "5 步驟開始",
    "steps": [
      [
        [
          "先選路徑：保留舊進度（",
          ""
        ],
        [
          "轉換登入",
          "/steam-transfer/"
        ],
        [
          "），或在 ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          " 重新開始。",
          ""
        ]
      ],
      [
        [
          "把新的 Steam 工作階段當成主帳之前，先完成 ",
          ""
        ],
        [
          "STOVE Email／SNS → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " 轉換。",
          ""
        ]
      ],
      [
        [
          "從官方 Steam 商店（app 5019180）安裝並啟動 — ",
          ""
        ],
        [
          "轉移後不要刪除遊戲內試玩帳號",
          "#faq"
        ],
        [
          "。",
          ""
        ]
      ],
      [
        [
          "Foundry／新帳號：優先專職輔助與前期刷圖手（見",
          ""
        ],
        [
          "英雄樞紐",
          "/heroes/"
        ],
        [
          "）。",
          ""
        ]
      ],
      [
        [
          "空白帳號、反作弊，或看不到活動？請用 ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " 與 ",
          ""
        ],
        [
          "疑難排解",
          "#troubleshoot"
        ],
        [
          "。",
          ""
        ]
      ]
    ]
  },
  "th": {
    "h2": "เริ่มต้นใน 5 ขั้นตอน",
    "steps": [
      [
        [
          "เลือกเส้นทาง: เก็บความคืบหน้าเดิม (",
          ""
        ],
        [
          "แปลงล็อกอิน",
          "/steam-transfer/"
        ],
        [
          ") หรือเริ่มใหม่บน ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "แปลง ",
          ""
        ],
        [
          "อีเมล/SNS ของ STOVE → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " ก่อนถือว่าเซสชัน Steam ใหม่เป็นบัญชีหลัก",
          ""
        ]
      ],
      [
        [
          "ติดตั้งจากร้านค้า Steam ทางการ (app 5019180) แล้วเปิดเกม — ",
          ""
        ],
        [
          "อย่าลบบัญชีเดโมในเกมหลังโอน",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "บน Foundry / บัญชีใหม่: ให้ความสำคัญกับซัพพอร์ตเปลี่ยนอาชีพ + ฟาร์มเมอร์ช่วงแรก (ดู ",
          ""
        ],
        [
          "ศูนย์รวมฮีโร่",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "ติดปัญหาบัญชีว่าง, anti-cheat หรืออีเวนต์หาย? ใช้ ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " & ",
          ""
        ],
        [
          "การแก้ปัญหา",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "es": {
    "h2": "Empieza en 5 pasos",
    "steps": [
      [
        [
          "Elige la ruta: conservar el progreso antiguo (",
          ""
        ],
        [
          "convertir el inicio de sesión",
          "/steam-transfer/"
        ],
        [
          ") o empezar de cero en ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Convierte ",
          ""
        ],
        [
          "correo/SNS de STOVE → Inicio de sesión simple de Steam",
          "/steam-transfer/"
        ],
        [
          " antes de tratar una nueva sesión de Steam como principal.",
          ""
        ]
      ],
      [
        [
          "Instala desde la tienda oficial de Steam (app 5019180) y abre el juego — ",
          ""
        ],
        [
          "no elimines la cuenta de demostración del juego después de la transferencia",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "En Foundry / cuentas nuevas: prioriza los apoyos de cambio de especialidad y un personaje de farmeo temprano (consulta ",
          ""
        ],
        [
          "Centro de héroes",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "¿Atascado con una cuenta vacía, el antitrampas o eventos que faltan? Usa ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " y ",
          ""
        ],
        [
          "solución de problemas",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "pt": {
    "h2": "Comece em 5 passos",
    "steps": [
      [
        [
          "Escolha o caminho: manter o progresso antigo (",
          ""
        ],
        [
          "converter o login",
          "/steam-transfer/"
        ],
        [
          ") ou começar do zero no ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Converta ",
          ""
        ],
        [
          "e-mail/SNS do STOVE → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " antes de tratar uma nova sessão da Steam como principal.",
          ""
        ]
      ],
      [
        [
          "Instale pela loja oficial da Steam (app 5019180) e inicie — ",
          ""
        ],
        [
          "não exclua a conta demo no jogo após a transferência",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "No Foundry / contas novas: priorize suportes de troca de especialidade + um farmer inicial (veja ",
          ""
        ],
        [
          "Central de heróis",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "Preso em conta vazia, anti-cheat ou eventos ausentes? Use o ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " e a ",
          ""
        ],
        [
          "solução de problemas",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "de": {
    "h2": "In 5 Schritten loslegen",
    "steps": [
      [
        [
          "Weg wählen: Alt-Fortschritt behalten (",
          ""
        ],
        [
          "Login umstellen",
          "/steam-transfer/"
        ],
        [
          ") oder neu starten auf ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Stelle ",
          ""
        ],
        [
          "STOVE-E-Mail/SNS → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " um, bevor du eine neue Steam-Sitzung als Hauptkonto behandelst.",
          ""
        ]
      ],
      [
        [
          "Installiere über den offiziellen Steam-Store (App 5019180) und starte – ",
          ""
        ],
        [
          "lösche das Ingame-Demo-Konto nach dem Transfer nicht",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Auf Foundry / mit neuen Konten: priorisiere Spezialisierungswechsel-Supports + einen frühen Farmer (siehe ",
          ""
        ],
        [
          "Helden-Hub",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "Hängst du bei leerem Konto, Anti-Cheat oder fehlenden Events? Nutze ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " & ",
          ""
        ],
        [
          "Fehlerbehebung",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "fr": {
    "h2": "Commencez en 5 étapes",
    "steps": [
      [
        [
          "Choisissez votre voie : conserver la progression existante (",
          ""
        ],
        [
          "convertir la connexion",
          "/steam-transfer/"
        ],
        [
          ") ou repartir de zéro sur ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Convertissez ",
          ""
        ],
        [
          "STOVE e-mail/SNS → Connexion simple Steam",
          "/steam-transfer/"
        ],
        [
          " avant de considérer une nouvelle session Steam comme principale.",
          ""
        ]
      ],
      [
        [
          "Installez le jeu depuis la boutique officielle Steam (app 5019180) et lancez-le — ",
          ""
        ],
        [
          "ne supprimez pas le compte de démonstration en jeu après le transfert",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Sur Foundry ou avec un nouveau compte : priorisez les soutiens de changement de spécialité et un personnage de farm précoce (voir ",
          ""
        ],
        [
          "le hub Héros",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "Un compte vide, l’anti-triche ou des événements manquants vous posent problème ? Consultez la ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " et ",
          ""
        ],
        [
          "le dépannage",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  },
  "pl": {
    "h2": "Zacznij w 5 krokach",
    "steps": [
      [
        [
          "Wybierz ścieżkę: zachowaj stary postęp (",
          ""
        ],
        [
          "przekonwertuj logowanie",
          "/steam-transfer/"
        ],
        [
          ") albo zacznij od zera na ",
          ""
        ],
        [
          "Foundry",
          "/foundry/"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Przekonwertuj ",
          ""
        ],
        [
          "logowanie e-mail/SNS STOVE → Steam Simple Login",
          "/steam-transfer/"
        ],
        [
          " zanim uznasz nową sesję Steam za główną.",
          ""
        ]
      ],
      [
        [
          "Zainstaluj z oficjalnego sklepu Steam (aplikacja 5019180) i uruchom — ",
          ""
        ],
        [
          "nie usuwaj konta demonstracyjnego w grze po transferze",
          "#faq"
        ],
        [
          ".",
          ""
        ]
      ],
      [
        [
          "Na Foundry / nowych kontach: najpierw postacie wsparcia do zmiany specjalizacji i wczesny farmer (zobacz ",
          ""
        ],
        [
          "Bohaterowie",
          "/heroes/"
        ],
        [
          ").",
          ""
        ]
      ],
      [
        [
          "Utknąłeś na pustym koncie, anty-cheacie lub brakujących wydarzeniach? Skorzystaj z ",
          ""
        ],
        [
          "FAQ",
          "#faq"
        ],
        [
          " i ",
          ""
        ],
        [
          "rozwiązywania problemów",
          "#troubleshoot"
        ],
        [
          ".",
          ""
        ]
      ]
    ]
  }
};

/** Visible role chips. English strings are identical on every locale. */
export const ROLE_CHIPS: Record<
  string,
  readonly { label: string; aria: string }[]
> = {
  ras: [
    { label: 'Tank', aria: 'Tank' },
    { label: 'Story lead', aria: 'Story lead' },
  ],
  mercedes: [
    { label: 'AoE', aria: 'Area of effect' },
    { label: 'Early clear', aria: 'Early clear' },
  ],
  aither: [
    { label: 'Heal', aria: 'Heal' },
    { label: 'Starter SW', aria: 'Starter Soul Weaver' },
  ],
  judith: [
    { label: 'CR push', aria: 'Combat readiness push' },
    { label: 'Opener', aria: 'Opener' },
  ],
  'angelic-montmorancy': [
    { label: 'Cleanse', aria: 'Cleanse' },
    { label: 'Heal', aria: 'Heal' },
  ],
  'falconer-kluri': [
    { label: 'Def break', aria: 'Defense break' },
    { label: 'CR', aria: 'Combat readiness' },
  ],
  'commander-lorina': [
    { label: 'ST DPS', aria: 'Single-target DPS' },
    { label: 'Abyss', aria: 'Abyss' },
  ],
  alexa: [
    { label: 'Farmer', aria: 'Farmer' },
    { label: 'Wyvern', aria: 'Wyvern' },
  ],
  furious: [
    { label: 'Def break', aria: 'Defense break' },
    { label: 'Target', aria: 'Target' },
  ],
  silk: [
    { label: 'CR push', aria: 'Combat readiness push' },
    { label: 'Cleave', aria: 'Cleave' },
  ],
  vildred: [
    { label: 'Cleave', aria: 'Cleave' },
    { label: 'Adventure', aria: 'Adventure' },
  ],
  luna: [
    { label: 'Foundry path', aria: 'Foundry path' },
    { label: 'Rank 70', aria: 'Rank 70' },
  ],
};
