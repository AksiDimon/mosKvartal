export const scrollToElement = (id: string) => {
  if (typeof document === 'undefined') return;
  const target =
    document.getElementById(id) || document.querySelector<HTMLElement>(`[data-anchor="${id}"]`);

  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const printPage = () => {
  if (typeof window === 'undefined') return;
  window.print();
};

export const trackYandexGoal = (goal: string) => {
  // TODO: подключить реальную отправку целей в ym
  if (typeof window !== 'undefined' && typeof (window as any).ym === 'function') {
    (window as any).ym(103507271, 'reachGoal', goal);
  }
};
