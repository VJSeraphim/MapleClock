const clockContainer2 = document.querySelector(".js-clock")
const clockTitle2 = clockContainer2.querySelector(".js-title")
const clockLocation = clockContainer2.querySelector(".js-location")

function bgChange() {
bgDay = new Date()
const bgTimeHour = bgDay.getHours()
const bgTimeMinute = bgDay.getMinutes()
    if (bgTimeHour>=0 && bgTimeHour<1 || (bgTimeHour>=12 && bgTimeHour<13)) { // 여로
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/vanishingroads1.png')"
            clockLocation.innerText = "Lake of Oblivion, The Vanishing Roads"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/vanishingroads2.png')"
            clockLocation.innerText = "Nameless Town, The Vanishing Roads"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/vanishingroads3.png')"
            clockLocation.innerText = "Cavern of Reposement, The Vanishing Roads"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d95bd, 0 0 70px #1d95bd, 0 0 80px #1d95bd, 0 0 100px #1d95bd, 0 0 150px #1d95bd"
        }
    } else if ((bgTimeHour>=1 && bgTimeHour<2) || (bgTimeHour>=13 && bgTimeHour<14)) { //츄츄
        if (bgTimeMinute>=0 && bgTimeMinute<30) {
            clockContainer2.style.backgroundImage = "url('bg/chewchew1.png')"
            clockLocation.innerText = "The Torrent, Chu Chu Island"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/chewchew2.png')"
            clockLocation.innerText = "Illiard Field, Yum Yum Island"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"
        }
    } else if ((bgTimeHour>=2 && bgTimeHour<3) || (bgTimeHour>=14 && bgTimeHour<15)) {//레헬른
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/lacheln1.png')"
            clockLocation.innerText = "The Hideout, City Of Lacheln"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/lacheln2.png')"
            clockLocation.innerText = "Main Street, City Of Lacheln"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/lacheln3.png')"
            clockLocation.innerText = "Clocktower Of Nightmare, City Of Lacheln"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
        }
    } else if ((bgTimeHour>=3 && bgTimeHour<4) || (bgTimeHour>=15 && bgTimeHour<16)) { //아르카나
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/arcana1.png')"
            clockLocation.innerText = "Earth, Sunlight, Water, Arcana"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/arcana2.png')"
            clockLocation.innerText = "Marimba Lagoon, Arcana"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/arcana3.png')"
            clockLocation.innerText = "Cavern, Arcana"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #20dba4, 0 0 70px #20dba4, 0 0 80px #20dba4, 0 0 100px #20dba4, 0 0 150px #20dba4"
        }
    } else if ((bgTimeHour>=4 && bgTimeHour<5) || (bgTimeHour>=16 && bgTimeHour<17)) { //모라스
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/morass1.png')"
            clockLocation.innerText = "Coral Forest, Morass"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/morass2.jpg')"
            clockLocation.innerText = "Trueffet Square, Morass"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #c0eef9, 0 0 70px #c0eef9, 0 0 80px #c0eef9, 0 0 100px #c0eef9, 0 0 150px #c0eef9"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #c0eef9, 0 0 70px #c0eef9, 0 0 80px #c0eef9, 0 0 100px #c0eef9, 0 0 150px #c0eef9"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/morass3.png')"
            clockLocation.innerText = "That day of Trueffet, Morass"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
        }
    } else if ((bgTimeHour>=5 && bgTimeHour<6) || (bgTimeHour>=17 && bgTimeHour<18)) { // 에스페라
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer.style.backgroundImage = "url('bg/esfera1.png')"
            clockLocation.innerText = "A Place Where Life Begins, Esfera"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0fffb6, 0 0 70px #0fffb6, 0 0 80px #0fffb6, 0 0 100px #0fffb6, 0 0 150px #0fffb6"

        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer.style.backgroundImage = "url('bg/esfera2.png')"
            clockLocation.innerText = "Mirror-Touched Sea, Esfera"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #e317b6, 0 0 70px #e317b6, 0 0 80px #e317b6, 0 0 100px #e317b6, 0 0 150px #e317b6"
        } else {
            clockContainer.style.backgroundImage = "url('bg/esfera3.png')"
            clockLocation.innerText = "Mirrored Temple, Esfera"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
        }
    } else if ((bgTimeHour>=6 && bgTimeHour<7) || (bgTimeHour>=18 && bgTimeHour<19)) { //셀라스
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/selas1.png')"
            clockLocation.innerText = "Last Reach of Light, Sellas"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #05ceeb, 0 0 70px #05ceeb, 0 0 80px #05ceeb, 0 0 100px #05ceeb, 0 0 150px #05ceeb"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #05ceeb, 0 0 70px #05ceeb, 0 0 80px #05ceeb, 0 0 100px #05ceeb, 0 0 150px #05ceeb"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/selas2.png')"
            clockLocation.innerText = "The Endless Sinking, Sellas"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d5728, 0 0 70px #1d5728, 0 0 80px #1d5728, 0 0 100px #1d5728, 0 0 150px #1d5728"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #1d5728, 0 0 70px #1d5728, 0 0 80px #1d5728, 0 0 100px #1d5728, 0 0 150px #1d5728"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/selas3.png')"
            clockLocation.innerText = "Star-Engulfed Sea, Sellas"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0d147b, 0 0 70px #0d147b, 0 0 80px #0d147b, 0 0 100px #0d147b, 0 0 150px #0d147b"
        }
    } else if ((bgTimeHour>=7 && bgTimeHour<8) || (bgTimeHour>=19 && bgTimeHour<20)) { //문브
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/moonbridge1.png')"
            clockLocation.innerText = "Phantasmal Horizon, Moonbridge"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"

        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/moonbridge2.png')"
            clockLocation.innerText = "Unknown Mists, Moonbridge"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"

        } else {
            clockContainer2.style.backgroundImage = "url('bg/moonbridge3.png')"
            clockLocation.innerText = "Tides Of The Void, Moonbridge"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #181934, 0 0 70px #181934, 0 0 80px #181934, 0 0 100px #181934, 0 0 150px #181934"
        }
    } else if ((bgTimeHour>=8 && bgTimeHour<9) || (bgTimeHour>=20 && bgTimeHour<21)) { //미궁
        clockContainer2.style.backgroundImage = "url('bg/labyrinth1.png')"
        clockLocation.innerText = "Labyrinth Of Affliction"
        clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4a6a, 0 0 70px #ff4a6a, 0 0 80px #ff4a6a, 0 0 100px #ff4a6a, 0 0 150px #ff4a6a"
        clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff4a6a, 0 0 70px #ff4a6a, 0 0 80px #ff4a6a, 0 0 100px #ff4a6a, 0 0 150px #ff4a6a"

    } else if ((bgTimeHour>=9 && bgTimeHour<10) || (bgTimeHour>=21 && bgTimeHour<22)) { //리멘
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/limen1.png')"
            clockLocation.innerText = "Tears Of The World, Limen"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #2ba9c9, 0 0 70px #2ba9c9, 0 0 80px #2ba9c9, 0 0 100px #2ba9c9, 0 0 150px #2ba9c9"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #2ba9c9, 0 0 70px #2ba9c9, 0 0 80px #2ba9c9, 0 0 100px #2ba9c9, 0 0 150px #2ba9c9"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {
            clockContainer2.style.backgroundImage = "url('bg/limen2.png')"
            clockLocation.innerText = "The World's End, Limen"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #6c4676, 0 0 70px #6c4676, 0 0 80px #6c4676, 0 0 100px #6c4676, 0 0 150px #6c4676"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #6c4676, 0 0 70px #6c4676, 0 0 80px #6c4676, 0 0 100px #6c4676, 0 0 150px #6c4676"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/limen3.png')"
            clockLocation.innerText = "Throne Of Darkness, Limen"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d80000, 0 0 70px #d80000, 0 0 80px #d80000, 0 0 100px #d80000, 0 0 150px #d80000"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d80000, 0 0 70px #d80000, 0 0 80px #d80000, 0 0 100px #d80000, 0 0 150px #d80000"
        }
    } else if ((bgTimeHour>=10 && bgTimeHour<11) || (bgTimeHour>=22 && bgTimeHour<23)) { //세르니움
        if (bgTimeMinute>=0 && bgTimeMinute<20) {
            clockContainer2.style.backgroundImage = "url('bg/cernium1.png')"
            clockLocation.innerText = "City Of The Divine, Cernium"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #efe1eb, 0 0 70px #efe1eb, 0 0 80px #efe1eb, 0 0 100px #efe1eb, 0 0 150px #efe1eb"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #efe1eb, 0 0 70px #efe1eb, 0 0 80px #efe1eb, 0 0 100px #efe1eb, 0 0 150px #efe1eb"
        } else if (bgTimeMinute>=20 && bgTimeMinute<40) {   
            clockContainer2.style.backgroundImage = "url('bg/cernium2.png')"
            clockLocation.innerText = "The Square, Cernium"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #efe1eb, 0 0 70px #efe1eb, 0 0 80px #efe1eb, 0 0 100px #efe1eb, 0 0 150px #efe1eb"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #efe1eb, 0 0 70px #efe1eb, 0 0 80px #efe1eb, 0 0 100px #efe1eb, 0 0 150px #efe1eb"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/cernium3.png')"
            clockLocation.innerText = "The Great Hall, Cernium"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff37d, 0 0 70px #fff37d, 0 0 80px #fff37d, 0 0 100px #fff37d, 0 0 150px #fff37d"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff37d, 0 0 70px #fff37d, 0 0 80px #fff37d, 0 0 100px #fff37d, 0 0 150px #fff37d"
        }
    } else if ((bgTimeHour>=11 && bgTimeHour<12) || (bgTimeHour>=23 && bgTimeHour<24)) { //아르크스
        if (bgTimeMinute>=0 && bgTimeMinute<30) {
            clockContainer2.style.backgroundImage = "url('bg/hotelarcs1.png')"
            clockLocation.innerText = "Forgotten Wastelands, Hotel Arcs"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d58812, 0 0 70px #d58812, 0 0 80px #d58812, 0 0 100px #d58812, 0 0 150px #d58812"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d58812, 0 0 70px #d58812, 0 0 80px #d58812, 0 0 100px #d58812, 0 0 150px #d58812"
        } else {
            clockContainer2.style.backgroundImage = "url('bg/hotelarcs2.png')"
            clockLocation.innerText = "City Of Wastelands, Hotel Arcs"
            clockTitle2.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d58812, 0 0 70px #d58812, 0 0 80px #d58812, 0 0 100px #d58812, 0 0 150px #d58812"
            clockLocation.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #d58812, 0 0 70px #d58812, 0 0 80px #d58812, 0 0 100px #d58812, 0 0 150px #d58812"
        }   
    }
}

function init() {
    const frequency = 1000 * 60
    bgChange()
    setInterval(bgChange, 1000)
}

init()