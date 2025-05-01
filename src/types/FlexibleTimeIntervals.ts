import { EnumFlexibleTimeIntervalType } from "../enums/EnumFlexibleTimeIntervalType.js";
import { FlexibleTimeIntervalsGridDescriptor } from "./FlexibleTimeIntervalsGridDescriptor.js";
import { TimeInterval } from "./TimeInterval.js";

export interface FlexibleTimeIntervals {
    /**
     * Если указан тип GRID, то необходимо задать поле grid. Если указан тип VALUES, то необходимо задать поле values
     */
    type: EnumFlexibleTimeIntervalType;
    
    /**
     * Кодирует интервалы в виде сетки. Используйте этот формат, если необходимо задать больше 20 интервалов доставки. Пример: {"start": "09:00", "end": "21:00", "duration": "00:20", "step": "01:00"} трактуется как набор интервалов: [{"start": "09:00", "end": "09:20"}, {"start": "10:00", "end": "10:20"}, ..., {"start": "20:00", "end": "20:20"}]
     */
    grid?: FlexibleTimeIntervalsGridDescriptor;
    
    /**
     * Задаёт список интервалов напрямую. Подходит для небольшого количества интервалов доставки. Рекомендуемое максимальная количество интервалов - 20    
     */
    
    values?: TimeInterval[];
}
