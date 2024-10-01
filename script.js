let soal = [
    // Sistem Persamaan Dua Variabel (SPDLV)
    {
        pertanyaan: 'Jika 2x + 3y = 12 dan x - y = 1, maka nilai x adalah:',
        jawab: {
            'A': '3',
            'B': '2',
            'C': '4',
            'D': '1',
        },
        benar: 'B', // x = 2
    },
    {
        pertanyaan: 'Selesaikan sistem berikut: 3x + 2y = 6 dan 4x - y = 5. Nilai y adalah:',
        jawab: {
            'A': '1',
            'B': '2',
            'C': '3',
            'D': '0',
        },
        benar: 'B', // y = 2
    },
    {
        pertanyaan: 'Dari persamaan 5x + 2y = 10, jika x = 2, maka y adalah:',
        jawab: {
            'A': '0',
            'B': '5',
            'C': '1',
            'D': '2',
        },
        benar: 'B', // y = 5
    },
    {
        pertanyaan: 'Berapa nilai x dan y dari sistem: x + 2y = 8 dan 3x - y = 2?',
        jawab: {
            'A': 'x=2, y=3',
            'B': 'x=4, y=2',
            'C': 'x=1, y=4',
            'D': 'x=0, y=8',
        },
        benar: 'B', // x = 4, y = 2
    },
    {
        pertanyaan: 'Jika 7x - 3y = 11 dan 2x + 4y = 14, maka nilai y adalah:',
        jawab: {
            'A': '2',
            'B': '3',
            'C': '1',
            'D': '4',
        },
        benar: 'A', // y = 2
    },
    {
        pertanyaan: 'Dari persamaan 3x + y = 9 dan x - 2y = 4, nilai y adalah:',
        jawab: {
            'A': '1',
            'B': '2',
            'C': '3',
            'D': '4',
        },
        benar: 'B', // y = 2
    },
    {
        pertanyaan: 'Jika 5x + 2y = 12 dan 3x - y = 3, maka nilai x adalah:',
        jawab: {
            'A': '1',
            'B': '2',
            'C': '3',
            'D': '4',
        },
        benar: 'C', // x = 3
    },
    {
        pertanyaan: 'Selesaikan sistem: x + 3y = 7 dan 2x - y = 4. Nilai x adalah:',
        jawab: {
            'A': '1',
            'B': '2',
            'C': '3',
            'D': '4',
        },
        benar: 'B', // x = 2
    },
    {
        pertanyaan: 'Jika 4x + 3y = 24 dan x + 2y = 10, maka nilai y adalah:',
        jawab: {
            'A': '2',
            'B': '4',
            'C': '5',
            'D': '6',
        },
        benar: 'B', // y = 4
    },
    {
        pertanyaan: 'Dari sistem 2x + y = 8 dan x - y = 2, nilai x adalah:',
        jawab: {
            'A': '2',
            'B': '4',
            'C': '6',
            'D': '8',
        },
        benar: 'B', // x = 4
    },

    // Pangkat
    {
        pertanyaan: '5^2 = ?',
        jawab: {
            'A': '10',
            'B': '25',
            'C': '20',
            'D': '30',
        },
        benar: 'B',
    },
    {
        pertanyaan: '3^3 = ?',
        jawab: {
            'A': '6',
            'B': '9',
            'C': '27',
            'D': '30',
        },
        benar: 'C',
    },
    {
        pertanyaan: '2^5 = ?',
        jawab: {
            'A': '32',
            'B': '16',
            'C': '8',
            'D': '4',
        },
        benar: 'A',
    },
    {
        pertanyaan: '4^2 = ?',
        jawab: {
            'A': '12',
            'B': '14',
            'C': '16',
            'D': '18',
        },
        benar: 'C',
    },
    {
        pertanyaan: '10^0 = ?',
        jawab: {
            'A': '0',
            'B': '1',
            'C': '10',
            'D': '100',
        },
        benar: 'B',
    },
    {
        pertanyaan: '2^4 = ?',
        jawab: {
            'A': '8',
            'B': '16',
            'C': '32',
            'D': '64',
        },
        benar: 'B',
    },
    {
        pertanyaan: '3^2 + 2^2 = ?',
        jawab: {
            'A': '13',
            'B': '12',
            'C': '9',
            'D': '10',
        },
        benar: 'A',
    },
    {
        pertanyaan: '5^3 = ?',
        jawab: {
            'A': '125',
            'B': '100',
            'C': '150',
            'D': '75',
        },
        benar: 'A',
    },
    {
        pertanyaan: '6^2 = ?',
        jawab: {
            'A': '36',
            'B': '30',
            'C': '32',
            'D': '42',
        },
        benar: 'A',
    },
    {
        pertanyaan: '1^100 = ?',
        jawab: {
            'A': '1',
            'B': '0',
            'C': '100',
            'D': 'Infinity',
        },
        benar: 'A',
    },

    // Bangun Ruang
    {
        pertanyaan: 'Volume kubus dengan sisi 4 cm adalah?',
        jawab: {
            'A': '16 cm³',
            'B': '64 cm³',
            'C': '48 cm³',
            'D': '32 cm³',
        },
        benar: 'B', // Volume = s^3 = 4^3 = 64 cm³
    },
    {
        pertanyaan: 'Luas permukaan bola dengan jari-jari 7 cm adalah?',
        jawab: {
            'A': '154 cm²',
            'B': '308 cm²',
            'C': '616 cm²',
            'D': '44 cm²',
        },
        benar: 'C', // Luas = 4πr² = 4π(7)² = 616 cm²
    },
    {
        pertanyaan: 'Berapa volume tabung dengan jari-jari 3 cm dan tinggi 5 cm?',
        jawab: {
            'A': '15π cm³',
            'B': '30π cm³',
            'C': '9π cm³',
            'D': '12π cm³',
        },
        benar: 'B', // Volume = πr²h = π(3)²(5) = 45π cm³
    },
    {
        pertanyaan: 'Luas alas prisma segitiga dengan alas 6 cm dan tinggi 4 cm adalah?',
        jawab: {
            'A': '12 cm²',
            'B': '24 cm²',
            'C': '48 cm²',
            'D': '36 cm²',
        },
        benar: 'A', // Luas = 0.5 * alas * tinggi = 0.5 * 6 * 4 = 12 cm²
    },
    {
        pertanyaan: 'Keliling lingkaran dengan jari-jari 10 cm adalah?',
        jawab: {
            'A': '20π cm',
            'B': '30π cm',
            'C': '40π cm',
            'D': '50π cm',
        },
        benar: 'C', // Keliling = 2πr = 2π(10) = 20π cm
    },
    {
        pertanyaan: 'Volume bola dengan jari-jari 3 cm adalah?',
        jawab: {
            'A': '27/4π cm³',
            'B': '36/4π cm³',
            'C': '9π cm³',
            'D': '12π cm³',
        },
        benar: 'A', // Volume = 4/3πr³ = 4/3π(3)³ = 36π/4 cm³
    },
    {
        pertanyaan: 'Luas permukaan kubus dengan sisi 5 cm adalah?',
        jawab: {
            'A': '25 cm²',
            'B': '100 cm²',
            'C': '75 cm²',
            'D': '50 cm²',
        },
        benar: 'B', // Luas = 6s² = 6(5)² = 150 cm²
    },
    {
        pertanyaan: 'Berapa tinggi tabung jika volume 60π cm³ dan jari-jari 4 cm?',
        jawab: {
            'A': '5 cm',
            'B': '6 cm',
            'C': '4 cm',
            'D': '3 cm',
        },
        benar: 'A', // Volume = πr²h → h = Volume / (πr²) = 60π / (π(4)²) = 60 / 16 = 3.75 cm
    },
    {
        pertanyaan: 'Volume prisma segitiga dengan alas 10 cm, tinggi 5 cm, dan tinggi prisma 8 cm adalah?',
        jawab: {
            'A': '400 cm³',
            'B': '250 cm³',
            'C': '200 cm³',
            'D': '300 cm³',
        },
        benar: 'C', // Volume = Luas alas * tinggi = (0.5 * alas * tinggi) * tinggi_prisma = (0.5 * 10 * 5) * 8 = 200 cm³
    },
    {
        pertanyaan: 'Luas permukaan limas segi empat dengan panjang sisi alas 6 cm dan tinggi limas 10 cm adalah?',
        jawab: {
            'A': '72 cm²',
            'B': '96 cm²',
            'C': '60 cm²',
            'D': '84 cm²',
        },
        benar: 'B', // Luas permukaan = Luas alas + 2 * (alas * tinggi_miring) = 36 + 60 = 96 cm²
    }
];    

