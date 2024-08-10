
const profiles = [
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "HSC ICT Full",
        "student_age": "Class 11-12",
        "areaa": "Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "salary": "Negotiable",
        "whatsapp": "+8801791694602",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sumona Haque",
        "email": "sumonameem.bau17@gmail.com",
        "skill": "Academic",
        "student_age": "Class 6-10",
        "areaa": "Rajshahi City (Ward 3,4,5 Only)",
        "remote": "Yes. Google Meet/Zoom",
        "school": "Helenabad'14, Rajshahi College'16, BAU'20",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "Negotiable",
        "avatar": "https://extramee.com/tuitorimg/sumona.jpg",
        "protLink": "#"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "USA College Admission Information (Details)",
        "student_age": "Class 6-BSC",
        "areaa": "Remote Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "Accepted by 17 USA, 2 Russian, & 4 Indian University",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "1000",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "Computer Basic to Advance",
        "student_age": "Anyone",
        "areaa": "Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "Negotiable",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "Competitive Programming",
        "student_age": "Class 6-BSC",
        "areaa": "Rajshahi City Only",
        "remote": "Yes. Google Meet/Zoom",
        "school": "BACS Camper, Codeforces 1523, Online Judge Creator.",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "Negotiable",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "English to Bangla Translator (vice versa)",
        "student_age": "Foreigner",
        "areaa": "Anywhere",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "Negotiable",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    },
    {
        "name": "Sanaul Haque",
        "email": "shanto@eptonline.org",
        "skill": "Hindi to Bangla Translator (vice versa)",
        "student_age": "Foreigner",
        "areaa": "Anywhere",
        "remote": "Yes. Google Meet/Zoom",
        "school": "RGLHS'18, BMARPC'20, Badger'29",
        "phone": "+8801791694602",
        "whatsapp": "+8801791694602",
        "salary": "Negotiable",
        "avatar": "https://extramee.com/tuitorimg/shanto.PNG",
        "protLink": "https://yrjournal.org/md-log.pdf"
    }
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
            <p>🗾 In-Person: ${profile.areaa}</p>
            <p>💻 Remote: ${profile.remote}</p>
            <p>👨‍🎓 Student: ${profile.student_age}</p>
            <button class="glow-on-hover" type="button" onclick="showContact('${profile.skill}','${profile.salary}','${profile.areaa}','${profile.remote}','${profile.student_age}','${profile.whatsapp}', '${profile.email}', '${profile.phone}', '${profile.protLink}')">Hire Me</button>
        `;
        profileList.appendChild(profileDiv);
    });
}

// Function to search profiles
function searchProfiles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(query) ||
        profile.school.toLowerCase().includes(query) ||
        profile.skill.toLowerCase().includes(query) ||
        profile.student_age.toString().includes(query)
    );
    displayProfiles(filteredProfiles);
}

// Function to show contact info in modal
function showContact( skill, salary, areaa, remote, student_age, whatsapp, email, phone, protLink) {
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <p>🤹 Skill: ${skill}</p>
        <p>🗾 In-Person: ${areaa}</p>
        <p>💻 Remote: ${remote}</p>
        <p>👨‍🎓 Student: ${student_age}</p>
        <p>💸 Salary: ${salary}</p>
        <p>📮 Email: ${email}</p>
        <p>☎️ Phone: ${phone}</p>
        <p>✆ WhatsApp: ${whatsapp}</p>
        <p> Resume: <a href=${protLink}>Click me</a></p>
       
        
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
