import {useEffect, useState} from 'react';
import systemsInfoRequest from '../core/api/systemsInfoRequest';

function Systems() {
    const [systems, setSystems] = useState([]);

    useEffect(() => {
        systemsInfoRequest().then(({data}) => {
            setSystems(data.systems);
        });
    }, []);

    return (
        <div>
            <div className="text-2xl pb-4">Systems</div>

            {systems.map((system) => (
                <div key={system.symbol} className="rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <div className="font-bold text-xl px-6 py-4">{system.symbol} :: {system.name}</div>
                    <div className="px-6 pb-4">
                        {system.locations.map((location) => (
                            <div className="flex px-2 py-1 odd:bg-gray-50 dark:odd:bg-gray-900">
                                <div className="w-40">{location.symbol}:</div>
                                <div className="w-28 text-gray-500">{location.name}</div>
                                <div className="text-gray-500">{location.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Systems;