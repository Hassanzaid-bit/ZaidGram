import React from 'react';
import useFirestore from '../Hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return(
        <div className="img-grid">
            { docs && docs.map(doc => (
                <div className="img-wrap" key={doc.id}
                 onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={ doc.url } alt="Uploaded pic" />
                </div>
            ))}
        </div>
    )
}
export default ImageGrid;