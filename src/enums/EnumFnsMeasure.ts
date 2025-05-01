/**
 * https://pay.yandex.ru/docs/ru/custom/fns#measure-code
 * «мера количества предмета расчета» (тег 2108)
 */
export enum EnumFnsMeasure {
    /**
     * Штуки или единицы    
     */
    None = 0, 
    /**
     * Грамм
     */
    Gram = 10, 
    /**
     * Килограмм
     */
    Kilogram = 11, 
    /**
     * Тонна
     */
    Ton = 12, 
    /**
     * Сантиметр
     */
    Centimeter = 20, 
    /**
     * Дециметр
     */
    Decimeter = 21, 
    /**
     * Метр
     */
    Meter = 22, 
    /**
     * Квадратный сантиметр
     */
    SquareCentimeter = 30, 
    /**
     * Квадратный дециметр
     */
    SquareDecimeter = 31, 
    /**
     * Квадратный метр
     */
    SquareMeter = 32, 
    /**
     * Миллилитр
     */
    Milliliter = 40, 
    /**
     * Литр
     */
    Liter = 41, 
    /**
     * Кубический метр
     */
    CubicMeter = 42, 
    /**
     * Киловатт час
     */
    KilowattHour = 50, 
    /**
     * Гигакалория
     */
    Gigacalorie = 51, 
    /**
     * Сутки (день)
     */
    Day = 70, 
    /**
     * Час
     */
    Hour = 71, 
    /**
     * Минута
     */
    Minute = 72, 
    /**
     * Секунда
     */
    Second = 73, 
    /**
     * Килобайт
     */
    Kilobyte = 80, 
    /**
     * Мегабайт
     */
    Megabyte = 81, 
    /**
     * Гигабайт
     */
    Gigabyte = 82, 
    /**
     * Терабайт
     */
    Terabyte = 83, 
    /**
     * Применяется при использовании иных мер измерения
     */
    Other = 255, 
}
