export interface Photo {
    id: number;
    url: string;
    location: string;
    date: string;
    caption: {
        en: string;
        tr: string;
        ru: string;
        sv: string;
    };
}

export const photos: Photo[] = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        location: "Yosemite National Park, USA",
        date: "2023",
        caption: {
            en: "Breathtaking valleys.",
            tr: "Nefes kesici vadiler.",
            ru: "Захватывающие дух долины.",
            sv: "Hisnande dalar."
        }
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&q=80",
        location: "Kananaskis, Canada",
        date: "2022",
        caption: {
            en: "Mountain reflections.",
            tr: "Dağ yansımaları.",
            ru: "Горные отражения.",
            sv: "Bergsreflektioner."
        }
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80",
        location: "Lauterbrunnen, Switzerland",
        date: "2023",
        caption: {
            en: "Green fields and waterfalls.",
            tr: "Yeşil alanlar ve şelaleler.",
            ru: "Зеленые поля и водопады.",
            sv: "Gröna fält och vattenfall."
        }
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
        location: "Banff, Canada",
        date: "2021",
        caption: {
            en: "Sunrise over the lake.",
            tr: "Göl üzerinde gün doğumu.",
            ru: "Восход солнца над озером.",
            sv: "Soluppgång över sjön."
        }
    }
];
