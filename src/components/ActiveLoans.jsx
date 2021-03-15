import PropTypes from 'prop-types';
import {format, parseISO} from 'date-fns';
import LabelWithValueGroup from './base/LabelWithValueGroup';
import payOffLoanRequest from '../core/api/payOffLoanRequest';
import MultiLoadingButton from './base/button/MultiLoadingButton';
import formatInteger from '../core/formatInteger';
import {length} from 'ramda';

function ActiveLoans({loans, className}) {
    if (length(loans) === 0) {
        return null;
    }

    return (
        <div className={className}>
            <div className="text-xl pb-4">Active loans</div>

            <div>
                {loans.map((loan) => (
                    <div key={loan.id} className="mb-4">
                        <LabelWithValueGroup
                            entries={[
                                {label: 'Type', value: loan.type},
                                {label: 'Due', value: format(parseISO(loan.due), 'dd.MM.yyyy HH:mm')},
                                {label: 'Repayment amount', value: formatInteger(loan.repaymentAmount)},
                                {label: 'Status', value: loan.status},
                            ]}
                        />

                        <MultiLoadingButton label="Pay back loan" promiseFn={() => payOffLoanRequest(loan.id)} size="sm"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

ActiveLoans.propTypes = {
    loans: PropTypes.array.isRequired,
};

ActiveLoans.defaultProps = {
    loans: [],
};

export default ActiveLoans;