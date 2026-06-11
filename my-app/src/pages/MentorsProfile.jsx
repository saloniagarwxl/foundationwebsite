import React, { useState } from "react";
import "./MentorsProfile.css";
import mentorimage from "../assets/shoko.jpg";


//details for mentor's profile|| dummy data used
const mentorProfile = {
    fullName: "Ieri Shoko",
    Birthdate: "July 22, 1986",
    profileImage: mentorimage,
    state: "Kyoto",
    country: "Japan",
    mentorscontact: 56789,
    mentorsemail: "shoko@gmail.com",
};

function MentorsProfile() {
    const [showImage, setShowImage] = useState(false); //pop up of mentor's profile pictire

    return (
        <div className="mentor-profile-page">

            <div className="profile-card">

                <div className="profile-header">

                    <img
                        src={mentorProfile.profileImage}
                        alt="profile"
                        className="profile-image"
                        onClick={() => setShowImage(true)}
                    />

                    <div className="profile-title">
                        <h1>{mentorProfile.fullName}</h1>
                    </div>

                </div>

                <div className="profile-details">

                    <div className="detail-item">
                        <span className="detail-label">Full Name</span>
                        <span className="detail-value">
                            {mentorProfile.fullName}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">Birthdate</span>
                        <span className="detail-value">
                            {mentorProfile.Birthdate}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label"> State/Country</span>
                        <span className="detail-value">
                            {mentorProfile.state}/{mentorProfile.country}
                        </span>
                    </div>

                    <div className="detail-item">
                        <span className="detail-label">mentor's Contact</span>
                        <span className="detail-value">
                            {mentorProfile.mentorscontact}
                        </span>
                    </div>


                    <div className="detail-item">
                        <span className="detail-label">Student's email</span>
                        <span className="detail-value">
                            {mentorProfile.mentorsemail}
                        </span>
                    </div>



                </div>

                <div className="profile-actions">
                    {/* Later we can navigate this page to edit profile page using this button */}
                    <button className="profile-button primary-button">
                        Edit Profile
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
                            src={mentorProfile.profileImage}
                            alt="full profile"
                            className="full-profile-image"
                        />

                    </div>

                </div>
            )}

        </div>
    );
}

export default MentorsProfile;