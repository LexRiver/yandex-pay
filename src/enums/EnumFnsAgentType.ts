// https://pay.yandex.ru/docs/ru/custom/fns#agent-type
// признак агента по предмету расчета» (тег 1222)
export enum EnumFnsAgentType{
    /** Банковский платежный агент */
    BankPaymentAgent = 1,
    /** Банковский платежный субагент */
    BankPaymentSubagent = 2,
    /** Платежный агент */
    PaymentAgent = 3,
    /** Платежный субагент */
    PaymentSubagent = 4,
    /** Поверенный */
    Trustee = 5,
    /** Комиссионер */
    Commissioner = 6,
    /** Иной агент */
    OtherAgent = 7,

}