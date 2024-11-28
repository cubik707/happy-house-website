import romanchuk from '../../../../assets/reviews/romanchuk.png';
import storogev from '../../../../assets/reviews/storogev.png';
import shkoda from '../../../../assets/reviews/shkoda.png';

export const reviewsData: ReviewType[] = [
  {
    name: 'Романчук Татьяна Анатольевна',
    imgPath: romanchuk,
    description:
      'Великолепная команда, только вот мне Влада не нравится, но это личное, человеческие отношения про другое.',
  },
  {
    name: 'Сторожев Дмитрий Алексеевич',
    imgPath: storogev,
    description:
      'Я не знаю, кто они, но я считаю, что работают очень круто. Поставил бы им автомат и отпустил со всех лекций.',
  },
  {
    name: 'Шкода Валентина Ивановна',
    imgPath: shkoda,
    description:
      'Обожаю этих ребят, самые лучшие!!! Ради них осталась работать в университете! Все делали в сроки, правильно и красиво.',
  },
];

export type ReviewType = {
  name: string;
  imgPath: string;
  description: string;
};
