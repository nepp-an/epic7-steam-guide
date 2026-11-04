import type { Locale } from '@/lib/site';

export type SupplementSection = {
  h2: string;
  intro: string;
  bullets: readonly string[];
  source?: { href: string; label: string };
};

export const FAQ_EXTRA: Record<
  Locale,
  readonly (readonly [string, string])[]
> = {
  "en": [
    [
      "Can I still play on mobile or STOVE PC after converting?",
      "Per the STOVE Steam FAQ, the converted account can still be used on STOVE PC and mobile. Treat Steam as another login route, not a one-way platform lock. Confirm current device rules on the [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Do purchases, unclaimed rewards, and Epic Pass carry over?",
      "Per the STOVE Steam FAQ, progress and data — including unclaimed rewards, event items, and Epic Pass — carry over when the original login is converted. Verify current details on the [[official FAQ|https://page.onstove.com/epicseven/global/view/14378309]] before converting."
    ],
    [
      "STOVE says “already been registered” — what does that mean?",
      "That message usually means the Steam ID is already tied to another STOVE login, often the empty account Steam created on first launch. Authorize that Steam ID on STOVE, withdraw the extra STOVE account, then convert the original email/SNS login. Do not create more Steam accounts. Check the exact wording on the [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Why is the Transfer button greyed out for three months?",
      "STOVE can place a holding or cooldown period on transfer after a wrong-bind cleanup or withdrawal; players commonly report three months. The exact start date and scope are shown in your STOVE account UI, not on this site. Wait it out or ask STOVE customer support — never use a third-party unlock service."
    ]
  ],
  "ko": [
    [
      "전환 후에도 모바일이나 STOVE PC로 플레이할 수 있나요?",
      "STOVE Steam FAQ에 따르면 전환한 계정은 STOVE PC와 모바일에서도 계속 사용할 수 있습니다. Steam은 일방적인 플랫폼 잠금이 아니라 또 하나의 로그인 경로입니다. 최신 기기 규칙은 [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 확인하세요."
    ],
    [
      "구매 내역, 미수령 보상, Epic Pass도 넘어가나요?",
      "STOVE Steam FAQ 기준으로 미수령 보상, 이벤트 아이템, Epic Pass를 포함한 진행과 데이터가 원래 로그인을 전환할 때 이어집니다. 전환 전에 [[공식 FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 최신 내용을 확인하세요."
    ],
    [
      "STOVE에 “already been registered”가 뜨면 무슨 뜻인가요?",
      "보통 해당 Steam ID가 다른 STOVE 로그인(첫 실행 때 Steam이 만든 빈 계정인 경우가 많음)에 이미 묶여 있다는 뜻입니다. STOVE에서 그 Steam ID를 인가하고, 여분의 STOVE 계정을 탈퇴한 뒤, 원래 이메일/SNS 로그인을 전환하세요. Steam 계정을 더 만들지 마세요. 정확한 문구는 [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]에서 확인하세요."
    ],
    [
      "이전 버튼이 3개월 동안 비활성화되는 이유는?",
      "잘못된 연동 정리나 탈퇴 후 STOVE가 이전에 보류/쿨다운 기간을 둘 수 있으며, 흔히 3개월로 보고됩니다. 정확한 시작일과 범위는 이 사이트가 아니라 STOVE 계정 UI에 표시됩니다. 기다리거나 STOVE 고객지원에 문의하고, 제3자 해제 서비스는 쓰지 마세요."
    ]
  ],
  "ja": [
    [
      "変換後もモバイルやSTOVE PCで遊べますか？",
      "STOVE Steam FAQによると、変換したアカウントはSTOVE PCとモバイルでも引き続き利用できます。Steamは一方通行のプラットフォーム固定ではなく、もう一つのログイン経路です。最新の端末ルールは[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で確認してください。"
    ],
    [
      "購入、未受け取り報酬、Epic Passも引き継げますか？",
      "STOVE Steam FAQでは、未受け取り報酬・イベントアイテム・Epic Passを含む進行とデータが、元のログインを変換すると引き継がれるとされています。変換前に[[公式FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で最新情報を確認してください。"
    ],
    [
      "STOVEで「already been registered」と出たら？",
      "通常、そのSteam IDが別のSTOVEログイン（初回起動時にSteamが作った空アカウントが多い）に既に紐づいているという意味です。STOVEでそのSteam IDを認可し、余分なSTOVEアカウントを退会してから、元のメール/SNSログインを変換してください。Steamアカウントを増やさないでください。正確な文面は[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]で確認してください。"
    ],
    [
      "引き継ぎボタンが3か月間グレーになるのはなぜ？",
      "誤連携の整理や退会のあと、STOVEが引き継ぎに保留・クールダウン期間を設けることがあり、一般に3か月と報告されています。正確な開始日と範囲は当サイトではなくSTOVEアカウント画面に表示されます。待つかSTOVE公式サポートへ問い合わせ、第三者の解除サービスは使わないでください。"
    ]
  ],
  "zh-tw": [
    [
      "轉換後還能用手機或 STOVE PC 玩嗎？",
      "依 STOVE Steam FAQ，轉換後的帳號仍可在 STOVE PC 與手機使用。Steam 是另一種登入方式，不是單向平台鎖定。最新裝置規則請見[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]。"
    ],
    [
      "購買、未領取獎勵與 Epic Pass 會保留嗎？",
      "依 STOVE Steam FAQ，轉換原本登入後，包含未領取獎勵、活動道具與 Epic Pass 的進度與資料會一併保留。轉換前請在[[官方 FAQ|https://page.onstove.com/epicseven/global/view/14378309]]確認最新說明。"
    ],
    [
      "STOVE 顯示「already been registered」是什麼意思？",
      "通常表示該 Steam ID 已綁定另一個 STOVE 登入（常見是首次啟動時 Steam 自動建立的空白帳號）。請在 STOVE 授權該 Steam ID、註銷多出來的 STOVE 帳號，再轉換原本的 Email／SNS 登入。不要一直新開 Steam 帳號。實際文案請見[[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]。"
    ],
    [
      "為什麼轉移按鈕會灰掉三個月？",
      "錯綁清理或註銷後，STOVE 可能對轉移設下保留期／冷靜期，玩家常見回報為三個月。確切起算日與範圍以你的 STOVE 帳號介面為準，不是本站。請等待或詢問 STOVE 客服，切勿使用第三方解鎖服務。"
    ]
  ],
  "th": [
    [
      "หลังแปลงบัญชีแล้วยังเล่นบนมือถือหรือ STOVE PC ได้ไหม",
      "ตาม STOVE Steam FAQ บัญชีที่แปลงแล้วยังใช้บน STOVE PC และมือถือได้ มอง Steam เป็นอีกช่องทางล็อกอิน ไม่ใช่การล็อกแพลตฟอร์มแบบทางเดียว ตรวจสอบกฎอุปกรณ์ล่าสุดที่ [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]"
    ],
    [
      "รายการที่ซื้อ ของรางวัลที่ยังไม่รับ และ Epic Pass จะติดมาด้วยไหม",
      "ตาม STOVE Steam FAQ ความคืบหน้าและข้อมูล — รวมถึงของรางวัลที่ยังไม่รับ ไอเทมกิจกรรม และ Epic Pass — จะติดไปด้วยเมื่อแปลงล็อกอินเดิม ตรวจรายละเอียดล่าสุดที่ [[official FAQ|https://page.onstove.com/epicseven/global/view/14378309]] ก่อนแปลง"
    ],
    [
      "STOVE ขึ้นว่า “already been registered” — หมายความว่าอะไร",
      "ข้อความนี้มักหมายถึง Steam ID ถูกผูกกับล็อกอิน STOVE อื่นอยู่แล้ว ซึ่งมักเป็นบัญชีว่างที่ Steam สร้างตอนเปิดครั้งแรก อนุญาต Steam ID นั้นบน STOVE ถอนบัญชี STOVE ส่วนเกินออก แล้วค่อยแปลงล็อกอินอีเมล/SNS เดิม อย่าสร้างบัญชี Steam เพิ่ม ตรวจถ้อยคำที่แน่นอนได้ที่ [[STOVE Steam FAQ|https://page.onstove.com/epicseven/global/view/14378309]]"
    ],
    [
      "ทำไมปุ่ม Transfer ถึงเป็นสีเทาไปสามเดือน",
      "STOVE อาจกำหนดช่วงพักหรือคูลดาวน์สำหรับการโอนหลังล้างการผูกผิดหรือถอนบัญชี ผู้เล่นมักรายงานว่าสามเดือน วันเริ่มและขอบเขตที่แน่นอนแสดงอยู่ใน UI บัญชี STOVE ของคุณ ไม่ใช่บนเว็บไซต์นี้ รอให้พ้นช่วงนั้นหรือสอบถามฝ่ายบริการลูกค้า STOVE — อย่าใช้บริการปลดล็อกจากบุคคลที่สาม"
    ]
  ],
  "es": [
    [
      "¿Puedo seguir jugando en móvil o en STOVE PC después de convertir?",
      "Según las preguntas frecuentes de STOVE Steam, la cuenta convertida se puede seguir usando en STOVE PC y en móvil. Considera Steam como otra vía de inicio de sesión, no como un bloqueo permanente a una plataforma. Confirma las reglas vigentes por dispositivo en las [[preguntas frecuentes de STOVE Steam|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "¿Se conservan las compras, las recompensas sin reclamar y el Epic Pass?",
      "Según las preguntas frecuentes de STOVE Steam, el progreso y los datos —incluidas las recompensas sin reclamar, los objetos de evento y el Epic Pass— se conservan cuando se convierte el inicio de sesión original. Verifica los detalles vigentes en las [[preguntas frecuentes oficiales|https://page.onstove.com/epicseven/global/view/14378309]] antes de convertir."
    ],
    [
      "STOVE dice «ya está registrado» — ¿qué significa?",
      "Ese mensaje suele significar que el ID de Steam ya está vinculado a otro inicio de sesión de STOVE, a menudo la cuenta vacía que Steam creó en el primer arranque. Autoriza ese ID de Steam en STOVE, retira la cuenta de STOVE adicional y luego convierte el inicio de sesión original por correo/SNS. No crees más cuentas de Steam. Revisa el texto exacto en las [[preguntas frecuentes de STOVE Steam|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "¿Por qué el botón Transferir aparece en gris durante tres meses?",
      "STOVE puede aplicar un periodo de retención o enfriamiento a la transferencia después de limpiar un vínculo incorrecto o retirar una cuenta; los jugadores suelen reportar tres meses. La fecha de inicio y el alcance exactos se muestran en la interfaz de tu cuenta de STOVE, no en este sitio. Espera o pregunta al soporte de STOVE; nunca uses un servicio de desbloqueo de terceros."
    ]
  ],
  "pt": [
    [
      "Ainda posso jogar no celular ou no STOVE PC depois de converter?",
      "Segundo o FAQ do STOVE Steam, a conta convertida ainda pode ser usada no STOVE PC e no celular. Trate a Steam como mais uma rota de login, não como um bloqueio permanente a uma plataforma. Confirme as regras atuais por dispositivo no [[FAQ do STOVE Steam|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Compras, recompensas não resgatadas e Epic Pass são mantidos?",
      "Segundo o FAQ do STOVE Steam, progresso e dados — incluindo recompensas não resgatadas, itens de evento e Epic Pass — são mantidos quando o login original é convertido. Verifique os detalhes atuais no [[FAQ oficial|https://page.onstove.com/epicseven/global/view/14378309]] antes de converter."
    ],
    [
      "O STOVE diz “já registrado” — o que isso significa?",
      "Essa mensagem geralmente significa que o ID Steam já está vinculado a outro login STOVE, muitas vezes a conta vazia que a Steam criou no primeiro lançamento. Autorize esse ID Steam no STOVE, retire a conta STOVE extra e então converta o login original por e-mail/SNS. Não crie mais contas Steam. Confira o texto exato no [[FAQ do STOVE Steam|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Por que o botão Transferir fica cinza por três meses?",
      "O STOVE pode aplicar um período de retenção ou cooldown à transferência após uma limpeza de vínculo incorreto ou uma retirada de conta; jogadores costumam relatar três meses. A data de início e o escopo exatos aparecem na interface da sua conta STOVE, não neste site. Espere o prazo ou peça ajuda ao suporte do STOVE — nunca use um serviço de desbloqueio de terceiros."
    ]
  ],
  "de": [
    [
      "Kann ich nach der Umstellung noch auf dem Handy oder am STOVE-PC spielen?",
      "Laut der STOVE-Steam-FAQ kann das umgestellte Konto weiterhin auf STOVE-PC und Handy genutzt werden. Betrachte Steam als weiteren Login-Weg, nicht als Einbahnstraßen-Plattformsperre. Prüfe die aktuellen Geräteregeln in der [[STOVE-Steam-FAQ|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Werden Käufe, nicht abgeholte Belohnungen und der Epic Pass übernommen?",
      "Laut der STOVE-Steam-FAQ werden Fortschritt und Daten – einschließlich nicht abgeholter Belohnungen, Event-Items und Epic Pass – übernommen, wenn der ursprüngliche Login umgestellt wird. Prüfe die aktuellen Details in der [[offiziellen FAQ|https://page.onstove.com/epicseven/global/view/14378309]] vor der Umstellung."
    ],
    [
      "STOVE meldet „bereits registriert“ – was bedeutet das?",
      "Diese Meldung bedeutet meist, dass die Steam-ID bereits mit einem anderen STOVE-Login verknüpft ist, oft mit dem leeren Konto, das Steam beim ersten Start angelegt hat. Autorisiere diese Steam-ID auf STOVE, ziehe das zusätzliche STOVE-Konto zurück und stelle dann den ursprünglichen E-Mail-/SNS-Login um. Lege keine weiteren Steam-Konten an. Prüfe den genauen Wortlaut in der [[STOVE-Steam-FAQ|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Warum ist der Transfer-Button drei Monate lang ausgegraut?",
      "STOVE kann nach einer Bereinigung einer falschen Verknüpfung oder einer Kontozurückziehung eine Halte- oder Abklingzeit auf den Transfer legen; Spieler berichten häufig von drei Monaten. Das genaue Startdatum und der Umfang werden in deiner STOVE-Konto-Oberfläche angezeigt, nicht auf dieser Seite. Warte sie ab oder frage den STOVE-Kundensupport – nutze niemals einen Drittanbieter-Entsperrservice."
    ]
  ],
  "fr": [
    [
      "Puis-je encore jouer sur mobile ou sur PC STOVE après la conversion ?",
      "D’après la FAQ Steam de STOVE, le compte converti reste utilisable sur PC STOVE et sur mobile. Considérez Steam comme une autre voie de connexion, pas comme un verrouillage définitif sur une plateforme. Vérifiez les règles actuelles par appareil dans la [[FAQ Steam de STOVE|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Les achats, les récompenses non réclamées et l’Epic Pass sont-ils transférés ?",
      "D’après la FAQ Steam de STOVE, la progression et les données — y compris les récompenses non réclamées, les objets d’événement et l’Epic Pass — sont transférées lorsque la connexion d’origine est convertie. Vérifiez les détails actuels dans la [[FAQ officielle|https://page.onstove.com/epicseven/global/view/14378309]] avant de convertir."
    ],
    [
      "STOVE affiche « déjà enregistré » — qu’est-ce que cela signifie ?",
      "Ce message signifie généralement que l’ID Steam est déjà associé à une autre connexion STOVE, souvent le compte vide créé par Steam au premier lancement. Autorisez cet ID Steam sur STOVE, retirez le compte STOVE supplémentaire, puis convertissez la connexion e-mail/SNS d’origine. Ne créez pas d’autres comptes Steam. Vérifiez la formulation exacte dans la [[FAQ Steam de STOVE|https://page.onstove.com/epicseven/global/view/14378309]]."
    ],
    [
      "Pourquoi le bouton Transfert est-il grisé pendant trois mois ?",
      "STOVE peut imposer une période d’attente ou de refroidissement du transfert après le nettoyage d’une mauvaise liaison ou un retrait de compte ; les joueurs signalent souvent trois mois. La date de début et la portée exactes sont indiquées dans l’interface de votre compte STOVE, pas sur ce site. Attendez la fin de la période ou contactez le support client STOVE — n’utilisez jamais un service de déblocage tiers."
    ]
  ]
};

