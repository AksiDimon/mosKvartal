import styles from './BuySection.module.css';

export function IframeComponent() {
  return (
    <div className={styles['iframe-ipoteka-domclick']}>
      <iframe
        id="calculator-iframe"
        src="https://ipoteka.domclick.ru/calc-reg/calculator.html?excludedSubproductIds=7&excludedSubproductIds=33&excludedSubproductIds=34&excludeMaternalFund=true"
        frameBorder="no"
        scrolling="no"
        width="100%"
        height="1700"
      ></iframe>
    </div>
  );
}
