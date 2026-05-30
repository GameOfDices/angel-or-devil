// ═══════════════════════════════════════════════════════════════════
//  SÜNDEN-KONFIGURATION  –  hier kannst du alles frei bearbeiten
// ═══════════════════════════════════════════════════════════════════
//
//  FELDER PRO EINTRAG:
//    id  → fortlaufende Nummer (0, 1, 2 ...) – NICHT ändern, NICHT löschen
//    g   → Gruppe (gleiche Zahl = gleiche Gruppe, wird optisch getrennt)
//    p   → Punkte (1 = leichte Sünde, 5 = sehr schwere Sünde)
//    t   → Übersetzungen: de / en / ru / uk
//
//  SÜNDE HINZUFÜGEN:
//    Neuen Block am Ende oder an passender Stelle einfügen.
//    id hochzählen, g passend wählen, Punkte & Texte eintragen.
//
//  SÜNDE ENTFERNEN:
//    Den gesamten Block ({ id: X, ... }) löschen. Kein Komma-Problem
//    entsteht, solange die geschweifte Klammer korrekt endet.
//
//  PUNKTE ÄNDERN:
//    Einfach den Wert hinter p: anpassen.  Erlaubt: 1 – 5
//
//  TEXT ÄNDERN:
//    Den String hinter de: / en: / ru: / uk: anpassen.
//    Achtung: Text in doppelten Anführungszeichen " " – kein " im Text!
//    Alternativ einfache Anführungszeichen ' ' verwenden.
//
// ═══════════════════════════════════════════════════════════════════

