import SubHeading from './base/SubHeading';
import Card from './Card/Card';
import CardBody from './Card/CardBody';
import CardHeadingActionButton from './Card/CardHeadingActionButton';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import {useContext, useState} from 'react';
import ActiveFlightPlansContext from '../ActiveFlightPlansContext';

function FlightPlans() {
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [activeFlightPlans, setActiveFlightPlans] = useContext(ActiveFlightPlansContext);

    return (
        <div>
            <SubHeading label="Flight plans"/>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
                {activeFlightPlans.map((activeFlightPlan) => (
                    <Card
                        key={activeFlightPlan.id}
                        headingLabel={`${activeFlightPlan.from} -> ${activeFlightPlan.to}`}
                        headingActionButton={(
                            <CardHeadingActionButton
                                icon={<ChevronDownIcon/>}
                                onClick={() => setIsDetailVisible(!isDetailVisible)}
                            />
                        )}
                    >
                        <CardBody>
                            <>

                            </>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default FlightPlans;