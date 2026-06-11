import React, { useState } from "react";
import "./GirlProfile.css";
import girlimage from "../assets/GirlImage.jpg";


//details for girl's profile|| dummy data used
const girlProfile = {
    fullName: "Kaguya Shinomiya",
    Birthdate: "March 22, 2010",
    grade: "Class 11",
    fatherName: "Satoshi Shinomiya",
    motherName: "Futaba Miyazono",
    mentorName: "Selena Gomez",
    profileImage: girlimage,
    state: "Kyoto",
    country: "Japan",
    studentContact: " (03) 1234-5678",
    parentsContact: "(03) 1234-5678",
    studentEmail: "shinomiyakaguya@gmail.com",
};

function GirlProfile() {
    const [showImage, setShowImage] = useState(false); //pop up of girl's profile pictire

    return (
        <div className="girl-profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <img
                        src={girlProfile.profileImage}
                        alt="profile"
                        className="profile-image"
                        onClick={() => setShowImage(true)}
                    />

                    <div className="profile-title">
                        <h1>{girlProfile.fullName}</h1>
                    </div>

                </div>

                <div className="profile-details">

                    <div className="detail-item">
                        <span className="detail-label">Full Name</span>
                        <span className="detail-value">
                            {girlProfile.fullName}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Birthdate</span>
                        <span className="detail-value">
                            {girlProfile.Birthdate}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Class/Grade</span>
                        <span className="detail-value">
                            {girlProfile.grade}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Father's Name</span>
                        <span className="detail-value">
                            {girlProfile.fatherName}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Mother's Name</span>
                        <span className="detail-value">
                            {girlProfile.motherName}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Mentor Name</span>
                        <span className="detail-value">
                            {girlProfile.mentorName}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label"> State/Country</span>
                        <span className="detail-value">
                            {girlProfile.state}/{girlProfile.country}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Student's Contact</span>
                        <span className="detail-value">
                            {girlProfile.studentContact}
                        </span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Parent's Contact</span>
                        <span className="detail-value">
                            {girlProfile.parentsContact}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Student's email</span>
                        <span className="detail-value">
                            {girlProfile.studentEmail}
                        </span>
                    </div>



                </div>

                <div className="profile-actions">
                    {/* Later we can navigate this page to edit profile page using this button */}
                    <button className="profile-button primary-button">
                        Edit Profile
                    </button>

                    {/*Either navigate this to mentor's profile or their conatact number*/}
                    <button className="profile-button secondary-button">
                        Contact Mentor
                    </button>

                    <button title="This will delete all the data for this user" className="profile-button outline-button">
                        Delete Records
                    </button>
                </div>

            </div>

            {showImage && (
                <div className="image-modal">

                    <div className="image-modal-content">

                        <button
                            className="image-modal-close"
                            onClick={() => setShowImage(false)}
                        >
                            X
                        </button>

                        <img
                            src={girlProfile.profileImage}
                            alt="full profile"
                            className="full-profile-image"
                        />

                    </div>

                </div>
            )}

        </div>
    );
}

export default GirlProfile;