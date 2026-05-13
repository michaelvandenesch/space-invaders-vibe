// Generische Pixel-Sprite-Hilfen.
// Sprites sind 2D-Arrays aus Strings:
//   "X" = gefülltes Pixel (mit der an drawSprite übergebenen Farbe),
//   "." = transparent,
//   weitere Buchstaben = Farb-Code aus COLOR_PALETTE.

export const COLOR_PALETTE = {
    'G': '#5DA130', // Creeper Hellgrün
    'D': '#466F2D', // Creeper Dunkelgrün
    'K': '#000000', // Schwarz
    'W': '#FFFFFF', // Weiß (Tux Bauch/Gesicht, Windows-Trenner-Hintergrund)
    'O': '#FFA500', // Tux Schnabel/Füße (Orange)
    // Windows-Logo Farben
    'R': '#F25022', // Windows Rot
    'N': '#7FBA00', // Windows Grün (anderer Code als 'G' wegen Creeper)
    'B': '#00A4EF', // Windows Blau
    'Y': '#FFB900'  // Windows Gelb
};

export function drawSprite(ctx, sprite, x, y, scale, color = '#ffffff') {
    for (let row = 0; row < sprite.length; row++) {
        const line = sprite[row];
        for (let col = 0; col < line.length; col++) {
            const ch = line[col];
            if (ch === '.') continue;
            let fill;
            if (ch === 'X') {
                fill = color;
            } else if (Object.prototype.hasOwnProperty.call(COLOR_PALETTE, ch)) {
                fill = COLOR_PALETTE[ch];
            } else {
                continue;
            }
            ctx.fillStyle = fill;
            ctx.fillRect(x + col * scale, y + row * scale, scale, scale);
        }
    }
}

export function spriteWidth(sprite)  { return sprite[0].length; }
export function spriteHeight(sprite) { return sprite.length; }

// Spieler-Cannon, 17 x 8 Pixel, klassischer Space-Invaders-Stil
export const PLAYER_SPRITE = [
    '........X........',
    '........X........',
    '.......XXX.......',
    '.......XXX.......',
    '.XXXXXXXXXXXXXXX.',
    'XXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXX'
];

// Spieler-Geschoss, 1 x 4 Pixel, weiß
export const BULLET_SPRITE = [
    'X',
    'X',
    'X',
    'X'
];

// Alien-Geschoss, 1 x 4 Pixel, weiß
export const ALIEN_BULLET_SPRITE = [
    'X',
    'X',
    'X',
    'X'
];

// Bunker, 22 x 16, klassische Bogenform mit Aussparung unten
export const BUNKER_SPRITE = [
    '....XXXXXXXXXXXXXX....',
    '...XXXXXXXXXXXXXXXX...',
    '..XXXXXXXXXXXXXXXXXX..',
    '.XXXXXXXXXXXXXXXXXXXX.',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXXXXXXXXXXXXXXXX',
    'XXXXXXXX......XXXXXXXX',
    'XXXXXXX........XXXXXXX',
    'XXXXXXX........XXXXXXX',
    'XXXXXX..........XXXXXX',
    'XXXXXX..........XXXXXX'
];

// Alien Reihe 1 (oben, Squid, 30 Punkte) - 9 x 7
export const ALIEN_SPRITE_1 = [
    '....X....',
    '...XXX...',
    '..XXXXX..',
    '.XX.X.XX.',
    'XXXXXXXXX',
    'X.X...X.X',
    '.X.....X.'
];

// Alien Reihe 2 (Mitte, Crab, 20 Punkte) - 11 x 8
export const ALIEN_SPRITE_2 = [
    '..X.....X..',
    '...X...X...',
    '..XXXXXXX..',
    '.XX.XXX.XX.',
    'XXXXXXXXXXX',
    'X.XXXXXXX.X',
    'X.X.....X.X',
    '...XX.XX...'
];

// Alien Reihe 3 (unten, Octopus, 10 Punkte) - 11 x 8
// Trailing '.' paden Zeilen mit ursprünglich 10 Spalten auf 11.
export const ALIEN_SPRITE_3 = [
    '..XXXXXX...',
    '.XXXXXXXX..',
    'XXXXXXXXXX.',
    'XX.XX.XX.XX',
    'XXXXXXXXXX.',
    '..X.X.X.X..',
    '.X.X.X.X.X.',
    'X.X.....X.X'
];

