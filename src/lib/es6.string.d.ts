/// <reference path="lib.es6.core.d.ts" />

interface String {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<string>;

    /**
      * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point 
      * value of the UTF-16 encoded code point starting at the string element at position pos in 
      * the String resulting from converting this object to a String. 
      * If there is no element at that position, the result is undefined. 
      * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
      */
    codePointAt(pos: number): number;

    /**
      * Returns true if searchString appears as a substring of the result of converting this 
      * object to a String, at one or more positions that are 
      * greater than or equal to position; otherwise, returns false.
      * @param searchString search string 
      * @param position If position is undefined, 0 is assumed, so as to search all of the String.
      */
    includes(searchString: string, position?: number): boolean;

    /**
      * Returns true if the sequence of elements of searchString converted to a String is the 
      * same as the corresponding elements of this object (converted to a String) starting at 
      * endPosition – length(this). Otherwise returns false.
      */
    endsWith(searchString: string, endPosition?: number): boolean;

    /**
      * Returns the String value result of normalizing the string into the normalization form 
      * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
      * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
      * is "NFC"
      */
    normalize(form?: string): string;

    /**
      * Returns a String value that is made from count copies appended together. If count is 0, 
      * T is the empty String is returned.
      * @param count number of copies to append
      */
    repeat(count: number): string;

    /**
      * Returns true if the sequence of elements of searchString converted to a String is the 
      * same as the corresponding elements of this object (converted to a String) starting at 
      * position. Otherwise returns false.
      */
    startsWith(searchString: string, position?: number): boolean;

    // Overloads for objects with methods of well-known symbols.

    /**
      * Matches a string an object that supports being matched against, and returns an array containing the results of that search.
      * @param matcher An object that supports being matched against.
      */
    match(matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray;

    /**
      * Replaces text in a string, using an object that supports replacement within a string.
      * @param searchValue A object can search for and replace matches within a string.
      * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
      */
    replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;

    /**
      * Replaces text in a string, using an object that supports replacement within a string.
      * @param searchValue A object can search for and replace matches within a string.
      * @param replacer A function that returns the replacement text.
      */
    replace(searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param searcher An object which supports searching within a string.
      */
    search(searcher: { [Symbol.search](string: string): number; }): number;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param splitter An object that can split a string.
      * @param limit A value used to limit the number of elements returned in the array.
      */
    split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];

    /**
      * Returns an <a> HTML anchor element and sets the name attribute to the text value
      * @param name
      */
    anchor(name: string): string;

    /** Returns a <big> HTML element */
    big(): string;

    /** Returns a <blink> HTML element */
    blink(): string;

    /** Returns a <b> HTML element */
    bold(): string;

    /** Returns a <tt> HTML element */
    fixed(): string

    /** Returns a <font> HTML element and sets the color attribute value */
    fontcolor(color: string): string

    /** Returns a <font> HTML element and sets the size attribute value */
    fontsize(size: number): string;

    /** Returns a <font> HTML element and sets the size attribute value */
    fontsize(size: string): string;

    /** Returns an <i> HTML element */
    italics(): string;

    /** Returns an <a> HTML element and sets the href attribute value */
    link(url: string): string;

    /** Returns a <small> HTML element */
    small(): string;

    /** Returns a <strike> HTML element */
    strike(): string;

    /** Returns a <sub> HTML element */
    sub(): string;

    /** Returns a <sup> HTML element */
    sup(): string;
}

interface StringConstructor {
    /**
      * Return the String value whose elements are, in order, the elements in the List elements.
      * If length is 0, the empty string is returned.
      */
    fromCodePoint(...codePoints: number[]): string;

    /**
      * String.raw is intended for use as a tag function of a Tagged Template String. When called
      * as such the first argument will be a well formed template call site object and the rest 
      * parameter will contain the substitution values.
      * @param template A well-formed template string call site representation.
      * @param substitutions A set of substitution values.
      */
    raw(template: TemplateStringsArray, ...substitutions: any[]): string;
}