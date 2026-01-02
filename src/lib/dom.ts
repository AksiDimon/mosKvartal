export const scrollToElement = (id: string) => {
  if (typeof document === 'undefined') return;
  const target =
    document.getElementById(id) ||
    document.querySelector<HTMLElement>(`[data-anchor="${id}"]`);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const printPage = () => {
  if (typeof window === 'undefined') return;
  window.print();
};
