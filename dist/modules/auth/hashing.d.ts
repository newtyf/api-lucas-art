export declare class Hashing {
    encode(str: string): Promise<string>;
    compare(plain: string, encode: string): Promise<boolean>;
}
