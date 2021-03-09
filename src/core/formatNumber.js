import numeral from 'numeral';

const formatNumber = (value) => numeral(value).format();

export default formatNumber;