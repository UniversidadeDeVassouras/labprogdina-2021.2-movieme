export const toLocale = (dateString) => {
  return new Date(dateString).toLocaleDateString('pt-BR');
}