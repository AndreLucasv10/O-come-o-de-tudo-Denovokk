function livro(nome, ano, autor) {
  const nomeGrande = nome.toUpperCase();
  const anototal = 2050 - ano;
  const frase = nome + " por " + autor;

  const objeto = {
    nome: nomeGrande,
    ano: anototal,
    frase,
  };
  return objeto;
}

const objeto = livro("O Senhor dos aneis", 1954, "J. r. r. tolkien");

console.log(objeto.frase);
