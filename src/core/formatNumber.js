import numeral from 'numeral';

const formatNumber = (value) => numeral(value).format('0.00');

export default formatNumber;