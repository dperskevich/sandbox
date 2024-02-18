// we can use already existing classNames library: https://github.com/JedWatson/classnames

export type Mods = Record<string, boolean | string>;

// to practice entries and filter make this function manually
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        ...Object.entries(mods).filter(([_, value]) => value).map(([key]) => key),
        ...additional.filter(Boolean)
    ].join(' ');
}

// classNames("button", { hovered: true, red: false }, ["no-elevation"]) // outputs "button hovered no-elevation"