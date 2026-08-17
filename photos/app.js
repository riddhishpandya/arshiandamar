const groups = [
  [1, 'Screenshot Photo 1', ['Prashant Shukla', 'Ushma Shukla', 'Harsh Shukla', 'Dhyanam Shukla']],
  [2, 'Screenshot Photo 2', ['Harsh Shukla', 'Dhyanam Shukla']],
  [3, 'Screenshot Photo 3', ['Prashant Shukla', 'Ushma Shukla', 'Harsh Shukla', 'Dhyanam Shukla', 'Haresh Patel', 'Krishna Patel', 'Tej Patel', 'Ayan Patel']],
  [4, 'Screenshot Photo 4', ['Haresh Patel', 'Krishna Patel', 'Tej Patel', 'Ayan Patel']],
  [5, 'Screenshot Photo 5', ['Krishna Patel', 'Tej Patel', 'Ayan Patel']],
  [10, 'Screenshot Photo 10', ['Dilip Patel', 'Maya Patel', 'Ravi Patel', 'Krishna Patel', 'Tej Patel', 'Ayan Patel']],
  [38, 'Text Photo 1', ['Hirmal Patel', 'Pankit Patel', 'Nayal Patel']],
  [39, 'Text Photo 2', ['Jimmy Patel']],
  [6, 'Screenshot Photo 6', ['Nitin Pandya', 'Nina Pandya', 'Vidish Pandya', 'Riddhish Pandya']],
  [31, 'Screenshot Photo 30', ['Riddhish Pandya', 'Isha Rao']],
  [8, 'Screenshot Photo 8', ['Bhargav Shukla', 'Malini Shukla', 'Nidhi Shukla', 'Jigish Shukla', 'Naina Shukla', 'Kanchan Soni']],
  [7, 'Screenshot Photo 7', ['Bhargav Shukla', 'Malini Shukla', 'Nidhi Shukla', 'Jigish Shukla', 'Naina Shukla', 'Devangi Shukla', 'Smeet Patel']],
  [33, 'Screenshot Photo 32', ['Devangi Shukla', 'Smeet Patel']],
  [9, 'Screenshot Photo 9', [], 'Shukla & Pandya Family'],
  [36, 'Screenshot Photo 35', ['Jigish Shukla', 'Harsh Shukla', 'Devangi Shukla', 'Vidish Pandya', 'Riddhish Pandya', 'Dhyanam Shukla'], "Arshi's dad's cousins"],
  [11, 'Screenshot Photo 11', ['Maulin Bhatt', 'Maya Bhatt', 'Vishwa Bhatt', 'Bilva Bhatt']],
  [22, 'Screenshot Photo 21', ['Sanjana Bhatt']],
  [12, 'Screenshot Photo 12', ['Hitesh Chokshi', 'Hina Chokshi', 'Parth Chokshi', 'Dharti Patel']],
  [13, 'Screenshot Photo 13', ['Nitin Bhatt', 'Mona Bhatt', 'Parantap Bhatt', 'Divya Bhatt', 'Para Bhatt']],
  [14, 'Screenshot Photo 14', ['Jayshree Pandya', 'Dilip Pandya', 'Keya Pandya', 'Sunny Mehta']],
  [18, 'Screenshot Photo 18', ['Bhavesh Shukla', 'Parul Shukla', 'Samay Shukla', 'Param Shukla', 'Baa', 'Dada']],
  [21, 'Screenshot Photo 20', ['Satyen Mehta', 'Meena Mehta', 'Ravin Mehta']],
  [24, 'Screenshot Photo 23', ['Harish Jadeja', 'Rashmi Jadeja']],
  [23, 'Screenshot Photo 22', ['Dhaval Desai', 'Ranna Desai']],
  [25, 'Screenshot Photo 24', ['Digant Joshi', 'Geeta Joshi', 'Hiren Joshi', 'Malini Joshi', 'Mita Joshi', 'Baa']],
  [27, 'Screenshot Photo 26', ['Jayshree Mehta', 'Arohi Vyas', 'Adhya Vyas', 'Atharva Vyas', 'Paresh Mehta']],
  [57, '', ['Atul Pandya']],
  [29, 'Screenshot Photo 28', ['Devesh Pandit', 'Dutta Pandit']],
  [30, 'Screenshot Photo 29', ['Nita Pandya', 'Prachi Pandya', 'Ankit Pandya', 'Ayansh Pandya', 'Anaisha Pandya']],
  [32, 'Screenshot Photo 31', ['Rita Raval', 'Ashik Raval']],
  [37, 'Screenshot Photo 36', ['Vishwa Bhatt', 'Bilva Bhatt', 'Parth Chokshi', 'Param Shukla', 'Samay Shukla', 'Para Bhatt', 'Parantap Bhatt', 'Divya Bhatt', 'Sanjana Bhatt', 'Arohi Vyas', 'Keya Pandya', 'Sunny Mehta', 'Ravin Mehta', 'Smeet Patel'], "Arshi's cousins plus second cousins"],
  [40, 'Text Photo 3', ['Vishnu Patel', 'Lopa Patel', 'Vinit Patel', 'Sheena Patel', 'Aria Patel', 'Anaiya Patel', 'Indu Patel', 'Mukesh Patel', 'Jeet Patel', 'Yogi Patel', 'Jayden Patel', 'Avira Patel', 'Jaya Patel', 'Dilip Patel']],
  [41, 'Text Photo 4', ['Manibhai Patel', 'Usha Patel', 'Nagin Patel', 'Sudha Patel', 'Bhupendra Patel', 'Sharda Patel', 'Ashwin Patel', 'Kokila Patel', 'Bipin Patel', 'Rita Raval', 'Rasik Patel', 'Saraswati Patel']],
  [42, 'Text Photo 5', ['Dilip Patel', 'Sunita Patel']],
  [26, 'Screenshot Photo 25', ['Pamela Makadsi', 'Isha Patel', 'Krishna Patel', 'Nandita Patel', 'Saagar Bulsar']],
  [43, 'Text Photo 6', ['Nikit Patel', 'Krishna Patel'], 'Nikit Patel and Krishna Patel'],
  [34, 'Screenshot Photo 33', [], 'Bridesmaids'],
  [35, 'Screenshot Photo 34', [], 'Groomsmen'],
  [17, 'Screenshot Photo 17', ['Nimra Aziz', 'Saad Saeed', 'Yusuf Saeed']],
  [19, 'Screenshot Photo 19A', ['Binita Patel', 'Ronak Darji']],
  [16, 'Screenshot Photo 16', ['Tenzin Shakya', 'Jorge Velasquez Aguilar']],
  [15, 'Screenshot Photo 15', ['Samantha Swete', 'Ian Swete']],
  [20, 'Screenshot Photo 19B', ['Ketal Patel', 'Binita Patel']],
  [28, 'Screenshot Photo 27', ['Sushil Mistry']],
  [44, 'Text Photo 7', ['Shilp Patel']],
  [45, 'Text Photo 8', ['Dhweep Patel']],
  [46, 'Text Photo 9', ['Dhweep Patel', 'Natalie Bascomb']],
  [47, 'Text Photo 10', ['Prashis Shrestha']],
  [48, 'Text Photo 11', ['Prashis Shrestha', 'Dibya Shrestha']],
  [49, 'Text Photo 12', ['Ose Aligbe']],
  [50, 'Text Photo 13', ['Ose Aligbe', 'Chennelle Lawrence']],
  [51, 'Text Photo 14', ['Nitesh Gurraya']],
  [52, 'Text Photo 15', ['Nitesh Gurraya', 'Trena Seecharan']],
  [53, 'Text Photo 16', ['Parth Patel']],
  [54, 'Text Photo 17', ['Jenner Cole', 'Nikeeya Cole']],
  [55, 'Text Photo 18', ['Sashin Ramsaywack', 'Esha Puran']],
  [56, 'Text Photo 19', ['Sataish Gurraya', 'Suzy Gurraya']]
].map(([order, label, people, note = '']) => ({ order, label, people, note }));

