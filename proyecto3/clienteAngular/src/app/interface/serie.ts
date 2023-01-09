interface Attributes {
    slug: string;
    title: string;
    summary: string;
    directors: string[];
    screenwriters: any[];
    producers: string[];
    cinematographers: string[];
    editors: string[];
    distributors: string[];
    music_composers: string[];
    release_date: string;
    running_time: string;
    budget: string;
    box_office: string;
    rating: string;
    order: number;
    trailer: string;
    poster: string;
    wiki: string;
}

interface Serie {
    id: string;
    type: string;
    title: string;
    img: string;
    url: string;
    attributes: Attributes;
}

export {Serie, Attributes}