export const FAQ_GROUPS: Record<
  Locale,
  readonly { h2: string; intro: string; items: readonly number[] }[]
> = {
  "en": [
    {
      "h2": "Account transfer & wrong Steam bind",
      "intro": "Start here if Steam shows a new Heir, STOVE says “already registered”, or Transfer is greyed out. The usual cause is a second Steam-linked STOVE login, not deleted progress.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, cross-play & schedules",
      "intro": "Foundry is a separate server opened with the Steam launch. Converting login does not move a legacy character onto it; cross-play uses the same linked account.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "Launch, anti-cheat & platform pricing",
      "intro": "Separate client problems from account problems. Anti-cheat and store pricing are platform-level; transfer state is a STOVE account issue.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "Demo, reinstall & data safety",
      "intro": "The demo is over, but the deletion trap is not. Do not use in-game account deletion after a successful Steam login transfer.",
      "items": [
        5
      ]
    }
  ],
  "ko": [
    {
      "h2": "계정 이전·Steam 잘못 연동",
      "intro": "Steam에 새 후계자가 보이거나, STOVE가 “already registered”를 표시하거나, 이전 버튼이 비활성화되면 여기부터 확인하세요. 흔한 원인은 진행 삭제가 아니라 Steam 연동 STOVE 계정이 하나 더 생긴 것입니다.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "파운드리·크로스플레이·일정",
      "intro": "파운드리는 Steam 출시와 함께 열린 별도 서버입니다. 로그인을 전환해도 기존 캐릭터가 파운드리로 이동하지 않으며, 크로스플레이는 같은 연동 계정을 사용합니다.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "실행·안티치트·플랫폼 가격",
      "intro": "클라이언트 문제와 계정 문제를 나눠 보세요. 안티치트와 상점 가격은 플랫폼 영역이고, 이전 상태는 STOVE 계정 문제입니다.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "데모·재설치·데이터 안전",
      "intro": "데모는 끝났지만 삭제 위험은 남아 있습니다. Steam 로그인 전환에 성공한 뒤에는 게임 내 계정 삭제를 사용하지 마세요.",
      "items": [
        5
      ]
    }
  ],
  "ja": [
    {
      "h2": "アカウント引き継ぎ・Steamの誤連携",
      "intro": "Steamで新しい継承者が出る、STOVEが「already registered」と表示する、引き継ぎボタンがグレーのときは、まずここを確認してください。よくある原因は進行消去ではなく、Steam連携のSTOVEアカウントが二重にできたことです。",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "ファウンドリ・クロスプレイ・日程",
      "intro": "ファウンドリはSteamローンチと同時に開いた別サーバーです。ログインを変換しても旧キャラクターはファウンドリへ移動せず、クロスプレイは同じ連携アカウントを使います。",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "起動・アンチチート・プラットフォーム価格",
      "intro": "クライアントの問題とアカウントの問題を分けて考えます。アンチチートとストア価格はプラットフォーム側、引き継ぎ状態はSTOVEアカウント側の話です。",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "デモ・再インストール・データ保護",
      "intro": "デモは終了しましたが、削除の危険は残ります。Steamログイン変換に成功した後に、ゲーム内のアカウント削除を使わないでください。",
      "items": [
        5
      ]
    }
  ],
  "zh-tw": [
    {
      "h2": "帳號轉移與 Steam 錯綁",
      "intro": "若 Steam 出現全新繼承人、STOVE 顯示「already registered」，或轉移按鈕灰掉，先看這裡。常見原因是多了一個 Steam 連結的 STOVE 帳號，而不是進度被刪除。",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry、跨平台與日程",
      "intro": "Foundry 是隨 Steam 上架開啟的獨立伺服器。轉換登入不會把舊角色搬到 Foundry；跨平台使用的是同一個已連結帳號。",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "啟動、反作弊與平台價格",
      "intro": "請把客戶端問題和帳號問題分開看。反作弊與商店價格屬平台層面，轉移狀態則屬 STOVE 帳號層面。",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "試玩、重裝與資料安全",
      "intro": "試玩已結束，但刪號風險仍在。Steam 登入轉換成功後，請勿使用遊戲內帳號刪除。",
      "items": [
        5
      ]
    }
  ],
  "th": [
    {
      "h2": "การโอนบัญชี & การผูก Steam ผิด",
      "intro": "เริ่มที่นี่หาก Steam แสดงทายาทใหม่ STOVE ขึ้นว่า “already registered” หรือปุ่ม Transfer เป็นสีเทา สาเหตุที่พบบ่อยคือล็อกอิน STOVE ที่ผูกกับ Steam อีกอัน ไม่ใช่ความคืบหน้าที่ถูกลบ",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, cross-play & กำหนดการ",
      "intro": "Foundry เป็นเซิร์ฟเวอร์แยกที่เปิดพร้อมการเปิดตัวบน Steam การแปลงล็อกอินไม่ได้ย้ายตัวละครเดิมไปที่นั่น cross-play ใช้บัญชีที่ผูกไว้เดียวกัน",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "การเปิดตัว, anti-cheat & ราคาตามแพลตฟอร์ม",
      "intro": "แยกปัญหาตัวเกมออกจากปัญหาบัญชี anti-cheat และราคาในร้านค้าเป็นเรื่องระดับแพลตฟอร์ม สถานะการโอนเป็นเรื่องของบัญชี STOVE",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "เดโม, การติดตั้งใหม่ & ความปลอดภัยของข้อมูล",
      "intro": "เดโมจบแล้ว แต่กับดักการลบยังอยู่ อย่าใช้การลบบัญชีในเกมหลังโอนล็อกอิน Steam สำเร็จ",
      "items": [
        5
      ]
    }
  ],
  "es": [
    {
      "h2": "Transferencia de cuenta y vínculo incorrecto con Steam",
      "intro": "Empieza aquí si Steam muestra un Heredero nuevo, STOVE dice «ya registrado» o Transferir aparece en gris. La causa habitual es un segundo inicio de sesión de STOVE vinculado a Steam, no un progreso borrado.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, juego cruzado y calendarios",
      "intro": "Foundry es un servidor aparte que se abrió con el lanzamiento en Steam. Convertir el inicio de sesión no traslada un personaje antiguo a ese servidor; el juego cruzado usa la misma cuenta vinculada.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "Lanzamiento, antitrampas y precios por plataforma",
      "intro": "Separa los problemas del cliente de los problemas de cuenta. El antitrampas y los precios de la tienda son de nivel de plataforma; el estado de la transferencia es un tema de la cuenta de STOVE.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "Demo, reinstalación y seguridad de los datos",
      "intro": "La demo terminó, pero la trampa de la eliminación no. No uses la eliminación de cuenta dentro del juego después de una transferencia exitosa del inicio de sesión a Steam.",
      "items": [
        5
      ]
    }
  ],
  "pt": [
    {
      "h2": "Transferência de conta e vínculo incorreto com a Steam",
      "intro": "Comece aqui se a Steam mostra um novo Heir, o STOVE diz “já registrado” ou Transferir está cinza. A causa habitual é um segundo login STOVE vinculado à Steam, não progresso apagado.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, cross-play e cronogramas",
      "intro": "Foundry é um servidor separado aberto com o lançamento na Steam. Converter o login não move um personagem antigo para ele; o cross-play usa a mesma conta vinculada.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "Lançamento, anti-cheat e preços por plataforma",
      "intro": "Separe problemas do cliente de problemas de conta. Anti-cheat e preços de loja são de nível de plataforma; o estado da transferência é uma questão da conta STOVE.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "Demo, reinstalação e segurança dos dados",
      "intro": "A demo acabou, mas a armadilha da exclusão não. Não use a exclusão de conta no jogo depois de uma transferência de login bem-sucedida para a Steam.",
      "items": [
        5
      ]
    }
  ],
  "de": [
    {
      "h2": "Kontotransfer & falsche Steam-Verknüpfung",
      "intro": "Starte hier, wenn Steam einen neuen Erben zeigt, STOVE „bereits registriert“ meldet oder Transfer ausgegraut ist. Die übliche Ursache ist ein zweiter Steam-verknüpfter STOVE-Login, nicht verlorener Fortschritt.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, Cross-Play & Zeitpläne",
      "intro": "Foundry ist ein separater Server, der mit dem Steam-Launch geöffnet wurde. Eine Login-Umstellung verschiebt keinen Alt-Charakter dorthin; Cross-Play nutzt dasselbe verknüpfte Konto.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "Launch, Anti-Cheat & Plattformpreise",
      "intro": "Trenne Client-Probleme von Kontoproblemen. Anti-Cheat und Store-Preise liegen auf Plattformebene; der Transfer-Status ist ein STOVE-Konto-Thema.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "Demo, Neuinstallation & Datensicherheit",
      "intro": "Die Demo ist vorbei, aber die Löschfalle bleibt. Nutze die Ingame-Kontolöschung nach einem erfolgreichen Steam-Login-Transfer nicht.",
      "items": [
        5
      ]
    }
  ],
  "fr": [
    {
      "h2": "Transfert de compte et mauvaise liaison Steam",
      "intro": "Commencez ici si Steam affiche un nouvel Héritier, si STOVE indique « déjà enregistré » ou si le bouton Transfert est grisé. La cause habituelle est une deuxième connexion STOVE liée à Steam, et non une progression supprimée.",
      "items": [
        0,
        6,
        7,
        8,
        9
      ]
    },
    {
      "h2": "Foundry, cross-play et calendrier",
      "intro": "Foundry est un serveur distinct ouvert avec le lancement Steam. La conversion de connexion ne déplace pas un personnage existant sur ce serveur ; le cross-play utilise le même compte lié.",
      "items": [
        1,
        2
      ]
    },
    {
      "h2": "Lancement, anti-triche et prix par plateforme",
      "intro": "Distinguez les problèmes de client des problèmes de compte. L’anti-triche et les prix en boutique relèvent de la plateforme ; l’état du transfert est une question de compte STOVE.",
      "items": [
        3,
        4
      ]
    },
    {
      "h2": "Démo, réinstallation et sécurité des données",
      "intro": "La démo est terminée, mais le piège de la suppression, non. N’utilisez pas la suppression de compte en jeu après un transfert de connexion Steam réussi.",
      "items": [
        5
      ]
    }
  ]
};

