"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { photos } from "@/data/photos";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

export default function PhotosPage() {
    const { content, language } = useLanguage();

    const title = {
        en: "Travel Adventures",
        tr: "Seyahat Maceraları",
        ru: "Приключения в путешествиях",
        sv: "Reseäventyr"
    };

    const subtitle = {
        en: "Capturing moments from around the world.",
        tr: "Dünyanın dört bir yanından anlar.",
        ru: "Запечатленные моменты со всего мира.",
        sv: "Fångar ögonblick från hela världen."
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-6xl mx-auto pb-20 pt-10 px-4"
        >
            <div className="mb-12 space-y-4">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 drop-shadow-sm pb-2">
                    {title[language] || title.en}
                </h1>
                <p className="text-xl text-slate-600 font-light max-w-2xl">
                    {subtitle[language] || subtitle.en}
                </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {photos.map((photo) => (
                    <motion.div
                        key={photo.id}
                        variants={item}
                        className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                    >
                        <div className="relative w-full aspect-[3/4] sm:aspect-video lg:aspect-[3/4]">
                            <Image
                                src={photo.url}
                                alt={photo.caption[language as "en" | "tr" | "ru" | "sv"] || photo.caption.en}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.caption[language as "en" | "tr" | "ru" | "sv"] || photo.caption.en}
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-white/80 text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                    <span>{photo.location} · {photo.date}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
