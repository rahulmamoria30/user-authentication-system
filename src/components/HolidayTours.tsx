import React from "react"
import { useNavigate } from "react-router-dom"
import "./HolidayTours.css"

const HolidayTours: React.FC = () => {
  const navigate = useNavigate()
  const username = localStorage.getItem("Touriest") || "Touriest"

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("Touriest")
    navigate("/")
  }

  const dummyPlaces = [
    {
      title: "Beach Paradise",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1110.jpg",
      description: "Relax on the sunny beaches with crystal clear waters.",
    },
    {
      title: "Mountain Adventure",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1112.jpg",
      description: "Explore the majestic mountains and enjoy thrilling hikes.",
    },
    {
      title: "City Lights",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1115.jpg",
      description: "Experience the vibrant nightlife and iconic landmarks.",
    },
    {
      title: "Desert Safari",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1118.jpg",
      description: "Embark on an exciting journey through the golden sands.",
    },
    {
      title: "Forest Retreat",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1120.jpg",
      description: "Reconnect with nature in serene forest surroundings.",
    },
    {
      title: "Island Escape",
      image:
        "https://img.freepik.com/free-photo/woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1122.jpg",
      description: "Discover the tranquility of secluded island getaways.",
    },
  ]

  return (
    <div className="holiday-tours">
      <header className="header">
        <h1>Welcome, {username}!</h1>
        <nav>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <main>
        <h2>Popular Holiday Tours</h2>
        <div className="places-list">
          {dummyPlaces.map((place, index) => (
            <div key={index} className="place-item">
              <img src={place.image} alt={place.title} />
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default HolidayTours
