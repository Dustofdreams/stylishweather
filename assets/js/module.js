'use strict';

export const weekDayNames = [
    "Неделя",
    "Понеделник",
    "Вторник",
    "Сряда",
    "Четвъртък",
    "Петък",
    "Събота"
];

export const monthNames = [
    "Януари",
    "Февруари",
    "Март",
    "Април",
    "Май",
    "Юни",
    "Юли",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември"
];


export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}


export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    return `${hours % 24 || 24}:${minutes}`;
}


export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = String(date.getUTCHours()).padStart(2, '0');

    return `${hours}:00`;
};




export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Добро",
        message: "Качеството на въздуха е идеално за повечето хора; насладете се на вашите обичайни дейности на открито."
    },
    2: {
        level: "Приемливо",
        message: "Качеството на въздуха е приемливо за повечето хора. Хора от чувствителни групи, обаче, могат да изпитат леки до умерени симптоми при дълготрайно излагане."
    },
    3: {
        level: "Лошо",
        message: "Въздухът достигна високо ниво на замърсяване и е нездравословен за чувствителни групи. Намалете времето, прекарвано на открито, ако чувствате симптоми като затруднения с дишането или раздразнение на гърлото."
    },
    4: {
        level: "Нездравословно",
        message: "Ефектите върху здравето могат да бъдат почувствани незабавно от чувствителни групи. Здрави хора могат да изпитат трудности при дишане и раздразнение на гърлото при продължително излагане. Ограничете дейности на открито."
    },
    5: {
        level: "Много нездравословно",
        message: "Ефектите върху здравето могат да бъдат почувствани незабавно от чувствителни групи и те трябва да избягват дейности на открито. Здрави хора вероятно ще изпитат трудности при дишане и раздразнение на гърлото; обмислете да останете на закрито и да промените плановете си за дейности на открито."
    }
}