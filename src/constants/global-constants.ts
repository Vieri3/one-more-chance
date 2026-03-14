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
// в базе данных 
export const enum EDataCategoriesFromInventar{
    ALL = 'all',
    CLOTHES = 'clothes',
    WEAPON = 'weapon',
    MEDICAL = 'medical',
    EAT = 'eat',
    WATER = 'water'
}
// меню навигации инвентаря
export const navInventar = [
    { text: 'Всё', txt_key: EDataCategoriesFromInventar.ALL },
    { text: 'Оружие', txt_key: EDataCategoriesFromInventar.WEAPON },
    { text: 'Медицина', txt_key: EDataCategoriesFromInventar.MEDICAL },
    { text: 'Одежда', txt_key: EDataCategoriesFromInventar.CLOTHES },
    { text: 'Еда', txt_key: EDataCategoriesFromInventar.EAT } 
];
// массив страниц / вкладок в игре
export const MASS_PAGE = [
    { text: 'Склад', href: '/inventory' },
    { text: 'Ферма', href: '/farm' },
    { text: 'Группа', href: '/groop' },
    { text: 'Локация', href: '/location' },
    { text: 'Карта', href: '/map' },
];

export const enum EDataWarningMessage {
    FULL_INVENTORY = 'Ваш Инвентарь переполнен',
    STARVATION = 'Герой испытавает голодание',
    THIRST = 'Герой испытывает жажду'
}