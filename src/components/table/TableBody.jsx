import PropTypes from 'prop-types';
import TableBodyRow from './TableBodyRow';
import clsx from 'clsx';

function TableBody({hovered, values}) {
    const className = clsx({
        'hover:bg-gray-50 transition-all': hovered,
    });

    return (
        <tbody className="divide-y divide-solid divide-gray-200">
            {values.map((valueRow) => (
                <tr key={valueRow.join()} className={className}>
                    {valueRow.map((value) => <TableBodyRow key={value} value={value}/>)}
                </tr>
            ))}
        </tbody>
    );
}

TableBody.propTypes = {
    hovered: PropTypes.bool,
    values: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))).isRequired,
};

TableBody.defaultProps = {
    hovered: false,
};

export default TableBody;