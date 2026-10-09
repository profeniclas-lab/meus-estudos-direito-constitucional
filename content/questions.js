/* Banco de questões — a preencher na Fase 4.
   Estrutura:
   {
     id: 'Q-DID-DC-NNNN' (ou 'Q-REAL-DC-NNNN'),
     tipo: 'DIDATICA' | 'REAL',
     area: 'CF' | 'CE',
     moduloId: 'DC-XX',
     subtema: '',
     dificuldade: 1 | 2 | 3,
     prioridade: 'alta' | 'media' | 'baixa',
     enunciado: '',
     alternativas: [{id:'A',texto:''},...],
     gabarito: 'B',
     explicacao: { correta:'', incorretas:{A:'',C:'',D:''}, conceitoCobrado:'', pegadinha:'', comoApareceEmConcurso:'' },
     tags: []
   }
   Para REAL: incluir banca, orgao, ano, prova, fonte.descricao.
*/
window.QUESTIONS = [];