export const BANNERS_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  "en": [
    {
      "h2": "Luna path vs a normal pickup banner",
      "intro": "Luna is not the current pickup. The Rank 70 Luna join is a Foundry launch reward path, not a standard limited pickup with its own separate pity counter. Check the in-game banner details before spending.",
      "bullets": [
        "Posted window: through ~2026-12-31 02:59 UTC on Foundry, per the STOVE Foundry notice.",
        "Verify in-client: summon cost, current pity state, and whether the banner is Foundry-only.",
        "Daily free Covenant summons come from Summon Support and are separate from the Luna path."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry notice"
      }
    },
    {
      "h2": "Before you pull — three checks",
      "intro": "Banner posts can change after weekly maintenance. Use these checks instead of trusting a copied date.",
      "bullets": [
        "Convert the posted UTC end time into your own time zone.",
        "Confirm whether your character is on Foundry or a legacy server; the pools are not interchangeable.",
        "Read the official in-game rates and pity rules. This site does not publish unofficial rate tables."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Steam store — app 5019180"
      }
    }
  ],
  "ko": [
    {
      "h2": "루나 경로와 일반 픽업 배너의 차이",
      "intro": "루나는 현재 픽업이 아닙니다. Rank 70 루나 합류는 Foundry 출시 보상 경로이며, 별도 천장이 있는 일반 한정 픽업과 같지 않습니다. 재화를 쓰기 전에 게임 내 배너 설명을 확인하세요.",
      "bullets": [
        "공지 기준 기간: Foundry에서 2026-12-31 02:59 UTC경까지(STOVE Foundry 공지).",
        "게임 내 확인: 소환 비용, 현재 천장 상태, 해당 배너가 Foundry 전용인지.",
        "매일 무료 성약 소환은 소환 지원에서 받으며 루나 경로와 별개입니다."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry 공지"
      }
    },
    {
      "h2": "뽑기 전 세 가지 확인",
      "intro": "배너 공지는 주간 점검 후 바뀔 수 있습니다. 복사된 날짜보다 아래 항목을 직접 확인하세요.",
      "bullets": [
        "공지의 UTC 종료 시각을 내 시간대로 바꿔 확인.",
        "내 캐릭터가 Foundry인지 기존 서버인지 확인 — 소환 풀은 서로 호환되지 않습니다.",
        "게임 내 공식 확률·천장 규칙을 읽으세요. 이 사이트는 비공식 확률표를 제공하지 않습니다."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Steam 스토어 — app 5019180"
      }
    }
  ],
  "ja": [
    {
      "h2": "ルナ導線と通常ピックアップの違い",
      "intro": "ルナは現在のピックアップではありません。Rank 70ルナ加入はファウンドリのローンチ報酬導線で、独自の天井を持つ通常の限定ピックアップとは異なります。消費前にゲーム内のバナー説明を確認してください。",
      "bullets": [
        "告知上の期間：ファウンドリで2026-12-31 02:59 UTC頃まで（STOVEファウンドリ告知）。",
        "ゲーム内で確認：召喚コスト、現在の天井状態、ファウンドリ限定かどうか。",
        "毎日の無料聖約召喚は召喚サポートから受け取り、ルナ導線とは別です。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVEファウンドリ告知"
      }
    },
    {
      "h2": "引く前の3チェック",
      "intro": "バナー告知は毎週のメンテ後に変わることがあります。コピーした日付ではなく、次を確認してください。",
      "bullets": [
        "告知のUTC終了時刻を自分のタイムゾーンに変換する。",
        "自分のキャラがファウンドリか既存サーバーかを確認 — 召喚プールは互換ではありません。",
        "ゲーム内の公式確率・天井ルールを読む。当サイトは非公式の確率表を出しません。"
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Steamストア — app 5019180"
      }
    }
  ],
  "zh-tw": [
    {
      "h2": "Luna 路線與一般限定召喚的差別",
      "intro": "Luna 不是目前 Pickup。Rank 70 Luna 加入是 Foundry 開服獎勵路線，不是另一個有獨立保底的限定召喚。投入資源前請先看遊戲內召喚說明。",
      "bullets": [
        "公告期間：Foundry 約至 2026-12-31 02:59 UTC（STOVE Foundry 公告）。",
        "遊戲內確認：召喚成本、目前保底狀態、是否為 Foundry 限定。",
        "每日免費聖約召喚在召喚支援領取，與 Luna 路線分開計算。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry 公告"
      }
    },
    {
      "h2": "抽卡前先做三項確認",
      "intro": "召喚公告常在每週維護後變動。請直接確認以下項目，不要只信轉貼日期。",
      "bullets": [
        "把公告的 UTC 結束時間換算成自己的時區。",
        "確認角色在 Foundry 還是既有伺服器——召喚池不互通。",
        "閱讀遊戲內官方機率與保底規則；本站不提供非官方機率表。"
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Steam 商店 — app 5019180"
      }
    }
  ],
  "th": [
    {
      "h2": "เส้นทาง Luna กับตู้ปกติ",
      "intro": "Luna ไม่ใช่ตู้ปัจจุบัน การเข้าร่วม Luna Rank 70 เป็นเส้นทางรางวัลเปิดตัว Foundry ไม่ใช่ตู้ลิมิเต็ดปกติที่มีตัวนับ pity แยกของตัวเอง ตรวจรายละเอียดตู้ในเกมก่อนใช้ทรัพยากร",
      "bullets": [
        "ช่วงเวลาที่ประกาศ: ถึง ~2026-12-31 02:59 UTC บน Foundry ตามประกาศ Foundry ของ STOVE",
        "ตรวจในเกม: ค่าใช้จ่ายในการอัญเชิญ สถานะ pity ปัจจุบัน และว่าตู้นั้นเป็นเฉพาะ Foundry หรือไม่",
        "การอัญเชิญ Covenant ฟรีรายวันมาจาก Summon Support และแยกจากเส้นทาง Luna"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "ประกาศ Foundry ของ STOVE"
      }
    },
    {
      "h2": "ก่อนอัญเชิญ — เช็กสามข้อ",
      "intro": "ประกาศตู้อาจเปลี่ยนหลังเมนเทนแนนซ์รายสัปดาห์ ใช้เช็กลิสต์นี้แทนการเชื่อวันที่ที่คัดลอกต่อกันมา",
      "bullets": [
        "แปลงเวลาสิ้นสุด UTC ที่ประกาศเป็นเขตเวลาของคุณ",
        "ยืนยันว่าตัวละครของคุณอยู่บน Foundry หรือเซิร์ฟเวอร์เดิม พูลไม่สามารถใช้แทนกันได้",
        "อ่านอัตราและกฎ pity อย่างเป็นทางการในเกม เว็บไซต์นี้ไม่เผยแพร่ตารางอัตราอย่างไม่เป็นทางการ"
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "ร้านค้า Steam — app 5019180"
      }
    }
  ],
  "es": [
    {
      "h2": "Ruta de Luna vs. un banner destacado normal",
      "intro": "Luna no es el destacado actual. La incorporación de Luna en el rango 70 es una ruta de recompensa del lanzamiento de Foundry, no un banner limitado estándar con su propio contador de pity separado. Revisa los detalles del banner dentro del juego antes de gastar.",
      "bullets": [
        "Ventana publicada: hasta ~2026-12-31 02:59 UTC en Foundry, según el aviso de Foundry de STOVE.",
        "Verifica en el cliente: costo de invocación, estado actual del pity y si el banner es solo de Foundry.",
        "Las invocaciones diarias gratuitas de Covenant vienen del Apoyo de invocación y son independientes de la ruta de Luna."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Aviso de Foundry de STOVE"
      }
    },
    {
      "h2": "Antes de invocar — tres comprobaciones",
      "intro": "Los avisos de banner pueden cambiar tras el mantenimiento semanal. Usa estas comprobaciones en lugar de fiarte de una fecha copiada.",
      "bullets": [
        "Convierte la hora de fin publicada en UTC a tu zona horaria.",
        "Confirma si tu personaje está en Foundry o en un servidor antiguo; los pools no son intercambiables.",
        "Lee las tasas y reglas de pity oficiales dentro del juego. Este sitio no publica tablas de tasas no oficiales."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Tienda de Steam — app 5019180"
      }
    }
  ],
  "pt": [
    {
      "h2": "Caminho da Luna vs. um banner de destaque normal",
      "intro": "Luna não é o destaque atual. A entrada de Luna no Rank 70 é um caminho de recompensa do lançamento do Foundry, não um banner limitado padrão com contador de pity separado. Confira os detalhes do banner no jogo antes de gastar.",
      "bullets": [
        "Janela divulgada: até ~2026-12-31 02:59 UTC no Foundry, conforme o aviso do Foundry no STOVE.",
        "Verifique no cliente: custo da invocação, estado atual do pity e se o banner é exclusivo do Foundry.",
        "As invocações diárias gratuitas de Covenant vêm do Summon Support e são separadas do caminho da Luna."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Aviso do Foundry no STOVE"
      }
    },
    {
      "h2": "Antes de puxar — três verificações",
      "intro": "Posts de banner podem mudar após a manutenção semanal. Use estas verificações em vez de confiar em uma data copiada.",
      "bullets": [
        "Converta o horário de término em UTC divulgado para o seu fuso horário.",
        "Confirme se seu personagem está no Foundry ou em um servidor antigo; os pools não são intercambiáveis.",
        "Leia as taxas oficiais no jogo e as regras de pity. Este site não publica tabelas de taxas não oficiais."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Loja da Steam — app 5019180"
      }
    }
  ],
  "de": [
    {
      "h2": "Luna-Pfad vs. normales Pickup-Banner",
      "intro": "Luna ist nicht das aktuelle Pickup. Der Luna-Beitritt auf Rang 70 ist ein Foundry-Launch-Belohnungspfad, kein standardmäßiges limitiertes Pickup mit eigenem Pity-Zähler. Prüfe die Ingame-Bannerdetails, bevor du ausgibst.",
      "bullets": [
        "Angekündigtes Zeitfenster: bis ~2026-12-31 02:59 UTC auf Foundry, laut STOVE-Foundry-Hinweis.",
        "Im Client prüfen: Beschwörungskosten, aktueller Pity-Stand und ob das Banner nur auf Foundry gilt.",
        "Tägliche kostenlose Covenant-Beschwörungen kommen aus dem Summon-Support und sind getrennt vom Luna-Pfad."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE-Foundry-Hinweis"
      }
    },
    {
      "h2": "Bevor du ziehst – drei Checks",
      "intro": "Banner-Ankündigungen können sich nach der wöchentlichen Wartung ändern. Nutze diese Checks, statt einem kopierten Datum zu vertrauen.",
      "bullets": [
        "Rechne die angegebene UTC-Endzeit in deine eigene Zeitzone um.",
        "Prüfe, ob dein Charakter auf Foundry oder einem Alt-Server ist; die Pools sind nicht austauschbar.",
        "Lies die offiziellen Ingame-Raten und Pity-Regeln. Diese Seite veröffentlicht keine inoffiziellen Rate-Tabellen."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Steam-Store — App 5019180"
      }
    }
  ],
  "fr": [
    {
      "h2": "Parcours Luna ou bannière de pick-up classique",
      "intro": "Luna n’est pas le pick-up actuel. L’arrivée de Luna au rang 70 est un parcours de récompense du lancement de Foundry, pas un pick-up limité standard avec son propre compteur de pity distinct. Vérifiez les détails de la bannière en jeu avant de dépenser.",
      "bullets": [
        "Fenêtre annoncée : jusqu’au ~2026-12-31 02:59 UTC sur Foundry, selon l’annonce Foundry de STOVE.",
        "Vérifiez dans le client : coût d’invocation, état actuel du pity et si la bannière est réservée à Foundry.",
        "Les invocations Covenant gratuites quotidiennes proviennent de Summon Support et sont distinctes du parcours Luna."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Annonce Foundry de STOVE"
      }
    },
    {
      "h2": "Avant d’invoquer — trois vérifications",
      "intro": "Les annonces de bannières peuvent changer après la maintenance hebdomadaire. Faites ces vérifications plutôt que de faire confiance à une date recopiée.",
      "bullets": [
        "Convertissez l’heure de fin UTC annoncée dans votre propre fuseau horaire.",
        "Vérifiez si votre personnage est sur Foundry ou sur un serveur existant ; les pools ne sont pas interchangeables.",
        "Lisez les taux officiels et les règles de pity en jeu. Ce site ne publie pas de tables de taux non officielles."
      ],
      "source": {
        "href": "https://store.steampowered.com/app/5019180/Epic_Seven/",
        "label": "Boutique Steam — app 5019180"
      }
    }
  ]
};

