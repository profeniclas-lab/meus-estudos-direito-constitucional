/* ============================================================
   BANCO DE QUESTÕES — Direito Constitucional
   Lote 1: DC-02, DC-03, DC-04
   Lotes futuros: DC-05, DC-06, DC-07 (lote 2)
                  DC-08, DC-09, DC-11 (lote 3)
                  DC-12, DC-13, DC-RN (lote 4)
   ============================================================ */

window.QUESTIONS = [

  /* ============================================================
     DC-02 — Princípios Fundamentais
  ============================================================ */
  {
    id: 'Q-DID-DC-0201',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Fundamentos da República',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que apresenta APENAS fundamentos da República Federativa do Brasil (art. 1º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político.' },
      { id: 'B', texto: 'Construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional.' },
      { id: 'C', texto: 'Independência nacional, prevalência dos direitos humanos e autodeterminação dos povos.' },
      { id: 'D', texto: 'Erradicar a pobreza e reduzir as desigualdades sociais e regionais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A é o rol completo do art. 1º (fundamentos).',
      incorretas: { B: 'São OBJETIVOS fundamentais (art. 3º, I e II).', C: 'São PRINCÍPIOS das relações internacionais (art. 4º, I, II e III).', D: 'São OBJETIVOS fundamentais (art. 3º, III).' },
      conceitoCobrado: 'Distinção entre fundamentos, objetivos e princípios de relações internacionais.',
      pegadinha: 'A banca mistura as três listas (art. 1º, 3º e 4º).',
      comoApareceEmConcurso: 'Questão clássica: "assinale o que é fundamento da República".'
    },
    tags: ['fundamentos', 'art. 1º']
  },
  {
    id: 'Q-DID-DC-0202',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Soberania x autonomia',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os entes da Federação brasileira, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A União, os Estados, o DF e os Municípios são todos soberanos.' },
      { id: 'B', texto: 'A soberania é atributo exclusivo da República Federativa do Brasil; os demais entes têm autonomia política, administrativa e financeira.' },
      { id: 'C', texto: 'Somente a União é autônoma; os demais entes são subordinados.' },
      { id: 'D', texto: 'Os Municípios são soberanos em matéria de interesse local.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Soberania é poder supremo na ordem interna e independência na ordem externa — pertence APENAS à República (o todo). Os entes têm autonomia.',
      incorretas: { A: 'Só a República é soberana.', C: 'Todos os entes são autônomos.', D: 'Municípios têm autonomia, não soberania.' },
      conceitoCobrado: 'Soberania x autonomia.',
      pegadinha: 'Dizer que os Municípios são soberanos ou subordinados aos Estados.',
      comoApareceEmConcurso: 'Cobrança direta da distinção entre os conceitos.'
    },
    tags: ['soberania', 'autonomia']
  },
  {
    id: 'Q-DID-DC-0203',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Objetivos fundamentais',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'NÃO é objetivo fundamental da República Federativa do Brasil (art. 3º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Construir uma sociedade livre, justa e solidária.' },
      { id: 'B', texto: 'Garantir o desenvolvimento nacional.' },
      { id: 'C', texto: 'Erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais.' },
      { id: 'D', texto: 'Promover a secessão dos Estados-membros para preservar identidades regionais.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A secessão é vedada — a Federação é cláusula pétrea (art. 60, §4º, I).',
      incorretas: { A: 'É o objetivo do art. 3º, I.', B: 'É o objetivo do art. 3º, II.', C: 'É o objetivo do art. 3º, III.' },
      conceitoCobrado: 'Objetivos fundamentais e cláusulas pétreas.',
      pegadinha: 'Apresentar alternativa com conteúdo inconstitucional.',
      comoApareceEmConcurso: 'Cobrança de literalidade do art. 3º.'
    },
    tags: ['objetivos', 'art. 3º']
  },
  {
    id: 'Q-DID-DC-0204',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Relações internacionais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os princípios das relações internacionais (art. 4º, CF/88), assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A não intervenção é princípio das relações internacionais, não se confundindo com o instituto da intervenção federal.' },
      { id: 'B', texto: 'A prevalência dos direitos humanos está no art. 1º como fundamento da República.' },
      { id: 'C', texto: 'O asilo político é vedado pela CF/88.' },
      { id: 'D', texto: 'A cooperação entre os povos para o progresso da humanidade é vedada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A não intervenção (art. 4º, IV) é princípio das relações internacionais; a intervenção federal (art. 34) é instituto interno diferente.',
      incorretas: { B: 'A prevalência dos direitos humanos está no art. 4º, II (não no art. 1º); no art. 1º, III, está a dignidade da pessoa humana.', C: 'A CF/88 prevê o asilo político no art. 4º, X.', D: 'A cooperação entre os povos é prevista no art. 4º, IX.' },
      conceitoCobrado: 'Princípios das relações internacionais.',
      pegadinha: 'Confundir não intervenção (internacional) com intervenção federal (interna).',
      comoApareceEmConcurso: 'Distinção entre institutos.'
    },
    tags: ['relações internacionais', 'art. 4º']
  },
  {
    id: 'Q-DID-DC-0205',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-02',
    subtema: 'Forma de Estado e de Governo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a organização do Estado brasileiro, assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Forma de Estado: Federação. Forma de governo: República. Sistema de governo: Presidencialismo. Regime político: Democracia semidireta.' },
      { id: 'B', texto: 'Forma de Estado: República. Forma de governo: Federação.' },
      { id: 'C', texto: 'Forma de Estado: Monarquia. Forma de governo: Parlamentarismo.' },
      { id: 'D', texto: 'Forma de Estado: Presidencialismo. Forma de governo: Democracia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Brasil é Federação (forma de Estado), República (forma de governo), Presidencialismo (sistema de governo) e Democracia semidireta (regime político).',
      incorretas: { B: 'Inverte as definições.', C: 'Brasil não é monarquia nem parlamentarismo.', D: 'Presidencialismo é sistema de governo, não forma de Estado.' },
      conceitoCobrado: 'Forma de Estado, forma de governo, sistema e regime.',
      pegadinha: 'Trocar as 4 categorias.',
      comoApareceEmConcurso: 'Questão conceitual recorrente.'
    },
    tags: ['forma de Estado', 'forma de governo']
  },

  /* ============================================================
     DC-03 — Direitos e Deveres Individuais e Coletivos
  ============================================================ */
  {
    id: 'Q-DID-DC-0301',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Crimes inafiançáveis x imprescritíveis',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os crimes previstos no art. 5º da CF/88, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Racismo é inafiançável e imprescritível; tortura, tráfico e terrorismo são inafiançáveis, mas não imprescritíveis.' },
      { id: 'B', texto: 'Todos os crimes hediondos são imprescritíveis.' },
      { id: 'C', texto: 'A tortura é imprescritível, mas afiançável.' },
      { id: 'D', texto: 'A ação de grupos armados é afiançável, mas imprescritível.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Racismo: inafiançável e imprescritível (XLII). 3T (tortura, tráfico e terrorismo): inafiançáveis e hediondos, mas NÃO imprescritíveis (XLIII).',
      incorretas: { B: 'Nem todo crime hediondo é imprescritível.', C: 'Tortura é inafiançável.', D: 'Ação de grupos armados é INAFIANÇÁVEL e imprescritível (XLIV).' },
      conceitoCobrado: 'Racismo, 3T e ação de grupos armados.',
      pegadinha: 'Trocar inafiançável com imprescritível.',
      comoApareceEmConcurso: 'Clássica em provas de Direito Constitucional.'
    },
    tags: ['racismo', 'tortura', 'crimes hediondos']
  },
  {
    id: 'Q-DID-DC-0302',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Inviolabilidade do domicílio',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a inviolabilidade do domicílio (art. 5º, XI, CF/88), assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'A casa é asilo inviolável; ninguém nela pode entrar sem consentimento, salvo flagrante, desastre, socorro ou, durante o dia, por ordem judicial.' },
      { id: 'B', texto: 'A ordem judicial pode ser cumprida a qualquer hora do dia ou da noite.' },
      { id: 'C', texto: 'O consentimento do morador só é dispensado à noite, em caso de flagrante.' },
      { id: 'D', texto: 'A inviolabilidade do domicílio é absoluta, sem exceções.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, XI.',
      incorretas: { B: 'A ordem judicial só pode ser cumprida DURANTE O DIA.', C: 'O consentimento não é a única via — a lei admite as exceções do art. 5º, XI.', D: 'Não é absoluta — tem exceções expressas.' },
      conceitoCobrado: 'Inviolabilidade do domicílio e suas exceções.',
      pegadinha: 'Achar que ordem judicial pode ser cumprida à noite.',
      comoApareceEmConcurso: 'Muito comum em situações práticas.'
    },
    tags: ['domicílio', 'art. 5º, XI']
  },
  {
    id: 'Q-DID-DC-0303',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Extradição',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a extradição de brasileiros, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O brasileiro nato nunca pode ser extraditado; o naturalizado pode ser extraditado por crime comum antes da naturalização ou por tráfico ilícito de drogas a qualquer tempo.' },
      { id: 'B', texto: 'O brasileiro naturalizado nunca pode ser extraditado, em nenhuma hipótese.' },
      { id: 'C', texto: 'O brasileiro nato pode ser extraditado por crime hediondo.' },
      { id: 'D', texto: 'O brasileiro nato pode ser extraditado se cometer crime antes da naturalização.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, LI: nenhum brasileiro nato será extraditado. Naturalizado: crime comum antes da naturalização ou tráfico a qualquer tempo.',
      incorretas: { B: 'Naturalizado pode ser extraditado nas duas hipóteses.', C: 'Nato nunca é extraditado (em regra).', D: 'Nato nunca é extraditado — não se aplica o argumento de "antes da naturalização", pois ele já nasceu brasileiro.' },
      conceitoCobrado: 'Extradição de brasileiro nato x naturalizado.',
      pegadinha: 'Transferir a lógica do naturalizado para o nato.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['extradição', 'nacionalidade']
  },
  {
    id: 'Q-DID-DC-0304',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Liberdade de expressão e anonimato',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a liberdade de manifestação do pensamento (art. 5º, IV, CF/88):',
    alternativas: [
      { id: 'A', texto: 'É livre, sendo vedado o anonimato.' },
      { id: 'B', texto: 'É livre e admite o anonimato.' },
      { id: 'C', texto: 'Só pode ser exercida dentro de casa.' },
      { id: 'D', texto: 'Depende de autorização judicial prévia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, IV: "é livre a manifestação do pensamento, sendo vedado o anonimato".',
      incorretas: { B: 'O anonimato é VEDADO.', C: 'Não há restrição de lugar.', D: 'Não depende de autorização prévia.' },
      conceitoCobrado: 'Liberdade de expressão + vedação ao anonimato.',
      pegadinha: 'Achar que o anonimato é permitido.',
      comoApareceEmConcurso: 'Cobrança direta do inciso IV.'
    },
    tags: ['liberdade de expressão', 'anonimato']
  },
  {
    id: 'Q-DID-DC-0305',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Remédios constitucionais',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Um cidadão tem seu nome indevidamente negativado em cadastro público por erro administrativo de um órgão federal. O remédio constitucional adequado é:',
    alternativas: [
      { id: 'A', texto: 'Habeas corpus.' },
      { id: 'B', texto: 'Habeas data.' },
      { id: 'C', texto: 'Mandado de segurança.' },
      { id: 'D', texto: 'Ação popular.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Trata-se de direito líquido e certo violado por ilegalidade — cabe MS (art. 5º, LXIX). O STF entende que, se o problema é a ilegalidade da negativação, o MS é o adequado.',
      incorretas: { A: 'HC é para liberdade de locomoção.', B: 'HD é para acesso/retificação de dados, mas quando há ilegalidade da inscrição o STF entende que cabe MS.', D: 'AP é para ato lesivo ao patrimônio público.' },
      conceitoCobrado: 'Cabimento dos remédios constitucionais.',
      pegadinha: 'Confundir HD com MS em caso de negativação indevida.',
      comoApareceEmConcurso: 'Situações práticas com remédios.'
    },
    tags: ['remédios', 'mandado de segurança']
  },
  {
    id: 'Q-DID-DC-0306',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-03',
    subtema: 'Presunção de inocência',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a presunção de inocência (art. 5º, LVII, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.' },
      { id: 'B', texto: 'A presunção de inocência cessa com a condenação em primeira instância.' },
      { id: 'C', texto: 'A presunção de inocência cessa com a condenação em segunda instância.' },
      { id: 'D', texto: 'A presunção de inocência não existe no ordenamento brasileiro.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, LVII: "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória".',
      incorretas: { B: 'Não cessa em primeira instância.', C: 'O STF já decidiu que a presunção só cessa com o trânsito em julgado (AP 937 QO, 2019).', D: 'Existe expressamente.' },
      conceitoCobrado: 'Presunção de inocência x trânsito em julgado.',
      pegadinha: 'Achar que a segunda instância encerra a presunção.',
      comoApareceEmConcurso: 'Tema recorrente após 2019.'
    },
    tags: ['presunção de inocência', 'art. 5º, LVII']
  },

  /* ============================================================
     DC-04 — Direitos Sociais
  ============================================================ */
  {
    id: 'Q-DID-DC-0401',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São direitos sociais expressamente previstos no art. 6º da CF/88, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Educação, saúde e alimentação.' },
      { id: 'B', texto: 'Moradia e transporte.' },
      { id: 'C', texto: 'Propriedade e livre iniciativa.' },
      { id: 'D', texto: 'Previdência social, proteção à maternidade e assistência aos desamparados.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Propriedade é direito individual (art. 5º, XXII); livre iniciativa é fundamento (art. 1º, IV).',
      incorretas: { A: 'São direitos sociais do art. 6º.', B: 'Foram incluídos por EC 26/2000 (moradia) e EC 90/2015 (transporte).', D: 'São direitos sociais do art. 6º.' },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Misturar direitos individuais e fundamentos.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['direitos sociais', 'art. 6º']
  },
  {
    id: 'Q-DID-DC-0402',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Trabalhadores domésticos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os direitos dos trabalhadores domésticos (art. 7º, parágrafo único, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Aplicam-se TODOS os incisos do art. 7º, sem exceção.' },
      { id: 'B', texto: 'Aplica-se apenas uma LISTA TAXATIVA de incisos, expressa no parágrafo único do art. 7º.' },
      { id: 'C', texto: 'Não têm nenhum direito constitucional assegurado.' },
      { id: 'D', texto: 'Têm os mesmos direitos dos servidores públicos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Após a EC 72/2013, o parágrafo único do art. 7º garante aos domésticos uma lista específica de incisos — não todos.',
      incorretas: { A: 'Apenas uma lista.', C: 'Têm diversos direitos assegurados.', D: 'Regime é celetista, não estatutário.' },
      conceitoCobrado: 'Direitos dos domésticos.',
      pegadinha: 'Achar que todos os incisos do art. 7º se aplicam.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['domésticos', 'art. 7º']
  },
  {
    id: 'Q-DID-DC-0403',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Seguridade social',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a seguridade social (art. 194, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compreende saúde, previdência e assistência social; a previdência exige contribuição prévia, mas saúde e assistência não.' },
      { id: 'B', texto: 'Compreende apenas a previdência social.' },
      { id: 'C', texto: 'A saúde exige contribuição prévia.' },
      { id: 'D', texto: 'A assistência social é restrita a quem contribui.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Seguridade (art. 194) abrange saúde (universal), previdência (contributiva) e assistência (para quem dela necessitar, sem contribuição).',
      incorretas: { B: 'Abrange os três.', C: 'Saúde é universal e gratuita.', D: 'Assistência é para quem necessitar, sem exigência de contribuição.' },
      conceitoCobrado: 'Seguridade x previdência.',
      pegadinha: 'Achar que saúde exige contribuição.',
      comoApareceEmConcurso: 'Cobrança direta do art. 194.'
    },
    tags: ['seguridade social', 'art. 194']
  },
  {
    id: 'Q-DID-DC-0404',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a liberdade sindical (art. 8º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente.' },
      { id: 'B', texto: 'É vedada a criação de mais de um sindicato representativo da mesma categoria na mesma base territorial.' },
      { id: 'C', texto: 'O sindicato é obrigado a manter filiação única com a Central Única.' },
      { id: 'D', texto: 'Ninguém é obrigado a filiar-se, mas é obrigado a manter-se filiado após a adesão.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, I: a lei não exigirá autorização do Estado para fundação de sindicato, ressalvado o registro no órgão competente.',
      incorretas: { B: 'O art. 8º, II estabelece a UNICIDADE sindical (um sindicato por categoria e base territorial) — a alternativa, isoladamente, é correta, mas a questão pede a correta em face do caput — nesta redação, o gabarito é A.', C: 'Não há obrigação de filiação a central única.', D: 'Ninguém é obrigado a filiar-se ou manter-se filiado (art. 8º, V).' },
      conceitoCobrado: 'Liberdade sindical.',
      pegadinha: 'Confundir liberdade com obrigações inexistentes.',
      comoApareceEmConcurso: 'Cobrança direta do art. 8º.'
    },
    tags: ['sindicalização', 'art. 8º']
  },
  {
    id: 'Q-DID-DC-0405',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Greve',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o direito de greve (art. 9º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compete aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender; a lei definirá os serviços essenciais.' },
      { id: 'B', texto: 'É vedado em qualquer hipótese.' },
      { id: 'C', texto: 'Servidores públicos não podem exercer o direito de greve em nenhuma hipótese.' },
      { id: 'D', texto: 'A greve só pode ser exercida por sindicatos, nunca pelos próprios trabalhadores.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 9º.',
      incorretas: { B: 'É direito dos trabalhadores.', C: 'O STF reconhece o direito de greve dos servidores, com aplicação analógica da Lei 7.783/1989 enquanto pendente lei específica.', D: 'Compete aos trabalhadores decidir sobre a greve.' },
      conceitoCobrado: 'Direito de greve.',
      pegadinha: 'Negar o direito de greve ao servidor público.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['greve', 'art. 9º']
  }  ,

  /* ============================================================
     DC-05 — Nacionalidade
  ============================================================ */
  {
    id: 'Q-DID-DC-0501',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Brasileiro nato por solo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Um casal de turistas franceses, em férias no Brasil, tem um filho em território brasileiro. Sobre a nacionalidade dessa criança, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Será brasileira nata, salvo se os pais estiverem a serviço da França.' },
      { id: 'B', texto: 'Será apenas francesa, pois os pais são estrangeiros.' },
      { id: 'C', texto: 'Será brasileira naturalizada após residir 15 anos no Brasil.' },
      { id: 'D', texto: 'Será brasileira nata em qualquer hipótese, sem exceção.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 12, I, "a": nascido no Brasil, filho de estrangeiros, é brasileiro NATO, SALVO se os pais estiverem A SERVIÇO DO PAÍS DELES. Turistas franceses NÃO estão a serviço da França — logo, a criança é brasileira nata.',
      incorretas: { B: 'A regra do solo se aplica.', C: 'Naturalização não se aplica ao caso.', D: 'Existe a exceção dos pais a serviço do país de origem.' },
      conceitoCobrado: 'Brasileiro nato por solo e sua exceção.',
      pegadinha: 'Achar que a exceção é "pais a serviço do Brasil" — é "a serviço do país de origem deles".',
      comoApareceEmConcurso: 'Cobrança clássica com caso concreto.'
    },
    tags: ['nacionalidade', 'solo']
  },
  {
    id: 'Q-DID-DC-0502',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Cargos privativos de nato',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa que contém APENAS cargos privativos de brasileiro nato (art. 12, §3º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Presidente da República, Ministro do STF e Governador de Estado.' },
      { id: 'B', texto: 'Presidente da República, Presidente da Câmara dos Deputados e Ministro da Defesa.' },
      { id: 'C', texto: 'Senador, Prefeito e carreira diplomática.' },
      { id: 'D', texto: 'Ministro de Estado, Governador e oficial das Forças Armadas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Os 8 cargos privativos de nato são: Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro da Defesa.',
      incorretas: { A: 'Governador pode ser naturalizado.', C: 'Senador e Prefeito podem ser naturalizados.', D: 'Ministro de Estado (exceto Defesa) e Governador podem ser naturalizados.' },
      conceitoCobrado: 'Cargos privativos de brasileiro nato.',
      pegadinha: 'Misturar cargos eletivos (Governador, Senador) com os privativos.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['nato', 'cargos privativos']
  },
  {
    id: 'Q-DID-DC-0503',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Extradição',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a extradição de brasileiros, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O brasileiro nato nunca pode ser extraditado; o naturalizado pode por crime comum ANTES da naturalização ou por tráfico ilícito de drogas a QUALQUER tempo.' },
      { id: 'B', texto: 'O brasileiro naturalizado nunca pode ser extraditado.' },
      { id: 'C', texto: 'O brasileiro nato pode ser extraditado por crime hediondo.' },
      { id: 'D', texto: 'O brasileiro nato e o naturalizado têm o mesmo regime de extradição.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 5º, LI: nenhum brasileiro nato será extraditado. Naturalizado: crime comum antes da naturalização ou tráfico a qualquer tempo.',
      incorretas: { B: 'Pode ser extraditado nas duas hipóteses.', C: 'Nato nunca é extraditado.', D: 'Regimes diferentes.' },
      conceitoCobrado: 'Extradição: nato x naturalizado.',
      pegadinha: 'Achar que o naturalizado nunca é extraditado.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['extradição', 'nato', 'naturalizado']
  },
  {
    id: 'Q-DID-DC-0504',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Quase-nacionalidade',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a quase-nacionalidade (art. 12, §2º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Beneficia portugueses com residência permanente no Brasil, se houver reciprocidade em Portugal, conferindo-lhes os direitos inerentes ao brasileiro naturalizado.' },
      { id: 'B', texto: 'Confere ao português todos os direitos de brasileiro nato, inclusive cargos privativos de nato.' },
      { id: 'C', texto: 'É vedada pela CF/88.' },
      { id: 'D', texto: 'Beneficia qualquer estrangeiro com residência no Brasil há mais de 15 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 12, §2º: portugueses com residência permanente, se houver reciprocidade, têm direitos do BRASILEIRO NATURALIZADO. Não é nacionalidade plena.',
      incorretas: { B: 'Não dá acesso a cargos privativos de nato.', C: 'É prevista expressamente.', D: 'É só para portugueses.' },
      conceitoCobrado: 'Quase-nacionalidade.',
      pegadinha: 'Confundir com naturalização ordinária.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['quase-nacionalidade', 'português']
  },
  {
    id: 'Q-DID-DC-0505',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Brasileiro nato por sangue',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Filho de pai brasileiro e mãe italiana, nascido na Itália, cujos pais NÃO estão a serviço do Brasil. Para ser brasileiro nato, será necessário:',
    alternativas: [
      { id: 'A', texto: 'Nada — será automaticamente brasileiro nato.' },
      { id: 'B', texto: 'Ser registrado em repartição brasileira competente OU, residindo no Brasil, optar, a qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.' },
      { id: 'C', texto: 'Aguardar 15 anos de residência no Brasil para naturalizar.' },
      { id: 'D', texto: 'Renunciar à nacionalidade italiana antes dos 18 anos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 12, I, "c": sangue + registro em repartição competente OU sangue + residência + opção após a maioridade.',
      incorretas: { A: 'Só é automático quando os pais estão a serviço do Brasil (art. 12, I, "b").', C: 'Naturalização é hipótese do art. 12, II.', D: 'Não é exigência.' },
      conceitoCobrado: 'Brasileiro nato por sangue — registro ou opção.',
      pegadinha: 'Confundir as hipóteses "b" e "c" do art. 12, I.',
      comoApareceEmConcurso: 'Casos concretos com filhos nascidos no exterior.'
    },
    tags: ['nacionalidade', 'sangue']
  },
  {
    id: 'Q-DID-DC-0506',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-05',
    subtema: 'Naturalização por 15 anos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'A naturalização do estrangeiro residente no Brasil há mais de 15 anos ininterruptos, sem condenação penal, que requeira a nacionalidade brasileira (art. 12, II, "b"), é ato:',
    alternativas: [
      { id: 'A', texto: 'Discricionário do Presidente da República, sem vinculação a requisitos.' },
      { id: 'B', texto: 'Vinculado, pois cumpridos os requisitos legais, o interessado tem direito subjetivo à naturalização (STF).' },
      { id: 'C', texto: 'Vedado pela CF/88.' },
      { id: 'D', texto: 'Automático, independentemente de requerimento.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O STF firmou que a naturalização por 15 anos (art. 12, II, "b") é ato VINCULADO — cumpridos os requisitos, o estrangeiro tem direito subjetivo à naturalização.',
      incorretas: { A: 'É vinculado, não discricionário.', C: 'É previsto expressamente.', D: 'Exige requerimento do interessado.' },
      conceitoCobrado: 'Naturalização por 15 anos (art. 12, II, "b").',
      pegadinha: 'Achar que é ato discricionário.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF.'
    },
    tags: ['naturalização', 'art. 12']
  },

  /* ============================================================
     DC-06 — Direitos Políticos e Partidos Políticos
  ============================================================ */
  {
    id: 'Q-DID-DC-0601',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Plebiscito x referendo',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Sobre os institutos de participação popular, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O plebiscito convoca o povo a ratificar decisão já tomada; o referendo autoriza previamente.' },
      { id: 'B', texto: 'O plebiscito ocorre ANTES da decisão legislativa; o referendo, DEPOIS, para ratificar ou rejeitar.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambos ocorrem apenas após decisão do STF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'PLEBISCITO: consulta prévia. REFERENDO: consulta posterior. Mnemônico: P = Precede; R = Ratifica.',
      incorretas: { A: 'Inverte.', C: 'São distintos.', D: 'Não dependem do STF.' },
      conceitoCobrado: 'Plebiscito x referendo.',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Alta frequência.'
    },
    tags: ['plebiscito', 'referendo']
  },
  {
    id: 'Q-DID-DC-0602',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Voto obrigatório x facultativo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o alistamento eleitoral (art. 14, §1º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É obrigatório para maiores de 18 anos; facultativo para analfabetos, maiores de 70 anos e maiores de 16 e menores de 18.' },
      { id: 'B', texto: 'É facultativo para todos os brasileiros.' },
      { id: 'C', texto: 'É obrigatório apenas para quem tem ensino médio completo.' },
      { id: 'D', texto: 'É obrigatório para maiores de 70 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 14, §1º: obrigatório para maiores de 18; facultativo para analfabetos, maiores de 70 e maiores de 16 e menores de 18.',
      incorretas: { B: 'Regra é obrigatório.', C: 'Não há exigência de escolaridade.', D: 'Maiores de 70 têm voto FACULTATIVO.' },
      conceitoCobrado: 'Alistamento eleitoral.',
      pegadinha: 'Achar que maiores de 70 são obrigados.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['voto', 'alistamento']
  },
  {
    id: 'Q-DID-DC-0603',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Idades mínimas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A idade mínima para concorrer ao cargo de Senador da República é:',
    alternativas: [
      { id: 'A', texto: '21 anos.' },
      { id: 'B', texto: '30 anos.' },
      { id: 'C', texto: '35 anos.' },
      { id: 'D', texto: '18 anos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 14, §3º, VI, "a": 35 anos para Presidente, Vice-Presidente e Senador.',
      incorretas: { A: '21 anos: Deputado, Prefeito, Juiz de Paz.', B: '30 anos: Governador.', D: '18 anos: Vereador.' },
      conceitoCobrado: 'Idades mínimas do art. 14, §3º, VI.',
      pegadinha: 'Trocar as idades.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['elegibilidade', 'idades']
  },
  {
    id: 'Q-DID-DC-0604',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Inelegibilidade reflexa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a inelegibilidade reflexa (art. 14, §7º, CF/88), é correto afirmar que atinge:',
    alternativas: [
      { id: 'A', texto: 'Cônjuge e parentes até o 2º grau, no território de jurisdição do titular.' },
      { id: 'B', texto: 'Qualquer parente, em qualquer grau, em todo o território nacional.' },
      { id: 'C', texto: 'Apenas o cônjuge.' },
      { id: 'D', texto: 'Amigos íntimos do titular.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 14, §7º: cônjuge e parentes consanguíneos ou afins até o 2º grau (ou por adoção), no território de jurisdição do titular.',
      incorretas: { B: 'Limita-se ao 2º grau e ao território.', C: 'Abrange também parentes.', D: 'Não abrange amigos.' },
      conceitoCobrado: 'Inelegibilidade reflexa.',
      pegadinha: 'Achar que atinge 3º grau ou todo o país.',
      comoApareceEmConcurso: 'Situações práticas.'
    },
    tags: ['inelegibilidade reflexa']
  },
  {
    id: 'Q-DID-DC-0605',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-06',
    subtema: 'Partidos políticos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os partidos políticos (art. 17, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A partir da EC 97/2017, é vedada a celebração de coligações nas eleições proporcionais.' },
      { id: 'B', texto: 'As coligações proporcionais continuam permitidas.' },
      { id: 'C', texto: 'É vedada a criação de partidos políticos.' },
      { id: 'D', texto: 'Os partidos não precisam ter caráter nacional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'EC 97/2017 vedou coligações em eleições proporcionais (Deputados, Vereadores) — mantidas nas majoritárias.',
      incorretas: { B: 'Vedadas a partir de 2020.', C: 'A criação é livre (art. 17, caput).', D: 'Art. 17, I: caráter nacional é obrigatório.' },
      conceitoCobrado: 'Coligações partidárias.',
      pegadinha: 'Achar que ainda existem coligações proporcionais.',
      comoApareceEmConcurso: 'Tema pós-EC 97/2017.'
    },
    tags: ['partidos', 'coligações']
  },

  /* ============================================================
     DC-07 — Remédios Constitucionais
  ============================================================ */
  {
    id: 'Q-DID-DC-0701',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Cabimento',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os remédios constitucionais, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O habeas corpus é gratuito e protege a liberdade de locomoção.' },
      { id: 'B', texto: 'O habeas data é gratuito.' },
      { id: 'C', texto: 'O mandado de segurança cabe para proteger liberdade de locomoção.' },
      { id: 'D', texto: 'O mandado de injunção cabe para retificar dados pessoais em banco público.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'HC: liberdade de locomoção; gratuito (art. 5º, LXXVII).',
      incorretas: { B: 'HD NÃO é gratuito.', C: 'MS é subsidiário — se cabe HC, não cabe MS.', D: 'MI é para falta de norma regulamentadora.' },
      conceitoCobrado: 'Cabimento e gratuidade dos remédios.',
      pegadinha: 'Achar que o HD é gratuito.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['remédios', 'gratuidade']
  },
  {
    id: 'Q-DID-DC-0702',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Ação popular',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a ação popular (art. 5º, LXXIII, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Qualquer CIDADÃO é parte legítima; salvo comprovada má-fé, é isento de custas judiciais e do ônus da sucumbência.' },
      { id: 'B', texto: 'Só o Ministério Público tem legitimidade.' },
      { id: 'C', texto: 'Visa proteger apenas o patrimônio público material.' },
      { id: 'D', texto: 'Cabe a qualquer pessoa, inclusive estrangeiro não naturalizado.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'AP: legitimado é o CIDADÃO (eleitor); isenção de custas e sucumbência, salvo má-fé.',
      incorretas: { B: 'MP pode propor AÇÃO CIVIL PÚBLICA.', C: 'Também moralidade, meio ambiente e patrimônio histórico-cultural.', D: 'Só CIDADÃO (eleitor).' },
      conceitoCobrado: 'Ação popular.',
      pegadinha: 'Confundir legitimidade com ACP.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ação popular', 'legitimidade']
  },
  {
    id: 'Q-DID-DC-0703',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de segurança coletivo',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'NÃO pode impetrar mandado de segurança coletivo (art. 5º, LXX, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Partido político com representação no Congresso Nacional.' },
      { id: 'B', texto: 'Organização sindical.' },
      { id: 'C', texto: 'Entidade de classe.' },
      { id: 'D', texto: 'Cidadão isoladamente.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'MS coletivo: partido com representação no Congresso, organização sindical, entidade de classe e associação (1 ano). Cidadão isolado NÃO pode.',
      incorretas: { A: 'Está no rol.', B: 'Está no rol.', C: 'Está no rol.' },
      conceitoCobrado: 'Legitimados do MS coletivo.',
      pegadinha: 'Confundir com AP (que cabe a cidadão).',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['MS coletivo', 'legitimidade']
  },
  {
    id: 'Q-DID-DC-0704',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Habeas data x mandado de segurança',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Servidor tem seu nome indevidamente negativado em cadastro público por ilegalidade administrativa. O remédio adequado é:',
    alternativas: [
      { id: 'A', texto: 'Habeas data.' },
      { id: 'B', texto: 'Mandado de segurança, por se tratar de ilegalidade que atinge direito líquido e certo (STF).' },
      { id: 'C', texto: 'Habeas corpus.' },
      { id: 'D', texto: 'Ação popular.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'STF: quando o problema é a ILEGALIDADE da inscrição em cadastro, cabe MS; o HD é para ACESSAR ou RETIFICAR dados — sem impugnação de ilegalidade da inscrição.',
      incorretas: { A: 'HD não é o adequado para impugnar a ilegalidade da negativação.', C: 'HC é para locomoção.', D: 'AP exige ato lesivo ao patrimônio público.' },
      conceitoCobrado: 'Distinção MS x HD.',
      pegadinha: 'Confundir os dois.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF.'
    },
    tags: ['MS', 'HD']
  },
  {
    id: 'Q-DID-DC-0705',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'Mandado de injunção',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o mandado de injunção (art. 5º, LXXI, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cabe sempre que a falta de norma regulamentadora torne inviável o exercício de direitos e liberdades constitucionais e das prerrogativas inerentes à nacionalidade, à soberania e à cidadania.' },
      { id: 'B', texto: 'Cabe para proteger liberdade de locomoção.' },
      { id: 'C', texto: 'É sinônimo de ação direta de inconstitucionalidade por omissão.' },
      { id: 'D', texto: 'É gratuito como o habeas corpus.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 5º, LXXI.',
      incorretas: { B: 'Isso é HC.', C: 'MI é individual/coletivo; ADO é ação do STF com efeitos mais amplos.', D: 'Gratuidade expressa é apenas do HC.' },
      conceitoCobrado: 'MI.',
      pegadinha: 'Confundir com ADO.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['MI', 'art. 5º, LXXI']
  },
  {
    id: 'Q-DID-DC-0706',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-07',
    subtema: 'CPI x remédios',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o habeas corpus, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Pode ser impetrado por qualquer pessoa, física ou jurídica, nacional ou estrangeira, em favor próprio ou de terceiro, e é gratuito.' },
      { id: 'B', texto: 'Só pode ser impetrado pelo próprio preso.' },
      { id: 'C', texto: 'É restrito a brasileiros natos.' },
      { id: 'D', texto: 'É pago, com custas judiciais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'HC é universal: qualquer pessoa, em favor próprio ou de terceiro, e é gratuito (art. 5º, LXXVII).',
      incorretas: { B: 'Pode ser impetrado por qualquer pessoa (inclusive por terceiro).', C: 'Estende-se a qualquer pessoa.', D: 'É gratuito.' },
      conceitoCobrado: 'HC — legitimidade e gratuidade.',
      pegadinha: 'Restringir a legitimidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['HC', 'gratuidade']
  }  ,

  /* ============================================================
     DC-08 — Organização Político-Administrativa
  ============================================================ */
  {
    id: 'Q-DID-DC-0801',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Soberania x autonomia',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os entes federativos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A União, os Estados, o DF e os Municípios são todos soberanos.' },
      { id: 'B', texto: 'A soberania é atributo exclusivo da República Federativa do Brasil; os entes têm autonomia política, administrativa e financeira.' },
      { id: 'C', texto: 'Somente a União é autônoma; os demais entes são subordinados a ela.' },
      { id: 'D', texto: 'Os Municípios são subordinados aos Estados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Soberania = atributo exclusivo da República. Autonomia = atributo de cada ente (União, Estados, DF, Municípios).',
      incorretas: { A: 'Só a República é soberana.', C: 'Todos os entes são autônomos.', D: 'Municípios não são subordinados aos Estados.' },
      conceitoCobrado: 'Soberania x autonomia.',
      pegadinha: 'Achar que os Municípios são subordinados ou que os Estados são soberanos.',
      comoApareceEmConcurso: 'Clássica em DA e DC.'
    },
    tags: ['federação', 'autonomia']
  },
  {
    id: 'Q-DID-DC-0802',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Criação de Estados e Municípios',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a criação de novos entes federativos, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A criação de Estados depende de lei ordinária federal; a de Municípios, de lei complementar estadual.' },
      { id: 'B', texto: 'A criação de Estados depende de lei COMPLEMENTAR federal + plebiscito + oitiva das Assembleias; a de Municípios, de lei ESTADUAL + plebiscito + estudo de viabilidade municipal.' },
      { id: 'C', texto: 'Ambas dependem de decreto do Presidente da República.' },
      { id: 'D', texto: 'Só a União pode criar Municípios.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Estados: LC federal + plebiscito + oitiva das Assembleias (art. 18, §3º). Municípios: lei estadual + plebiscito + estudo de viabilidade (art. 18, §4º).',
      incorretas: { A: 'Inverte os instrumentos.', C: 'Não é por decreto.', D: 'Municípios são criados por lei estadual.' },
      conceitoCobrado: 'Criação de Estados x criação de Municípios.',
      pegadinha: 'Trocar lei complementar (federal) com lei estadual.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['criação', 'art. 18']
  },
  {
    id: 'Q-DID-DC-0803',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Distrito Federal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o Distrito Federal (art. 32, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É regido por Constituição própria e pode ser dividido em Municípios.' },
      { id: 'B', texto: 'É regido por LEI ORGÂNICA, acumula competências estaduais e municipais, e NÃO pode ser dividido em Municípios.' },
      { id: 'C', texto: 'É um Território Federal administrado pela União.' },
      { id: 'D', texto: 'Tem soberania, mas não autonomia.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 32: DF rege-se por Lei Orgânica (não Constituição), acumula competências estaduais e municipais, e não pode ser dividido em Municípios.',
      incorretas: { A: 'Não tem Constituição e não se divide.', C: 'Não é Território Federal.', D: 'Tem autonomia parcial, não soberania.' },
      conceitoCobrado: 'Estatuto do DF.',
      pegadinha: 'Achar que o DF tem Constituição ou se divide em Municípios.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['DF', 'art. 32']
  },
  {
    id: 'Q-DID-DC-0804',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Vedações federativas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre as vedações federativas (art. 19, CF/88), é correto afirmar que é vedado à União, aos Estados, ao DF e aos Municípios:',
    alternativas: [
      { id: 'A', texto: 'Estabelecer cultos religiosos ou igrejas, subvencioná-los, embaraçar-lhes o funcionamento ou manter com eles relação de dependência ou aliança — ressalvada a colaboração de interesse público.' },
      { id: 'B', texto: 'Recusar fé aos documentos públicos apenas se emitidos por órgãos federais.' },
      { id: 'C', texto: 'Criar distinções entre brasileiros apenas em ano eleitoral.' },
      { id: 'D', texto: 'Colaborar com igrejas em situações de calamidade pública.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 19, I: veda estabelecer cultos, subvencionar, embaraçar ou manter dependência/aliança, ressalvada a colaboração de interesse público.',
      incorretas: { B: 'É vedado recusar fé a QUALQUER documento público.', C: 'A vedação é permanente, não só em ano eleitoral.', D: 'A colaboração de interesse público é permitida.' },
      conceitoCobrado: 'Vedações federativas.',
      pegadinha: 'Restringir as vedações.',
      comoApareceEmConcurso: 'Cobrança direta do art. 19.'
    },
    tags: ['vedações', 'art. 19']
  },
  {
    id: 'Q-DID-DC-0805',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-08',
    subtema: 'Territórios Federais',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os Territórios Federais (art. 18, §2º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São entes federativos autônomos com Constituição própria.' },
      { id: 'B', texto: 'Integram a União, não têm autonomia política plena, e sua criação, transformação em Estado ou reintegração ao Estado de origem dependem de lei complementar.' },
      { id: 'C', texto: 'Têm os mesmos poderes dos Estados-membros.' },
      { id: 'D', texto: 'Têm soberania, como a União.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Territórios: integram a União, sem autonomia política plena. Criação/transformação/reintegração por lei complementar (art. 18, §2º).',
      incorretas: { A: 'Não são entes autônomos com Constituição.', C: 'Não têm os mesmos poderes dos Estados.', D: 'Soberania é só da República.' },
      conceitoCobrado: 'Territórios Federais.',
      pegadinha: 'Achar que Território é ente federativo.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['territórios', 'art. 18']
  },

  /* ============================================================
     DC-09 — Repartição de Competências
  ============================================================ */
  {
    id: 'Q-DID-DC-0901',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Exclusiva x privativa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as competências da União (arts. 21 e 22, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A competência EXCLUSIVA (art. 21) pode ser delegada aos Estados por lei complementar; a PRIVATIVA (art. 22) não.' },
      { id: 'B', texto: 'A competência EXCLUSIVA (art. 21) NÃO é delegável; a PRIVATIVA (art. 22) pode ser delegada aos Estados por lei complementar, para questões específicas.' },
      { id: 'C', texto: 'São sinônimos.' },
      { id: 'D', texto: 'Ambas são indelegáveis.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'EXCLUSIVA (art. 21): material, indelegável. PRIVATIVA (art. 22): legislativa, delegável por LC (art. 22, parágrafo único).',
      incorretas: { A: 'Inverte.', C: 'São categorias distintas.', D: 'A privativa é delegável.' },
      conceitoCobrado: 'Exclusiva x privativa.',
      pegadinha: 'Inverter as definições. Mnemônico: EXclusiva = EXclui delegação.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['exclusiva', 'privativa']
  },
  {
    id: 'Q-DID-DC-0902',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Comum x concorrente',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre competência COMUM (art. 23) e CONCORRENTE (art. 24), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Comum é legislativa; concorrente é material.' },
      { id: 'B', texto: 'Comum é MATERIAL (todos os entes juntos, ex.: saúde, meio ambiente); concorrente é LEGISLATIVA (União edita normas gerais; Estados/DF editam específicas).' },
      { id: 'C', texto: 'Ambas são exclusivas da União.' },
      { id: 'D', texto: 'São sinônimos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'COMUM (art. 23): material, todos os entes. CONCORRENTE (art. 24): legislativa, União (normas gerais) + Estados/DF (específicas).',
      incorretas: { A: 'Inverte.', C: 'Ambas envolvem múltiplos entes.', D: 'São distintas.' },
      conceitoCobrado: 'Comum x concorrente.',
      pegadinha: 'Trocar material com legislativa.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['comum', 'concorrente']
  },
  {
    id: 'Q-DID-DC-0903',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Superveniência de lei federal',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a superveniência de lei federal geral em matéria de competência concorrente (art. 24, §4º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Revoga integralmente a lei estadual que dispuser sobre normas específicas.' },
      { id: 'B', texto: 'SUSPENDE a eficácia da lei estadual no que lhe for CONTRÁRIO.' },
      { id: 'C', texto: 'Não produz efeitos sobre a lei estadual.' },
      { id: 'D', texto: 'Transforma a lei estadual em lei federal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 24, §4º: superveniência de lei federal geral SUSPENDE a lei estadual no que lhe for CONTRÁRIO.',
      incorretas: { A: 'Não revoga — apenas suspende no que for contrário.', C: 'Produz efeito suspensivo parcial.', D: 'Não transforma.' },
      conceitoCobrado: 'Efeito da superveniência federal.',
      pegadinha: 'Confundir revogação (definitiva) com suspensão (temporária/parcial).',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['concorrente', 'art. 24']
  },
  {
    id: 'Q-DID-DC-0904',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Competência legislativa',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a competência legislativa de Estados e Municípios, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Estados têm competência residual (o que não é da União nem dos Municípios); Municípios têm competência para legislar sobre interesse local e suplementar a legislação federal/estadual no que couber.' },
      { id: 'B', texto: 'Estados só podem legislar sobre matéria expressamente prevista.' },
      { id: 'C', texto: 'Municípios têm competência residual.' },
      { id: 'D', texto: 'Municípios podem legislar sobre direito civil.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 25, §1º (Estados): competência residual. Art. 30, I (Municípios): interesse local. Art. 30, II: suplementar.',
      incorretas: { B: 'Estados têm competência residual (art. 25, §1º).', C: 'Residual é dos Estados.', D: 'Direito civil é privativo da União.' },
      conceitoCobrado: 'Competências estaduais e municipais.',
      pegadinha: 'Achar que Estados só legislam sobre matéria expressa — eles têm competência residual.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['residual', 'interesse local']
  },
  {
    id: 'Q-DID-DC-0905',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-09',
    subtema: 'Competência do DF',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre as competências do Distrito Federal (art. 32, §1º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Acumula as competências legislativas reservadas aos Estados e aos Municípios.' },
      { id: 'B', texto: 'Tem apenas competências municipais.' },
      { id: 'C', texto: 'Tem apenas competências estaduais.' },
      { id: 'D', texto: 'Só legisla sobre matéria expressamente prevista na CF.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 32, §1º: ao DF são atribuídas as competências legislativas reservadas aos Estados e Municípios.',
      incorretas: { B: 'Acumula as duas (municipais + estaduais).', C: 'Acumula as duas (municipais + estaduais).', D: 'Acumula as competências estaduais e municipais.' },
      conceitoCobrado: 'Competências do DF.',
      pegadinha: 'Achar que o DF tem só competências estaduais.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['DF', 'competências']
  },

  /* ============================================================
     DC-11 — Administração Pública na Constituição
  ============================================================ */
  {
    id: 'Q-DID-DC-1101',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Princípios (LIMPE)',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São princípios expressos da Administração Pública no caput do art. 37 da CF/88:',
    alternativas: [
      { id: 'A', texto: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
      { id: 'B', texto: 'Legalidade, imparcialidade, moralidade, transparência e eficiência.' },
      { id: 'C', texto: 'Razoabilidade, proporcionalidade, moralidade, publicidade e eficiência.' },
      { id: 'D', texto: 'Legalidade, impessoalidade, motivação, publicidade e economicidade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
      incorretas: { B: 'Imparcialidade e transparência não estão no caput.', C: 'Razoabilidade e proporcionalidade são implícitos.', D: 'Motivação é implícita.' },
      conceitoCobrado: 'LIMPE.',
      pegadinha: 'Trocar por termos próximos.',
      comoApareceEmConcurso: 'Toda prova cobra LIMPE.'
    },
    tags: ['LIMPE', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1102',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Concurso público',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o concurso público (art. 37, II, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É dispensável para cargos efetivos, sendo obrigatório apenas para cargos em comissão.' },
      { id: 'B', texto: 'É obrigatório para provimento de cargos efetivos e empregos públicos, salvo cargos em comissão (livre nomeação e exoneração).' },
      { id: 'C', texto: 'Só se aplica a cargos federais.' },
      { id: 'D', texto: 'O prazo de validade é de 4 anos, prorrogável uma vez por igual período.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Concurso é regra para cargos efetivos e empregos públicos. Cargos em comissão são de livre nomeação (não exigem concurso).',
      incorretas: { A: 'Inverte.', C: 'Aplica-se a União, Estados, DF e Municípios.', D: 'Prazo é de até 2 anos, prorrogável uma única vez por igual período.' },
      conceitoCobrado: 'Concurso público.',
      pegadinha: 'Confundir prazo (2 anos, uma prorrogação) com cargos em comissão.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['concurso', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1103',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Acumulação de cargos',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a acumulação remunerada de cargos públicos (art. 37, XVI, CF/88), é correto afirmar que é permitida quando:',
    alternativas: [
      { id: 'A', texto: 'Houve qualquer tipo de vínculo, desde que o servidor tenha disponibilidade.' },
      { id: 'B', texto: 'Houver compatibilidade de horários e se tratar de: dois cargos de professor; um de professor com outro técnico ou científico; ou dois privativos de profissionais de saúde.' },
      { id: 'C', texto: 'O servidor for estável e tiver mais de 10 anos de serviço.' },
      { id: 'D', texto: 'For autorizada pelo chefe imediato.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 37, XVI: 3 hipóteses (2 de professor; 1 professor + 1 técnico/científico; 2 privativos de saúde), com compatibilidade de horários e respeito ao teto.',
      incorretas: { A: 'Não é por disponibilidade.', C: 'Não depende de estabilidade ou tempo de serviço.', D: 'Não depende de autorização do chefe.' },
      conceitoCobrado: 'Acumulação de cargos.',
      pegadinha: 'Mnemônico: "PROF-PROF", "PROF-TEC", "SAÚDE-SAÚDE".',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['acumulação', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1104',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Teto remuneratório',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre o teto remuneratório (art. 37, XI, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O teto geral é o subsídio de Ministro do STF; nos Estados e DF, o subsídio de Desembargador do TJ; nos Municípios, o subsídio de Prefeito.' },
      { id: 'B', texto: 'Não há teto para servidores públicos.' },
      { id: 'C', texto: 'O teto é o salário do Presidente da República em todos os entes.' },
      { id: 'D', texto: 'O teto é fixado por decreto do Executivo a cada ano.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, XI: teto geral = subsídio de Ministro do STF; estadual = Desembargador do TJ; municipal = Prefeito.',
      incorretas: { B: 'Há teto constitucional.', C: 'Não é o salário do Presidente.', D: 'O teto é constitucional, não por decreto.' },
      conceitoCobrado: 'Teto remuneratório.',
      pegadinha: 'Confundir os 3 níveis.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['teto', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1105',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Responsabilidade civil do Estado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a responsabilidade civil do Estado (art. 37, §6º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É objetiva perante terceiros (basta dano + nexo causal + conduta), e a ação regressiva contra o agente exige DOLO ou CULPA.' },
      { id: 'B', texto: 'É subjetiva em todos os casos.' },
      { id: 'C', texto: 'A ação regressiva independe de dolo ou culpa do agente.' },
      { id: 'D', texto: 'O Estado não responde pelos atos de seus agentes.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, §6º: responsabilidade OBJETIVA do Estado perante terceiros (atos comissivos) + ação regressiva com dolo/culpa do agente.',
      incorretas: { B: 'Objetiva em atos comissivos.', C: 'Exige dolo ou culpa.', D: 'Responde objetivamente.' },
      conceitoCobrado: 'Responsabilidade civil objetiva + ação regressiva.',
      pegadinha: 'Achar que a ação regressiva dispensa dolo/culpa.',
      comoApareceEmConcurso: 'Clássica em DA e DC.'
    },
    tags: ['responsabilidade', 'art. 37']
  },
  {
    id: 'Q-DID-DC-1106',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-11',
    subtema: 'Cargo em comissão x função de confiança',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre cargo em comissão e função de confiança (art. 37, V, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'As funções de confiança são exercidas exclusivamente por servidores de carreira; os cargos em comissão são de livre nomeação e exoneração, destinados a direção, chefia e assessoramento.' },
      { id: 'B', texto: 'Ambos podem ser ocupados por pessoas de fora da Administração.' },
      { id: 'C', texto: 'Ambos exigem concurso público.' },
      { id: 'D', texto: 'Cargos em comissão são privativos de servidores de carreira.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 37, V: funções de confiança — privativas de servidor de carreira; cargos em comissão — livre nomeação e exoneração, para direção, chefia e assessoramento.',
      incorretas: { B: 'Funções de confiança são privativas de servidores de carreira.', C: 'Cargo em comissão não exige concurso.', D: 'Inverte.' },
      conceitoCobrado: 'Função de confiança x cargo em comissão.',
      pegadinha: 'Inverter os conceitos.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['cargo em comissão', 'função de confiança']
  }  ,

  /* ============================================================
     DC-12 — Poder Legislativo
  ============================================================ */
  {
    id: 'Q-DID-DC-1201',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Composição do Congresso',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a composição do Congresso Nacional (arts. 44 a 46, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É bicameral, formado pela Câmara dos Deputados (representantes do povo) e pelo Senado Federal (representantes dos Estados e do DF).' },
      { id: 'B', texto: 'É unicameral, formado apenas pela Câmara dos Deputados.' },
      { id: 'C', texto: 'Cada Estado elege 8 senadores e 3 deputados federais.' },
      { id: 'D', texto: 'Deputados federais têm mandato de 8 anos; senadores, de 4 anos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Congresso é BICAMERAL: Câmara (povo) + Senado (Estados e DF).',
      incorretas: { B: 'É bicameral.', C: 'Inverte: cada Estado elege 3 senadores e mínimo de 8 deputados federais.', D: 'Inverte: deputados = 4 anos; senadores = 8 anos.' },
      conceitoCobrado: 'Composição do Congresso.',
      pegadinha: 'Trocar número de deputados e senadores por Estado e mandatos.',
      comoApareceEmConcurso: 'Clássica em DC e em concursos de Tribunais.'
    },
    tags: ['congresso', 'art. 44']
  },
  {
    id: 'Q-DID-DC-1202',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Competências privativas da Câmara e do Senado',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as competências privativas da Câmara e do Senado, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Câmara autoriza a instauração de processo contra o Presidente (art. 51, I); o Senado processa e julga nos crimes de responsabilidade (art. 52, I).' },
      { id: 'B', texto: 'A Câmara processa e julga o Presidente; o Senado apenas autoriza.' },
      { id: 'C', texto: 'Ambas as Casas julgam conjuntamente o Presidente em sessão unicameral.' },
      { id: 'D', texto: 'O Senado autoriza; a Câmara julga.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 51, I: Câmara AUTORIZA (2/3). Art. 52, I: Senado PROCESSA E JULGA.',
      incorretas: { B: 'Inverte.', C: 'Não há julgamento conjunto em sessão unicameral — é o Senado, sob a presidência do Presidente do STF.', D: 'Inverte.' },
      conceitoCobrado: 'Competências privativas do art. 51 e do art. 52.',
      pegadinha: 'Confundir "autorizar" (Câmara) com "processar e julgar" (Senado).',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['Câmara', 'Senado', 'crime de responsabilidade']
  },
  {
    id: 'Q-DID-DC-1203',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Imunidades parlamentares',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as imunidades parlamentares (art. 53, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A imunidade MATERIAL abrange opiniões, palavras e votos, no exercício do mandato, valendo em qualquer lugar; a FORMAL protege contra prisão (salvo flagrante de crime inafiançável) e processo criminal.' },
      { id: 'B', texto: 'A imunidade material só vale dentro do Congresso.' },
      { id: 'C', texto: 'A imunidade formal impede qualquer processo criminal contra o parlamentar.' },
      { id: 'D', texto: 'A imunidade material e a formal são sinônimos.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'MATERIAL (caput): opiniões, palavras e votos, no exercício do mandato, em qualquer lugar. FORMAL: prisão apenas em flagrante de crime inafiançável; processo criminal sem licença prévia (EC 35/2001), com possibilidade de sustação pela Casa.',
      incorretas: { B: 'Vale em qualquer lugar.', C: 'Não impede — a EC 35/2001 aboliu a licença prévia para processo.', D: 'São distintas.' },
      conceitoCobrado: 'Imunidades parlamentares.',
      pegadinha: 'Achar que a imunidade material só vale no Congresso ou que a formal exige licença.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['imunidade', 'art. 53']
  },
  {
    id: 'Q-DID-DC-1204',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'CPI — poderes e limites',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre os poderes e limites da CPI (art. 58, §3º, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A CPI pode decretar prisão preventiva e determinar interceptação telefônica diretamente.' },
      { id: 'B', texto: 'A CPI pode quebrar sigilo bancário, fiscal e de dados telefônicos, convocar, ouvir e requisitar, mas NÃO pode decretar prisão (salvo flagrante), determinar busca domiciliar ou interceptação telefônica.' },
      { id: 'C', texto: 'A CPI não tem qualquer poder de investigação.' },
      { id: 'D', texto: 'A CPI julga e condena os investigados.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CPI tem poderes de investigação próprios das autoridades judiciais, mas com LIMITES: não prende (salvo flagrante), não faz busca domiciliar, não determina interceptação telefônica. Pode quebrar sigilos bancário/fiscal/de dados telefônicos.',
      incorretas: { A: 'Excede os limites da CPI.', C: 'Tem poderes de investigação.', D: 'Não julga — apenas investiga e encaminha.' },
      conceitoCobrado: 'Poderes e limites da CPI.',
      pegadinha: 'Achar que a CPI pode tudo que um juiz pode.',
      comoApareceEmConcurso: 'Alta frequência em concursos de Tribunais.'
    },
    tags: ['CPI', 'art. 58']
  },
  {
    id: 'Q-DID-DC-1205',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-12',
    subtema: 'Tribunal de Contas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o Tribunal de Contas da União (art. 70 a 75, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão do Poder Judiciário, com competência para julgar contas.' },
      { id: 'B', texto: 'É órgão auxiliar do Poder Legislativo, com autonomia e funções próprias, exercendo controle externo contábil, financeiro, orçamentário, operacional e patrimonial.' },
      { id: 'C', texto: 'É subordinado ao Poder Executivo.' },
      { id: 'D', texto: 'É uma autarquia federal.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'TCU é órgão AUXILIAR do Legislativo, com autonomia, sem subordinação hierárquica. Exerce controle externo.',
      incorretas: { A: 'Não é do Judiciário.', C: 'Não é subordinado ao Executivo.', D: 'Não é autarquia.' },
      conceitoCobrado: 'Natureza do Tribunal de Contas.',
      pegadinha: 'Achar que integra o Judiciário.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['TCU', 'art. 70']
  },

  /* ============================================================
     DC-13 — Processo Legislativo
  ============================================================ */
  {
    id: 'Q-DID-DC-1301',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Quóruns',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre os quóruns no processo legislativo, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Emenda constitucional exige 3/5 em dois turnos em cada Casa; lei complementar exige maioria ABSOLUTA; lei ordinária exige maioria SIMPLES.' },
      { id: 'B', texto: 'Emenda exige maioria absoluta; lei complementar exige 3/5; lei ordinária exige maioria simples.' },
      { id: 'C', texto: 'Lei complementar e lei ordinária têm o mesmo quórum.' },
      { id: 'D', texto: 'Emenda constitucional exige unanimidade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Emenda (art. 60, §2º): 3/5 em dois turnos em cada Casa. LC (art. 69): maioria absoluta. LO (art. 47): maioria simples.',
      incorretas: { B: 'Inverte.', C: 'LC (absoluta) ≠ LO (simples).', D: 'Não exige unanimidade.' },
      conceitoCobrado: 'Quóruns.',
      pegadinha: 'Trocar 3/5, absoluta e simples.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['quórum', 'processo legislativo']
  },
  {
    id: 'Q-DID-DC-1302',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Medida provisória',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a medida provisória (art. 62, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem vigência de 60 dias, prorrogável uma única vez por igual período; se não apreciada em 45 dias, entra em regime de urgência e tranca a pauta da Casa onde estiver.' },
      { id: 'B', texto: 'Tem vigência de 90 dias prorrogáveis indefinidamente.' },
      { id: 'C', texto: 'Pode tratar de qualquer matéria.' },
      { id: 'D', texto: 'Não precisa de relevância e urgência.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 62: 60 + 60 dias; trancamento da pauta após 45 dias; perde eficácia desde a edição se não apreciada em 120 dias.',
      incorretas: { B: 'Prazo é 60+60.', C: 'Há vedações materiais (art. 62, §1º).', D: 'Relevância e urgência são pressupostos.' },
      conceitoCobrado: 'Medida provisória.',
      pegadinha: 'Confundir prazos ou esquecer o trancamento em 45 dias.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['MP', 'art. 62']
  },
  {
    id: 'Q-DID-DC-1303',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Sanção e veto',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a sanção e o veto (art. 66, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Presidente tem 15 dias úteis para sancionar ou vetar; o veto pode ser total ou parcial, e é apreciado pelo Congresso em sessão conjunta, com derrubada por maioria absoluta.' },
      { id: 'B', texto: 'O veto parcial pode atingir palavra ou artigo isolado sem relação com o conjunto.' },
      { id: 'C', texto: 'O veto é irrecusável pelo Congresso.' },
      { id: 'D', texto: 'A sanção tem prazo de 30 dias.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Prazo de 15 dias úteis; veto total ou parcial; derrubada por MAIORIA ABSOLUTA em sessão conjunta.',
      incorretas: { B: 'Veto parcial só atinge parte com sentido próprio.', C: 'O veto pode ser derrubado.', D: 'Prazo é 15 dias úteis.' },
      conceitoCobrado: 'Sanção e veto.',
      pegadinha: 'Confundir prazo ou modalidade de veto.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['sanção', 'veto']
  },
  {
    id: 'Q-DID-DC-1304',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Espécies normativas',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre as espécies normativas do art. 59, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São: emendas à Constituição, leis complementares, leis ordinárias, leis delegadas, medidas provisórias, decretos legislativos e resoluções.' },
      { id: 'B', texto: 'São apenas: lei ordinária e lei complementar.' },
      { id: 'C', texto: 'Decretos legislativos e resoluções não são espécies normativas.' },
      { id: 'D', texto: 'Medidas provisórias não têm força de lei.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 59: 7 espécies normativas.',
      incorretas: { B: 'Há 7.', C: 'São espécies previstas.', D: 'MP tem força de lei.' },
      conceitoCobrado: 'Espécies normativas.',
      pegadinha: 'Reduzir o rol.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['espécies normativas', 'art. 59']
  },
  {
    id: 'Q-DID-DC-1305',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-13',
    subtema: 'Decreto legislativo x resolução',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre decretos legislativos e resoluções, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Decretos legislativos tratam de matéria de competência EXCLUSIVA do Congresso (art. 49); resoluções tratam de matéria de competência PRIVATIVA do Congresso, da Câmara ou do Senado.' },
      { id: 'B', texto: 'Ambos dependem de sanção do Presidente.' },
      { id: 'C', texto: 'Decretos legislativos são sinônimos de resoluções.' },
      { id: 'D', texto: 'Resoluções dependem de sanção e veto.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Decreto legislativo: matéria exclusiva (art. 49). Resolução: matéria privativa (Congresso, Câmara ou Senado).',
      incorretas: { B: 'Nenhum dos dois depende de sanção.', C: 'São espécies distintas.', D: 'Não dependem de sanção.' },
      conceitoCobrado: 'Decreto legislativo x resolução.',
      pegadinha: 'Achar que dependem de sanção presidencial.',
      comoApareceEmConcurso: 'Cobrança média.'
    },
    tags: ['decreto legislativo', 'resolução']
  },

  /* ============================================================
     DC-RN — Constituição do Estado do Rio Grande do Norte
  ============================================================ */
  {
    id: 'Q-DID-DC-RN01',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Estrutura do Estado',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a organização do Estado do Rio Grande do Norte, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Poder Legislativo estadual é exercido pela Assembleia Legislativa do RN, UNICAMERAL, com deputados estaduais eleitos para mandato de 4 anos.' },
      { id: 'B', texto: 'O Poder Legislativo estadual é bicameral, com deputados e senadores estaduais.' },
      { id: 'C', texto: 'O Estado do RN é regido por Lei Orgânica.' },
      { id: 'D', texto: 'A Capital do Estado é Mossoró.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Assembleia Legislativa do RN é UNICAMERAL, com deputados estaduais de mandato de 4 anos.',
      incorretas: { B: 'Não há senadores estaduais.', C: 'Estados têm Constituição (não Lei Orgânica).', D: 'A Capital é Natal.' },
      conceitoCobrado: 'Estrutura do Legislativo estadual.',
      pegadinha: 'Confundir com bicameralismo ou com Lei Orgânica.',
      comoApareceEmConcurso: 'Cobrado em concursos estaduais do RN.'
    },
    tags: ['RN', 'Assembleia']
  },
  {
    id: 'Q-DID-DC-RN02',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Tribunal de Contas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'No Rio Grande do Norte, o Tribunal de Contas do Estado (TCE/RN):',
    alternativas: [
      { id: 'A', texto: 'Fiscaliza apenas o Estado, sendo a fiscalização dos Municípios atribuída a um Tribunal de Contas dos Municípios separado.' },
      { id: 'B', texto: 'É órgão auxiliar da Assembleia Legislativa e fiscaliza o Estado E os Municípios do RN, uma vez que não há Tribunal de Contas dos Municípios separado.' },
      { id: 'C', texto: 'É órgão do Poder Judiciário.' },
      { id: 'D', texto: 'É subordinado ao Governador do Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'No RN, o TCE acumula as funções de fiscalização estadual e municipal — é órgão auxiliar do Legislativo, com autonomia.',
      incorretas: { A: 'Não há TCM separado no RN.', C: 'Não é do Judiciário.', D: 'Não é subordinado ao Governador.' },
      conceitoCobrado: 'Atuação do TCE/RN.',
      pegadinha: 'Achar que existe TCM no RN.',
      comoApareceEmConcurso: 'Cobrado em concursos do RN.'
    },
    tags: ['RN', 'TCE']
  },
  {
    id: 'Q-DID-DC-RN03',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Subordinação à CF',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Sobre a relação entre a Constituição do Estado do RN (CE/RN/1989) e a Constituição Federal (CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A CE/RN é soberana e pode contrariar a CF.' },
      { id: 'B', texto: 'A CE/RN está SUBORDINADA à CF/88 e não pode contrariar normas federais nem criar hipóteses não previstas na CF.' },
      { id: 'C', texto: 'A CE/RN e a CF têm o mesmo status hierárquico.' },
      { id: 'D', texto: 'A CE/RN revoga dispositivos da CF aplicáveis ao Estado.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A CE/RN é norma estadual, subordinada à CF — prevalece o princípio da supremacia constitucional federal.',
      incorretas: { A: 'Não é soberana e não pode contrariar a CF.', C: 'Hierarquia é distinta.', D: 'Não revoga dispositivos da CF.' },
      conceitoCobrado: 'Supremacia da CF sobre a CE.',
      pegadinha: 'Achar que a CE pode contrariar a CF.',
      comoApareceEmConcurso: 'Cobrança clássica em concursos estaduais.'
    },
    tags: ['RN', 'supremacia']
  },
  {
    id: 'Q-DID-DC-RN04',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Servidores estaduais',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre o regime jurídico dos servidores públicos do Estado do RN, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É celetista (CLT).' },
      { id: 'B', texto: 'É estatutário (regime jurídico único), estabelecido em Lei Complementar estadual.' },
      { id: 'C', texto: 'É livre, sem lei específica.' },
      { id: 'D', texto: 'Aplica-se somente aos servidores federais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Servidores estaduais do RN são regidos por regime jurídico único (estatutário), em LC estadual.',
      incorretas: { A: 'Não é celetista.', C: 'Exige lei.', D: 'Aplica-se aos servidores estaduais.' },
      conceitoCobrado: 'Regime dos servidores estaduais.',
      pegadinha: 'Confundir com celetista.',
      comoApareceEmConcurso: 'Cobrado em concursos estaduais.'
    },
    tags: ['RN', 'servidores']
  },
  {
    id: 'Q-DID-DC-RN05',
    tipo: 'DIDATICA',
    area: 'CE',
    moduloId: 'DC-RN',
    subtema: 'Eleição do Governador',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a eleição do Governador do Estado do RN, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É feita por maioria simples, sem 2º turno.' },
      { id: 'B', texto: 'É feita por maioria ABSOLUTA, com 2º turno se necessário, mandato de 4 anos, admitida uma reeleição.' },
      { id: 'C', texto: 'É feita por voto indireto (assembleia).' },
      { id: 'D', texto: 'O Governador é nomeado pelo Presidente da República.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Eleição majoritária em 2 turnos se necessário; mandato de 4 anos; reeleição permitida uma única vez.',
      incorretas: { A: 'Maioria absoluta com 2º turno.', C: 'Eleição direta.', D: 'Eleito pelo povo.' },
      conceitoCobrado: 'Eleição do Governador.',
      pegadinha: 'Confundir com eleição indireta.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['RN', 'Governador']
  },

  /* ============================================================
     DC-10 — Intervenção
  ============================================================ */
  {
    id: 'Q-DID-DC-1001',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Hipóteses de intervenção federal',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'NÃO é hipótese de intervenção FEDERAL nos Estados (art. 34, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Manter a integridade nacional.' },
      { id: 'B', texto: 'Repelir invasão estrangeira ou de uma unidade da Federação em outra.' },
      { id: 'C', texto: 'Deixar de aplicar o mínimo exigido da receita municipal na saúde e na educação.' },
      { id: 'D', texto: 'Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de 2 anos.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'A não aplicação do mínimo em saúde e educação é hipótese de intervenção ESTADUAL em MUNICÍPIO (art. 35, III).',
      incorretas: { A: 'É hipótese do art. 34, I.', B: 'É hipótese do art. 34, II.', D: 'É hipótese do art. 34, V.' },
      conceitoCobrado: 'Hipóteses de intervenção federal x estadual.',
      pegadinha: 'Misturar hipóteses dos arts. 34 e 35.',
      comoApareceEmConcurso: 'Cobrança clássica.'
    },
    tags: ['intervenção', 'art. 34']
  },
  {
    id: 'Q-DID-DC-1002',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Hipóteses de intervenção estadual',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'São hipóteses de intervenção ESTADUAL nos Municípios (art. 35, CF/88), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Deixar de ser paga, sem motivo, por 2 anos, a dívida fundada.' },
      { id: 'B', texto: 'Não forem prestadas contas devidas, na forma da lei.' },
      { id: 'C', texto: 'Não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde.' },
      { id: 'D', texto: 'Descumprimento de decisão do Tribunal de Contas da União.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A hipótese do inciso IV do art. 35 é o Tribunal de JUSTIÇA dar provimento a representação para assegurar a observância de princípios da Constituição ESTADUAL, ou prover execução de lei, ordem ou decisão judicial — não do TCU.',
      incorretas: { A: 'É o inciso I.', B: 'É o inciso II.', C: 'É o inciso III.' },
      conceitoCobrado: 'Intervenção estadual em Municípios.',
      pegadinha: 'Confundir TJ com TCU.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'art. 35']
  },
  {
    id: 'Q-DID-DC-1003',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Procedimento',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o procedimento da intervenção federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O decreto é expedido pelo Congresso Nacional e sancionado pelo Presidente.' },
      { id: 'B', texto: 'O decreto é expedido pelo Presidente, ouvidos o Conselho da República e o Conselho de Defesa Nacional, e submetido ao Congresso em 24 horas.' },
      { id: 'C', texto: 'O decreto é expedido pelo STF.' },
      { id: 'D', texto: 'O decreto dispensa controle do Congresso.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 36: decreto do Presidente + ouvidoria prévia dos Conselhos + controle do Congresso em 24h (convocação extraordinária em 5 dias se em recesso).',
      incorretas: { A: 'Não é do Congresso.', C: 'Não é do STF.', D: 'Há controle político pelo Congresso.' },
      conceitoCobrado: 'Procedimento da intervenção.',
      pegadinha: 'Achar que é o Congresso que decreta.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['intervenção', 'procedimento']
  },
  {
    id: 'Q-DID-DC-1004',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Intervenção x Estado de Defesa',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a diferença entre intervenção e Estado de Defesa, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Intervenção atinge o ente federativo (quebra temporária de autonomia); Estado de Defesa restringe direitos em locais determinados, sem quebra da autonomia.' },
      { id: 'B', texto: 'São sinônimos.' },
      { id: 'C', texto: 'O Estado de Defesa quebra a autonomia do Estado.' },
      { id: 'D', texto: 'A intervenção só pode ocorrer em Municípios.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Intervenção: atinge ente federativo (Estado ou Município). Estado de Defesa: restrição de direitos em locais determinados, sem quebra da autonomia.',
      incorretas: { B: 'São institutos distintos.', C: 'Não quebra autonomia.', D: 'A intervenção federal atinge Estados e DF; a estadual, Municípios.' },
      conceitoCobrado: 'Distinção entre intervenção e Estado de Defesa.',
      pegadinha: 'Confundir os institutos.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['intervenção', 'defesa']
  },
  {
    id: 'Q-DID-DC-1005',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-10',
    subtema: 'Efeitos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o término da intervenção, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É permanente — uma vez decretada, não pode cessar.' },
      { id: 'B', texto: 'Cessada a causa, as autoridades afastadas retornam aos seus cargos, salvo impedimento legal.' },
      { id: 'C', texto: 'As autoridades afastadas nunca retornam.' },
      { id: 'D', texto: 'A intervenção só pode cessar por decisão do STF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 36, §3º: cessados os motivos da intervenção, as autoridades afastadas retornam aos seus cargos, salvo impedimento legal.',
      incorretas: { A: 'É temporária.', C: 'Retornam.', D: 'Cessa quando cessa a causa.' },
      conceitoCobrado: 'Efeitos da cessação da intervenção.',
      pegadinha: 'Achar que a intervenção é permanente.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['intervenção', 'cessação']
  },

  /* ============================================================
     DC-14 — Poder Executivo
  ============================================================ */
  {
    id: 'Q-DID-DC-1401',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Requisitos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São requisitos para ser Presidente da República, EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Ser brasileiro nato.' },
      { id: 'B', texto: 'Ter no mínimo 35 anos de idade.' },
      { id: 'C', texto: 'Estar no pleno exercício dos direitos políticos e ter domicílio eleitoral.' },
      { id: 'D', texto: 'Ter no mínimo 30 anos de idade.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Idade mínima é 35 anos (art. 14, §3º, VI, "a"), não 30 (que é para Governador).',
      incorretas: { A: 'É requisito.', B: 'É requisito.', C: 'É requisito.' },
      conceitoCobrado: 'Requisitos para Presidente.',
      pegadinha: 'Trocar 35 com 30.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['Presidente', 'requisitos']
  },
  {
    id: 'Q-DID-DC-1402',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Sucessão',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Em caso de vacância simultânea dos cargos de Presidente e Vice nos 2 últimos anos do mandato, o que ocorre?',
    alternativas: [
      { id: 'A', texto: 'Eleição DIRETA em 90 dias.' },
      { id: 'B', texto: 'Eleição INDIRETA pelo Congresso Nacional em 30 dias.' },
      { id: 'C', texto: 'Assume definitivamente o Presidente do STF.' },
      { id: 'D', texto: 'Não há nova eleição — o mandato é concluído pelo Presidente da Câmara.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 81, §1º: vacância nos 2 últimos anos → eleição INDIRETA pelo Congresso em 30 dias.',
      incorretas: { A: 'Eleição direta é nos 2 primeiros anos.', C: 'A linha sucessória assume apenas temporariamente, não definitivamente.', D: 'Há nova eleição.' },
      conceitoCobrado: 'Vacância nos 2 últimos anos.',
      pegadinha: 'Inverter os prazos e modalidades.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['sucessão', 'vacância']
  },
  {
    id: 'Q-DID-DC-1403',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Crimes de responsabilidade',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os crimes de responsabilidade do Presidente da República, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'A Câmara autoriza por 2/3 e o STF julga.' },
      { id: 'B', texto: 'A Câmara autoriza por 2/3 e o Senado Federal processa e julga.' },
      { id: 'C', texto: 'O Senado julga sem necessidade de autorização.' },
      { id: 'D', texto: 'O STF julga diretamente.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Crime de responsabilidade: Câmara AUTORIZA (2/3) e Senado PROCESSA E JULGA (art. 86 + art. 52, I).',
      incorretas: { A: 'STF julga crime COMUM.', C: 'Há necessidade de autorização.', D: 'STF julga crime comum.' },
      conceitoCobrado: 'Crime de responsabilidade.',
      pegadinha: 'Confundir crime comum com crime de responsabilidade.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['crime de responsabilidade', 'impeachment']
  },
  {
    id: 'Q-DID-DC-1404',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Competências',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'NÃO é competência privativa do Presidente da República (art. 84, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Sancionar, promulgar e fazer publicar as leis, bem como expedir decretos e regulamentos para sua fiel execução.' },
      { id: 'B', texto: 'Editar medidas provisórias com força de lei.' },
      { id: 'C', texto: 'Nomear, após aprovação pelo Senado, os Ministros do STF.' },
      { id: 'D', texto: 'Julgar as causas em que a União seja parte.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Julgar causas em que a União é parte é competência do PODER JUDICIÁRIO (Justiça Federal), não do Presidente.',
      incorretas: { A: 'É o inciso IV.', B: 'É o inciso XXVI.', C: 'É o inciso XIV (com aprovação do Senado).' },
      conceitoCobrado: 'Competências do Presidente.',
      pegadinha: 'Confundir função administrativa com jurisdicional.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Presidente', 'competências']
  },
  {
    id: 'Q-DID-DC-1405',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-14',
    subtema: 'Mandato',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o mandato do Presidente da República, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É de 4 anos, permitida uma única reeleição.' },
      { id: 'B', texto: 'É de 5 anos, sem possibilidade de reeleição.' },
      { id: 'C', texto: 'É de 4 anos, sem possibilidade de reeleição.' },
      { id: 'D', texto: 'É de 6 anos, com reeleição ilimitada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 82 + EC 16/1997: mandato de 4 anos, admitida UMA única reeleição.',
      incorretas: { B: 'É 4 anos, com uma reeleição.', C: 'Admite uma reeleição.', D: 'Não é 6 anos.' },
      conceitoCobrado: 'Mandato presidencial e reeleição.',
      pegadinha: 'Trocar duração ou negar reeleição.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['mandato', 'reeleição']
  },

  /* ============================================================
     DC-15 — Poder Judiciário
  ============================================================ */
  {
    id: 'Q-DID-DC-1501',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'STF x STJ',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o STF e o STJ, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O STF é guarda da lei federal; o STJ é guarda da Constituição.' },
      { id: 'B', texto: 'O STF é guarda da Constituição; o STJ é guarda da lei federal.' },
      { id: 'C', texto: 'Ambos têm 11 ministros.' },
      { id: 'D', texto: 'O STJ julga ADI e ADPF.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'STF = guarda da CF (11 ministros); STJ = guarda da lei federal (33 ministros).',
      incorretas: { A: 'Inverte.', C: 'STF = 11; STJ = 33.', D: 'ADI/ADPF são do STF.' },
      conceitoCobrado: 'Funções do STF e do STJ.',
      pegadinha: 'Inverter guarda e composição.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['STF', 'STJ']
  },
  {
    id: 'Q-DID-DC-1502',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Garantias dos magistrados',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São garantias constitucionais dos magistrados (art. 95, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Vitaliciedade, inamovibilidade e irredutibilidade de subsídio.' },
      { id: 'B', texto: 'Estabilidade, inamovibilidade e irredutibilidade de vencimentos.' },
      { id: 'C', texto: 'Vitaliciedade, estabilidade e irredutibilidade.' },
      { id: 'D', texto: 'Apenas vitaliciedade.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 95: vitaliciedade, inamovibilidade e irredutibilidade de subsídio.',
      incorretas: { B: 'Magistrado tem vitaliciedade, não estabilidade.', C: 'Estabilidade é do servidor público.', D: 'São três garantias.' },
      conceitoCobrado: 'Garantias do magistrado.',
      pegadinha: 'Trocar vitaliciedade por estabilidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['garantias', 'magistratura']
  },
  {
    id: 'Q-DID-DC-1503',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Justiça Federal',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Compete à Justiça Federal processar e julgar:',
    alternativas: [
      { id: 'A', texto: 'Causas em que a União, autarquia federal ou empresa pública federal forem partes.' },
      { id: 'B', texto: 'Causas entre particulares sobre contratos.' },
      { id: 'C', texto: 'Divórcios.' },
      { id: 'D', texto: 'Crimes militares.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 109, I: causas em que a União, autarquia ou empresa pública federal forem partes (como autoras, rés, assistentes ou oponentes).',
      incorretas: { B: 'Competência da Justiça Estadual.', C: 'Justiça Estadual (varas de família).', D: 'Justiça Militar.' },
      conceitoCobrado: 'Competência da Justiça Federal.',
      pegadinha: 'Achar que qualquer causa com ente público é federal.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Justiça Federal', 'art. 109']
  },
  {
    id: 'Q-DID-DC-1504',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'CNJ',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o Conselho Nacional de Justiça (CNJ), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão de controle administrativo, financeiro e disciplinar do Judiciário, criado pela EC 45/2004.' },
      { id: 'B', texto: 'Julga causas originárias em matéria constitucional.' },
      { id: 'C', texto: 'Substitui o STF no julgamento de ADI.' },
      { id: 'D', texto: 'É subordinado ao Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CNJ: órgão de controle administrativo, financeiro e disciplinar do Judiciário (EC 45/2004).',
      incorretas: { B: 'Não julga causas.', C: 'ADI continua sendo do STF.', D: 'Tem autonomia.' },
      conceitoCobrado: 'Função do CNJ.',
      pegadinha: 'Achar que o CNJ julga causas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['CNJ', 'EC 45/2004']
  },
  {
    id: 'Q-DID-DC-1505',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-15',
    subtema: 'Justiça Estadual',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a Justiça Estadual, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem competência residual — tudo o que não for das Justiças Federal, do Trabalho, Eleitoral e Militar.' },
      { id: 'B', texto: 'Julga apenas causas penais.' },
      { id: 'C', texto: 'Só existe na capital.' },
      { id: 'D', texto: 'Substitui a Justiça Federal quando esta estiver sobrecarregada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Justiça Estadual tem competência RESIDUAL — o que não for das outras Justiças.',
      incorretas: { B: 'Julga causas cíveis, penais, comerciais, etc.', C: 'Existe em todo o Estado.', D: 'Não substitui.' },
      conceitoCobrado: 'Competência residual da Justiça Estadual.',
      pegadinha: 'Achar que tem competência limitada.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Justiça Estadual']
  },

  /* ============================================================
     DC-16 — Funções Essenciais à Justiça
  ============================================================ */
  {
    id: 'Q-DID-DC-1601',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Ministério Público',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'São princípios institucionais do Ministério Público (art. 127, §1º, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Unidade, indivisibilidade e independência funcional.' },
      { id: 'B', texto: 'Legalidade, impessoalidade e moralidade.' },
      { id: 'C', texto: 'Hierarquia, disciplina e subordinação.' },
      { id: 'D', texto: 'Publicidade, eficiência e transparência.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 127, §1º: unidade, indivisibilidade e independência funcional.',
      incorretas: { B: 'São princípios da Administração (LIMPE parcial).', C: 'Hierarquia é do Judiciário/Militar.', D: 'São princípios da Administração.' },
      conceitoCobrado: 'Princípios do MP.',
      pegadinha: 'Confundir com LIMPE.',
      comoApareceEmConcurso: 'Altíssima frequência em concursos de MP.'
    },
    tags: ['MP', 'princípios']
  },
  {
    id: 'Q-DID-DC-1602',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Defensoria Pública',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a Defensoria Pública (art. 134, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É instituição permanente, essencial à função jurisdicional do Estado, à qual incumbe a orientação jurídica, a promoção dos direitos humanos e a defesa dos direitos individuais e coletivos aos necessitados, integral e gratuitamente.' },
      { id: 'B', texto: 'É subordinada ao Poder Executivo.' },
      { id: 'C', texto: 'Atende apenas quem paga.' },
      { id: 'D', texto: 'Só existe na esfera federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 134 (redação da EC 80/2014): Defensoria é instituição permanente, essencial à função jurisdicional, que atende os necessitados de forma integral e gratuita.',
      incorretas: { B: 'Tem autonomia funcional e administrativa.', C: 'Atende gratuitamente.', D: 'Existe em todas as esferas.' },
      conceitoCobrado: 'Defensoria Pública.',
      pegadinha: 'Achar que é subordinada.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['Defensoria Pública']
  },
  {
    id: 'Q-DID-DC-1603',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Advocacia-Geral da União',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre a Advocacia-Geral da União (AGU), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Representa a União, judicial e extrajudicialmente, e presta consultoria e assessoramento ao Poder Executivo federal.' },
      { id: 'B', texto: 'É órgão do Poder Judiciário.' },
      { id: 'C', texto: 'Defende os necessitados.' },
      { id: 'D', texto: 'É subordinada ao STF.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 131: AGU representa a União (judicial e extrajudicialmente) e presta consultoria/assessoramento ao Executivo federal.',
      incorretas: { B: 'É órgão do Executivo federal (função essencial à Justiça).', C: 'Defensoria defende necessitados.', D: 'Não é subordinada ao STF.' },
      conceitoCobrado: 'AGU.',
      pegadinha: 'Confundir AGU com Defensoria ou MP.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['AGU', 'advocacia pública']
  },
  {
    id: 'Q-DID-DC-1604',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'Advocacia',
    dificuldade: 1,
    prioridade: 'media',
    enunciado: 'Sobre a advocacia (art. 133, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei.' },
      { id: 'B', texto: 'O advogado é subordinado ao Judiciário.' },
      { id: 'C', texto: 'Só pode atuar em causas criminais.' },
      { id: 'D', texto: 'Sua atuação depende de autorização judicial prévia.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 133: literalidade.',
      incorretas: { B: 'É autônomo.', C: 'Atua em qualquer causa.', D: 'Não depende de autorização judicial.' },
      conceitoCobrado: 'Advocacia.',
      pegadinha: 'Restringir a atuação.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['advocacia', 'art. 133']
  },
  {
    id: 'Q-DID-DC-1605',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-16',
    subtema: 'CNMP',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Conselho Nacional do Ministério Público (CNMP), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É órgão de controle administrativo, financeiro e disciplinar do MP, criado pela EC 45/2004.' },
      { id: 'B', texto: 'Julga causas penais contra membros do MP.' },
      { id: 'C', texto: 'Substitui o MP na propositura de ações.' },
      { id: 'D', texto: 'É subordinado ao Poder Executivo.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'CNMP: controle administrativo, financeiro e disciplinar do MP (EC 45/2004).',
      incorretas: { B: 'Não julga causas.', C: 'Não substitui o MP.', D: 'Tem autonomia.' },
      conceitoCobrado: 'CNMP.',
      pegadinha: 'Achar que julga causas.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['CNMP', 'EC 45/2004']
  },

  /* ============================================================
     DC-17 — Defesa do Estado e Instituições Democráticas
  ============================================================ */
  {
    id: 'Q-DID-DC-1701',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Estado de Defesa',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Estado de Defesa (art. 136, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Prazo de 30 dias, prorrogável uma única vez por igual período; decreto do Presidente, ouvidos os Conselhos da República e de Defesa Nacional.' },
      { id: 'B', texto: 'Prazo de 60 dias, prorrogável indefinidamente.' },
      { id: 'C', texto: 'Não depende de controle pelo Congresso.' },
      { id: 'D', texto: 'Pode ser decretado apenas em caso de guerra.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 136: 30 dias, prorrogável UMA vez; decreto do Presidente; ouvidoria dos Conselhos; controle pelo Congresso.',
      incorretas: { B: 'Prazo é 30+30.', C: 'Há controle político.', D: 'Guerra é hipótese do Estado de Sítio.' },
      conceitoCobrado: 'Estado de Defesa.',
      pegadinha: 'Confundir prazo com o Estado de Sítio.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Estado de Defesa', 'art. 136']
  },
  {
    id: 'Q-DID-DC-1702',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Estado de Sítio',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre o Estado de Sítio (art. 137, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Cabe em caso de comoção grave de repercussão nacional, ineficácia do Estado de Defesa ou declaração de guerra/agressão estrangeira; prazo de 30 dias, prorrogável por iguais períodos.' },
      { id: 'B', texto: 'Cabe apenas em caso de calamidade natural.' },
      { id: 'C', texto: 'Não pode ser prorrogado.' },
      { id: 'D', texto: 'O Congresso pode ser dissolvido durante o Estado de Sítio.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 137: comoção nacional, ineficácia do Estado de Defesa ou guerra/agressão estrangeira; 30 dias prorrogável por iguais períodos.',
      incorretas: { B: 'Calamidade natural é hipótese de Estado de Defesa.', C: 'Pode ser prorrogado.', D: 'O Congresso NÃO pode ser dissolvido (art. 138).' },
      conceitoCobrado: 'Estado de Sítio.',
      pegadinha: 'Confundir hipóteses.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['Estado de Sítio', 'art. 137']
  },
  {
    id: 'Q-DID-DC-1703',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Forças Armadas',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre as Forças Armadas (art. 142, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'São constituídas pela Marinha, Exército e Aeronáutica; destinam-se à defesa da Pátria, à garantia dos Poderes constituídos e da lei e da ordem.' },
      { id: 'B', texto: 'Incluem as polícias militares.' },
      { id: 'C', texto: 'São subordinadas aos Estados.' },
      { id: 'D', texto: 'Têm função de polícia judiciária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 142: Marinha, Exército e Aeronáutica; missão de defesa da Pátria, garantia dos Poderes e da lei e da ordem.',
      incorretas: { B: 'Polícias militares são órgãos de segurança pública (art. 144).', C: 'São instituições nacionais.', D: 'Polícia judiciária é da PF e das Polícias Civis.' },
      conceitoCobrado: 'Forças Armadas.',
      pegadinha: 'Confundir FFAA com segurança pública.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['Forças Armadas', 'art. 142']
  },
  {
    id: 'Q-DID-DC-1704',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Segurança Pública',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os órgãos de segurança pública (art. 144, CF/88), assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Polícia Federal: apura crimes contra a ordem política e social e faz polícia marítima, aeroportuária e de fronteiras.' },
      { id: 'B', texto: 'Polícia Rodoviária Federal: patrulhamento ostensivo das rodovias federais.' },
      { id: 'C', texto: 'Polícias Militares: policiamento ostensivo e preservação da ordem pública nos Estados.' },
      { id: 'D', texto: 'Polícias Civis: policiamento ostensivo nas ruas.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Polícias Civis exercem funções de POLÍCIA JUDICIÁRIA e apuram infrações penais (exceto militares). Policiamento ostensivo é da Polícia Militar.',
      incorretas: { A: 'Correta.', B: 'Correta.', C: 'Correta.' },
      conceitoCobrado: 'Atribuições das polícias.',
      pegadinha: 'Confundir polícia judiciária com ostensiva.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['segurança pública', 'art. 144']
  },
  {
    id: 'Q-DID-DC-1705',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-17',
    subtema: 'Controle',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre o controle do Estado de Defesa e do Estado de Sítio, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O decreto é submetido ao Congresso Nacional, que decide por maioria absoluta; durante o Estado de Sítio, o Congresso não pode ser dissolvido.' },
      { id: 'B', texto: 'Não há controle pelo Congresso.' },
      { id: 'C', texto: 'O STF controla exclusivamente.' },
      { id: 'D', texto: 'O decreto dispensa justificativa.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Controle político pelo Congresso (apreciação do decreto). Art. 138: o Congresso não pode ser dissolvido durante o Estado de Sítio.',
      incorretas: { B: 'Há controle.', C: 'O controle é político pelo Congresso.', D: 'O decreto deve indicar motivos.' },
      conceitoCobrado: 'Controle do Estado de Defesa e Sítio.',
      pegadinha: 'Achar que não há controle.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['controle', 'art. 138']
  },

  /* ============================================================
     DC-18 — Controle de Constitucionalidade
  ============================================================ */
  {
    id: 'Q-DID-DC-1801',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Difuso x concentrado',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre as espécies de controle de constitucionalidade, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Difuso: qualquer juiz, incidental, efeitos inter partes. Concentrado: STF, ação própria, efeitos erga omnes e vinculante.' },
      { id: 'B', texto: 'Difuso: STF, efeitos erga omnes. Concentrado: qualquer juiz, inter partes.' },
      { id: 'C', texto: 'Ambos são exercidos exclusivamente pelo STF.' },
      { id: 'D', texto: 'O controle concentrado é exercido por qualquer tribunal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'DIFUSO: qualquer juiz, incidental, inter partes. CONCENTRADO: STF, ação própria, erga omnes e vinculante.',
      incorretas: { B: 'Inverte.', C: 'Só o concentrado é exclusivo do STF.', D: 'É exclusivo do STF.' },
      conceitoCobrado: 'Difuso x concentrado.',
      pegadinha: 'Inverter as definições.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['difuso', 'concentrado']
  },
  {
    id: 'Q-DID-DC-1802',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'ADI x ADC',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre a ADI e a ADC, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ADI cabe contra lei ou ato normativo federal ou estadual; ADC cabe apenas contra lei ou ato normativo FEDERAL.' },
      { id: 'B', texto: 'Ambas cabem contra lei municipal.' },
      { id: 'C', texto: 'A ADC cabe contra lei estadual.' },
      { id: 'D', texto: 'A ADI cabe apenas contra lei federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ADI (art. 102, I, "a"): lei federal OU estadual. ADC: apenas lei FEDERAL.',
      incorretas: { B: 'Lei municipal não cabe ADI/ADC.', C: 'ADC é só federal.', D: 'ADI também cabe contra lei estadual.' },
      conceitoCobrado: 'Cabimento ADI e ADC.',
      pegadinha: 'Confundir os cabimentos.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ADI', 'ADC']
  },
  {
    id: 'Q-DID-DC-1803',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'ADPF x ADO',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre ADPF e ADO, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'ADPF é residual (cabe quando não houver outro meio eficaz) e protege preceito fundamental; ADO visa tornar efetiva norma constitucional em caso de omissão legislativa.' },
      { id: 'B', texto: 'ADPF e ADO são sinônimos.' },
      { id: 'C', texto: 'ADO cabe contra lei existente.' },
      { id: 'D', texto: 'ADPF só cabe contra lei federal.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'ADPF: residual, protege preceito fundamental. ADO: omissão legislativa.',
      incorretas: { B: 'São distintas.', C: 'ADO é para omissão.', D: 'ADPF abrange lei municipal, estadual e federal.' },
      conceitoCobrado: 'ADPF x ADO.',
      pegadinha: 'Confundir finalidades.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ADPF', 'ADO']
  },
  {
    id: 'Q-DID-DC-1804',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Legitimados',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'NÃO é legitimado para propor ADI (art. 103, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Presidente da República.' },
      { id: 'B', texto: 'Procurador-Geral da República.' },
      { id: 'C', texto: 'Conselho Federal da OAB.' },
      { id: 'D', texto: 'Qualquer cidadão.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Qualquer cidadão não é legitimado para ADI (isso é para AÇÃO POPULAR). Os legitimados estão no art. 103.',
      incorretas: { A: 'É legitimado (art. 103, I).', B: 'É legitimado (art. 103, VI).', C: 'É legitimado (art. 103, VII).' },
      conceitoCobrado: 'Legitimados do art. 103.',
      pegadinha: 'Confundir com AÇÃO POPULAR.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['ADI', 'legitimados']
  },
  {
    id: 'Q-DID-DC-1805',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-18',
    subtema: 'Efeitos',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Sobre os efeitos da decisão de mérito em ADI, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Em regra, são erga omnes e vinculantes; a modulação de efeitos é possível (art. 27 da Lei 9.868/1999).' },
      { id: 'B', texto: 'São sempre inter partes.' },
      { id: 'C', texto: 'Só valem para as partes do processo.' },
      { id: 'D', texto: 'Não têm efeito vinculante.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Decisão de mérito em ADI: erga omnes e vinculante; modulação possível (art. 27).',
      incorretas: { B: 'Erga omnes.', C: 'Erga omnes.', D: 'Tem efeito vinculante.' },
      conceitoCobrado: 'Efeitos da ADI.',
      pegadinha: 'Achar que só vale para as partes.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['ADI', 'efeitos']
  },

  /* ============================================================
     DC-01 — Teoria da Constituição
  ============================================================ */
  {
    id: 'Q-DID-DC-0101',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Classificações de Constituição',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre a classificação da Constituição Federal de 1988, é correto afirmar que ela é:',
    alternativas: [
      { id: 'A', texto: 'Escrita, outorgada, rígida, formal e analítica.' },
      { id: 'B', texto: 'Escrita, promulgada, rígida, formal e analítica.' },
      { id: 'C', texto: 'Não escrita, promulgada, flexível, material e sintética.' },
      { id: 'D', texto: 'Escrita, promulgada, semirrígida, material e analítica.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'CF/88: ESCRITA (documento formal), PROMULGADA (Assembleia Constituinte), RÍGIDA (3/5 em dois turnos), FORMAL (normas constitucionais solenes), ANALÍTICA (extensa).',
      incorretas: { A: 'Não foi outorgada — foi promulgada.', C: 'É escrita, rígida, formal e analítica.', D: 'É rígida, não semirrígida; formal, não material.' },
      conceitoCobrado: 'Classificações de Constituição.',
      pegadinha: 'Confundir promulgada com outorgada; rígida com semirrígida.',
      comoApareceEmConcurso: 'Clássica em DC.'
    },
    tags: ['classificação', 'CF/88']
  },
  {
    id: 'Q-DID-DC-0102',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Poder constituinte originário',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'São características do poder constituinte ORIGINÁRIO:',
    alternativas: [
      { id: 'A', texto: 'Inicial, autônomo, ilimitado, incondicionado e soberano.' },
      { id: 'B', texto: 'Derivado, limitado, condicionado e subordinado.' },
      { id: 'C', texto: 'Permanente, reformador e submisso à CF anterior.' },
      { id: 'D', texto: 'Restrito às cláusulas pétreas.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Originário: inicial, autônomo, ilimitado, incondicionado e soberano. Cria a Constituição sem se submeter a limites jurídicos preexistentes.',
      incorretas: { B: 'São características do DERIVADO.', C: 'O originário não é permanente nem submisso.', D: 'Cláusulas pétreas limitam o DERIVADO, não o originário.' },
      conceitoCobrado: 'Poder constituinte originário.',
      pegadinha: 'Trocar com o derivado.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['poder constituinte', 'originário']
  },
  {
    id: 'Q-DID-DC-0103',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Cláusulas pétreas',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'São cláusulas pétreas expressas (art. 60, §4º, CF/88), EXCETO:',
    alternativas: [
      { id: 'A', texto: 'Forma federativa de Estado.' },
      { id: 'B', texto: 'Voto direto, secreto, universal e periódico.' },
      { id: 'C', texto: 'Separação dos Poderes.' },
      { id: 'D', texto: 'Sistema presidencialista de governo.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O sistema presidencialista NÃO é cláusula pétrea — pode ser alterado por emenda (ex.: adoção do parlamentarismo).',
      incorretas: { A: 'É cláusula pétrea (art. 60, §4º, I).', B: 'É cláusula pétrea (art. 60, §4º, II).', C: 'É cláusula pétrea (art. 60, §4º, III).' },
      conceitoCobrado: 'Cláusulas pétreas.',
      pegadinha: 'Misturar cláusulas pétreas com outras matérias importantes.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['cláusulas pétreas', 'art. 60']
  },
  {
    id: 'Q-DID-DC-0104',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Poder constituinte derivado',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre o poder constituinte DERIVADO, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É ilimitado e incondicionado, como o originário.' },
      { id: 'B', texto: 'É submetido a limites (temporais, circunstanciais, materiais e processuais), sendo exercido por emenda ou revisão.' },
      { id: 'C', texto: 'Não existe no Brasil.' },
      { id: 'D', texto: 'Só pode ser exercido por Assembleia Constituinte.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O derivado é LIMITADO e CONDICIONADO — submete-se a limites temporais, circunstanciais, materiais (cláusulas pétreas) e processuais (3/5 em dois turnos).',
      incorretas: { A: 'Ilimitado é o ORIGINÁRIO.', C: 'Existe: reforma e revisão.', D: 'Emenda é feita pelo Congresso, não por Assembleia Constituinte.' },
      conceitoCobrado: 'Poder constituinte derivado.',
      pegadinha: 'Confundir com o originário.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['poder constituinte', 'derivado']
  },
  {
    id: 'Q-DID-DC-0105',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-01',
    subtema: 'Recepção',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a recepção de normas pela nova Constituição, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Leis anteriores à nova CF que sejam materialmente compatíveis com ela continuam válidas (recepção).' },
      { id: 'B', texto: 'Todas as leis anteriores são automaticamente revogadas.' },
      { id: 'C', texto: 'Leis anteriores só continuam se formalmente compatíveis.' },
      { id: 'D', texto: 'Recepção é sinônimo de repristinação.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Recepção: a lei anterior à nova CF que seja MATERIALMENTE compatível continua válida. A análise é apenas material (não se exige compatibilidade formal).',
      incorretas: { B: 'Nem todas são revogadas.', C: 'Analisa-se apenas a compatibilidade material.', D: 'Repristinação é o retorno de lei revogada.' },
      conceitoCobrado: 'Recepção.',
      pegadinha: 'Achar que se exige compatibilidade formal.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['recepção']
  },

  /* ============================================================
     DC-19 — Ordem Econômica e Social
  ============================================================ */
  {
    id: 'Q-DID-DC-1901',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Princípios da ordem econômica',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'NÃO é princípio da ordem econômica (art. 170, CF/88):',
    alternativas: [
      { id: 'A', texto: 'Livre concorrência e defesa do consumidor.' },
      { id: 'B', texto: 'Função social da propriedade.' },
      { id: 'C', texto: 'Redução das desigualdades regionais e sociais.' },
      { id: 'D', texto: 'Gratuidade universal dos serviços públicos.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Gratuidade universal NÃO é princípio da ordem econômica. Serviços públicos podem ser remunerados por tarifa ou taxa.',
      incorretas: { A: 'Está no art. 170, IV e V.', B: 'Está no art. 170, III.', C: 'Está no art. 170, VII.' },
      conceitoCobrado: 'Princípios da ordem econômica.',
      pegadinha: 'Confundir gratuidade com princípio econômico.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['ordem econômica', 'art. 170']
  },
  {
    id: 'Q-DID-DC-1902',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Atuação do Estado',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a atuação do Estado na economia (arts. 173 e 174, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'O Estado pode explorar qualquer atividade econômica diretamente.' },
      { id: 'B', texto: 'A exploração direta de atividade econômica pelo Estado só é permitida em casos de segurança nacional ou relevante interesse coletivo.' },
      { id: 'C', texto: 'O Estado não tem função reguladora.' },
      { id: 'D', texto: 'O Estado só atua como agente normativo.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 173: exploração direta apenas em segurança nacional ou relevante interesse coletivo. Art. 174: agente normativo e regulador.',
      incorretas: { A: 'Há restrições.', C: 'O art. 174 prevê a função reguladora.', D: 'Também atua diretamente em casos excepcionais.' },
      conceitoCobrado: 'Atuação do Estado na economia.',
      pegadinha: 'Achar que o Estado pode explorar qualquer atividade.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ordem econômica', 'art. 173']
  },
  {
    id: 'Q-DID-DC-1903',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Seguridade social',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a seguridade social (art. 194, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Compreende saúde, previdência e assistência; a previdência é contributiva, mas saúde e assistência não exigem contribuição.' },
      { id: 'B', texto: 'Todas as áreas exigem contribuição prévia.' },
      { id: 'C', texto: 'Só abrange a previdência.' },
      { id: 'D', texto: 'A saúde é contributiva.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Seguridade = saúde + previdência + assistência. Só a PREVIDÊNCIA é contributiva.',
      incorretas: { B: 'Só a previdência exige contribuição.', C: 'Abrange as três.', D: 'Saúde é universal.' },
      conceitoCobrado: 'Seguridade social.',
      pegadinha: 'Achar que saúde exige contribuição.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['seguridade', 'art. 194']
  },
  {
    id: 'Q-DID-DC-1904',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Meio ambiente',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre o meio ambiente (art. 225, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Todos têm direito ao meio ambiente ecologicamente equilibrado, bem de uso comum do povo e essencial à sadia qualidade de vida, impondo-se ao Poder Público e à coletividade o dever de defendê-lo.' },
      { id: 'B', texto: 'É responsabilidade exclusiva do Poder Público.' },
      { id: 'C', texto: 'Não tem proteção constitucional.' },
      { id: 'D', texto: 'Só protege a flora.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Literalidade do art. 225: direito de todos + dever do Poder Público e da coletividade.',
      incorretas: { B: 'Responsabilidade compartilhada.', C: 'Está no art. 225.', D: 'Protege fauna, flora e demais recursos.' },
      conceitoCobrado: 'Meio ambiente.',
      pegadinha: 'Restringir a responsabilidade.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['meio ambiente', 'art. 225']
  },
  {
    id: 'Q-DID-DC-1905',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-19',
    subtema: 'Ordem social — criança e adolescente',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'Sobre a proteção constitucional da criança e do adolescente (art. 227, CF/88), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'É dever da família, da sociedade e do Estado, com prioridade ABSOLUTA.' },
      { id: 'B', texto: 'É dever exclusivo da família.' },
      { id: 'C', texto: 'É dever exclusivo do Estado.' },
      { id: 'D', texto: 'A proteção é opcional.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 227: dever da família, sociedade e Estado, com ABSOLUTA PRIORIDADE.',
      incorretas: { B: 'Também sociedade e Estado.', C: 'Também família e sociedade.', D: 'É obrigatório.' },
      conceitoCobrado: 'Proteção da criança e do adolescente.',
      pegadinha: 'Restringir a responsabilidade.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ordem social', 'art. 227']
  },

  /* ============================================================
     DC-20 — ADCT e Atualizações Constitucionais
  ============================================================ */
  {
    id: 'Q-DID-DC-2001',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Natureza do ADCT',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre o Ato das Disposições Constitucionais Transitórias (ADCT), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Tem natureza de lei ordinária.' },
      { id: 'B', texto: 'Tem a MESMA FORÇA NORMATIVA da CF/88 (é norma constitucional), com natureza TRANSITÓRIA, e é alterado por emenda constitucional.' },
      { id: 'C', texto: 'Não integra a Constituição.' },
      { id: 'D', texto: 'Só pode ser alterado por Assembleia Constituinte.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'O ADCT integra a CF/88 com a mesma força normativa. Sua natureza é transitória, e é alterado por emenda constitucional (3/5 em dois turnos).',
      incorretas: { A: 'Não é lei ordinária.', C: 'Integra a CF.', D: 'É alterado por emenda.' },
      conceitoCobrado: 'Natureza do ADCT.',
      pegadinha: 'Achar que é lei ordinária ou norma inferior.',
      comoApareceEmConcurso: 'Cobrança recorrente.'
    },
    tags: ['ADCT']
  },
  {
    id: 'Q-DID-DC-2002',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Revisão constitucional',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a revisão constitucional (art. 3º do ADCT), é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'Foi realizada uma única vez, em 1993, por maioria absoluta, e está esgotada.' },
      { id: 'B', texto: 'Pode ser realizada a cada 10 anos.' },
      { id: 'C', texto: 'Substitui a emenda constitucional.' },
      { id: 'D', texto: 'Não foi realizada.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A revisão foi ÚNICA (art. 3º do ADCT), em 1993, por maioria absoluta. Já está esgotada. Alterações posteriores só por EMENDA (art. 60).',
      incorretas: { B: 'Não é periódica.', C: 'Não substitui a emenda.', D: 'Foi realizada em 1993.' },
      conceitoCobrado: 'Revisão constitucional.',
      pegadinha: 'Achar que pode ser repetida.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['revisão', 'ADCT']
  },
  {
    id: 'Q-DID-DC-2003',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Emendas constitucionais',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'A inserção do princípio da eficiência no caput do art. 37 da CF foi feita pela:',
    alternativas: [
      { id: 'A', texto: 'EC 45/2004 (Reforma do Judiciário).' },
      { id: 'B', texto: 'EC 19/1998 (Reforma Gerencial).' },
      { id: 'C', texto: 'EC 20/1998 (Reforma da Previdência).' },
      { id: 'D', texto: 'EC 90/2015 (Transporte).' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'A eficiência foi inserida pela EC 19/1998, formando o LIMPE.',
      incorretas: { A: 'EC 45/2004 criou o CNJ, súmula vinculante e repercussão geral.', C: 'EC 20/1998 foi a reforma da previdência.', D: 'EC 90/2015 incluiu o transporte no art. 6º.' },
      conceitoCobrado: 'Emendas constitucionais.',
      pegadinha: 'Confundir EC 19 com EC 45.',
      comoApareceEmConcurso: 'Altíssima frequência.'
    },
    tags: ['EC 19/1998', 'eficiência']
  },
  {
    id: 'Q-DID-DC-2004',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Emendas constitucionais',
    dificuldade: 2,
    prioridade: 'baixa',
    enunciado: 'A EC 45/2004 (Reforma do Judiciário) NÃO introduziu:',
    alternativas: [
      { id: 'A', texto: 'O Conselho Nacional de Justiça (CNJ).' },
      { id: 'B', texto: 'A súmula vinculante.' },
      { id: 'C', texto: 'A repercussão geral no recurso extraordinário.' },
      { id: 'D', texto: 'O princípio da eficiência no art. 37.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A eficiência no art. 37 foi introduzida pela EC 19/1998 (Reforma Gerencial), não pela EC 45/2004.',
      incorretas: { A: 'A EC 45 criou o CNJ (art. 103-B).', B: 'A EC 45 introduziu a súmula vinculante (art. 103-A).', C: 'A EC 45 introduziu a repercussão geral (art. 102, §3º).' },
      conceitoCobrado: 'EC 45/2004.',
      pegadinha: 'Confundir EC 19 com EC 45.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['EC 45/2004', 'CNJ']
  },
  {
    id: 'Q-DID-DC-2005',
    tipo: 'DIDATICA',
    area: 'CF',
    moduloId: 'DC-20',
    subtema: 'Alterações recentes',
    dificuldade: 3,
    prioridade: 'baixa',
    enunciado: 'Sobre a EC 131/2023, é correto afirmar que ela:',
    alternativas: [
      { id: 'A', texto: 'Alterou as hipóteses de PERDA da nacionalidade brasileira.' },
      { id: 'B', texto: 'Acabou com o voto obrigatório.' },
      { id: 'C', texto: 'Reformou o Judiciário.' },
      { id: 'D', texto: 'Criou o CNJ.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A EC 131/2023 alterou as hipóteses de PERDA da nacionalidade (art. 12, §4º), flexibilizando as causas.',
      incorretas: { B: 'Não tratou de voto.', C: 'Reforma do Judiciário foi EC 45/2004.', D: 'CNJ foi criado pela EC 45/2004.' },
      conceitoCobrado: 'Alterações constitucionais recentes.',
      pegadinha: 'Confundir ECs.',
      comoApareceEmConcurso: 'Tema atualizado.'
    },
    tags: ['EC 131/2023', 'nacionalidade']
  },
  /* ============================================================
     DC-04 — Direitos Sociais (LOTE REAL — 51 questões)
     Inserir antes do ]; final, com vírgula após o último item anterior
  ============================================================ */
  {
    id: 'Q-REAL-DC-0401',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação profissional ou sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com o disposto na Constituição Federal, sobre a associação profissional ou sindical, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, tampouco o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical.' },
      { id: 'B', texto: 'É vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Estado.' },
      { id: 'C', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'D', texto: 'O aposentado filiado tem direito a votar, mas não pode ser votado nas organizações sindicais.' },
      { id: 'E', texto: 'É vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até dois anos após o final do mandato, salvo se cometer falta grave, nos termos da lei.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 8º, VI, CF/88: "é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho".',
      incorretas: {
        A: 'Art. 8º, I: a lei não pode exigir AUTORIZAÇÃO, mas RESSALVA o registro no órgão competente.',
        B: 'Art. 8º, II: a base territorial mínima é a área de um MUNICÍPIO, não de um Estado.',
        D: 'Art. 8º, VII: o aposentado filiado tem direito a votar E ser votado.',
        E: 'Art. 8º, VIII: a estabilidade sindical vai até UM ANO após o final do mandato (não dois anos).'
      },
      conceitoCobrado: 'Liberdade sindical (art. 8º).',
      pegadinha: 'Trocar "Município" por "Estado" (B) e "um ano" por "dois anos" (E).',
      comoApareceEmConcurso: 'Cobrança da literalidade do art. 8º com substituição de palavras-chave.'
    },
    tags: ['sindicalização', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0402',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º e renda básica',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Analise atentamente as afirmações abaixo: I - São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma da Constituição Federal de 1988. II - Todo estrangeiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária.',
    alternativas: [
      { id: 'A', texto: 'As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.' },
      { id: 'B', texto: 'As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.' },
      { id: 'C', texto: 'A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.' },
      { id: 'D', texto: 'As asserções I e II são proposições falsas.' },
      { id: 'E', texto: 'A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I é verdadeira (rol completo do art. 6º). II é falsa: o art. 6º, parágrafo único, fala em "todo BRASILEIRO em situação de vulnerabilidade social", não em estrangeiro.',
      incorretas: {
        A: 'II é falsa — não é estrangeiro, é brasileiro.',
        B: 'II é falsa.',
        D: 'I é verdadeira.',
        E: 'I é verdadeira e II é falsa — o inverso do que afirma a alternativa.'
      },
      conceitoCobrado: 'Rol do art. 6º + renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Trocar "brasileiro" por "estrangeiro" no parágrafo único.',
      comoApareceEmConcurso: 'Cobrança literal do art. 6º e seu parágrafo único.'
    },
    tags: ['art. 6º', 'renda básica']
  },
  {
    id: 'Q-REAL-DC-0403',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade de reunião',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Membros de uma determinada categoria profissional, representada pelo sindicato Y, se mobilizam para iniciar uma série de atos para chamar a atenção da opinião pública sobre as precárias condições de trabalho a que estão submetidos. Um desses atos será a realização de uma manifestação em praça pública, cuja pauta será a reivindicação de melhores condições de trabalho. Um dos dirigentes do sindicato Y entra em contato com a Prefeitura, para comunicar à autoridade competente sobre o dia, o horário, o local, o número estimado de participantes e a pauta da manifestação, quando lhe é confirmado que não há outra reunião anteriormente convocada para o mesmo local. Contudo, chegado o dia da manifestação, pacífica e sem armas, ela é dissolvida por autoridades policiais, para não atrapalhar o trânsito da região. Diante dessa situação hipotética, a manifestação do sindicato Y:',
    alternativas: [
      { id: 'A', texto: 'é inconstitucional, pois o exercício da liberdade de reunião não é absoluto;' },
      { id: 'B', texto: 'é inconstitucional, pois a liberdade de locomoção prevalece sobre a liberdade de reunião;' },
      { id: 'C', texto: 'é constitucional, pois atendeu aos requisitos exigidos pela Constituição de 1988 para o exercício legítimo da liberdade de reunião;' },
      { id: 'D', texto: 'é constitucional, pois o exercício da liberdade de reunião não é restringido pela Constituição de 1988;' },
      { id: 'E', texto: 'é inconstitucional, pois o exercício da liberdade de reunião é condicionado à autorização prévia da autoridade competente.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Art. 5º, XVI: a reunião era pacífica, sem armas, em local aberto, com prévio aviso à autoridade e sem frustrar outra reunião anteriormente convocada — todos os requisitos foram atendidos, logo é constitucional.',
      incorretas: {
        A: 'A liberdade de reunião tem limites, mas foram respeitados no caso.',
        B: 'Não há prevalência abstrata entre liberdades; o caso concreto é de reunião legítima.',
        D: 'A liberdade de reunião TEM restrições constitucionais (art. 5º, XVI).',
        E: 'A CF exige apenas PRÉVIO AVISO, não autorização prévia.'
      },
      conceitoCobrado: 'Liberdade de reunião (art. 5º, XVI).',
      pegadinha: 'Confundir "prévio aviso" com "autorização prévia".',
      comoApareceEmConcurso: 'Casos concretos sobre limites da liberdade de reunião.'
    },
    tags: ['reunião', 'art. 5º, XVI']
  },
  {
    id: 'Q-REAL-DC-0404',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição Federal, em relação aos direitos classificados como direitos sociais, assinalar a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'Proteção dos dados pessoais, razoável duração do processo e inviolabilidade de domicílio.' },
      { id: 'B', texto: 'Liberdades de consciência, crença e expressão.' },
      { id: 'C', texto: 'Habeas corpus, habeas data e mandado de segurança.' },
      { id: 'D', texto: 'Transporte, previdência social e saúde.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Transporte (EC 90/2015), previdência social e saúde estão expressos no art. 6º.',
      incorretas: {
        A: 'São direitos individuais (art. 5º) e garantias processuais.',
        B: 'São liberdades individuais (art. 5º, VI e IX).',
        C: 'São remédios constitucionais (art. 5º, LXVIII, LXXII e LXIX).'
      },
      conceitoCobrado: 'Identificação dos direitos sociais do art. 6º.',
      pegadinha: 'Misturar direitos individuais, remédios e direitos sociais.',
      comoApareceEmConcurso: 'Cobrança direta do rol do art. 6º.'
    },
    tags: ['art. 6º', 'direitos sociais']
  },
  {
    id: 'Q-REAL-DC-0405',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal prevê um rol de direitos sociais em seu artigo 6º, dentre os quais o direito social à:',
    alternativas: [
      { id: 'A', texto: 'proteção à maternidade.' },
      { id: 'B', texto: 'seguridade social.' },
      { id: 'C', texto: 'propriedade.' },
      { id: 'D', texto: 'comunicação social.' },
      { id: 'E', texto: 'reforma agrária.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 6º prevê expressamente a "proteção à maternidade e à infância".',
      incorretas: {
        B: 'Seguridade social é o gênero (art. 194) que abrange saúde, previdência e assistência — não é direito social do art. 6º.',
        C: 'Propriedade é direito individual (art. 5º, XXII).',
        D: 'Comunicação social é capítulo da CF (art. 220), não direito social do art. 6º.',
        E: 'Reforma agrária é prevista no art. 184, mas não é direito social do art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Confundir "seguridade social" (gênero) com direitos sociais do art. 6º.',
      comoApareceEmConcurso: 'Cobrança literal do rol.'
    },
    tags: ['art. 6º', 'proteção à maternidade']
  },
  {
    id: 'Q-REAL-DC-0406',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Representante dos empregados',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Em conformidade com a Constituição Federal de 1988, analise atentamente o trecho abaixo e assinale a alternativa que complete corretamente a lacuna. "Nas empresas de mais de _____ empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores."',
    alternativas: [
      { id: 'A', texto: 'Cinquenta.' },
      { id: 'B', texto: 'Setenta e cinco.' },
      { id: 'C', texto: 'Cem.' },
      { id: 'D', texto: 'Cento e cinquenta.' },
      { id: 'E', texto: 'Duzentos.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 11, CF/88: "Nas empresas de mais de DUZENTOS empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores."',
      incorretas: {
        A: 'Cinquenta é o número de empregados para outros fins (ex.: comissão interna), não o do art. 11.',
        B: 'Não é o número previsto.',
        C: 'Cem não é o número previsto.',
        D: 'Cento e cinquenta não é o número previsto.'
      },
      conceitoCobrado: 'Representante dos empregados (art. 11).',
      pegadinha: 'Trocar 200 por 100 ou 50 (números usados em outras normas).',
      comoApareceEmConcurso: 'Cobrança literal do art. 11.'
    },
    tags: ['art. 11', 'representante dos empregados']
  },
  {
    id: 'Q-REAL-DC-0407',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais incluídos por EC',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Os direitos sociais são fundamentais para a garantia de uma sociedade mais justa e solidária. Entre as alternativas abaixo, qual delas foi incluída como direito social por meio de emenda constitucional posterior à promulgação da Constituição da República Federativa de 1988?',
    alternativas: [
      { id: 'A', texto: 'Direito à saúde.' },
      { id: 'B', texto: 'Direito à educação.' },
      { id: 'C', texto: 'Direito ao trabalho.' },
      { id: 'D', texto: 'Direito ao transporte.' },
      { id: 'E', texto: 'Direito à segurança.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'O transporte foi incluído no art. 6º pela EC 90/2015.',
      incorretas: {
        A: 'Saúde estava no texto original de 1988.',
        B: 'Educação estava no texto original de 1988.',
        C: 'Trabalho estava no texto original de 1988.',
        E: 'Segurança estava no texto original de 1988.'
      },
      conceitoCobrado: 'Alterações do art. 6º por emenda constitucional.',
      pegadinha: 'Achar que moradia (EC 26/2000), alimentação (EC 64/2010) ou transporte (EC 90/2015) eram originais.',
      comoApareceEmConcurso: 'Cobrança das ECs que ampliaram o art. 6º.'
    },
    tags: ['EC 90/2015', 'transporte']
  },
  {
    id: 'Q-REAL-DC-0408',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Fundamentos, direitos sociais e DF',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Sobre a Constituição Federal de 1988, julgue as afirmações como verdadeiras (V) ou falsas (F): (__) A Constituição Federal de 1988 consagra a dignidade da pessoa humana como um dos fundamentos da República Federativa do Brasil. (__) Os direitos sociais, como a saúde, educação e previdência social, não estão assegurados pela Constituição de 1988. (__) O Distrito Federal acumula as competências legislativas e administrativas dos Estados e Municípios. Assinale a alternativa cuja respectiva ordem de julgamento está correta:',
    alternativas: [
      { id: 'A', texto: 'V - V - V.' },
      { id: 'B', texto: 'F - F - F.' },
      { id: 'C', texto: 'V - F - V.' },
      { id: 'D', texto: 'V - F - F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V (art. 1º, III), F (direitos sociais ESTÃO assegurados no art. 6º), V (art. 32, §1º).',
      incorretas: {
        A: 'A segunda afirmação é falsa.',
        B: 'A primeira e a terceira são verdadeiras.',
        D: 'A terceira afirmação é verdadeira (art. 32, §1º).'
      },
      conceitoCobrado: 'Fundamentos da República + direitos sociais + competências do DF.',
      pegadinha: 'Negar a previsão constitucional dos direitos sociais.',
      comoApareceEmConcurso: 'Questão interdisciplinar.'
    },
    tags: ['fundamentos', 'art. 6º', 'DF']
  },
  {
    id: 'Q-REAL-DC-0409',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Greve de servidor público',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Samuel, Flávio, Conrado e Viviane são motoristas lotados na secretaria de saúde. Suas funções consistem basicamente em transportar diariamente medicamentos do almoxarifado para os hospitais e postos de saúde da cidade. Inconformados com as condições precárias dos veículos, com as rotas extensas a serem cumpridas em horários extremamente curtos, os 4 servidores resolvem protestar contra a Prefeitura. Os 4 obreiros deflagraram greve total e com isso todo o fornecimento de medicação nas unidades hospitalares e nos postos de saúde ficou prejudicada. Com base no caso hipotético e fundamentada nas regras constitucionais e consolidadas no Supremo Tribunal Federal, é certo afirmar que:',
    alternativas: [
      { id: 'A', texto: 'servidor público, de qualquer área, não pode fazer greve, mas pode se sindicalizar.' },
      { id: 'B', texto: 'servidor público, de qualquer área, não pode se sindicalizar e nem deflagrar greve.' },
      { id: 'C', texto: 'servidor público pode fazer greve, desde que não seja total, de modo a se garantir a continuidade na prestação do serviço público.' },
      { id: 'D', texto: 'assim como no setor privado, servidor público pode fazer greve, inclusive total, só não podendo investir predatoriamente contra o patrimônio do seu empregador, como por exemplo, nos casos de sabotagem.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'O STF (RE 693.456, 2016) reconhece o direito de greve dos servidores públicos, mas com limitações: em serviços essenciais, deve ser garantida a continuidade (greve não pode ser total).',
      incorretas: {
        A: 'O STF reconhece o direito de greve ao servidor.',
        B: 'Servidor pode se sindicalizar (art. 37, VI) e fazer greve (STF).',
        D: 'A greve total em serviço essencial (saúde) é ilícita — deve garantir continuidade.'
      },
      conceitoCobrado: 'Direito de greve do servidor público (STF, RE 693.456).',
      pegadinha: 'Achar que a greve do servidor pode ser total em serviço essencial.',
      comoApareceEmConcurso: 'Cobrança do entendimento do STF sobre greve de servidor.'
    },
    tags: ['greve', 'servidor público', 'STF']
  },
  {
    id: 'Q-REAL-DC-0410',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — finalidades',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Um grupo de analistas estudava o impacto dos direitos sociais sobre políticas públicas municipais. Para exercitar o conteúdo, o instrutor propôs associação entre direitos previstos na Constituição e suas características essenciais. Coluna I: Direitos sociais — 1. Educação; 2. Saúde; 3. Moradia. Coluna II: Características — (__) Direito de acesso universal às ações e serviços; (__) Direito destinado ao pleno desenvolvimento da pessoa; (__) Direito relacionado a condições dignas de habitação. Marque a alternativa que apresenta a associação correta:',
    alternativas: [
      { id: 'A', texto: '1, 2, 3.' },
      { id: 'B', texto: '2, 1, 3.' },
      { id: 'C', texto: '2, 3, 1.' },
      { id: 'D', texto: '1, 3, 2.' },
      { id: 'E', texto: '3, 1, 2.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Saúde = acesso universal (art. 196); Educação = pleno desenvolvimento da pessoa (art. 205); Moradia = condições dignas de habitação.',
      incorretas: {
        A: 'Inverte as duas primeiras.',
        C: 'Inverte a segunda com a terceira.',
        D: 'Inverte a primeira com a segunda.',
        E: 'Inverte a primeira com a terceira.'
      },
      conceitoCobrado: 'Finalidades dos direitos sociais.',
      pegadinha: 'Trocar as características entre os direitos.',
      comoApareceEmConcurso: 'Questão de associação.'
    },
    tags: ['educação', 'saúde', 'moradia']
  },
  {
    id: 'Q-REAL-DC-0411',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais e socioeducação',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Os Direitos Sociais, elencados no Artigo 6º da Constituição da República Federativa do Brasil de 1988 (CRFB/88), são normas que exigem prestações positivas do Estado. No contexto do adolescente em cumprimento de medida socioeducativa, esses direitos são fundamentais. Sobre os Direitos Sociais, analise as afirmativas a seguir: I. A educação, a saúde e o trabalho são reconhecidos como direitos sociais. II. A profissionalização, assegurada no âmbito do Sistema Nacional de Atendimento Socioeducativo (SINASE), é uma concretização do direito social à educação e ao trabalho. III. O direito à moradia, previsto no Art. 6º, justifica que os quartos nas unidades socioeducativas tenham condições de habitabilidade e dignidade. Está correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I apenas.' },
      { id: 'B', texto: 'II e III apenas.' },
      { id: 'C', texto: 'I e II apenas.' },
      { id: 'D', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'I é verdadeira (art. 6º); II é verdadeira (profissionalização concretiza educação + trabalho); III é verdadeira (moradia → habitabilidade digna).',
      incorretas: {
        A: 'II e III também estão corretas.',
        B: 'I também está correta.',
        C: 'III também está correta.'
      },
      conceitoCobrado: 'Direitos sociais aplicados ao SINASE.',
      pegadinha: 'Excluir a moradia do contexto socioeducativo.',
      comoApareceEmConcurso: 'Aplicação prática dos direitos sociais.'
    },
    tags: ['SINASE', 'direitos sociais']
  },
  {
    id: 'Q-REAL-DC-0412',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Acerca das disposições inerentes aos direitos sociais, conforme o Art. 6º da CF/88, é correto afirmar que eles:',
    alternativas: [
      { id: 'A', texto: 'compreendem a liberdade de expressão e o direito de greve.' },
      { id: 'B', texto: 'priorizam a educação, saúde e segurança.' },
      { id: 'C', texto: 'incluem a moradia, o lazer e a proteção à maternidade e à infância.' },
      { id: 'D', texto: 'garantem o direito social homogêneo acima do individual e do coletivo.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Moradia, lazer e proteção à maternidade e à infância estão expressos no art. 6º.',
      incorretas: {
        A: 'Liberdade de expressão é direito individual (art. 5º, IX); greve é direito social do art. 9º, mas não está no rol do art. 6º.',
        B: 'Não há hierarquia/prioridade entre os direitos sociais do art. 6º.',
        D: 'Não existe "direito social homogêneo acima do individual e do coletivo" — os direitos são harmônicos.'
      },
      conceitoCobrado: 'Rol do art. 6º e ausência de hierarquia.',
      pegadinha: 'Inventar prioridade entre direitos sociais.',
      comoApareceEmConcurso: 'Cobrança direta do rol.'
    },
    tags: ['art. 6º', 'moradia', 'lazer']
  },
  {
    id: 'Q-REAL-DC-0413',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Somente direitos sociais',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Considerando as disposições da Constituição Federal, assinale a alternativa que apresenta SOMENTE direitos sociais.',
    alternativas: [
      { id: 'A', texto: 'Saúde, alimentação, liberdade e igualdade.' },
      { id: 'B', texto: 'Liberdade, vida, lazer e transporte.' },
      { id: 'C', texto: 'Propriedade, proteção à maternidade, igualdade e lazer.' },
      { id: 'D', texto: 'Lazer, educação, proteção à maternidade e à infância e alimentação.' },
      { id: 'E', texto: 'Vida, transporte, previdência social, liberdade, igualdade e moradia.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Lazer, educação, proteção à maternidade e à infância e alimentação estão todos no art. 6º.',
      incorretas: {
        A: 'Liberdade e igualdade são direitos individuais (art. 5º).',
        B: 'Liberdade e vida são direitos individuais.',
        C: 'Propriedade e igualdade são direitos individuais.',
        E: 'Vida, liberdade e igualdade são direitos individuais.'
      },
      conceitoCobrado: 'Distinção entre direitos sociais e individuais.',
      pegadinha: 'Misturar direitos individuais (art. 5º) com sociais (art. 6º).',
      comoApareceEmConcurso: 'Clássica de identificação.'
    },
    tags: ['art. 6º', 'direitos individuais']
  },
  {
    id: 'Q-REAL-DC-0414',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica familiar',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Pedro se encontra em situação de vulnerabilidade social e faz jus a determinado valor assegurado pelo Poder Público em programa de transferência de renda. Considerando os balizamentos estabelecidos pela Constituição da República em relação ao direito social a ser fruído por Pedro, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'se trata de programa temporário.' },
      { id: 'B', texto: 'o programa apresenta contornos previdenciários, tendo caráter contributivo.' },
      { id: 'C', texto: 'a renda básica recebida por Pedro é compreendida na perspectiva individual, não familiar.' },
      { id: 'D', texto: 'as normas e os requisitos de acesso são determinados em lei, não decorrendo diretamente da ordem constitucional.' },
      { id: 'E', texto: 'não deve ser observada a legislação fiscal e orçamentária, pois o valor recebido está relacionado à dignidade humana.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'Art. 6º, parágrafo único: "cujas normas e requisitos de acesso serão determinados em lei" — é norma de eficácia limitada.',
      incorretas: {
        A: 'O programa é PERMANENTE (art. 6º, parágrafo único).',
        B: 'Não é previdenciário nem contributivo — é assistencial.',
        C: 'A renda é FAMILIAR, não individual.',
        E: 'A própria CF determina a observância da legislação fiscal e orçamentária.'
      },
      conceitoCobrado: 'Renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Trocar "familiar" por "individual" e "permanente" por "temporário".',
      comoApareceEmConcurso: 'Cobrança literal do parágrafo único do art. 6º.'
    },
    tags: ['renda básica', 'art. 6º, parágrafo único']
  },
  {
    id: 'Q-REAL-DC-0415',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'São direitos sociais previstos no art. 6º da Constituição Federal: I. Alimentação. II. Trabalho. III. Previdência social. IV. Proteção à maternidade e à infância. Quais estão corretos?',
    alternativas: [
      { id: 'A', texto: 'Apenas I e II.' },
      { id: 'B', texto: 'Apenas I e III.' },
      { id: 'C', texto: 'Apenas II e IV.' },
      { id: 'D', texto: 'Apenas I, III e IV.' },
      { id: 'E', texto: 'I, II, III e IV.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Todos os quatro estão expressos no art. 6º.',
      incorretas: {
        A: 'III e IV também estão no art. 6º.',
        B: 'II e IV também estão no art. 6º.',
        C: 'I e III também estão no art. 6º.',
        D: 'II também está no art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Excluir algum item do rol.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º']
  },
  {
    id: 'Q-REAL-DC-0416',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988, em seu artigo 8º, prevê que é livre a associação profissional ou sindical. Sobre o tema, analise as assertivas abaixo: I. A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical. II. É facultativa a participação dos sindicatos nas negociações coletivas de trabalho. III. O aposentado filiado tem direito a votar, porém não pode ser votado nas organizações sindicais. IV. Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato. Quais estão corretas?',
    alternativas: [
      { id: 'A', texto: 'Apenas I.' },
      { id: 'B', texto: 'Apenas I e II.' },
      { id: 'C', texto: 'Apenas I e IV.' },
      { id: 'D', texto: 'Apenas II e III.' },
      { id: 'E', texto: 'Apenas III e IV.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I (art. 8º, I) e IV (art. 8º, V) estão corretas.',
      incorretas: {
        A: 'IV também está correta.',
        B: 'II é falsa (participação é OBRIGATÓRIA — art. 8º, VI).',
        D: 'II e III são falsas.',
        E: 'III é falsa (aposentado pode votar E ser votado — art. 8º, VII).'
      },
      conceitoCobrado: 'Art. 8º — incisos I, V, VI e VII.',
      pegadinha: 'Trocar "obrigatória" por "facultativa" (II) e "votar e ser votado" por "só votar" (III).',
      comoApareceEmConcurso: 'Cobrança da literalidade do art. 8º.'
    },
    tags: ['art. 8º', 'sindicalização']
  },
  {
    id: 'Q-REAL-DC-0417',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direito social — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Durante uma palestra para novos servidores da Câmara, Marcelo, Técnico Legislativo, explica que os direitos sociais são garantias previstas na Constituição. Qual dos direitos abaixo é considerado um direito social?',
    alternativas: [
      { id: 'A', texto: 'Direito à segurança pública.' },
      { id: 'B', texto: 'Direito à vida.' },
      { id: 'C', texto: 'Direito à educação.' },
      { id: 'D', texto: 'Direito à propriedade.' },
      { id: 'E', texto: 'Direito à liberdade de expressão.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Educação está expressa no art. 6º.',
      incorretas: {
        A: 'Segurança pública é dever do Estado (art. 144), não direito social do art. 6º.',
        B: 'Vida é direito individual (art. 5º, caput).',
        D: 'Propriedade é direito individual (art. 5º, XXII).',
        E: 'Liberdade de expressão é direito individual (art. 5º, IX).'
      },
      conceitoCobrado: 'Identificação de direito social.',
      pegadinha: 'Confundir "segurança" (social, art. 6º) com "segurança pública" (art. 144).',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['art. 6º', 'educação']
  },
  {
    id: 'Q-REAL-DC-0418',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical — V/F',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A associação sindical refere-se à formação de grupos de trabalhadores que se unem em uma entidade comum para representar e defender seus interesses laborais, econômicos e sociais. Nesse contexto, analise as afirmativas abaixo e indique "V" para verdadeiro e "F" para falso. (__) A lei poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical. (__) Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato. (__) É permitida a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato.',
    alternativas: [
      { id: 'A', texto: 'V, F, V.' },
      { id: 'B', texto: 'F, V, F.' },
      { id: 'C', texto: 'F, F, V.' },
      { id: 'D', texto: 'V, V, F.' },
      { id: 'E', texto: 'F, F, F.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'F (a lei NÃO poderá exigir autorização — art. 8º, I), V (art. 8º, V), F (é VEDADA a dispensa, não permitida — art. 8º, VIII).',
      incorretas: {
        A: 'A primeira é falsa; a terceira é falsa.',
        C: 'A terceira é falsa.',
        D: 'A primeira e a terceira são falsas.',
        E: 'A segunda é verdadeira.'
      },
      conceitoCobrado: 'Art. 8º, I, V e VIII.',
      pegadinha: 'Trocar "não poderá" por "poderá" (I) e "vedada" por "permitida" (III).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'estabilidade sindical']
  },
  {
    id: 'Q-REAL-DC-0419',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Rol do art. 6º',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Avalie se os direitos sociais, na forma da Constituição, incluem: I. o transporte; II. o lazer; III. a segurança; IV. a proteção à infância; V. a proteção ao meio ambiente. Estão corretos os itens:',
    alternativas: [
      { id: 'A', texto: 'I, II e III, apenas.' },
      { id: 'B', texto: 'III, IV e V, apenas.' },
      { id: 'C', texto: 'I, II, III e IV, apenas.' },
      { id: 'D', texto: 'I, II, III e V, apenas.' },
      { id: 'E', texto: 'I, II, III, IV e V.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I (transporte — EC 90/2015), II (lazer), III (segurança) e IV (proteção à infância) estão no art. 6º. V (meio ambiente) NÃO está no rol de direitos sociais — é direito de todos (art. 225).',
      incorretas: {
        A: 'IV também está correta.',
        B: 'I e II também estão corretos.',
        D: 'V não é direito social do art. 6º.',
        E: 'V não é direito social do art. 6º.'
      },
      conceitoCobrado: 'Rol do art. 6º x meio ambiente (art. 225).',
      pegadinha: 'Incluir "proteção ao meio ambiente" no rol do art. 6º.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'meio ambiente']
  },
  {
    id: 'Q-REAL-DC-0420',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos individuais x sociais',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'Considerando o disposto na Constituição da República Federativa do Brasil de 1988, no tocante aos direitos e deveres individuais e coletivos e aos direitos sociais, leia os itens a seguir: I – Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que não frustrem outra reunião anteriormente convocada para o mesmo local, sendo apenas exigido prévio aviso à autoridade competente. II – No caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano. III – Para preservar a identidade da autoridade policial, o preso não tem direito à identificação dos responsáveis por sua prisão, entretanto, terá direito à identificação dos responsáveis pelo seu interrogatório policial. IV – Na forma do disposto na Constituição Federal de 1988, são direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, e a assistência aos desamparados. Assinale a alternativa correta:',
    alternativas: [
      { id: 'A', texto: 'Apenas os itens I e III estão corretos.' },
      { id: 'B', texto: 'Apenas o item III está incorreto.' },
      { id: 'C', texto: 'Apenas os itens I e II estão incorretos.' },
      { id: 'D', texto: 'Todos os itens estão corretos.' },
      { id: 'E', texto: 'Apenas os itens III e IV estão corretos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I (art. 5º, XVI), II (art. 5º, XXV) e IV (art. 6º) estão corretos. III está INCORRETO: o art. 5º, LXIV garante ao preso o direito à identificação dos responsáveis por sua prisão OU por seu interrogatório policial.',
      incorretas: {
        A: 'III está incorreto.',
        C: 'I e II estão corretos.',
        D: 'III está incorreto.',
        E: 'I e II também estão corretos.'
      },
      conceitoCobrado: 'Direitos individuais (art. 5º) e sociais (art. 6º).',
      pegadinha: 'Achar que o preso só tem direito à identificação no interrogatório.',
      comoApareceEmConcurso: 'Cobrança literal do art. 5º, LXIV.'
    },
    tags: ['art. 5º', 'art. 6º', 'preso']
  },
  {
    id: 'Q-REAL-DC-0421',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Os direitos sociais são garantias fundamentais de caráter prestacional, previstas na Constituição Federal, que buscam assegurar condições mínimas de dignidade e justiça social aos cidadãos, promovendo o bem-estar coletivo. Dada a sua importância, estão incluídos no rol dos Direitos e Garantias Fundamentais. Nesse sentido, com base nas disposições da Constituição Federal sobre a matéria, analise as alternativas e assinale a opção INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Nas empresas de mais de cinquenta empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'B', texto: 'Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária.' },
      { id: 'C', texto: 'É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.' },
      { id: 'D', texto: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA: o art. 11 exige mais de DUZENTOS empregados (não cinquenta).',
      incorretas: {
        B: 'Correta — art. 6º, parágrafo único.',
        C: 'Correta — art. 10.',
        D: 'Correta — art. 9º, caput.'
      },
      conceitoCobrado: 'Art. 11 (representante dos empregados).',
      pegadinha: 'Trocar 200 por 50.',
      comoApareceEmConcurso: 'Cobrança literal do art. 11.'
    },
    tags: ['art. 11', 'representante']
  },
  {
    id: 'Q-REAL-DC-0422',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Os Direitos Sociais previstos no Texto Fundamental da República são caracterizados como espécies do gênero garantias fundamentais, podendo citar-se, dentre eles, a prerrogativa à:',
    alternativas: [
      { id: 'A', texto: 'liberdade.' },
      { id: 'B', texto: 'igualdade.' },
      { id: 'C', texto: 'moradia.' },
      { id: 'D', texto: 'propriedade privada.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Moradia é direito social (art. 6º, EC 26/2000).',
      incorretas: {
        A: 'Liberdade é direito individual (art. 5º).',
        B: 'Igualdade é direito individual (art. 5º, caput).',
        D: 'Propriedade é direito individual (art. 5º, XXII).'
      },
      conceitoCobrado: 'Identificação de direito social.',
      pegadinha: 'Misturar direitos individuais e sociais.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['art. 6º', 'moradia']
  },
  {
    id: 'Q-REAL-DC-0423',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — identificação',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição da República Federativa do Brasil, são alguns dos direitos sociais, dentre outros:',
    alternativas: [
      { id: 'A', texto: 'a educação, a saúde e a alimentação.' },
      { id: 'B', texto: 'o trabalho, a moradia e a dignidade da pessoa humana.' },
      { id: 'C', texto: 'o lazer, a segurança e a intimidade.' },
      { id: 'D', texto: 'a proteção à maternidade e à infância, a assistência aos desamparados e o direito à herança.' },
      { id: 'E', texto: 'o transporte, a previdência social e a inviolabilidade do domicílio.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Educação, saúde e alimentação estão no art. 6º.',
      incorretas: {
        B: 'Dignidade da pessoa humana é FUNDAMENTO (art. 1º, III), não direito social.',
        C: 'Intimidade é direito individual (art. 5º, X).',
        D: 'Herança é direito individual (art. 5º, XXX).',
        E: 'Inviolabilidade do domicílio é direito individual (art. 5º, XI).'
      },
      conceitoCobrado: 'Distinção entre fundamentos, direitos individuais e sociais.',
      pegadinha: 'Misturar dignidade (fundamento) com direitos sociais.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'direitos individuais']
  },
  {
    id: 'Q-REAL-DC-0424',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Eficácia da norma — renda básica',
    dificuldade: 3,
    prioridade: 'alta',
    enunciado: 'De acordo com o Art. 6º, parágrafo único, da Constituição da República de 1988, todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei, observada a legislação fiscal e orçamentária. Do referido preceito obtém-se uma norma constitucional de eficácia:',
    alternativas: [
      { id: 'A', texto: 'plena.' },
      { id: 'B', texto: 'contida.' },
      { id: 'C', texto: 'limitada e de princípio institutivo.' },
      { id: 'D', texto: 'limitada e de princípio programático.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'A norma do art. 6º, parágrafo único, é de eficácia LIMITADA, pois depende de lei para produzir efeitos plenos, e de princípio PROGRAMÁTICO, pois traça diretriz a ser concretizada pelo Estado.',
      incorretas: {
        A: 'Não é plena — depende de regulamentação.',
        B: 'Não é contida — não há direito imediatamente exigível.',
        C: 'É programática (diretriz), não institutiva (cria órgão).'
      },
      conceitoCobrado: 'Classificação das normas constitucionais quanto à eficácia.',
      pegadinha: 'Confundir "programática" com "institutiva".',
      comoApareceEmConcurso: 'Cobrança da classificação de José Afonso da Silva.'
    },
    tags: ['eficácia limitada', 'renda básica']
  },
  {
    id: 'Q-REAL-DC-0425',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica familiar',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Acerca do direito à renda básica familiar estabelecido pela Constituição Federal, assinale a alternativa correta: I. É um direito de todo brasileiro. II. Trata-se de uma renda garantida pelo poder público em programas permanentes. III. Decretos Municipais devem estabelecer as normas e requisitos de acesso.',
    alternativas: [
      { id: 'A', texto: 'Apenas I está correto.' },
      { id: 'B', texto: 'Apenas II está correto.' },
      { id: 'C', texto: 'Apenas III está correto.' },
      { id: 'D', texto: 'Apenas I e II estão corretos.' },
      { id: 'E', texto: 'Apenas II e III estão corretos.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Apenas II está correto: o programa é permanente (art. 6º, parágrafo único). I é incorreto porque só alcança brasileiros em situação de vulnerabilidade social. III é incorreto porque as normas e requisitos são determinados em LEI, não por decreto municipal.',
      incorretas: {
        A: 'I é incompleto (só vulneráveis).',
        C: 'III é falso.',
        D: 'I é incompleto.',
        E: 'III é falso.'
      },
      conceitoCobrado: 'Renda básica familiar (art. 6º, parágrafo único).',
      pegadinha: 'Achar que é direito de "todo brasileiro" e que decreto pode regulamentar.',
      comoApareceEmConcurso: 'Cobrança literal do parágrafo único.'
    },
    tags: ['renda básica', 'art. 6º']
  },
  {
    id: 'Q-REAL-DC-0426',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade do sindicalizado',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 rege que o empregado sindicalizado:',
    alternativas: [
      { id: 'A', texto: 'está inibido de ser dispensado do emprego a partir do momento do registro de sua candidatura até um ano após o final do seu mandato.' },
      { id: 'B', texto: 'está inibido de ser dispensado do emprego a partir do momento de sua posse até um ano após o término do mandato.' },
      { id: 'C', texto: 'pode ser demitido por qualquer motivo, a partir do registro da sua candidatura, desde que possua mais de um ano de vínculo empregatício.' },
      { id: 'D', texto: 'pode ser demitido sem justa causa, a partir do momento de sua posse, ainda que o seu mandato possua mais de um ano de duração.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, VIII: a estabilidade sindical vai do REGISTRO DA CANDIDATURA até UM ANO após o final do mandato, salvo falta grave.',
      incorretas: {
        B: 'O marco inicial é o registro da candidatura, não a posse.',
        C: 'A dispensa é vedada no período de estabilidade.',
        D: 'A dispensa é vedada no período de estabilidade.'
      },
      conceitoCobrado: 'Estabilidade do empregado sindicalizado (art. 8º, VIII).',
      pegadinha: 'Trocar "registro da candidatura" por "posse".',
      comoApareceEmConcurso: 'Cobrança literal do art. 8º, VIII.'
    },
    tags: ['estabilidade sindical', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0427',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Texto do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'O capítulo II da Constituição Federal/88 trata sobre os direitos sociais e em seu Art. 6º descreve quais são estes direitos. Assinale a alternativa que representa os direitos sociais de acordo com o Art. 6º da CF/88.',
    alternativas: [
      { id: 'A', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho e a moradia.' },
      { id: 'B', texto: 'São direitos sociais a educação, a saúde, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, na forma desta Constituição.' },
      { id: 'C', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'E', texto: 'São direitos sociais a educação, a saúde, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, na forma desta Constituição.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D traz o rol COMPLETO do art. 6º (com alimentação, lazer, proteção à maternidade e à infância e assistência aos desamparados).',
      incorretas: {
        A: 'Faltam transporte, lazer, segurança, previdência, proteção à maternidade e à infância e assistência aos desamparados.',
        B: 'Faltam alimentação, proteção à maternidade e à infância e assistência aos desamparados.',
        C: 'Falta o lazer.',
        E: 'Falta a alimentação.'
      },
      conceitoCobrado: 'Texto integral do art. 6º.',
      pegadinha: 'Omitir um dos direitos do rol.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'rol completo']
  },
  {
    id: 'Q-REAL-DC-0428',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Competência concorrente e direitos trabalhistas',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Com base na Constituição Federal, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas. (__) Compete à União, aos Estados e ao Distrito Federal legislar concorrentemente sobre proteção à infância e à juventude. (__) A saúde é um direito social constitucionalmente previsto. (__) Piso salarial proporcional à extensão e à complexidade do trabalho é direito dos trabalhadores urbanos e rurais. A ordem correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V – V – V.' },
      { id: 'B', texto: 'V – F – F.' },
      { id: 'C', texto: 'V – F – V.' },
      { id: 'D', texto: 'F – V – V.' },
      { id: 'E', texto: 'F – F – F.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'V (art. 24, XV), V (art. 6º), V (art. 7º, V).',
      incorretas: {
        B: 'A segunda e a terceira são verdadeiras.',
        C: 'A terceira é verdadeira.',
        D: 'A primeira é verdadeira.',
        E: 'Todas são verdadeiras.'
      },
      conceitoCobrado: 'Competência concorrente + direitos sociais + direitos trabalhistas.',
      pegadinha: 'Negar a competência concorrente sobre infância e juventude.',
      comoApareceEmConcurso: 'Questão interdisciplinar.'
    },
    tags: ['art. 24', 'art. 6º', 'art. 7º']
  },
  {
    id: 'Q-REAL-DC-0429',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação — suspensão x dissolução',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'A Associação Alpha, regularmente constituída e em funcionamento há mais de dois anos no estado de Rondônia, teve suas atividades suspensas por determinação do Poder Judiciário. Neste caso, para ter validade, a referida decisão judicial:',
    alternativas: [
      { id: 'A', texto: 'Depende de trânsito em julgado, assim como a dissolução compulsória da associação também depende do trânsito em julgado da decisão judicial.' },
      { id: 'B', texto: 'Independe de trânsito em julgado, ao contrário da dissolução compulsória da associação que depende do trânsito em julgado da decisão judicial.' },
      { id: 'C', texto: 'Depende de trânsito em julgado, ao contrário da dissolução compulsória da associação que independe do trânsito em julgado da decisão judicial.' },
      { id: 'D', texto: 'Independe de trânsito em julgado, assim como a dissolução compulsória da associação também independe do trânsito em julgado da decisão judicial.' },
      { id: 'E', texto: 'Depende de trânsito em julgado em primeira instância, ao contrário da dissolução compulsória da associação que depende do trânsito em julgado em segunda instância.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'Art. 5º, XIX: a SUSPENSÃO das atividades exige apenas decisão judicial (independe de trânsito em julgado); a DISSOLUÇÃO compulsória exige trânsito em julgado.',
      incorretas: {
        A: 'A suspensão independe de trânsito em julgado.',
        C: 'Inverte as regras.',
        D: 'A dissolução depende de trânsito em julgado.',
        E: 'Não há distinção por instância.'
      },
      conceitoCobrado: 'Suspensão x dissolução de associação (art. 5º, XIX).',
      pegadinha: 'Inverter os requisitos.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['associação', 'art. 5º, XIX']
  },
  {
    id: 'Q-REAL-DC-0430',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — direitos humanos',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Sobre os direitos e garantias fundamentais, a Constituição Federal de 1988: I. é considerada um avanço no que tange à defesa dos Direitos Humanos Universais. II. assegura a ampliação dos direitos sociais. III. define de maneira severa e punitiva os direitos e deveres do cidadão brasileiro. É correto o que se afirma em:',
    alternativas: [
      { id: 'A', texto: 'I, apenas.' },
      { id: 'B', texto: 'I e II, apenas.' },
      { id: 'C', texto: 'II e III, apenas.' },
      { id: 'D', texto: 'I, II e III.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I (a CF/88 é marco na proteção de direitos humanos) e II (ampliou direitos sociais) estão corretas. III é falsa: a CF/88 não define direitos de forma "severa e punitiva".',
      incorretas: {
        A: 'II também está correta.',
        C: 'I também está correta; III é falsa.',
        D: 'III é falsa.'
      },
      conceitoCobrado: 'Características da CF/88.',
      pegadinha: 'Achar que a CF/88 é "punitiva".',
      comoApareceEmConcurso: 'Questão conceitual.'
    },
    tags: ['CF/88', 'direitos humanos']
  },
  {
    id: 'Q-REAL-DC-0431',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Filiação sindical',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 consolidou a legislação anterior que autorizava a criação de sindicato de trabalhadores. A filiação sindical no Brasil é:',
    alternativas: [
      { id: 'A', texto: 'facultativa para todos os trabalhadores.' },
      { id: 'B', texto: 'facultativa para os aposentados.' },
      { id: 'C', texto: 'obrigatória para os aposentados.' },
      { id: 'D', texto: 'obrigatória para todos os trabalhadores.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 8º, V: "ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato" — a filiação é facultativa para TODOS.',
      incorretas: {
        B: 'É facultativa para todos, não só para aposentados.',
        C: 'Não há obrigatoriedade.',
        D: 'Não há obrigatoriedade.'
      },
      conceitoCobrado: 'Liberdade sindical (art. 8º, V).',
      pegadinha: 'Achar que a filiação é obrigatória.',
      comoApareceEmConcurso: 'Cobrança direta.'
    },
    tags: ['filiação sindical', 'art. 8º, V']
  },
  {
    id: 'Q-REAL-DC-0432',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — rol',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Conforme previsto na Constituição Federal, são direitos sociais: I. Educação, saúde e alimentação. II. Proteção à maternidade e à infância; assistência aos desempregados. III. Transporte, lazer, segurança e previdência social. Está(ão) CORRETO(S):',
    alternativas: [
      { id: 'A', texto: 'Somente o item I.' },
      { id: 'B', texto: 'Somente o item II.' },
      { id: 'C', texto: 'Somente os itens I e III.' },
      { id: 'D', texto: 'Todos os itens.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'I e III estão corretos. II é INCORRETO porque o art. 6º fala em "assistência aos DESAMPARADOS" (não "desempregados").',
      incorretas: {
        A: 'III também está correto.',
        B: 'II está incorreto.',
        D: 'II está incorreto.'
      },
      conceitoCobrado: 'Rol do art. 6º.',
      pegadinha: 'Trocar "desamparados" por "desempregados".',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'desamparados']
  },
  {
    id: 'Q-REAL-DC-0433',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 6º — alternativas',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal traz os direitos sociais em seu artigo 6º. Assim, assinale a assertiva correta:',
    alternativas: [
      { id: 'A', texto: 'A proteção à maternidade e a infância não são direitos sociais.' },
      { id: 'B', texto: 'Nas empresas de mais de cem empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'C', texto: 'Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar, garantida pelo poder público em programa permanente de transferência de renda, cujas normas e requisitos de acesso serão determinados em lei.' },
      { id: 'D', texto: 'O lazer não é considerado um direito social.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'C reproduz o art. 6º, parágrafo único.',
      incorretas: {
        A: 'Proteção à maternidade e à infância SÃO direitos sociais.',
        B: 'O art. 11 exige mais de DUZENTOS empregados (não cem).',
        D: 'Lazer É direito social.'
      },
      conceitoCobrado: 'Art. 6º e parágrafo único.',
      pegadinha: 'Trocar 200 por 100 (B).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'renda básica', 'art. 11']
  },
  {
    id: 'Q-REAL-DC-0434',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 8º — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Assinale a alternativa INCORRETA. Segundo o Art. 8º CF/88 — É livre a associação profissional ou sindical, observado o seguinte:',
    alternativas: [
      { id: 'A', texto: 'ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato.' },
      { id: 'B', texto: 'aposentado filiado tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'C', texto: 'é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'D', texto: 'ao sindicato não cabe a defesa dos direitos e interesses coletivos, mas somente os individuais da categoria, inclusive em questões judiciais ou administrativas.' },
      { id: 'E', texto: 'a lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, vedadas ao Poder Público a interferência e a intervenção na organização sindical.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D está INCORRETA: o art. 8º, III diz que ao sindicato cabe a defesa dos direitos e interesses COLETIVOS OU INDIVIDUAIS da categoria, inclusive em questões judiciais ou administrativas.',
      incorretas: {
        A: 'Correta — art. 8º, V.',
        B: 'Correta — art. 8º, VII.',
        C: 'Correta — art. 8º, VI.',
        E: 'Correta — art. 8º, I.'
      },
      conceitoCobrado: 'Art. 8º, III (defesa coletiva e individual).',
      pegadinha: 'Restringir a atuação do sindicato aos interesses individuais.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'defesa sindical']
  },
  {
    id: 'Q-REAL-DC-0435',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade do suplente',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Considere que Maurício é empregado sindicalizado da Empresa ABC e foi eleito como suplente para o cargo de representação sindical. De acordo com o disposto na Constituição Federal, é correto afirmar que Maurício:',
    alternativas: [
      { id: 'A', texto: 'apenas pôde se candidatar, pois já estava sindicalizado há pelo menos cinco anos.' },
      { id: 'B', texto: 'somente teria estabilidade caso tivesse sido eleito para o cargo de direção do sindicato.' },
      { id: 'C', texto: 'não pode ser dispensado até dois anos após o final do mandato.' },
      { id: 'D', texto: 'possui estabilidade no cargo, adquirida no momento em que foi eleito.' },
      { id: 'E', texto: 'não pode ser dispensado até um ano após o final do mandato, salvo se cometer falta grave.' }
    ],
    gabarito: 'E',
    explicacao: {
      correta: 'Art. 8º, VIII: a estabilidade alcança o eleito, AINDA QUE SUPLENTE, até UM ANO após o final do mandato, salvo falta grave.',
      incorretas: {
        A: 'Não há exigência de 5 anos de sindicalização.',
        B: 'A estabilidade alcança também o suplente.',
        C: 'O prazo é de UM ano, não dois.',
        D: 'A estabilidade é provisória, não definitiva.'
      },
      conceitoCobrado: 'Estabilidade do suplente (art. 8º, VIII).',
      pegadinha: 'Achar que só o titular tem estabilidade ou que o prazo é de 2 anos.',
      comoApareceEmConcurso: 'Cobrança literal do art. 8º, VIII.'
    },
    tags: ['estabilidade', 'suplente', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0436',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Irredutibilidade salarial',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em que pese os direitos sociais dos trabalhadores urbanos e rurais, definidos pela Constituição Federal de 1988, das assertivas apresentadas, é CORRETO afirmar que será garantido a irredutibilidade do salário, salvo por: I – Convenção coletiva. II – Acordo coletivo. III – Comprovado estado de necessidade do empregador.',
    alternativas: [
      { id: 'A', texto: 'I e II.' },
      { id: 'B', texto: 'II e III.' },
      { id: 'C', texto: 'I e III.' },
      { id: 'D', texto: 'II.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'Art. 7º, VI: "irredutibilidade do salário, salvo o disposto em convenção ou acordo coletivo".',
      incorretas: {
        B: 'III não autoriza redução.',
        C: 'III não autoriza redução.',
        D: 'I também autoriza.',
        E: 'III não autoriza redução.'
      },
      conceitoCobrado: 'Irredutibilidade salarial (art. 7º, VI).',
      pegadinha: 'Achar que estado de necessidade do empregador autoriza redução.',
      comoApareceEmConcurso: 'Cobrança literal do art. 7º, VI.'
    },
    tags: ['irredutibilidade', 'art. 7º, VI']
  },
  {
    id: 'Q-REAL-DC-0437',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Renda básica, seguro-desemprego e transporte',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Relativamente aos termos da Constituição Federal, analise as assertivas abaixo, assinalando V, se verdadeiras, ou F, se falsas. (__) Todo brasileiro em situação de vulnerabilidade social terá direito a uma renda básica familiar. (__) O seguro-desemprego é direito dos trabalhadores urbanos e rurais, devendo ser concedido nos casos em que o funcionário pede demissão. (__) O transporte é direito social previsto na Constituição. A ordem correta de preenchimento dos parênteses, de cima para baixo, é:',
    alternativas: [
      { id: 'A', texto: 'V – F – F.' },
      { id: 'B', texto: 'V – V – V.' },
      { id: 'C', texto: 'V – F – V.' },
      { id: 'D', texto: 'F – V – V.' },
      { id: 'E', texto: 'F – F – F.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'V (art. 6º, parágrafo único), F (seguro-desemprego é para dispensa SEM justa causa, não para pedido de demissão), V (transporte — EC 90/2015).',
      incorretas: {
        A: 'A terceira é verdadeira.',
        B: 'A segunda é falsa.',
        D: 'A primeira é verdadeira.',
        E: 'A primeira e a terceira são verdadeiras.'
      },
      conceitoCobrado: 'Renda básica + seguro-desemprego + transporte.',
      pegadinha: 'Achar que o seguro-desemprego cabe no pedido de demissão.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['renda básica', 'seguro-desemprego', 'transporte']
  },
  {
    id: 'Q-REAL-DC-0438',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'EC 53/2006',
    dificuldade: 2,
    prioridade: 'media',
    enunciado: 'Uma das alterações instituídas pela Emenda Constitucional nº 53/2006 foi:',
    alternativas: [
      { id: 'A', texto: 'Assistência gratuita aos filhos e dependentes desde o nascimento até 5 (cinco) anos de idade em creches e pré-escolas.' },
      { id: 'B', texto: 'Atendimento auxiliar de intérpretes da Língua Brasileira de Sinais – Libras – para alunos com deficiência.' },
      { id: 'C', texto: 'Exclusão do plano de carreira docente por tempo de trabalho, em detrimento do plano de mérito e excelência acadêmica.' },
      { id: 'D', texto: 'Ampliação do ensino em tempo integral para creches e pré-escolas, e também para o ensino médio nas escolas da União.' },
      { id: 'E', texto: 'Estabelecimento da autonomia dos estados e municípios em relação aos currículos e calendários escolares.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A EC 53/2006 deu nova redação ao art. 7º, XXV, assegurando assistência gratuita aos filhos e dependentes desde o nascimento até 5 anos em creches e pré-escolas.',
      incorretas: {
        B: 'Libras foi tratada pela Lei 10.436/2002 e pelo Decreto 5.626/2005, não pela EC 53/2006.',
        C: 'A EC 53/2006 não excluiu plano de carreira.',
        D: 'A EC 53/2006 não tratou de ensino integral.',
        E: 'A EC 53/2006 não tratou de currículos/calendários.'
      },
      conceitoCobrado: 'EC 53/2006 (art. 7º, XXV).',
      pegadinha: 'Confundir com outras normas educacionais.',
      comoApareceEmConcurso: 'Cobrança de emenda específica.'
    },
    tags: ['EC 53/2006', 'creches']
  },
  {
    id: 'Q-REAL-DC-0439',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Locomoção, greve e associação',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Nos termos da Constituição Federal, é correto afirmar que:',
    alternativas: [
      { id: 'A', texto: 'é livre a locomoção no território nacional em tempo de paz e de guerra, podendo qualquer pessoa, nos termos da lei, nele entrar, permanecer ou dele sair com seus bens.' },
      { id: 'B', texto: 'é assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' },
      { id: 'C', texto: 'as entidades associativas, independentemente de autorização, têm legitimidade para representar seus filiados judicial ou extrajudicialmente.' },
      { id: 'D', texto: 'a administração pública indireta dos Estados obedecerá aos princípios de legalidade, relatividade dos direitos, moralidade, publicidade e eficiência.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 9º, caput.',
      incorretas: {
        A: 'A locomoção é livre em tempo de PAZ (art. 5º, XV), não em tempo de guerra.',
        C: 'As entidades associativas precisam de AUTORIZAÇÃO expressa para representar filiados (art. 5º, XXI).',
        D: 'O princípio é da LEGALIDADE, não "relatividade dos direitos"; e o correto é "impessoalidade".'
      },
      conceitoCobrado: 'Direito de greve (art. 9º).',
      pegadinha: 'Trocar "paz" por "paz e guerra" (A) e "autorização" por "independentemente" (C).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['greve', 'art. 9º']
  },
  {
    id: 'Q-REAL-DC-0440',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Irredutibilidade e devido processo',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Com fundamento na Constituição Federal, analise as assertivas abaixo: I. É direito dos trabalhadores urbanos e rurais a irredutibilidade do salário, mesmo após acordo coletivo. II. Ninguém será processado nem sentenciado senão pela autoridade competente. III. É livre a associação profissional ou sindical. Quais estão corretas?',
    alternativas: [
      { id: 'A', texto: 'Apenas II.' },
      { id: 'B', texto: 'Apenas I e II.' },
      { id: 'C', texto: 'Apenas I e III.' },
      { id: 'D', texto: 'Apenas II e III.' },
      { id: 'E', texto: 'I, II e III.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'II (art. 5º, LIII) e III (art. 8º, caput) estão corretas. I é FALSA: o art. 7º, VI admite redução por convenção ou acordo coletivo.',
      incorretas: {
        A: 'III também está correta.',
        B: 'I é falsa.',
        C: 'I é falsa.',
        E: 'I é falsa.'
      },
      conceitoCobrado: 'Irredutibilidade (art. 7º, VI) + devido processo + liberdade sindical.',
      pegadinha: 'Achar que a irredutibilidade é absoluta.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['irredutibilidade', 'art. 5º, LIII', 'art. 8º']
  },
  {
    id: 'Q-REAL-DC-0441',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Liberdade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Relativamente à garantia da liberdade de associação profissional ou sindical prevista na Constituição da República de 1988, é correto afirmar:',
    alternativas: [
      { id: 'A', texto: 'Ninguém será obrigado a filiar-se ou a manter-se filiado a sindicato, salvo imposição de lei local.' },
      { id: 'B', texto: 'O aposentado filiado não tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'C', texto: 'Ao sindicato cabe a defesa judicial dos direitos e interesses coletivos da categoria, sendo vedada a atuação em defesas administrativas.' },
      { id: 'D', texto: 'A lei não poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D reproduz o art. 8º, I.',
      incorretas: {
        A: 'Não há exceção por lei local (art. 8º, V).',
        B: 'O aposentado TEM direito a votar e ser votado (art. 8º, VII).',
        C: 'O sindicato atua em defesas judiciais E administrativas (art. 8º, III).'
      },
      conceitoCobrado: 'Art. 8º, I, III, V e VII.',
      pegadinha: 'Inventar exceção por lei local (A).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º', 'liberdade sindical']
  },
  {
    id: 'Q-REAL-DC-0442',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais x fundamentos',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'De acordo com a Constituição Federal, são considerados direitos sociais: I. A educação. II. O pluralismo político. III. O lazer. Está(ão) CORRETO(S):',
    alternativas: [
      { id: 'A', texto: 'Somente o item I.' },
      { id: 'B', texto: 'Somente o item II.' },
      { id: 'C', texto: 'Somente os itens I e III.' },
      { id: 'D', texto: 'Todos os itens.' }
    ],
    gabarito: 'C',
    explicacao: {
      correta: 'Educação e lazer estão no art. 6º. II é falso: pluralismo político é FUNDAMENTO da República (art. 1º, V).',
      incorretas: {
        A: 'III também está correto.',
        B: 'II é falso.',
        D: 'II é falso.'
      },
      conceitoCobrado: 'Distinção entre fundamentos e direitos sociais.',
      pegadinha: 'Confundir pluralismo político (fundamento) com direito social.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 6º', 'pluralismo político']
  },
  {
    id: 'Q-REAL-DC-0443',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Associação sindical — unicidade',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em conformidade com a Constituição Federal, sobre a associação profissional ou sindical, assinalar a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'A lei poderá exigir autorização do Estado para a fundação de sindicato, ressalvado o registro no órgão competente, permitido ao Poder Público a interferência e a intervenção na organização sindical.' },
      { id: 'B', texto: 'É vedada a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' },
      { id: 'C', texto: 'Ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, exceto em questões judiciais ou administrativas.' },
      { id: 'D', texto: 'É facultativa a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'E', texto: 'O aposentado filiado tem direito a votar, mas não de ser votado, nas organizações sindicais.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 8º, II (unicidade sindical, base mínima municipal).',
      incorretas: {
        A: 'A lei NÃO pode exigir autorização e são VEDADAS interferência/intervenção.',
        C: 'O sindicato atua INCLUSIVE em questões judiciais e administrativas.',
        D: 'A participação é OBRIGATÓRIA.',
        E: 'O aposentado pode votar E ser votado.'
      },
      conceitoCobrado: 'Art. 8º, II (unicidade sindical).',
      pegadinha: 'Trocar "Município" por outra base.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['unicidade sindical', 'art. 8º, II']
  },
  {
    id: 'Q-REAL-DC-0444',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Texto do art. 6º',
    dificuldade: 1,
    prioridade: 'alta',
    enunciado: 'Conforme artigo 6º da CF/88, que trata sobre os Direitos Sociais, assinale a alternativa CORRETA.',
    alternativas: [
      { id: 'A', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e a infância, a assistência aos desamparados, na forma desta Constituição.' },
      { id: 'B', texto: 'São direitos sociais educação, a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, salvo transporte e lazer, uma vez que não recepcionados pela norma constitucional.' },
      { id: 'C', texto: 'São direitos sociais a educação a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, e a infância, apenas.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, a segurança, a previdência social, a proteção à maternidade e a infância, salvo a assistência aos desamparados uma vez não faz parte do rol de direitos sociais.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A traz o rol completo do art. 6º.',
      incorretas: {
        B: 'Transporte e lazer ESTÃO no rol (EC 90/2015 e texto original).',
        C: 'Faltam diversos direitos.',
        D: 'Assistência aos desamparados ESTÁ no rol.'
      },
      conceitoCobrado: 'Texto integral do art. 6º.',
      pegadinha: 'Excluir transporte/lazer ou assistência aos desamparados.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 6º', 'rol completo']
  },
  {
    id: 'Q-REAL-DC-0445',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos sociais — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A respeito da Constituição da República Federativa do Brasil, dos direitos sociais é INCORRETO afirmar:',
    alternativas: [
      { id: 'A', texto: 'É assegurado a todos o acesso à informação e resguardado o sigilo da fonte, quando necessário ao exercício profissional.' },
      { id: 'B', texto: 'É assegurado o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender.' },
      { id: 'C', texto: 'É assegurada a participação dos trabalhadores e empregadores nos colegiados dos órgãos públicos em que seus interesses profissionais ou previdenciários sejam objeto de discussão e deliberação.' },
      { id: 'D', texto: 'São direitos sociais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer, a segurança, a previdência social, a proteção à maternidade e à infância, a assistência aos desamparados, na forma desta Constituição.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA como afirmação sobre direitos sociais: o acesso à informação e o sigilo da fonte são direitos INDIVIDUAIS (art. 5º, XIV), não direitos sociais.',
      incorretas: {
        B: 'Correta — art. 9º.',
        C: 'Correta — art. 10.',
        D: 'Correta — art. 6º.'
      },
      conceitoCobrado: 'Distinção entre direitos individuais e sociais.',
      pegadinha: 'Apresentar direito individual como se fosse social.',
      comoApareceEmConcurso: 'Clássica.'
    },
    tags: ['art. 5º, XIV', 'art. 6º']
  },
  {
    id: 'Q-REAL-DC-0446',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Art. 8º — participação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'De acordo com o texto constitucional, é livre a associação profissional ou sindical, observado o seguinte:',
    alternativas: [
      { id: 'A', texto: 'Ao sindicato cabe a defesa dos direitos e interesses coletivos ou individuais da categoria, exceto em questões judiciais.' },
      { id: 'B', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'C', texto: 'O aposentado filiado não tem direito a votar e ser votado nas organizações sindicais.' },
      { id: 'D', texto: 'É garantida a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'B reproduz o art. 8º, VI.',
      incorretas: {
        A: 'O sindicato atua INCLUSIVE em questões judiciais.',
        C: 'O aposentado TEM direito a votar e ser votado.',
        D: 'É VEDADA a criação de mais de uma organização sindical na mesma base territorial.'
      },
      conceitoCobrado: 'Art. 8º, VI (participação obrigatória).',
      pegadinha: 'Inverter "obrigatória" por "facultativa".',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º, VI', 'negociação coletiva']
  },
  {
    id: 'Q-REAL-DC-0447',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Locomoção e exercício profissional',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'Analise as afirmativas a seguir: I. É livre, no Brasil, a locomoção no território nacional em tempo de paz, podendo qualquer pessoa, nos termos da lei e cumpridas as exigências fiscalizatórias aplicáveis, nele entrar, permanecer ou dele sair com seus bens, conforme previsto no artigo 2º, inciso XV, que trata de direitos fundamentais na Constituição Federal de 1988. II. No Brasil, é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei federal, estadual ou municipal estabelecer ou, ainda, obedecidas as qualificações mínimas determinadas pelo órgão representativo da classe, conforme previsto no artigo 10º, inciso XIII, que trata de direitos fundamentais na Constituição Federal de 1988. Marque a alternativa CORRETA:',
    alternativas: [
      { id: 'A', texto: 'As duas afirmativas são verdadeiras.' },
      { id: 'B', texto: 'A afirmativa I é verdadeira, e a II é falsa.' },
      { id: 'C', texto: 'A afirmativa II é verdadeira, e a I é falsa.' },
      { id: 'D', texto: 'As duas afirmativas são falsas.' }
    ],
    gabarito: 'B',
    explicacao: {
      correta: 'I é verdadeira (art. 5º, XV). II é FALSA: o art. 5º, XIII exige qualificações estabelecidas por LEI (federal), não por lei estadual/municipal nem por órgão de classe.',
      incorretas: {
        A: 'II é falsa.',
        C: 'I é verdadeira.',
        D: 'I é verdadeira.'
      },
      conceitoCobrado: 'Art. 5º, XIII e XV.',
      pegadinha: 'Ampliar a exigência de qualificação para lei estadual/municipal ou órgão de classe.',
      comoApareceEmConcurso: 'Cobrança literal com distratores.'
    },
    tags: ['art. 5º, XIII', 'art. 5º, XV']
  },
  {
    id: 'Q-REAL-DC-0448',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos trabalhistas',
    dificuldade: 3,
    prioridade: 'media',
    enunciado: 'A respeito dos direitos sociais previstos em capítulo próprio da Constituição Federal de 1988, assinale a alternativa correta.',
    alternativas: [
      { id: 'A', texto: 'O pagamento de salário-família em razão do dependente é aplicável a todo trabalhador que comprove a existência de, pelo menos, um filho em idade escolar.' },
      { id: 'B', texto: 'É recomendável que a remuneração do trabalho noturno não seja inferior ao trabalho diurno desenvolvido, sendo, no entanto, facultada ao empregador a decisão sobre a remuneração superior daquele.' },
      { id: 'C', texto: 'Além de outros direitos que visem a melhoria de sua condição social, ao trabalhador é garantido o direito ao gozo de férias anuais remuneradas com, pelo menos, metade a mais do que o salário normal.' },
      { id: 'D', texto: 'É direito do trabalhador urbano e rural a duração do trabalho não superior a oito horas diárias e 44 horas semanais, facultada a compensação de horários e a redução de jornada, mediante acordo com convenção coletiva de trabalho.' }
    ],
    gabarito: 'D',
    explicacao: {
      correta: 'D reproduz o art. 7º, XIII.',
      incorretas: {
        A: 'O salário-família é só para o trabalhador de BAIXA RENDA (art. 7º, XII).',
        B: 'A remuneração do trabalho noturno é SUPERIOR à do diurno (art. 7º, IX) — não é "recomendável", é direito.',
        C: 'As férias são com, pelo menos, UM TERÇO a mais (art. 7º, XVII), não metade.'
      },
      conceitoCobrado: 'Direitos dos trabalhadores (art. 7º).',
      pegadinha: 'Trocar "um terço" por "metade" (C) e "baixa renda" por "todo trabalhador" (A).',
      comoApareceEmConcurso: 'Cobrança de detalhes do art. 7º.'
    },
    tags: ['art. 7º', 'jornada']
  },
  {
    id: 'Q-REAL-DC-0449',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Filiação e negociação sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Joana, servidora ocupante de cargo de provimento efetivo no âmbito do Poder Judiciário de determinado Estado da Federação, foi comunicada pelo sindicato da categoria que seriam iniciadas as negociações coletivas de trabalho e era obrigatória a participação do sindicato. Por tal razão, era igualmente obrigatória a filiação de todos os servidores ao sindicato, de modo que a categoria não fosse sub-representada em seus interesses. A narrativa afigura-se:',
    alternativas: [
      { id: 'A', texto: 'incorreta em relação a Joana, pois a filiação é facultativa, e correta quanto ao sindicato, pois a sua participação é imposta pela Constituição.' },
      { id: 'B', texto: 'correta em relação a Joana, por força do princípio da solidariedade social, e incorreta quanto ao sindicato, por ferir o princípio da liberdade de gestão.' },
      { id: 'C', texto: 'correta em relação a Joana, já que a filiação dos servidores do Poder Judiciário é obrigatória, e incorreta quanto ao sindicato, que tem autonomia gerencial.' },
      { id: 'D', texto: 'incorreta em relação a Joana, pois os servidores do Poder Judiciário não podem filiar-se a sindicato, e correta quanto ao sindicato, desde que haja determinação judicial.' },
      { id: 'E', texto: 'incorreta em relação a Joana, que somente pode ser obrigada a exercer cargo de direção no sindicato, não a sindicalizar-se, e correta quanto ao sindicato, que defende a categoria.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A filiação é facultativa (art. 8º, V), mas a participação do sindicato nas negociações coletivas é obrigatória (art. 8º, VI).',
      incorretas: {
        B: 'A filiação não é obrigatória.',
        C: 'A filiação não é obrigatória.',
        D: 'Servidores podem filiar-se a sindicato.',
        E: 'Ninguém é obrigado a exercer cargo de direção sindical.'
      },
      conceitoCobrado: 'Art. 8º, V e VI.',
      pegadinha: 'Confundir participação obrigatória do SINDICATO com filiação obrigatória do SERVIDOR.',
      comoApareceEmConcurso: 'Cobrança combinada.'
    },
    tags: ['filiação', 'negociação coletiva']
  },
  {
    id: 'Q-REAL-DC-0450',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Direitos e garantias — INCORRETA',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'Em relação aos direitos e garantias fundamentais previstos na Constituição Federal, assinale a alternativa INCORRETA:',
    alternativas: [
      { id: 'A', texto: 'Nas empresas de mais de cem empregados, é assegurada a eleição de um representante destes com a finalidade exclusiva de promover-lhes o entendimento direto com os empregadores.' },
      { id: 'B', texto: 'É livre a manifestação do pensamento, sendo vedado o anonimato.' },
      { id: 'C', texto: 'A pena será cumprida em estabelecimentos distintos, de acordo com a natureza do delito, a idade e o sexo do apenado.' },
      { id: 'D', texto: 'É obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A está INCORRETA: o art. 11 exige mais de DUZENTOS empregados (não cem).',
      incorretas: {
        B: 'Correta — art. 5º, IV.',
        C: 'Correta — art. 5º, XLVIII.',
        D: 'Correta — art. 8º, VI.'
      },
      conceitoCobrado: 'Art. 11 (representante dos empregados).',
      pegadinha: 'Trocar 200 por 100.',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 11', 'representante']
  },
  {
    id: 'Q-REAL-DC-0451',
    tipo: 'REAL',
    area: 'CF',
    moduloId: 'DC-04',
    subtema: 'Estabilidade sindical',
    dificuldade: 2,
    prioridade: 'alta',
    enunciado: 'A Constituição Federal de 1988 estabelece em seu art. 8º a liberdade de associação profissional ou sindical e dispõe sobre o que deve ser observado para o exercício de tal direito. Assinale a única alternativa que corresponde corretamente a um destes direitos:',
    alternativas: [
      { id: 'A', texto: 'É vedada a dispensa do empregado sindicalizado a partir do registro da candidatura a cargo de direção ou representação sindical e, se eleito, ainda que suplente, até um ano após o final do mandato, salvo se cometer falta grave nos termos da lei.' },
      { id: 'B', texto: 'Não é obrigatória a participação dos sindicatos nas negociações coletivas de trabalho.' },
      { id: 'C', texto: 'Todos serão obrigados a filiar-se ou a manter-se filiado a sindicato.' },
      { id: 'D', texto: 'É permitida a criação de mais de uma organização sindical, em qualquer grau, representativa de categoria profissional ou econômica, na mesma base territorial, que será definida pelos trabalhadores ou empregadores interessados, não podendo ser inferior à área de um Município.' }
    ],
    gabarito: 'A',
    explicacao: {
      correta: 'A reproduz o art. 8º, VIII.',
      incorretas: {
        B: 'A participação É obrigatória (art. 8º, VI).',
        C: 'Ninguém é obrigado a filiar-se (art. 8º, V).',
        D: 'É VEDADA a criação de mais de uma organização sindical na mesma base (art. 8º, II).'
      },
      conceitoCobrado: 'Art. 8º, VIII (estabilidade sindical).',
      pegadinha: 'Trocar "vedada" por "permitida" (D).',
      comoApareceEmConcurso: 'Cobrança literal.'
    },
    tags: ['art. 8º, VIII', 'estabilidade']
  }   

];   
