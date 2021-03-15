import {useEffect, useState} from 'react';
import availableLoansRequest from '../core/api/availableLoansRequest';
import takeOutLoanRequest from '../core/api/takeOutLoanRequest';
import LabelWithValueGroup from '../components/base/LabelWithValueGroup';
import formatBool from '../core/formatBool';
import MultiLoadingButton from '../components/base/button/MultiLoadingButton';
import formatInteger from '../core/formatInteger';
import Card from '../components/Card/Card';
import CardBody from '../components/Card/CardBody';
import CardFooter from '../components/Card/CardFooter';

function AvailableLoans() {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        availableLoansRequest().then(({data}) => setLoans(data.loans));
    }, []);

    const getLoanDisplayValuesFor = (loan) => [
        {label: 'Amount', value: formatInteger(loan.amount)},
        {label: 'Collateral required', value: formatBool(loan.collateralRequired)},
        {label: 'Rate', value: formatInteger(loan.rate)},
        {label: 'Term (days)', value: loan.termInDays},
    ];

    return (
        <div>
            {loans.map((loan) => (
                <Card key={loan.type} headingLabel={loan.type}>
                    <CardBody>
                        <LabelWithValueGroup entries={getLoanDisplayValuesFor(loan)}/>
                    </CardBody>

                    <CardFooter>
                        <MultiLoadingButton label="Take out loan" promiseFn={() => takeOutLoanRequest(loan.type)}/>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default AvailableLoans;