const getFlightPlanFromListByShipId = (shipId, flightPlans) => flightPlans.find((flightPlan) => flightPlan.ship === shipId);

export default getFlightPlanFromListByShipId;