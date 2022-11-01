import { MarketOptionType } from '../types/market';

export const CATEGORY: MarketOptionType[] = [
  { option: '전체', value: 'all' },
  { option: '스포츠카', value: 'sports-car' },
  { option: '세단', value: 'saloon' },
  { option: 'SUV', value: 'suv' },
  { option: '픽업트럭', value: 'pickup-truck' },
  { option: '클래식카&올드카', value: 'classic-car&old-car' },
];

export const CATEGORY_VALUES = CATEGORY.map(({ value }) => value);

/**
 *
 * @param startYear 연식 시작할 년도
 * @param endYear 연식 마지막 년도
 * @returns [{ option: '년도', value: 숫자 값 }];
 */
export const CAR_FILTER_DATE = (
  startYear: number,
  endYear: number
): MarketOptionType[] => {
  const arr: MarketOptionType[] = [];

  for (let i = startYear; i >= endYear; i--) {
    arr.push({ option: `${i}년`, value: i + '' });
  }

  return arr;
};

/**
 *
 * @param startPrice 시작 가격
 * @param endPrice 끝 가격
 * @param step 가격 간 격차
 * @returns [{ option: '${가격}만원 || 억', value: 숫자 값 }];
 */
export const CAR_FILTER_PRICE = (
  startPrice: number,
  endPrice: number,
  step: number
) => {
  const arr: MarketOptionType[] = [];

  for (let i = startPrice; i <= endPrice; i += step) {
    if (i >= 10000) {
      arr.push({
        option:
          i % 10000 === 0
            ? `${Math.floor(i / 10000)}억원`
            : `${Math.floor(i / 10000)}억${(i % 10000) / 1000}천만원`,
        value: i + '',
      });
    } else {
      arr.push({ option: `${i / 1000}천만원`, value: i + '' });
    }
  }

  return arr;
};

/**
 *
 * @param startMileage 시작 주행거리
 * @param endMileage 마지막 주행거리
 * @param step 주행거리 간 격차
 * @returns [{ option: `${주행거리}천km || 만km`, value: 숫자 값 }];
 */
export const CAR_FILTER_MILEAGE = (
  startMileage: number,
  endMileage: number,
  step: number
) => {
  const arr: MarketOptionType[] = [];

  for (let i = startMileage; i <= endMileage; i += step) {
    if (i >= 10000) {
      arr.push({
        option:
          i % 10000 === 0
            ? `${Math.floor(i / 10000)}만km`
            : `${Math.floor(i / 10000)}만${(i % 10000) / 1000}천km`,
        value: i + '',
      });
      continue;
    }
    if (i >= 1000) {
      arr.push({ option: `${i / 1000}천km`, value: i + '' });
      continue;
    }
    if (i < 1000) {
      arr.push({ option: `${i}km`, value: i + '' });
    }
  }

  return arr;
};

export const FIRST_MARKET_FILTER = [
  {
    label: {
      subject: '연식',
      dataName: 'year',
    },
    firstLabel: '최소',
    secondLabel: '최대',
    optionSet: CAR_FILTER_DATE(2023, 2010),
  },
  {
    label: {
      subject: '가격',
      dataName: 'price',
    },
    firstLabel: '최소',
    secondLabel: '최대',
    optionSet: CAR_FILTER_PRICE(2000, 20000, 2000),
  },
  {
    label: {
      subject: '주행거리',
      dataName: 'mileage',
    },
    firstLabel: '최소',
    secondLabel: '최대',
    optionSet: CAR_FILTER_MILEAGE(2000, 10000, 2000),
  },
  {
    label: {
      subject: '연료',
      dataName: 'fuel',
    },
    firstLabel: '선택',
    secondLabel: undefined,
    optionSet: [
      { option: '경유', value: 'diesel' },
      { option: '가솔린', value: 'gasoline' },
    ],
  },
];

export const SECOND_MARKET_FILTER = [
  {
    label: {
      subject: '색상',
      dataName: 'color',
    },
    firstLabel: '선택',
    secondLabel: undefined,
    optionSet: [
      { option: '빨간색', value: 'red' },
      { option: '파란색', value: 'blue' },
    ],
  },
  {
    label: {
      subject: '사고여부',
      dataName: 'accident',
    },
    firstLabel: '최소',
    secondLabel: undefined,
    optionSet: [
      { option: '유', value: 'true' },
      { option: '무', value: 'false' },
    ],
  },
];

export const FILTER_DATANAMES = FIRST_MARKET_FILTER.map(
  ({ label }) => label
).concat(SECOND_MARKET_FILTER.map(({ label }) => label));

export const ORDER_OPTIONSET: MarketOptionType[] = [
  {
    option: '최근 등록순',
    value: 'reg-new',
  },
  {
    option: '이전 등록순',
    value: 'reg-old',
  },
  {
    option: '가격 낮은순',
    value: 'price-asc',
  },
  {
    option: '가격 높은순',
    value: 'price-desc',
  },
  {
    option: '주행 짧은순',
    value: 'mileage-asc',
  },
  {
    option: '주행 많은순',
    value: 'mileage-desc',
  },
  {
    option: '연식 최신순',
    value: 'year-asc',
  },
  {
    option: '연식 오래된순',
    value: 'year-desc',
  },
];

/**
 * @param start 시작 개수
 * @param end 마지막 개수
 * @returns [{ option: `${개수}개씩 || 만km`, value: 개수 }];
 */
export const HOW_MANY_RESULT = (start: number, end: number) => {
  const options: MarketOptionType[] = [];

  for (let i = start; i <= end; i += 10) {
    options.push({ option: `${i}개씩`, value: `${i}` });
  }

  return options;
};

export const MARKET_LIST_TABLE_HEAD = [
  {
    title: '사진',
    width: '196',
  },
  {
    title: '차량정보',
    width: '564',
  },
  {
    title: '연식',
    width: undefined,
  },
  {
    title: '연료',
    width: undefined,
  },
  {
    title: '주행',
    width: undefined,
  },
  {
    title: '가격',
    width: undefined,
  },
  {
    title: '판매자',
    width: undefined,
  },
];
