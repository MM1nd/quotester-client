export type CardData = {
    text: string
    reveal?: CardReveal
}

export type CardReveal = {
    year: number,
    author: Author,
    source: string
};

export type Author = {
    id: number,
    name: string,
    birth: number,
    death: number,
    url: string
};