const SINS = [

  // ── Gruppe 0: Drogen ──────────────────────────────────────────────
  { id: 0, g: 0, p: 3, t: {
    de: "Ich habe Drogen genommen",
    en: "I have taken drugs",
    ru: "Я употреблял(а) наркотики",
    uk: "Я вживав(ла) наркотики"
  }},
  { id: 1, g: 0, p: 4, t: {
    de: "Ich habe jemandem Drogen angeboten",
    en: "I have offered drugs to someone",
    ru: "Я предлагал(а) кому-то наркотики",
    uk: "Я пропонував(ла) комусь наркотики"
  }},
  { id: 2, g: 0, p: 5, t: {
    de: "Ich habe bereits geschmuggelt",
    en: "I have already smuggled",
    ru: "Я занимался(ась) контрабандой",
    uk: "Я займався(лась) контрабандою"
  }},

  // ── Gruppe 1: Verkehr ─────────────────────────────────────────────
  { id: 3, g: 1, p: 1, t: {
    de: "Ich zeige beim Autofahren manchmal Vögel oder Stinkefinger",
    en: "I sometimes give the finger while driving",
    ru: "Я иногда показываю непристойный жест за рулём",
    uk: "Я іноді показую непристойний жест за кермом"
  }},
  { id: 4, g: 1, p: 3, t: {
    de: "Ich habe einen Unfall verschuldet",
    en: "I have caused a car accident",
    ru: "Я стал(а) виновником(цей) аварии",
    uk: "Я спричинив(ла) аварію"
  }},
  { id: 5, g: 1, p: 2, t: {
    de: "Ich habe beim Ausparken ein fremdes Auto angeditscht",
    en: "I dented someone else's car while parking",
    ru: "Я поцарапал(а) чужую машину при парковке",
    uk: "Я вдарив(ла) чужу машину при паркуванні"
  }},
  { id: 6, g: 1, p: 4, t: {
    de: "Ich bin völlig besoffen oder zugekifft Auto gefahren",
    en: "I have driven while completely drunk or stoned",
    ru: "Я ездил(а) за рулём в полном опьянении или в дурмане",
    uk: "Я їздив(ла) за кермом у повному сп'янінні або під дією наркотиків"
  }},

  // ── Gruppe 2: Soziales ────────────────────────────────────────────
  { id: 7, g: 2, p: 2, t: {
    de: "Ich lüge manchmal, dass sich die Balken biegen",
    en: "I sometimes lie through my teeth",
    ru: "Иногда я вру напропалую",
    uk: "Іноді я брешу напрочуд переконливо"
  }},
  { id: 8, g: 2, p: 2, t: {
    de: "Ich setze Gerüchte in die Welt",
    en: "I spread rumors",
    ru: "Я распускаю слухи",
    uk: "Я поширюю чутки"
  }},
  { id: 9, g: 2, p: 4, t: {
    de: "Ich habe schonmal jemanden richtig heftig gemobbt",
    en: "I have seriously bullied someone",
    ru: "Я серьёзно издевался(ась) над кем-то",
    uk: "Я серйозно цькував(ла) когось"
  }},
  { id: 10, g: 2, p: 1, t: {
    de: "Manchmal lästere ich über das Aussehen von anderen",
    en: "I sometimes gossip about others' appearance",
    ru: "Иногда я злословлю о внешности других",
    uk: "Іноді я пліткую про зовнішність інших"
  }},

  // ── Gruppe 3: Lifestyle ───────────────────────────────────────────
  { id: 11, g: 3, p: 3, t: {
    de: "Ich bin schonmal morgens aufgewacht und wusste nicht, wer neben mir liegt",
    en: "I've woken up not knowing who's lying next to me",
    ru: "Я просыпался(ась) и не знал(а), кто лежит рядом",
    uk: "Я прокидався(лась) і не знав(ла), хто лежить поруч"
  }},
  { id: 12, g: 3, p: 3, t: {
    de: "Ich habe für Sex Geld bezahlt",
    en: "I have paid for sex",
    ru: "Я платил(а) за секс",
    uk: "Я платив(ла) за секс"
  }},
  { id: 13, g: 3, p: 3, t: {
    de: "Ich habe für Sex Geld genommen",
    en: "I have taken money for sex",
    ru: "Я брал(а) деньги за секс",
    uk: "Я брав(ла) гроші за секс"
  }},
  { id: 14, g: 3, p: 2, t: {
    de: "Ich hatte mal Sex im Bett meiner Eltern",
    en: "I've had sex in my parents' bed",
    ru: "Я занимался(ась) сексом в постели родителей",
    uk: "Я займався(лась) сексом у ліжку батьків"
  }},

  // ── Gruppe 4: Gewalt ──────────────────────────────────────────────
  { id: 15, g: 4, p: 5, t: {
    de: "Ich habe schonmal jemanden krankenhausreif geschlagen",
    en: "I've beaten someone badly enough to require hospitalization",
    ru: "Я избивал(а) кого-то до больницы",
    uk: "Я бив(ла) когось до лікарні"
  }},
  { id: 16, g: 4, p: 3, t: {
    de: "Ich habe fremde Unterwäsche von der Leine geklaut",
    en: "I've stolen underwear from a clothesline",
    ru: "Я воровал(а) чужое бельё с верёвки",
    uk: "Я крав(ла) чужу білизну з мотузки"
  }},
  { id: 17, g: 4, p: 2, t: {
    de: "Ich versuche, in einem unbeobachteten Moment in fremde Schubladen und Schränke zu gucken",
    en: "I try to snoop in strangers' drawers and cupboards when unobserved",
    ru: "Я пытаюсь заглянуть в чужие ящики и шкафы",
    uk: "Я намагаюсь зазирнути в чужі шухляди та шафи"
  }},

  // ── Gruppe 5: Diebstahl & Vandalismus ────────────────────────────
  { id: 18, g: 5, p: 4, t: {
    de: "Ich habe etwas gestohlen, was mehr als 100 Euro wert ist",
    en: "I've stolen something worth more than 100 euros",
    ru: "Я украл(а) что-то стоимостью более 100 евро",
    uk: "Я вкрав(ла) щось вартістю понад 100 євро"
  }},
  { id: 19, g: 5, p: 4, t: {
    de: "Ich habe meinen Eltern Geld gestohlen",
    en: "I've stolen money from my parents",
    ru: "Я воровал(а) деньги у родителей",
    uk: "Я крав(ла) гроші у батьків"
  }},
  { id: 20, g: 5, p: 4, t: {
    de: "Ich habe meinem Partner Geld gestohlen oder ihn um Geld betrogen",
    en: "I've stolen money from my partner or cheated them financially",
    ru: "Я воровал(а) деньги у партнёра или обманывал(а) его",
    uk: "Я крав(ла) гроші у партнера або обманував(ла) його"
  }},
  { id: 21, g: 5, p: 3, t: {
    de: "Ich habe schonmal mutwillig etwas zerstört",
    en: "I've deliberately destroyed something",
    ru: "Я намеренно что-то уничтожал(а)",
    uk: "Я навмисно щось руйнував(ла)"
  }},
  { id: 22, g: 5, p: 2, t: {
    de: "Ich habe Graffiti gesprayt",
    en: "I've sprayed graffiti",
    ru: "Я рисовал(а) граффити",
    uk: "Я малював(ла) графіті"
  }},
  { id: 23, g: 5, p: 1, t: {
    de: "Ich habe schonmal illegal Sperrmüll entsorgt",
    en: "I've illegally dumped bulky waste",
    ru: "Я незаконно выбрасывал(а) крупногабаритный мусор",
    uk: "Я незаконно викидав(ла) великогабаритне сміття"
  }},

  // ── Gruppe 6: Wilder Sex ──────────────────────────────────────────
  { id: 24, g: 6, p: 3, t: {
    de: "Ich habe schonmal jemanden beim Autofahren einen geblasen",
    en: "I've given someone oral sex while they were driving",
    ru: "Я делал(а) кому-то минет за рулём",
    uk: "Я робив(ла) комусь мінет за кермом"
  }},
  { id: 25, g: 6, p: 3, t: {
    de: "Ich hatte mal in einer Kirche Sex",
    en: "I've had sex in a church",
    ru: "Я занимался(ась) сексом в церкви",
    uk: "Я займався(лась) сексом у церкві"
  }},
  { id: 26, g: 6, p: 2, t: {
    de: "Ich bin mal in einem Raum gewesen, während andere dort Sex hatten",
    en: "I've been in a room while others were having sex there",
    ru: "Я был(а) в комнате, пока другие там занимались сексом",
    uk: "Я був(ла) у кімнаті, поки інші там займались сексом"
  }},
  { id: 27, g: 6, p: 3, t: {
    de: "Ich hatte schonmal einen Dreier",
    en: "I've had a threesome",
    ru: "У меня был тройничок",
    uk: "У мене був секс утрьох"
  }},

  // ── Gruppe 7: Beziehungen ─────────────────────────────────────────
  { id: 28, g: 7, p: 2, t: {
    de: "Ich hatte mit jemandem Sex, der mehr als 10 Jahre älter war als ich",
    en: "I've had sex with someone more than 10 years older than me",
    ru: "У меня был секс с кем-то старше меня более чем на 10 лет",
    uk: "Я мав(ла) секс із кимось, хто старший за мене більш ніж на 10 років"
  }},
  { id: 29, g: 7, p: 2, t: {
    de: "Ich hatte mit jemandem Sex, der mehr als 10 Jahre jünger war als ich",
    en: "I've had sex with someone more than 10 years younger than me",
    ru: "У меня был секс с кем-то моложе меня более чем на 10 лет",
    uk: "Я мав(ла) секс із кимось, хто молодший за мене більш ніж на 10 років"
  }},
  { id: 30, g: 7, p: 4, t: {
    de: "Ich bin schonmal fremdgegangen",
    en: "I've cheated on a partner",
    ru: "Я изменял(а) партнёру",
    uk: "Я зраджував(ла) партнерові"
  }},
  { id: 31, g: 7, p: 2, t: {
    de: "Ich war schonmal mit mehr als einer Person gleichzeitig zusammen",
    en: "I've been in a relationship with more than one person at the same time",
    ru: "Я состоял(а) в отношениях с несколькими людьми одновременно",
    uk: "Я мав(ла) стосунки з кількома людьми одночасно"
  }},
  { id: 32, g: 7, p: 1, t: {
    de: "Ich habe jemandem gesagt, er war gut im Bett, obwohl das nicht stimmte",
    en: "I've told someone they were good in bed even though it wasn't true",
    ru: "Я говорил(а) кому-то, что он(а) хорош(а) в постели, хотя это было неправдой",
    uk: "Я казав(ла) комусь, що він(вона) добрий(а) у ліжку, хоча це була неправда"
  }},

  // ── Gruppe 8: Regeln ──────────────────────────────────────────────
  { id: 33, g: 8, p: 3, t: {
    de: "Ich parke manchmal auf Behindertenparkplätzen",
    en: "I sometimes park in disabled spots",
    ru: "Иногда я паркуюсь на местах для инвалидов",
    uk: "Іноді я паркуюся на місцях для людей з інвалідністю"
  }},
  { id: 34, g: 8, p: 2, t: {
    de: "Ich fahre manchmal schwarz mit Bus oder Bahn",
    en: "I sometimes ride without a ticket",
    ru: "Иногда я езжу зайцем в автобусе или поезде",
    uk: "Іноді я їжджу без квитка в автобусі чи поїзді"
  }},

  // ── Gruppe 9: Schule ──────────────────────────────────────────────
  { id: 35, g: 9, p: 1, t: {
    de: "Ich habe manchmal die Schule geschwänzt",
    en: "I've sometimes skipped school",
    ru: "Я иногда прогуливал(а) школу",
    uk: "Я іноді прогулював(ла) школу"
  }},
  { id: 36, g: 9, p: 1, t: {
    de: "Ich habe absichtlich die Hausaufgaben nicht gemacht",
    en: "I've deliberately not done my homework",
    ru: "Я намеренно не делал(а) домашнее задание",
    uk: "Я навмисно не робив(ла) домашнє завдання"
  }},
  { id: 37, g: 9, p: 1, t: {
    de: "Ich habe schlechte Noten vor meinen Eltern verheimlicht",
    en: "I've hidden bad grades from my parents",
    ru: "Я скрывал(а) плохие оценки от родителей",
    uk: "Я приховував(ла) погані оцінки від батьків"
  }},
  { id: 38, g: 9, p: 1, t: {
    de: "Ich bin sitzen geblieben",
    en: "I've had to repeat a school year",
    ru: "Я остался(ась) на второй год",
    uk: "Я залишався(лась) на другий рік"
  }},

  // ── Gruppe 10: Eitelkeit ──────────────────────────────────────────
  { id: 39, g: 10, p: 1, t: {
    de: "Meine Haare sind gefärbt",
    en: "My hair is dyed",
    ru: "Мои волосы крашеные",
    uk: "Моє волосся пофарбоване"
  }},
  { id: 40, g: 10, p: 1, t: {
    de: "Meine Brüste sind vergrößert",
    en: "My breasts have been enlarged",
    ru: "Мои груди увеличены",
    uk: "Мої груди збільшені"
  }},
  { id: 41, g: 10, p: 1, t: {
    de: "Wenn ich mein Gewicht angebe, stimmt das nicht",
    en: "When I state my weight, it's not accurate",
    ru: "Когда я называю свой вес, это неправда",
    uk: "Коли я називаю свою вагу, це неправда"
  }},
  { id: 42, g: 10, p: 2, t: {
    de: "Ich habe schonmal ein schmutziges Home-Video gedreht",
    en: "I've filmed a naughty home video",
    ru: "Я снимал(а) пикантное домашнее видео",
    uk: "Я знімав(ла) пікантне домашнє відео"
  }},
  { id: 43, g: 10, p: 2, t: {
    de: "Ich hatte schonmal Cybersex / Telefonsex mit einem Fremden",
    en: "I've had cybersex / phone sex with a stranger",
    ru: "У меня был киберсекс / телефонный секс с незнакомцем",
    uk: "У мене був кіберсекс / телефонний секс з незнайомцем"
  }},

  // ── Gruppe 11: Sonstiges ──────────────────────────────────────────
  { id: 44, g: 11, p: 1, t: {
    de: "Ich mache einen Pups und schiebe die Schuld für den Mief auf jemand anderen",
    en: "I fart and blame the smell on someone else",
    ru: "Я пукаю и сваливаю вину на другого",
    uk: "Я пукаю і звалюю провину на іншого"
  }},
  { id: 45, g: 11, p: 1, t: {
    de: "Ich täusche manchmal in einem Chat über mein Geschlecht",
    en: "I sometimes pretend to be a different gender in chat",
    ru: "Иногда я притворяюсь в чате другим полом",
    uk: "Іноді я вдаю в чаті інший гендер"
  }},
  { id: 46, g: 11, p: 1, t: {
    de: "Ich habe schonmal Früchte geklaut",
    en: "I've stolen fruit before",
    ru: "Я воровал(а) фрукты",
    uk: "Я крав(ла) фрукти"
  }},
  { id: 47, g: 11, p: 1, t: {
    de: "Ich habe heute schon gelogen",
    en: "I've already lied today",
    ru: "Я уже солгал(а) сегодня",
    uk: "Я вже сьогодні збрехав(ла)"
  }},

  // ── Gruppe 12: Sexuelle Vorlieben ─────────────────────────────────
  { id: 48, g: 12, p: 2, t: {
    de: "Ich habe heute schon masturbiert",
    en: "I've already masturbated today",
    ru: "Я уже мастурбировал(а) сегодня",
    uk: "Я вже мастурбував(ла) сьогодні"
  }},
  { id: 49, g: 12, p: 2, t: {
    de: "Ich benutze manchmal Sexspielzeug",
    en: "I sometimes use sex toys",
    ru: "Я иногда использую секс-игрушки",
    uk: "Я іноді використовую секс-іграшки"
  }},
  { id: 50, g: 12, p: 2, t: {
    de: "Ich mag Analverkehr",
    en: "I enjoy anal sex",
    ru: "Мне нравится анальный секс",
    uk: "Мені подобається анальний секс"
  }},
  { id: 51, g: 12, p: 1, t: {
    de: "Ich mag Oralverkehr",
    en: "I enjoy oral sex",
    ru: "Мне нравится оральный секс",
    uk: "Мені подобається оральний секс"
  }},

  // ── Gruppe 13: Spiele ─────────────────────────────────────────────
  { id: 52, g: 13, p: 1, t: {
    de: "Ich spiele gerne Flaschendrehen",
    en: "I enjoy playing spin the bottle",
    ru: "Я люблю играть в бутылочку",
    uk: "Я люблю грати у пляшечку"
  }},
  { id: 53, g: 13, p: 1, t: {
    de: "Ich pinkle manchmal ins Schwimmbecken",
    en: "I sometimes pee in the swimming pool",
    ru: "Иногда я писаю в бассейн",
    uk: "Іноді я писяю в басейн"
  }},

  // ── Gruppe 14: Sexuelle Abenteuer ─────────────────────────────────
  { id: 54, g: 14, p: 3, t: {
    de: "Ich mag Sex in einem öffentlichen Schwimmbad",
    en: "I enjoy sex in a public swimming pool",
    ru: "Мне нравится секс в общественном бассейне",
    uk: "Мені подобається секс у громадському басейні"
  }},
  { id: 55, g: 14, p: 2, t: {
    de: "Ich hatte schonmal Sex im Wald oder am Strand",
    en: "I've had sex in the woods or on the beach",
    ru: "У меня был секс в лесу или на пляже",
    uk: "У мене був секс у лісі або на пляжі"
  }},
  { id: 56, g: 14, p: 1, t: {
    de: "Ich habe jemanden des gleichen Geschlechts geküsst",
    en: "I've kissed someone of the same gender",
    ru: "Я целовал(а) кого-то того же пола",
    uk: "Я цілував(ла) когось тієї ж статі"
  }},
  { id: 57, g: 14, p: 2, t: {
    de: "Ich habe meinen Lehrer(in) geküsst",
    en: "I've kissed my teacher",
    ru: "Я целовал(а) своего учителя",
    uk: "Я цілував(ла) свого вчителя"
  }},
  { id: 58, g: 14, p: 2, t: {
    de: "Ich habe mit jemandem des gleichen Geschlechts geschlafen",
    en: "I've slept with someone of the same gender",
    ru: "Я спал(а) с кем-то того же пола",
    uk: "Я спав(ла) з кимось тієї ж статі"
  }},

];
