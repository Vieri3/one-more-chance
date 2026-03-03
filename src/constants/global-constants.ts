export const dataDate = { date: 20, month: 1, year: 2026 };

export const dataWeather = { temperature: -2, precipitation: 'Снег' };

export const dataCounters = { countRandomEvents: 3, countPatrolling: 2 };
// енам, нужен для того чтобы при выборе проверять совпадения 
// добавлен в switch case и также добавлен в ттипизацию рандомных событий
export const enum EDataRandomEventsPosition {
    INVENTORY = 'inventory',
    PEOPLE = 'people',
    FARM = 'farm'
};
// меню навигации инвентаря
export const navInventar = [
    { text: "Всё" },
    { text: "Оружиие" },
    { text: "Медицина" },
    { text: "Одежда" } 
];
// массив страниц / вкладок в игре
export const MASS_PAGE = [
    { text: "Склад", href: "/inventory" },
    { text: "Ферма", href: "/farm" },
    { text: "Группа", href: "/groop" },
    { text: "Локация", href: "/location" },
    { text: "Карта", href: "/map" },
];