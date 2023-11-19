function showTime(event) {
        if (event.target.value.length > 0) {
          let currentTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:mm A");
​
          alert(`It is ${currentTime} in ${event.target.value}`);
      }
    }
      let citySelect = document.queryselector("#cities");
      citySelect.addEventListener("change", showTime);