const currentGroup = document.querySelector('#currentGroup');
const currentCard = document.querySelector('#currentCard');
const personSearch = document.querySelector('#personSearch');
const searchResults = document.querySelector('#searchResults');
const groupList = document.querySelector('#groupList');

function normalize(value) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function groupTitle(group) {
  return group.note || `Group ${group.order}`;
}

function guestList(people, className = '') {
  const list = document.createElement('ul');
  list.className = `people-list ${className}`;
  people.forEach(person => {
    const item = document.createElement('li');
    item.textContent = person;
    list.appendChild(item);
  });
  return list;
}

function renderCurrent(group) {
  currentCard.replaceChildren();
  const top = document.createElement('div');
  top.className = 'current-top';
  top.innerHTML = `<span class="group-number">${group.order}</span><div><p class="group-kicker">Current photo group</p><h3>${groupTitle(group)}</h3></div>`;
  currentCard.appendChild(top);
  currentCard.appendChild(guestList(group.people, 'current-people'));
}

function renderSearch(query) {
  searchResults.replaceChildren();
  if (!query) return;
  const matches = groups.filter(group => group.people.some(person => normalize(person).includes(query)));
  if (!matches.length) {
    searchResults.innerHTML = '<div class="empty-result">No photo groups found. Try a different spelling.</div>';
    return;
  }
  const heading = document.createElement('p');
  heading.className = 'result-count';
  heading.textContent = `${matches.length} group${matches.length === 1 ? '' : 's'} found`;
  searchResults.appendChild(heading);
  matches.forEach(group => {
    const card = document.createElement('article');
    card.className = 'result-card';
    card.innerHTML = `<div class="result-top"><div><span class="result-kicker">Photo group ${group.order}</span><h3>${groupTitle(group)}</h3></div><span class="table-badge">Group ${group.order}</span></div>`;
    card.appendChild(guestList(group.people, 'result-people'));
    searchResults.appendChild(card);
  });
}

function renderAllGroups() {
  groups.forEach(group => {
    const card = document.createElement('article');
    card.className = 'group-card';
    card.dataset.order = group.order;
    const heading = document.createElement('div');
    heading.className = 'group-card-heading';
    heading.innerHTML = `<span class="group-number">${group.order}</span><div><h3>${groupTitle(group)}</h3></div>`;
    card.appendChild(heading);
    card.appendChild(guestList(group.people));
    groupList.appendChild(card);
  });
}

groups.forEach((group, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = `Group ${group.order}`;
  currentGroup.appendChild(option);
});

currentGroup.addEventListener('change', event => {
  const selected = groups[Number(event.target.value)];
  renderCurrent(selected);
  document.querySelectorAll('.group-card').forEach(card => card.classList.toggle('is-current', Number(card.dataset.order) === selected.order));
});

personSearch.addEventListener('input', event => renderSearch(normalize(event.target.value.trim())));

renderCurrent(groups[0]);
renderAllGroups();
