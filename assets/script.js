const main = document.querySelector(".container");
$("#currentDay").text(moment().format("lll"));

const hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// current military time:
let H = moment().format("H");

hours.forEach((hour,i) => {
// The row hour:
    let rH = i+9;
    
    main.innerHTML += `
        <div class="row">
            <div class="hour">
                ${hour}
            </div>
            <textarea class="${rH<H ? 'past' : rH>H ? 'future' : 'present'}">
            </textarea>
            <div class="saveBtn">
              <i class="fa fa-lock fa-2x"></i>
            </div>
        </div>
    `
});

