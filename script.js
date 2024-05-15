var speakersData = [
            
        {name: "Ahmed Fazil",
        bio: "Ahmed Fazil is an emerging figure in his field, known for his innovative approach and dedication to his work. He has made significant contributions through his creative problem-solving skills and commitment to excellence. Ahmed's influence is making a marked impact in his professional community.",
        image: "images/184300223_3959682020795544_3661367475740541518_n.jpg"},
            
        { name: "Mark Zuckerberg",
        bio: "Mark Zuckerberg, co-founder of Facebook, has shaped global communication by launching platforms like Instagram and WhatsApp and delving into virtual reality. His efforts continue to influence the tech landscape amid challenges like privacy and misinformation.",
        image: "images/gettyimages-98590706-612x612.jpg"}
            
        ];

        
        function createSpeakersHTML() {
            var speakersList = document.getElementById('speakers-list');

            
            speakersData.forEach(function(speaker) {
                var li = document.createElement('li');
                li.innerHTML = `
                    <img src="${speaker.image}" alt="${speaker.name}">
                    <h3>${speaker.name}</h3>
                    <p>${speaker.bio}</p>
                `;
                speakersList.appendChild(li);
            });
        }

        window.onload = createSpeakersHTML;
