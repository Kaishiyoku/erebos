const calculateDistance = ({x: x1, y: y1}, {x: x2, y: y2}) => Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

export default calculateDistance;