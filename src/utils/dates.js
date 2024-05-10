import moment from 'moment';

export const checkDates = (dt1, dt2) => {
  const isSame = moment(dt1).isSame(moment(dt2));
  if (isSame) {
    return moment(dt1).format('MMM Do YY');
  } else {
    return `${moment(dt1).format('MMM Do YY')} - ${moment(dt2).format(
      'MMM Do YY',
    )}`;
  }
};

export const checkTime = (dt1, dt2, t1, t2) => {
  const isSame = moment(dt1).isSame(moment(dt2));
  if (isSame) {
    return `${moment(dt1).format('dddd')}, ${t1} - ${t2}`;
  } else {
    return `${moment(dt1).format('dddd')}, ${t1} - ${moment(dt2).format(
      'dddd',
    )}, ${t2}`;
  }
};
