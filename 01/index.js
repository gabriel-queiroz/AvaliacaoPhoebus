// função para converte datas no padrão pt-br: dd/MM/yyyy
const formatDateBR = userDate => {
  const date = new Date(userDate.split("/").reverse());
  return date
    .toISOString()
    .slice(0, 10)
    .replace(/[^0-9]+/g, "");
};
// função para converte datas no padrão exigido na questão 01: M/d/yyyy
const formatDate = userDate => {
  const array = userDate.split("/");
  const date = new Date([array[2], array[0], array[1]]);
  return date
    .toISOString()
    .slice(0, 10)
    .replace(/[^0-9]+/g, "");
};
