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
// НАЗВАНИЕ ИГРОВЫХ ПРЕДМЕТОВ  = НАЗВАНИЕ КАРТИНКИ ИГРОВЫХ ПРЕДМЕТОВ
export const enum EDataItemsInTheGame {
    NOTHING = "",
    // CLOTHES
    RED_BLOUSE = 'clothes-body-red-blouse',
    REINDEER_SWEATER = 'clothes-body-reindeer-sweater',
    LEATHER_AND_FUR_BOOTS = 'clothes-foot-leather-and-fur-boots',
    CAP_WHITE_BLUE = 'clothes-head-cap-white-blue',
    BLUE_JEANS = 'clothes-legs-blue-jeans',
    SLATES_Y_G = 'clothes-foot-slates-yellow-green',
    CAP_NY = 'clothes-head-cap-NY',
    WINTER_BLUE = 'clothes-head-winter-blue',

    // EAT
    BACON = 'eat-bacon',
    //MEDICAL
    MEDICAL_BAG = 'medical-bag',
    // WEAPON
    MACHETE = 'weapon-machete',
    SHOTGUN = 'weapon-shotgun'

}

export const enum EDataWarningMessage {
    FULL_INVENTORY = "Ваш Инвентарь переполнен"
}