import { times } from 'utils/times';

export const app = () => {
  times(3, () => {
    // eslint-disable-next-line no-console
    console.log('test');
  });
};
