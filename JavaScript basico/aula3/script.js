function logCurso(nome, horas) {
  console.log(nome, horas, "horas");
  return nome;
}

logCurso("JavaScript", "40");
const retorno = logCurso("HTML", "20");
logCurso("HTML", "20");

console.log(retorno);
logCurso();
