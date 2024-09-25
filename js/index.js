
document.getElementById('donate-for-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForNK = document.getElementById('donate-amount-inputField').value;
    const availableBalance = document.getElementById('available-balance').innerText;

    if (donateForNK > 0) {
        if (donateForNK < availableBalance) {
            const fundOfNoakhali = document.getElementById('donation-fund-of-noakhali').innerText;
            const newBalanceofNK = parseFloat(fundOfNoakhali) + parseFloat(donateForNK)
            
            const modal = document.getElementById('myModal');
            modal.classList.remove('hidden')

            document.getElementById('donation-fund-of-noakhali').innerText = parseFloat(newBalanceofNK);
            const newAvailbaleBalance = parseFloat(availableBalance) - parseFloat(donateForNK);

            document.getElementById('available-balance').innerText = newAvailbaleBalance;

            const colseModal = document.getElementById('close-modal-btn');
            colseModal.onclick = function () {
                modal.classList.add("hidden");
            }

        }
        else alert('you have not sufficient balance')
    }
    else alert('you have not sufficient balance')

})

// code for feni 
document.getElementById('donate-for-feni').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForFeni = document.getElementById('donate-amount-for-feni').value;
    const availableBalance = document.getElementById('available-balance').innerText;

    if (donateForFeni > 0) {
        if (donateForFeni < availableBalance) {

            const fundOfFeni = document.getElementById('donation-fund-of-feni').innerText;
            const newBalanceofFeni = parseFloat(fundOfFeni) + parseFloat(donateForFeni)
            const modal = document.getElementById('myModal');
            modal.classList.remove('hidden')
            document.getElementById('donation-fund-of-feni').innerText = parseFloat(newBalanceofFeni);
            const newAvailbaleBalance = parseFloat(availableBalance) - parseFloat(donateForFeni);

            document.getElementById('available-balance').innerText = newAvailbaleBalance;

            const colseModal = document.getElementById('close-modal-btn');
            colseModal.onclick = function () {
                modal.classList.add("hidden");
            }

        }
        else alert('you have not sufficient balance')
    }
    else alert('you have not sufficient balance')

})

// code for student 
document.getElementById('donate-btn-for-student').addEventListener('click', function (event) {
    event.preventDefault();

    const donateForStudent = document.getElementById('donate-amount-inputOf-student').value;
    const availableBalance = document.getElementById('available-balance').innerText;

    if (donateForStudent < availableBalance) {
        if (donateForStudent > 0) {
            const fundForStudent = document.getElementById('donation-fundOf-student').innerText;
            const newBalanceofStuFund = parseFloat(fundForStudent) + parseFloat(donateForStudent)

            const modal = document.getElementById('myModal');
            modal.classList.remove('hidden')

            document.getElementById('donation-fundOf-student').innerText = parseFloat(newBalanceofStuFund);
            const newAvailbaleBalance = parseFloat(availableBalance) - parseFloat(donateForStudent);

            document.getElementById('available-balance').innerText = newAvailbaleBalance;

            const colseModal = document.getElementById('close-modal-btn');
            colseModal.onclick = function () {
                modal.classList.add("hidden");
            }

        }
        else alert('you have not sufficient balance')
    }
    else alert('you have not sufficient balance')

})


// historyContainer code 

const historyTab = document.getElementById('history-id');
const donationTab = document.getElementById('donation-id');
historyTab.addEventListener('click', function () {
    historyTab.classList.add("text-black", "bg-[#B4F461]", "text-xl", "px-10")

    donationTab.classList.remove("text-black", "bg-[#B4F461]", "text-xl", "px-10")

    document.getElementById('section-card').classList.add("hidden");

    const historyItem = document.getElementById("div");
    historyItem.className = 'bg-white p-3 rounded-md border-1-2 border-indigo-500'
    historyItem.innerHTML =
        `
    <p class="text-xl text-gray-600">${new Date().toLocaleDateString()}</p>
    <p class="text-xl text-gray-600">${new Date().toLocaleDateString()}</p>
    `

    const historyContainer = document.getElementById("history-list")
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

donationTab.addEventListener('click',function(){
    donationTab.classList.add(
      "text-black", "bg-[#B4F461]", "text-xl", "px-10"  
    );
    historyTab.classList.remove("text-black", "bg-[#B4F461]", "text-xl", "px-10");

    document.getElementById('section-card').classList.remove("hidden")
})