let index = 0;
let nilai = 0;
const isiNilai = document.getElementById('nilai');
let tombol = document.querySelectorAll('#jawaban button');
let mySoal = document.getElementById ('soal');
let waktu = 5 * 60;
let timerDisplay = document.getElementById('timer');
let salah = document.getElementById('salah');
let benar = document.getElementById('benar');
mySoal.innerText = soal[index].pertanyaan;


let tombolA = document.getElementById('jawabA');
let tombolB = document.getElementById('jawabB');
let tombolC = document.getElementById('jawabC');
let tombolD = document.getElementById('jawabD');
tombol.forEach(function(b) {
	b.disabled = true;
	timer.style.display = 'none';
});

//play
let start = document.getElementById('start');

start.addEventListener('click', function() {
	mySoal.style.display = 'block';
	timer.style.display = 'block';
	tombolA.innerText = soal[index].jawab.A;
	tombolB.innerText = soal[index].jawab.B;
	tombolC.innerText = soal[index].jawab.C;
	tombolD.innerText = soal[index].jawab.D;
	start.style.display = 'none';
	tombol.forEach(function(b) {
	b.disabled = false;
});
	});
//play end

tombol.forEach(function(p) {
	p.addEventListener('click', function() {
		if (p.value === soal[index].benar) {
			index++;
			nilai += 4;
			benar.style.display = 'block';
			if (index >= soal.length) {
				mySoal.innerText = 'Quiz selesai!';
				confirm(`selamat kamu sudah menyelesaikan Quest \n nilai kamu ${nilai}`)
				tombol.forEach(function(b) {
				    b.disabled = true;
					timer.style.display = 'none';
				});
			} else {
				mySoal.innerText = soal[index].pertanyaan;
				tombolA.innerText = soal[index].jawab.A;
				tombolB.innerText = soal[index].jawab.B;
				tombolC.innerText = soal[index].jawab.C;
				tombolD.innerText = soal[index].jawab.D;
				
			}
			

		} else {
			salah.style.display = 'block';
			nilai -= 4;
		}
		setTimeout(function() {
 			salah.style.display ='none';
				}, 1000)
		setTimeout(function() {
 			benar.style.display ='none';
				}, 1000)
	})
})


//timer
let interval = setInterval(function() {
	let menit = Math.floor(waktu / 60);
	let detik = waktu % 60;

	timerDisplay.innerText = `${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
	if (waktu <= 0) {
		clearInterval(interval);
		alert('Waktu habis!');
		document.getElementById('jawaban').style.display = 'none';
	}
	waktu--;
}, 1000); 
			//timer End



















