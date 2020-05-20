import fs from 'fs';
import '../src/utils/dotenv';
import db from '../src/database/OracleConnection';

(async () => {
  const alunos = await db.exec(
    // `
    // select distinct nro_aluno, foto from aluno_foto
    // where nro_aluno in (
    // select distinct m.nro_aluno from matricula m
    // inner join curso c on c.cod_curso = m.cod_curso
    // where m.ano_sem_mat = 20201
    // and m.sit_aluno = 'N'
    // and m.matric_confirmada = 'S'
    // and c.cod_tipo_curso = 0
    // and c.ead = 0
    // )
    // `
    `
    select * from aluno_foto
    where nro_aluno in (
    527701
    )
    `
  );

  alunos.forEach(aluno => {
    fs.writeFile(`photos/${aluno.NRO_ALUNO}.png`, aluno.FOTO, 'binary', err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${aluno.NRO_ALUNO} file was saved!`);
      }
    });
  });
})();
