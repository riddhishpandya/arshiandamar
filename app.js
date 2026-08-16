const tables = [
  { number: 1, guests: ['Dhweep Patel', 'Natalie Bascomb', 'Ose Aligbe', 'Chennelle Lawrence', 'Prashis Shrestha', 'Dibya Shrestha', 'Shilp Patel', 'Nitesh Gurraya', 'Trena Seecharan'] },
  { number: 2, guests: ['Tenzin Shakya', 'Jorge Velasquez Aguilar', 'Samantha Swete', 'Ian Swete', 'Binita Patel', 'Ronak Darji', 'Nimra Aziz', 'Saad Saeed', 'Yusuf Saeed'] },
  { number: 3, guests: ['Krishna Patel', 'Tej Patel', 'Haresh Patel', 'Dilip Patel', 'Maya Patel', 'Ravi Patel', 'Dhruti Patel', 'Krisha Patel', 'Hirmal Patel', 'Pankit Patel', 'Nayal Patel', 'Jimmy Patel', 'Ayan Patel'] },
  { number: 4, guests: ['Prashant Shukla', 'Ushma Shukla', 'Harsh Shukla', 'Nitin Pandya', 'Nina Pandya', 'Bhargav Shukla', 'Malini Shukla', 'Jigish Shukla', 'Nidhi Shukla', 'Kanchan Soni', 'Naina Shukla'] },
  { number: 5, guests: ['Manibhai Patel', 'Usha Patel', 'Bhupendra Patel', 'Sharda Patel', 'Ashwin Patel', 'Kokila Patel', 'Bipin Patel', 'Rita Patel', 'Dilip Patel', 'Sunita Patel', 'Nagin Patel', 'Sudha Patel', 'Rasik Patel', 'Saraswati Patel'] },
  { number: 6, guests: ['Dhyanam Shukla', 'Vidish Pandya', 'Riddhish Pandya', 'Isha Rao', 'Devangi Shukla', 'Smeet Patel', 'Vishwa Bhatt', 'Bilva Bhatt', 'Param Shukla', 'Samay Shukla', 'Sushil Mistry', 'Ravin Mehta'] },
  { number: 7, guests: ['Jessica Patel', 'Harshil Patel', 'Nikit Patel', 'Krishna Patel', 'Nash Miah', 'Maz Miah', 'Vinit Patel', 'Sheena Patel', 'Jeet Patel', 'Yogi Patel', 'Loma Patel', 'Ayla Patel', 'Avira Patel'] },
  { number: 8, guests: ['Parth Chokshi', 'Dharti Patel', 'Para Bhatt', 'Parantap Bhatt', 'Divya Bhatt', 'Keya Pandya', 'Sunny Mehta', 'Sanjana Bhatt', 'Reya Mehta'] },
  { number: 9, guests: ['Vishnu Patel', 'Lopa Patel', 'Indu Patel', 'Mukesh Patel', 'Dilip Patel', 'Jaya Patel', 'Jayden Patel', 'Aria Patel'] },
  { number: 10, guests: ['Maulin Bhatt', 'Maya Bhatt', 'Damyanti Shukla', 'Mahendra Shukla', 'Bhavesh Shukla', 'Parul Shukla', 'Hitesh Chokshi', 'Hina Chokshi', 'Nitin Bhatt', 'Mona Bhatt', 'Jayshree Pandya', 'Dilip Pandya'] },
  { number: 11, guests: ['Sataish Gurraya', 'Suzy Gurraya', 'Sashin Ramsaywack', 'Esha Puran', 'Jenner Cole', 'Nikeeya Cole'] },
  { number: 12, guests: ['Harish Jadeja', 'Rashmi Jadeja', 'Devesh Pandit', 'Dutta Pandit', 'Dhaval Desai', 'Ranna Desai', 'Divyajit Mehta', 'Gayatri Mehta', 'Nandita Patel', 'Saagar Bulsar', 'Krishna Patel', 'Pamela Makadsi', 'Isha Patel'] },
  { number: 13, guests: ['Digant Joshi', 'Geeta Joshi', 'Mita Joshi', 'Baa', 'Hiren Joshi', 'Malini Joshi', 'Nita Pandya', 'Prachi Pandya', 'Ankit Pandya', 'Ayansh Pandya', 'Anaisha Pandya'] },
  { number: 14, guests: ['Arohi Vyas', 'Paresh Mehta', 'Jayshree Mehta', 'Satyen Mehta', 'Meena Mehta', 'Atul Pandya', 'Vaishali Pandya', 'Adhya Vyas', 'Atharva Vyas'] }
];

const allGuests = tables.flatMap(table => table.guests.map(name => ({ name, table })));
const searchInput = document.querySelector('#guestSearch');
const resultBox = document.querySelector('#searchResults');
const tableList = document.querySelector('#tableList');

function normalize(value) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function guestRow(name, highlight = '') {
  const row = document.createElement('li');
  row.textContent = name;
  if (highlight && normalize(name).includes(normalize(highlight))) row.classList.add('match');
  return row;
}

function renderResult(matches, query) {
  resultBox.replaceChildren();
  if (!query) return;
  if (!matches.length) {
    resultBox.innerHTML = '<div class="empty-result">No guest found. Try a different spelling or search by last name.</div>';
    return;
  }
  if (matches.length > 8) {
    resultBox.innerHTML = '<div class="empty-result">Several guests match that search. Keep typing to narrow it down.</div>';
    return;
  }
  matches.forEach(({ name, table }) => {
    const card = document.createElement('article');
    card.className = 'result-card';
    card.innerHTML = `<div class="result-top"><span class="result-name">${name}</span><span class="table-badge">Table ${table.number}</span></div><p class="result-label">Your table</p><ul class="result-guests"></ul>`;
    const list = card.querySelector('.result-guests');
    table.guests.forEach(guest => list.appendChild(guestRow(guest, name)));
    resultBox.appendChild(card);
  });
}

function renderTables() {
  tables.forEach(table => {
    const card = document.createElement('article');
    card.className = 'table-card';
    card.innerHTML = `<div class="table-number">${table.number}</div><div><h3>Table ${table.number}</h3><ul></ul></div>`;
    const list = card.querySelector('ul');
    table.guests.forEach(name => list.appendChild(guestRow(name)));
    tableList.appendChild(card);
  });
}

searchInput.addEventListener('input', event => {
  const query = normalize(event.target.value.trim());
  const matches = allGuests.filter(({ name }) => normalize(name).includes(query));
  renderResult(matches, query);
});

renderTables();
