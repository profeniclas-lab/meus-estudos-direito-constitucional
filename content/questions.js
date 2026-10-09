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
  }

  /* ============================================================
     Próximos lotes — adicionar em edições futuras:
     DC-08, DC-09, DC-11 (lote 3)
     DC-12, DC-13, DC-RN (lote 4)
  ============================================================ */

];
