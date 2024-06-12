// src/components/Education.js
import React, { useEffect, useState } from 'react';
import { getEducations } from '../services/api';

const Education = () => {
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        const fetchEducations = async () => {
            try {
                const response = await getEducations();
                setEducations(response.data);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };

        fetchEducations();
    }, []);

    return (
        <div>
            <h1>Education</h1>
            <ul>
                {educations.map((education) => (
                    <li key={education.id}>
                        <h3>{education.degree}</h3>
                        <p>{education.university} - {education.year_of_passing}</p>
                        <p>{education.specialization}</p>
                        <p>{education.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
