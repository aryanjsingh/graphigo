import React from 'react';

export default function VideoCarousel() {
    // Layer 1 - YouTube video data (scrolls left)
    const layer1Videos = [
        { id: 1, title: 'ThinkSchool x Boult', videoId: 'iH8IrBG4csM', url: 'https://youtu.be/iH8IrBG4csM' },
        { id: 2, title: 'Marwadi University', videoId: 'TQ4eXthvmDw', url: 'https://youtu.be/TQ4eXthvmDw' },
        { id: 3, title: 'Off Filter Show x Graphigo', videoId: 'E1bnDfy_pJI', url: 'https://youtu.be/E1bnDfy_pJI' },
        { id: 4, title: 'Avanti Nagral', videoId: '9uFoOYpNMqM', url: 'https://youtu.be/9uFoOYpNMqM' },
        { id: 5, title: 'Aakash Bhalla', videoId: 'LT4uTGozm4s', url: 'https://youtu.be/LT4uTGozm4s' },
        { id: 6, title: 'Jitu Podcast', videoId: 'Z4XQj2Iuz98', url: 'https://youtu.be/Z4XQj2Iuz98' },
        { id: 7, title: 'ThinkSchool x Manyavar', videoId: '-tbJl3rrN78', url: 'https://youtu.be/-tbJl3rrN78' },
    ];

    // Layer 2 - New YouTube videos (scrolls right)
    const layer2Videos = [
        { id: 1, title: 'Video 1', videoId: '8nHIyH-O4Ag', url: 'https://youtu.be/8nHIyH-O4Ag' },
        { id: 2, title: 'Video 2', videoId: '_8tIhVQ4C3M', url: 'https://youtu.be/_8tIhVQ4C3M' },
        { id: 3, title: 'Video 3', videoId: 'xwQkrMbcHoM', url: 'https://youtu.be/xwQkrMbcHoM' },
        { id: 4, title: 'Video 4', videoId: '52erXtIt3_0', url: 'https://youtu.be/52erXtIt3_0' },
        { id: 5, title: 'Video 5', videoId: 'vrKbeFaQaX0', url: 'https://youtu.be/vrKbeFaQaX0' },
    ];

    // Duplicate items for seamless infinite scroll
    const duplicatedLayer1 = [...layer1Videos, ...layer1Videos, ...layer1Videos];
    const duplicatedLayer2 = [...layer2Videos, ...layer2Videos, ...layer2Videos];

    return (
        <section className="relative w-full py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

            </div>

            {/* Layer 1 - Scrolls Left */}
            <div className="mb-6">
                <div className="flex animate-scroll-left w-max">
                    {duplicatedLayer1.map((item, index) => (
                        <div
                            key={`layer1-${index}`}
                            className="relative mx-3 group cursor-pointer"
                            style={{ width: '400px' }}
                        >
                            {/* 16:9 Aspect Ratio Container */}
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
                                {/* YouTube Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Layer 2 - Scrolls Right */}
            <div>
                <div className="flex animate-scroll-right w-max">
                    {duplicatedLayer2.map((item, index) => (
                        <div
                            key={`layer2-${index}`}
                            className="relative mx-3 group cursor-pointer"
                            style={{ width: '400px' }}
                        >
                            {/* 16:9 Aspect Ratio Container */}
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 block">
                                {/* YouTube Thumbnail */}
                                <img
                                    src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
