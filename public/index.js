async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    let response =  await fetch('http://127.0.0.1:9001/counter')
    let jsonObject =  await response.json()
    console.log(jsonObject)
    countValue = jsonObject.value

    function increment(){
        countValue++;
        countContainer.textContent = countValue;

        // fetch('http://localhost/counter', {
        //     method: 'Patch',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         'value': 'countValue'
        //     })
        // })
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()