// Minecraft-Creeper, 16 x 16, mehrfarbig
//   G = Hellgrün (#5DA130), D = Dunkelgrün (#466F2D), K = Schwarz, . = transparent
export const CREEPER_SPRITE = [
    'GGGGGGGGGGGGGGGG',
    'GDDGGGGGGGGGGGGG',
    'GDDGGGGGGGGGDDGG',
    'GGGGGGGGGGGGDDGG',
    'GGKKKKGGGGKKKKGG',
    'GGKKKKGGGGKKKKGG',
    'GGKKKKGGGGKKKKGG',
    'GGKKKKGGGGKKKKGG',
    'GGGGGGGDDGGGGGGG',
    'GGGGGGGDDGGGGGGG',
    'GGGGGGKKKKGGGGGG',
    'GGGGGGKKKKGGGGGG',
    'GGGGGKKGGKKGGGGG',
    'GGGGGKKGGKKGGGGG',
    'DDGGGGGGGGGGGGGG',
    'DDGGGGGGGGGGGGGG'
];

// Minecraft-Skelett, 16 x 16
//   W = Weiß-Grau (#DDDDDD), K = Schwarz, . = transparent
export const SKELETON_SPRITE = [
    'WWWWWWWWWWWWWWWW',
    'WWWWWWWWWWWWWWWW',
    'WWWWWWWWWWWWWWWW',
    'WWWWWWWWWWWWWWWW',
    'WWKKKKWWWWKKKKWW',
    'WWKKKKWWWWKKKKWW',
    'WWKKKKWWWWKKKKWW',
    'WWKKKKWWWWKKKKWW',
    'WWWWWWWWWWWWWWWW',
    'WWWWWWWWWWWWWWWW',
    'WWWKKWKKWKKWKKWW',
    'WWWWKKWKKWKKWWWW',
    'WWWKKWKKWKKWKKWW',
    'WWWWKKWKKWKKWWWW',
    'WWWWWWWWWWWWWWWW',
    'WWWWWWWWWWWWWWWW'
];

// Minecraft-Zombie, 16 x 16
//   Z = Hautgrün (#4A6029), B = Verwesungs-Braun (#2E2210), K = Schwarz, . = transparent
export const ZOMBIE_SPRITE = [
    'ZZZZZZZZZZZZZZZZ',
    'ZBBZZZZZZZZZZBBZ',
    'ZBBZZZZZZZZZZBBZ',
    'ZZZZZZZZZZZZZZZZ',
    'ZZKKKKZZZZKKKKZZ',
    'ZZKKKKZZZZKKKKZZ',
    'ZZKKKKZZZZKKKKZZ',
    'ZZKKKKZZZZKKKKZZ',
    'ZZZZZZZZZZZZZZZZ',
    'ZZZBBZZZZZZZBBZZ',
    'ZZZZZZZZZZZZZZZZ',
    'ZZZZZKKKKKKZZZZZ',
    'ZZZZZKKKKKKZZZZZ',
    'ZZZZZZZZZZZZZZZZ',
    'ZZZZZZZZZZZZZZZZ',
    'ZZZZZZZZBBZZZZZZ'
];

// Tux, 16 x 16, klassischer Linux-Pinguin
//   K = Schwarz, W = Weiß, O = Orange (#FFA500), . = transparent
export const TUX_SPRITE = [
    '....KKKKKKKK....',
    '...KKKKKKKKKK...',
    '..KKKKKKKKKKKK..',
    '..KKWWWWWWWWKK..',
    '..KWWKKWWKKWWK..',
    '..KWWKKWWKKWWK..',
    '..KKWWWWWWWWKK..',
    '..KKKWWOOWWKKK..',
    '.KKKKWWOOWWKKKK.',
    'KKKKWWWWWWWWKKKK',
    'KKKWWWWWWWWWWKKK',
    'KKWWWWWWWWWWWWKK',
    'KKWWWWWWWWWWWWKK',
    'KKKWWWWWWWWWWKKK',
    'KKKKWWWWWWWWKKKK',
    'OOO..........OOO'
];

// Microsoft-Windows-Logo, 16 x 16
//   R = Rot (#F25022), N = Grün (#7FBA00), B = Blau (#00A4EF), Y = Gelb (#FFB900), . = transparent
export const WINDOWS_SPRITE = [
    '................',
    '.RRRRRR..NNNNNN.',
    '.RRRRRR..NNNNNN.',
    '.RRRRRR..NNNNNN.',
    '.RRRRRR..NNNNNN.',
    '.RRRRRR..NNNNNN.',
    '.RRRRRR..NNNNNN.',
    '................',
    '................',
    '.BBBBBB..YYYYYY.',
    '.BBBBBB..YYYYYY.',
    '.BBBBBB..YYYYYY.',
    '.BBBBBB..YYYYYY.',
    '.BBBBBB..YYYYYY.',
    '.BBBBBB..YYYYYY.',
    '................'
];