export const UPDATES_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  "en": [
    {
      "h2": "Steam launch vs Foundry timeline",
      "intro": "The launch window has two tracks: the Steam client going live and the new Foundry server unlocking content. Keep them separate when you plan.",
      "bullets": [
        "2026-10-29 — Steam client live and Foundry open after maintenance.",
        "2026-11-21 03:00 UTC — Foundry Guild War unlocks.",
        "2026-12-10 — Foundry World Arena after maintenance (UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry notice"
      }
    },
    {
      "h2": "How to verify an update before acting",
      "intro": "A summary can age quickly. Check the original notice before you spend currency or change an account setting.",
      "bullets": [
        "Open the linked STOVE notice for the original UTC time and eligibility.",
        "Check whether the change is Foundry-only or also applies to legacy servers.",
        "For client fixes, compare the Steam build in your library with the Steam news post."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam news"
      }
    }
  ],
  "ko": [
    {
      "h2": "Steam 출시와 Foundry 타임라인",
      "intro": "출시 기간에는 Steam 클라이언트 오픈과 Foundry 서버 콘텐츠 해금이라는 두 가지 일정이 겹칩니다. 계획할 때는 나눠서 보세요.",
      "bullets": [
        "2026-10-29 — 점검 후 Steam 클라이언트 정식 오픈, Foundry 개설.",
        "2026-11-21 03:00 UTC — Foundry 길드전 해금.",
        "2026-12-10 — 점검 후 Foundry 월드 아레나(UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry 공지"
      }
    },
    {
      "h2": "행동 전 업데이트 확인법",
      "intro": "요약은 빠르게 낡을 수 있습니다. 재화를 쓰거나 계정 설정을 바꾸기 전에 원문 공지를 확인하세요.",
      "bullets": [
        "연결된 STOVE 공지에서 원문 UTC 시각과 대상 조건을 확인.",
        "변경이 Foundry 전용인지 기존 서버에도 적용되는지 확인.",
        "클라이언트 수정은 Steam 라이브러리 빌드와 Steam 뉴스 글을 비교."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam 뉴스"
      }
    }
  ],
  "ja": [
    {
      "h2": "Steamローンチとファウンドリのタイムライン",
      "intro": "ローンチ期はSteamクライアント開始とファウンドリのコンテンツ解放が重なります。計画では分けて考えてください。",
      "bullets": [
        "2026-10-29 — メンテ後にSteamクライアント正式開始、ファウンドリ開設。",
        "2026-11-21 03:00 UTC — ファウンドリのギルド戦解放。",
        "2026-12-10 — メンテ後にファウンドリのワールドアリーナ（UTC）。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVEファウンドリ告知"
      }
    },
    {
      "h2": "行動前に更新を確認する方法",
      "intro": "要約はすぐ古くなります。通貨を使ったりアカウント設定を変えたりする前に、原文の告知を確認してください。",
      "bullets": [
        "リンクされたSTOVE告知で原文のUTC時刻と対象条件を確認。",
        "変更がファウンドリ限定か、既存サーバーにも適用されるかを確認。",
        "クライアント修正はSteamライブラリのビルドとSteamニュース記事を比較。"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steamニュース"
      }
    }
  ],
  "zh-tw": [
    {
      "h2": "Steam 上架與 Foundry 時程",
      "intro": "開服期有兩條時間線：Steam 客戶端開放，以及 Foundry 新伺服器解鎖內容。規劃時請分開看。",
      "bullets": [
        "2026-10-29 — 維護後 Steam 客戶端正式上線、Foundry 開服。",
        "2026-11-21 03:00 UTC — Foundry 公會戰解鎖。",
        "2026-12-10 — 維護後 Foundry 世界競技場（UTC）。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE Foundry 公告"
      }
    },
    {
      "h2": "行動前如何核對更新",
      "intro": "摘要可能很快過時。投入資源或變更帳號設定前，請先看原始公告。",
      "bullets": [
        "點開連結的 STOVE 公告，確認原始 UTC 時間與適用對象。",
        "確認改動是 Foundry 限定，還是也套用到既有伺服器。",
        "客戶端修正請比對 Steam 收藏庫版本與 Steam 新聞內容。"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam 新聞"
      }
    }
  ],
  "th": [
    {
      "h2": "ไทม์ไลน์เปิดตัว Steam กับ Foundry",
      "intro": "ช่วงเปิดตัวมีสองแทร็ก: ไคลเอนต์ Steam เปิดให้บริการ และเซิร์ฟเวอร์ Foundry ใหม่ปลดล็อกเนื้อหา แยกสองเรื่องนี้ออกจากกันเมื่อวางแผน",
      "bullets": [
        "2026-10-29 — ไคลเอนต์ Steam เปิด และ Foundry เปิดหลังเมนเทนแนนซ์",
        "2026-11-21 03:00 UTC — Guild War บน Foundry ปลดล็อก",
        "2026-12-10 — World Arena บน Foundry หลังเมนเทนแนนซ์ (UTC)"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "ประกาศ Foundry ของ STOVE"
      }
    },
    {
      "h2": "วิธีตรวจสอบอัปเดตก่อนลงมือ",
      "intro": "สรุปอาจเก่าเร็ว ตรวจประกาศต้นฉบับก่อนใช้สกุลเงินหรือเปลี่ยนการตั้งค่าบัญชี",
      "bullets": [
        "เปิดประกาศ STOVE ที่ลิงก์ไว้เพื่อดูเวลา UTC และคุณสมบัติผู้เข้าร่วมต้นฉบับ",
        "ตรวจว่าการเปลี่ยนแปลงเป็นเฉพาะ Foundry หรือใช้กับเซิร์ฟเวอร์เดิมด้วย",
        "สำหรับการแก้ไขไคลเอนต์ ให้เทียบ build บน Steam ในคลังกับโพสต์ข่าว Steam"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "ข่าว Steam"
      }
    }
  ],
  "es": [
    {
      "h2": "Lanzamiento en Steam vs. cronograma de Foundry",
      "intro": "La ventana de lanzamiento tiene dos vías: la entrada en vivo del cliente de Steam y el desbloqueo de contenido en el nuevo servidor Foundry. Mantenlas separadas al planificar.",
      "bullets": [
        "2026-10-29 — cliente de Steam en vivo y Foundry abierto tras el mantenimiento.",
        "2026-11-21 03:00 UTC — se desbloquea Guild War de Foundry.",
        "2026-12-10 — World Arena de Foundry tras el mantenimiento (UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Aviso de Foundry de STOVE"
      }
    },
    {
      "h2": "Cómo verificar una actualización antes de actuar",
      "intro": "Un resumen puede quedar desactualizado rápido. Revisa el aviso original antes de gastar moneda o cambiar una opción de la cuenta.",
      "bullets": [
        "Abre el aviso de STOVE enlazado para consultar la hora original en UTC y los requisitos.",
        "Comprueba si el cambio es solo para Foundry o si también se aplica a los servidores antiguos.",
        "Para las correcciones del cliente, compara la compilación de Steam en tu biblioteca con la publicación de noticias de Steam."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Noticias de Steam"
      }
    }
  ],
  "pt": [
    {
      "h2": "Linha do tempo do lançamento na Steam vs. Foundry",
      "intro": "A janela de lançamento tem duas trilhas: o cliente Steam entrando no ar e o novo servidor Foundry liberando conteúdo. Mantenha-as separadas ao planejar.",
      "bullets": [
        "2026-10-29 — cliente Steam no ar e Foundry aberto após a manutenção.",
        "2026-11-21 03:00 UTC — Guild War do Foundry liberado.",
        "2026-12-10 — World Arena do Foundry após a manutenção (UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Aviso do Foundry no STOVE"
      }
    },
    {
      "h2": "Como verificar uma atualização antes de agir",
      "intro": "Um resumo envelhece rápido. Confira o aviso original antes de gastar moeda ou mudar uma configuração da conta.",
      "bullets": [
        "Abra o aviso do STOVE linkado para o horário original em UTC e a elegibilidade.",
        "Confira se a mudança é exclusiva do Foundry ou também vale para servidores antigos.",
        "Para correções do cliente, compare o build da Steam na sua biblioteca com a postagem de notícias da Steam."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Notícias da Steam"
      }
    }
  ],
  "de": [
    {
      "h2": "Steam-Launch vs. Foundry-Zeitplan",
      "intro": "Das Launch-Fenster hat zwei Spuren: der Steam-Client geht live und der neue Foundry-Server schaltet Inhalte frei. Halte sie bei deiner Planung getrennt.",
      "bullets": [
        "2026-10-29 — Steam-Client live und Foundry nach der Wartung offen.",
        "2026-11-21 03:00 UTC — Foundry Guild War wird freigeschaltet.",
        "2026-12-10 — Foundry World Arena nach der Wartung (UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "STOVE-Foundry-Hinweis"
      }
    },
    {
      "h2": "So prüfst du ein Update, bevor du handelst",
      "intro": "Eine Zusammenfassung kann schnell veralten. Prüfe den Original-Hinweis, bevor du Währung ausgibst oder eine Kontoeinstellung änderst.",
      "bullets": [
        "Öffne den verlinkten STOVE-Hinweis für die originale UTC-Zeit und die Teilnahmebedingungen.",
        "Prüfe, ob die Änderung nur Foundry betrifft oder auch für Alt-Server gilt.",
        "Vergleiche bei Client-Fixes den Steam-Build in deiner Bibliothek mit dem Steam-News-Post."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam-News"
      }
    }
  ],
  "fr": [
    {
      "h2": "Calendrier du lancement Steam et de Foundry",
      "intro": "La fenêtre de lancement comporte deux volets : la mise en ligne du client Steam et l’ouverture progressive du nouveau serveur Foundry. Distinguez-les dans votre planification.",
      "bullets": [
        "2026-10-29 — client Steam en ligne et Foundry ouvert après la maintenance.",
        "2026-11-21 03:00 UTC — ouverture de Guild War sur Foundry.",
        "2026-12-10 — World Arena sur Foundry après la maintenance (UTC)."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14571828",
        "label": "Annonce Foundry de STOVE"
      }
    },
    {
      "h2": "Comment vérifier une mise à jour avant d’agir",
      "intro": "Un résumé vieillit vite. Consultez l’annonce d’origine avant de dépenser de la monnaie ou de modifier un réglage de compte.",
      "bullets": [
        "Ouvrez l’annonce STOVE liée pour l’heure UTC d’origine et les conditions d’éligibilité.",
        "Vérifiez si le changement concerne uniquement Foundry ou s’applique aussi aux serveurs existants.",
        "Pour les correctifs du client, comparez la version Steam de votre bibliothèque avec l’article d’actualité Steam."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Actualités Steam"
      }
    }
  ]
};

