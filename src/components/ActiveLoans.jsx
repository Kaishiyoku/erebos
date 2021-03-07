import PropTypes from 'prop-types';
import {Link} from '@reach/router';
import {format, parseISO} from 'date-fns';
import Button from './button/Button';
import clsx from 'clsx';
import LabelWithValueGroup from './LabelWithValueGroup';

function ActiveLoans(props) {
    const getLoanDisplayValuesFor = (loan) => [
        {label: 'Due', value: format(parseISO(loan.due), 'dd.MM.yyyy HH:mm')},
        {label: 'Repayment amount', value: loan.repaymentAmount},
        {label: 'Type', value: loan.type},
        {label: 'Status', value: loan.status},
    ];

    const renderLoans = props.loans.map((loan) => (
        <div key={loan.id}>
            <LabelWithValueGroup entries={getLoanDisplayValuesFor(loan)}/>

            <Button label="Pay back"/>
        </div>
    ));

    return (
        <div className={clsx('rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white', props.className)}>
            <div className="font-bold text-xl px-6 py-4">Active loans</div>
            <div className="px-6 pb-4">
                {renderLoans}
            </div>
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                <Link to="/loans/available" className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2">
                    Show available loans
                </Link>
            </div>
        </div>
    );
}

ActiveLoans.propTypes = {
    loans: PropTypes.arrayOf(PropTypes.shape({
        due: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        repaymentAmount: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    })).isRequired,
};

export default ActiveLoans;