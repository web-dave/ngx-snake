import { ScoreEntry, ScoreEntryLevel } from '@prisma/client';

export const ScoreEntryData: ScoreEntry[] = [
  {
    id: '2c83e156-dbe8-43ba-b79a-f75ee12555e5',
    date: new Date('12/28/2021'),
    level: ScoreEntryLevel.BEGINNER,
    score: 62,
    username: 'hkibble0',
  },
  {
    id: '04f59ceb-1c05-4326-85c2-23522766c784',
    date: new Date('12/18/2021'),
    level: ScoreEntryLevel.BEGINNER,
    score: 47,
    username: 'tscarrisbrick1',
  },
  {
    id: '2da3f7e0-1271-4adf-8361-5c383c72ee13',
    date: new Date('12/20/2021'),
    level: ScoreEntryLevel.BEGINNER,
    score: 16,
    username: 'mpfaffe2',
  },
  {
    id: '0c6d34ac-3a51-4705-943a-50e83d8e916b',
    date: new Date('12/19/2021'),
    level: ScoreEntryLevel.ADVANCED,
    score: 16,
    username: 'csymcoxe5',
  },
  {
    id: '46b9d65c-38c1-4155-90db-5be7035fc7b5',
    date: new Date('12/26/2021'),
    level: ScoreEntryLevel.ADVANCED,
    score: 33,
    username: 'dromaynes6',
  },
  {
    id: 'bb3797e8-c832-4a7e-9d67-9555b1780e18',
    date: new Date('12/27/2021'),
    level: ScoreEntryLevel.ADVANCED,
    score: 49,
    username: 'cwaszczykowski7',
  },
  {
    id: '1dc24154-afb2-4c07-9e21-997b0727495f',
    date: new Date('12/23/2021'),
    level: ScoreEntryLevel.EXPERT,
    score: 18,
    username: 'htyersg',
  },
  {
    id: '08a9d4c8-9383-4d25-8f96-c427bdf6a602',
    date: new Date('12/29/2021'),
    level: ScoreEntryLevel.EXPERT,
    score: 46,
    username: 'mphilippsonh',
  },
  {
    id: 'dd8cf8c8-1b7e-4146-a733-94c0ac9c72a1',
    date: new Date('12/24/2021'),
    level: ScoreEntryLevel.EXPERT,
    score: 59,
    username: 'lalsteadi',
  },
];
