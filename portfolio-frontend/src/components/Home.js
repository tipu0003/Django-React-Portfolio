// src/components/Home.js
import React, { useEffect, useState } from 'react';
import {
    getProjects,
    getEducations,
    getExperiences,
    getPublications,
    getPatents,
    getBooks,
    getConferences,
    getSkills,
    getAwards,
} from '../services/api';
import './Home.css';

const Home = () => {
    const [projects, setProjects] = useState([]);
    const [headline, setHeadline] = useState('Professional Headline'); // Static for now
    const [lastExperience, setLastExperience] = useState(null);
    const [biography, setBiography] = useState('This is a sample biography.'); // Static for now
    const [publicationsSummary, setPublicationsSummary] = useState('');
    const [patentsSummary, setPatentsSummary] = useState('');
    const [booksSummary, setBooksSummary] = useState('');
    const [conferencesSummary, setConferencesSummary] = useState('');
    const [skillsSummary, setSkillsSummary] = useState('');
    const [educationsSummary, setEducationsSummary] = useState('');
    const [awardsSummary, setAwardsSummary] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getProjects();
                setProjects(projectsResponse.data);

                const experiencesResponse = await getExperiences();
                if (experiencesResponse.data.length > 0) {
                    setLastExperience(experiencesResponse.data[experiencesResponse.data.length - 1]);
                }

                const publicationsResponse = await getPublications();
                setPublicationsSummary(`Total Publications: ${publicationsResponse.data.length}`);

                const patentsResponse = await getPatents();
                setPatentsSummary(`Total Patents: ${patentsResponse.data.length}`);

                const booksResponse = await getBooks();
                setBooksSummary(`Total Books: ${booksResponse.data.length}`);

                const conferencesResponse = await getConferences();
                setConferencesSummary(`Total Conferences: ${conferencesResponse.data.length}`);

                const skillsResponse = await getSkills();
                setSkillsSummary(`Total Skills: ${skillsResponse.data.length}`);

                const educationsResponse = await getEducations();
                setEducationsSummary(`Total Educations: ${educationsResponse.data.length}`);

                const awardsResponse = await getAwards();
                setAwardsSummary(`Total Awards: ${awardsResponse.data.length}`);
            } catch (error) {
                console.error('Error fetching home page data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="home-container">
            <div className="home-header">
                <img src="/images/image.jpg" alt="Your Name" />
                <h1>Welcome to My Portfolio</h1>
                <h2>{headline}</h2>
                {lastExperience && (
                    <p>Current Designation: {lastExperience.positions_held} at {lastExperience.organization}</p>
                )}
                <p>{biography}</p>
            </div>

            <div className="home-section">
                <h3>Recent Projects</h3>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <h4>{project.project_name}</h4>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="home-section">
                <h3>Summary</h3>
                <p><strong>Publications:</strong> {publicationsSummary}</p>
                <p><strong>Patents:</strong> {patentsSummary}</p>
                <p><strong>Books:</strong> {booksSummary}</p>
                <p><strong>Conferences:</strong> {conferencesSummary}</p>
                <p><strong>Skills:</strong> {skillsSummary}</p>
                <p><strong>Education:</strong> {educationsSummary}</p>
                <p><strong>Experience:</strong> {lastExperience && lastExperience.positions_held} at {lastExperience && lastExperience.organization}</p>
                <p><strong>Awards:</strong> {awardsSummary}</p>
            </div>

            <div className="download-cv">
                <a href="/docs/CV.pdf" download>
                    <button>Download CV</button>
                </a>
            </div>
        </div>
    );
};

export default Home;
