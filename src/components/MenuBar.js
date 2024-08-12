import React, { useState } from 'react';
import './MenuBar.css';

const MenuBar = () => {
    const [selectedSection, setSelectedSection] = useState(null);

    const files = {
        'Master Files': ['File1.mp3', 'File2.mp3'],
        'Meta Data': ['MetaData1.json', 'MetaData2.json'],
        'Contracts': ['Contract1.pdf', 'Contract2.pdf'],
        'Stems': ['Stem1.wav', 'Stem2.wav'],
        'Deals': ['Deal1.docx', 'Deal2.docx'],
    };

    const handleSectionClick = (section) => {
        if (selectedSection === section) {
            setSelectedSection(null); // Close the section if it's already open
        } else {
            setSelectedSection(section); // Open the selected section
        }
    };

    const handleFileDownload = (fileName) => {
        // Logic to download the file
        alert(`Downloading ${fileName}`);
    };

    return (
        <div className="menu-bar">
            {Object.keys(files).map((section) => (
                <div key={section} className="menu-section">
                    <button
                        className="menu-button"
                        style={{ backgroundImage: `url(/images/${section.replace(' ', '_').toLowerCase()}.jpg)` }}
                        onClick={() => handleSectionClick(section)}
                    >
                        {section}
                    </button>
                    {selectedSection === section && (
                        <div className="file-list">
                            {files[section].map((file, index) => (
                                <div
                                    key={index}
                                    className="file-item"
                                    onClick={() => handleFileDownload(file)}
                                >
                                    {file}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MenuBar;
