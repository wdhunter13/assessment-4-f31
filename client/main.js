const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune")
  .then((res) => {
    const data = res.data;
    alert(data);
  });
};

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)

const newFortuneButton = document.getElementById('newFortuneButton')

const addFortune = () => {
  let fortuneInput = document.getElementById('new-fortune-input')

  let body = {
    fortune: fortuneInput.value
  }

  axios.post("http://localhost:4000/api/fortune", body)
  .then(res =>{
    alert(res.data)
  })
}

newFortuneButton.addEventListener('click', addFortune)

const updateFortuneButton = document.getElementById('updateFortuneButton')

const updateFortune = () => {
  let fortuneIndex = document.getElementById("update-fortune-index");
  let updatedFortuneInput = document.getElementById("update-fortune-input");

  let body = {
    fortune: updatedFortuneInput.value,
  };

  axios.put(`http://localhost:4000/api/fortune/${fortuneIndex.value}`, body)
  .then((res) => {
    alert(res.data);
    fortuneIndex.value = ''
    updatedFortuneInput = ''
  });
};

updateFortuneButton.addEventListener('click', updateFortune)


const deleteFortuneButton = document.getElementById("deleteFortuneButton");

const deleteFortune = () => {
  let deleteFortuneInput = document.getElementById("delete-fortune-input");

  axios
    .delete(`http://localhost:4000/api/fortune/${deleteFortuneInput.value}`)
    .then((res) => {
      alert(res.data);
      deleteFortuneInput = "";
    });
};

deleteFortuneButton.addEventListener("click", deleteFortune);