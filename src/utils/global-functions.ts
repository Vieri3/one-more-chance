import { IGetWeather, IGetDate, IDataHeroesItem } from '@/types/global.ts'

// функция режима питания globalArray.WEATHER.temperature, getArraySelectedHeroes
export function getPowerModeFn(temperature: number, groop: IDataHeroesItem[]): IDataHeroesItem[] | never {
    function getGluttony(eat: number, water: number, groop: IDataHeroesItem[]): IDataHeroesItem[] {
        return groop.map((item) => {
            const new_satieti_food = item.satietiFood - eat;
            const new_satieti_water = item.satietiWater - water;
            if (new_satieti_food <= 0 || new_satieti_water <= 0) {
                return { ...item, satietiFood: new_satieti_food, satietiWater: new_satieti_water, status: "dead" };
            } else {
                return { ...item, satietiFood: new_satieti_food, satietiWater: new_satieti_water };
            }
        })
    }
    if (temperature >= -20 || temperature < -10) {
        return getGluttony(15, 1, groop);
    } else if (temperature >= -10 || temperature < 0) {
        return getGluttony(10, 5, groop);
    } else if (temperature >= 0 || temperature < 10) {
        return getGluttony(10, 10, groop);
    } else if (temperature >= 10 || temperature < 20) {
        return getGluttony(5, 15, groop);
    } else if (temperature >= 20 || temperature <= 30) {
        return getGluttony(5, 20, groop);
    }

    throw new Error("Ошибочка!!!")
}

// функция которая подменяет измененный массив с параметрами героев группы в основной массив всех героев глобального массива
export function getMergingArraysFn(arrayGlobalAllHeroes: IDataHeroesItem[], arraySelectedHeroes: IDataHeroesItem[]): IDataHeroesItem[] {
    const mapB = new Map();
    for (const el of arraySelectedHeroes) {
        if (el.selected) {
            mapB.set(el.id, el);
        }
    }
    // Заменяем элементы в глобальном массиве, если id присутствует в -> const маpB
    for (let i = 0; i < arrayGlobalAllHeroes.length; i++) {
        const elA = arrayGlobalAllHeroes[i];
        if (mapB.has(elA.id)) {
            arrayGlobalAllHeroes[i] = mapB.get(elA.id);
        }
    }
    return arrayGlobalAllHeroes
}

// функция погода принимает месяц года getDate.value.month
export function getWeatherFn(numMonth: number): IGetWeather {
    let weather = { temperature: 0, precipitation: '' };
    const temp = [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const prec = {
        spring: ["Слепой дождь", "Ливень", "Дождь с грозой", "Ясно", "Печет солнце", "Пасмурно", "Град", "Весенний снег", "Туман", "Ветренно", "Безветренно", "Штиль", "Иней"],
        summer: ["Проливной дождь", "Жара", "Зной", "Суховей", "Гроза", "Грибной дождь", "Туман", "Ветренно", "Безветренно", "Ясно", "Пасмурно", "Переменная облачность"],
        autumn: ["Моросящий дождь", "Бабье лето", "Туман", "Тучи и Дождь", "Ветер северный", "Ясно", "Град", "Иней"],
        winter: ["Туман", "Снег", "Завирюха", "Гололёд", "Очень холодно", "Снег с дождем", "Иней", "Дождь", "Ясно", "Солнечно"]
    }
    // случайно делает выборку температуры в диапазоне и случайно выбирает погодные условия в зависимости от времени года
    function addWeather(start_temp: number, end_temp: number, obj_prec: string[]): void {
        const randomPrecIdx = Math.floor(Math.random() * obj_prec.length);
        const randomPrec = obj_prec[randomPrecIdx];

        const massRangeTemp = temp.filter(t => t >= start_temp && t <= end_temp);
        const randomTempIdx = Math.floor(Math.random() * massRangeTemp.length);
        const randomTemp = massRangeTemp[randomTempIdx];

        weather.temperature = randomTemp;
        weather.precipitation = randomPrec;
    }
    switch (numMonth) {
        case 1:
            addWeather(-20, 4, prec.winter)
            break;
        case 2:
            addWeather(-20, 10, prec.winter)
            break;
        case 3:
            addWeather(-5, 10, prec.spring)
            break;
        case 4:
            addWeather(0, 15, prec.spring)
            break;
        case 5:
            addWeather(3, 20, prec.spring)
            break;
        case 6:
            addWeather(15, 25, prec.summer)
            break;
        case 7:
            addWeather(18, 30, prec.summer)
            break;
        case 8:
            addWeather(12, 28, prec.summer)
            break;
        case 9:
            addWeather(5, 20, prec.autumn)
            break;
        case 10:
            addWeather(0, 15, prec.autumn)
            break;
        case 11:
            addWeather(-6, 8, prec.autumn)
            break;
        case 12:
            addWeather(-10, 10, prec.winter)
            break;
        default:
            alert("всё.. приплыли");
    }
    return weather;
}

// функция календарь принимамет дату месяц год globalArray.DATE.date; globalArray.DATE.month; globalArray.DATE.year;
export function getCalendarFn(date: number, month: number, year: number): IGetDate {
    // высокосный год должен быть кратным 4 (в феврале 29 дней тогда)
    let MONTH_31 = [1, 3, 5, 7, 8, 10, 12];
    let MONTH_30 = [4, 6, 9, 11];
    let febr = year % 4 ? 28 : 29;

    if ((MONTH_30.includes(month) && date < 30) || (MONTH_31.includes(month) && date < 31)) {
        date++
    } else if ((MONTH_30.includes(month) && date == 30) || (MONTH_31.includes(month) && date == 31 && month != 12)) {
        date = 1;
        month++;
    } else if (date == 31 && month == 12) {
        date = 1;
        month = 1;
        year++;
    } else if ((month == 2) && (date < febr)) {
        date++
    } else if ((month == 2) && (date == febr)) {
        date = 1
        month++
    }
    return { date, month, year };
}
