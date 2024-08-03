// Example JSON data
const profiles = [
    {
        "name": "Sanaul Haque",
        "email": "shanto@extramee.com",
        "skill": "Computer Basic to Advance",
        "student_age": "Anyone",
        "areaa": "In-Person Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sumona Haque",
        "email": "sumona@extramee.com",
        "skill": "Academic",
        "student_age": "Class 6-10",
        "areaa": "In-Person Rajshahi City (WARD 3,4,5,6 Only)",
        "remote": "Yes. Google Meet/Zoom",
        "school": "Helenabad'14, Rajshahi College'16, BAU'20",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "avatar": "https://extramee.com/tuitorimg/sumona.jpg",
        "protLink": "#"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@extramee.com",
        "skill": "HSC ICT Full",
        "student_age": "Anyone (Science, Arts, Commerce)",
        "areaa": "In-Person Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@extramee.com",
        "skill": "Competitive Programming",
        "student_age": "Anyone",
        "areaa": "In-Person Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
];

// Function to display profiles
function displayProfiles(profiles) {
    const profileList = document.getElementById('profileList');
    profileList.innerHTML = ''; // Clear previous profiles
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.className = 'profile';
        profileDiv.innerHTML = `
            <img src="${profile.avatar}" alt="${profile.name}">
            <h2>${profile.name}</h2>
            <p>🏫 Institute: ${profile.school}</p>
            <p>🤹 Skill: ${profile.skill}</p>
            <p>🗾 Area: ${profile.areaa}</p>
            <p>💻 Remote: ${profile.remote}</p>
            <p>👨‍🎓 Student: ${profile.student_age}</p>
            <button class="glow-on-hover" type="button" onclick="showContact('${profile.skill}','${profile.areaa}','${profile.remote}','${profile.student_age}','${profile.whatsapp}', '${profile.email}', '${profile.phone}', '${profile.portLink}')">Hire Me</button>
        `;
        profileList.appendChild(profileDiv);
    });
}

// Function to search profiles
function searchProfiles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(query)
    );
    displayProfiles(filteredProfiles);
}

// Function to show contact info in modal
function showContact(skill, areaa, remote, student_age, whatsapp, email, phone) {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <p>🤹 Skill: ${skill}</p>
        <p>🗾 Area: ${areaa}</p>
        <p>💻 Remote: ${remote}</p>
        <p>👨‍🎓 Student: ${student_age}</p>
        <p> Resume: ${portLink}</p>
        <p>✆ WhatsApp: ${whatsapp}</p>
        <p>📮 Email: ${email}</p>
        <p>☎️ Phone: ${phone}</p>
    `;
    modal.style.display = 'block';

    // Close modal functionality
    const close = document.querySelector('.close');
    close.onclick = function() {
        modal.style.display = 'none';
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

// Initial display of profiles
displayProfiles(profiles);
