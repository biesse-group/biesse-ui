declare global {
  interface String {
    toSentenceCase: () => string;
  }
}
/**
 * Converte una stringa in sentence case: prima lettera maiuscola, il resto minuscolo.
 */
/* eslint-disable-next-line no-extend-native */
String.prototype.toSentenceCase = function (): string {
  if (!this) return this;
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
export {};
