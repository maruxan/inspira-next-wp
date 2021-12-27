export const formatDateString = (dateString) => {
  const d = new Date(dateString);
  return d.toLocaleDateString('es-ES');
};