export const MAINTENANCE_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  "en": [
    {
      "h2": "What a maintenance window usually changes",
      "intro": "Weekly maintenance is where event windows, Foundry unlocks, and client fixes land together. Read the notice before you plan pulls or transfers.",
      "bullets": [
        "Event and banner start/end times, usually posted in UTC.",
        "Foundry unlocks such as Guild War and World Arena.",
        "Client and anti-cheat updates delivered through Steam."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "STOVE Epic Seven hub"
      }
    },
    {
      "h2": "Pre-patch checklist",
      "intro": "A short checklist prevents most launch-day surprises.",
      "bullets": [
        "Claim time-limited mail and event rewards before downtime starts.",
        "Note the official start and end time from STOVE — not a social-media repost.",
        "After patching, relaunch Steam and confirm the build before reporting a launch bug."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam news"
      }
    }
  ],
  "ko": [
    {
      "h2": "점검에서 주로 바뀌는 것",
      "intro": "주간 점검에는 이벤트 기간, Foundry 해금, 클라이언트 수정이 함께 반영됩니다. 소환·이전 계획 전에 공지를 읽으세요.",
      "bullets": [
        "이벤트·배너 시작/종료 시각(보통 UTC).",
        "길드전·월드 아레나 같은 Foundry 해금.",
        "Steam으로 배포되는 클라이언트·안티치트 업데이트."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "STOVE Epic Seven 허브"
      }
    },
    {
      "h2": "점검 전 체크리스트",
      "intro": "짧은 점검 목록만으로도 출시일의 대부분의 실수를 막을 수 있습니다.",
      "bullets": [
        "점검 시작 전에 기간 한정 우편·이벤트 보상 수령.",
        "SNS 재게시가 아니라 STOVE 공지의 공식 시작·종료 시각 확인.",
        "패치 후 Steam을 다시 실행해 빌드를 확인한 뒤 실행 오류를 제보."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam 뉴스"
      }
    }
  ],
  "ja": [
    {
      "h2": "メンテで主に変わるもの",
      "intro": "週次メンテではイベント期間、ファウンドリの解放、クライアント修正がまとめて反映されます。召喚や引き継ぎの計画前に告知を読みましょう。",
      "bullets": [
        "イベント・バナーの開始/終了時刻（通常UTC）。",
        "ギルド戦やワールドアリーナなどのファウンドリ解放。",
        "Steam経由で配信されるクライアント・アンチチート更新。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "STOVE Epic Sevenハブ"
      }
    },
    {
      "h2": "メンテ前チェックリスト",
      "intro": "短いチェックでもローンチ日のトラブルの多くを防げます。",
      "bullets": [
        "メンテ開始前に期間限定メール・イベント報酬を受け取る。",
        "SNSの転載ではなくSTOVE告知の公式開始・終了時刻を控える。",
        "パッチ後にSteamを再起動しビルドを確認してから起動不具合を報告。"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steamニュース"
      }
    }
  ],
  "zh-tw": [
    {
      "h2": "維護通常會改動什麼",
      "intro": "每週維護會同時更新活動期間、Foundry 解鎖與客戶端修正。安排召喚或轉移前先讀公告。",
      "bullets": [
        "活動與召喚開始／結束時間，通常以 UTC 公布。",
        "公會戰、世界競技場等 Foundry 解鎖。",
        "透過 Steam 派送的客戶端與反作弊更新。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "STOVE Epic Seven 中心"
      }
    },
    {
      "h2": "維護前檢查清單",
      "intro": "簡短檢查就能避免開服日多數意外。",
      "bullets": [
        "維護開始前領取限時信件與活動獎勵。",
        "記下 STOVE 公告的官方開始／結束時間，不要用社群轉貼。",
        "更新後重開 Steam 確認版本，再回報啟動問題。"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam 新聞"
      }
    }
  ],
  "th": [
    {
      "h2": "ช่วงเมนเทนแนนซ์มักเปลี่ยนอะไร",
      "intro": "เมนเทนแนนซ์รายสัปดาห์เป็นจุดที่ช่วงเวลาอีเวนต์ การปลดล็อก Foundry และการแก้ไขไคลเอนต์มาพร้อมกัน อ่านประกาศก่อนวางแผนอัญเชิญหรือโอน",
      "bullets": [
        "เวลาเริ่ม/สิ้นสุดของอีเวนต์และตู้ มักประกาศเป็น UTC",
        "การปลดล็อกบน Foundry เช่น Guild War และ World Arena",
        "อัปเดตไคลเอนต์และ anti-cheat ที่ส่งผ่าน Steam"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "ศูนย์รวม Epic Seven บน STOVE"
      }
    },
    {
      "h2": "เช็กลิสต์ก่อนแพตช์",
      "intro": "เช็กลิสต์สั้น ๆ ช่วยป้องกันความประหลาดใจในวันเปิดตัวได้เกือบทั้งหมด",
      "bullets": [
        "รับเมลและของรางวัลอีเวนต์ที่มีเวลาจำกัดก่อนดาวน์ไทม์เริ่ม",
        "จดเวลาเริ่มและสิ้นสุดอย่างเป็นทางการจาก STOVE — ไม่ใช่จากโพสต์รีโพสต์ในโซเชียล",
        "หลังแพตช์ ให้เปิด Steam ใหม่และยืนยัน build ก่อนรายงานบั๊กการเปิดเกม"
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "ข่าว Steam"
      }
    }
  ],
  "es": [
    {
      "h2": "Qué suele cambiar una ventana de mantenimiento",
      "intro": "En el mantenimiento semanal coinciden las ventanas de evento, los desbloqueos de Foundry y las correcciones del cliente. Lee el aviso antes de planificar invocaciones o transferencias.",
      "bullets": [
        "Horas de inicio y fin de eventos y banners, normalmente publicadas en UTC.",
        "Desbloqueos de Foundry como Guild War y World Arena.",
        "Actualizaciones del cliente y del antitrampas entregadas a través de Steam."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "Centro de Epic Seven en STOVE"
      }
    },
    {
      "h2": "Lista de comprobación antes del parche",
      "intro": "Una lista breve evita la mayoría de las sorpresas del día de lanzamiento.",
      "bullets": [
        "Reclama el correo y las recompensas de evento con tiempo limitado antes de que empiece el mantenimiento.",
        "Anota la hora oficial de inicio y fin en STOVE, no una publicación compartida en redes sociales.",
        "Tras aplicar el parche, reinicia Steam y confirma la compilación antes de reportar un error de lanzamiento."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Noticias de Steam"
      }
    }
  ],
  "pt": [
    {
      "h2": "O que uma janela de manutenção costuma mudar",
      "intro": "A manutenção semanal é onde janelas de evento, liberações do Foundry e correções do cliente chegam juntas. Leia o aviso antes de planejar pulls ou transferências.",
      "bullets": [
        "Horários de início/fim de eventos e banners, geralmente divulgados em UTC.",
        "Liberações do Foundry, como Guild War e World Arena.",
        "Atualizações de cliente e anti-cheat entregues pela Steam."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "Central do Epic Seven no STOVE"
      }
    },
    {
      "h2": "Checklist antes do patch",
      "intro": "Uma checklist curta evita a maioria das surpresas no dia do lançamento.",
      "bullets": [
        "Resgate o correio e as recompensas de evento com tempo limitado antes do início da manutenção.",
        "Anote o horário oficial de início e fim no STOVE — não um repost de rede social.",
        "Depois do patch, reinicie a Steam e confirme o build antes de relatar um bug de lançamento."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Notícias da Steam"
      }
    }
  ],
  "de": [
    {
      "h2": "Was ein Wartungsfenster normalerweise ändert",
      "intro": "In der wöchentlichen Wartung landen Event-Fenster, Foundry-Freischaltungen und Client-Fixes zusammen. Lies den Hinweis, bevor du Pulls oder Transfers planst.",
      "bullets": [
        "Start-/Endzeiten von Events und Bannern, meist in UTC angegeben.",
        "Foundry-Freischaltungen wie Guild War und World Arena.",
        "Client- und Anti-Cheat-Updates, die über Steam ausgeliefert werden."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "STOVE Epic Seven Hub"
      }
    },
    {
      "h2": "Checkliste vor dem Patch",
      "intro": "Eine kurze Checkliste verhindert die meisten Überraschungen am Launch-Tag.",
      "bullets": [
        "Hole zeitlich begrenzte Post und Event-Belohnungen ab, bevor die Downtime beginnt.",
        "Notiere die offizielle Start- und Endzeit von STOVE – nicht aus einem Social-Media-Repost.",
        "Starte nach dem Patchen Steam neu und prüfe den Build, bevor du einen Launch-Bug meldest."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Steam-News"
      }
    }
  ],
  "fr": [
    {
      "h2": "Ce qu’une fenêtre de maintenance change habituellement",
      "intro": "La maintenance hebdomadaire concentre les fenêtres d’événements, les ouvertures Foundry et les correctifs du client. Lisez l’annonce avant de planifier vos invocations ou vos transferts.",
      "bullets": [
        "Heures de début et de fin des événements et des bannières, généralement annoncées en UTC.",
        "Ouvertures Foundry comme Guild War et World Arena.",
        "Mises à jour du client et de l’anti-triche livrées via Steam."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global",
        "label": "Hub Epic Seven de STOVE"
      }
    },
    {
      "h2": "Liste de vérification avant le patch",
      "intro": "Une courte liste de vérification évite la plupart des surprises du jour du lancement.",
      "bullets": [
        "Réclamez le courrier et les récompenses d’événement à durée limitée avant le début de l’indisponibilité.",
        "Notez l’heure officielle de début et de fin indiquée par STOVE — pas un repost sur les réseaux sociaux.",
        "Après le patch, relancez Steam et vérifiez la version avant de signaler un bug de lancement."
      ],
      "source": {
        "href": "https://store.steampowered.com/news/app/5019180/view/685267261521395852",
        "label": "Actualités Steam"
      }
    }
  ]
};

