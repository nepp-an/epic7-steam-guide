import type { Locale } from '@/lib/site';

/**
 * UI copy for the on-page checklists (transfer / FAQ / quests / download).
 * Kept out of CONTENT so the long-form page matrices stay unchanged.
 */
export type ChecklistCopy = {
  transferDone: string;
  faqDone: string;
  downloadDone: string;
  questDone: string;
  questTh: readonly [string, string, string, string];
  resetDaily: string;
  resetWeekly: string;
  scopeBoth: string;
  scopeFoundry: string;
  noteTimer: string;
};

export const CHECKLIST_COPY: Record<Locale, ChecklistCopy> = {
  en: {
    transferDone:
      'Safe to convert: login source confirmed, demo warning read, full client ready.',
    faqDone:
      'Start with the linked page above. If it still fails, use official STOVE CS — not Discord “fixes”.',
    downloadDone:
      'Ready to install from app 5019180. Convert STOVE→Steam first if you need legacy progress.',
    questDone:
      'Today’s priority: timed Foundry missions → dailies → weeklies.',
    questTh: ['Reset', 'Task', 'Foundry-only?', 'Note'],
    resetDaily: 'Daily reset',
    resetWeekly: 'Weekly reset',
    scopeBoth: 'Legacy + Foundry',
    scopeFoundry: 'Foundry only',
    noteTimer: 'In-game timer',
  },
  ko: {
    transferDone:
      '전환 안전: 로그인 소스 확인·데모 경고 숙지·정식 클라이언트 준비 완료.',
    faqDone:
      '위에 링크된 페이지부터 확인하세요. 그래도 안 되면 STOVE 공식 CS만 이용하세요.',
    downloadDone:
      'app 5019180에서 설치할 준비 완료. 기존 진행도가 필요하면 먼저 STOVE→Steam 전환.',
    questDone: '오늘 우선순위: 한정 Foundry 미션 → 일일 → 주간.',
    questTh: ['리셋', '할 일', 'Foundry 전용?', '메모'],
    resetDaily: '일일 리셋',
    resetWeekly: '주간 리셋',
    scopeBoth: '레거시 + Foundry',
    scopeFoundry: 'Foundry 전용',
    noteTimer: '인게임 타이머',
  },
  ja: {
    transferDone:
      '変換OK：ログイン元確認・デモ警告確認・正式クライアント準備済み。',
    faqDone:
      'まず上のリンク先を確認。解決しなければSTOVE公式CSへ。',
    downloadDone:
      'app 5019180 からインストール可能。旧進行が必要なら先にSTOVE→Steam変換。',
    questDone:
      '今日の優先：期間限定Foundry → デイリー → ウィークリー。',
    questTh: ['リセット', 'タスク', 'Foundry限定?', 'メモ'],
    resetDaily: 'デイリー',
    resetWeekly: 'ウィークリー',
    scopeBoth: 'レガシー + Foundry',
    scopeFoundry: 'Foundryのみ',
    noteTimer: 'ゲーム内タイマー',
  },
  'zh-tw': {
    transferDone:
      '可安全轉換：已確認登入來源、讀過試玩警告、正式客戶端就緒。',
    faqDone:
      '先看上方對應連結；仍失敗請走 STOVE 官方客服。',
    downloadDone:
      '可從 app 5019180 安裝。要保留舊進度，先做 STOVE→Steam 轉換。',
    questDone: '今日優先：限時 Foundry → 每日 → 每週。',
    questTh: ['重置', '任務', 'Foundry 限定?', '備註'],
    resetDaily: '每日重置',
    resetWeekly: '每週重置',
    scopeBoth: '原服 + Foundry',
    scopeFoundry: 'Foundry 限定',
    noteTimer: '遊戲內計時',
  },
  th: {
    transferDone:
      'พร้อมแปลง: ยืนยันแหล่งล็อกอิน อ่านคำเตือนเดโม และเตรียมไคลเอนต์เต็มแล้ว',
    faqDone:
      'เริ่มจากหน้าที่ลิงก์ด้านบน หากยังไม่หายให้ใช้ CS ทางการของ STOVE',
    downloadDone:
      'พร้อมติดตั้งจาก app 5019180 หากต้องการความคืบหน้าเดิม ให้แปลง STOVE→Steam ก่อน',
    questDone:
      'ลำดับแรกวันนี้: ภารกิจ Foundry แบบจำกัดเวลา → รายวัน → รายสัปดาห์',
    questTh: ['รีเซ็ต', 'งาน', 'Foundry เท่านั้น?', 'หมายเหตุ'],
    resetDaily: 'รีเซ็ตรายวัน',
    resetWeekly: 'รีเซ็ตรายสัปดาห์',
    scopeBoth: 'Legacy + Foundry',
    scopeFoundry: 'Foundry เท่านั้น',
    noteTimer: 'ตัวจับเวลาในเกม',
  },
  es: {
    transferDone:
      'Listo para convertir: origen de inicio confirmado, aviso de demo leído y cliente completo preparado.',
    faqDone:
      'Empieza por la página enlazada arriba. Si sigue fallando, usa el CS oficial de STOVE.',
    downloadDone:
      'Listo para instalar desde app 5019180. Si necesitas el progreso antiguo, convierte STOVE→Steam primero.',
    questDone:
      'Prioridad de hoy: misiones Foundry con tiempo → diarias → semanales.',
    questTh: ['Reinicio', 'Tarea', '¿Solo Foundry?', 'Nota'],
    resetDaily: 'Reinicio diario',
    resetWeekly: 'Reinicio semanal',
    scopeBoth: 'Legado + Foundry',
    scopeFoundry: 'Solo Foundry',
    noteTimer: 'Temporizador del juego',
  },
  pt: {
    transferDone:
      'Pronto para converter: origem de login confirmada, aviso da demo lido e cliente completo pronto.',
    faqDone:
      'Comece pela página vinculada acima. Se ainda falhar, use o CS oficial da STOVE.',
    downloadDone:
      'Pronto para instalar pelo app 5019180. Se precisa do progresso antigo, converta STOVE→Steam primeiro.',
    questDone:
      'Prioridade de hoje: missões Foundry com tempo → diárias → semanais.',
    questTh: ['Reset', 'Tarefa', 'Só Foundry?', 'Nota'],
    resetDaily: 'Reset diário',
    resetWeekly: 'Reset semanal',
    scopeBoth: 'Legado + Foundry',
    scopeFoundry: 'Só Foundry',
    noteTimer: 'Timer no jogo',
  },
  de: {
    transferDone:
      'Bereit zum Umwandeln: Login-Quelle bestätigt, Demo-Warnung gelesen, Vollclient bereit.',
    faqDone:
      'Beginne mit der oben verlinkten Seite. Wenn es weiter scheitert, nutze den offiziellen STOVE-CS.',
    downloadDone:
      'Bereit zur Installation über App 5019180. Wenn du alten Fortschritt brauchst, zuerst STOVE→Steam umwandeln.',
    questDone:
      'Priorität heute: zeitlich begrenzte Foundry-Missionen → Daily → Weekly.',
    questTh: ['Reset', 'Aufgabe', 'Nur Foundry?', 'Notiz'],
    resetDaily: 'Täglicher Reset',
    resetWeekly: 'Wöchentlicher Reset',
    scopeBoth: 'Legacy + Foundry',
    scopeFoundry: 'Nur Foundry',
    noteTimer: 'Timer im Spiel',
  },
  fr: {
    transferDone:
      'Prêt à convertir : source de connexion confirmée, avertissement démo lu, client complet prêt.',
    faqDone:
      'Commencez par la page liée ci-dessus. Si cela échoue encore, utilisez le CS officiel STOVE.',
    downloadDone:
      'Prêt à installer depuis l’app 5019180. Si vous gardez l’ancienne progression, convertissez d’abord STOVE→Steam.',
    questDone:
      'Priorité du jour : missions Foundry limitées → quotidiennes → hebdomadaires.',
    questTh: ['Reset', 'Tâche', 'Foundry uniquement ?', 'Note'],
    resetDaily: 'Reset quotidien',
    resetWeekly: 'Reset hebdomadaire',
    scopeBoth: 'Héritage + Foundry',
    scopeFoundry: 'Foundry uniquement',
    noteTimer: 'Minuteur en jeu',
  },
};
