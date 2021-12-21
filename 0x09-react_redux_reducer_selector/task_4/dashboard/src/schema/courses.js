import { normalize, schema } from 'normalizr';

export const course = new schema.Entity('courses')

export default function coursesNormalizer(data) {
  const normlizr = normalize(data, [course])
  return normlizr
}