export const RABBIT_SUPPLEMENT: Record<
  Locale,
  readonly SupplementSection[]
> = {
  "en": [
    {
      "h2": "Daily points: how to use the 720 cap",
      "intro": "The Daily Investigation gives points for adventure, battles, and Arena. The posted cap is 720 per day, so plan around it instead of trying to catch up later.",
      "bullets": [
        "Earn points through normal play; check the event page for the current daily cap.",
        "Redeem Lucky Board tickets and Leif milestones before the 2026-11-19 02:59 UTC window closes.",
        "The Bunny Girl Party Hall lobby pack runs longer, to 2026-12-10 02:59 UTC, and is optional."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "STOVE Lucky Board notice"
      }
    },
    {
      "h2": "Case Files without wasted glasses",
      "intro": "Case Files is a grid-deduction event, not a combat check. The daily magnifying glasses are the limiting resource.",
      "bullets": [
        "Use the daily supply first; late-event Energy top-ups are optional.",
        "Fill the O/X grid and unlock the Culprit Clue before accusing.",
        "This page explains mechanics only; it does not publish culprit answer keys."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "STOVE Case Files notice"
      }
    }
  ],
  "ko": [
    {
      "h2": "일일 포인트 720 상한 활용",
      "intro": "일일 조사는 모험·전투·아레나로 포인트를 줍니다. 공지 기준 상한은 하루 720이라, 나중에 몰아서 채우기보다 그날 계획을 세우세요.",
      "bullets": [
        "일반 플레이로 포인트를 모으고 이벤트 페이지에서 당일 상한을 확인.",
        "2026-11-19 02:59 UTC 창이 닫히기 전에 럭키 보드 티켓·Leif 마일스톤 수령.",
        "버니 걸 파티 홀 로비 팩은 2026-12-10 02:59 UTC까지로 더 길며 선택 사항."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "STOVE 럭키 보드 공지"
      }
    },
    {
      "h2": "돋보기 낭비 없이 케이스 파일",
      "intro": "케이스 파일은 전투력이 아니라 격자 추리 이벤트입니다. 일일 돋보기가 핵심 자원입니다.",
      "bullets": [
        "일일 지급분을 먼저 쓰고, 후반 Energy 보충은 선택.",
        "범인을 지목하기 전에 O/X 격자를 채우고 Culprit Clue를 해금.",
        "이 페이지는 진행 방식만 설명하며 범인 정답표를 제공하지 않습니다."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "STOVE 케이스 파일 공지"
      }
    }
  ],
  "ja": [
    {
      "h2": "デイリーポイント720上限の使い方",
      "intro": "デイリー調査は冒険・バトル・アリーナでポイントが入ります。告知上の上限は1日720なので、後からまとめて取り戻すのではなく当日の計画を立ててください。",
      "bullets": [
        "通常プレイでポイントを集め、イベントページで当日の上限を確認。",
        "2026-11-19 02:59 UTCの窓が閉じる前にラッキーボード券・Leifのマイルストーンを受け取る。",
        "バニーガールパーティホールのロビーパックは2026-12-10 02:59 UTCまでで任意。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "STOVEラッキーボード告知"
      }
    },
    {
      "h2": "虫眼鏡を無駄にしないケースファイル",
      "intro": "ケースファイルは戦闘力ではなくグリッド推理のイベントです。毎日の虫眼鏡が主要リソースです。",
      "bullets": [
        "毎日の配布分を先に使い、終盤のEnergy補充は任意。",
        "犯人を指名する前にO/Xグリッドを埋め、Culprit Clueを解放。",
        "このページは進行方法のみを説明し、犯人の答えは掲載しません。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "STOVEケースファイル告知"
      }
    }
  ],
  "zh-tw": [
    {
      "h2": "每日 720 點上限怎麼用",
      "intro": "每日調查透過冒險、戰鬥與競技場取得點數。公告上限為每天 720，請依當日上限規劃，不要想之後一次補回。",
      "bullets": [
        "用正常遊玩累積點數，並在活動頁確認當日上限。",
        "在 2026-11-19 02:59 UTC 結束前領取幸運盤券與 Leif 里程碑。",
        "兔女郎派對大廳禮包開放到 2026-12-10 02:59 UTC，屬選購項目。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "STOVE 幸運盤公告"
      }
    },
    {
      "h2": "不浪費放大鏡的案情檔案",
      "intro": "案情檔案是格子推理活動，不是戰力檢查。每日放大鏡才是關鍵資源。",
      "bullets": [
        "先使用每日配給，活動後期的 Energy 補充屬選購。",
        "指名犯人前先填完 O/X 格子並解鎖 Culprit Clue。",
        "本頁只說明玩法，不公布犯人答案。"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "STOVE 案情檔案公告"
      }
    }
  ],
  "th": [
    {
      "h2": "พอยต์รายวัน: ใช้เพดาน 720 อย่างไร",
      "intro": "Daily Investigation ให้พอยต์จากการผจญภัย การต่อสู้ และ Arena เพดานที่ประกาศคือ 720 ต่อวัน วางแผนโดยยึดตามนี้แทนที่จะไปตามเก็บทีหลัง",
      "bullets": [
        "รับพอยต์จากการเล่นปกติ ตรวจหน้าอีเวนต์สำหรับเพดานรายวันปัจจุบัน",
        "แลกตั๋ว Lucky Board และหมุดหมาย Leif ก่อนหน้าต่าง 2026-11-19 02:59 UTC ปิด",
        "แพ็กในล็อบบี้ Bunny Girl Party Hall มีระยะเวลานานกว่า ถึง 2026-12-10 02:59 UTC และเป็นทางเลือก"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "ประกาศ Lucky Board ของ STOVE"
      }
    },
    {
      "h2": "Case Files โดยไม่เสียแว่นขยายเปล่า",
      "intro": "Case Files เป็นอีเวนต์อนุมานจากตาราง ไม่ใช่ด่านต่อสู้ แว่นขยายรายวันคือทรัพยากรที่จำกัด",
      "bullets": [
        "ใช้ของแจกประจำวันก่อน การเติม Energy ช่วงท้ายอีเวนต์เป็นทางเลือก",
        "เติมตาราง O/X และปลดล็อก Culprit Clue ก่อนกล่าวหา",
        "หน้านี้อธิบายกลไกเท่านั้น ไม่ได้เผยแพร่เฉลยคนร้าย"
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "ประกาศ Case Files ของ STOVE"
      }
    }
  ],
  "es": [
    {
      "h2": "Puntos diarios: cómo usar el límite de 720",
      "intro": "La Investigación diaria da puntos por aventura, combates y Arena. El límite publicado es de 720 al día, así que planifica en torno a él en vez de intentar recuperar el retraso después.",
      "bullets": [
        "Gana puntos jugando con normalidad; consulta la página del evento para ver el límite diario vigente.",
        "Canjea los billetes del Lucky Board y los hitos de Leif antes de que cierre la ventana del 2026-11-19 02:59 UTC.",
        "El paquete de lobby del Bunny Girl Party Hall dura más, hasta el 2026-12-10 02:59 UTC, y es opcional."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "Aviso del Lucky Board de STOVE"
      }
    },
    {
      "h2": "Case Files sin desperdiciar lupas",
      "intro": "Case Files es un evento de deducción en cuadrícula, no una prueba de combate. Las lupas diarias son el recurso limitante.",
      "bullets": [
        "Usa primero el suministro diario; las recargas de energía de última hora son opcionales.",
        "Rellena la cuadrícula O/X y desbloquea la Pista del culpable antes de acusar.",
        "Esta página solo explica la mecánica; no publica las soluciones de los culpables."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "Aviso de Case Files de STOVE"
      }
    }
  ],
  "pt": [
    {
      "h2": "Pontos diários: como usar o limite de 720",
      "intro": "A Investigação Diária dá pontos por aventura, batalhas e Arena. O limite divulgado é 720 por dia, então planeje em torno disso em vez de tentar recuperar depois.",
      "bullets": [
        "Ganhe pontos jogando normalmente; confira a página do evento para o limite diário atual.",
        "Resgate tickets do Lucky Board e marcos de Leif antes de a janela de 2026-11-19 02:59 UTC fechar.",
        "O pacote de lobby do Bunny Girl Party Hall dura mais, até 2026-12-10 02:59 UTC, e é opcional."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "Aviso do Lucky Board no STOVE"
      }
    },
    {
      "h2": "Case Files sem desperdiçar lentes",
      "intro": "Case Files é um evento de dedução em grade, não uma checagem de combate. As lentes de aumento diárias são o recurso limitante.",
      "bullets": [
        "Use o suprimento diário primeiro; recargas de Energy no fim do evento são opcionais.",
        "Preencha a grade O/X e desbloqueie a Pista do Culpado antes de acusar.",
        "Esta página explica apenas a mecânica; ela não publica gabaritos de culpados."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "Aviso do Case Files no STOVE"
      }
    }
  ],
  "de": [
    {
      "h2": "Tagespunkte: So nutzt du das 720-Limit",
      "intro": "Die Daily Investigation gibt Punkte für Abenteuer, Kämpfe und Arena. Das angegebene Limit liegt bei 720 pro Tag, plane also damit, statt später aufholen zu wollen.",
      "bullets": [
        "Sammle Punkte durch normales Spiel; prüfe die Event-Seite für das aktuelle Tageslimit.",
        "Löse Lucky-Board-Tickets und Leif-Meilensteine ein, bevor das Fenster am 2026-11-19 02:59 UTC schließt.",
        "Das Lobby-Paket der Bunny Girl Party Hall läuft länger, bis 2026-12-10 02:59 UTC, und ist optional."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "STOVE-Lucky-Board-Hinweis"
      }
    },
    {
      "h2": "Case Files ohne verschwendete Lupen",
      "intro": "Case Files ist ein Raster-Deduktions-Event, kein Kampfcheck. Die täglichen Lupen sind die begrenzende Ressource.",
      "bullets": [
        "Nutze zuerst den täglichen Vorrat; Energy-Auffüllungen für späte Event-Phasen sind optional.",
        "Fülle das O/X-Raster und schalte den Culprit Clue frei, bevor du beschuldigst.",
        "Diese Seite erklärt nur die Mechanik; sie veröffentlicht keine Antwortschlüssel zu den Tätern."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "STOVE-Case-Files-Hinweis"
      }
    }
  ],
  "fr": [
    {
      "h2": "Points quotidiens : comment utiliser le plafond de 720",
      "intro": "L’Enquête quotidienne rapporte des points pour l’aventure, les combats et l’Arène. Le plafond annoncé est de 720 par jour ; organisez-vous en conséquence plutôt que de chercher à rattraper plus tard.",
      "bullets": [
        "Gagnez des points en jouant normalement ; consultez la page de l’événement pour le plafond quotidien actuel.",
        "Échangez les tickets Lucky Board et les paliers Leif avant la fermeture de la fenêtre du 2026-11-19 02:59 UTC.",
        "Le pack de lobby Bunny Girl Party Hall dure plus longtemps, jusqu’au 2026-12-10 02:59 UTC, et reste facultatif."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606365",
        "label": "Annonce Lucky Board de STOVE"
      }
    },
    {
      "h2": "Case Files sans perdre de loupes",
      "intro": "Case Files est un événement de déduction sur grille, pas un test de combat. Les loupes quotidiennes sont la ressource limitante.",
      "bullets": [
        "Utilisez d’abord la réserve quotidienne ; les recharges d’énergie de fin d’événement sont facultatives.",
        "Remplissez la grille O/X et débloquez l’Indice du coupable avant d’accuser.",
        "Cette page explique uniquement les mécaniques ; elle ne publie pas les solutions des coupables."
      ],
      "source": {
        "href": "https://page.onstove.com/epicseven/global/view/14606293",
        "label": "Annonce Case Files de STOVE"
      }
    }
  ]
};
