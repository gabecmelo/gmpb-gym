export const portugueseWords = [
  'costas', 'peito', 'antebraco',
  'panturrilha', 'ombros', 'ombro',
  'bracos', 'biceps', 'triceps',
  'coxas', 'coxa', 'pernas', 'perna'
]

export const translateWord = (word: string) => {
  switch (word) {
    case 'costas':
      return 'back'
    case 'aeróbico':
      return 'cardio'
    case 'peito':
      return 'chest'
    case 'antebraco':
      return 'lower arms'
    case 'panturrilha':
      return 'lower legs'
    case 'ombros':
      return 'shoulders'
    case 'ombro':
      return 'shoulders'
    case 'bracos':
      return 'upper arms'
    case 'biceps':
      return 'upper arms'
    case 'triceps':
      return 'upper arms'
    case 'coxas':
      return 'upper legs'
    case 'coxa':
      return 'upper legs'
    case 'pernas':
      return 'upper legs'
    case 'perna':
      return 'upper legs'
    default:
      return 'all'
  }
};
