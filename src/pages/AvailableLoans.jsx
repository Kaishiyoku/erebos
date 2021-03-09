import {useEffect, useState} from 'react';
import availableLoansRequest from '../core/api/availableLoansRequest';
import takeOutLoanRequest from '../core/api/takeOutLoanRequest';
import LabelWithValueGroup from '../components/LabelWithValueGroup';
import formatBool from '../core/formatBool';
import formatNumber from '../core/formatNumber';

function AvailableLoans() {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        availableLoansRequest().then(({data}) => setLoans(data.loans));
    }, []);

    const handleTakeOutLoan = (type) => {
        takeOutLoanRequest(type);
    };

    const getLoanDisplayValuesFor = (loan) => [
        {label: 'Amount', value: formatNumber(loan.amount)},
        {label: 'Collateral required', value: formatBool(loan.collateralRequired)},
        {label: 'Rate', value: formatNumber(loan.rate)},
        {label: 'Term (days)', value: loan.termInDays},
    ];

    return (
        <div>
            {loans.map((loan) => (
                <div key={loan.type} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white mb-4">
                    <div className="font-bold text-xl px-6 py-4">{loan.type}</div>
                    <div className="px-6">
                        <LabelWithValueGroup entries={getLoanDisplayValuesFor(loan)}/>
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                        <button onClick={() => handleTakeOutLoan(loan.type)} className="text-left text-blue-600 shadow-md border border-blue-300 bg-white rounded-full transition-all duration-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-500 hover:text-white focus:outline-none px-4 py-2">
                            Take out loan
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AvailableLoans;