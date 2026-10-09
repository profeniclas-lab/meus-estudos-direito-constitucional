/* ============================================================
   DIAGNÓSTICOS — Módulos de prioridade ALTA
   Preenchidos neste lote: DC-02, DC-03, DC-04, DC-05
   Próximos lotes: DC-06, DC-07, DC-08, DC-09 (lote 2)
                   DC-11, DC-12, DC-13 (lote 3)
   ============================================================ */

window.DIAGNOSTICS_ALTA = {

  /* ============================================================
     DC-02 — Princípios Fundamentais
  ============================================================ */
  'DC-02': {
    id: 'D-DC-02',
    moduloId: 'DC-02',
    itens: [
      {
        id: 'D-DC-02-01',
        tipo: 'multipla_escolha',
        subtopico: 'Fundamentos, objetivos e princípios de relações internacionais',
        pergunta: 'Assinale a alternativa que apresenta apenas FUNDAMENTOS da República Federativa do Brasil (art. 1º da CF/88):',
        alternativas: [
          { id: 'A', texto: 'Soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político.' },
          { id: 'B', texto: 'Construir uma sociedade livre, justa e solidária; garantir o desenvolvimento nacional.' },
          { id: 'C', texto: 'Independência nacional, prevalência dos direitos humanos, autodeterminação dos povos.' },
          { id: 'D', texto: 'Erradicar a pobreza e a marginalização; reduzir as desigualdades sociais e regionais.' }
        ],
        gabarito: 'A',
        explicacao: 'A é o rol do art. 1º (fundamentos). B e D são OBJETIVOS fundamentais (art. 3º). C são PRINCÍPIOS das relações internacionais (art. 4º). A banca mistura as três categorias — cuidado.'
      },
      {
        id: 'D-DC-02-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Soberania x autonomia',
        pergunta: 'Os Municípios brasileiros são entes soberanos, podendo se separar da União e dos Estados a qualquer tempo.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. SOBERANIA é atributo exclusivo da República Federativa do Brasil (o todo). Municípios (e União, Estados e DF) têm AUTONOMIA (política, administrativa e financeira), não soberania. Além disso, a Federação é cláusula pétrea — não há direito de secessão.'
      },
      {
        id: 'D-DC-02-03',
        tipo: 'situacao',
        subtopico: 'Separação de Poderes',
        pergunta: 'Um Prefeito edita decreto determinando que o Poder Judiciário local não poderá mais julgar causas relacionadas a tributos municipais. Esse ato:',
        alternativas: [
          { id: 'A', texto: 'É válido, pois o Prefeito é chefe do Executivo municipal.' },
          { id: 'B', texto: 'Viola a separação de Poderes (art. 2º da CF/88), pois os Poderes são independentes e harmônicos entre si.' },
          { id: 'C', texto: 'É válido, desde que aprovado pela Câmara Municipal.' },
          { id: 'D', texto: 'É válido porque a competência tributária é do Município.' }
        ],
        gabarito: 'B',
        explicacao: 'A separação de Poderes (art. 2º) impede que um Poder interfira na função típica do outro. O Prefeito não pode restringir a atuação do Judiciário. Decreto que invade competência de outro Poder é inconstitucional.'
      },
      {
        id: 'D-DC-02-04',
        tipo: 'autoavaliacao',
        subtopico: 'Fundamentos, objetivos e princípios de relações internacionais',
        pergunta: 'Você consegue distinguir, sem consultar, as três listas do art. 1º (fundamentos), art. 3º (objetivos) e art. 4º (princípios de relações internacionais)?',
        resposta: 'FUNDAMENTOS (art. 1º): soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, pluralismo político. OBJETIVOS (art. 3º): construir sociedade livre/justa/solidária; desenvolvimento nacional; erradicar a pobreza e reduzir desigualdades; promover o bem de todos. RELAÇÕES INTERNACIONAIS (art. 4º): independência nacional, prevalência dos direitos humanos, autodeterminação, não intervenção, igualdade entre Estados, defesa da paz, solução pacífica dos conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos, asilo político.'
      }
    ]
  },

  /* ============================================================
     DC-03 — Direitos e Deveres Individuais e Coletivos
  ============================================================ */
  'DC-03': {
    id: 'D-DC-03',
    moduloId: 'DC-03',
    itens: [
      {
        id: 'D-DC-03-01',
        tipo: 'multipla_escolha',
        subtopico: 'Crimes inafiançáveis e imprescritíveis',
        pergunta: 'Sobre os crimes previstos no art. 5º da CF/88, assinale a alternativa correta:',
        alternativas: [
          { id: 'A', texto: 'Todos os crimes hediondos são imprescritíveis.' },
          { id: 'B', texto: 'O racismo é crime inafiançável e imprescritível; a tortura, o tráfico e o terrorismo são inafiançáveis, mas NÃO imprescritíveis.' },
          { id: 'C', texto: 'A ação de grupos armados contra o Estado Democrático é crime afiançável, mas imprescritível.' },
          { id: 'D', texto: 'A tortura é crime imprescritível, mas afiançável.' }
        ],
        gabarito: 'B',
        explicacao: 'O racismo é inafiançável e imprescritível (art. 5º, XLII). Tortura, tráfico e terrorismo (3T) são inafiançáveis e hediondos, mas NÃO imprescritíveis (art. 5º, XLIII). A ação de grupos armados é inafiançável e imprescritível (art. 5º, XLIV) — letra C erra ao dizer "afiançável". Nem todo crime hediondo é imprescritível — letra A erra.'
      },
      {
        id: 'D-DC-03-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Inviolabilidade do domicílio',
        pergunta: 'A casa é asilo inviolável do indivíduo, e nela ninguém pode penetrar sem consentimento do morador, SALVO em caso de flagrante delito, desastre, para prestar socorro ou, durante o dia, por determinação judicial.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'V',
        explicacao: 'Verdadeiro — é a literalidade do art. 5º, XI. Pegadinha clássica: a ordem judicial só pode ser cumprida DURANTE O DIA. À noite, só com consentimento, flagrante, desastre ou socorro.'
      },
      {
        id: 'D-DC-03-03',
        tipo: 'situacao',
        subtopico: 'Remédios constitucionais',
        pergunta: 'Um servidor público federal teve seu nome indevidamente negativado em cadastro de inadimplentes por um órgão público, em razão de erro administrativo. O instrumento adequado para corrigir a situação é:',
        alternativas: [
          { id: 'A', texto: 'Habeas corpus, porque há constrangimento ilegal.' },
          { id: 'B', texto: 'Habeas data, porque envolve informação pessoal em banco de dados público.' },
          { id: 'C', texto: 'Mandado de segurança, porque há direito líquido e certo não amparado por HC ou HD.' },
          { id: 'D', texto: 'Ação popular, porque envolve ato lesivo ao patrimônio público.' }
        ],
        gabarito: 'C',
        explicacao: 'O caso é de ILEGALIDADE (negativação indevida) que atinge direito líquido e certo — cabe MS. O HD serve para ACESSAR ou RETIFICAR dados em banco público, mas quando o problema é a ilegalidade da inscrição, o STF entende que o MS é o adequado. HC é para liberdade de locomoção; AP é para ato lesivo ao patrimônio público.'
      },
      {
        id: 'D-DC-03-04',
        tipo: 'autoavaliacao',
        subtopico: 'Remédios constitucionais',
        pergunta: 'Você sabe diferenciar, sem consultar, HC, HD, MS, MS coletivo, MI e AP — com seus respectivos cabimentos e legitimados?',
        resposta: 'HC: liberdade de locomoção, gratuito, qualquer pessoa. HD: acesso/retificação de dados da PRÓPRIA pessoa em banco público, não é gratuito. MS: direito líquido e certo não amparado por HC ou HD. MS coletivo: partido, sindicato, entidade de classe, associação (com 1 ano). MI: falta de norma regulamentadora. AP: qualquer CIDADÃO (eleitor) — anular ato lesivo ao patrimônio público, moralidade, meio ambiente ou patrimônio histórico-cultural; autor isento de custas e sucumbência, salvo má-fé.'
      }
    ]
  },

  /* ============================================================
     DC-04 — Direitos Sociais
  ============================================================ */
  'DC-04': {
    id: 'D-DC-04',
    moduloId: 'DC-04',
    itens: [
      {
        id: 'D-DC-04-01',
        tipo: 'multipla_escolha',
        subtopico: 'Rol do art. 6º',
        pergunta: 'São direitos sociais expressamente previstos no art. 6º da CF/88, EXCETO:',
        alternativas: [
          { id: 'A', texto: 'Educação, saúde e alimentação.' },
          { id: 'B', texto: 'Moradia e transporte.' },
          { id: 'C', texto: 'Propriedade e livre iniciativa.' },
          { id: 'D', texto: 'Previdência social, proteção à maternidade e assistência aos desamparados.' }
        ],
        gabarito: 'C',
        explicacao: 'Propriedade é direito individual (art. 5º, XXII) e livre iniciativa é FUNDAMENTO da República (art. 1º, IV) — não são direitos sociais. Todos os demais estão no art. 6º. Lembre-se: moradia (EC 26/2000) e transporte (EC 90/2015) foram incluídos posteriormente.'
      },
      {
        id: 'D-DC-04-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Direitos dos trabalhadores domésticos',
        pergunta: 'Os trabalhadores domésticos têm direito a TODOS os incisos do art. 7º da CF/88, sem exceção.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. Após a EC 72/2013, o parágrafo único do art. 7º garante aos domésticos apenas uma LISTA TAXATIVA de incisos — não todos. Urbanos e rurais é que têm todos os incisos.'
      },
      {
        id: 'D-DC-04-03',
        tipo: 'situacao',
        subtopico: 'Seguridade social',
        pergunta: 'Um cidadão sem contribuição prévia procura atendimento de saúde no SUS e, no mesmo dia, solicita benefício assistencial por não ter meios de prover sua subsistência. Sobre a seguridade social:',
        alternativas: [
          { id: 'A', texto: 'Saúde e assistência exigem contribuição prévia, como a previdência.' },
          { id: 'B', texto: 'A saúde é universal e a assistência é prestada a quem dela necessitar, independentemente de contribuição; a previdência, sim, exige contribuição.' },
          { id: 'C', texto: 'Saúde, previdência e assistência são gratuitas e não exigem contribuição.' },
          { id: 'D', texto: 'Somente a saúde é universal; previdência e assistência exigem contribuição.' }
        ],
        gabarito: 'B',
        explicacao: 'A SEGURIDADE (art. 194) abrange saúde, previdência e assistência. Saúde (art. 196) é universal e gratuita; assistência (art. 203) é para quem dela necessitar, sem contribuição; PREVIDÊNCIA (art. 201) é a única CONTRIBUTIVA — só quem contribui recebe.'
      },
      {
        id: 'D-DC-04-04',
        tipo: 'autoavaliacao',
        subtopico: 'Rol do art. 6º',
        pergunta: 'Você consegue recitar o rol completo dos direitos sociais do art. 6º da CF/88 (versão vigente, com as inclusões das EC 26/2000 e EC 90/2015)?',
        resposta: 'Educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.'
      }
    ]
  },

  /* ============================================================
     DC-05 — Nacionalidade
  ============================================================ */
  'DC-05': {
    id: 'D-DC-05',
    moduloId: 'DC-05',
    itens: [
      {
        id: 'D-DC-05-01',
        tipo: 'multipla_escolha',
        subtopico: 'Cargos privativos de brasileiro nato',
        pergunta: 'Assinale a alternativa que contém APENAS cargos privativos de brasileiro nato (art. 12, §3º, CF/88):',
        alternativas: [
          { id: 'A', texto: 'Presidente da República, Ministro do STF e Governador de Estado.' },
          { id: 'B', texto: 'Presidente da República, Presidente da Câmara dos Deputados, Ministro do STF e Ministro da Defesa.' },
          { id: 'C', texto: 'Senador, Prefeito e carreira diplomática.' },
          { id: 'D', texto: 'Ministro de Estado, Governador e oficial das Forças Armadas.' }
        ],
        gabarito: 'B',
        explicacao: 'Os 8 cargos privativos de nato são: Presidente e Vice; Presidente da Câmara e do Senado; Ministro do STF; carreira diplomática; oficial das Forças Armadas; Ministro da Defesa. Governador, Senador, Prefeito e Ministro de Estado (exceto Defesa) podem ser ocupados por brasileiros naturalizados.'
      },
      {
        id: 'D-DC-05-02',
        tipo: 'verdadeiro_falso',
        subtopico: 'Extradição de brasileiro naturalizado',
        pergunta: 'O brasileiro naturalizado nunca pode ser extraditado, em nenhuma hipótese, por ter se tornado brasileiro.',
        alternativas: [
          { id: 'V', texto: 'Verdadeiro' },
          { id: 'F', texto: 'Falso' }
        ],
        gabarito: 'F',
        explicacao: 'Falso. O brasileiro NATURALIZADO pode ser extraditado em duas hipóteses: (1) crime comum cometido ANTES da naturalização; (2) tráfico ilícito de drogas a QUALQUER tempo (antes ou depois). Quem nunca pode ser extraditado é o brasileiro NATO.'
      },
      {
        id: 'D-DC-05-03',
        tipo: 'situacao',
        subtopico: 'Brasileiro nato por solo',
        pergunta: 'Um casal de turistas italianos, em férias no Brasil, tem um filho em território brasileiro. Sobre a nacionalidade dessa criança:',
        alternativas: [
          { id: 'A', texto: 'Será brasileira nata, ainda que os pais estejam a serviço da Itália.' },
          { id: 'B', texto: 'Será brasileira nata, porque nasceu em território brasileiro, SALVO se os pais estiverem a serviço do país de origem (Itália).' },
          { id: 'C', texto: 'Será apenas italiana, porque os pais são estrangeiros.' },
          { id: 'D', texto: 'Será brasileira naturalizada, após residir no Brasil por 15 anos.' }
        ],
        gabarito: 'B',
        explicacao: 'Art. 12, I, "a": nascido no Brasil, filho de estrangeiros, é brasileiro NATO, SALVO se os pais estiverem A SERVIÇO DO PAÍS DELES. Turistas italianos NÃO estão a serviço da Itália — logo, a criança é brasileira nata. Se fossem diplomatas italianos em missão, aí não seria brasileira nata.'
      },
      {
        id: 'D-DC-05-04',
        tipo: 'autoavaliacao',
        subtopico: 'Quase-nacionalidade',
        pergunta: 'Você sabe explicar o que é a "quase-nacionalidade" (art. 12, §2º) e a quem ela beneficia?',
        resposta: 'É o instituto que confere ao PORTUGUÊS com residência permanente no Brasil, se houver reciprocidade em Portugal, os direitos inerentes ao BRASILEIRO NATURALIZADO. Não é nacionalidade brasileira plena — e não dá acesso a cargos privativos de nato.'
      }
    ]
  }

  /* ============================================================
     Próximo lote — adicionar em edição futura:
     'DC-06': { ... }
     'DC-07': { ... }
     'DC-08': { ... }
     'DC-09': { ... }
  ============================================================ */

};
