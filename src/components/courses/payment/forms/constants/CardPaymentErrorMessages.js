import ErrorCodes from './CardPaymentErrorCodes';

export default Object.freeze({
  [ErrorCodes.INCOMPLETE_NUMBER]: "A megadott kártyaszám hiányos!",
  [ErrorCodes.INVALID_NUMBER]: "A megadott kártyaszám helytelen! Kérjük ellenőrizze!",
  [ErrorCodes.INCOMPLETE_EXPIRY]: "A megadott lejárati dátum hiányos!",
  [ErrorCodes.INVALID_EXPIRY_MONTH]: "A megadott lejárati hónap helytelen!",
  [ErrorCodes.INVALID_EXPIRY_YEAR]: "A megadott lejárati év helytelen!",
  [ErrorCodes.INCOMPLETE_CVC]: "A megadott CVC (3 számjegyű kód) hiányos!",
  [ErrorCodes.INVALID_CVC]: "A megadott CVC helytelen",
  [ErrorCodes.PAYMENT_INTENT_AUTHENTICATION_FAILURE]: "Sikertelen hitelesítés! Kérjük próbálkozzon újra vagy válasszon másik fizetési módot!",
  [ErrorCodes.INSUFFICIENT_FUNDS]: "A kártyán nincs elég fedezet!",
  [ErrorCodes.GENERIC_DECLINE]: "A kártya el lett utasítva!",
  [ErrorCodes.FRAUDULENT]: "A kártya el lett utasítva!",
  [ErrorCodes.LOST_CARD]: "A kártya el lett utasítva!",
  [ErrorCodes.STOLEN_CARD]: "A kártya el lett utasítva!",
  [ErrorCodes.INCORRECT_CVC]: "A megadott biztonsági kód (CVC) helytelen!",
  [ErrorCodes.EXPIRED_CARD]: "Lejárt kártya!",
  [ErrorCodes.PROCESSING_ERROR]: "Hiba történt a kártya feldolgozása közben! Kérjük próbálkozzon újra később!",
});
