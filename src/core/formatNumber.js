import numeral from 'numeral';

const formatNumber = (format, value) => numeral(value).format(format);

export default formatNumber;