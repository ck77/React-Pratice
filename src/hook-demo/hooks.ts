import { useState, useEffect } from 'react';

const usePapagoCode = (handler: Function) => {
    const [keys, setKeys] = useState([]);

    const isKonamiCode = keys.join(' ') === 'up up down down left right left right B A';


}