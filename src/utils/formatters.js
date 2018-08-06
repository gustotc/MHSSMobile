import moment from 'moment/moment';

export const formatAmount = value => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(value);
};

export const getFormattedCurrentWeek = () => {
  var m = moment();
  return (
    m.startOf('week').format('DD') +
    ' - ' +
    m.endOf('week').format('DD ') +
    m.format('MMM, YYYY')
  );
};

export const getFormattedCurrentMonth = () => {
  var m = moment();
  return m.format('MMMM, ') + m.format('YYYY');
};
